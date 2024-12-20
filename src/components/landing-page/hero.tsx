import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <header className="bg-gray-100 py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">Viva Bem</h1>
        <p className="text-xl mb-8 text-gray-600">
          Sistema Municipal de Turmas Esportivas para uma vida mais saudável
        </p>
        <Button asChild size="lg">
          <a href="#inscricao">Inscreva-se Agora</a>
        </Button>
      </div>
    </header>
  );
}