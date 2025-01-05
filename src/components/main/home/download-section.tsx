import MobileMocks from "@/assets/mobile-mocks.png";
import AppStoreButton from "@/assets/appstore.png";
import PlayStoreButton from "@/assets/playstore.png";

function HomeDownloadSection() {
  return (
    <div className="w-full xl:w-[1200px] px-5 xl:px-0 flex flex-col items-start relative z-10 mt-[50px] xl:mt-[122px] mb-10">
      <h3 className="text-text-main text-[24px] xl:text-[36px] font-bold tracking-[0.3px] mb-[30px] xl:mb-[65px]">
        Download our app now
      </h3>
      <div className="w-full flex flex-col items-center xl:flex-row relative shadow-sm pt-4 xl:pt-0 xl:shadow-none xl:mt-[110px] bg-white border-[#EEE7E780] rounded-[18px] xl:bg-none xl:border-none xl:rounded-none">
        <div className="xl:absolute left-[31px] bottom-0 h-[380px] overflow-hidden">
          <img src={MobileMocks} width={400} />
        </div>
        <div
          style={{ boxShadow: "0px 1px 8px 0px #0000000F" }}
          className="xl:h-[265px] xl:bg-white w-full xl:border-[#EEE7E780] xl:rounded-[18px] flex flex-col items-center xl:items-end pb-4 xl:pb-0"
        >
          <div className="xl:mt-[70px] xl:mr-10 mt-4">
            <p className="hidden xl:block text-[#605F5F] text-[20px] font-normal w-[586px]">
              Boost your productivity with the BHIVE Workspace app. Elevate your
              workspace, collaborate efficiently, and unlock exclusive perks.
            </p>
            <div className="flex gap-6 xl:mt-[39px]">
              <a>
                <img width={146} src={PlayStoreButton} />
              </a>
              <a>
                <img width={146} src={AppStoreButton} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeDownloadSection;
