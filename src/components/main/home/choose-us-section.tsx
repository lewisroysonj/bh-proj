import CafeIcon from "@/assets/properties/cafe.svg";
import EventsIcon from "@/assets/properties/events.svg";
import AffordableIcon from "@/assets/properties/affordable.svg";
import GymIcon from "@/assets/properties/gym.svg";
import LoungesIcon from "@/assets/properties/lounges.svg";
import QuickIcon from "@/assets/properties/quick.svg";
import SportsIcon from "@/assets/properties/sports.svg";
import WifiIcon from "@/assets/properties/wifi.svg";
import { cn } from "@/lib/utils";

function HomeChooseUsSection() {
  const properties = [
    {
      icon: EventsIcon,
      text: "Community Events",
    },
    {
      icon: GymIcon,
      text: "Gym Facilities",
    },
    {
      icon: WifiIcon,
      text: "High-Speed WiFi",
    },
    {
      icon: CafeIcon,
      text: "Cafe & Tea Bar",
    },
    {
      icon: AffordableIcon,
      text: "Affordable",
    },
    {
      icon: LoungesIcon,
      text: "Comfort Lounges",
    },
    {
      icon: QuickIcon,
      text: "Quick Booking",
    },
    {
      icon: SportsIcon,
      text: "Sports Area",
    },
  ];

  return (
    <div className="w-full xl:w-[1200px] px-5 xl:px-0 flex flex-col items-start relative z-10 mt-[50px] xl:mt-9">
      <h3 className="text-text-main text-[24px] xl:text-[36px] font-bold tracking-[0.3px] mb-[30px] xl:mb-9">
        Why Choose us?
      </h3>
      <div className="grid grid-cols-2 grid-flow-row xl:grid-cols-4 gap-3 xl:gap-0 w-full">
        {properties.map((item, index) => {
          const isLastItemInRow = index === 3 || index === 7;
          const isFirstRow = index < 4;

          return (
            <div
              key={item.text}
              className={cn(
                {
                  "xl:border-r": !isLastItemInRow,
                  "xl:border-b": isFirstRow,
                },
                "flex flex-col items-center justify-center gap-2 w-full h-[80px] bg-white rounded-[6px] shadow-sm",
                "xl:flex-row xl:justify-start xl:gap-4 xl:w-[300px] xl:pl-6 xl:border-[#D3D3D360] xl:bg-transparent xl:shadow-none xl:rounded-none"
              )}
            >
              <img src={item.icon} />
              <h4>{item.text}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomeChooseUsSection;
