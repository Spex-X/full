"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import OptimizedImage from "@/components/OptimizedImage";
import { getImageUrl } from "@/lib/imageUrls";

export default function Page23() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const options = [
    { id: "menos-5", label: "Menos de 5 horas" },
    { id: "5-6", label: "5-6 horas" },
    { id: "7-8", label: "7-8 horas" },
    { id: "mais-8", label: "Mais de 8 horas" }
  ];

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleContinue = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      router.push("/page24");
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
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Quantas horas você costuma dormir?
            </h2>
          </div>

          {/* Image and Options Layout */}
          <div className="flex gap-4 items-start">
            {/* Options */}
            <div className="flex-1 space-y-2">
              {options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleOptionSelect(option.id)}
                  className={`w-full p-3 rounded-xl border-2 transition-all duration-200 text-left font-medium ${
                    selectedOption === option.id
                      ? "border-pink-500 bg-pink-50 text-pink-700"
                      : "border-gray-200 hover:border-pink-300 hover:bg-pink-50/50 text-gray-700"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>

            {/* Image */}
            <div className="flex-shrink-0 w-1/2">
              <div className="relative w-full h-56 rounded-xl overflow-hidden shadow-lg">
                <OptimizedImage
                  src={getImageUrl("/images/pagina23.png")}
                  alt="Dormindo"
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Continue Button */}
          {selectedOption && (
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
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
            <div className="w-2 h-2 rounded-full bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
