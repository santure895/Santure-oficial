"use client"

import { X, Minus, Plus, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import Link from "next/link"

export default function CartSidebar() {
  const { state, closeCart, updateQuantity, removeItem, getTotalPrice, getTotalItems } = useCart()

  const handleCheckout = () => {
    if (state.items.length === 0) return

    const itemsList = state.items
      .map((item) => `${item.name} (${item.size}) - Qtd: ${item.quantity} - ${item.price}`)
      .join("\n")

    const total = getTotalPrice().toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })

    const message = `Olá! Gostaria de finalizar minha compra:\n\n${itemsList}\n\nTotal: ${total}`
    const whatsappUrl = `https://wa.me/5562995432028?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <>
      {/* Overlay */}
      {state.isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeCart} />}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          state.isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="font-serif font-semibold text-lg">Carrinho ({getTotalItems()})</h2>
            <Button variant="ghost" size="icon" onClick={closeCart}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {state.items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="h-16 w-16 text-slate-300 mb-4" />
                <h3 className="font-semibold text-lg text-slate-600 mb-2">Carrinho vazio</h3>
                <p className="text-slate-500 mb-6">Adicione produtos para começar suas compras</p>
                <Link href="/catalogo">
                  <Button onClick={closeCart} className="bg-amber-600 hover:bg-amber-700">
                    Ver Produtos
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {state.items.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex gap-4 p-4 border rounded-lg">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />

                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{item.name}</h4>
                      <p className="text-xs text-slate-500">{item.brand}</p>
                      <p className="text-xs text-slate-500">Tamanho: {item.size}</p>
                      <p className="font-semibold text-amber-600">{item.price}</p>

                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6 bg-transparent"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6 bg-transparent"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-500 hover:text-red-700 ml-auto"
                          onClick={() => removeItem(item.id)}
                        >
                          Remover
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {state.items.length > 0 && (
            <div className="border-t p-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Total:</span>
                <span className="font-bold text-xl text-amber-600">
                  {getTotalPrice().toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </div>

              <div className="space-y-2">
                <Button onClick={handleCheckout} className="w-full bg-amber-600 hover:bg-amber-700">
                  Finalizar Compra
                </Button>
                <Link href="/carrinho">
                  <Button variant="outline" className="w-full bg-transparent" onClick={closeCart}>
                    Ver Carrinho Completo
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
