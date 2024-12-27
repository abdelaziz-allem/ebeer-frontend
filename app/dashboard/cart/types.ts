export interface Farmer {
  id: number;
  name: string;
  rating: number;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  farmer: Farmer;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}
