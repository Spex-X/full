"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page19() {
  const [age, setAge] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleContinue = () => {
    if (age && parseInt(age) > 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        router.push("/page20");
      }, 300);
    }
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || (/^\d+$/.test(value) && parseInt(value) <= 120)) {
      setAge(value);
    }
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
              Qual é a sua idade?
            </h2>
          </div>

          {/* Age Input */}
          <div className="mb-6">
            <input
              type="text"
              inputMode="numeric"
              value={age}
              onChange={handleAgeChange}
              placeholder="Digite sua idade"
              className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-pink-500 focus:outline-none text-center text-2xl font-semibold text-gray-800"
              maxLength={3}
            />
          </div>

          {/* Info Box */}
          <div className="bg-pink-50 rounded-xl p-4 mb-4 flex items-start gap-3">
            <div className="text-pink-600 text-2xl font-bold flex-shrink-0">
              i
            </div>
            <div>
              <p className="text-pink-700 font-medium mb-1">
                Perguntamos sua idade para personalizar seu plano
              </p>
              <p className="text-gray-600 text-sm">
                As pessoas mais velhas têm um percentual de gordura corporal mais alto do que as pessoas mais jovens com o mesmo IMC.
              </p>
            </div>
          </div>

          {/* Continue Button */}
          <button 
            onClick={handleContinue}
            disabled={!age || parseInt(age) <= 0 || isSubmitting}
            className="w-full bg-pink-600 hover:bg-pink-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium py-3 rounded-xl transition-colors duration-200"
          >
            {isSubmitting ? "Processando..." : "Próximo passo"}
          </button>
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
