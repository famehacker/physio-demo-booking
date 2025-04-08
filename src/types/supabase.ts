
export type Database = {
  public: {
    Tables: {
      bookings: {
        Row: {
          id: string;
          bookingid: string;
          name: string;
          email: string;
          phone: string;
          date: string;
          preferredtime: string;
          servicetype: string;
          concerns: string | null;
          createdat: string;
        };
        Insert: {
          id?: string;
          bookingid: string;
          name: string;
          email: string;
          phone: string;
          date: string;
          preferredtime: string;
          servicetype: string;
          concerns?: string | null;
          createdat?: string;
        };
        Update: {
          id?: string;
          bookingid?: string;
          name?: string;
          email?: string;
          phone?: string;
          date?: string;
          preferredtime?: string;
          servicetype?: string;
          concerns?: string | null;
          createdat?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};
