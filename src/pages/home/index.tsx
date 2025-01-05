import HomeHeroSection from "@/components/main/home/hero-section";
import LayoutMain from "../../layouts/main";
import HomeChooseUsSection from "@/components/main/home/choose-us-section";
import HomeOverviewSection from "@/components/main/home/space-overview-section";
import HomeDownloadSection from "@/components/main/home/download-section";
import { useEffect } from "react";
import { useAppDispatch } from "@/lib/hooks/use-store";
import { setSpaces } from "@/lib/store/spaces";

function PagesHome() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const jsonData = JSON.parse(
      document.getElementById("myJson")?.textContent || "[]"
    );
    dispatch(setSpaces({ spaces: jsonData }));
  }, [dispatch]);

  return (
    <div className="w-full flex flex-col items-center">
      <HomeHeroSection />
      <HomeChooseUsSection />
      <HomeOverviewSection />
      <HomeDownloadSection />
    </div>
  );
}

PagesHome.Layout = LayoutMain;

export default PagesHome;
