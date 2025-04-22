import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white py-8 font-roboto font-thin text-[#242424]">
      <div className="container mx-auto px-4 flex items-start md:flex-row justify-between">
        <div>
          <Image
            src="https://lirp.cdn-website.com/c3913815/dms3rep/multi/opt/C80706-1920w.png"
            alt="Aflux Interior Linings"
            width={120}
            height={48}
          />
        </div>
        <div className="text-center mt-4 md:mt-0 ">
          <p className="font-semibold text-lg">Address</p>
          <p>13A Ceylon Street</p>
          <p>Nunawading, VIC 3131</p>
        </div>
        <div className="text-center mt-4 md:mt-0">
          <h1 className="font-semibold text-lg">Contact details</h1>
          <p>03 9894 4488</p>
          <p className="font-bold">afluxinteriorlinings@hotmail.com</p>
          <p className="font-semibold text-lg">Connect</p>
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="https://www.linkedin.com/in/tiki-qin-148986179/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-[#a1a1a1] border-[3px] p-2 text-[#a1a1a1]"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="currentColor"
              className="h-8 w-8"
            >
              <path d="M100.28 448H7.4V148.9h92.88zm-46.44-341a53.59 53.59 0 1 1 53.59-53.58 53.6 53.6 0 0 1-53.58 53.58zM447.9 448h-92.4V302.4c0-34.7-12.4-58.4-43.4-58.4-23.6 0-37.6 15.9-43.8 31.3-2.3 5.5-2.8 13.2-2.8 20.9V448h-92.5s1.2-241.3 0-266.1h92.4v37.7c12.3-19 34.3-46.2 83.5-46.2 60.9 0 106.6 39.8 106.6 125.4V448z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/afluxinteriorlinings/"
            className="rounded-full border-[#a1a1a1] border-[3px] p-2 text-[#a1a1a1]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8"
            >
              <rect width="21" height="21" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
