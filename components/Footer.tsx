import React from "react";
import ShimmerButton from "./ui/ShimmerButton";
import { PiMailboxThin } from "react-icons/pi";
import { socialMedia } from "@/data";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full mb-[80px] pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center ">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">Your</span> Digital
          Presence to the Next Level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can achieve your
          goals
        </p>
        <br />

        <a href="mailto:navid.tehseen@gmail.com">
          <ShimmerButton
            title="Let's Connect"
            icon={<PiMailboxThin />}
            position="right"
            otherClasses="cursor-pointer z-10"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Navid Tehseen
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <a
              key={profile.id}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"


              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-dot-black-200 rounded-lg border border-dotted z-10 sm:mt-4"
            >
              <Image src={profile.img} alt={`Social Media ${profile.id}`} width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
