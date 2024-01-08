import s from "@/styles/Home/Testimonials.module.css";
type TTestimonial = {
  message: string;
  user: {
    photo: string;
    name: string;
    subtext: string;
  };
};

export default function Testimonials() {
  return (
    <section>
      <div className={`container`}>
        <div className={`smallContainer ${s.TestimonialsFullContainer}`}>
          <h2 className="font-title-header">Testimonios</h2>
          <div className={s.TestimonialsAndButton}>
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
      subtext: "Lorem Ipsum",
    },
  },
  {
    message:
      "Gracias por entenderme, por apoyarme, y por ayudarme a sanar mi relación con el cuerpo y la comida.",
    user: {
      photo: "/assets/img/testi2.png",
      name: "Susana",
      subtext: "Lorem Ipsum",
    },
  },
  {
    message:
      "Deje de vivir con atracones, Rebe me enseño a vivir una vida sin presiones.",
    user: {
      photo: "/assets/img/testi3.png",
      name: "Carlos Orrego",
      subtext: "Lorem Ipsum",
    },
  },
];
