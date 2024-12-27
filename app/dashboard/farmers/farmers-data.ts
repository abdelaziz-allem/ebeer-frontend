export interface Farmer {
  id: number;
  name: string;
  specialty: string;
  location: string;
  imageUrl: string;
}

export const farmers: Farmer[] = [
  {
    id: 1001,
    name: "John Appleseed",
    specialty: "Organic Apples",
    location: "Wenatchee, WA",
    imageUrl: "/farmer.png",
  },
  {
    id: 1002,
    name: "Sarah Cornfield",
    specialty: "Sweet Corn",
    location: "DeKalb, IL",
    imageUrl: "/farmer.png",
  },
  {
    id: 1003,
    name: "Miguel Rodriguez",
    specialty: "Avocados",
    location: "Fallbrook, CA",
    imageUrl: "/farmer.png",
  },
  {
    id: 1004,
    name: "Emma Wheatley",
    specialty: "Organic Wheat",
    location: "Colfax, WA",
    imageUrl: "/farmer.png",
  },
  {
    id: 1005,
    name: "Raj Patel",
    specialty: "Cotton",
    location: "Lubbock, TX",
    imageUrl: "/farmer.png",
  },
  {
    id: 1006,
    name: "Olivia Grapevine",
    specialty: "Wine Grapes",
    location: "Napa, CA",
    imageUrl: "/farmer.png",
  },
  {
    id: 1007,
    name: "Chen Wei",
    specialty: "Rice",
    location: "Crowley, LA",
    imageUrl: "/farmer.png",
  },
  {
    id: 1008,
    name: "Liam O'Dairy",
    specialty: "Organic Dairy",
    location: "Tillamook, OR",
    imageUrl: "/farmer.png",
  },
];
