
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { toast } from "@/components/ui/sonner";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Send, User, Phone, Mail } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(1, "Telefone é obrigatório")
});

type FormSchema = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: ""
    }
  });

  const onSubmit = async (data: FormSchema) => {
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      console.log("Submitting form data:", data);
      
      // Salvar email no localStorage para usar na página de login
      localStorage.setItem("lastSimulationEmail", data.email);
      
      const { error } = await supabase
        .from('simulation_requests')
        .insert([{
          name: data.name,
          email: data.email,
          phone: data.phone
        }]);

      if (error) {
        console.error("Error submitting form:", error);
        toast.error("Erro ao enviar solicitação. Por favor, tente novamente.");
        return;
      }

      console.log("Form submitted successfully");
      toast.success("Solicitação enviada com sucesso!");
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Erro ao enviar solicitação. Por favor, tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16" id="contato">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 heading-gradient inline-block">Solicite uma Simulação</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Preencha o formulário abaixo e nossa equipe entrará em contato com você 
          para apresentar a melhor solução financeira para seu perfil.
        </p>
      </div>
      
      <Card className="max-w-md mx-auto shadow-lg border-primary/10 overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-primary to-blue-400"></div>
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-center">Seus Dados</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome Completo</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input placeholder="Seu nome completo" className="pl-10" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefone</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input placeholder="(00) 00000-0000" type="tel" className="pl-10" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input placeholder="seu@email.com" type="email" className="pl-10" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button 
                type="submit" 
                className="w-full gap-2 mt-4" 
                disabled={isSubmitting}
                size="lg"
              >
                {isSubmitting ? "Enviando..." : "Solicitar Simulação"}
                {!isSubmitting && <Send className="h-4 w-4" />}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
};

export default ContactForm;
