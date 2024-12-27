import { Farmer, Product } from "./types";

export const farmers: Farmer[] = [
  { id: 1, name: "John Doe", rating: 4 },
  { id: 2, name: "Jane Smith", rating: 5 },
  { id: 3, name: "Bob Johnson", rating: 3 },
  { id: 4, name: "Alice Brown", rating: 4 },
];

export const products: Product[] = [
  {
    id: 1,
    name: "onion",
    price: 2.5,
    farmer: farmers[0],
    image: "/onion.png",
  },
  {
    id: 2,
    name: "tomato",
    price: 3.0,
    farmer: farmers[1],
    image: "/tomato.png",
  },
  {
    id: 3,
    name: "potato",
    price: 4.0,
    farmer: farmers[2],
    image: "/potato.png",
  },
  {
    id: 4,
    name: "carrot",
    price: 5.5,
    farmer: farmers[3],
    image: "/carrot.png",
  },
  {
    id: 5,
    name: "cucumber",
    price: 3.5,
    farmer: farmers[0],
    image: "/cucumber.png",
  },
  {
    id: 6,
    name: "cabbage",
    price: 2.8,
    farmer: farmers[1],
    image: "/cabbage.png",
  },
];
