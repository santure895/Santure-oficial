import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="pt-20 pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="py-16">
            <h1 className="font-serif font-bold text-6xl text-slate-700 mb-4">404</h1>
            <h2 className="font-serif font-semibold text-2xl text-slate-600 mb-6">Produto não encontrado</h2>
            <p className="text-lg text-slate-500 mb-8">
              O produto que você está procurando não existe ou foi removido do nosso catálogo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/catalogo">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                  Ver Catálogo
                </Button>
              </Link>
              <Link href="/">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
                >
                  Voltar ao Início
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
