import React from "react";
import FirstHeroSection from "./firstHeroSection";
import SecondHeroSection from "./secondHeroSection";

type BgImageProps = {
  id: string;
  img: string;
}[];

const HeroImg: BgImageProps = [
  {
    id: "hero-1",
    img: "/assets/blog/hero.png",
  },
];

const BlogHero = () => {
  const HeroBg = HeroImg;

  return (
    <div
      style={{
        backgroundImage: `url(${HeroBg[0].img})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: "45vh",
      }}
      className="pt-20 sm:pt-16 w-full"
    >
      <div
        style={{
          background:
            "linear-gradient(334deg, #0D0D0D 46%, rgba(5, 5, 5, 0.00) 100%)",
        }}
        className="flex flex-col md:flex-row lg:inline-flex w-full justify-between
        items-center p-8 sm:p-12 pt-24 sm:pt-[70px] pb-10"
      >
        <FirstHeroSection />
        <SecondHeroSection />
      </div>
    </div>
  );
};

export default BlogHero;
