import Footer from "../Components/Footer";
import Hero from "../Components/Home/Hero";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <div className="bg-black/90">
      <section>
        <Navbar />
      </section>
      <section>
        <Hero />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Home;
