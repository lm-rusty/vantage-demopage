'use server';

import { neon } from '@neondatabase/serverless';
import { randomInt } from 'crypto';

// Generates a cryptographically secure 18-digit numeric string
function generateLeadId(): string {
  let id = '';
  // Ensure the first digit is 1-9 so it's a true 18-digit number if parsed, though stored as string
  id += randomInt(1, 10).toString();
  for (let i = 0; i < 17; i++) {
    id += randomInt(0, 10).toString();
  }
  return id;
}

export async function submitLead(formData: any) {
  try {
    // 1. Validate environment configuration
    if (!process.env.DATABASE_URL) {
      throw new Error("Missing DATABASE_URL environment variable.");
    }
    const sql = neon(process.env.DATABASE_URL);

    // 2. Validate extracted fields
    const { 
      pickupZip, destZip, moveDate, moveSize, 
      firstName, lastName, email, phone 
    } = formData;

    if (!pickupZip || !destZip) throw new Error("Pickup and destination zips are required");
    if (!firstName || !lastName) throw new Error("First and last names are required");
    if (!phone) throw new Error("Phone number is required");
    
    // Simple email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) throw new Error("Invalid email format");

    // 3. Apply custom merge and formatting rules
    const name = [firstName, lastName]
      .map((v: string) => v.trim())
      .filter(Boolean)
      .join(" ");
      
    const leadId = generateLeadId();
    
    // Server-generated timestamp in a standard Postgres-compatible format (ISO 8601)
    const dateSubmitted = new Date().toISOString(); 

    // 4. Secure Insert into the Database
    // Adjusted to exactly match the real table schema: 'Leads'
    await sql`
      INSERT INTO "Leads" (
        pickup_zip, 
        delivery_zip, 
        name, 
        move_size, 
        move_date, 
        phone, 
        email, 
        leadid, 
        date_submitted
      ) VALUES (
        ${pickupZip}, 
        ${destZip}, 
        ${name}, 
        ${moveSize}, 
        ${moveDate}, 
        ${phone}, 
        ${email}, 
        ${leadId}, 
        ${dateSubmitted}
      )
    `;

    return { success: true, leadId };
  } catch (error: any) {
    console.error("Failed to insert lead:", error);
    return { success: false, error: error.message || "An unexpected validation or database error occurred." };
  }
}
