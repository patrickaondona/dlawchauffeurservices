export type Car = {
  id: number;
  name: string;
  category: string;
  price1: number;
  price2: number;
  image: string;
  seats: number;
  fuel: string;
};

export async function getCars(): Promise<Car[]> {
  // Simulate API delay (remove later)
  await new Promise((res) => setTimeout(res, 200));

  return [
    {
      id: 1,
      name: "Toyota Land Cruiser Prado",
      category: "SUV",
      price1: 150000,
      price2: 100000,
      image:
        "/images/cars/car-1.jpeg",
      seats: 7,
      fuel: "Auto",
    },
    {
      id: 2,
      name: "Toyota Land Cruiser 300 Series (LC300)",
      category: "SUV",
      price1: 400000,
      price2: 200000,
      image:
        "/images/cars/car-2.jpeg",
      seats: 7,
      fuel: "Auto",
    },
    {
      id: 3,
      name: "Toyota Land Cruiser Prado 250 Series (LC250)",
      category: "SUV",
      price1: 400000,
      price2: 200000,
      image:
        "/images/cars/car-3.jpeg",
      seats: 7,
      fuel: "Auto",
    },
    {
      id: 4,
      name: "Toyota Camry (XV40 Generation)",
      category: "Sedan",
      price1: 120000,
      price2: 60000,
      image:
        "/images/cars/car-4.jpeg",
      seats: 5,
      fuel: "Auto",
    },
    {
      id: 5,
      name: "Toyota Hiace (H300)",
      category: "Van / Minibus",
      price1: 300000,
      price2: 150000,
      image:
        "/images/cars/car-5.jpeg",
      seats: 16,
      fuel: "Auto/Manual",
    },
  ];
}
