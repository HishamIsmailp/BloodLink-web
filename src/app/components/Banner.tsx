import React from 'react';
import Image from "next/image";

import BannerImg from '../../utils/images/banner.png';
import Style from '../../styles/Banner.module.css';

export default function Banner() {
  return (
    <div className="d-flex align-items-center justify-content-between pe-5">
      <Image src={BannerImg} className={Style.bannerImage} alt="banner-img" />
      <div className="d-flex flex-column justify-content-between align-items-end pe-5 me-1">
        <h1 className={Style.bannerTitle}>
          Save Life Donate <br /> Blood{" "}
        </h1>
        <p className="text-end ps-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <button className={`btn btn-dark ${Style.bannerButton}`} >Get Blood Now</button>
      </div>
    </div>
  )
}
