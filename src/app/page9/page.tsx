"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Page9() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/page10");
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
          </div>

          {/* Image */}
          <div className="mb-4 flex justify-center">
            <div className="relative w-full h-48 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/falaok.png"
                alt="Mulher fazendo sinal de OK"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Apenas 7 minutos por dia — transformarão seu corpo e destravarão o seu metabolismo sem o esforço exaustivo da academia!
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              O Protocolo de Calistenia Asiática utiliza ativações de fibras profundas para derreter a gordura acumulada e chapar a barriga, agindo onde os exercícios comuns de academia não conseguem chegar, de forma simples e definitiva...
            </p>
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
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
          </div>
        </div>
      </div>
    </div>
  );
}