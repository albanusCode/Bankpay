import React from 'react'
import { socialMedia } from '../constants'
import styles from '../style'
import { logo } from '../assets'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex flex-col justify-start mr-10'>
          <img src={logo} alt="logo" className='w-[266px] h-[72px] object-contain'/>
        </div>
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          A new way to make the payments easy, realible and secure.
        </p>
      </div>
      <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
        {footerLinks.map((footerlink) => (
          <div className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
            <h4 className='font-poppins font-medium leading-[27px] text-white text-[18px]'>{footerlink.title}</h4>
            <ul className='list-none mt-4'>
              {footerlink.links.map((link, index) => (
                <li key={link.name} className={`${index !== footerlink.links.length - 1 ? 'mb-4' : 'mb-0'} text-dimWhite cursor-pointer hover:text-secondary font-poppins text-[16px] font-normal leading-[24px]`}>
                  <a href={`#${link.id}`}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
        <p className='font-poppins font-normal text-center leading-[27px] text-white text-[16px]'>
          2024 BankPay. All Rights Reserved.
        </p>
        <div className='flex flex-row md:mt-o mt-6'>
          {socialMedia.map((social, index) => (
            <img key={social.id} src={social.icon} alt={social.id} 
              className={`${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'} w-[21px] h-[21px] object-contain cursor-pointer`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Footer