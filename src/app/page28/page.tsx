"use client";

import { useRouter } from "next/navigation";

export default function Page28() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/page29");
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
              É assim que a transformação da sua vida se parece
            </h2>
            <p className="text-gray-600 text-sm">
              Com base nas suas respostas, prevemos que você está entre as mulheres com mais chances de atingir seus objetivos!
            </p>
          </div>

          {/* Graph */}
          <div className="mb-6">
            <div className="relative h-64 bg-gray-50 rounded-xl p-4">
              {/* Y-axis labels */}
              <div className="absolute left-2 top-4 bottom-8 flex flex-col justify-between text-xs text-gray-500">
                <span>100%</span>
                <span>75%</span>
                <span>50%</span>
                <span>25%</span>
                <span>0%</span>
              </div>

              {/* Graph area */}
              <svg className="w-full h-full ml-8" viewBox="0 0 300 200">
                {/* Grid lines */}
                <line x1="0" y1="40" x2="280" y2="40" stroke="#e5e7eb" strokeWidth="1" />
                <line x1="0" y1="80" x2="280" y2="80" stroke="#e5e7eb" strokeWidth="1" />
                <line x1="0" y1="120" x2="280" y2="120" stroke="#e5e7eb" strokeWidth="1" />
                <line x1="0" y1="160" x2="280" y2="160" stroke="#e5e7eb" strokeWidth="1" />

                {/* Você line (starting point) */}
                <line x1="0" y1="140" x2="280" y2="140" stroke="#9ca3af" strokeWidth="3" strokeDasharray="5,5" />
                
                {/* Sem mudanças line (flat) */}
                <line x1="0" y1="140" x2="280" y2="140" stroke="#ef4444" strokeWidth="3" />
                
                {/* Com Calistenia Asiática line (rising) */}
                <path d="M 0 140 Q 70 120 140 80 T 280 20" stroke="#ec4899" strokeWidth="4" fill="none" />

                {/* Legend */}
                <circle cx="290" cy="140" r="4" fill="#9ca3af" />
                <circle cx="290" cy="155" r="4" fill="#ef4444" />
                <circle cx="290" cy="170" r="4" fill="#ec4899" />
              </svg>

              {/* Legend */}
              <div className="absolute bottom-2 right-2 flex flex-col gap-1 text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                  <span className="text-gray-600">Você</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span className="text-gray-600">Sem mudanças</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                  <span className="text-gray-600">Com Calistenia Asiática</span>
                </div>
              </div>
            </div>
          </div>

          {/* Continue Button */}
          <button 
            onClick={handleContinue}
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 rounded-xl transition-colors duration-200"
          >
            Continuar
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
