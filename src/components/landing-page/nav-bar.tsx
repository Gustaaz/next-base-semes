"use client";
import { useState } from "react";
import Link from "next/link";
import { MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogTitle,
} from "@radix-ui/react-dialog";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#modalidades", label: "Modalidades" },
    { href: "#inscricao", label: "Inscrição" },
    { href: "#contato", label: "Contato" },
  ];

  const renderNavLinks = (classNames: string, onClick: () => void) =>
    navLinks.map(({ href, label }) => (
      <Link
        key={href}
        href={href}
        className={`${classNames} hover:text-primary/80`}
        onClick={onClick}
        replace
      >
        {label}
      </Link>
    ));

  return (
    <nav className="bg-primary shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-[6.25rem]">
          <Link href="#" className="text-white font-bold text-xl">
            <Image
              src="/Brasao_horizontal_branco.svg"
              alt="VivaBem"
              width={0}
              className="w-[230px] h-auto"
              height={0}
            />
          </Link>

          <button
            className="lg:hidden text-white"
            onClick={toggleMenu}
          >
            <MenuIcon />
          </button>

          {/* Drawer para Menu Mobile */}
          <Dialog open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <DialogOverlay className="fixed inset-0 bg-black bg-opacity-50" />

            <DialogContent
              aria-describedby="dialog-description"
              className="fixed inset-y-0 left-0 w-3/4 bg-white flex flex-col justify-between shadow-lg rounded-l-xl p-6 overflow-y-auto transform transition-all duration-500 ease-in-out"
            >
              <DialogTitle className="sr-only">Menu Mobile</DialogTitle>
              <DialogDescription className="sr-only">
                Este é o menu do aplicativo VivaBem, onde você pode acessar informações sobre modalidades, inscrições e contatos.
              </DialogDescription>

              {/* Botão Fechar */}
              <XIcon
                onClick={closeMenu}
                className="self-end text-primary"
              />

              {/* Links do Menu Mobile */}
              <nav className="flex flex-col space-y-4 text-lg text-primary font-medium">
                {renderNavLinks("nav-link", closeMenu)}
              </nav>

              {/* Rodapé no Drawer */}
              <div className="mt-auto border-t pt-4">
                <p className="text-sm text-gray-500 text-center">
                  © 2024 VivaBem. Todos os direitos reservados.
                </p>
              </div>
            </DialogContent>
          </Dialog>

          {/* Menu Desktop */}
          <div className="hidden lg:flex space-x-4">
            {renderNavLinks("nav-link text-white", () => {})}
          </div>
        </div>
      </div>
    </nav>
  );
}
