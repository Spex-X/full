"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import OptimizedImage from "@/components/OptimizedImage";
import { getImageUrl } from "@/lib/imageUrls";

export default function Page13() {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const options = [
    { id: "costas", label: "Costas sensíveis", image: getImageUrl("/images/costassensiveis.webp") },
    { id: "joelhos", label: "Joelhos sensíveis", image: getImageUrl("/images/joelhossensiveis.webp") },
    { id: "quadril", label: "Quadril sensível", image: getImageUrl("/images/quadrilsensivel.webp") },
    { id: "ombros", label: "Ombros e braços", image: getImageUrl("/images/ombrosebraços.webp") },
    { id: "panturrilhas", label: "Panturrilhas e tornozelos", image: getImageUrl("/images/panturilhasetornozelos.webp") },
    { id: "nenhuma", label: "Nenhuma das opções acima", image: null }
  ];

  const handleOptionToggle = (optionId: string) => {
    if (optionId === "nenhuma") {
      setSelectedOptions(["nenhuma"]);
    } else {
      setSelectedOptions(prev => {
        const withoutNenhuma = prev.filter(id => id !== "nenhuma");
        if (withoutNenhuma.includes(optionId)) {
          return withoutNenhuma.filter(id => id !== optionId);
        } else {
          return [...withoutNenhuma, optionId];
        }
      });
    }
  };

  const handleContinue = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      router.push("/page14");
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 to-purple-600">
      <div className="container mx-auto px-4 py-8 max-w-md">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-5xl font-bold text-white mb-2">
            CALISTENIA
          </h1>
        </div>

        {/* Test Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-6">
          <div className="text-center mb-4">
            <div className="inline-block bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium mb-3">
              TESTE DE 1 MINUTO
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Você tem dificuldades com algum dos seguintes itens?
            </h2>
            <p className="text-gray-600 text-sm">
              Por favor, selecione todas as opções aplicáveis
            </p>
          </div>

          {/* Options with Images */}
          <div className="space-y-2">
            {options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleOptionToggle(option.id)}
                className={`w-full p-3 rounded-xl border-2 transition-all duration-200 text-left font-medium flex items-center gap-3 ${
                  selectedOptions.includes(option.id)
                    ? "border-pink-500 bg-pink-50 text-pink-700"
                    : "border-gray-200 hover:border-pink-300 hover:bg-pink-50/50 text-gray-700"
                }`}
              >
                {option.image && (
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                    <OptimizedImage
                      src={option.image || ''}
                      alt={option.label}
                      className="rounded-lg"
                    />
                  </div>
                )}
                <span className="text-sm">{option.label}</span>
              </button>
            ))}
          </div>

          {/* Continue Button */}
          {selectedOptions.length > 0 && (
            <button 
              onClick={handleContinue}
              disabled={isSubmitting}
              className="w-full mt-4 bg-pink-600 hover:bg-pink-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-3 rounded-xl transition-colors duration-200"
            >
              {isSubmitting ? "Processando..." : "Próximo passo"}
            </button>
          )}
        </div>

        {/* Progress Indicator */}
        <div className="mt-6 flex justify-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
            <div className="w-2 h-2 rounded-full bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
