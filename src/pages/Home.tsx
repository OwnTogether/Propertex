import { FeaturedProperties } from "@/components/FeaturedProperty"

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gray-100 dark:bg-gray-900">
        <h1 className="text-4xl font-bold">Invest in Premium Properties</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
          Grow your wealth by investing in high-value properties.
        </p>
      </section>

      {/* Featured Properties */}
      <FeaturedProperties />
    </div>
  )
}
