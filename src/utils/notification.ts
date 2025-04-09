
import { supabase } from '@/integrations/supabase/client';

export const sendSMSNotification = async (phone: string, name: string, bookingId: string, date: string, time: string) => {
  try {
    // Call Supabase Edge Function to send SMS
    const { data, error } = await supabase.functions.invoke('send-sms', {
      body: {
        phone,
        message: `Hi ${name}, your demo session has been successfully booked! Your booking ID is ${bookingId}. Session scheduled for ${date} at ${time}. Thank you for choosing PhysicoTech.`
      }
    });
    
    if (error) {
      console.error('Error sending SMS:', error);
      return { success: false, error };
    }
    
    console.log('SMS notification sent successfully');
    return { success: true, data };
  } catch (error) {
    console.error('Error sending SMS:', error);
    return { success: false, error };
  }
};

export const sendBookingConfirmationSMS = async (phone: string, name: string, bookingId: string, date: string, time: string, serviceType: string) => {
  try {
    // Call Supabase Edge Function to send SMS
    const { data, error } = await supabase.functions.invoke('send-sms', {
      body: {
        phone,
        message: `Hi ${name}, your ${serviceType} session has been scheduled! ID: ${bookingId}. Date: ${date} at ${time}. Need to reschedule? Call us at (123) 456-7890. PhysicoTech team.`
      }
    });
    
    if (error) {
      console.error('Error sending confirmation SMS:', error);
      return { success: false, error };
    }
    
    console.log('Booking confirmation SMS sent successfully');
    return { success: true, data };
  } catch (error) {
    console.error('Error sending confirmation SMS:', error);
    return { success: false, error };
  }
};
