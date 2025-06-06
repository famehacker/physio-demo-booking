
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Activity, 
  Brain, 
  Dumbbell, 
  Heart, 
  Stethoscope, 
  UserPlus,
  CheckCircle,
  ArrowRight,
  MessageSquare
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const specialties = [
    {
      id: "sports",
      icon: <Dumbbell className="h-5 w-5" />,
      title: "Sports Rehabilitation",
      description: "Specialized therapy for athletes and active individuals focusing on recovery from sports injuries and performance enhancement.",
      benefits: [
        "Targeted rehabilitation for sport-specific injuries",
        "Return-to-play protocols and assessments",
        "Performance enhancement techniques",
        "Injury prevention strategies",
        "Custom exercise programming"
      ],
      image: "https://images.unsplash.com/photo-1633015450607-b9e9aa4de936?auto=format&fit=crop&q=80"
    },
    {
      id: "ortho",
      icon: <Activity className="h-6 w-6" />,
      title: "Orthopedic Physical Therapy",
      description: "Treatment for musculoskeletal injuries, joint conditions, and post-surgical rehabilitation to restore function and mobility.",
      benefits: [
        "Joint mobilization techniques",
        "Post-surgical rehabilitation protocols",
        "Manual therapy for tissue healing",
        "Therapeutic exercises for strength and mobility",
        "Pain management strategies"
      ],
      image: "https://images.unsplash.com/photo-1547941126-3d5322b218b0?auto=format&fit=crop&q=80"
    },
    {
      id: "neuro",
      icon: <Brain className="h-6 w-6" />,
      title: "Neurological Rehabilitation",
      description: "Specialized care for patients with neurological conditions including stroke, traumatic brain injury, and Parkinson's disease.",
      benefits: [
        "Neurological assessment and treatment planning",
        "Balance and coordination training",
        "Functional mobility improvement",
        "Adaptive equipment recommendations",
        "Cognitive-motor training"
      ],
      image: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&q=80"
    },
    {
      id: "geriatric",
      icon: <UserPlus className="h-6 w-6" />,
      title: "Geriatric Physical Therapy",
      description: "Focused care for older adults addressing age-related conditions, fall prevention, and maintaining functional independence.",
      benefits: [
        "Fall prevention strategies",
        "Mobility assistance and training",
        "Strength and flexibility programs for aging bodies",
        "Balance improvement techniques",
        "Home safety assessments"
      ],
      image: "https://images.unsplash.com/photo-1532635241-17e820acc59f?auto=format&fit=crop&q=80"
    },
    {
      id: "cardio",
      icon: <Heart className="h-6 w-6" />,
      title: "Cardiopulmonary Rehabilitation",
      description: "Programs designed for patients with heart and lung conditions to improve endurance, breathing, and overall cardiovascular health.",
      benefits: [
        "Cardiovascular endurance training",
        "Breathing exercises and techniques",
        "Activity modification guidance",
        "Monitored exercise progression",
        "Education on managing cardiopulmonary conditions"
      ],
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80"
    },
    {
      id: "pediatric",
      icon: <Stethoscope className="h-6 w-6" />,
      title: "Pediatric Therapy",
      description: "Specialized therapy for infants, children and teenagers focusing on developmental delays, congenital conditions, and pediatric injuries.",
      benefits: [
        "Developmental milestone assessment and support",
        "Pediatric-specific rehabilitation techniques",
        "Play-based therapy approaches",
        "School and sport readiness training",
        "Parent/caregiver education and involvement"
      ],
      image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80"
    }
  ];

  const treatments = [
    {
      title: "Manual Therapy",
      description: "Hands-on techniques to treat muscle and joint pain and dysfunction, including massage, joint mobilization, and manipulation."
    },
    {
      title: "Therapeutic Exercise",
      description: "Customized exercise programs designed to improve strength, endurance, range of motion, and overall function."
    },
    {
      title: "Electrotherapy",
      description: "Use of electrical stimulation to reduce pain, improve circulation, strengthen muscles, and promote tissue healing."
    },
    {
      title: "Ultrasound Therapy",
      description: "Deep heating treatment that increases blood flow and accelerates healing in soft tissues."
    },
    {
      title: "Laser Therapy",
      description: "Low-level laser treatment to reduce inflammation, increase cellular metabolism, and promote tissue repair."
    },
    {
      title: "Dry Needling",
      description: "Technique using thin needles to stimulate trigger points, reducing muscle tension and pain."
    },
    {
      title: "Hydrotherapy",
      description: "Water-based therapy that uses the properties of water to facilitate exercise and rehabilitation."
    },
    {
      title: "Kinesio Taping",
      description: "Application of elastic therapeutic tape to support muscles and joints while allowing full range of motion."
    }
  ];

  const testimonials = [
    {
      quote: "The sports rehabilitation program helped me recover from my cricket injury much faster than I expected. I'm back to playing at my pre-injury level.",
      author: "Rajesh T., Cricketer",
      specialty: "sports"
    },
    {
      quote: "After my hip replacement, the orthopedic therapy team guided me through every step of recovery. Their expertise made all the difference.",
      author: "Lata P., Hip Replacement Patient",
      specialty: "ortho"
    },
    {
      quote: "Following my stroke, I wasn't sure how much function I'd regain. The neurological rehabilitation program helped me relearn how to walk and use my affected arm.",
      author: "Rajan J., Stroke Recovery Patient",
      specialty: "neuro"
    },
    {
      quote: "At 78, I was starting to feel unsteady on my feet. The geriatric therapy program helped me improve my balance and confidence. I haven't had a fall in over a year!",
      author: "Saraswati D., 78 years old",
      specialty: "geriatric"
    },
    {
      quote: "After my heart surgery, the cardiopulmonary team helped me gradually rebuild my stamina. Now I can enjoy walking with my grandchildren again.",
      author: "Deepak M., Cardiac Patient",
      specialty: "cardio"
    },
    {
      quote: "The pediatric therapists were amazing with my son who has developmental delays. Their patience and specialized techniques have helped him reach new milestones.",
      author: "Sunita K., Mother of 4-year-old patient",
      specialty: "pediatric"
    }
  ];

  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="page-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Our Specialized Services
          </h1>
          <p className="text-lg text-gray-700">
            At PhysicoTech, we offer a comprehensive range of physiotherapy services tailored to your specific needs. Our team of experts specializes in various therapeutic approaches to help you recover, heal, and thrive.
          </p>
        </div>

        <Tabs defaultValue="sports" className="mb-16">
          <div className="flex justify-center mb-8">
            <div className="relative w-full max-w-4xl overflow-hidden">
              <div className="overflow-x-auto pb-4 scrollbar-none">
                <TabsList className="w-max min-w-full flex p-1.5 bg-gray-100 rounded-xl gap-1.5">
                  {specialties.map((specialty) => (
                    <TabsTrigger 
                      key={specialty.id} 
                      value={specialty.id}
                      className="flex-1 min-w-max px-5 py-3 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-physicotech-600 transition-all duration-300"
                    >
                      <div className="flex items-center gap-2">
                        <span className="flex-shrink-0">{specialty.icon}</span>
                        <span className="whitespace-nowrap">{specialty.title}</span>
                      </div>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
            </div>
          </div>

          {specialties.map((specialty) => (
            <TabsContent key={specialty.id} value={specialty.id} className="mt-10 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div>
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-lg bg-physicotech-50 flex items-center justify-center text-physicotech-600 mb-5 shadow-sm">
                      <div className="w-8 h-8">{specialty.icon}</div>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{specialty.title}</h2>
                    <p className="text-lg text-gray-700 mb-6">{specialty.description}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Benefits</h3>
                    <ul className="space-y-3 mb-8">
                      {specialty.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <div className="flex flex-wrap gap-4">
                      <Button 
                        asChild
                        size="lg"
                        className="bg-physicotech-600 hover:bg-physicotech-700 transition-colors"
                      >
                        <Link to="/booking">Book a Session</Link>
                      </Button>
                      <Button 
                        asChild
                        variant="outline" 
                        size="lg"
                        className="border-physicotech-600 text-physicotech-600 hover:bg-physicotech-50"
                      >
                        <Link to="/book-demo">Free Consultation</Link>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="relative rounded-xl shadow-lg">
                  <div className="overflow-hidden rounded-xl">
                    <img 
                      src={specialty.image} 
                      alt={specialty.title} 
                      className="w-full h-auto object-cover aspect-[4/3]"
                    />
                  </div>
                  
                  {testimonials.filter(t => t.specialty === specialty.id).map((testimonial, index) => (
                    <div key={index} className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-5 rounded-lg shadow-lg">
                      <div className="flex items-start">
                        <MessageSquare className="h-5 w-5 text-physicotech-500 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-gray-700 italic text-sm mb-2">"{testimonial.quote}"</p>
                          <p className="text-sm font-semibold">{testimonial.author}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Treatment Methods</h2>
            <p className="text-gray-700">
              We employ a variety of evidence-based treatment techniques tailored to your specific condition and recovery goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatments.map((treatment, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{treatment.title}</h3>
                  <p className="text-gray-600">{treatment.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Your Personalized Care Journey</h2>
              <p className="text-lg text-gray-700 mb-6">
                At PhysicoTech, we believe every patient deserves a customized treatment plan. Our comprehensive approach ensures you receive the exact care you need.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Initial Assessment",
                    description: "A thorough evaluation of your condition, medical history, and goals."
                  },
                  {
                    title: "Personalized Treatment Plan",
                    description: "We create a tailored therapy program designed specifically for your needs."
                  },
                  {
                    title: "Regular Progress Tracking",
                    description: "Continuous monitoring ensures we adjust your treatment as you improve."
                  },
                  {
                    title: "Home Exercise Program",
                    description: "Guidance on exercises and activities to continue your progress at home."
                  }
                ].map((step, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-physicotech-600 text-white flex items-center justify-center font-semibold">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button 
                  asChild
                  size="lg"
                  className="bg-physicotech-600 hover:bg-physicotech-700"
                >
                  <Link to="/booking">
                    Start Your Recovery Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1573046462562-75ee02980272?auto=format&fit=crop&q=80" 
                alt="Patient receiving care" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
