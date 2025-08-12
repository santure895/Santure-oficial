import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Product {
  id: number
  name: string
  brand: string
  price: string
  originalPrice: string
  images: string[]
  category: string
}

interface RelatedProductsProps {
  products: Product[]
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl text-slate-700 mb-4">Produtos Relacionados</h2>
          <p className="text-lg text-slate-600">Outras peças que você pode gostar</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.images[0] || "/placeholder.svg"}
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
                <h3 className="font-serif font-semibold text-lg text-slate-700 mb-2 line-clamp-2">{product.name}</h3>

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
      </div>
    </section>
  )
}
