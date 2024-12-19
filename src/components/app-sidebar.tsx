"use client";

import {
  Dumbbell,
  GalleryVerticalEnd,
  GraduationCap,
  School,
  User2,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: {
    name: "Viva Bem",
    logo: GalleryVerticalEnd,
    plan: "SEMES",
  },
  navMain: [
    {
      title: "Gestão de Alunos",
      url: "#",
      icon: School,
      isActive: true,
      items: [
        {
          title: "Consultar Alunos",
          url: "#",
        },
        {
          title: "Cadastrar Novo Aluno",
          url: "#",
        },
      ],
    },
    {
      title: "Gestão de Turmas",
      url: "#",
      icon: Dumbbell,
      items: [
        {
          title: "Minhas Turmas",
          url: "#",
        },
        {
          title: "Consultar Turmas",
          url: "#",
        },
        {
          title: "Cadastrar Nova Turma",
          url: "#",
        },
      ],
    },
    {
      title: "Gestão de Professores",
      url: "#",
      icon: GraduationCap,
      items: [
        {
          title: "Consultar Professores",
          url: "#",
        },
        {
          title: "Cadastrar Novo Professores",
          url: "#",
        },
      ],
    },
    {
      title: "Gestão de Usuarios",
      url: "#",
      icon: User2,
      items: [
        {
          title: "Consultar Usuarios",
          url: "#",
        },
        {
          title: "Cadastrar Novo Usuario",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}