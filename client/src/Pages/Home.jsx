import Hero from "../components/Hero";
import BookMachine from "../components/BookMachine";
import PlanTrip from "../components/PlanTrip";
import PickCar from "../components/PickCar";
import Banner from "../components/Banner";
import ChooseUs from "../components/ChooseUs";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import Download from "../components/Download";
import Footer from "../components/Footer";
import SearchBox from "../components/SearchBox";

function Home() {
  return (
    <>
      <Hero />
      <SearchBox />
      <BookMachine />
      <PlanTrip />
      <PickCar />
      <Banner />
      {/* <ChooseUs /> */}
      {/* <Testimonials /> */}
      {/* <Faq /> */}
      {/* <Download /> */}
      <Footer />
    </>
  );
}

export default Home;
