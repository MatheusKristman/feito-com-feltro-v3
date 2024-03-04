"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { adminSchema } from "@/constants/schemas/admin-schema";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye } from "lucide-react";
import Link from "next/link";

export const AdminForm = () => {
  const form = useForm<z.infer<typeof adminSchema>>({
    resolver: zodResolver(adminSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof adminSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col items-center"
      >
        <div className="w-full flex flex-col gap-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="inter-font text-lg font-medium text-green-primary">
                  E-mail
                </FormLabel>

                <FormControl>
                  <Input
                    className="!mt-0 inter-font"
                    placeholder="Digite seu e-mail..."
                    {...field}
                  />
                </FormControl>

                <FormMessage className="text-sm inter-font text-red-error" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="inter-font text-lg font-medium text-green-primary">
                  Senha
                </FormLabel>

                <FormControl>
                  <div className="w-full h-10 flex items-center !mt-0">
                    <Input
                      className="inter-font flex-grow rounded-tr-none rounded-br-none"
                      placeholder="Digite sua senha..."
                      {...field}
                    />

                    <Button
                      size="sm"
                      className="h-full rounded-md rounded-tl-none rounded-bl-none"
                    >
                      <Eye />
                    </Button>
                  </div>
                </FormControl>

                <FormMessage className="text-sm inter-font text-red-error" />

                <Link
                  href="/admin/esqueci-a-senha"
                  className="block mt-2 text-sm text-green-primary underline inter-font"
                >
                  Esqueci minha senha
                </Link>
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="mt-9 inter-font">
          Entrar
        </Button>
      </form>
    </Form>
  );
};
