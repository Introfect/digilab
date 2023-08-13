import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Profuct from "@/components/Profuct";
import RedefiningProduct from "@/components/RedefiningProduct";
import Testimonial from "@/components/Testimonial";
import Blogpost from "@/components/Blogpost";
import LogoSection from "@/components/LogoSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="h-screen bg-blue-600">
        <Navbar />
        <Hero />
      </div>
      <div className="bg-white text-black min-h-screen">
        <Profuct />
      </div>
      <div className="w-full">
        <RedefiningProduct />
      </div>
      <div>
        <Testimonial />
      </div>
      <div>
        <Blogpost />
      </div>
      <div>
        <LogoSection />
      </div>
      <div>
        <CallToAction />
      </div>
      <div></div>
      <Footer />
    </div>
  );
}
