import React from 'react'
import {apple, bill, google} from '../assets'
import styles, {layout} from '../style'

const Billing = () => {
  return (
    <section id='products' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className='w-full h-full relative z-[5]'/>
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily Control Your  <br className='sm:block hidden'/> Billing & Invoincing</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can change your
          financial life by building credit, earning rewards 
          and saving money. But with hundrends of credit cards in the market.
        </p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={google} alt="google_play" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'/>
          <img src={apple} alt="applestore" className='w-[128px] h-[42px] object-contain cursor-pointer'/>
        </div>
      </div>
    </section>
  )
}

export default Billing