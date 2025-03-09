import { PropertyCard } from "./PropertyCard"

const properties = [
  {
    id: 1,
    name: "Luxury Villa in LA",
    location: "Los Angeles, CA",
    price: "$1,200,000",
    roi: "8% per year",
    image: "https://th.bing.com/th/id/OIP.erj1ySHXCQoJsAMb-XM7OQHaE8?w=294&h=196&c=7&r=0&o=5&pid=1.7"
  },
  {
    id: 2,
    name: "Downtown Apartment",
    location: "New York, NY",
    price: "$850,000",
    roi: "6% per year",
    image: "https://th.bing.com/th/id/OIP.Ai8KXN7Tfcv2Hc_34JRVgwHaEK?w=286&h=180&c=7&r=0&o=5&pid=1.7"
  },
  {
    id: 3,
    name: "Beachside Bungalow",
    location: "Miami, FL",
    price: "$950,000",
    roi: "7.5% per year",
    image: "https://th.bing.com/th/id/OIP.l5emFojeRVOT6BzR68YKcgHaE7?w=298&h=199&c=7&r=0&o=5&pid=1.7"
  }
]

export const FeaturedProperties = () => {
  return (
    <section className="py-12 px-6">
      <h1 className="text-3xl font-bold text-center mb-6">Featured Properties</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  )
}
