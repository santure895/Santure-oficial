"use client"

import { ShoppingBag, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"
import { useCart } from "@/contexts/cart-context"
import CartSidebar from "@/components/cart-sidebar"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { toggleCart, getTotalItems } = useCart()
  const totalItems = getTotalItems()

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <h1 className="font-serif font-bold text-2xl text-white hover:text-accent transition-colors">
                  SANTURE GRIFES
                </h1>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/catalogo" className="text-secondary hover:text-accent transition-colors font-medium">
                Catálogo
              </Link>
              <a href="#novidades" className="text-secondary hover:text-accent transition-colors font-medium">
                Novidades
              </a>
              <a href="#sobre" className="text-secondary hover:text-accent transition-colors font-medium">
                Sobre
              </a>
              <Link href="/contato" className="text-secondary hover:text-accent transition-colors font-medium">
                Contato
              </Link>
            </nav>

            {/* Cart and Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-secondary hover:text-accent relative"
                onClick={toggleCart}
              >
                <ShoppingBag className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                    {totalItems}
                  </span>
                )}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-secondary"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-accent/20">
              <nav className="flex flex-col space-y-4">
                <Link href="/catalogo" className="text-secondary hover:text-accent transition-colors font-medium">
                  Catálogo
                </Link>
                <a href="#novidades" className="text-secondary hover:text-accent transition-colors font-medium">
                  Novidades
                </a>
                <a href="#sobre" className="text-secondary hover:text-accent transition-colors font-medium">
                  Sobre
                </a>
                <Link href="/contato" className="text-secondary hover:text-accent transition-colors font-medium">
                  Contato
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
      <CartSidebar />
    </>
  )
}
