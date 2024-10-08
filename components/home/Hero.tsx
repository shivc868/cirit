import React from "react";
import DataSummaryMetrics from "./DataSummaryMetrics";
import { styles } from "../common/style";
import Link from "next/link";
import SecondaryButton from "../common/SecondaryButton";

const Hero = () => {
  return (
    <section id="hero" className="px-4">
      <div
        className={`${styles.container} py-14 md:pt-24 md:pb-16 flex flex-col gap-4 sm:gap-6`}
      >
        <h1 className="flex flex-col text-[30px] sm:text-[50px] lg:text-[68px] leading-[1]  font-helvetica-bold font-bold tracking-[6.8px]">
          <span className="gradient-hero-main-text text-center sm:text-start leading-[1]">
            One AI Partner
          </span>
          <span className="gradient-hero-main-text text-center sm:text-start leading-[1]">
            Three Media Powerhouses
          </span>
        </h1>
        <p className="text-lg text-center sm:text-start sm:text-[24px] lg:text-[28px] text-plum font-lato font-medium leading-[1.2]">
          Revolutionizing monetization for Sports, News, and Entertainment.
        </p>
        <div className="flex sm:block justify-center mt-3">
          <SecondaryButton
            href="/contact"
            className="border-[3px] lg:text-[28px]  !py-1.5 border-[#802BB1;]"
          >
            Get In Touch
          </SecondaryButton>
        </div>
      </div>

      <div className={styles.container}>
        <DataSummaryMetrics />
      </div>
    </section>
  );
};

export default Hero;
