"use client";
import s from "@/styles/Home/Testimonials.module.css";
type TTestimonial = {
  message: string;
  user: {
    photo: string;
    name: string;
    subtext: string;
  };
};
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

Autoplay.globalOptions = { delay: 5000 };

export default function Testimonials() {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: false }, [
    Autoplay(),
  ]);

  return (
    <section>
      <div className={`container`}>
        <div className={`${s.TestimonialsFullContainer}`}>
          <h2 className="font-title-header">Testimonios</h2>
          <div className={s.TestimonialsAndButton} ref={emblaRef}>
            <div className={s.TestimonialsContainer}>
              <ul className={s.Testimonials}>
                {TestimonialsArray?.map((t: TTestimonial, i: number) => {
                  return (
                    <li className={s.CardTestimonial} key={i}>
                      <div></div>
                      <div className={s.CardTestimonialData}>
                        <p className="font-text-2">
                          {'"'}
                          {t.message}
                          {'"'}
                        </p>
                        <div className={s.CardTestimonialUser}>
                          <img src={t.user.photo} alt={t.user.name} />
                          <div>
                            <label className="font-small-label">
                              {t.user.name}
                            </label>
                            <h6 className="font-subtext">{t.user.subtext}</h6>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <ul className={s.Testimonials}>
                {TestimonialsArray2?.map((t: TTestimonial, i: number) => {
                  return (
                    <li className={s.CardTestimonial} key={i}>
                      <div></div>
                      <div className={s.CardTestimonialData}>
                        <p className="font-text-2">
                          {'"'}
                          {t.message}
                          {'"'}
                        </p>
                        <div className={s.CardTestimonialUser}>
                          <img src={t.user.photo} alt={t.user.name} />
                          <div>
                            <label className="font-small-label">
                              {t.user.name}
                            </label>
                            <h6 className="font-subtext">{t.user.subtext}</h6>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const TestimonialsArray: TTestimonial[] = [
  {
    message:
      "Muchas gracias rebe, deje de tener atracones, deje de comerme mis emociones, siento que estoy en paz.",
    user: {
      photo: "/assets/img/testi1.png",
      name: "Itzá Guerrero Trejo",
      subtext: "23 años",
    },
  },
  {
    message:
      "Gracias por entenderme, por apoyarme, y por ayudarme a sanar mi relación con el cuerpo y la comida.",
    user: {
      photo: "/assets/img/testi2.png",
      name: "Susana",
      subtext: "14 años",
    },
  },
  {
    message:
      "Deje de vivir con atracones, Rebe me enseño a vivir una vida sin presiones.",
    user: {
      photo: "/assets/img/testi3.png",
      name: "Carlos Orrego",
      subtext: "22 años",
    },
  },
];

const TestimonialsArray2: TTestimonial[] = [
  {
    message:
      "Gracias Rebe, hoy por fin entiendo lo que se siente tener una buena relación con la comida y con mi cuerpo.",
    user: {
      photo: "/assets/img/testi4.png",
      name: "Natalia",
      subtext: "21 años",
    },
  },
  {
    message:
      "Deje de vivir con atracones, Rebe me enseño a vivir una vida sin presiones.",
    user: {
      photo: "/assets/img/testi3.png",
      name: "Carlos Orrego",
      subtext: "22 años",
    },
  },
  {
    message:
      "Gracias por entenderme, por apoyarme, y por ayudarme a sanar mi relación con el cuerpo y la comida.",
    user: {
      photo: "/assets/img/testi2.png",
      name: "Susana",
      subtext: "14 años",
    },
  },
];
