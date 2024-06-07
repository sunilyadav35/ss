"use client";

import React from "react";
import "./hero.css";
import { Fade } from "react-awesome-reveal";
import emoji from "react-easy-emoji";
import hello from '../../../public/images/hello.svg'
import { greeting } from "@/Editme";
import { Dock, DockIcon } from "@/components/ui/dock";
import { Facebook, Github, Instagram, Linkedin, Mail } from "lucide-react";
import ShimmerButton from "@/components/ui/Button";
import Image from 'next/image';

export default function Hero() {
  return (
    <Fade duration={1000}>
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
              <Dock>
                <DockIcon>
                  {/* Replace with actual icons or content */}
                  <Github />
                </DockIcon>
                <DockIcon>
                  <Linkedin />
                </DockIcon>
                <DockIcon>
                  <Facebook />
                </DockIcon>
                <DockIcon>
                  <Instagram />
                </DockIcon>
                <DockIcon>
                  <Mail />
                </DockIcon>
              </Dock>
              <div className="button-greeting-div gap-2">
                <ShimmerButton>CONTACT ME</ShimmerButton>
                <ShimmerButton>DOWNLOAD MY RESUME</ShimmerButton>
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
          <Image alt="Sunil seating" src={hello} layout="intrinsic" width={800} height={800} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
