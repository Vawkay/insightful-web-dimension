
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    service: "Business Intelligence",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulando o envio do formulário com um timeout
    try {
      // Em um cenário real, aqui você faria uma chamada para sua API
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve.",
        variant: "default",
      });

      // Limpar o formulário
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        service: "Business Intelligence",
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Nome Completo <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full glass-input bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary/30"
            placeholder="Seu nome"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            E-mail <span className="text-primary">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full glass-input bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary/30"
            placeholder="seu.email@exemplo.com"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Telefone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full glass-input bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary/30"
            placeholder="(00) 00000-0000"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium">
            Empresa
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full glass-input bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary/30"
            placeholder="Nome da sua empresa"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="service" className="text-sm font-medium">
          Serviço de Interesse <span className="text-primary">*</span>
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full glass-input bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary/30"
        >
          <option value="Business Intelligence">Business Intelligence</option>
          <option value="Data Analytics">Data Analytics</option>
          <option value="Visualização de Dados">Visualização de Dados</option>
          <option value="Big Data">Big Data</option>
          <option value="Consultoria">Consultoria</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Mensagem <span className="text-primary">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full glass-input bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary/30"
          placeholder="Descreva como podemos ajudar você..."
        ></textarea>
      </div>

      <Button
        type="submit"
        className="w-full bg-primary hover:bg-primary/90"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          "Enviar Mensagem"
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
