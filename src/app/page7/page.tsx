"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Page7() {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const router = useRouter();

  const options = [
    { id: "corpo-inteiro", label: "Melhorar o corpo inteiro", icon: "🏃‍♀️" },
    { id: "queixo-duplo", label: "Queixo duplo", image: "/images/queixoduplo.webp" },
    { id: "bracos-flacidos", label: "Braços flácidos", image: "/images/braçosflácidos.webp" },
    { id: "seios-caidos", label: "Seios caídos", image: "/images/seioscaidos.webp" },
    { id: "gordura-barriga", label: "Gordura da barriga", image: "/images/gorduradabarriga.webp" },
    { id: "gordura-joelhos", label: "Gordura nos joelhos", image: "/images/gorduradosjoelhos.webp" },
    { id: "traseiro-alforje", label: "Traseiro de alforje", image: "/images/traseirosalforge.webp" },
    { id: "nadegas-flacidas", label: "Nádegas flácidas", image: "/images/nádegasflácidas.webp" },
    { id: "parte-interna-coxa", label: "Parte interna da coxa", image: "/images/parteinternadacoxa.webp" }
  ];

  const handleOptionToggle = (optionId: string) => {
    // Se clicar em "corpo-inteiro", seleciona ou desseleciona todas as opções
    if (optionId === "corpo-inteiro") {
      if (selectedOptions.length === options.length) {
        // Se todas estão selecionadas, desseleciona todas
        setSelectedOptions([]);
      } else {
        // Seleciona todas as opções
        setSelectedOptions(options.map(opt => opt.id));
      }
    } else {
      // Comportamento normal para as outras opções
      setSelectedOptions(prev => 
        prev.includes(optionId) 
          ? prev.filter(id => id !== optionId)
          : [...prev, optionId]
      );
    }
  };

  const handleContinue = () => {
    router.push("/page8");
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
              Quais são as zonas que mais a preocupam?
            </h2>
            <p className="text-gray-500 text-sm">
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
                {option.image ? (
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={option.image}
                      alt={option.label}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <span className="text-2xl">{option.icon}</span>
                )}
                <span className="text-sm">{option.label}</span>
              </button>
            ))}
          </div>

          {/* Continue Button */}
          {selectedOptions.length > 0 && (
            <button 
              onClick={handleContinue}
              className="w-full mt-4 bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 rounded-xl transition-colors duration-200"
            >
              Próximo passo
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
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
          </div>
        </div>
      </div>
    </div>
  );
}