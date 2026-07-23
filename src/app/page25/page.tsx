"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page25() {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const options = [
    { id: "procrastinacao", label: "Procrastinação", emoji: "⏰" },
    { id: "alimentacao", label: "Alimentação pouco saudável", emoji: "🍔" },
    { id: "midias", label: "Mídias sociais", emoji: "📱" },
    { id: "cafeina", label: "Beber muita cafeína", emoji: "☕" },
    { id: "series", label: "Maratona de séries", emoji: "📺" },
    { id: "duvida", label: "Dúvida sobre si mesmo", emoji: "💭" },
    { id: "unhas", label: "Roer as unhas", emoji: "🤚" },
    { id: "atrasada", label: "Estar atrasada", emoji: "⏳" },
    { id: "fumar", label: "Fumar", emoji: "🚬" },
    { id: "alcool", label: "Beber álcool", emoji: "🍷" },
    { id: "nenhum", label: "Nenhum deles", emoji: "✨" }
  ];

  const handleOptionToggle = (optionId: string) => {
    if (optionId === "nenhum") {
      setSelectedOptions(["nenhum"]);
    } else {
      setSelectedOptions(prev => {
        const withoutNenhum = prev.filter(id => id !== "nenhum");
        if (withoutNenhum.includes(optionId)) {
          return withoutNenhum.filter(id => id !== optionId);
        } else {
          return [...withoutNenhum, optionId];
        }
      });
    }
  };

  const handleContinue = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      router.push("/page26");
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
              Quais desses hábitos você tem?
            </h2>
          </div>

          {/* Options with Emojis */}
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
                <span className="text-2xl">{option.emoji}</span>
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
