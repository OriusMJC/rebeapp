import StoreProducts from "@/components/Tienda/products";
import s from "@/styles/tienda/tienda.module.css";
import Contact from "../Home/Contact";

export default function Store() {
  return (
    <main>
      <section className={s.HeroStoreSection}>
        <div className={`container ${s.HeroStoreContainer}`}>
          <h1 className="font-title-header">Mis Productos</h1>
          <h3>
            Explora guías holísticas para optimizar bienestar mental y emocional
            mediante la psicoalimentación profesional.
          </h3>
        </div>
      </section>
      <StoreProducts/>
      <Contact/>
      <section></section>
    </main>
  );
}
