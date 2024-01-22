import MessageBlock from "@/components/MessageBlock/MessageBlock";
import Hero from "./Home/Hero";
import MyServices from "./Home/MyServices";
import Testimonials from "./Home/Testimonials";
import Contact from "./Home/Contact";
import NewsletterForm from "@/components/NewsLetter/NewsLetter";

export default function Home() {
  return (
    <main>
      <Hero />
      <MessageBlock>
        {'"'}Nutre tu mente y cuerpo con decisiones conscientes, trazando el
        camino hacia un bienestar integral que te pertenece por completo.{'"'}
      </MessageBlock>
      <MyServices />
      <Testimonials />
      <Contact />
      <NewsletterForm />
    </main>
  );
}
