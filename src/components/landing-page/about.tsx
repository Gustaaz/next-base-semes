export function About() {
  return (
    <section id="sobre" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Sobre o Programa</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600">
              O Viva Bem é um programa municipal dedicado a promover a saúde e bem-estar através do esporte. 
              Oferecemos diversas modalidades esportivas para todas as idades, com professores qualificados 
              e estrutura de qualidade.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Benefícios:</h4>
            <ul className="space-y-2 text-gray-600">
              <li>• Aulas gratuitas</li>
              <li>• Professores certificados</li>
              <li>• Diferentes modalidades</li>
              <li>• Horários flexíveis</li>
              <li>• Estrutura de qualidade</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}