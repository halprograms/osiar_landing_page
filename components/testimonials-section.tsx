import Image from "next/image"
import { SectionWrapper } from "./section-wrapper"
import { Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "David Smith",
      role: "Admin Manager, XYZ University",
      image: "/placeholder.svg?height=64&width=64",
      quote:
        "The OCR technology provided by OSIAR is a game-changer. It has significantly improved our document management process and reduced processing time by 80%.",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "HR Director, Government Agency",
      image: "/placeholder.svg?height=64&width=64",
      quote:
        "We've been using OSIAR for our CPNS registration verification process. The accuracy is impressive and has helped us eliminate manual data entry errors.",
    },
    {
      id: 3,
      name: "Dr. Ahmad Rizal",
      role: "Hospital Administrator",
      image: "/placeholder.svg?height=64&width=64",
      quote:
        "OSIAR has transformed how we handle patient documentation. The system is intuitive and the support team is always responsive to our needs.",
    },
  ]

  return (
    <SectionWrapper direction="right">
      <section className="bg-gradient-to-b from-white to-blue-50 text-blue-950 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Customer Testimonials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read what our customers have to say about our OCR technology solutions and how OSIAR has transformed their
              document processing workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-xl shadow-lg p-6 relative transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="absolute top-6 right-6 text-blue-100">
                  <Quote className="h-10 w-10 rotate-180" />
                </div>

                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-blue-100 flex-shrink-0 border-2 border-blue-200">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-lg text-blue-900">{testimonial.name}</h3>
                    <p className="text-blue-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                <p className="text-gray-700 relative z-10">"{testimonial.quote}"</p>

                <div className="mt-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center justify-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              <span className="mr-2">⭐</span>
              Trusted by over 100+ organizations across Indonesia
            </div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  )
}

