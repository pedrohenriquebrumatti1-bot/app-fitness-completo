"use client"

import { useState } from "react"
import { Dumbbell, Apple, Target, Flame, TrendingUp, Clock, ChevronRight, Check } from "lucide-react"

type Goal = "emagrecimento" | "hipertrofia"
type Tab = "inicio" | "treinos" | "dietas" | "exercicios"

export default function FitnessApp() {
  const [activeTab, setActiveTab] = useState<Tab>("inicio")
  const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-orange-500 to-pink-600 p-2 rounded-xl">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-white">FitPro</h1>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Target className="w-4 h-4" />
              <span className="hidden sm:inline">Seu objetivo fitness</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-slate-900/30 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 sm:gap-2 overflow-x-auto py-2">
            {[
              { id: "inicio" as Tab, label: "Início", icon: Target },
              { id: "treinos" as Tab, label: "Treinos", icon: Dumbbell },
              { id: "dietas" as Tab, label: "Dietas", icon: Apple },
              { id: "exercicios" as Tab, label: "Exercícios", icon: Flame },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-orange-500 to-pink-600 text-white shadow-lg"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {activeTab === "inicio" && <InicioTab selectedGoal={selectedGoal} setSelectedGoal={setSelectedGoal} />}
        {activeTab === "treinos" && <TreinosTab selectedGoal={selectedGoal} />}
        {activeTab === "dietas" && <DietasTab selectedGoal={selectedGoal} />}
        {activeTab === "exercicios" && <ExerciciosTab />}
      </main>
    </div>
  )
}

// Início Tab
function InicioTab({ selectedGoal, setSelectedGoal }: { selectedGoal: Goal | null; setSelectedGoal: (goal: Goal) => void }) {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Qual é o seu objetivo?</h2>
        <p className="text-slate-400 text-lg">Escolha seu objetivo para receber treinos e dietas personalizados</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <button
          onClick={() => setSelectedGoal("emagrecimento")}
          className={`group relative p-8 rounded-2xl border-2 transition-all hover:scale-105 ${
            selectedGoal === "emagrecimento"
              ? "border-orange-500 bg-orange-500/10"
              : "border-slate-700 bg-slate-800/50 hover:border-slate-600"
          }`}
        >
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="bg-gradient-to-br from-orange-400 to-red-500 p-4 rounded-2xl">
              <Flame className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Emagrecimento</h3>
            <p className="text-slate-400">Perca peso de forma saudável com treinos e dietas balanceadas</p>
            {selectedGoal === "emagrecimento" && (
              <div className="absolute top-4 right-4 bg-orange-500 rounded-full p-1">
                <Check className="w-5 h-5 text-white" />
              </div>
            )}
          </div>
        </button>

        <button
          onClick={() => setSelectedGoal("hipertrofia")}
          className={`group relative p-8 rounded-2xl border-2 transition-all hover:scale-105 ${
            selectedGoal === "hipertrofia"
              ? "border-blue-500 bg-blue-500/10"
              : "border-slate-700 bg-slate-800/50 hover:border-slate-600"
          }`}
        >
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="bg-gradient-to-br from-blue-400 to-indigo-600 p-4 rounded-2xl">
              <TrendingUp className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Ganho de Massa</h3>
            <p className="text-slate-400">Construa músculos com treinos intensos e dieta hipercalórica</p>
            {selectedGoal === "hipertrofia" && (
              <div className="absolute top-4 right-4 bg-blue-500 rounded-full p-1">
                <Check className="w-5 h-5 text-white" />
              </div>
            )}
          </div>
        </button>
      </div>

      {selectedGoal && (
        <div className="bg-gradient-to-r from-orange-500/10 to-pink-600/10 border border-orange-500/20 rounded-2xl p-6 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-4">Próximos passos:</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-slate-300">
              <Check className="w-5 h-5 text-green-500" />
              <span>Explore os treinos personalizados na aba "Treinos"</span>
            </li>
            <li className="flex items-center gap-3 text-slate-300">
              <Check className="w-5 h-5 text-green-500" />
              <span>Confira as dietas recomendadas na aba "Dietas"</span>
            </li>
            <li className="flex items-center gap-3 text-slate-300">
              <Check className="w-5 h-5 text-green-500" />
              <span>Aprenda exercícios específicos na aba "Exercícios"</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

// Treinos Tab
function TreinosTab({ selectedGoal }: { selectedGoal: Goal | null }) {
  const treinosEmagrecimento = [
    {
      nome: "Treino HIIT Completo",
      duracao: "30 min",
      nivel: "Intermediário",
      calorias: "400-500 kcal",
      exercicios: [
        "Burpees - 3x15",
        "Mountain Climbers - 3x20",
        "Jump Squats - 3x15",
        "High Knees - 3x30s",
        "Prancha - 3x45s",
      ],
    },
    {
      nome: "Cardio + Força",
      duracao: "45 min",
      nivel: "Iniciante",
      calorias: "350-450 kcal",
      exercicios: [
        "Corrida leve - 15 min",
        "Agachamento - 3x12",
        "Flexão - 3x10",
        "Polichinelo - 3x30",
        "Abdominal - 3x15",
      ],
    },
    {
      nome: "Circuito Fat Burn",
      duracao: "40 min",
      nivel: "Avançado",
      calorias: "500-600 kcal",
      exercicios: [
        "Burpees - 4x20",
        "Box Jump - 4x15",
        "Kettlebell Swing - 4x20",
        "Battle Rope - 4x30s",
        "Sprint - 4x100m",
      ],
    },
  ]

  const treinosHipertrofia = [
    {
      nome: "Treino A - Peito e Tríceps",
      duracao: "60 min",
      nivel: "Intermediário",
      series: "4x8-12",
      exercicios: [
        "Supino Reto - 4x8",
        "Supino Inclinado - 4x10",
        "Crucifixo - 3x12",
        "Tríceps Testa - 4x10",
        "Tríceps Corda - 3x12",
      ],
    },
    {
      nome: "Treino B - Costas e Bíceps",
      duracao: "60 min",
      nivel: "Intermediário",
      series: "4x8-12",
      exercicios: [
        "Barra Fixa - 4x8",
        "Remada Curvada - 4x10",
        "Puxada Frontal - 4x12",
        "Rosca Direta - 4x10",
        "Rosca Martelo - 3x12",
      ],
    },
    {
      nome: "Treino C - Pernas",
      duracao: "70 min",
      nivel: "Avançado",
      series: "4x10-15",
      exercicios: [
        "Agachamento Livre - 4x10",
        "Leg Press - 4x12",
        "Cadeira Extensora - 4x15",
        "Cadeira Flexora - 4x15",
        "Panturrilha - 4x20",
      ],
    },
  ]

  const treinos = selectedGoal === "emagrecimento" ? treinosEmagrecimento : treinosHipertrofia

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-white">
          {selectedGoal === "emagrecimento" ? "Treinos para Emagrecimento" : "Treinos para Hipertrofia"}
        </h2>
        <p className="text-slate-400">
          {selectedGoal === "emagrecimento"
            ? "Queime calorias e acelere seu metabolismo"
            : "Construa músculos com treinos focados"}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {treinos.map((treino, idx) => (
          <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-slate-600 transition-all">
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{treino.nome}</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm">{treino.nivel}</span>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {treino.duracao}
                  </span>
                </div>
              </div>

              {"calorias" in treino && (
                <div className="flex items-center gap-2 text-slate-400">
                  <Flame className="w-4 h-4 text-orange-500" />
                  <span className="text-sm">{treino.calorias}</span>
                </div>
              )}

              {"series" in treino && (
                <div className="flex items-center gap-2 text-slate-400">
                  <Target className="w-4 h-4 text-blue-500" />
                  <span className="text-sm">Séries: {treino.series}</span>
                </div>
              )}

              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-slate-300">Exercícios:</h4>
                <ul className="space-y-2">
                  {treino.exercicios.map((ex, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                      <ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Dietas Tab
function DietasTab({ selectedGoal }: { selectedGoal: Goal | null }) {
  const dietasEmagrecimento = [
    {
      nome: "Dieta Low Carb",
      calorias: "1500-1800 kcal/dia",
      macros: "40% Proteína, 40% Gordura, 20% Carboidrato",
      refeicoes: [
        {
          nome: "Café da Manhã",
          alimentos: ["2 ovos mexidos", "1 fatia de queijo", "Café sem açúcar", "Abacate (1/2)"],
        },
        {
          nome: "Almoço",
          alimentos: ["Peito de frango grelhado (150g)", "Salada verde", "Brócolis no vapor", "Azeite (1 colher)"],
        },
        {
          nome: "Lanche",
          alimentos: ["Iogurte grego natural", "Castanhas (30g)"],
        },
        {
          nome: "Jantar",
          alimentos: ["Salmão grelhado (150g)", "Aspargos", "Salada de folhas"],
        },
      ],
    },
    {
      nome: "Dieta Balanceada",
      calorias: "1600-1900 kcal/dia",
      macros: "30% Proteína, 30% Gordura, 40% Carboidrato",
      refeicoes: [
        {
          nome: "Café da Manhã",
          alimentos: ["Aveia (50g)", "Banana", "Whey protein", "Pasta de amendoim (1 colher)"],
        },
        {
          nome: "Almoço",
          alimentos: ["Arroz integral (4 colheres)", "Feijão", "Frango grelhado (120g)", "Legumes"],
        },
        {
          nome: "Lanche",
          alimentos: ["Batata doce (100g)", "Atum (1 lata)"],
        },
        {
          nome: "Jantar",
          alimentos: ["Omelete (3 ovos)", "Salada", "Pão integral (2 fatias)"],
        },
      ],
    },
  ]

  const dietasHipertrofia = [
    {
      nome: "Dieta Hipercalórica",
      calorias: "3000-3500 kcal/dia",
      macros: "35% Proteína, 25% Gordura, 40% Carboidrato",
      refeicoes: [
        {
          nome: "Café da Manhã",
          alimentos: ["Aveia (80g)", "Whey protein (2 scoops)", "Banana", "Pasta de amendoim (2 colheres)", "Ovos (3)"],
        },
        {
          nome: "Lanche 1",
          alimentos: ["Batata doce (200g)", "Peito de frango (150g)", "Azeite"],
        },
        {
          nome: "Almoço",
          alimentos: ["Arroz (8 colheres)", "Feijão", "Carne vermelha (200g)", "Legumes", "Salada"],
        },
        {
          nome: "Lanche 2",
          alimentos: ["Pão integral", "Atum (2 latas)", "Abacate"],
        },
        {
          nome: "Pré-treino",
          alimentos: ["Banana", "Whey protein", "Aveia (50g)"],
        },
        {
          nome: "Pós-treino",
          alimentos: ["Whey protein (2 scoops)", "Dextrose (30g)", "Creatina (5g)"],
        },
        {
          nome: "Jantar",
          alimentos: ["Macarrão integral (100g)", "Frango (200g)", "Molho de tomate", "Queijo"],
        },
        {
          nome: "Ceia",
          alimentos: ["Caseína ou iogurte grego", "Castanhas (40g)"],
        },
      ],
    },
    {
      nome: "Dieta Clean Bulk",
      calorias: "2800-3200 kcal/dia",
      macros: "40% Proteína, 25% Gordura, 35% Carboidrato",
      refeicoes: [
        {
          nome: "Café da Manhã",
          alimentos: ["Panqueca de aveia (100g)", "Ovos (4)", "Frutas vermelhas"],
        },
        {
          nome: "Lanche 1",
          alimentos: ["Batata doce (150g)", "Peito de peru (100g)", "Castanhas"],
        },
        {
          nome: "Almoço",
          alimentos: ["Arroz integral (6 colheres)", "Feijão", "Salmão (180g)", "Brócolis", "Salada"],
        },
        {
          nome: "Lanche 2",
          alimentos: ["Tapioca", "Frango desfiado", "Queijo cottage"],
        },
        {
          nome: "Jantar",
          alimentos: ["Batata inglesa (200g)", "Carne magra (180g)", "Legumes grelhados"],
        },
        {
          nome: "Ceia",
          alimentos: ["Iogurte grego", "Whey protein", "Pasta de amendoim"],
        },
      ],
    },
  ]

  const dietas = selectedGoal === "emagrecimento" ? dietasEmagrecimento : dietasHipertrofia

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-white">
          {selectedGoal === "emagrecimento" ? "Dietas para Emagrecimento" : "Dietas para Ganho de Massa"}
        </h2>
        <p className="text-slate-400">
          {selectedGoal === "emagrecimento"
            ? "Planos alimentares para déficit calórico saudável"
            : "Planos alimentares para superávit calórico e crescimento muscular"}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {dietas.map((dieta, idx) => (
          <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-slate-600 transition-all">
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{dieta.nome}</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Flame className="w-4 h-4 text-orange-500" />
                    <span className="text-sm">{dieta.calorias}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Target className="w-4 h-4 text-blue-500" />
                    <span className="text-sm">{dieta.macros}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {dieta.refeicoes.map((refeicao, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4">
                    <h4 className="font-semibold text-white mb-2">{refeicao.nome}</h4>
                    <ul className="space-y-1">
                      {refeicao.alimentos.map((alimento, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-slate-400">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{alimento}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Exercícios Tab
function ExerciciosTab() {
  const gruposMusculares = [
    {
      nome: "Peito",
      cor: "from-red-500 to-pink-600",
      exercicios: [
        { nome: "Supino Reto", series: "4x8-12", descricao: "Exercício base para peito, trabalha toda região peitoral" },
        { nome: "Supino Inclinado", series: "4x10-12", descricao: "Foco no peitoral superior" },
        { nome: "Crucifixo", series: "3x12-15", descricao: "Isolamento do peitoral, ótimo para definição" },
        { nome: "Flexão", series: "3x15-20", descricao: "Exercício funcional que trabalha peito, ombros e tríceps" },
      ],
    },
    {
      nome: "Costas",
      cor: "from-blue-500 to-cyan-600",
      exercicios: [
        { nome: "Barra Fixa", series: "4x6-10", descricao: "Exercício composto para largura das costas" },
        { nome: "Remada Curvada", series: "4x8-12", descricao: "Trabalha espessura das costas" },
        { nome: "Puxada Frontal", series: "4x10-12", descricao: "Desenvolvimento do latíssimo do dorso" },
        { nome: "Remada Baixa", series: "3x12-15", descricao: "Foco na região média das costas" },
      ],
    },
    {
      nome: "Pernas",
      cor: "from-green-500 to-emerald-600",
      exercicios: [
        { nome: "Agachamento Livre", series: "4x8-12", descricao: "Rei dos exercícios, trabalha todo o corpo" },
        { nome: "Leg Press", series: "4x10-15", descricao: "Exercício seguro para quadríceps e glúteos" },
        { nome: "Cadeira Extensora", series: "3x12-15", descricao: "Isolamento do quadríceps" },
        { nome: "Cadeira Flexora", series: "3x12-15", descricao: "Trabalha posterior de coxa" },
        { nome: "Panturrilha em Pé", series: "4x15-20", descricao: "Desenvolvimento das panturrilhas" },
      ],
    },
    {
      nome: "Abdômen",
      cor: "from-orange-500 to-yellow-600",
      exercicios: [
        { nome: "Prancha", series: "3x45-60s", descricao: "Fortalecimento do core completo" },
        { nome: "Abdominal Crunch", series: "3x15-20", descricao: "Foco no reto abdominal superior" },
        { nome: "Elevação de Pernas", series: "3x12-15", descricao: "Trabalha abdômen inferior" },
        { nome: "Prancha Lateral", series: "3x30-45s", descricao: "Fortalece oblíquos" },
        { nome: "Mountain Climbers", series: "3x20-30", descricao: "Exercício dinâmico para core e cardio" },
        { nome: "Russian Twist", series: "3x20", descricao: "Rotação do tronco, trabalha oblíquos" },
      ],
    },
    {
      nome: "Ombros",
      cor: "from-purple-500 to-indigo-600",
      exercicios: [
        { nome: "Desenvolvimento", series: "4x8-12", descricao: "Exercício base para ombros" },
        { nome: "Elevação Lateral", series: "3x12-15", descricao: "Isolamento do deltoide lateral" },
        { nome: "Elevação Frontal", series: "3x12-15", descricao: "Trabalha deltoide anterior" },
        { nome: "Crucifixo Inverso", series: "3x12-15", descricao: "Foco no deltoide posterior" },
      ],
    },
    {
      nome: "Bíceps",
      cor: "from-cyan-500 to-blue-600",
      exercicios: [
        { nome: "Rosca Direta", series: "4x10-12", descricao: "Exercício clássico para bíceps" },
        { nome: "Rosca Alternada", series: "3x12", descricao: "Trabalho unilateral dos bíceps" },
        { nome: "Rosca Martelo", series: "3x12-15", descricao: "Foco no braquial e antebraço" },
        { nome: "Rosca Scott", series: "3x10-12", descricao: "Isolamento total do bíceps" },
      ],
    },
    {
      nome: "Tríceps",
      cor: "from-pink-500 to-rose-600",
      exercicios: [
        { nome: "Tríceps Testa", series: "4x10-12", descricao: "Exercício base para tríceps" },
        { nome: "Tríceps Corda", series: "3x12-15", descricao: "Trabalha todas as cabeças do tríceps" },
        { nome: "Mergulho", series: "3x10-15", descricao: "Exercício composto para tríceps" },
        { nome: "Tríceps Coice", series: "3x12-15", descricao: "Isolamento da cabeça longa" },
      ],
    },
    {
      nome: "Glúteos",
      cor: "from-rose-500 to-pink-600",
      exercicios: [
        { nome: "Hip Thrust", series: "4x10-15", descricao: "Melhor exercício para glúteos" },
        { nome: "Agachamento Sumô", series: "4x12-15", descricao: "Ênfase em glúteos e adutores" },
        { nome: "Stiff", series: "4x10-12", descricao: "Trabalha posterior e glúteos" },
        { nome: "Abdução de Pernas", series: "3x15-20", descricao: "Isolamento do glúteo médio" },
      ],
    },
  ]

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-white">Biblioteca de Exercícios</h2>
        <p className="text-slate-400">Exercícios detalhados para cada grupo muscular</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {gruposMusculares.map((grupo, idx) => (
          <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-slate-600 transition-all">
            <div className="space-y-4">
              <div className={`bg-gradient-to-r ${grupo.cor} p-4 rounded-xl`}>
                <h3 className="text-2xl font-bold text-white text-center">{grupo.nome}</h3>
              </div>

              <div className="space-y-3">
                {grupo.exercicios.map((exercicio, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 hover:bg-slate-900/70 transition-all">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h4 className="font-semibold text-white">{exercicio.nome}</h4>
                      <span className="px-2 py-1 bg-slate-700 text-slate-300 rounded text-xs whitespace-nowrap">
                        {exercicio.series}
                      </span>
                    </div>
                    <p className="text-sm text-slate-400">{exercicio.descricao}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
