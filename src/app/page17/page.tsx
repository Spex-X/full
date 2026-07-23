"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page17() {
  const [unit, setUnit] = useState<"kg" | "libra">("kg");
  const [weight, setWeight] = useState(73);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleUnitToggle = (newUnit: "kg" | "libra") => {
    setUnit(newUnit);
    // Convert weight when switching units
    if (newUnit === "libra") {
      setWeight(Math.round(weight * 2.20462));
    } else {
      setWeight(Math.round(weight / 2.20462));
    }
  };

  const handleContinue = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      router.push("/page18");
    }, 300);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(parseInt(e.target.value));
  };

  const maxHeight = unit === "kg" ? 150 : 331;
  const minHeight = unit === "kg" ? 30 : 66;

  // Calculate BMI (assuming height of 165cm for demo)
  const heightInMeters = 1.65;
  const weightInKg = unit === "kg" ? weight : weight / 2.20462;
  const bmi = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);

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
              Qual é o seu peso agora?
            </h2>
          </div>

          {/* Unit Toggle */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex bg-gray-100 rounded-full p-1">
              <button
                onClick={() => handleUnitToggle("kg")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  unit === "kg"
                    ? "bg-pink-600 text-white"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                kg
              </button>
              <button
                onClick={() => handleUnitToggle("libra")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  unit === "libra"
                    ? "bg-pink-600 text-white"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Libra
              </button>
            </div>
          </div>

          {/* Weight Display */}
          <div className="text-center mb-4">
            <div className="text-6xl font-bold text-gray-800 mb-2">
              {weight}
            </div>
            <div className="text-2xl text-gray-600 mb-4">
              {unit}
            </div>
          </div>

          {/* Slider */}
          <div className="mb-4">
            <input
              type="range"
              min={minHeight}
              max={maxHeight}
              value={weight}
              onChange={handleSliderChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-pink-600"
            />
            <p className="text-center text-gray-500 text-sm mt-2">
              Arraste para ajustar
            </p>
          </div>

          {/* IMC Info Box */}
          <div className="bg-pink-50 rounded-xl p-4 mb-4">
            <p className="text-pink-700 font-medium text-center mb-2">
              Seu IMC é {bmi}, que é considerado sobrepeso.
            </p>
            <p className="text-gray-600 text-sm text-center">
              Mantenha-se positivo e concentre-se em uma dieta equilibrada e exercícios.
            </p>
          </div>

          {/* Continue Button */}
          <button 
            onClick={handleContinue}
            disabled={isSubmitting}
            className="w-full bg-pink-600 hover:bg-pink-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-3 rounded-xl transition-colors duration-200"
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
