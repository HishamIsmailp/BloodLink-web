import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import FooterLOgo from "../../utils/images/FooterLogo.png";
import RightArrow from "../../utils/images/RightArrow.png";
import facebook from "../../utils/images/facebook.png";
import twitter from "../../utils/images/twitter.png";
import instagram from "../../utils/images/instagram.png";
import Style from '../../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={Style.footer}>
      <div className={Style.footerTop}>
        <div className={Style.footerTop1}>
          <Image src={FooterLOgo} alt={'Footer Logo'}></Image>
        </div>
        <div className={Style.footerTop2}>
          <h4 className={Style.footerH4}>Ready to get started?</h4>
          <button className='btn btn-light ps-5 pe-5 fw-bold fs-4 '>Donate</button>
        </div>
      </div>
      <div className={`${Style.footerCenter} `}>
        <div className={`flex-column d-flex gap-4`}>
        <h3 className='text-white fw-normal'>Subscribe to our <br />newsletter</h3>
        <div className={`${Style.EmailBorder} d-flex`}>
        <input type="email" placeholder='Email address' className={`${Style.footerInput} rounded`}/>
            <button className={`${Style.footerButton2} btn btn-light ps-4 pe-4`}><Image src={RightArrow} alt={''}></Image></button>
            </div>
        </div>
        <div className={`${Style.footerBox}  gap-2`}>
         <Link className='text-white text-decoration-none fw-lighter' href={''}>Services</Link>
         <Link className='text-white text-decoration-none fw-lighter' href={''}>Email Marketing</Link>
         <Link className='text-white text-decoration-none fw-lighter' href={''}>Campaigns</Link>
         <Link className='text-white text-decoration-none fw-lighter' href={''}>Branding</Link>
         <Link className='text-white text-decoration-none fw-lighter' href={''}>Offline</Link>
        </div>

           <div className={`${Style.footerBox}  gap-2`}>
         <Link className='text-white text-decoration-none fw-lighter' href={''}>About</Link>
         <Link className='text-white text-decoration-none fw-lighter' href={''}>Our Story</Link>
         <Link className='text-white text-decoration-none fw-lighter' href={''}>Benefits</Link>
         <Link className='text-white text-decoration-none fw-lighter' href={''}>Team</Link>
         <Link className='text-white text-decoration-none fw-lighter' href={''}>Careers</Link>
        </div>

           <div className={`${Style.footerBox}  gap-2`}>
         <Link className='text-white text-decoration-none fw-lighter' href={''}>Help</Link>
         <Link className='text-white text-decoration-none fw-lighter' href={''}>FAQs</Link>
         <Link className='text-white text-decoration-none fw-lighter' href={''}>Contact Us</Link>
        </div>
        
      </div>
      <div className={Style.footerLast}>
        <div className=' d-flex ps-4 w-50 gap-5'><Link className={Style.anchorTag} href={''}>Terms & Conditions</Link><Link className={Style.anchorTag} href={''}>Privacy Policy</Link></div>
        <div className=' w-25 justify-content-center d-flex gap-5'>
          <Link href={''}><Image src={facebook} alt={'facebookImg'}></Image></Link>
          <Link href={''}><Image src={twitter} alt={'twitterImg'}></Image></Link>
          <Link href={''}><Image src={instagram} alt={'instegramImg'}></Image></Link>
        </div>
      </div>
    </footer>
  )
}
