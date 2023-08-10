import Image from "next/image";

const SecondHeroSection = () => {
  return (
    <div
      id="section-2"
      className="flex flex-col w-full md:w-2/5 lg:inline-block"
    >
      <Image
        className="w-full rounded-md"
        src="/assets/blog/banner-pic.png"
        width={562}
        height={337}
        alt="banner-icon"
        priority
      />

      <div id="details" className="ml-0 mt-0 flex flex-col">
        <p className="mt-4 text-[#A9A9A9] text-sm font-normal">MM/DD/YYYY</p>
        <p className="mt-4 text-primary text-xl font-bold">
          Gorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p className="mt-4 text-base font-normal not-italic tracking-tight text-white">
          Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </p>
      </div>
    </div>
  );
};

export default SecondHeroSection;
