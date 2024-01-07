import s from '@/styles/tienda/StoreProducts.module.css'

export default function StoreProducts(){
  return (
    <section>
      <div className={`container ${s.StoreProductsContainer}`}>
        <StoreProductCard/>
        <StoreProductCard/>
        <StoreProductCard/>
      </div>
    </section>
  )
}

export function StoreProductCard(){
  return (
    <article className={s.StoreProductCard}>
      <div className={s.StoreProductCardContent}>

      </div>
      <div className={s.StoreProductCardFooter}>
        <label className='font-description-2'>Lorem ipsum</label>
      </div>
    </article>
  )
}