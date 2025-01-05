import BHLogo from "@/assets/bh-logo.png";
import CallIcon from "@/assets/material-symbols_call.svg";
import { Button } from "@/components/ui/button";

function MainHeader() {
  return (
    <div className="h-[72px] xl:h-[90px] flex items-center justify-center w-full bg-white z-10 relative">
      <div className="w-full xl:w-[1200px] px-5 xl:px-0 flex items-center justify-between">
        <img src={BHLogo} />
        <Button className="border-[#F2B304] border w-[42px] h-[42px] rounded p-0">
          <img src={CallIcon} width={18} height={18} />
        </Button>
      </div>
    </div>
  );
}

export default MainHeader;
