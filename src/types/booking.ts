
export interface Booking {
  id?: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  preferredTime: string;
  serviceType: string;
  concerns: string;
  createdAt?: string;
  bookingId?: string;
}

export interface BookingDbRecord {
  id: string;
  bookingid: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  preferredtime: string;
  servicetype: string;
  concerns?: string;
  createdat: string;
}
