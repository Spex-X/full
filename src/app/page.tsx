"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import OptimizedImage from "@/components/OptimizedImage";
import { getImageUrl } from "@/lib/imageUrls";

export default function Home() {
  const [selectedAge, setSelectedAge] = useState<string | null>(null);
  const [showError, setShowError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const ageRanges = [
    { id: "39-45", label: "39 – 45" },
    { id: "46-50", label: "46 – 50" },
    { id: "51-60", label: "51 – 60" },
    { id: "60+", label: "60+" }
  ];

  const handleAgeSelect = (ageId: string) => {
    setSelectedAge(ageId);
    setShowError(false);
  };

  const handleContinue = () => {
    if (!selectedAge) {
      setShowError(true);
      return;
    }

    setIsSubmitting(true);
    // Simulate processing delay for better UX
    setTimeout(() => {
      router.push("/page2");
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
            Programa de Calistenia Asiática para Mulheres
          </p>
        </div>

        {/* Test Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-6">
          <div className="text-center mb-4">
            <div className="inline-block bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium mb-3">
              TESTE DE 1 MINUTO
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Quantos anos você tem?
            </h2>
          </div>

          {/* Image and Options Layout */}
          <div className="flex gap-4 items-start">
            {/* Age Options */}
            <div className="flex-1 space-y-2">
              {ageRanges.map((range) => (
                <button
                  key={range.id}
                  onClick={() => handleAgeSelect(range.id)}
                  className={`w-full p-3 rounded-xl border-2 transition-all duration-200 text-left font-medium ${
                    selectedAge === range.id
                      ? "border-pink-500 bg-pink-50 text-pink-700"
                      : "border-gray-200 hover:border-pink-300 hover:bg-pink-50/50 text-gray-700"
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>

            {/* Image */}
            <div className="flex-shrink-0 w-1/2">
              <div className="relative w-full h-56 rounded-xl overflow-hidden shadow-lg">
                <OptimizedImage
                  src={getImageUrl("/images/capa1.png")}
                  alt="Mulher asiática praticando calistenia"
                  width={400}
                  height={300}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Continue Button */}
          {selectedAge && (
            <button 
              onClick={handleContinue}
              disabled={isSubmitting}
              className="w-full mt-4 bg-pink-600 hover:bg-pink-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-3 rounded-xl transition-colors duration-200"
            >
              {isSubmitting ? "Processando..." : "Continuar"}
            </button>
          )}

          {/* Error Message */}
          {showError && (
            <div className="mt-3 bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-lg text-sm text-center">
              Por favor, selecione uma opção para continuar
            </div>
          )}
        </div>

        {/* Progress Indicator */}
        <div className="mt-6 flex justify-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white"></div>
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
          </div>
        </div>
      </div>
    </div>
  );
}
