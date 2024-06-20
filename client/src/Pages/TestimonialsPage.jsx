import { BookBanner } from "../components/BookBanner";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import Testimonials from "../components/Testimonials";

function TestimonialsPage() {
  return (
    <>
      <section className="testimonial-page">
        <HeroPages name="Testimonials" />
        <Testimonials />
        <BookBanner />
        <Footer />
      </section>
    </>
  );
}

export default TestimonialsPage;
