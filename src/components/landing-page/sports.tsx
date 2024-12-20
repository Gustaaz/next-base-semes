import {SportCard} from "./sport-card";


const sports = [
  {
    title: 'Natação',
    description: 'Aulas para iniciantes e avançados, com turmas divididas por idade e nível.'
  },
  {
    title: 'Vôlei',
    description: 'Treinos em equipe, desenvolvimento de habilidades e participação em campeonatos.'
  },
  {
    title: 'Futsal',
    description: 'Prática esportiva com foco em técnica, tática e trabalho em equipe.'
  }
];

export function Sports() {
  return (
    <section id="modalidades" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Modalidades Disponíveis</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {sports.map((sport, index) => (
            <SportCard key={index} {...sport} />
          ))}
        </div>
      </div>
    </section>
  );
}