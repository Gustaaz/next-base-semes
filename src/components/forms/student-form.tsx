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
import { InputDate } from "../input-mask/input-date";
import { InputCPF } from "../input-mask/input-cpf";
import { cpf } from "cpf-cnpj-validator";
import { InputPhone } from "../input-mask/input-phone";

const FormSchema = z.object({
  nome: z.string().min(1, {
    message: "Por favor, insira um nome.",
  }),
  data_nacimento: z.string().min(1, {
    message: "Por favor, insira uma data de nascimento.",
  }),
  cpf: z
    .string()
    .min(14, { message: "O CPF deve ter no minimo 11 caracteres" })
    .max(14, { message: "O CPF deve ter no maximo 11 caracteres" })
    .refine(
      (value) => {
        return cpf.isValid(value);
      },
      {
        message: "O CPF é invalido",
      }
    ),
  rg: z
    .string()
    .min(9, {
      message: "O RG deve ter no minimo 9 caracteres",
    })
    .max(11, {
      message: "O RG deve ter no maximo 11 caracteres",
    }),
  cartao_sus: z.string().min(11, {
    message: "O Cartão SUS deve ter no minimo 11 caracteres",
  }),
  num_celular: z.string().min(11, {
    message: "O Celular deve ter no minimo 11 caracteres",
  }),
  num_emergencia: z.string().min(11, {
    message: "O Celular deve ter no minimo 11 caracteres",
  }),
});

export function StudentForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      nome: "",
      data_nacimento: "",
      cpf: "",
      rg: "",
      cartao_sus: "",
      num_celular: "",
      num_emergencia: "",
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
                name="nome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Nome <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormDescription>
                      Este é nome de exibição pública.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="data_nacimento"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Data de Nascimento <span className="text-red-500">*</span>
                    </FormLabel>

                    <FormControl>
                      <InputDate
                        type="Data de Nascimento"
                        placeholder="Dia/Mês/Ano"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Por favor, insira a data de nascimento do aluno.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="rg"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      RG <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input max={12} placeholder="000000000" {...field} />
                    </FormControl>
                    <FormDescription>
                      Por favor, insira o RG do aluno.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="cpf"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      CPF <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <InputCPF placeholder="000.000.000-00" {...field} />
                    </FormControl>
                    <FormDescription>
                      Por favor, insira o CPF do aluno.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="cartao_sus"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Cartão SUS <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <InputCPF placeholder="000.000.000-00" {...field} />
                    </FormControl>
                    <FormDescription>
                      Por favor, insira o Cartão SUS do aluno.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="num_celular"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Número Celular <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <InputPhone placeholder="(00)00000-0000" {...field} />
                    </FormControl>
                    <FormDescription>
                      Por favor, insira o Número Celular do aluno.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="num_emergencia"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Número Celular de Emergência{" "}
                      <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <InputPhone placeholder="(00)00000-0000" {...field} />
                    </FormControl>
                    <FormDescription>
                      Por favor, insira o Número Celular de Emergência do aluno.
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
