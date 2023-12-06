import s from "@/styles/Navbar/Navbar.module.css";
import Link from "next/link";

export type TLinkNav = {
  text: string;
  url: string;
};

export default function Navbar() {
  return (
    <header>
      <nav className={`container`}>
        <div className={`smallContainer ${s.Navbar}`}>
          <Link href="/">
            <img src="/assets/img/RebecaLogo.png" alt="Rebeca Logo" />
          </Link>
          <div className={s.NavbarOptions}>
            {linksNav?.map((obj: TLinkNav) => {
              return (
                <Link key={obj.text} href={obj.url} className="font-text">
                  {obj.text}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}

export const linksNav: TLinkNav[] = [
  {
    text: "Inicio",
    url: "/",
  },
  {
    text: "Tienda",
    url: "/",
  },
  {
    text: "Mis servicios",
    url: "/",
  },
  {
    text: "Sobre mi",
    url: "/",
  },
  {
    text: "Contacto",
    url: "/",
  },
];
