"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';

const formSchema = z.object({
  pickupZip: z.string().regex(/^\d{5}$/, "Must be a 5-digit zip code"),
  destZip: z.string().regex(/^\d{5}$/, "Must be a 5-digit zip code"),
  moveDate: z.string().refine((dateString) => {
    const selectedDate = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate >= today;
  }, "Move date cannot be in the past"),
  moveSize: z.string().min(1, "Please select a move size"),
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
});

type FormData = z.infer<typeof formSchema>;

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { register, handleSubmit, trigger, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onTouched'
  });

  const handleNext = async () => {
    const fieldsToValidate = 
      step === 1 ? ['pickupZip', 'destZip'] as const :
      step === 2 ? ['moveDate', 'moveSize'] as const : [] as const;
      
    const isStepValid = await trigger(fieldsToValidate);
    if (isStepValid) setStep((s) => s + 1);
  };

  const onSubmit = (data: FormData) => {
    console.log("Form Submitted:", data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center animate-fade-in border-t-4 border-vantage-blue w-full max-w-md mx-auto">
        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-vantage-dark mb-2">Quote Requested!</h3>
        <p className="text-gray-600">One of our moving specialists will contact you shortly to provide your customized estimate.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 animate-fade-in w-full max-w-md mx-auto border-t-4 border-vantage-yellow relative">
      
      <div className="text-center mb-6">
        <h2 className="text-2xl font-extrabold text-vantage-dark mb-4">Get My Free Quote Now</h2>
        <div className="inline-flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
          <span className="flex text-yellow-500">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
          </span>
          <span className="text-sm font-semibold text-vantage-dark ml-1">4.8/5</span>
          <span className="text-sm font-semibold text-gray-400">|</span>
          <span className="text-sm font-semibold text-vantage-dark">BBB Rating</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="flex gap-2 mb-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className={`h-2 flex-1 rounded-full transition-colors ${step >= i ? 'bg-vantage-blue' : 'bg-gray-100'}`} />
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        
        {/* Step 1: Location */}
        {step === 1 && (
          <div className="animate-fade-in space-y-4">
            <h3 className="text-xl font-bold text-vantage-dark mb-4">Where are you moving?</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Pickup ZIP Code</label>
              <input type="text" maxLength={5} placeholder="e.g. 10001" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-vantage-blue outline-none transition-all" {...register('pickupZip')} />
              {errors.pickupZip && <p className="text-red-500 text-sm mt-1">{errors.pickupZip.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Destination ZIP Code</label>
              <input type="text" maxLength={5} placeholder="e.g. 90210" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-vantage-blue outline-none transition-all" {...register('destZip')} />
              {errors.destZip && <p className="text-red-500 text-sm mt-1">{errors.destZip.message}</p>}
            </div>
          </div>
        )}

        {/* Step 2: Info */}
        {step === 2 && (
          <div className="animate-fade-in space-y-4">
            <h3 className="text-xl font-bold text-vantage-dark mb-4">When are you moving?</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Move Date</label>
              <input type="date" min={new Date().toISOString().split('T')[0]} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-vantage-blue outline-none transition-all" {...register('moveDate')} />
              {errors.moveDate && <p className="text-red-500 text-sm mt-1">{errors.moveDate.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Move Size</label>
              <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-vantage-blue outline-none transition-all bg-white" {...register('moveSize')} defaultValue="">
                <option value="" disabled>Select move size</option>
                <option value="Studio">Studio</option>
                <option value="2 bedrooms">2 bedrooms</option>
                <option value="3 bedrooms">3 bedrooms</option>
                <option value="4 bedrooms">4 bedrooms</option>
                <option value="5+ bedrooms">5+ bedrooms</option>
                <option value="Office">Office</option>
              </select>
              {errors.moveSize && <p className="text-red-500 text-sm mt-1">{errors.moveSize.message}</p>}
            </div>
          </div>
        )}

        {/* Step 3: Estimate */}
        {step === 3 && (
          <div className="animate-fade-in space-y-4">
            <h3 className="text-xl font-bold text-vantage-dark mb-4">Your Contact Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input type="text" placeholder="John" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-vantage-blue outline-none transition-all" {...register('firstName')} />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input type="text" placeholder="Doe" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-vantage-blue outline-none transition-all" {...register('lastName')} />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-vantage-blue outline-none transition-all" {...register('email')} />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input type="tel" placeholder="(555) 123-4567" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-vantage-blue outline-none transition-all" {...register('phone')} />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
            </div>
          </div>
        )}

        <div className="pt-2">
          {step < 3 ? (
            <button type="button" onClick={handleNext} className="w-full bg-vantage-blue hover:bg-vantage-dark text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-lg">
              Next Step <ArrowRight className="w-5 h-5" />
            </button>
          ) : (
            <button type="submit" className="w-full bg-vantage-yellow hover:bg-vantage-dark-yellow text-vantage-dark font-bold py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-lg transform hover:-translate-y-0.5">
              Get Quote Now <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
        
        <div className="mt-6 text-center">
          <a href="tel:888-111-2222" className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-lg w-full mb-4">
            Call 888-111-2222 for $500 off!
          </a>
        </div>
        
        <p className="text-[10px] text-gray-400 leading-tight text-center">
          By submitting this form, you acknowledge that Vantage Movers LLC may contact you with updates, offers, and information relevant to your moving process. You also agree to our privacy policy.
        </p>
      </form>
    </div>
  );
}
