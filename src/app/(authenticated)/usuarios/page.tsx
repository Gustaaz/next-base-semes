import UserTable from "@/components/tables/user-table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAllUsers } from "@/services/get-all-users";

export default async function UsuarioPage() {
  const users = await getAllUsers();

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="flex items-center ">
        <div className="ml-auto"></div>
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
