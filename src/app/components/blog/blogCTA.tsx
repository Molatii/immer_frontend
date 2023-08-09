"use client";
import CtaSignUp from "./ctaSignup";

type CTABgProps = {
  id: string;
  img: string;
}[];

const CTAImg: CTABgProps = [
  {
    id: "cta-1",
    img: "/assets/blog/cta.png",
  },
];

const BlogCTA = () => {
  const CTABackground = CTAImg;
  return (
    <div
      className="sm:h-[450px] h-auto w-full p-6 sm:p-32 pt-10 sm:pt-16 flex flex-col"
      style={{
        backgroundImage: `url(${CTABackground[0].img})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        className="flex flex-row lg:text-[40px] text-[24px] lg:font-normal font-semibold 
        not-italic leading-normal text-[#495057] gap-2 mb-5 text-left"
      >
        <p>Join the</p>
        <p className="text-primary font-bold">immer</p>
        <p>Revolution</p>
      </div>
      <div>
        <p
          style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          className="text-[#1E1E1E] lg:text-[22px] text-[20px] font-normal
           leading-normal not-italic text-left  mb-20"
        >
          Are you ready to join the future of event coordination? Sign up now to
          be the first to know when immer launches. Don't miss out on the
          opportunity to redefine the way you experience live events.
        </p>
      </div>
      <CtaSignUp />
    </div>
  );
};

export default BlogCTA;
