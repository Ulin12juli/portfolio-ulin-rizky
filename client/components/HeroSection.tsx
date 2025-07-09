import { ArrowRight, Play } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="pt-16 bg-gradient-to-b from-white to-gray-50/50 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-brand-accent/10 border border-brand-accent/20 rounded-full">
              <span className="text-sm font-medium text-brand-navy">
                🚀 Tim Inovator Digital Masa Kini
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-brand-navy leading-tight">
                Gerbang Menuju <span className="text-brand-accent">Solusi</span>{" "}
                Digital Cerdas
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                Kami adalah For Gates, tim pengembang yang membangun website,
                aplikasi, desain antarmuka, dan sistem cerdas berbasis
                teknologi.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-brand-navy hover:bg-brand-navy/90 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 group"
              >
                Lihat Layanan
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Bangun Proyek Bersama Kami
              </Button>
            </div>

            {/* Stats */}
            <div
              className="flex flex-wrap gap-8 pt-8 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-navy">50+</div>
                <div className="text-sm text-gray-600">Proyek Tuntas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-navy">98%</div>
                <div className="text-sm text-gray-600">
                  Tingkat Kepuasan dari Mitra Kami
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-navy">24/7</div>
                <div className="text-sm text-gray-600">Layanan Aktif</div>
              </div>
            </div>
          </div>

          {/* Right Side - 3D Illustration */}
          <div className="relative animate-slide-up">
            <div className="relative z-10">
              {/* Professional team illustration */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fd9cd4048572942b6909b888ed90615b0%2F1b12f2796f5847408231fc3fe3104327?format=webp&width=800"
                  alt="For Gates development team working together with AI and technology solutions"
                  className="w-full h-auto object-cover animate-float"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-10 right-10 w-20 h-20 bg-brand-accent/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-10 left-10 w-32 h-32 bg-brand-navy/10 rounded-full blur-2xl"></div>
              <div className="absolute top-1/2 left-0 w-16 h-16 bg-blue-400/20 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="flex justify-center pb-8">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-300 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
