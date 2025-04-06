
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Image, 
  Play, 
  Info 
} from "lucide-react";

const Gallery = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const galleries = {
    facilities: [
      {
        id: "facility1",
        src: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?auto=format&fit=crop&q=80",
        alt: "Modern physiotherapy treatment room",
        title: "Treatment Room",
        description: "Our spacious and well-equipped treatment rooms provide a comfortable environment for your therapy sessions."
      },
      {
        id: "facility2",
        src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80",
        alt: "Exercise equipment in the gym area",
        title: "Exercise Area",
        description: "Specialized exercise equipment for rehabilitation and strength training."
      },
      {
        id: "facility3",
        src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80",
        alt: "Reception area",
        title: "Reception",
        description: "Our welcoming reception area where your journey to wellness begins."
      },
      {
        id: "facility4",
        src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80",
        alt: "Hydrotherapy pool",
        title: "Hydrotherapy",
        description: "State-of-the-art hydrotherapy facilities for water-based rehabilitation."
      },
      {
        id: "facility5",
        src: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80",
        alt: "Consultation room",
        title: "Consultation Room",
        description: "Private consultation rooms for discussing your health concerns and treatment plans."
      },
      {
        id: "facility6",
        src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80",
        alt: "Massage therapy room",
        title: "Massage Therapy",
        description: "Dedicated spaces for therapeutic massage and soft tissue treatments."
      },
    ],
    treatments: [
      {
        id: "treatment1",
        src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80",
        alt: "Manual therapy session",
        title: "Manual Therapy",
        description: "Hands-on techniques to mobilize joints and soft tissues, reducing pain and improving mobility."
      },
      {
        id: "treatment2",
        src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
        alt: "Electrotherapy treatment",
        title: "Electrotherapy",
        description: "Using electrical stimulation to reduce pain and accelerate healing of tissues."
      },
      {
        id: "treatment3",
        src: "https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&q=80",
        alt: "Ultrasound therapy",
        title: "Ultrasound Therapy",
        description: "Deep heating treatment that increases blood flow and speeds healing."
      },
      {
        id: "treatment4",
        src: "https://images.unsplash.com/photo-1588286840964-824075299f68?auto=format&fit=crop&q=80",
        alt: "Exercise rehabilitation",
        title: "Exercise Rehabilitation",
        description: "Customized exercise programs to restore function and prevent future injuries."
      },
      {
        id: "treatment5",
        src: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?auto=format&fit=crop&q=80",
        alt: "Spinal traction",
        title: "Spinal Treatment",
        description: "Specialized techniques for treating spine-related conditions and improving posture."
      },
    ],
    team: [
      {
        id: "team1",
        src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80",
        alt: "Dr. Sarah Johnson",
        title: "Dr. Sarah Johnson",
        description: "Sports Rehabilitation Specialist with 10+ years of experience working with professional athletes."
      },
      {
        id: "team2",
        src: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80",
        alt: "Dr. Michael Rodriguez",
        title: "Dr. Michael Rodriguez",
        description: "Neurological Rehabilitation Expert specializing in stroke recovery and spinal cord injuries."
      },
      {
        id: "team3",
        src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80",
        alt: "Dr. Emily Chen",
        title: "Dr. Emily Chen",
        description: "Orthopedic Therapy Specialist with advanced certification in manual therapy techniques."
      },
      {
        id: "team4",
        src: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80",
        alt: "Dr. David Wilson",
        title: "Dr. David Wilson",
        description: "Geriatric Care Expert focusing on improving mobility and quality of life for older adults."
      },
    ]
  };

  const closeModal = () => setActiveImage(null);

  const openModal = (src: string) => setActiveImage(src);

  const getImageById = (category: keyof typeof galleries, id: string) => {
    return galleries[category].find(img => img.id === id);
  };

  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="page-container">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Gallery
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Take a visual tour of our facilities, treatments, and meet our team of expert physiotherapists.
          </p>
        </div>

        <Tabs defaultValue="facilities" className="mb-12">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-100 rounded-xl p-1.5">
              <TabsTrigger value="facilities" className="rounded-lg py-3 px-6 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-physicotech-600">
                <Image className="mr-2 h-4 w-4" />
                Facilities
              </TabsTrigger>
              <TabsTrigger value="treatments" className="rounded-lg py-3 px-6 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-physicotech-600">
                <Play className="mr-2 h-4 w-4" />
                Treatments
              </TabsTrigger>
              <TabsTrigger value="team" className="rounded-lg py-3 px-6 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-physicotech-600">
                <Info className="mr-2 h-4 w-4" />
                Our Team
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="facilities" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleries.facilities.map((image) => (
                <div 
                  key={image.id} 
                  className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-white"
                  onClick={() => openModal(image.src)}
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                    <p className="text-gray-600 text-sm">{image.description}</p>
                  </div>
                  <div className="absolute inset-0 bg-physicotech-600 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="treatments" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleries.treatments.map((image) => (
                <div 
                  key={image.id} 
                  className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-white"
                  onClick={() => openModal(image.src)}
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                    <p className="text-gray-600 text-sm">{image.description}</p>
                  </div>
                  <div className="absolute inset-0 bg-physicotech-600 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="team" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleries.team.map((image) => (
                <div 
                  key={image.id} 
                  className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-white"
                  onClick={() => openModal(image.src)}
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                    <p className="text-gray-600 text-sm">{image.description}</p>
                  </div>
                  <div className="absolute inset-0 bg-physicotech-600 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Experience Our Facility in Person</h2>
            <p className="text-gray-700 mb-6">
              Photos can only show so much. Visit our state-of-the-art facility to see how we can help you on your journey to recovery and better health.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                asChild
                className="bg-physicotech-600 hover:bg-physicotech-700"
              >
                <a href="/book-demo">Book a Free Demo Session</a>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="border-physicotech-600 text-physicotech-600 hover:bg-physicotech-50"
              >
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {activeImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 md:p-8" onClick={closeModal}>
          <div className="max-w-5xl max-h-[90vh] w-full relative" onClick={(e) => e.stopPropagation()}>
            <div className="overflow-hidden rounded-lg">
              <img 
                src={activeImage} 
                alt="Enlarged view" 
                className="w-full h-auto object-contain"
              />
            </div>
            <button 
              className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-all"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
