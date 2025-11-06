export interface Property {
  id: number;
  name: string;
  location: string;
  description: string;
  price: string;
  image: string;
  beds: number;
  baths: number;
  size: string;
  type: "sale" | "rent";
  propertyType: "apartment" | "house" | "condo" | "villa";
}

export const properties: Property[] = [
  {
    id: 1,
    name: "Modern Downtown Apartment",
    location: "Kibagabaga, KG 394B St",
    description: "Stunning modern apartment with city views and premium amenities",
    price: "RWF 5,000,000",
    image: "/src/assets/property-1.jpg",
    beds: 2,
    baths: 2,
    size: "1,200 sq ft",
    type: "sale",
    propertyType: "apartment"
  },
  {
    id: 2,
    name: "Luxury Premium Villa",
    location: "Kaciru, KK 144 St",
    description: "Exclusive beachfront property with private access and ocean views",
    price: "RWF 2,500,000",
    image: "/src/assets/property-2.jpg",
    beds: 4,
    baths: 3,
    size: "3,500 sq ft",
    type: "sale",
    propertyType: "villa"
  },
  {
    id: 3,
    name: "Charming Suburban House",
    location: "Gacuriro, KG 253 St",
    description: "Perfect family home with spacious backyard and modern kitchen",
    price: "$4,000/mo",
    image: "/src/assets/property-3.jpg",
    beds: 3,
    baths: 2,
    size: "2,000 sq ft",
    type: "rent",
    propertyType: "house"
  },
  {
    id: 4,
    name: "Urban Loft Condo",
    location: "Kimironko, KK 162 St",
    description: "Contemporary loft with high ceilings and industrial charm",
    price: "RWF 7,650,000",
    image: "/src/assets/property-1.jpg",
    beds: 1,
    baths: 1,
    size: "900 sq ft",
    type: "sale",
    propertyType: "condo"
  },
  {
    id: 5,
    name: "Cozy Apartment",
    location: "Nyamata, KK 312 St",
    description: "Comfortable apartment near parks and public transportation",
    price: "$2,500/mo",
    image: "/src/assets/property-2.jpg",
    beds: 2,
    baths: 1,
    size: "1,000 sq ft",
    type: "rent",
    propertyType: "apartment"
  },
  {
    id: 6,
    name: "Executive House",
    location: "Town Square, KK 334 St",
    description: "Luxury executive home with premium finishes and smart features",
    price: "RWF 3,850,000",
    image: "/src/assets/property-3.jpg",
    beds: 5,
    baths: 4,
    size: "4,200 sq ft",
    type: "sale",
    propertyType: "house"
  }
];
