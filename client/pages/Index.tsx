import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />

      {/* Why Choose For Gates Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Kenapa Memilih For Gates?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami memahami setiap detail kebutuhan digital Anda dan memberikan
              solusi terbaik dengan standar profesional tertinggi.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Card 1: Fast & On Time */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-brand-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-accent/20 transition-colors">
                <svg
                  className="w-8 h-8 text-brand-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-brand-navy mb-3">
                Cepat & Tepat Waktu
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Kami menghargai waktu Anda. Setiap proyek diselesaikan sesuai
                timeline dengan kualitas terjamin.
              </p>
            </div>

            {/* Card 2: Custom & Flexible Solutions */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-brand-navy/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-navy/20 transition-colors">
                <svg
                  className="w-8 h-8 text-brand-navy"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-brand-navy mb-3">
                Solusi Kustom & Fleksibel
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Setiap bisnis unik. Kami menciptakan solusi yang disesuaikan
                dengan kebutuhan spesifik Anda.
              </p>
            </div>

            {/* Card 3: Expert Team */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                <svg
                  className="w-8 h-8 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-brand-navy mb-3">
                Tim Ahli Berpengalaman
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Didukung oleh developer, designer, dan teknisi AI berpengalaman
                dengan track record terbukti.
              </p>
            </div>

            {/* Card 4: 24/7 Support */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6l4 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-brand-navy mb-3">
                Dukungan Penuh 24/7
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Kami siap membantu kapan saja. Tim support kami responsif untuk
                menjaga sistem Anda tetap optimal.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <button className="bg-brand-navy hover:bg-brand-navy/90 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 group">
              Lihat Layanan Lengkap
              <svg
                className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="py-20 bg-gradient-to-b from-white to-gray-50/30"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            {/* Section Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-6">
                Tentang For Gates
              </h2>

              {/* Introduction Paragraph */}
              <div className="max-w-4xl mx-auto">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                  Kami adalah duo developer berpengalaman yang terdiri dari
                  spesialis frontend dan backend. Bersama-sama, kami membangun
                  solusi digital cerdas — mulai dari website responsif, aplikasi
                  mobile, desain UI/UX yang intuitif, hingga sistem berbasis AI
                  yang inovatif.
                </p>

                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Dengan kombinasi keahlian teknis yang mendalam dan pemahaman
                  bisnis yang kuat, kami berkomitmen menghadirkan solusi
                  teknologi yang tidak hanya canggih, tetapi juga memberikan
                  nilai nyata bagi pertumbuhan bisnis Anda.
                </p>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="text-center p-6 bg-brand-navy/5 rounded-2xl">
                <div className="w-16 h-16 bg-brand-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-brand-navy"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-display font-semibold text-brand-navy mb-2">
                  Kolaborasi Solid
                </h3>
                <p className="text-sm text-gray-600">
                  Frontend & Backend yang harmonis
                </p>
              </div>

              <div className="text-center p-6 bg-brand-accent/5 rounded-2xl">
                <div className="w-16 h-16 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-brand-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="font-display font-semibold text-brand-navy mb-2">
                  Teknologi Terkini
                </h3>
                <p className="text-sm text-gray-600">
                  Menggunakan tools modern & AI
                </p>
              </div>

              <div className="text-center p-6 bg-blue-500/5 rounded-2xl">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-display font-semibold text-brand-navy mb-2">
                  Fokus Pada Nilai
                </h3>
                <p className="text-sm text-gray-600">
                  Solusi yang menguntungkan bisnis
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <button className="bg-brand-navy hover:bg-brand-navy/90 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 group">
                Pelajari Lebih Lanjut
                <svg
                  className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
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
