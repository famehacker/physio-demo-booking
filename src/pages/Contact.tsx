
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageSquare,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log(formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
    }, 1500);
  };

  const contactInfo = [
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

  const teamMembers = [
    {
      name: "Dr. Priya Sharma",
      role: "Sports Rehabilitation Specialist",
      email: "priya.sharma@physicotech.in",
      phone: "+91 98765 43210"
    },
    {
      name: "Dr. Rajesh Patel",
      role: "Neurological Rehabilitation Expert",
      email: "rajesh.patel@physicotech.in",
      phone: "+91 98765 43211"
    },
    {
      name: "Dr. Aarti Desai",
      role: "Orthopedic Therapy Specialist",
      email: "aarti.desai@physicotech.in",
      phone: "+91 98765 43212"
    },
    {
      name: "Dr. Vikram Singh",
      role: "Geriatric Care Expert",
      email: "vikram.singh@physicotech.in",
      phone: "+91 98765 43213"
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-28 pb-16">
        <div className="page-container">
          <div className="max-w-xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold font-display mb-4">
              Message Sent Successfully!
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Thank you for reaching out to PhysicoTech. Our team will review your message and get back to you as soon as possible.
            </p>
            <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
              <h3 className="font-semibold mb-4 text-center">Message Details</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="font-medium">{formData.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{formData.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Subject</p>
                  <p className="font-medium">{formData.subject}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Message</p>
                  <p className="font-medium">{formData.message}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <Button asChild className="bg-physicotech-600 hover:bg-physicotech-700">
                <a href="/">Return to Homepage</a>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="border-physicotech-600 text-physicotech-600 hover:bg-physicotech-50"
              >
                <a href="/book-demo">Book a Demo</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="page-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-700">
              Have questions about our services? Contact our team for more information or to schedule a consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="mb-1 block">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Rahul Sharma"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="mb-1 block">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="rahul@example.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="mb-1 block">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="9876543210"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject" className="mb-1 block">Subject</Label>
                    <Select 
                      onValueChange={(value) => handleSelectChange("subject", value)}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                        <SelectItem value="Appointment Question">Appointment Question</SelectItem>
                        <SelectItem value="Service Information">Service Information</SelectItem>
                        <SelectItem value="Pricing & Packages">Pricing & Packages</SelectItem>
                        <SelectItem value="Feedback">Feedback</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="message" className="mb-1 block">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="How can we help you?"
                      rows={5}
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-physicotech-600 hover:bg-physicotech-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 gap-4 mb-8">
                {contactInfo.map((item, index) => (
                  <Card key={index} className="border-none shadow-md">
                    <CardContent className="p-4 flex items-start">
                      <div className="w-10 h-10 rounded-full bg-physicotech-100 flex items-center justify-center text-physicotech-600 mr-4 flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-medium">{item.title}</h3>
                        <p className="text-gray-600 mb-2">{item.details}</p>
                        <a 
                          href={item.link} 
                          className="text-physicotech-600 hover:text-physicotech-700 font-medium text-sm inline-flex items-center"
                        >
                          {item.linkText}
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <MessageSquare className="h-5 w-5 mr-2 text-physicotech-600" />
                  <h3 className="font-semibold">Direct Contact</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Contact our physiotherapists directly for specialized inquiries:
                </p>
                <div className="space-y-4">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="border-b border-gray-200 pb-3 last:border-0 last:pb-0">
                      <p className="font-medium">{member.name}</p>
                      <p className="text-sm text-gray-500 mb-1">{member.role}</p>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                        <a 
                          href={`mailto:${member.email}`} 
                          className="text-physicotech-600 hover:text-physicotech-700"
                        >
                          {member.email}
                        </a>
                        <a 
                          href={`tel:${member.phone}`} 
                          className="text-physicotech-600 hover:text-physicotech-700"
                        >
                          {member.phone}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="aspect-[2/1] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.7107530793!2d72.41492855!3d23.0201119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1662827000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PhysicoTech Location in Ahmedabad"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
