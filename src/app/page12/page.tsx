"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import OptimizedImage from "@/components/OptimizedImage";

export default function Page12() {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const timeRanges = [
    { id: "1-2", label: "1 a 2 anos atrás" },
    { id: "3-5", label: "3 a 5 anos atrás" },
    { id: "5+", label: "Mais de 5 anos atrás" },
    { id: "never", label: "Nunca" }
  ];

  const handleTimeSelect = (timeId: string) => {
    setSelectedTime(timeId);
  };

  const handleContinue = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      router.push("/page13");
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
              Há quanto tempo você estava na melhor forma da sua vida?
            </h2>
          </div>

          {/* Image and Options Layout */}
          <div className="flex gap-4 items-start">
            {/* Time Options */}
            <div className="flex-1 space-y-2">
              {timeRanges.map((range) => (
                <button
                  key={range.id}
                  onClick={() => handleTimeSelect(range.id)}
                  className={`w-full p-3 rounded-xl border-2 transition-all duration-200 text-left font-medium ${
                    selectedTime === range.id
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
                  src="/images/pagina12.png"
                  alt="Mulher praticando calistenia"
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Continue Button */}
          {selectedTime && (
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
            <div className="w-2 h-2 rounded-full bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
