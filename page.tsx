import { notFound } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import ProductDetails from "@/components/product-details"
import RelatedProducts from "@/components/related-products"

// Mock data - em um app real, isso viria de uma API ou banco de dados
const allProducts = [
  {
    id: 1,
    name: "Camisa Gucci Classic White",
    brand: "Gucci",
    price: "R$ 79,99",
    originalPrice: "R$ 2.890,00",
    images: [
      "/gucci-white-shirt-model.png",
      "/gucci-white-shirt-detail-1.png",
      "/gucci-white-shirt-detail-2.png",
      "/gucci-white-shirt-fabric.png",
    ],
    category: "camisa",
    description:
      "Camisa social branca em algodão premium com logo discreto da Gucci. Corte slim fit que valoriza o corpo masculino, com acabamento impecável e botões de madrepérola. Ideal para ocasiões formais e casuais elegantes.",
    features: [
      "100% Algodão Premium Egípcio",
      "Corte Slim Fit",
      "Logo Gucci bordado discretamente",
      "Botões de madrepérola",
      "Gola italiana",
      "Punhos ajustáveis",
    ],
    sizes: ["P", "M", "G", "GG"],
    inStock: true,
    sku: "GUC-CAM-001",
  },
  {
    id: 2,
    name: "Camisa Louis Vuitton Navy",
    brand: "Louis Vuitton",
    price: "R$ 79,99",
    originalPrice: "R$ 3.200,00",
    images: [
      "/navy-designer-shirt-model.png",
      "/lv-navy-shirt-detail-1.png",
      "/lv-navy-shirt-detail-2.png",
      "/lv-navy-shirt-fabric.png",
    ],
    category: "camisa",
    description:
      "Camisa social azul marinho da Louis Vuitton com acabamento impecável. Tecido de alta qualidade com toque sedoso e durabilidade excepcional. Design atemporal que combina sofisticação e modernidade.",
    features: [
      "Tecido misto premium (algodão + seda)",
      "Corte regular fit",
      "Monograma LV sutil",
      "Costura francesa",
      "Resistente a rugas",
      "Fácil manutenção",
    ],
    sizes: ["P", "M", "G", "GG"],
    inStock: true,
    sku: "LV-CAM-002",
  },
  {
    id: 6,
    name: "Bermuda Balmain Premium",
    brand: "Balmain",
    price: "R$ 65,99",
    originalPrice: "R$ 1.650,00",
    images: [
      "/balmain-shorts-model.png",
      "/balmain-shorts-detail-1.png",
      "/balmain-shorts-detail-2.png",
      "/balmain-shorts-fabric.png",
    ],
    category: "bermuda",
    description:
      "Bermuda cargo premium da Balmain com detalhes em couro sintético. Design urbano e sofisticado, perfeita para o verão brasileiro. Múltiplos bolsos funcionais e ajuste perfeito.",
    features: [
      "Tecido resistente e respirável",
      "Detalhes em couro sintético",
      "6 bolsos funcionais",
      "Ajuste na cintura",
      "Design cargo moderno",
      "Lavagem especial",
    ],
    sizes: ["P", "M", "G", "GG"],
    inStock: true,
    sku: "BAL-BER-006",
  },
  {
    id: 11,
    name: "Malha Peruana Premium White",
    brand: "Exclusiva",
    price: "R$ 99,90",
    originalPrice: "R$ 280,00",
    images: [
      "/peruvian-cotton-tee-model.png",
      "/peruvian-cotton-detail-1.png",
      "/peruvian-cotton-detail-2.png",
      "/peruvian-cotton-fabric.png",
    ],
    category: "malha",
    description:
      "Camiseta em algodão peruano 100% premium. O algodão peruano é considerado um dos melhores do mundo, conhecido por sua maciez excepcional e durabilidade. Corte moderno e confortável.",
    features: [
      "100% Algodão Peruano Premium",
      "Fibras extra longas",
      "Maciez excepcional",
      "Resistente ao desbotamento",
      "Corte moderno",
      "Costura reforçada",
    ],
    sizes: ["P", "M", "G", "GG", "XG"],
    inStock: true,
    sku: "PER-MAL-011",
  },
]

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const productId = Number.parseInt(params.id)
  const product = allProducts.find((p) => p.id === productId)

  if (!product) {
    notFound()
  }

  // Get related products (same category, different products)
  const relatedProducts = allProducts.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3)

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="pt-20">
        <ProductDetails product={product} />
        {relatedProducts.length > 0 && <RelatedProducts products={relatedProducts} />}
      </div>

      <WhatsAppButton />
      <Footer />
    </main>
  )
}

// Generate static params for better performance
export function generateStaticParams() {
  return allProducts.map((product) => ({
    id: product.id.toString(),
  }))
}

// Generate metadata for SEO
export function generateMetadata({ params }: ProductPageProps) {
  const productId = Number.parseInt(params.id)
  const product = allProducts.find((p) => p.id === productId)

  if (!product) {
    return {
      title: "Produto não encontrado - Grife Store",
    }
  }

  return {
    title: `${product.name} - ${product.brand} | Grife Store`,
    description: product.description,
  }
}
