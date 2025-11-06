import { useState } from "react";
import { properties, Property} from "@/data/properties";
import PropertyCard from "./PropertyCard";
import { Home, HousePlus, Building2} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PropertyGrid = () => {
  const [filter, setFilter] = useState<"all" | "sale" | "rent">("all");
  const [propertyTypeFilter, setPropertyTypeFilter] = useState<string>("all");

  const filteredProperties = properties.filter((property) => {
    const matchesType = filter === "all" || property.type === filter;
    const matchesPropertyType = propertyTypeFilter === "all" || property.propertyType === propertyTypeFilter;
    return matchesType && matchesPropertyType;
  });

  return (
    <section id="properties" className="py-20 px-6 sm:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Featured Listings
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of exceptional properties
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
          <div className="flex gap-4">
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
                filter === "all"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              All Properties
            </button>
            <button
              onClick={() => setFilter("sale")}
              className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
                filter === "sale"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              <Home className="h-5 w-5" />
              For Sale
            </button>
            <button
              onClick={() => setFilter("rent")}
              className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
                filter === "rent"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              <HousePlus className="h-5 w-5" />
              For Rent
            </button>
          </div>

          <Select value={propertyTypeFilter} onValueChange={setPropertyTypeFilter}>
            <SelectTrigger className="w-[180px] bg-secondary text-secondary-foreground">
              <Building2 className="h-5 w-5 mr-2" />
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="condo">Condo</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyGrid;
