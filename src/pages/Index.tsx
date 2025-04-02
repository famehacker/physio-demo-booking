
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Clock, 
  Star, 
  Users, 
  Award, 
  Zap, 
  RefreshCw,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Marathon Runner",
      content: "PhysicoTech completely transformed my recovery journey after my knee injury. I'm back to running marathons, something I thought might never happen again!",
      rating: 5,
    },
    {
      name: "Rahul Mehra",
      role: "IT Professional",
      content: "After years of chronic back pain from desk work, the therapists at PhysicoTech gave me a personalized treatment plan that finally brought relief.",
      rating: 5,
    },
    {
      name: "Anita Desai",
      role: "Retired Teacher",
      content: "The arthritis in my hands was making daily tasks unbearable. Thanks to PhysicoTech's specialized therapy, I've regained mobility and independence.",
      rating: 5,
    },
  ];

  const packages = [
    {
      name: "Starter",
      description: "Perfect for trying our services",
      price: "FREE",
      period: "First 3 Sessions",
      features: [
        "Initial assessment",
        "Personalized treatment plan",
        "Basic exercise program",
        "Post-session guidance",
      ],
      highlight: true,
      cta: "Book Demo",
      link: "/book-demo"
    },
    {
      name: "Monthly",
      description: "For ongoing therapy needs",
      price: "₹2,499",
      period: "per month",
      features: [
        "4 sessions per month",
        "Advanced treatment techniques",
        "Regular progress assessments",
        "Priority booking",
        "24/7 therapist support"
      ],
      highlight: false,
      cta: "Choose Plan",
      link: "/booking"
    },
    {
      name: "Yearly",
      description: "Best value for long-term care",
      price: "₹24,999",
      period: "per year",
      features: [
        "48 sessions per year",
        "All monthly plan features",
        "2 free specialized sessions",
        "Annual comprehensive evaluation",
        "Exclusive health workshops",
        "Discounted additional services"
      ],
      highlight: false,
      cta: "Choose Plan",
      link: "/booking"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-physicotech-50 to-mint-50 -z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent -z-10" />
        <div className="page-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-6">
                Advanced Physical Therapy for{" "}
                <span className="bg-gradient-to-r from-physicotech-600 to-mint-600 bg-clip-text text-transparent">
                  Better Living
                </span>
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Experience the perfect blend of traditional physiotherapy and cutting-edge technology for faster recovery and improved well-being.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-physicotech-600 hover:bg-physicotech-700"
                >
                  <Link to="/booking">Book Appointment</Link>
                </Button>
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline" 
                  className="border-physicotech-600 text-physicotech-600 hover:bg-physicotech-50"
                >
                  <Link to="/book-demo">Free Demo Session</Link>
                </Button>
              </div>
              <div className="flex items-center mt-8 space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                      <div className="w-full h-full bg-physicotech-200"></div>
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">500+</span> happy clients this year
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full h-[400px] bg-white rounded-2xl shadow-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&q=80"
                  alt="Physiotherapy session"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-mint-100 text-mint-600">
                    <Star className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Excellent</div>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-5 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-physicotech-100 text-physicotech-600">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Certified</div>
                    <div className="text-xs text-gray-500">Expert therapists</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="page-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Why Choose PhysicoTech?
            </h2>
            <p className="text-lg text-gray-700">
              We combine traditional physiotherapy wisdom with the latest technology to provide you with the most effective treatment experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-6 h-6" />,
                title: "Expert Therapists",
                description: "Our team consists of highly qualified and experienced physiotherapists dedicated to your recovery."
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Cutting-Edge Technology",
                description: "We use the latest therapeutic equipment and techniques to enhance and speed up your healing process."
              },
              {
                icon: <RefreshCw className="w-6 h-6" />,
                title: "Personalized Care",
                description: "Every treatment plan is customized to address your specific needs and health goals."
              },
              {
                icon: <Calendar className="w-6 h-6" />,
                title: "Flexible Scheduling",
                description: "Book appointments at your convenience through our easy-to-use online booking system."
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Prompt Service",
                description: "We respect your time with punctual appointments and efficient therapy sessions."
              },
              {
                icon: <Award className="w-6 h-6" />,
                title: "Proven Results",
                description: "Our evidence-based approach ensures measurable improvements in your health and mobility."
              }
            ].map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-physicotech-100 flex items-center justify-center text-physicotech-600 mb-5">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-padding bg-gray-50">
        <div className="page-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-700">
              Don't just take our word for it. Here's what our patients have to say about their experience with PhysicoTech.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-physicotech-200 mr-4"></div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-white">
        <div className="page-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-700">
              Choose the package that suits your needs. All plans include personalized care and expert guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`border ${pkg.highlight ? 'border-physicotech-400 shadow-lg shadow-physicotech-100' : 'shadow-md'} relative overflow-hidden`}
              >
                {pkg.highlight && (
                  <div className="absolute top-0 left-0 right-0 bg-physicotech-500 text-white text-center py-1 text-sm font-medium">
                    Try it Free
                  </div>
                )}
                <CardContent className={`pt-8 ${pkg.highlight ? 'pb-8' : 'pb-6'}`}>
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{pkg.price}</span>
                    <span className="text-gray-500 ml-2">{pkg.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    asChild
                    className={`w-full ${pkg.highlight ? 'bg-physicotech-600 hover:bg-physicotech-700' : 'bg-gray-800 hover:bg-gray-900'}`}
                  >
                    <Link to={pkg.link}>{pkg.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-physicotech-600 to-mint-600 text-white">
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Ready to Start Your Healing Journey?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Book your first free session today and experience the PhysicoTech difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg" 
                variant="secondary" 
                className="bg-white text-physicotech-600 hover:bg-gray-100"
              >
                <Link to="/book-demo">Book a Free Demo</Link>
              </Button>
              <Button 
                asChild
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
              >
                <Link to="/contact">
                  Contact a Therapist
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
