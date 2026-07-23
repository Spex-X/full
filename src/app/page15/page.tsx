"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Page15() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/page16");
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
          {/* Image */}
          <div className="mb-6 flex justify-center">
            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/pagina15.webp"
                alt="Mulher motivada"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Motivational Text */}
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Isso é ótimo!
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Você está pronta para seguir em frente - prepare-se para a transformação com a Calistenia Asiática.
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
