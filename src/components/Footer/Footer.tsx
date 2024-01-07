import s from '@/styles/Footer/Footer.module.css';
import Link from "next/link";
import { TLinkNav, linksNav } from '../Navbar/linksNav';

export default function Footer(){
  const date = new Date();

  return(
    <footer>
      <section className={s.FooterSection}>
        <div className={`container ${s.FooterContainer}`}>
          <img className={s.FooterIMG} src="/assets/img/RebecaLogoFooter.png"/>
          <div className={s.FooterDataContainer}>
            <div className={s.FooterLinks}>
              {linksNav?.map((obj: TLinkNav) => {
                return (
                  <Link key={obj.text} href={obj.url} className="font-text">
                    {obj.text}
                  </Link>
                );
              })}
            </div>
            <div className={s.FooterTextAndSM}>
              <p>
                Acompáñame para recibir consejos adicionales y orientación
              </p>
              <div className={s.FooterSocialMedia}>
                {
                  socialsMedia?.map((scm)=>{
                    return (
                      <a key={scm.linkURL} href={scm.linkURL} target="_blank">
                        <img src={scm.icon} alt={scm.icon} />
                      </a>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={`container ${s.FooterCopyright}`}>
        <p>Rebeca Aguilar {date.getFullYear()} - Powered by <strong>NEURO STUDIO</strong></p>
      </div>
    </footer>
  )
}

export const socialsMedia = [
  {
    icon: "assets/icons/iconTelegramFooter.svg",
    linkURL: "/",
  },
  {
    icon: "assets/icons/iconSpotifyFooter.svg",
    linkURL: "/",
  },
  {
    icon: "assets/icons/iconTikTokFooter.svg",
    linkURL: "/",
  },
  {
    icon: "assets/icons/iconInstagramFooter.svg",
    linkURL: "/",
  },
]