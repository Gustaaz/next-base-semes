"use client";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string;
    logo: React.ElementType;
    plan: string;
  };
}) {
  return (
    <SidebarMenu>
      <Link href="/dashboard">
        <SidebarMenuItem>
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <Image src="/Brasao.svg" alt="VivaBem" width={40} height={40} />

            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">{teams.name}</span>
              <span className="truncate text-xs">{teams.plan}</span>
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </Link>
    </SidebarMenu>
  );
}
