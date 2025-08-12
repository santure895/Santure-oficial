import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "Camisa Gucci Classic",
    brand: "Gucci",
    price: "R$ 79,99",
    image: "/gucci-white-classic-logo.png",
    category: "camisa",
  },
  {
    id: 2,
    name: "Bermuda Hugo Boss Premium",
    brand: "Hugo Boss",
    price: "R$ 65,99",
    image: "/hugo-boss-shorts-white.png",
    category: "bermuda",
  },
  {
    id: 3,
    name: "Camisa Louis Vuitton",
    brand: "Louis Vuitton",
    price: "R$ 79,99",
    image: "/louis-vuitton-monogram-black.png",
    category: "camisa",
  },
  {
    id: 4,
    name: "Malha Peruana Premium",
    brand: "Exclusiva",
    price: "R$ 99,90",
    image: "/malha-peruana-premium.png",
    category: "malha",
  },
]

export default function FeaturedProducts() {
  return (
    <section id="colecao" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-slate-700 mb-4">Coleção Exclusiva</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Peças autênticas das maiores grifes mundiais com preços que cabem no seu bolso
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-600 text-white px-3 py-1 text-xs font-medium rounded-full">
                    {product.brand}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-serif font-semibold text-lg text-slate-700 mb-2">{product.name}</h3>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-slate-700">{product.price}</span>
                </div>

                <Link href={`/produto/${product.id}`}>
                  <Button className="w-full bg-slate-700 hover:bg-slate-800 text-white">Ver Detalhes</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/catalogo">
            <Button
              variant="outline"
              size="lg"
              className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 bg-transparent"
            >
              Ver Toda Coleção
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
