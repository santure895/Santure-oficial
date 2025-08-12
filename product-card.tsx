"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ShoppingCart, Zap } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import Link from "next/link"

interface Product {
  id: number
  name: string
  brand: string
  price: string
  originalPrice: string
  image: string
  category: string
  description: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem, openCart } = useCart()

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      image: product.image,
      size: "M", // Tamanho padrão
      quantity: 1,
      sku: `${product.brand}-${product.id}`,
    })
    openCart()
  }

  const handleBuyNow = () => {
    const message = `Olá! Gostaria de comprar: ${product.name} - ${product.brand} - ${product.price}`
    const whatsappUrl = `https://wa.me/5562995432028?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
      <div className="relative overflow-hidden">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-amber-600 text-white px-3 py-1 text-xs font-medium rounded-full">{product.brand}</span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-serif font-semibold text-lg text-slate-700 mb-2 line-clamp-2">{product.name}</h3>

        <p className="text-sm text-slate-500 mb-3 line-clamp-2">{product.description}</p>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold text-slate-700">{product.price}</span>
        </div>

        <div className="space-y-2">
          <div className="flex gap-2">
            <Button onClick={handleBuyNow} className="flex-1 bg-amber-600 hover:bg-amber-700 text-white" size="sm">
              <Zap className="h-4 w-4 mr-1" />
              Comprar
            </Button>
            <Button
              onClick={handleAddToCart}
              variant="outline"
              className="flex-1 border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
              size="sm"
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              Carrinho
            </Button>
          </div>
          <Link href={`/produto/${product.id}`} className="block">
            <Button variant="ghost" className="w-full text-slate-600 hover:text-slate-800" size="sm">
              Ver Detalhes
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  )
}
