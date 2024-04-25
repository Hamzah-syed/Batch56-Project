import Hero from "../components/hero"
import Cards from "../components/Cards"

export default function Page() {

  return (
    <div>
      {/* Hero Section */}
      <Hero />
      {/* Cards Section */}
      <div className="flex-row justify-center items-center"> 
      <Cards />

      </div>

    </div>
  )

}