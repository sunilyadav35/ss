'use client'

import React from "react";
import "./hero.css";
import { Fade } from "react-awesome-reveal";
import emoji from "react-easy-emoji";
import { greeting } from "@/Editme";
import Button from "@/components/ui/Button";
import SocialMedia from "@/components/socailMedia/SocialMedia";

export default function Hero() {
  return (
    <Fade  duration={1000} >
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">
                {greeting.title} <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" className={undefined} newTab={undefined} />
                <Button text="See my resume" newTab={true} href={greeting.resumeLink} className={undefined} />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {/* <img alt="saad sitting on table" src={manOnTable}></img> */}
          </div>
        </div>
      </div>
    </Fade>
  );
}
