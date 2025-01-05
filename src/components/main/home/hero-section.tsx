import HeroLeftBG from "@/assets/hero-left-bg.png";
import HeroLRightBG from "@/assets/hero-right-bg.png";

function HomeHeroSection() {
  return (
    <div className="w-full flex justify-center xl:h-[460px] items-center">
      <div className="w-full xl:w-[1200px] px-5 xl:px-0 flex flex-col-reverse xl:flex-row gap-[17px] xl:gap-0">
        <h2 className="text-text-main text-[20px] xl:text-[58px] text-center xl:text-left font-bold relative z-10 xl:w-[780px] tracking-[-1px]">
          Host your meeting with world-class amenities. Starting at{" "}
          <span className="text-primary-2">₹199/-!</span>
        </h2>
        <div className="xl:absolute top-[-90px] right-0 z-0">
          <img src={HeroLRightBG} />
        </div>
      </div>
      <div className="hidden xl:block mt-[-90px] absolute top-0 left-0 z-0">
        <img src={HeroLeftBG} />
      </div>
    </div>
  );
}

export default HomeHeroSection;
