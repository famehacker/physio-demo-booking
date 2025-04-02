
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { 
  CalendarCheck, 
  Clock, 
  User,
  CreditCard, 
  CheckCircle,
  Calendar as CalendarIcon,
  Users
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Booking = () => {
  const [selectedTab, setSelectedTab] = useState("appointment");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    therapist: "",
    serviceType: "",
    timeSlot: "",
    notes: "",
    packageType: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const therapists = [
    "Dr. Sarah Johnson - Sports Specialist",
    "Dr. Michael Rodriguez - Neurological Rehabilitation",
    "Dr. Emily Chen - Orthopedic Therapy",
    "Dr. David Wilson - Geriatric Care",
  ];

  const serviceTypes = [
    "General Assessment",
    "Sports Injury",
    "Back & Neck Pain",
    "Joint & Muscle Pain",
    "Post-Surgery Rehabilitation",
    "Neurological Conditions",
  ];

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", 
    "12:00 PM", "01:00 PM", "02:00 PM", 
    "03:00 PM", "04:00 PM", "05:00 PM"
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

    if (!date && selectedTab === "appointment") {
      toast({
        title: "Please select a date",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      console.log({ ...formData, date, type: selectedTab });
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Booking successful!",
        description: selectedTab === "appointment" 
          ? "Your appointment has been scheduled." 
          : "Your subscription package has been purchased.",
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
              {selectedTab === "appointment" 
                ? "Your Appointment is Confirmed!" 
                : "Your Package is Ready!"}
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              {selectedTab === "appointment"
                ? "Thank you for scheduling an appointment with PhysicoTech. We've sent a confirmation to your email with all the details."
                : "Thank you for purchasing a package with PhysicoTech. We've sent the package details to your email."}
            </p>
            
            {selectedTab === "appointment" && (
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <div className="flex items-center justify-center mb-4">
                  <CalendarCheck className="mr-2 h-5 w-5 text-physicotech-600" />
                  <span className="font-medium">Appointment Details</span>
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
                    <p className="text-sm text-gray-500">Therapist</p>
                    <p className="font-medium">{formData.therapist.split(" - ")[0]}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Service</p>
                    <p className="font-medium">{formData.serviceType}</p>
                  </div>
                </div>
              </div>
            )}
            
            {selectedTab === "package" && (
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <div className="flex items-center justify-center mb-4">
                  <Users className="mr-2 h-5 w-5 text-physicotech-600" />
                  <span className="font-medium">Package Details</span>
                </div>
                <div className="text-left">
                  <div className="mb-3">
                    <p className="text-sm text-gray-500">Package Type</p>
                    <p className="font-medium">{formData.packageType}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Purchased By</p>
                    <p className="font-medium">{formData.name}</p>
                  </div>
                </div>
              </div>
            )}
            
            <p className="text-gray-600 mb-6">
              {selectedTab === "appointment"
                ? "Our team is looking forward to helping you on your wellness journey."
                : "You can now schedule your sessions included in the package at your convenience."}
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
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Book Your Physiotherapy Session
            </h1>
            <p className="text-lg text-gray-700">
              Schedule an appointment or choose a package that suits your needs.
            </p>
          </div>

          <Tabs defaultValue="appointment" onValueChange={setSelectedTab}>
            <TabsList className="grid grid-cols-2 mb-8">
              <TabsTrigger value="appointment" className="text-base py-3">
                <CalendarIcon className="mr-2 h-4 w-4" />
                Single Appointment
              </TabsTrigger>
              <TabsTrigger value="package" className="text-base py-3">
                <Users className="mr-2 h-4 w-4" />
                Subscription Package
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="appointment">
              <Card>
                <CardHeader>
                  <CardTitle>Schedule an Appointment</CardTitle>
                  <CardDescription>
                    Book a one-time session with one of our expert physiotherapists.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <Label htmlFor="name" className="mb-1 block">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
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
                          placeholder="john@example.com"
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
                          placeholder="(123) 456-7890"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="serviceType" className="mb-1 block">Service Type</Label>
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
                      <div>
                        <Label htmlFor="therapist" className="mb-1 block">Preferred Therapist</Label>
                        <Select 
                          onValueChange={(value) => handleSelectChange("therapist", value)}
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select therapist" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="any">Any Available Therapist</SelectItem>
                            {therapists.map((therapist) => (
                              <SelectItem key={therapist} value={therapist}>
                                {therapist}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="timeSlot" className="mb-1 block">Preferred Time</Label>
                        <Select 
                          onValueChange={(value) => handleSelectChange("timeSlot", value)}
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="mb-6">
                      <Label className="mb-2 block">Select Appointment Date</Label>
                      <div className="border rounded-lg p-4 bg-gray-50">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          className="mx-auto"
                          disabled={{ before: new Date() }}
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <Label htmlFor="notes" className="mb-1 block">Additional Notes</Label>
                      <Textarea
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder="Any special requirements or information about your condition..."
                        rows={3}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="bg-physicotech-600 hover:bg-physicotech-700 w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Processing..." : "Book Appointment"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="package">
              <Card>
                <CardHeader>
                  <CardTitle>Purchase a Subscription Package</CardTitle>
                  <CardDescription>
                    Choose from our monthly or yearly packages for regular therapy sessions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <Label htmlFor="name" className="mb-1 block">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
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
                          placeholder="john@example.com"
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
                          placeholder="(123) 456-7890"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="packageType" className="mb-1 block">Package Type</Label>
                        <Select 
                          onValueChange={(value) => handleSelectChange("packageType", value)}
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select package" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Monthly Package - $299">Monthly Package - $299</SelectItem>
                            <SelectItem value="Yearly Package - $2,799">Yearly Package - $2,799</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div className="bg-gray-50 p-6 rounded-lg border">
                        <h3 className="font-semibold text-lg mb-4">Monthly Package</h3>
                        <p className="text-2xl font-bold mb-2">$299<span className="text-sm font-normal text-gray-500">/month</span></p>
                        <ul className="space-y-2 mb-4">
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>4 sessions per month</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Priority booking</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Regular progress assessments</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-physicotech-50 p-6 rounded-lg border border-physicotech-200">
                        <div className="bg-physicotech-600 text-white text-xs font-bold px-2 py-1 rounded absolute -mt-10 uppercase">Best Value</div>
                        <h3 className="font-semibold text-lg mb-4">Yearly Package</h3>
                        <p className="text-2xl font-bold mb-2">$2,799<span className="text-sm font-normal text-gray-500">/year</span></p>
                        <ul className="space-y-2 mb-4">
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>48 sessions per year</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>2 free specialized sessions</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Exclusive workshops access</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Save $389 compared to monthly</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="border-t pt-6 mb-6">
                      <Label className="mb-3 block font-medium">Payment Information</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="cardName" className="mb-1 block">Name on Card</Label>
                          <Input id="cardName" placeholder="John Doe" required />
                        </div>
                        <div>
                          <Label htmlFor="cardNumber" className="mb-1 block">Card Number</Label>
                          <div className="relative">
                            <CreditCard className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input id="cardNumber" placeholder="XXXX XXXX XXXX XXXX" className="pl-10" required />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="expiry" className="mb-1 block">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" required />
                        </div>
                        <div>
                          <Label htmlFor="cvc" className="mb-1 block">CVC</Label>
                          <Input id="cvc" placeholder="123" required />
                        </div>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="bg-physicotech-600 hover:bg-physicotech-700 w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Processing..." : "Purchase Package"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Booking;
