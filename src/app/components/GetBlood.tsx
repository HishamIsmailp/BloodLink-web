import React from 'react';
import Image from 'next/image';

import Style from '../../styles/GetBlood.module.css';
import getBloodImg from '../../utils/images/get-blood-edit.png';

export default function GetBlood() {
  return (
    <div className={Style.getBloodContainer}>
        <h1 className={Style.mainTitle}>How to get Blood?</h1>
        <div className={Style.getBloodContent}>
            <div className={Style.getBloodItems}>
                <h1 className={Style.getBloodItemsCount}>1</h1>
                <div className={Style.getBloodItemsContent}>
                <div className={Style.getBloodItemImg} ><Image src={getBloodImg} alt="getBloodImage" /></div>
                    <p className={Style.getBloodItemText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
            <div className={Style.getBloodItemsCenter}>
                <h1 className={Style.getBloodItemsCount}>2</h1>
                <div className={Style.getBloodItemsContent}>
                    <div className={Style.getBloodItemImg} ><Image src={getBloodImg} alt="getBloodImage" /></div>
                    <p className={Style.getBloodItemText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
            <div className={Style.getBloodItems}>
                <h1 className={Style.getBloodItemsCount}>3</h1>
                <div className={Style.getBloodItemsContent}>
                <div className={Style.getBloodItemImg} ><Image src={getBloodImg} alt="getBloodImage" /></div>
                    <p className={Style.getBloodItemText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
