"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import OptimizedImage from "@/components/OptimizedImage";

export default function Page24() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const options = [
    { 
      id: "vegetariana", 
      label: "Eu sou vegetariana", 
      description: "Verduras, grãos, mas sem carne animal",
      image: "/images/eusouvegetariana.webp" 
    },
    { 
      id: "vegana", 
      label: "Eu sou vegana", 
      description: "Puramente à base de plantas, sem produtos de origem animal",
      image: "/images/eusouvegana.webp" 
    },
    { 
      id: "sem-gluten", 
      label: "Não contém glúten", 
      description: "Exclua produtos de grãos que contenham glúten",
      image: "/images/nãocontengluten.webp" 
    },
    { 
      id: "sem-lactose", 
      label: "Sem lactose", 
      description: "Excluir produtos lácteos",
      image: "/images/semlactoese.webp" 
    },
    { 
      id: "sem-restricoes", 
      label: "Sem restrições", 
      description: "Aberto a todos os alimentos",
      image: "/images/semresrição.webp" 
    }
  ];

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleContinue = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      router.push("/page25");
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
          <p className="text-white/90 text-lg">
            by Atlas
          </p>
        </div>

        {/* Test Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-6">
          <div className="text-center mb-4">
            <div className="inline-block bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium mb-3">
              TESTE DE 1 MINUTO
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Quais são suas preferências de refeição?
            </h2>
          </div>

          {/* Options with Images */}
          <div className="space-y-2">
            {options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleOptionSelect(option.id)}
                className={`w-full p-3 rounded-xl border-2 transition-all duration-200 text-left ${
                  selectedOption === option.id
                    ? "border-pink-500 bg-pink-50"
                    : "border-gray-200 hover:border-pink-300 hover:bg-pink-50/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                    <OptimizedImage
                      src={option.image}
                      alt={option.label}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 text-sm">
                      {option.label}
                    </p>
                    <p className="text-xs text-gray-600">
                      {option.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Continue Button */}
          {selectedOption && (
            <button 
              onClick={handleContinue}
              disabled={isSubmitting}
              className="w-full mt-4 bg-pink-600 hover:bg-pink-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-3 rounded-xl transition-colors duration-200"
            >
              {isSubmitting ? "Processando..." : "Continuar"}
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
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
            <div className="w-2 h-2 rounded-full bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
