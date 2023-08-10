const FirstHeroSection = () => {
  return (
    <div id="section-1" className="w-full md:w-3/5 lg:inline-block pb-0">
      <div className="flex justify-center md:justify-start ">
        <hr className="w-11/12 md:w-3/4 bg-white h-px" />
      </div>
      <div
        id="immer-title"
        className="w-full  flex flex-col text-6xl md:text-8xl lg:text-9xl 
        leading-[80px] md:leading-[120px] lg:leading-[135px] text-[#D9D9D9]
        text-center md:text-left md:justify-start justify-center  font-black not-italic capitalize pt-12"
      >
        <p>explore</p>
        <div className="flex flex-row lowercase gap-2 lg:gap-8 text-center md:text-left md:justify-start justify-center">
          <p className="lowercase">the</p>
          <p>world</p>
        </div>

        <div className="flex flex-row gap-5 text-center md:text-left md:justify-start justify-center ">
          <p className="lowercase">of</p>
          <p className="text-primary lowercase">immer</p>
        </div>
      </div>
      <div className="flex justify-center md:justify-start pb-14 md:pb-0">
        <hr className="w-11/12 md:w-3/4 bg-white h-px md:mt-16 mt-8" />
      </div>
    </div>
  );
};

export default FirstHeroSection;
