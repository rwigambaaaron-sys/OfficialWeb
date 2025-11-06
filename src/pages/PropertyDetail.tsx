import { useParams, Link } from "react-router-dom";
import { properties } from "@/data/properties";
import { Button } from "@/components/ui/button";
import { Bed, Bath, Square, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === Number(id));

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Property Not Found</h1>
          <Link to="/">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Listings
          </Link>

          <div className="mb-8">
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h1 className="text-4xl font-bold mb-4 text-foreground">{property.name}</h1>
              <p className="text-xl text-muted-foreground mb-6">{property.location}</p>
              
              <div className="flex items-center gap-6 mb-8 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Bed className="h-5 w-5 text-primary" />
                  <span>{property.beds} Beds</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="h-5 w-5 text-primary" />
                  <span>{property.baths} Baths</span>
                </div>
                <div className="flex items-center gap-2">
                  <Square className="h-5 w-5 text-primary" />
                  <span>{property.size}</span>
                </div>
              </div>

              <p className="text-3xl font-bold text-primary mb-8">{property.price}</p>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {property.description}
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Property Type</h2>
                <p className="text-muted-foreground capitalize">
                  {property.propertyType} • For {property.type}
                </p>
              </div>

              <Button
                onClick={scrollToContact}
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-6 text-lg transition-all duration-300 hover:scale-105"
              >
                Contact Agent
              </Button>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Property Highlights</h2>
              <div className="bg-secondary/50 p-6 rounded-xl">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    {property.beds} spacious bedrooms
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    {property.baths} modern bathrooms
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    {property.size} of living space
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    Prime location in {property.location}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PropertyDetail;
