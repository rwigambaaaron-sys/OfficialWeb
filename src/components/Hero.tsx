import { Button } from "./ui/button";
import heroImage from "@/assets/hero-home.webp";

const Hero = () => {
  const scrollToProperties = () => {
    const element = document.getElementById("properties");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center text-white px-6 sm:px-8 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
          Find Your Dream Property In Rwanda
        </h1>
        <p className="text-lg sm:text-xl mb-8 text-white/90 animate-fade-in">
          We specialize in residential, commercial, and farmland properties
        </p>
        <Button
          onClick={scrollToProperties}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          View Listings
        </Button>
      </div>
    </section>
  );
};

export default Hero;
