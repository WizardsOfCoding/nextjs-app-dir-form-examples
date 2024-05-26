"use client";
import { useForm } from "react-hook-form";
import {
  RegistrationSchemaValues,
  registrationSchema,
} from "../../validators/registrationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const RegistrationFormSAFD = ({
  onDataAction,
}: {
  onDataAction: (data: RegistrationSchemaValues) => Promise<{
    message: string;
    user?: RegistrationSchemaValues;
    issues?: string[];
  }>;
}) => {
  const form = useForm<RegistrationSchemaValues>({
    defaultValues: {
      first: "",
      last: "",
      email: "",
    },
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = async (data: RegistrationSchemaValues) => {
    //server validation in server action
    const response = await onDataAction(data);
    alert(JSON.stringify(response));
  };

  return (
    <Form {...form}>
      <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="first"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormDescription>First name</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="last"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormDescription>Last name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormDescription>Email address.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
