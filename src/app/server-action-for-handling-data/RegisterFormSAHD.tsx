"use client";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { useRef } from "react";
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

type OnFormActionState = {
  message: string;
  user?: RegistrationSchemaValues;
  issues?: string[];
};

export const RegistrationFormSAHD = ({
  onFormAction,
}: {
  onFormAction: (
    prevState: OnFormActionState,
    data: FormData
  ) => Promise<OnFormActionState>;
}) => {
  //server validation in onFormAction
  //we can redirect user on server in onFormAction on another view
  //state comes from server
  const [state, formAction] = useFormState(onFormAction, {
    message: "",
  });

  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<RegistrationSchemaValues>({
    defaultValues: {
      first: "",
      last: "",
      email: "",
    },
    resolver: zodResolver(registrationSchema),
  });

  return (
    <Form {...form}>
      <div>{state?.message}</div> {/* state from useFormState hook */}
      <form
        ref={formRef}
        action={formAction}
        onSubmit={form.handleSubmit(() => formRef?.current?.submit())} //enable validation on client side (if JS is enabled in browser if not call formAction) and next call formAction
        className="space-y-8"
      >
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
