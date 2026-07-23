"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Page4() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/page5");
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

          {/* Image and Text Layout */}
          <div className="flex gap-4 items-start">
            {/* Text */}
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-800 mb-3">
                Você já tem a base, mas a Calistenia Asiática é diferente da calistenia comum.
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Enquanto o método tradicional foca apenas em força externa, nossa técnica ativa as fibras profundas, agindo na musculatura interna, onde eliminamos a gordura mais difícil de queimar e destravamos o seu metabolismo de forma definitiva.
              </p>
            </div>

            {/* Image */}
            <div className="flex-shrink-0 w-1/2">
              <div className="relative w-full h-56 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/pagina 4.png"
                  alt="Mulher praticando exercício"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Continue Button */}
          <button 
            onClick={handleContinue}
            className="w-full mt-4 bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 rounded-xl transition-colors duration-200"
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
            <div className="w-2 h-2 rounded-full bg-white"></div>
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