
import { Card, CardContent } from "@/components/ui/card";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageSquare,
  ArrowRight
} from "lucide-react";

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  details: string;
  link: string;
  linkText: string;
}

export const contactInfoData = [
  {
    icon: <MapPin className="h-5 w-5" />,
    title: "Location",
    details: "123 Healthcare Avenue, Navrangpura, Ahmedabad, Gujarat 380009",
    link: "https://maps.google.com",
    linkText: "Get Directions"
  },
  {
    icon: <Phone className="h-5 w-5" />,
    title: "Phone",
    details: "+91 98765 43210",
    link: "tel:+919876543210",
    linkText: "Call Now"
  },
  {
    icon: <Mail className="h-5 w-5" />,
    title: "Email",
    details: "info@physicotech.in",
    link: "mailto:info@physicotech.in",
    linkText: "Send Email"
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Hours",
    details: "Mon-Sat: 8am-7pm, Sun: 9am-5pm",
    link: "/booking",
    linkText: "Book Appointment"
  }
];

const ContactInfoItem = ({ icon, title, details, link, linkText }: ContactInfoItemProps) => (
  <Card className="border-none shadow-md">
    <CardContent className="p-4 flex items-start">
      <div className="w-10 h-10 rounded-full bg-physicotech-100 flex items-center justify-center text-physicotech-600 mr-4 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-gray-600 mb-2">{details}</p>
        <a 
          href={link} 
          className="text-physicotech-600 hover:text-physicotech-700 font-medium text-sm inline-flex items-center"
        >
          {linkText}
          <ArrowRight className="ml-1 h-3 w-3" />
        </a>
      </div>
    </CardContent>
  </Card>
);

const ContactInfo = () => {
  return (
    <div className="grid grid-cols-1 gap-4 mb-8">
      {contactInfoData.map((item, index) => (
        <ContactInfoItem key={index} {...item} />
      ))}
    </div>
  );
};

export default ContactInfo;
