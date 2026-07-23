"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page30() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleContinue = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      router.push("/page31");
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
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              O último plano que você precisará para ficar em forma
            </h2>
            <p className="text-gray-600 text-lg">
              Prevemos que você estará com
            </p>
            <p className="text-4xl font-bold text-pink-600 mb-2">
              57kg
            </p>
            <p className="text-gray-600 text-sm">
              em até 21 dias
            </p>
          </div>

          {/* Weight Loss Graph */}
          <div className="mb-6">
            <div className="relative h-48 bg-gray-50 rounded-xl p-4">
              <svg className="w-full h-full" viewBox="0 0 300 150">
                {/* Grid lines */}
                <line x1="0" y1="30" x2="280" y2="30" stroke="#e5e7eb" strokeWidth="1" />
                <line x1="0" y1="60" x2="280" y2="60" stroke="#e5e7eb" strokeWidth="1" />
                <line x1="0" y1="90" x2="280" y2="90" stroke="#e5e7eb" strokeWidth="1" />
                <line x1="0" y1="120" x2="280" y2="120" stroke="#e5e7eb" strokeWidth="1" />

                {/* Weight loss line */}
                <path d="M 0 30 Q 70 60 140 90 T 280 120" stroke="#ec4899" strokeWidth="4" fill="none" />

                {/* Start point */}
                <circle cx="0" cy="30" r="6" fill="#ec4899" />
                <text x="10" y="25" fontSize="12" fill="#374151" fontWeight="bold">73kg</text>

                {/* End point */}
                <circle cx="280" cy="120" r="6" fill="#ec4899" />
                <text x="240" y="140" fontSize="12" fill="#374151" fontWeight="bold">57kg</text>

                {/* Week marker */}
                <line x1="140" y1="90" x2="140" y2="130" stroke="#ec4899" strokeWidth="2" strokeDasharray="4,2" />
                <text x="120" y="145" fontSize="10" fill="#ec4899" fontWeight="bold">Semana 2</text>
              </svg>
            </div>
          </div>

          {/* Motivational Text */}
          <div className="text-center mb-4">
            <p className="text-xl font-bold text-pink-600 mb-2">
              Protocolo de 21 dias quase pronto!
            </p>
            <p className="text-gray-600 text-sm">
              De acordo com as suas respostas, você está pronta para ter resultados em 21 dias com o nosso programa.
            </p>
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
