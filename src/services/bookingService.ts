
import { supabase } from '@/lib/supabase';
import { Booking } from '@/types/booking';
import { sendSMSNotification } from '@/utils/notification';

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
    
    // Insert booking into Supabase
    const { data, error } = await supabase
      .from('bookings')
      .insert(newBooking)
      .select()
      .single();
    
    if (error) {
      console.error('Error creating booking:', error);
      return { success: false, error };
    }
    
    // Send SMS notification
    await sendSMSNotification(
      bookingData.phone,
      bookingData.name,
      bookingId,
      new Date(bookingData.date).toLocaleDateString(),
      bookingData.preferredTime
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
