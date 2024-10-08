import React from 'react'
import { Parallax } from 'react-parallax'
import { styles } from '../common/style'
import { useInView } from 'react-intersection-observer'

const OTTServicePage1 = () => {
  const [section1Ref, section1InView] = useInView({ triggerOnce: true })
  const [section2Ref, section2InView] = useInView({ triggerOnce: true })
  const [section3Ref, section3InView] = useInView({ triggerOnce: true })
  const [section4Ref, section4InView] = useInView({ triggerOnce: true })

  return (
    <>
      {/* Section 1 with Parallax */}
      <Parallax
        bgImage="/img/ottmonetization/1.png"
        strength={300}
        className="w-full"
      >
        <section
          ref={section1Ref}
          className={`${styles.container} flex flex-col lg:flex-row items-center justify-between sm:py-20 px-4 transition-opacity duration-1000 ${
            section1InView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="lg:w-[60%] mb-5 lg:mb-0">
            <div className="lg:max-w-2xl bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
              <h1 className="text-3xl font-bold text-[#2D293E]">
                Boost Your Over-The-Top Revenue with AirItLive’s OTT Monetization Solutions
              </h1>
              <p className="text-[#2D293E] font-lato text-xl xl:text-2xl mt-4">
                In the rapidly evolving world of digital streaming, Over-The-Top (OTT) platforms have emerged as a powerful medium for content delivery and audience engagement. With a growing number of viewers turning to OTT for their entertainment needs, it's crucial for publishers to optimize their ad inventory and maximize revenue opportunities. At AirItLive, we specialize in OTT monetization solutions that help you unlock the full potential of your content and drive substantial revenue growth.
              </p>
            </div>
          </div>
        </section>
      </Parallax>

      {/* Section 2 */}
      <section
        ref={section2Ref}
        className={`${styles.container} flex flex-col-reverse lg:flex-row items-center justify-between py-20 px-4 transition-opacity duration-1000 ${
          section2InView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="lg:w-[40%]">
          <img
            src="/img/ottmonetization/2.png"
            className="w-full transform transition-transform duration-500 hover:scale-105"
            alt="Service details"
          />
        </div>
        <div className="lg:w-[60%] mb-5 lg:mb-0">
          <div className="lg:max-w-2xl ml-auto bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-[#2D293E]">
              Why Choose AirItLive for OTT Monetization?
            </h2>
            <ul className="text-[#2D293E] font-lato text-xl xl:text-2xl mt-4 list-disc list-inside">
              <li>Maximize Revenue with Targeted Ad Strategies</li>
              <li>Access to Premium Demand Partners</li>
              <li>Seamless Integration with Top OTT Platforms</li>
              <li>Enhanced Viewer Experience with Dynamic Ad Insertion (DAI)</li>
              <li>Comprehensive Brand Safety and Fraud Protection</li>
              <li>Real-Time Analytics and Performance Insights</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3 with Parallax */}
      <Parallax
        bgImage="/img/ottmonetization/3.png"
        strength={300}
        className="w-full"
      >
        <section
          ref={section3Ref}
          className={`${styles.container} flex flex-col lg:flex-row items-center justify-between sm:py-20 px-4 transition-opacity duration-1000 ${
            section3InView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="lg:w-[60%] mb-5 lg:mb-0">
            <div className="lg:max-w-2xl bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-[#2D293E]">
                How AirItLive's OTT Monetization Solutions Work
              </h2>
              <ul className="text-[#2D293E] font-lato text-xl xl:text-2xl mt-4 list-disc list-inside">
                <li>Seamless Platform Integration</li>
                <li>Dynamic Ad Insertion (DAI) Technology</li>
                <li>Programmatic and Direct Sales Channels</li>
                <li>AI-Driven Optimization Tools</li>
                <li>Continuous Monitoring and Support</li>
              </ul>
            </div>
          </div>
        </section>
      </Parallax>

      {/* Section 4 */}
      <section
        ref={section4Ref}
        className={`${styles.container} flex flex-col-reverse lg:flex-row items-center justify-between py-20 px-4 transition-opacity duration-1000 ${
          section4InView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="lg:w-[40%]">
          <img
            src="/img/ottmonetization/4.png"
            className="w-full transform transition-transform duration-500 hover:scale-105"
            alt="Service details"
          />
        </div>
        <div className="lg:w-[60%] mb-5 lg:mb-0">
          <div className="lg:max-w-2xl ml-auto bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-[#2D293E]">
              Benefits of Choosing AirItLive for OTT Monetization
            </h2>
            <p className="text-[#2D293E] font-lato text-xl xl:text-2xl mt-4">
              <strong>Increased Revenue Potential:</strong> Drive higher CPMs with optimized ad strategies tailored for OTT platforms.<br />
              <strong>Premium Inventory Access:</strong> Fill your ad slots with high-quality, engaging ads from top-tier demand partners.<br />
              <strong>Enhanced Viewer Experience:</strong> Maintain a smooth, engaging viewer experience with dynamic ad placement.<br />
              <strong>Comprehensive Analytics:</strong> Use real-time data and insights to refine and improve your monetization efforts.<br />
              <strong>Brand Safety and Compliance:</strong> Ensure your brand is protected with advanced safety and fraud prevention measures.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 (Center-Aligned Content) */}
      <section className="w-full bg-[#f8f9fa] py-20 px-4 text-center transition-opacity duration-1000">
        <h2 className="text-3xl font-bold text-[#2D293E] mb-6">
          Ready to Elevate Your OTT Monetization?
        </h2>
        <p className="text-[#2D293E] font-lato text-xl xl:text-2xl max-w-4xl mx-auto">
          Join the leading publishers who trust AirItLive for their OTT monetization needs. Our innovative solutions, advanced technology, and dedicated support team are here to help you maximize your ad revenue and elevate your OTT strategy.
        </p>
        <p className="text-[#2D293E] font-lato text-xl xl:text-2xl mt-4 max-w-4xl mx-auto">
          <strong>Contact us now</strong> to learn more about how our OTT monetization solutions can benefit your business.
        </p>
      </section>
    </>
  )
}

export default OTTServicePage1
