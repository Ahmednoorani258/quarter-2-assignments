import CarCard from "./CarCard";

export default function FeaturedCarSection(){
    return(
        <div className="bg-zinc-200 h-auto px-12 md:px-44">
            <h2 className="text-2xl text-zinc-900 font-semibold py-8">Featured New Cars</h2>
            <ul className="flex space-x-10 text-md md:text-xl font-semibold">
                <li className="border-b-2 border-blue-400 py-3">Popular</li>
                <li className="p-3">Upcoming</li>
                <li className="p-3">Newly Launched</li>
            </ul>
            <div className="flex flex-col md:flex-row items-center justify-between">
            <CarCard/>
            <CarCard/>
            <CarCard/>
            <CarCard/>
            </div>
        </div>
    )
}