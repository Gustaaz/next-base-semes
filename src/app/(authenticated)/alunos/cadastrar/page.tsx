import { BackButton } from "@/components/back-button";
import { StudentForm } from "@/components/forms/student-form";
import { UserStudentForm } from "@/components/forms/user-student-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";

import { Upload } from "lucide-react";

export default function AddStudent() {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
            Controle do aluno
          </h1>
          <div className="hidden items-center md:ml-auto md:flex">
            <Button size="sm">Cadastrar</Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
          <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
            <InfoCard
              title="Detalhes do aluno"
              description="Defina as informações do aluno."
            >
              <StudentForm />
            </InfoCard>
          </div>

          <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
            <InfoCard
              title="Informações do usuário"
              description="Defina as informações do usuário."
            >
              <UserStudentForm />
            </InfoCard>

            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>Imagem de perfil</CardTitle>
                <CardDescription>
                  Defina a imagem de perfil do aluno.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <button
                  aria-label="Fazer upload da imagem de perfil"
                  className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed"
                >
                  <Upload className="h-4 w-4 text-muted-foreground" />
                  <span className="sr-only">Upload</span>
                </button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 md:hidden">
          <Button variant="outline" size="sm">
            Discard
          </Button>
          <Button size="sm">Save Product</Button>
        </div>
      </div>
    </main>
  );
}

type InfoCardProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

function InfoCard({ title, description, children }: InfoCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
