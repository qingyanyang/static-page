"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col font-light font-roboto">
      {/* Main Content */}
      <section className="py-16 container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center font-alef">
          Interior Lining Solutions in Nunawading
        </h1>
        <p className="max-w-4xl mx-auto text-base text-center mb-8 font-light font-roboto leading-6">
          Aflux Interior Linings provides professional solutions with great
          results for all your commercial interior linings such as ceilings,
          partitions, plasterboard, gyprock and sheetrock, as well as basic and
          decorative plastering. Our team of skilled tradesmen will supply and
          install a range of interior linings including technical boards and
          multi applications to meet all building specifications. <br /> <br />
          Give us a call today or enquire online.
        </p>
        <p className="text-center mb-32"></p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-normal mb-6 font-alef">
              Contact information
            </h2>
            <p className="mb-1">13A Ceylon Street</p>
            <p className="mb-4">Nunawading, VIC 3131</p>
            <p className="mb-1">03 9894 4488</p>
            <p className="mb-8 font-bold">afluxinteriorlinings@hotmail.com</p>

            <h2 className="text-3xl font-normal mb-6 font-alef">
              Hours of operation
            </h2>
            <div className="flex justify-between max-w-[300px]">
              <div>
                <p className="mb-1">Mon - Fri</p>
                <p className="mb-1">Sat - Sun</p>
              </div>
              <div className="flex flex-col items-end">
                <p className="mb-1">9:00 am - 5:00 pm</p>
                <p className="mb-1">Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-normal  mb-6 font-alef">
              Send us a message
            </h2>
            <p className="text-red-500 text-sm mb-6">*Required</p>
            <form className="space-y-4">
              <div>
                <label className="block mb-1">
                  <span>*</span>Name:
                </label>
                <Input
                  type="text"
                  required
                  className="border-0 border-b border-black rounded-none"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1">
                    <span>*</span>Email:
                  </label>
                  <Input
                    className="border-0 border-b border-black rounded-none"
                    type="email"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1">
                    <span>*</span>Phone:
                  </label>
                  <Input
                    type="tel"
                    required
                    className="border-0 border-b border-black rounded-none"
                  />
                </div>
              </div>
              <div>
                <label className="block mb-1">
                  <span>*</span>Message:
                </label>
                <Textarea
                  rows={2}
                  required
                  className="border-0 border-b border-black rounded-none"
                />
              </div>
              <div className="flex justify-center md:justify-end">
                <Button
                  variant="outline"
                  className="min-w-[200px] px-[40px] py-[20px] relative z-10 mt-4 text-lg font-roboto font-light rounded-full border-2 border-[#242424] bg-[#a1a1a1] hover:bg-white/85 text-white"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="w-full h-[400px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.3287811730615!2d145.17335081562045!3d-37.81736797975138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6408de28fc227%3A0x9f3df6e739e9a5a9!2s13A%20Ceylon%20St%2C%20Nunawading%20VIC%203131%2C%20Australia!5e0!3m2!1sen!2sau!4v1713779600000!5m2!1sen!2sau"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </main>
  );
}
