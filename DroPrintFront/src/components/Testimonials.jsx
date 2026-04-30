import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Charaf Bk",
      rating: 5,
      text: "J’ai récemment eu l’opportunité de travailler avec Droprint, et je suis absolument ravi des services fournis. Nourdine et son équipe offrent une gamme complète de services d'impression, que ce soit pour des roll-ups, des cartes de visite ou des enseignes lumineuses."
    },
    {
      id: 2,
      name: "Asmaa Bouchtia",
      rating: 5,
      text: "Impeccable travail. Le personnel est vraiment compétent et serviable. J’apprécie particulièrement leur connaissance des produits et leur capacité à me conseiller efficacement. 👍"
    },
    {
      id: 3,
      name: "marie lafon",
      rating: 5,
      text: "Service impeccable. très bonne réactivité. Les prix sont raisonnables et les délais sont respectés."
    },
    {
      id: 4,
      name: "Salma Belghiti",
      rating: 5,
      text: "Equipe très professionnelle et à l’écoute. Les produits sont de très bonne qualité."
    },
    {
      id: 5,
      name: "Hicham El Amrani",
      rating: 5,
      text: "Excellente qualité d'impression et service client au top. Je recommande vivement Dro Print pour tous vos supports de communication."
    }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-[var(--color-brand-purple)] mb-4 uppercase tracking-tighter">
            Ce que disent nos clients
          </h2>
          <div className="w-24 h-1.5 bg-[var(--color-brand-yellow)] mx-auto rounded-full"></div>
        </div>
        
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16 testimonial-swiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 h-full flex flex-col justify-between hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 group">
                <div>
                  <div className="flex mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg 
                        key={i} 
                        className="w-5 h-5 text-[var(--color-brand-yellow)] fill-current" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                    "{review.text}"
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--color-brand-purple)] flex items-center justify-center text-white font-black text-xl shadow-lg shadow-purple-500/30">
                    {review.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900 text-lg leading-tight">{review.name}</h4>
                    <p className="text-sm text-gray-500 font-medium">Client Google</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-10">
          <a 
            href="https://www.google.com/search?q=DRO+PRINT+Avis" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-brand-purple)] text-white font-bold rounded-2xl hover:bg-[var(--color-brand-purple-dark)] transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-purple-500/20"
          >
            Voir plus d'avis sur Google
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
