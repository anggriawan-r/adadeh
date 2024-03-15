import React from "react";
import Image from "next/image";

interface Hero {
  id: number;
  bgColor: string;
  imageUrl: string;
  title: string;
  imageAlt: string;
  buttonUrl: string;
  isButtonDark?: boolean;
}

interface HeroSectionProps {
  heroes: Hero[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ heroes }) => {
  return (
    <>
      {heroes.map((hero) => (
        <div
          key={hero.id}
          className={`mb-2 ${hero.bgColor} px-4 py-20 text-white sm:px-6 lg:px-8`}
        >
          <div className="max-w-7xl">
            <div className="lg:flex lg:justify-center">
              <div className="my-auto ml-32 lg:w-1/2">
                <h2
                  className={`mb-4 text-5xl font-semibold ${hero.isButtonDark ? "text-white" : "text-black"}`}
                >
                  {hero.title}
                </h2>
                <a
                  className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
                  href={hero.buttonUrl}
                >
                  <span className="absolute inset-0 border border-gray-600 group-active:border-gray-500"></span>
                  <span
                    className={`flex items-center border ${hero.isButtonDark ? "border-white bg-black" : "border-black bg-white text-black"} px-12 py-3 font-medium transition-transform active:border-black active:bg-black group-hover:-translate-x-1 group-hover:-translate-y-1`}
                  >
                    EXPLORE MORE{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="ml-2 h-6 w-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </a>
              </div>
              <div className="ml-40 mt-10 lg:mt-0 lg:w-1/2">
                <Image
                  src={hero.imageUrl}
                  alt={hero.imageAlt}
                  width={600}
                  height={400}
                  className="h-auto w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default HeroSection;
