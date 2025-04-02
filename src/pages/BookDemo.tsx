
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  CalendarCheck, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  CheckCircle, 
  AlarmClock 
} from "lucide-react";

const BookDemo = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    timeSlot: "",
    serviceType: "",
    concerns: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", 
    "12:00 PM", "01:00 PM", "02:00 PM", 
    "03:00 PM", "04:00 PM", "05:00 PM"
  ];
  
  const serviceTypes = [
    "General Assessment",
    "Sports Injury",
    "Back & Neck Pain",
    "Joint & Muscle Pain",
    "Post-Surgery Rehabilitation",
    "Neurological Conditions",
  ];

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

    if (!date) {
      toast({
        title: "Please select a date",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      console.log({ ...formData, date });
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Demo booking successful!",
        description: "We've received your request and will contact you shortly.",
      });
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-28 pb-16">
        <div className="page-container">
          <div className="max-w-xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold font-display mb-4">
              Your Demo Session is Booked!
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Thank you for scheduling a demo session with PhysicoTech. We've sent a confirmation to your email with all the details.
            </p>
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <div className="flex items-center justify-center mb-4">
                <CalendarCheck className="mr-2 h-5 w-5 text-physicotech-600" />
                <span className="font-medium">Booking Details</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-left">
                <div>
                  <p className="text-sm text-gray-500">Date</p>
                  <p className="font-medium">{date?.toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Time</p>
                  <p className="font-medium">{formData.timeSlot}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Service</p>
                  <p className="font-medium">{formData.serviceType}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="font-medium">{formData.name}</p>
                </div>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Our team will contact you shortly to confirm your appointment and answer any questions you might have.
            </p>
            <Button asChild className="bg-physicotech-600 hover:bg-physicotech-700">
              <a href="/">Return to Homepage</a>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="page-container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Book Your Free Demo Session
            </h1>
            <p className="text-lg text-gray-700">
              Experience our professional physiotherapy services with a complimentary first session. No commitment required.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="bg-gradient-to-br from-physicotech-600 to-mint-600 p-8 text-white">
                <h3 className="text-xl font-semibold mb-6">What to Expect</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                    <span>30-minute assessment with a specialist</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Discussion of your specific concerns</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Initial treatment recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                    <span>No obligation to continue</span>
                  </li>
                </ul>

                <div className="mt-12 pt-6 border-t border-white/20">
                  <h4 className="font-medium mb-3">First 3 Sessions Free</h4>
                  <p className="text-sm opacity-90">
                    After your demo, you can continue with two more free sessions to experience the full benefits of our treatment approach.
                  </p>
                </div>
              </div>

              <div className="p-8 col-span-2">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <Label htmlFor="name" className="mb-2 block">
                        Full Name
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email" className="mb-2 block">
                        Email Address
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="phone" className="mb-2 block">
                        Phone Number
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(123) 456-7890"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="serviceType" className="mb-2 block">
                        Service Type
                      </Label>
                      <Select 
                        onValueChange={(value) => handleSelectChange("serviceType", value)}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceTypes.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <Label className="mb-2 block">Select Date & Time</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center mb-4">
                          <CalendarCheck className="mr-2 h-5 w-5 text-physicotech-600" />
                          <span className="font-medium">Select Date</span>
                        </div>
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          className="rounded-md border"
                          disabled={{ before: new Date() }}
                        />
                      </div>
                      
                      <div>
                        <div className="flex items-center mb-4">
                          <Clock className="mr-2 h-5 w-5 text-physicotech-600" />
                          <span className="font-medium">Select Time Slot</span>
                        </div>
                        <RadioGroup 
                          onValueChange={(value) => handleSelectChange("timeSlot", value)}
                          className="grid grid-cols-3 gap-3"
                        >
                          {timeSlots.map((time) => (
                            <div key={time} className="flex items-center space-x-2">
                              <RadioGroupItem value={time} id={time} />
                              <Label htmlFor={time} className="cursor-pointer">
                                {time}
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <Label htmlFor="concerns" className="mb-2 block">
                      Your Concerns or Questions
                    </Label>
                    <Textarea
                      id="concerns"
                      name="concerns"
                      value={formData.concerns}
                      onChange={handleInputChange}
                      placeholder="Tell us about your condition or any questions you have..."
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="bg-physicotech-600 hover:bg-physicotech-700 w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Booking..." : "Book Your Free Demo"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDemo;
