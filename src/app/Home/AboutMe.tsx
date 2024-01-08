import s from "@/styles/Home/AboutMe.module.css";

export default function AboutMe() {
  return (
    <section id="SobreMi">
      <div className={`container`}>
        <div className={`smallContainer ${s.AboutMeContainer}`}>
          <img src="/assets/img/rebeaboutme.png" alt="rebe photo about me" />
          <div>
            <h2 className="font-title-header">Sobre mi</h2>
            <p className="font-description">
              Experimenté una significativa desconexión con mis señales de
              hambre y saciedad en el pasado, lo que dificultó la diferenciación
              entre la necesidad real de alimentarme y el impulso impulsado por
              factores emocionales.
            </p>
            <p className="font-description">
              Esta falta de conciencia me llevó a tomar decisiones alimenticias
              poco saludables y a desconectarme de las verdaderas necesidades de
              mi cuerpo. La reconexión con mis señales internas de hambre y
              saciedad no solo me permitió discernir con claridad cuándo mi
              cuerpo requería nutrición y cuándo no, sino que también se
              convirtió en el punto de partida fundamental para mi enfoque en la
              alimentación intuitiva. Este proceso no solo influyó positivamente
              en mis elecciones alimenticias, sino que también se convirtió en
              una guía esencial en mi práctica como coach holística y psicóloga
              especializada en psicoalimentación.
            </p>
            <p className="font-description">
              Mi compromiso profesional radica en ayudar a otros a explorar y
              comprender sus propias señales internas, facilitando así un viaje
              hacia la alimentación consciente y equilibrada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
