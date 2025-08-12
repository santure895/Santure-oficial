"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ProductFiltersProps {
  selectedBrand: string
  selectedCategory: string
  sortBy: string
  onFilterChange: (brand: string, category: string, sort: string) => void
}

const brands = ["Gucci", "Balmain", "Louis Vuitton", "Hugo Boss", "Armani", "Exclusiva"]
const categories = [
  { value: "camisa", label: "Camisas" },
  { value: "bermuda", label: "Bermudas" },
  { value: "malha", label: "Malhas Peruanas" },
]

const sortOptions = [
  { value: "name", label: "Nome A-Z" },
  { value: "price-low", label: "Menor Preço" },
  { value: "price-high", label: "Maior Preço" },
  { value: "brand", label: "Marca A-Z" },
]

export default function ProductFilters({
  selectedBrand,
  selectedCategory,
  sortBy,
  onFilterChange,
}: ProductFiltersProps) {
  const handleBrandChange = (brand: string) => {
    onFilterChange(brand, selectedCategory, sortBy)
  }

  const handleCategoryChange = (category: string) => {
    onFilterChange(selectedBrand, category, sortBy)
  }

  const handleSortChange = (sort: string) => {
    onFilterChange(selectedBrand, selectedCategory, sort)
  }

  return (
    <div className="space-y-6">
      {/* Clear Filters */}
      <Card className="p-4">
        <Button
          variant="outline"
          className="w-full bg-transparent"
          onClick={() => onFilterChange("all", "all", "name")}
        >
          Limpar Filtros
        </Button>
      </Card>

      {/* Brand Filter */}
      <Card className="p-4">
        <h3 className="font-serif font-semibold text-lg mb-4 text-slate-700">Marcas</h3>
        <div className="space-y-2">
          <button
            onClick={() => handleBrandChange("all")}
            className={`block w-full text-left px-3 py-2 rounded transition-colors ${
              selectedBrand === "all" ? "bg-amber-100 text-amber-800 font-medium" : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            Todas as Marcas
          </button>
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => handleBrandChange(brand)}
              className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                selectedBrand === brand
                  ? "bg-amber-100 text-amber-800 font-medium"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              {brand}
            </button>
          ))}
        </div>
      </Card>

      {/* Category Filter */}
      <Card className="p-4">
        <h3 className="font-serif font-semibold text-lg mb-4 text-slate-700">Categorias</h3>
        <div className="space-y-2">
          <button
            onClick={() => handleCategoryChange("all")}
            className={`block w-full text-left px-3 py-2 rounded transition-colors ${
              selectedCategory === "all"
                ? "bg-amber-100 text-amber-800 font-medium"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            Todas as Categorias
          </button>
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => handleCategoryChange(category.value)}
              className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                selectedCategory === category.value
                  ? "bg-amber-100 text-amber-800 font-medium"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </Card>

      {/* Sort Options */}
      <Card className="p-4">
        <h3 className="font-serif font-semibold text-lg mb-4 text-slate-700">Ordenar Por</h3>
        <div className="space-y-2">
          {sortOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSortChange(option.value)}
              className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                sortBy === option.value
                  ? "bg-amber-100 text-amber-800 font-medium"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </Card>
    </div>
  )
}
