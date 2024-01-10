import s from "@/styles/Home/Contact.module.css";

export default function Contact() {
  return (
    <section id="Contacto">
      <div className={`container ${s.ContactContainer}`}>
        <h2 className="font-title-header">Conecta conmigo</h2>
        <div className={s.ConectWhitMeBlock}>
          <div>
            <h4>¡Descubre el camino hacia una vida saludable y equilibrada!</h4>
            <p>
              Si tienes preguntas, inquietudes o simplemente deseas comenzar tu
              viaje hacia la psicoalimentación positiva, estoy aquí para ti.
              <br />
              Envíame un mensaje y juntos construiremos una estrategia
              personalizada para mejorar tu bienestar físico y emocional
            </p>
            <a href="/" className="font-text">
              Conectar {ArrowContactSVG}
            </a>
          </div>
          <img src="/assets/img/contactPhoto.png" />
        </div>
      </div>
    </section>
  );
}

let ArrowContactSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="11"
    viewBox="0 0 30 11"
    fill="none"
  >
    <path
      d="M0 6.13168H27.5779L23.5962 10.1068L24.4909 11L30 5.5L24.4909 0L23.5962 0.89319L27.5779 4.86832H0V6.13168Z"
      fill="#FFFEF7"
    />
  </svg>
);
