import UserTable, { type User } from "@/components/tables/user-table";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlusIcon } from "lucide-react";
import Link from "next/link";

export const getAllUsers = async (): Promise<User[]> => {
  const res = await fetch("http://localhost:3333/users");
  return res.json();
};

export default async function UsuarioPage() {
  const users = await getAllUsers();

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">

    <div className="flex items-center ">
      <div className="ml-auto">
        <Button asChild>
          <Link href="/alunos/cadastrar">
            <PlusIcon />
            Novo Usuario
          </Link>
        </Button>
      </div>
    </div>
      <Card x-chunk="dashboard-05-chunk-3">
        <CardHeader className="px-7">
          <CardTitle>Usuarios</CardTitle>
          <CardDescription>Listagem dos usuarios.</CardDescription>
        </CardHeader>
        <CardContent>
          <UserTable data={users} />
        </CardContent>
      </Card>
    </div>
  );
}
