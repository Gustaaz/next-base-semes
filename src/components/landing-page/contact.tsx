import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Contact() {
  return (
    <section id="contato" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Entre em Contato</h2>
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Informações de Contato</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-600">
              <p><strong>Endereço:</strong> Rua do Esporte, 123 - Centro</p>
              <p><strong>Telefone:</strong> (11) 1234-5678</p>
              <p><strong>Email:</strong> contato@vivabem.gov.br</p>
              <p><strong>Horário de Atendimento:</strong> Segunda a Sexta, das 8h às 17h</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}