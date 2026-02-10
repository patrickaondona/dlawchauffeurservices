// import { getCars } from "@/src/data/cars" 

// type Props = {
//   params: {
//     id: string
//   }
// }

// export default async function CarDetailsPage({ params }: Props) {
//   const cars = await getCars()
//   const carId = Number.parseInt(params.id, 10)
//   const car = cars.find((c) => c.id === carId || String(c.id) === params.id)

//   if (!car) {
//     return <div className="p-10">Car not found</div>
//   }

//   return (
//     <main className="py-20">
//       <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">

//         <img
//           src={car.image}
//           alt={car.name}
//           className="rounded-xl w-full"
//         />

//         <div>
//           <h1 className="text-4xl font-bold">{car.name}</h1>
//           <p className="text-slate-600 mt-4">
//             Category: {car.category}
//           </p>

//           <p className="text-2xl font-bold text-blue-600 mt-6">
//             ${car.price1} / day
//           </p>

//           <p className="text-2xl font-bold text-blue-600 mt-6">
//             ${car.price2} / day
//           </p>

//           <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
//             Book Now
//           </button>
//         </div>

//       </div>
//     </main>
//   )
// }
