
import { MessageSquare } from "lucide-react";

export interface TeamMember {
  name: string;
  role: string;
  email: string;
  phone: string;
}

export const teamMembersData = [
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

interface TeamMembersProps {
  members: TeamMember[];
}

const TeamMembers = ({ members }: TeamMembersProps) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <div className="flex items-center mb-4">
        <MessageSquare className="h-5 w-5 mr-2 text-physicotech-600" />
        <h3 className="font-semibold">Direct Contact</h3>
      </div>
      <p className="text-gray-600 mb-4 text-sm">
        Contact our physiotherapists directly for specialized inquiries:
      </p>
      <div className="space-y-4">
        {members.map((member, index) => (
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
  );
};

export default TeamMembers;
