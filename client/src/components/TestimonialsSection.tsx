/**
 * Design System: NASA/SpaceX Aesthetic
 * Testimonials section with professional cards and profile pictures
 */

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className="section-spacing border-b border-[#d12e56]/30 bg-[#0a0a0a]">
      <div className="container">
        <h2 className="heading-xl mb-16 animate-slide-up heading-with-underline">WHAT OUR COMMUNITY SAYS</h2>
        
        <div className="card-grid-3 animate-stagger">
          {testimonials.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className="card-professional space-y-6 animate-slide-up flex flex-col"
              style={{ animationDelay: `${0.1 * idx}s` }}
            >
              {/* Quote */}
              <blockquote className="text-[#999999] leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Divider */}
              <div className="border-t border-[#333333]" />

              {/* Author Info */}
              <div className="flex items-center gap-4">
                {/* Profile Picture */}
                <div className="w-14 h-14 rounded-full bg-[#1a1a1a] border border-[#d12e56] flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-[#d12e56] to-[#a01f3f] flex items-center justify-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Name & Role */}
                <div className="flex-1">
                  <h4 className="heading-sm text-white">{testimonial.name}</h4>
                  <p className="text-xs text-[#666666] tracking-wide uppercase font-bold">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
