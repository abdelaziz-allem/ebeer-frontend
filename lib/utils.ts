import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ROLE, RoomStatus, TaskStatus } from "./types/type";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(new Date(date));
}

export const getRoomStatusColor = (status: RoomStatus) => {
  switch (status) {
    case RoomStatus.OCCUPIED:
      return `bg-emerald-500  hover:bg-emerald-600 text-white`;
    case RoomStatus.AVAILABLE:
      return `bg-primary_color-500  hover:bg-primary_color-600 text-white`;
    case RoomStatus.MAINTENANCE:
      return `bg-red-500 hover:bg-red-600 text-white`;
    default:
      return `bg-gray-500 hover:bg-gray-600 text-white`;
  }
};

export const getRoomTaskStatusColor = (status: string, part: string) => {
  switch (status) {
    case TaskStatus.DONE:
      return `${part}-emerald-500 text-white`;
    case TaskStatus.PENDING:
      return `${part}-sky-500 text-white`;
    case TaskStatus.CANCELLED:
      return `${part}-red-500 text-white`;
    default:
      return `${part}-gray-500 text-white`;
  }
};

export const getRoleColor = (status: ROLE) => {
  switch (status) {
    case ROLE.ADMIN:
      return "bg-primary_color-500 hover:bg-primary_color-600 text-white";
    case ROLE.SHOPKEEPER:
      return "bg-sky-500 hover:bg-sky-600 text-white";

    case ROLE.FARMER:
      return "bg-violet-500 hover:bg-violet-600 text-white";
    default:
      return "bg-gray-500 hover:bg-gray-600 text-white";
  }
};

export const calculateNights = (checkInDate: string): number => {
  const checkIn = new Date(checkInDate);
  const checkOut = new Date();

  const diffInMilliseconds = checkOut.getTime() - checkIn.getTime();

  const diffInDays = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));

  return diffInDays;
};
