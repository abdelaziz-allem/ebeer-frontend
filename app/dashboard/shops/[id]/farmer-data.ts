export interface ProduceItem {
  id: string;
  name: string;
  price: number;
  unit: string;
  image: string;
}

export interface Farmer {
  id: number;
  name: string;
  specialty: string;
  location: string;
  imageUrl: string;
  bio: string;
  produce: ProduceItem[];
}

export const farmer: Farmer = {
  id: 1001,
  name: "Abdi ali",
  specialty: "Organic Vegetables",
  location: "Wenatchee, WA",
  imageUrl: "/farmer.png",
  bio: "Abdi ali is a third-generation farmer specializing in organic vegetables. With over 20 years of experience, John is committed to sustainable farming practices and delivering the freshest produce to his customers.",
  produce: [
    {
      id: "p1",
      name: "Potatoes",
      price: 1.99,
      unit: "lb",
      image: "/potato.png",
    },
    {
      id: "p2",
      name: "Onions",
      price: 1.49,
      unit: "lb",
      image: "/onion.png",
    },
    {
      id: "p3",
      name: "Carrots",
      price: 2.49,
      unit: "bunch",
      image: "/carrot.png",
    },
    {
      id: "p4",
      name: "Tomatoes",
      price: 3.99,
      unit: "lb",
      image: "/tomato.png",
    },
  ],
};
