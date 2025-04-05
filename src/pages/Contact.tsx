
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import ContactForm, { ContactFormData } from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import TeamMembers, { teamMembersData } from "@/components/contact/TeamMembers";
import SubmissionSuccess from "@/components/contact/SubmissionSuccess";
import LocationMap from "@/components/contact/LocationMap";

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (submittedData: ContactFormData) => {
    setIsSubmitting(true);
    setFormData(submittedData);

    // Simulate form submission
    setTimeout(() => {
      console.log(submittedData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-28 pb-16">
        <div className="page-container">
          <SubmissionSuccess formData={formData} />
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
              <ContactForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <ContactInfo />
              <TeamMembers members={teamMembersData} />
            </div>
          </div>

          <LocationMap />
        </div>
      </div>
    </div>
  );
};

export default Contact;
