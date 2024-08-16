import React from "react";
import ContactForm from "./ContactForm";

import SecondaryButton from "../SecondaryButton";
import { RightArrow } from "../Icons";
import SuccessAction from "@/components/home/SuccessAction";

const ContactUs = () => {
  return (
    <section className="bg-lavender py-9 xl:py-12 px-4">
      <div className="flex justify-between md:flex-row flex-col gap-5 items-center max-w-[1033px] mx-auto">
        <div className="lg:max-w-[558px] space-y-5 md:space-y-10 lg:space-y-14 w-full">
          <h3 className="text-lg sm:text-xl md:text-3xl lg:text-[40px] xl:text-[48px] lg:leading-[119%]">
            Ready to transform your media ecosystem?
          </h3>
          <SecondaryButton className="" icon={true}>
            Become a partner
            <span className="w-[26px] h-[26px] bg-purple rounded-full flex items-center justify-center">
              <RightArrow />
            </span>
          </SecondaryButton>
        </div>
        <ContactForm />
      </div>{" "}
      <SuccessAction />
    </section>
  );
};

export default ContactUs;
