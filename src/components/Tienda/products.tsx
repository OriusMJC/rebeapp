import s from "@/styles/tienda/StoreProducts.module.css";

export default function StoreProducts() {
  return (
    <section>
      <div className={`container ${s.StoreProductsContainer}`}>
        {productsInfo.map((product, index) => (
          <StoreProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
}

export function StoreProductCard({ product }: { product: ProductType }) {
  return (
    <a
      className={s.StoreProductCard}
      href={product.link}
      target="_blank"
      rel="noreferrer"
    >
      <picture className={s.StoreProductCardContent}>
        <img src={product.img} alt={product.title} title={product.title} />
      </picture>
      <div className={s.StoreProductCardFooter}>
        <label className="font-description-2">{product.title}</label>
      </div>
    </a>
  );
}

type ProductType = {
  title: string;
  link: string;
  img: string;
};

const productsInfo = [
  {
    title: "Curso de alimentación intuitiva Re conecta",
    link: "https://hotmart.com/es/marketplace/productos/curso-de-alimentacion-intuitiva-re-conecta/D89570224D",
    img: "/assets/img/products/reconecta.webp",
  },
];
