"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import ImageGallery from "@/components/ImageGallery";

const galleryImgs = [
  "https://lirp.cdn-website.com/c3913815/dms3rep/multi/opt/829954062333316286-800h.jpg",
  "https://lirp.cdn-website.com/c3913815/dms3rep/multi/opt/817907481617227034-800h.jpg",
  "https://lirp.cdn-website.com/c3913815/dms3rep/multi/opt/520683407949929479-800h.jpg",
  "https://lirp.cdn-website.com/c3913815/dms3rep/multi/opt/595728434776509931-800h.jpg",
  "https://lirp.cdn-website.com/c3913815/dms3rep/multi/opt/461450938229606614-800h.jpg",
  "https://lirp.cdn-website.com/c3913815/dms3rep/multi/opt/590192340628231809-800h.jpg",
  "https://lirp.cdn-website.com/c3913815/dms3rep/multi/opt/497920120737160123-800h.jpg",
  "https://lirp.cdn-website.com/c3913815/dms3rep/multi/opt/20190605164856-800h.png",
  "https://lirp.cdn-website.com/c3913815/dms3rep/multi/opt/343311711081320446-800h.jpg",
  "https://lirp.cdn-website.com/c3913815/dms3rep/multi/opt/276582468182524995-800h.jpg",
  "https://lirp.cdn-website.com/c3913815/dms3rep/multi/opt/257722938328997381-800h.jpg",
  "https://lirp.cdn-website.com/c3913815/dms3rep/multi/opt/20190605164758-800h.jpg",
  "https://lirp.cdn-website.com/c3913815/dms3rep/multi/opt/19360017771325099-800h.jpg",
  "https://lirp.cdn-website.com/c3913815/dms3rep/multi/opt/4811871900305347-800h.jpg",
  "https://lirp.cdn-website.com/c3913815/dms3rep/multi/opt/20190605164640-800h.jpg",
];

export default function Services() {
  const router = useRouter();
  const handleNavigate = (route: string) => {
    router.push(route);
  };
  return (
    <main className="flex min-h-screen flex-col font-light font-roboto">
      {/* Hero Section with Parallax */}
      <section className="relative h-[500px] flex flex-col items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://lirp.cdn-website.com/c3913815/dms3rep/multi/opt/20190605164640-2880w.jpg)",
            backgroundAttachment: "fixed",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className=" flex flex-col items-center">
          <div className="relative z-10 text-center p-8 bg-white/85 max-w-2xl border-b-4 border-[#a1a1a1]">
            <h1 className="leading-snug text-4xl md:text-4xl md:leading-snug mb-4 font-alef">
              Plastering and Interior Lining Services for Nunawading
            </h1>
          </div>
          <Button
            variant="outline"
            className="min-w-[200px] px-[40px] py-[22px] relative z-10 mt-4 text-lg font-roboto font-light rounded-full border-2 border-[#242424] bg-[#a1a1a1] hover:bg-white/85 text-white"
            onClick={() => handleNavigate("/contact")}
          >
            Contact us
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 container mx-auto text-center px-4">
        <p className="max-w-4xl mx-auto text-base font-light font-roboto leading-6">
          Aflux Interior Linings offers a one-stop shop for all your commercial
          interior linings, ceilings and plastering for new constructions and
          existing buildings. With many years of experience our skilled team
          provides professional solutions and outstanding workmanship for the
          complete range of interior lining services.
        </p>
      </section>

      {/* Two Column Section with Parallax */}
      <section className="relative py-16 bg-transparent overflow-hidden">
        {/* Parallax background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://lirp.cdn-website.com/c3913815/dms3rep/multi/opt/829954062333316286-2880w.jpg)",
            backgroundAttachment: "fixed",
          }}
        ></div>

        {/* Optional white overlay for readability */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Foreground content */}
        <div className="relative container mx-auto grid md:grid-cols-2 gap-2 px-4 z-10">
          <div className="bg-white/85 p-8 shadow-md">
            <h2 className="text-3xl font-bold mb-4 font-alef">
              Walls and Partitions
            </h2>
            <p className="font-light font-roboto leading-6">
              From initial construction to the end results, we can completely
              outfit new buildings with a wide range of interior walls and
              partitions made from a variety of plasterboard, gyprock and
              technical boards. Whether you're starting from scratch or
              upgrading we provide a superior finish that's compliant with all
              relevant building codes.
            </p>
          </div>

          <div className="bg-white/85 p-8 shadow-md">
            <h2 className="text-3xl font-bold mb-4 font-alef">Ceilings</h2>
            <p className="mb-4 font-light font-roboto leading-6">
              Aflux Interior Linings provides a complete range of ceilings and
              plaster work for commercial premises. We take into account how the
              building will be used and we apply our wealth of knowledge to
              advise on fire ratings, suspended ceilings and even decorative
              ceilings that add style and interest to your rooms.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto text-center px-4">
        <h2 className="text-3xl font-normal mb-4 font-alef">
          Technical Boards
        </h2>
        <p className="max-w-4xl mx-auto text-base font-light font-roboto leading-6">
          We can install a range of technical boards for specific applications
          within your commercial building. Whether you need sound resistant
          partitions for conference and event rooms, fire resistant
          plasterboard, water resistant plasterboard for wet areas, or
          combination of technical boards for specialised purposes, we'll advise
          on the best solutions for your needs.
        </p>
      </section>

      <section className="py-20 w-auto px-4 bg-[#a1a1a1]/20">
        <ImageGallery galleryImgs={galleryImgs} />
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-[#a1a1a1] text-white text-center">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center">
          <p className=" text-2xl font-medium mb-2 font-alef max-w-[600px]">
            For all your commercial ceilings and partitions, call us on 03 9894
            4488 today!
          </p>
          <Button
            variant="outline"
            className="min-w-[200px] px-[40px] py-[22px] relative z-10 mt-4 text-lg font-light rounded-full border-2 border-[#242424] bg-[#a1a1a1] hover:bg-white/85 text-white font-roboto"
            onClick={() => handleNavigate("/contact")}
          >
            Request a call back
          </Button>
        </div>
      </section>
    </main>
  );
}
