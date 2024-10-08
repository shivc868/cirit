import React, { useState } from "react";
import { styles } from "../common/style";
import ReactCardFlip from "react-card-flip";

const WhyChoose = () => {
  const [offerings, setOfferings] = useState([
    {
      title: "Strategic Partnerships",
      points: [
        "Offer opportunities for cross-promotion with other partners",
        "Provide access to a network of complementary services (e.g., content recommendation)",
      ],
      isHovered: false,
    },
    {
      title: "Maximum CPMs ",
      points: [
        "Offer guaranteed maximum CPMs, especially for premium inventory",
        "Provide fill rate guarantees to ensure consistent revenue",
      ],
      isHovered: false,
    },
    {
      title: "Premium Demand",
      points: [
        "Create tailored and tech solutions that integrate seamlessly with their platforms",
        "Offer exclusive access to cutting-edge AI and machine learning tools for optimization",
      ],
      isHovered: false,
    },
    {
      title: "Data Insights and Analytics",
      points: [
        "Secure and offer access to high-quality, brand-safe advertisers",
        "Develop direct relationships with top-tier brands for their inventory",
      ],
      isHovered: false,
    },
    {
      title: "Brand Safety and Quality",
      points: [
        "Provide advanced analytics and reporting tools",
        "Offer insights that can help improve content strategy and user engagement",
      ],
      isHovered: false,
    },
    {
      title: "Flexible Contracts",
      points: [
        "Implement rigorous brand safety measures",
        "Offer tools to maintain ad quality and relevance",
      ],
      isHovered: false,
    },
    {
      title: "Superior Revenue Sharing",
      points: [
        "Provide trial periods for exclusivity",
        "Offer the ability to opt-out if certain performance metrics aren’t met",
      ],
      isHovered: false,
    },
    {
      title: "Performance Incentives",
      points: [
        "Offer resources or funding for content development or audience acquisition",
        "Provide training and education on ad monetization best practices",
      ],
      isHovered: false,
    },
    {
      title: "Dedicated Support",
      points: [
        "Provide a higher revenue share than competitors",
        "Implement a revenue-sharing model that increases with exclusivity",
      ],
      isHovered: false,
    },
  ]);

  const handleMouseEnter = (index: number) => {
    setOfferings((prevOfferings) =>
      prevOfferings.map((offer, i) =>
        i === index ? { ...offer, isHovered: true } : offer
      )
    );
  };

  const handleMouseLeave = (index: number) => {
    setOfferings((prevOfferings) =>
      prevOfferings.map((offer, i) =>
        i === index ? { ...offer, isHovered: false } : offer
      )
    );
  };

  return (
    <section className="py-14 lg:pt-16 lg:pb-24 px-4 max-w-[920px]  mx-auto">
      <div className={styles.container}>
        <h3 className="text-center pb-12 section-heading">
          Why Choose AirItLive?
        </h3>
        <div className="grid grid-cols-3 place-content-center place-items-center gap-1">
          {offerings.map((offer, i) => (
            <div
              key={i}
              className=" min-h-[140px] sm:min-h-[250px] md:min-h-[320px] max-w-[290px] w-full rounded-[10px]"
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={() => handleMouseLeave(i)}
            >
              <ReactCardFlip
                isFlipped={offer.isHovered}
                flipDirection="horizontal"
                flipSpeedBackToFront={1.5}
                flipSpeedFrontToBack={1.5}
              >
                <div className="rounded-lg cursor-pointer flex flex-col justify-center items-start h-full min-h-[140px] sm:min-h-[250px] md:min-h-[320px] overflow-hidden card-front-side">
                  <h3 className="text-xs sm:text-base md:text-lg lg:text-[22px] h-[70px] sm:h-[125px] font-lato font-normal  px-4 text-white">
                    {offer.title}
                  </h3>
                </div>

                <div className="rounded-lg cursor-pointer flex justify-start flex-col gap-1 md:gap-2 p-2 sm:p-4 h-full min-h-[140px] sm:min-h-[250px] md:min-h-[320px] pt-3 sm:pt-10 overflow-hidden   card-back-side">
                  {offer.points.map((point, index) => (
                    <div className="flex gap-1 md:gap-2 max-w-[254px]">
                      <span className="mt-1.5 lg:mt-3 min-w-1 max-w-1 min-h-1 max-h-1 md:min-w-[10px]   md:max-h-[10px] md:max-w-[10px] md:min-h-[10px] bg-white rounded-full"></span>{" "}
                      <li
                        key={index}
                        className="text-white leading-[1.2] list-none font-normal font-lato text-[9px] sm:text-xs md:text-xl lg:text-2xl"
                      >
                        {point}
                      </li>
                    </div>
                  ))}
                </div>
              </ReactCardFlip>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
