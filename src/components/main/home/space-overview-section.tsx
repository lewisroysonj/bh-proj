import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DirIcon from "@/assets/assistant_direction.svg";
import ArrIcon from "@/assets/arrow-icon.svg";
import WorkspaceIcon from "@/assets/workspace-icon.svg";

import { Button } from "@/components/ui/button";
import { useMemo } from "react";
import { ISpaceItem } from "@/lib/types/spaces";
import { useAppSelector } from "@/lib/hooks/use-store";

function HomeOverviewSection() {
  const spacesData = useAppSelector((state) => state.spaces.spaces);

  return (
    <div className="w-full xl:w-[1200px] px-5 xl:px-0 flex flex-col items-start relative z-10 mt-[50px] xl:mt-[120px]">
      <h3 className="text-text-main text-[24px] xl:text-[36px] font-bold tracking-[0.3px] mb-[30px] xl:mb-9">
        Our Space Overview
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full gap-[16px] xl:gap-[45px]">
        {spacesData.map((item) => {
          return <OverviewCard key={item.id} itemDetails={item} />;
        })}
      </div>
    </div>
  );
}

function OverviewCard({ itemDetails }: { itemDetails: ISpaceItem }) {
  const {
    name,
    images,
    is_day_pass_enabled,
    day_pass_price,
    day_pass_discounts_percentage,
    google_maps_url,
  } = itemDetails;

  const discountedPriceOnBulk = useMemo(() => {
    return (
      (day_pass_price -
        day_pass_price * (day_pass_discounts_percentage[10].value / 100)) *
      10
    ).toFixed();
  }, [day_pass_discounts_percentage, day_pass_price]);
  return (
    <Card className="w-full xl:w-[370px] bg-white">
      <CardHeader className="flex flex-row justify-between items-start pt-4 px-3 pb-[18px]">
        <CardTitle className="text-[20px] w-[240px] leading-6">
          {name}
        </CardTitle>
        <a href={google_maps_url} target="_blank" referrerPolicy="no-referrer">
          <span className="mt-0 flex flex-col gap-2 rounded-[6px] items-center justify-center w-[52px] h-[52px] bg-[#F9F9F9] border border-[#EEE7E7] text-[8px] text-[#26323880]">
            <img src={DirIcon} />
            <span>6 Kms</span>
          </span>
        </a>
      </CardHeader>
      <CardContent className="w-full xl:w-[346px] my-0 mx-auto px-3 pb-[18px] relative">
        <div
          style={{
            background:
              "linear-gradient(100.27deg, #263238 22.66%, #2F4B59 67.67%)",
          }}
          className="absolute left-5 top-2 h-[32px] px-2 flex items-center gap-2 border-[#FFBB008] rounded-[5px]"
        >
          <img src={WorkspaceIcon} />
          <span
            className="text-primary-2 text-sm leading-[16.94px] tracking-[2px]"
            style={{ textShadow: "0px 1px 3px #FFD04F99" }}
          >
            Workspace
          </span>
        </div>
        <img
          src={`${images[0]}`}
          className="h-[202px] w-full xl:w-[346px] object-cover rounded-[6px] overflow-hidden"
        />
      </CardContent>
      <CardFooter className="flex justify-between pt-1 px-3 pb-3">
        {is_day_pass_enabled ? (
          <Button
            asChild
            className="py-2 px-3 bg-secondary-button-main border-secondary-button-stroke cursor-pointer"
          >
            <div className="h-[66px] w-[167px] flex justify-between">
              <div className="flex flex-col gap-2">
                <h4 className="text-sm font-medium text-[#65624C]">Day Pass</h4>
                <h5 className="text-[20px] font-semibold">
                  ₹ {day_pass_price}
                  <span className="text-[12px] font-medium opacity-80">
                    / Day
                  </span>
                </h5>
              </div>
              <img src={ArrIcon} />
            </div>
          </Button>
        ) : null}
        <Button
          asChild
          className="py-2 px-3 bg-primary-button-main border-primary-button-stroke cursor-pointer"
        >
          <div className="h-[66px] w-[167px] flex justify-between">
            <div className="flex flex-col gap-2">
              <h4 className="text-sm font-medium text-[#65624C]">Bulk Pass</h4>
              <h5 className="text-[20px] font-semibold">
                ₹ {discountedPriceOnBulk}
                <span className="text-[12px] font-medium opacity-80">
                  / 10 Days
                </span>
              </h5>
            </div>
            <img src={ArrIcon} />
          </div>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default HomeOverviewSection;
