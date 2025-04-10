
import { supabase } from '@/integrations/supabase/client';
import { Booking } from '@/types/booking';
import { sendSMSNotification, sendBookingConfirmationSMS } from '@/utils/notification';

export const createBooking = async (bookingData: Booking): Promise<{ success: boolean; data?: any; error?: any; bookingId?: string }> => {
  try {
    // Generate a unique booking ID
    const bookingId = `PT-${Math.floor(100000 + Math.random() * 900000)}`;
    
    // Add metadata to booking
    const newBooking = {
      ...bookingData,
      bookingId,
      createdAt: new Date().toISOString(),
    };
    
    // Insert booking into Supabase with service_role key to bypass RLS
    // This ensures bookings can be created without authentication
    const { data, error } = await supabase
      .from('bookings')
      .insert({
        bookingid: bookingId,
        name: bookingData.name,
        email: bookingData.email, 
        phone: bookingData.phone,
        date: bookingData.date,
        preferredtime: bookingData.preferredTime,
        servicetype: bookingData.serviceType,
        concerns: bookingData.concerns,
        bodyparts: bookingData.bodyParts || [],
        createdat: new Date().toISOString()
      });
    
    if (error) {
      console.error('Error creating booking:', error);
      return { success: false, error };
    }
    
    // Format the date for display
    const formattedDate = new Date(bookingData.date).toLocaleDateString();
    
    // Send SMS notification using the new confirmaton function
    await sendBookingConfirmationSMS(
      bookingData.phone,
      bookingData.name,
      bookingId,
      formattedDate,
      bookingData.preferredTime,
      bookingData.serviceType
    );
    
    return { 
      success: true, 
      data, 
      bookingId 
    };
  } catch (error) {
    console.error('Error in createBooking:', error);
    return { success: false, error };
  }
};
