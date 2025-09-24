import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null); // Explicitly type the ref as HTMLDivElement

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [ref, isIntersecting] as const; // Use `as const` to ensure proper type inference
};

const AnimatedSection: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = "", delay = 0 }) => {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  });

  return (
    <div
      ref={ref} // Now the ref is correctly typed as HTMLDivElement
      className={`transition-all duration-1000 ${
        isIntersecting
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-20"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const ContactUs: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="bg-gradient-to-r from-blue-600 to-indigo-800 rounded-2xl p-12 text-center shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8">
              Join thousands of satisfied customers who have transformed their
              business with our solutions.
            </p>
            <Link href="/contact">
              <button className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:-translate-y-1">
                Get a Quote !
              </button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactUs;