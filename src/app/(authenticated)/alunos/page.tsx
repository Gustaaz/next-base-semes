import StudentTable, { type Payment } from "@/components/tables/student-table";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusIcon } from "lucide-react";

import Link from "next/link";
const dataPending: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "PENDENTE",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "PENDENTE",
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "PENDENTE",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "PENDENTE",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "PENDENTE",
    email: "carmella@hotmail.com",
  },
]
const dataReproved: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "REPROVADOS",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "REPROVADOS",
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "REPROVADOS",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "REPROVADOS",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "REPROVADOS",
    email: "carmella@hotmail.com",
  },
]
const dataAproved: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "APROVADOS",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "APROVADOS",
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "APROVADOS",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "APROVADOS",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "APROVADOS",
    email: "carmella@hotmail.com",
  },
]

export default function Page() {
  return (
    <Tabs defaultValue="PENDENTE">
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="PENDENTE">
            <Link href="#">Pendentes</Link>
          </TabsTrigger>
          <TabsTrigger value="APROVADOS">
            <Link href="#">Aprovados</Link>
          </TabsTrigger>
          <TabsTrigger value="REPROVADOS">
            <Link href="#">Reprovados</Link>
          </TabsTrigger>
        </TabsList>
        <div className="ml-auto">
          <Button asChild>
            <Link href="/alunos/cadastrar"><PlusIcon />Novo Aluno</Link>
          </Button>
        </div>
      </div>
      <TabsContent value="PENDENTE">
        <Card x-chunk="dashboard-05-chunk-3">
          <CardHeader className="px-7">
            <CardTitle>Alunos</CardTitle>
            <CardDescription>
              Listagem de alunos pendentes.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <StudentTable data={dataPending}/>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="APROVADOS">
        <Card x-chunk="dashboard-05-chunk-3">
          <CardHeader className="px-7">
            <CardTitle>Alunos</CardTitle>
            <CardDescription>
              Listagem de alunos aprovados.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <StudentTable data={dataAproved}/>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="REPROVADOS">
        <Card x-chunk="dashboard-05-chunk-3">
          <CardHeader className="px-7">
            <CardTitle>Alunos</CardTitle>
            <CardDescription>
              Listagem de alunos reprovados.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <StudentTable data={dataReproved}/>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}