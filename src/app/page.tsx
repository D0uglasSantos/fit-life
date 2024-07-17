import AppSection from "./components/AppSection";
import BannerSection from "./components/BannerSection";
import Footer from "./components/Footer";
import PhotoSection from "./components/PhotoSection";
import VideoSection from "./components/VideoSection";
import CompareSection from "./components/secoundSection";
import PriceSection from "./components/ThirdSection";
import Separator from "./components/Separator";

export default function Home() {
  return (
    <main className="">
      <BannerSection />
      <CompareSection />
      <PriceSection />
      <PhotoSection />
      <VideoSection />
      <AppSection />
      <Footer />
    </main>
  );
}
