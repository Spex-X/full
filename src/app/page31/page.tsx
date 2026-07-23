"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page31() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleContinue = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      router.push("/page32");
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
              Seu perfil está pronto
            </h2>
          </div>

          {/* IMC Section */}
          <div className="mb-6">
            <h3 className="text-center text-gray-700 font-medium mb-3">
              Índice de Massa Corporal (IMC)
            </h3>
            
            <div className="mb-3">
              <p className="text-center text-3xl font-bold text-pink-600 mb-2">
                Você - 26.8
              </p>
            </div>

            {/* IMC Gauge */}
            <div className="relative h-16 mb-2">
              <svg className="w-full h-full" viewBox="0 0 300 60">
                {/* Gauge segments */}
                <rect x="0" y="20" width="75" height="12" rx="6" fill="#3b82f6" />
                <rect x="75" y="20" width="75" height="12" rx="6" fill="#22c55e" />
                <rect x="150" y="20" width="75" height="12" rx="6" fill="#f59e0b" />
                <rect x="225" y="20" width="75" height="12" rx="6" fill="#ef4444" />

                {/* Scale markers */}
                <text x="0" y="45" fontSize="10" fill="#6b7280">15</text>
                <text x="75" y="45" fontSize="10" fill="#6b7280">18,5</text>
                <text x="150" y="45" fontSize="10" fill="#6b7280">25</text>
                <text x="225" y="45" fontSize="10" fill="#6b7280">30</text>
                <text x="285" y="45" fontSize="10" fill="#6b7280">40</text>

                {/* Indicator */}
                <polygon points="168,10 172,20 164,20" fill="#ec4899" />
              </svg>
            </div>

            {/* Labels */}
            <div className="flex justify-between text-xs text-gray-600 px-1">
              <span className="text-blue-500 font-medium">ABAIXO DO PESO</span>
              <span className="text-green-500 font-medium">NORMAL</span>
              <span className="text-yellow-500 font-medium">SOBREPESO</span>
              <span className="text-red-500 font-medium">OBESO</span>
            </div>
          </div>

          {/* Alerta de Bloqueio */}
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r-lg">
            <p className="text-red-700 font-bold mb-2">
              Alerta de Bloqueio:
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Seu metabolismo entrou em modo de resistência. O excesso de peso está sobrecarregando suas articulações e travando sua energia diária. O segredo para voltar a secar é a ativação rítmica das fibras profundas, que derrete a gordura mais difícil sem o esforço exaustivo da academia.
            </p>
          </div>

          {/* Profile Stats */}
          <div className="space-y-3 mb-6">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-600 text-sm">Estilo de vida</span>
              <span className="text-gray-800 font-medium">Ativo</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-600 text-sm">Nível de condicionamento</span>
              <span className="text-gray-800 font-medium">Iniciante</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-600 text-sm">Metabolismo</span>
              <span className="text-gray-800 font-medium text-right text-sm">
                Em resistência, difícil queimar gordura
              </span>
            </div>
          </div>

          {/* Continue Button */}
          <button 
            onClick={handleContinue}
            disabled={isSubmitting}
            className="w-full bg-pink-600 hover:bg-pink-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-3 rounded-xl transition-colors duration-200"
          >
            {isSubmitting ? "Processando..." : "Continuar"}
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
