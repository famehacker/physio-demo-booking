
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ContactFormProps {
  onSubmit: (formData: ContactFormData) => void;
  isSubmitting: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactForm = ({ onSubmit, isSubmitting }: ContactFormProps) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
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
  );
};

export default ContactForm;
