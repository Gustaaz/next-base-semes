import type { User } from "@/components/tables/user-table";

export const getAllUsers = async (): Promise<User[]> => {
  const res = await fetch(`${process.env.BASE_URL_API}/users`);
  return res.json();
};