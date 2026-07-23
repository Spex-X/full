"use client";

import { useRouter } from "next/navigation";

export default function Page35() {
  const router = useRouter();

  const handleContinue = () => {
    // This is the final sales page
    console.log("Sales page");
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
              Seu plano de Calistenia Asiática está pronto!
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Assista ao vídeo abaixo para entender como funciona...
            </p>
          </div>

          {/* Video */}
          <div className="mb-6">
            <video
              controls
              className="w-full rounded-xl shadow-lg"
              poster="https://res.cloudinary.com/dss3arlis/image/upload/v1784832900/video-poster.jpg"
            >
              <source
                src="https://res.cloudinary.com/dss3arlis/video/upload/v1784832900/Programa_de_Calistenia_para_Mulheres_zalhur.mp4"
                type="video/mp4"
              />
              Seu navegador não suporta vídeos.
            </video>
          </div>

          {/* CTA Button */}
          <button 
            onClick={handleContinue}
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 rounded-xl transition-colors duration-200 mb-4"
          >
            Obter meu plano personalizado agora
          </button>

          {/* Urgency */}
          <p className="text-center text-red-600 font-bold text-sm mb-6">
            Restam apenas 6 vagas
          </p>

          {/* What you'll receive */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">
              O que você vai receber
            </h3>
            <div className="space-y-3">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="font-semibold text-gray-800 text-sm">
                  Ativação das Fibras Profundas
                </p>
                <p className="text-xs text-gray-600">
                  o segredo asiático para destravar o metabolismo e queimar gordura de verdade, sem precisar se matar na academia.
                </p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="font-semibold text-gray-800 text-sm">
                  Cronograma "Barriga Chapada" em 21 Dias
                </p>
                <p className="text-xs text-gray-600">
                  um passo a passo diário e direto ao ponto para você saber exatamente o que fazer até o dia 13 de agosto.
                </p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="font-semibold text-gray-800 text-sm">
                  Guia de Alimentação Metabólica
                </p>
                <p className="text-xs text-gray-600">
                  receitas práticas e gostosas para acelerar a queima de gordura enquanto você descansa.
                </p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="font-semibold text-gray-800 text-sm">
                  Recuperação e Alívio Articular
                </p>
                <p className="text-xs text-gray-600">
                  exercícios suaves e sem impacto feitos para fortalecer suas articulações e eliminar dores enquanto você elimina peso.
                </p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="font-semibold text-gray-800 text-sm">
                  Rotinas de Alta Performance
                </p>
                <p className="text-xs text-gray-600">
                  treinos rápidos de 10 a 20 minutos que se encaixam na sua correria para manter o metabolismo acelerado o dia todo.
                </p>
              </div>
            </div>
          </div>

          {/* App Section */}
          <div className="text-center mb-4">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Aplicativo Calistenia Asiática Atlas
            </h3>
            <p className="text-red-600 font-bold text-sm mb-4">
              Restam apenas 6 vagas
            </p>
          </div>

          {/* Price */}
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-xl mb-4">
            <p className="text-center text-gray-500 line-through text-sm mb-1">
              De R$297,00
            </p>
            <p className="text-center text-3xl font-bold text-pink-600 mb-2">
              por R$37,90
            </p>
            <p className="text-center text-xs text-gray-600 mb-2">
              Desconto válido apenas hoje, 23/07/2026
            </p>
            <p className="text-center text-xs text-gray-600">
              Pagamento único • Acesso completo ao programa
            </p>
          </div>

          {/* Security */}
          <div className="text-center mb-4">
            <p className="text-xs text-gray-600">
              🔒 Compra 100% Segura • 30 Dias de Garantia Incondicional
            </p>
          </div>

          {/* CTA Button */}
          <button 
            onClick={handleContinue}
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 rounded-xl transition-colors duration-200 mb-6"
          >
            Obter meu plano personalizado agora
          </button>

          {/* Results */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">
              Resultados que nos deixam orgulhosos
            </h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="font-bold text-pink-600 text-sm mb-1">
                  Transformação de Beatriz
                </p>
                <p className="text-xs text-gray-700 mb-1">
                  Beatriz: -3kg e Corpo Tonificado em 21 dias
                </p>
                <p className="text-xs text-gray-600 italic">
                  "Eu não estava muito acima do peso, mas meu corpo não tinha forma nenhuma e eu me sentia 'mole'. Com a Calistenia Asiática, a ativação das fibras profundas esculpiu meu corpo. Em 21 dias, perdi 3kg de gordura e minha barriga ficou durinha. Meu corpo finalmente ganhou desenho e me sinto muito mais firme e segura."
                </p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="font-bold text-pink-600 text-sm mb-1">
                  Transformação de Carla
                </p>
                <p className="text-xs text-gray-700 mb-1">
                  Carla: -13kg em 21 dias
                </p>
                <p className="text-xs text-gray-600 italic">
                  "Eu estava perdida, sem energia e com muita vergonha do meu corpo. Achava que precisaria de horas na academia, mas a Calistenia Asiática mudou tudo. Redescobri minha força treinando no meu próprio quarto. Hoje me sinto empoderada, confiante e 13kg mais leve em apenas 3 semanas. Foi a melhor decisão que tomei!"
                </p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="font-bold text-pink-600 text-sm mb-1">
                  Transformação de Fernanda
                </p>
                <p className="text-xs text-gray-700 mb-1">
                  Fernanda: -4kg em 14 dias
                </p>
                <p className="text-xs text-gray-600 italic">
                  "Sempre fui desconfiada com promessas rápidas, mas as fotos não mentem. Em apenas duas semanas, a ativação das fibras profundas 'sugou' minha barriga para dentro de um jeito que abdominal nenhum fez. Perdi 4kg muito rápido e o inchaço sumiu. Se em 14 dias estou assim, imagina no final do protocolo!"
                </p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="font-bold text-pink-600 text-sm mb-1">
                  Transformação de Juliana
                </p>
                <p className="text-xs text-gray-700 mb-1">
                  Juliana: -8kg em 21 dias (Mãe de 2 filhos)
                </p>
                <p className="text-xs text-gray-600 italic">
                  "Depois da gravidez, essa 'pochete' não saía por nada e minha postura estava horrível. Os movimentos suaves da Calistenia Asiática foram a minha salvação. Recuperei minha postura e eliminei 8kg em 21 dias. Finalmente estou vendo minha barriga ficar retinha de novo, sem precisar de impacto."
                </p>
              </div>
            </div>
          </div>

          {/* Urgency */}
          <p className="text-center text-red-600 font-bold text-sm mb-4">
            Restam apenas 6 vagas
          </p>

          {/* Price */}
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-xl mb-4">
            <p className="text-center text-gray-500 line-through text-sm mb-1">
              De R$297,00
            </p>
            <p className="text-center text-3xl font-bold text-pink-600 mb-2">
              por R$37,90
            </p>
            <p className="text-center text-xs text-gray-600 mb-2">
              Desconto válido apenas hoje, 23/07/2026
            </p>
            <p className="text-center text-xs text-gray-600">
              Pagamento único • Acesso completo ao programa
            </p>
          </div>

          {/* Security */}
          <div className="text-center mb-4">
            <p className="text-xs text-gray-600">
              🔒 Compra 100% Segura • 30 Dias de Garantia Incondicional
            </p>
          </div>

          {/* CTA Button */}
          <button 
            onClick={handleContinue}
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 rounded-xl transition-colors duration-200 mb-6"
          >
            Obter meu plano personalizado agora
          </button>

          {/* Bonuses */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">
              +Bônus Exclusivos
            </h3>
            <p className="text-xs text-gray-600 mb-4 text-center">
              Além de você ter acesso às aulas e ao seu plano personalizado, separamos diversos bônus para te ajudar a acelerar o seu processo de emagrecimento rápido:
            </p>
            <div className="space-y-3">
              <div className="bg-pink-50 p-3 rounded-lg">
                <p className="font-semibold text-gray-800 text-sm mb-1">
                  1. Chá Asiático Anticelulite
                </p>
                <p className="text-xs text-gray-600">
                  Misture uma planta pouco conhecida com água morna para assistir às celulites sumindo dia após dia.
                </p>
              </div>
              <div className="bg-pink-50 p-3 rounded-lg">
                <p className="font-semibold text-gray-800 text-sm mb-1">
                  2. Dieta 100% Personalizada
                </p>
                <p className="text-xs text-gray-600">
                  Você terá acesso a diversas receitas para preparar e ver a gordura indo embora muito mais rápido.
                </p>
              </div>
              <div className="bg-pink-50 p-3 rounded-lg">
                <p className="font-semibold text-gray-800 text-sm mb-1">
                  3. Cronograma de Alimentação Inteligente
                </p>
                <p className="text-xs text-gray-600">
                  O passo a passo completo para manter seu metabolismo acelerado e sua reeducação alimentar.
                </p>
              </div>
              <div className="bg-pink-50 p-3 rounded-lg">
                <p className="font-semibold text-gray-800 text-sm mb-1">
                  4. Suporte 24h Todos os Dias
                </p>
                <p className="text-xs text-gray-600">
                  Nosso time estará pronto para te ajudar com qualquer dúvida, independente do horário.
                </p>
              </div>
            </div>
          </div>

          {/* Guarantee */}
          <div className="bg-green-50 border-2 border-green-500 p-4 rounded-xl mb-6">
            <h3 className="text-lg font-bold text-green-700 mb-2 text-center">
              Selo de Garantia 30 Dias
            </h3>
            <p className="text-center font-bold text-green-700 mb-2">
              30 Dias de Garantia Incondicional
            </p>
            <p className="text-xs text-gray-700 text-center">
              Nós confiamos tanto nos resultados do Protocolo de Calistenia Asiática que o risco é todo nosso.
            </p>
            <p className="text-xs text-gray-700 text-center mt-2">
              Você tem 30 dias inteiros para testar o aplicativo e todos os bônus. Se por qualquer motivo você não estiver 100% satisfeita, nós devolveremos todo o seu investimento.
            </p>
            <p className="text-xs text-gray-700 text-center mt-2 font-semibold">
              Reembolso total e imediato, sem perguntas e sem complicações.
            </p>
          </div>

          {/* FAQ */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">
              Perguntas frequentes
            </h3>
            <div className="space-y-3">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="font-semibold text-gray-800 text-sm">
                  Quais exercícios a Calistenia inclui?
                </p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="font-semibold text-gray-800 text-sm">
                  Como vou descobrir qual programa é ideal para mim?
                </p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="font-semibold text-gray-800 text-sm">
                  Como posso acessar meu plano?
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button 
            onClick={handleContinue}
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 rounded-xl transition-colors duration-200 mb-4"
          >
            Obter meu plano personalizado agora
          </button>

          {/* Footer */}
          <p className="text-center text-xs text-gray-500">
            Termos de Serviço e Política de Privacidade
          </p>
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
