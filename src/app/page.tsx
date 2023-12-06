import Image from "next/image";
import s from "./page.module.css";
import Button from "@/components/Button";
import MessageBlock from "@/components/MessageBlock/MessageBlock";
import Hero from "./Home/Hero";
import AboutMe from "./Home/AboutMe";
import MyServices from "./Home/MyServices";
import Testimonials from "./Home/Testimonials";
import Contact from "./Home/Contact";

export default function Home() {
  return (
    <main>
      <Hero/>
      <AboutMe/>
      <MessageBlock>
        "Nutre tu mente y cuerpo con decisiones conscientes, trazando el camino
        hacia un bienestar integral que te pertenece por completo."
      </MessageBlock>
      <MyServices/>
      <Testimonials/>
      <Contact/>
    </main>
  );
}
