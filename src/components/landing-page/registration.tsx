import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Registration() {
  return (
    <section id="inscricao" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Como se Inscrever</h2>
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Processo de Inscrição</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4 text-gray-600">
                <li className="flex gap-3">
                  <span className="font-bold">1.</span>
                  <span>Compareça ao Centro Esportivo Municipal</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">2.</span>
                  <span>Apresente seus documentos (RG e comprovante de residência)</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">3.</span>
                  <span>Escolha a modalidade e horário disponível</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">4.</span>
                  <span>Realize a matrícula gratuitamente</span>
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}