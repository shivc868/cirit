import React from "react";
import { styles } from "./style";
import Link from "next/link";
import { footerData, socialLinks } from "./Helper";
import { ExternalIcon } from "./Icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-aswadBlack text-gray-300 py-9 sm:py-10 px-4  font-inter">
      <div className={styles.container}>
        <img src="/img/logo.png" className="hidden md:block w-[100px]" alt="" />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-7 lg:gap-0 mt-3">
          {footerData.map((section, index) => (
            <div key={index}>
              <h3 className="text-white text-sm leading-[164.555%] font-semibold mb-[9.4px]">
                {section.title}
              </h3>
              <ul className="space-y-[9.4px] ">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="">
                    <Link
                      href={link.href}
                      className="text-[10px] sm:text-xs gap-0.5 font-light leading-[130%] hover:underline flex justify-start items-start duration-300 ease-in-out transition-all"
                    >
                      {link.name}
                      {link.isExternal && (
                        <span>
                          <ExternalIcon />
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="text-white text-sm leading-[164.555%] font-semibold mb-[9.4px]">
              Get the Latest Insights
            </h3>
            <p className="text-[10px] sm:text-xs font-light leading-[147.899% ] hover:underline duration-300 ease-in-out transition-all mb-[9.4px]">
              Subscribe to our newsletter and receive cutting-edge digital
              advertising insights delivered right to your inbox.
            </p>
            <form>
              <input
                type="email"
                required
                placeholder="Email"
                className="w-full py-1.5 mb-5 !bg-transparent  focus:outline-none text-white placeholder-text-light-gray text-xs font-bold border-b-[0.625px] border-main-bg"
              />
              <button
                type="submit"
                className="rounded-[15.625px]  border-[1.25px] border-main-bg  h-7 sm:h-8  flex justify-center items-center text-main-bg text-sm font-semibold leading-none shadow-[0px_2.5px_8.375px_0px_#FFF] px-5 py-1 text-center hover:shadow-none duration-300 ease-in-out transition-shadow"
              >
                Subscribe
              </button>
            </form>
            <div className="flex space-x-1.5 items-center mt-8">
              {socialLinks.map((link, index) => (
                <Link
                  href={link.href}
                  key={index}
                  className="hover:-translate-y-2 duration-300 ease-in-out transition-transform"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
