import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";


type Property = {
    id: number
    name: string
    location: string
    price: string
    roi: string
    image: string
}


export const PropertyCard = ({ property }:{property: Property}) =>{
    return(
        <Card className="w-full max-w-sm overflow-hidden shadow-lg">
        <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
        <CardContent className="p-4">
          <h2 className="text-lg font-bold">{property.name}</h2>
          <p className="text-sm text-gray-500">{property.location}</p>
          <p className="text-md font-semibold mt-2">Price: {property.price}</p>
          <p className="text-sm text-green-600">ROI: {property.roi}</p>
        </CardContent>
        <CardFooter className="p-4">
          <Button className="w-full">Invest Now</Button>
        </CardFooter>
      </Card>
    )
}