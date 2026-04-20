"use client";

import { useEffect, useState, useRef } from "react";
import { X, PhoneCall } from "lucide-react";
import { usePathname } from "next/navigation";

// For tracking
declare global {
  interface Window {
    dataLayer?: any[];
  }
}

interface PromoPopupProps {
  phoneDisplay?: string;
  phoneLink?: string;
}

export default function PromoPopup({ 
  phoneDisplay = "(888) 486-2499", 
  phoneLink = "tel:888-486-2499" 
}: PromoPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const modalRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Suppression on thank you page
    if (pathname?.includes("thank-you")) return;

    // Check session caps and suppression triggers
    const isShown = sessionStorage.getItem("vantage_promo_shown");
    const isFormActive = sessionStorage.getItem("vantage_form_active");
    const isFormSubmitted = sessionStorage.getItem("vantage_form_submitted");

    if (isShown === "true" || isFormActive === "true" || isFormSubmitted === "true") {
      return;
    }

    let searchParams = "";
    if (typeof window !== "undefined") {
      searchParams = window.location.search;
    }

    const triggerPopup = () => {
      // Re-check just in case form was started during the wait
      const active = sessionStorage.getItem("vantage_form_active");
      const submitted = sessionStorage.getItem("vantage_form_submitted");
      if (active === "true" || submitted === "true") return;

      setIsOpen(true);
      sessionStorage.setItem("vantage_promo_shown", "true");
      previouslyFocusedElement.current = document.activeElement as HTMLElement;

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "popup_viewed",
        pageUrl: window.location.href,
        searchParams: searchParams
      });
    };

    // Trigger timer: 10 seconds
    const timer = setTimeout(triggerPopup, 10000);

    // Trigger on exit intent
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        // Exit intent detected
        // check if already open, or already shown
        if (!sessionStorage.getItem("vantage_promo_shown")) {
          clearTimeout(timer);
          triggerPopup();
        }
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [pathname]);

  useEffect(() => {
    // Focus trap handling when modal opens/closes
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    } else if (!isOpen && previouslyFocusedElement.current) {
      previouslyFocusedElement.current.focus();
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "popup_dismissed",
      pageUrl: window.location.href,
    });
  };

  const handleCallClick = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "popup_call_clicked",
      pageUrl: window.location.href,
    });
  };

  const handleQuoteClick = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "popup_quote_clicked",
      pageUrl: window.location.href,
    });
    setIsOpen(false);
    
    // Scroll to the top of the page smoothly where the form is located
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="promo-title"
    >
      <div 
        ref={modalRef}
        tabIndex={-1}
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border-t-8 border-vantage-yellow animate-slide-up focus:outline-none"
        onKeyDown={(e) => {
          if (e.key === "Escape") handleClose();
        }}
      >
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10"
          aria-label="Close popup"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 md:p-10 text-center">
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center justify-center w-16 h-16 bg-vantage-yellow rounded-full text-vantage-dark shadow-md">
              <span className="text-3xl font-extrabold">$</span>
            </span>
          </div>

          <h2 id="promo-title" className="text-3xl font-extrabold text-vantage-dark mb-4">
            Get $500 Off Your Move
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Call now to speak with a moving coordinator and claim today’s discount.
          </p>

          <div className="space-y-4">
            <a 
              href={phoneLink}
              onClick={handleCallClick}
              className="w-full flex items-center justify-center gap-3 bg-vantage-yellow hover:bg-[#e6a800] text-vantage-dark font-extrabold py-4 px-6 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-xl"
            >
              <PhoneCall className="w-6 h-6" />
              {phoneDisplay === "(888) 486-2499" ? "Call Now" : `Call ${phoneDisplay}`}
            </a>

            <button 
              onClick={handleQuoteClick}
              className="w-full bg-vantage-blue hover:bg-vantage-dark text-white font-bold py-4 px-6 rounded-xl transition-colors text-lg"
            >
              Get My Free Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
