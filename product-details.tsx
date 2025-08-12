"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Minus, Plus, Heart, Share2, Truck, Shield } from "lucide-react"
import { useCart } from "@/contexts/cart-context"

interface Product {
  id: number
  name: string
  brand: string
  price: string
  originalPrice: string
  images: string[]
  category: string
  description: string
  features: string[]
  sizes: string[]
  inStock: boolean
  sku: string
}

interface ProductDetailsProps {
  product: Product
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState("")
  const [quantity, setQuantity] = useState(1)

  const { addItem, openCart } = useCart()

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Por favor, selecione um tamanho")
      return
    }

    addItem({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      quantity: quantity,
      sku: product.sku,
    })

    openCart()
  }

  const handleBuyNow = () => {
    if (!selectedSize) {
      alert("Por favor, selecione um tamanho")
      return
    }
    // Aqui seria implementada a lógica de compra direta
    const message = `Olá! Gostaria de comprar: ${product.name} - Tamanho ${selectedSize} - Quantidade ${quantity}`
    const whatsappUrl = `https://wa.me/5562995432028?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
            <img
              src={product.images[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thumbnail Images */}
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square overflow-hidden rounded-lg border-2 transition-colors ${
                  selectedImage === index ? "border-amber-600" : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          {/* Brand and Name */}
          <div>
            <Badge variant="secondary" className="mb-2 bg-amber-100 text-amber-800">
              {product.brand}
            </Badge>
            <h1 className="font-serif font-bold text-3xl text-slate-700">{product.name}</h1>
            <p className="text-sm text-slate-500 mt-1">SKU: {product.sku}</p>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-slate-700">{product.price}</span>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Descrição</h3>
            <p className="text-slate-600 leading-relaxed">{product.description}</p>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Características</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center text-sm text-slate-600">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mr-3 flex-shrink-0"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Size Selection */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Tamanho</h3>
            <div className="flex gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-lg font-medium transition-colors ${
                    selectedSize === size
                      ? "border-amber-600 bg-amber-50 text-amber-800"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Quantidade</h3>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="text-lg font-medium w-12 text-center">{quantity}</span>
              <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)} disabled={quantity >= 10}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button onClick={handleBuyNow} size="lg" className="w-full bg-amber-600 hover:bg-amber-700 text-white">
              Comprar Agora
            </Button>
            <Button
              onClick={handleAddToCart}
              variant="outline"
              size="lg"
              className="w-full border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
            >
              Adicionar ao Carrinho
            </Button>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="flex-1">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="flex-1">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <Card className="p-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Truck className="h-5 w-5 text-green-600" />
                <span>Frete grátis para Goiânia e região</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Shield className="h-5 w-5 text-blue-600" />
                <span>Autenticidade 100% garantida</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
