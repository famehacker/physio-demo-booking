
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { ContactFormData } from "./ContactForm";

interface SubmissionSuccessProps {
  formData: ContactFormData;
}

const SubmissionSuccess = ({ formData }: SubmissionSuccessProps) => {
  return (
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
  );
};

export default SubmissionSuccess;
