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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Proyek Terbaru Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Berikut adalah beberapa karya digital terbaru yang telah kami
              kembangkan. Setiap proyek menunjukkan dedikasi kami dalam
              menghadirkan solusi teknologi yang inovatif dan berdampak.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Project 1 - E-commerce Platform */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">
                      E-Commerce Platform
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Website
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-brand-navy mb-2">
                  Toko Online Modern
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Platform e-commerce lengkap dengan sistem pembayaran
                  terintegrasi dan dashboard admin yang responsif.
                </p>
                <button className="w-full bg-brand-navy/5 hover:bg-brand-navy hover:text-white text-brand-navy font-semibold py-2 px-4 rounded-lg transition-all duration-200 group-hover:bg-brand-navy group-hover:text-white">
                  Lihat Detail
                </button>
              </div>
            </div>

            {/* Project 2 - Mobile App */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21C5,22.11 5.89,23 7,23H17C18.11,23 19,22.11 19,21V3C19,1.89 18.11,1 17,1Z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">
                      Mobile Application
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    App
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-brand-navy mb-2">
                  Aplikasi Produktivitas
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Aplikasi mobile untuk manajemen tugas dengan fitur
                  sinkronisasi real-time dan notifikasi cerdas.
                </p>
                <button className="w-full bg-brand-navy/5 hover:bg-brand-navy hover:text-white text-brand-navy font-semibold py-2 px-4 rounded-lg transition-all duration-200 group-hover:bg-brand-navy group-hover:text-white">
                  Lihat Detail
                </button>
              </div>
            </div>

            {/* Project 3 - AI Dashboard */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-brand-accent to-orange-500 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M7.5,13A2.5,2.5 0 0,0 5,15.5A2.5,2.5 0 0,0 7.5,18A2.5,2.5 0 0,0 10,15.5A2.5,2.5 0 0,0 7.5,13M16.5,13A2.5,2.5 0 0,0 14,15.5A2.5,2.5 0 0,0 16.5,18A2.5,2.5 0 0,0 19,15.5A2.5,2.5 0 0,0 16.5,13Z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">AI Analytics</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-brand-accent text-brand-navy text-xs font-semibold px-3 py-1 rounded-full">
                    AI
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-brand-navy mb-2">
                  Dashboard AI Analytics
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Platform analitik berbasis AI untuk prediksi bisnis dengan
                  visualisasi data yang interaktif dan real-time.
                </p>
                <button className="w-full bg-brand-navy/5 hover:bg-brand-navy hover:text-white text-brand-navy font-semibold py-2 px-4 rounded-lg transition-all duration-200 group-hover:bg-brand-navy group-hover:text-white">
                  Lihat Detail
                </button>
              </div>
            </div>

            {/* Project 4 - UI/UX Design */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6Z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">Design System</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    UI/UX
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-brand-navy mb-2">
                  Design System Modern
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Komponen UI yang konsisten dan reusable untuk membangun
                  pengalaman pengguna yang seamless.
                </p>
                <button className="w-full bg-brand-navy/5 hover:bg-brand-navy hover:text-white text-brand-navy font-semibold py-2 px-4 rounded-lg transition-all duration-200 group-hover:bg-brand-navy group-hover:text-white">
                  Lihat Detail
                </button>
              </div>
            </div>

            {/* Project 5 - SaaS Platform */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">SaaS Platform</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-indigo-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Website
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-brand-navy mb-2">
                  Platform SaaS B2B
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Solusi enterprise untuk manajemen bisnis dengan fitur
                  multi-tenant dan analitik mendalam.
                </p>
                <button className="w-full bg-brand-navy/5 hover:bg-brand-navy hover:text-white text-brand-navy font-semibold py-2 px-4 rounded-lg transition-all duration-200 group-hover:bg-brand-navy group-hover:text-white">
                  Lihat Detail
                </button>
              </div>
            </div>

            {/* Project 6 - IoT Dashboard */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,13L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">IoT Solutions</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    AI
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-brand-navy mb-2">
                  IoT Monitoring System
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Dashboard monitoring perangkat IoT dengan prediksi maintenance
                  berbasis machine learning.
                </p>
                <button className="w-full bg-brand-navy/5 hover:bg-brand-navy hover:text-white text-brand-navy font-semibold py-2 px-4 rounded-lg transition-all duration-200 group-hover:bg-brand-navy group-hover:text-white">
                  Lihat Detail
                </button>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <button className="bg-brand-accent hover:bg-brand-accent/90 text-brand-navy font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 group">
              Lihat Semua Portofolio
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

      {/* Footer */}
      <footer id="contact" className="bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="py-16 grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  For Gates
                </h3>
                <p className="text-gray-300 leading-relaxed max-w-md">
                  Tim kreatif yang menghadirkan solusi digital cerdas — website
                  responsif, aplikasi mobile, desain UI/UX yang intuitif, dan
                  sistem berbasis AI yang inovatif. Kami berkomitmen membangun
                  teknologi yang memberikan nilai nyata bagi bisnis Anda.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 text-brand-accent"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
                  </svg>
                  <a
                    href="mailto:contact@forgates.dev"
                    className="text-gray-300 hover:text-brand-accent transition-colors"
                  >
                    contact@forgates.dev
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 text-brand-accent"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5Z" />
                  </svg>
                  <span className="text-gray-300">Indonesia</span>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Navigasi
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#home"
                    className="text-gray-300 hover:text-brand-accent transition-colors"
                  >
                    Beranda
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-brand-accent transition-colors"
                  >
                    Tentang
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-brand-accent transition-colors"
                  >
                    Layanan
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    className="text-gray-300 hover:text-brand-accent transition-colors"
                  >
                    Portofolio
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-brand-accent transition-colors"
                  >
                    Kontak
                  </a>
                </li>
              </ul>
            </div>

            {/* Services & Social */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Layanan</h4>
              <ul className="space-y-3 mb-6">
                <li>
                  <span className="text-gray-300">Website Development</span>
                </li>
                <li>
                  <span className="text-gray-300">Mobile App Development</span>
                </li>
                <li>
                  <span className="text-gray-300">UI/UX Design</span>
                </li>
                <li>
                  <span className="text-gray-300">AI Solutions</span>
                </li>
              </ul>

              {/* Social Media Icons */}
              <div>
                <h5 className="text-sm font-semibold text-white mb-3">
                  Ikuti Kami
                </h5>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-300 hover:text-brand-accent transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:text-brand-accent transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:text-brand-accent transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-700 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2025 For Gates. All rights reserved.
              </p>

              <div className="flex space-x-6 mt-4 md:mt-0">
                <a
                  href="#"
                  className="text-gray-400 hover:text-brand-accent text-sm transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-brand-accent text-sm transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
