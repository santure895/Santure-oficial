"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubjectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Send via WhatsApp
    const message = `Nova mensagem do site:

Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Assunto: ${formData.subject}

Mensagem:
${formData.message}`

    const whatsappUrl = `https://wa.me/5562995432028?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })

    setIsSubmitting(false)
    alert("Mensagem enviada! Você será redirecionado para o WhatsApp.")
  }

  return (
    <Card className="p-6">
      <div className="mb-6">
        <h2 className="font-serif font-bold text-2xl text-slate-700 mb-2">Envie uma Mensagem</h2>
        <p className="text-slate-600">Preencha o formulário e entraremos em contato rapidamente</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome Completo *</Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Seu nome completo"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefone *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              required
              placeholder="(00) 00000-0000"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">E-mail *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="seu@email.com"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject">Assunto *</Label>
          <Select value={formData.subject} onValueChange={handleSubjectChange} required>
            <SelectTrigger>
              <SelectValue placeholder="Selecione o assunto" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="duvida-produto">Dúvida sobre produto</SelectItem>
              <SelectItem value="disponibilidade">Consultar disponibilidade</SelectItem>
              <SelectItem value="troca-devolucao">Troca ou devolução</SelectItem>
              <SelectItem value="rastreamento">Rastrear pedido</SelectItem>
              <SelectItem value="pagamento">Dúvida sobre pagamento</SelectItem>
              <SelectItem value="autenticidade">Certificado de autenticidade</SelectItem>
              <SelectItem value="outros">Outros assuntos</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Mensagem *</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            placeholder="Descreva sua dúvida ou solicitação..."
            rows={5}
          />
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full bg-amber-600 hover:bg-amber-700">
          {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
        </Button>

        <p className="text-sm text-slate-500 text-center">
          Ao enviar, você será redirecionado para o WhatsApp para finalizar o contato
        </p>
      </form>
    </Card>
  )
}
