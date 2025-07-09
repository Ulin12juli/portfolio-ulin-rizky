import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />

      {/* Placeholder sections for future development */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-brand-navy mb-4">
            About For Gates
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Coming soon - Learn more about our team and our mission to create
            exceptional digital experiences.
          </p>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-brand-navy mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Coming soon - Discover our comprehensive range of development,
            design, and AI services.
          </p>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-brand-navy mb-4">
            Portfolio
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Coming soon - Explore our latest projects and success stories.
          </p>
        </div>
      </section>

      <section id="contact" className="py-20 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Ready to start your next project? Let's discuss how For Gates can
            help bring your digital vision to life.
          </p>
          <button className="bg-brand-accent hover:bg-brand-accent/90 text-brand-navy font-semibold px-8 py-3 rounded-lg transition-all duration-200">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
