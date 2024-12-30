"use client";

import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
  FormDescription,
} from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";

const FormSchema = z.object({
  email: z.string().email({
    message: "Por favor, insira um endereço de e-mail válido.",
  }),
  senha: z.string().min(6, {
    message: "A senha deve ter no minimo 6 caracteres",
  }),
  confirmar_senha: z
    .string()
    .min(6, {
      message: "A senha deve ter no minimo 6 caracteres",
    })
}).refine((data) => data.senha === data.confirmar_senha, {
  message: "As senhas devem ser iguais",
  path: ["confirmar_senha"],
});

export function UserStudentForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      senha: "",
      confirmar_senha: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="flex flex-col gap-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Email <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormDescription>
                      Este e-mail será usado para entrar no sistema.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="senha"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Senha <span className="text-red-500">*</span>
                    </FormLabel>

                    <FormControl>
                      <Input type="password" {...field} placeholder="*********"/>   
                    </FormControl>
                    <FormDescription>
                      Por favor, insira uma senha.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmar_senha"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Confirmar Senha <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input type="password" {...field} placeholder="*********" />
                    </FormControl>
                    <FormDescription>
                      Por favor, confirme sua senha.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

          
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
