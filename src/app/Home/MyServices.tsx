import s from "@/styles/Home/MyServices.module.css";

type TService = {
  Title: string;
  Description: string;
  buttons: TServiceButton[];
};
type TServiceButton = {
  text: string;
  iconURL: string;
  donwload: boolean;
  link: string;
};

export default function MyServices() {
  return (
    <section id="MiServicios">
      <div className={`container ${s.MyServicesContainer}`}>
        <div className={s.MyServices}>
          <h2 className="font-title-header">Mis servicios</h2>
          <div className={s.CardsServicesContainer}>
            {dataArray?.map((data: TService, i: number) => {
              return (
                <div key={data.Title} className={s.CardServices}>
                  <div className={s.CardServicesHeader}>
                    <label className="font-label">{data.Title}</label>
                  </div>
                  <div className={s.CardServicesBody}>
                    <p className="font-description-3">{data.Description}</p>
                    <div className={s.CardServicesButtonsCont}>
                      {data.buttons?.map((btn) => {
                        return <ServicesButton key={btn.text} btn={btn} />;
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <img
          className={s.MyServicesImg}
          src="/assets/img/imgFruits.png"
          alt="photo fruits"
        />
      </div>
    </section>
  );
}

const ServicesButton = ({ btn }: { btn: TServiceButton }) => {
  return (
    <a
      href={btn.link}
      download={btn.donwload}
      className={s.ServicesButton}
      target="_blank"
    >
      <div>
        <img src={btn.iconURL} alt="icon services" />
      </div>
      <div className="font-text">{btn.text}</div>
    </a>
  );
};

const dataArray: TService[] = [
  {
    Title: "Coaching 1:1",
    Description: "Transforma tu vida con orientación individualizada.",
    buttons: [
      {
        text: "Agendar",
        iconURL: "/assets/icons/iconProfile.svg",
        donwload: false,
        link: "/",
      },
    ],
  },
  {
    Title: "Agendar una reunión",
    Description: "Reserva tu espacio para un cambio positivo.",
    buttons: [
      {
        text: "Agendar",
        iconURL: "/assets/icons/iconCalendar.svg",
        donwload: false,
        link: "/",
      },
    ],
  },
  {
    Title: "E-book gratis",
    Description: "Conoce información clave para tu bienestar.",
    buttons: [
      {
        text: "Descargar",
        iconURL: "/assets/icons/iconDownload.svg",
        donwload: true,
        link: "/",
      },
    ],
  },
  {
    Title: "Mis podcast",
    Description: "Escucha para nutrir tu mente y espíritu.",
    buttons: [
      {
        text: "Apple",
        iconURL: "/assets/icons/iconApple.svg",
        donwload: false,
        link: "https://podcasts.apple.com/gt/podcast/re-conectando-conmigo/id1614527935?i=1000638127901",
      },
      {
        text: "Spotify",
        iconURL: "/assets/icons/iconSpotify.svg",
        donwload: false,
        link: "https://open.spotify.com/episode/232Ad8A7ON1MhhAEaVd3ty?si=cTp5vXY2R8mqMXwlMvVRJA",
      },
    ],
  },
];
