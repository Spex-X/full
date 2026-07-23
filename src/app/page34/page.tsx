"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import OptimizedImage from "@/components/OptimizedImage";

export default function Page34() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleContinue = () => {
    setIsSubmitting(true);
    // This is the final page, no navigation needed
    console.log("Final page reached");
    setTimeout(() => {
      setIsSubmitting(false);
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
              Seu plano de Calistenia Asiática Atlas está Quase pronto!
            </h2>
          </div>

          {/* Before/After Comparison */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* Now */}
            <div>
              <div className="relative w-full h-40 rounded-xl overflow-hidden shadow-lg mb-3">
                <OptimizedImage
                  src="/images/agora.webp"
                  alt="Agora"
                  className="rounded-xl"
                />
              </div>
              <p className="text-center text-gray-600 font-medium mb-2">Agora</p>
              
              <div className="space-y-2">
                <div className="bg-gray-50 rounded-lg p-2">
                  <p className="text-xs text-gray-500">Peso atual</p>
                  <p className="text-lg font-bold text-gray-800">73 kg</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <p className="text-xs text-gray-500">Gordura corporal</p>
                  <p className="text-sm font-medium text-gray-800">Acima do normal</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <p className="text-xs text-gray-500">Nível de treino</p>
                  <p className="text-sm font-medium text-gray-800">Iniciante</p>
                </div>
              </div>
            </div>

            {/* Goal */}
            <div>
              <div className="relative w-full h-40 rounded-xl overflow-hidden shadow-lg mb-3">
                <OptimizedImage
                  src="/images/seuobjetivo.webp"
                  alt="Seu objetivo"
                  className="rounded-xl"
                />
              </div>
              <p className="text-center text-gray-600 font-medium mb-2">Seu objetivo</p>
              
              <div className="space-y-2">
                <div className="bg-pink-50 rounded-lg p-2">
                  <p className="text-xs text-gray-500">Peso desejado</p>
                  <p className="text-lg font-bold text-pink-600">57 kg</p>
                </div>
                <div className="bg-pink-50 rounded-lg p-2">
                  <p className="text-xs text-gray-500">Gordura corporal</p>
                  <p className="text-sm font-medium text-pink-600">Normal</p>
                </div>
                <div className="bg-pink-50 rounded-lg p-2">
                  <p className="text-xs text-gray-500">Nível de treino</p>
                  <p className="text-sm font-medium text-pink-600">Avançado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Info Boxes */}
          <div className="space-y-3 mb-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded-r-lg">
              <p className="text-blue-700 text-sm font-medium">
                Foco do Protocolo: Recuperação abdominal e tônus pós-gestação.
              </p>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded-r-lg">
              <p className="text-green-700 text-sm">
                Não se preocupe, o método é simples e sem impacto. Sua nova versão começará a ser visível no dia 12 de agosto.
              </p>
            </div>
            
            <div className="bg-purple-50 border-l-4 border-purple-500 p-3 rounded-r-lg flex items-center gap-2">
              <span className="text-2xl">🧘</span>
              <p className="text-purple-700 text-sm font-medium">
                Método sem impacto — seguro para qualquer idade e condição física
              </p>
            </div>
          </div>

          {/* Continue Button */}
          <button 
            onClick={handleContinue}
            disabled={isSubmitting}
            className="w-full bg-pink-600 hover:bg-pink-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-3 rounded-xl transition-colors duration-200"
          >
            {isSubmitting ? "Processando..." : "CONTINUAR"}
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
