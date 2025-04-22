"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
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
              "url(https://lirp.cdn-website.com/c3913815/dms3rep/multi/opt/461450938229606614-2880w.jpg)",
            backgroundAttachment: "fixed",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className=" flex flex-col items-center">
          <div className="relative z-10 text-center p-8 bg-white/85 max-w-2xl border-b-4 border-[#a1a1a1]">
            <h1 className="leading-snug text-4xl md:text-4xl md:leading-snug mb-4 font-alef">
              Commercial Ceiling and Partition Installations in Clayton
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
        <p className="max-w-4xl mx-auto text-base text-[#242424] font-light font-roboto leading-6">
          Aflux Interior Linings is your local professional installer of
          commercial interior linings for new builds and renovations of office
          blocks, retail premises and other businesses. We provide expert advice
          and practical solutions for ceilings, walls, partitions and
          plastering, that's functional and decorative, whilst complying with
          all building codes for safety and other important specifications. When
          you choose us for your commercial interiors you're assured to receive
          top quality results every time.
        </p>
      </section>

      {/* Two Column Section with Parallax */}
      <section className="relative py-16 bg-transparent overflow-hidden">
        {/* Parallax background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://lirp.cdn-website.com/c3913815/dms3rep/multi/opt/817907481617227034-2880w.jpg)",
            backgroundAttachment: "fixed",
          }}
        ></div>

        {/* Optional white overlay for readability */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Foreground content */}
        <div className="relative container mx-auto grid md:grid-cols-2 gap-2 px-4 z-10">
          <div className="bg-white/85 p-8 shadow-md">
            <h2 className="text-2xl font-bold mb-4 font-alef">
              The Right Lining for the Right Application
            </h2>
            <p className="font-roboto">
              Aflux Interior Linings understands that every project is unique,
              with different requirements so we provide our expert advice on the
              best solutions to ensure the best outcome and finish while
              remaining within the specified budget. This means we provide our
              services and expertise tailored to every individual building
              project while being flexible and mindful of any future obstacles
              that may arise. We'll turn your visions into a finished result
              that exceeds all your expectations.
            </p>
          </div>

          <div className="bg-white/85 p-8 shadow-md">
            <h2 className="text-2xl font-bold mb-4 font-alef">
              Complete Range of Interior Lining Solutions
            </h2>
            <p className="mb-4 font-roboto">
              We're proud to offer all our customers the highest standards of
              workmanship on a complete range of interior lining solutions for
              commercial buildings. We can professionally install:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Walls and partitions made from various products to suit your
                requirements
              </li>
              <li>Ceilings</li>
              <li>Basic and decorative plasterwork</li>
              <li>
                Technical boards that comply with all relevant building codes
              </li>
              <li>
                Multi-application linings for a range of different applications
                and purposes
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-8 font-alef">
          Great Expertise, Great Results
        </h2>
        <p className="max-w-4xl mx-auto text-base font-light font-roboto leading-6">
          Established in 2017, we're a new business bringing fresh ideas a
          wealth of experience to the installation of commercial interior
          linings. We offer true value and unparalleled insight into the right
          application for the project at hand, and our commitment and dedication
          means we always finish on time and on budget with superb results.
        </p>
        <Button
          variant="outline"
          className="min-w-[200px] px-[40px] py-[22px] relative z-10 mt-4 text-lg font-roboto font-light rounded-full border-2 border-[#242424] bg-[#a1a1a1] hover:bg-white/85 text-white"
          onClick={() => handleNavigate("/services")}
        >
          Services
        </Button>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-[#a1a1a1] text-white text-center">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center">
          <p className=" text-2xl font-medium mb-2 font-alef max-w-[600px]">
            Trust the professionals with all your interior lining solutions,
            call Aflux Interior Linings on 03 9894 4488
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
