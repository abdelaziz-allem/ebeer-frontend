//AuthType START//
export interface AuthType {
  mobileNumber: string;
  password: string;
}
//AuthType END//

//USER START//

export enum ROLE {
  ADMIN = "Admin",
  SHOPKEEPER = "ShopKeeper",
  FARMER = "Farmer",
}

export interface User {
  id: number;
  name: string;
  mobileNumber: string;
  password: string;
  role: ROLE;
  createdAt: string;
  updatedAt: string;
}

export interface CreateUser {
  name: string;
  mobileNumber: string;
  password: string;
  role: ROLE;
}

export interface UpdateUser {
  name?: string;
  mobileNumber?: string;
  role?: ROLE;
  password?: string;
}

export interface userInSessionType {
  name: string;
  id: number;
  mobileNumber: string;
  role: string;
}
//USER END//

//Produce START//
export interface Produce {
  id: number;
  farmerId: number;
  name: string;
  price: string;
  stock: number;
  farmer: User;
}

export interface CreateProduce {
  farmerId: number;
  name: string;
  price: string;
  stock: number;
}

export interface UpdateProduce {
  name?: string;
  price?: string;
  stock?: number;
}
//Produce END//

//Order START//
export interface Order {
  id: number;
  userId: number;
  produceId: number;
  quantity: number;
  createAt: string;
  updatedAt: string;
  user: User;
  produce: Produce;
}

export interface CreateOrder {
  userId: number;
  produceId: number;
  quantity: number;
}

export interface UpdateOrder {
  quantity?: number;
}
//Order END//
