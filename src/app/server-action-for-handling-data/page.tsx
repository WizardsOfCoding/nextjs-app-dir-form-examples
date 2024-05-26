import {
    RegistrationSchemaValues,
  registrationSchema,
} from "@/validators/registrationSchema";
import { RegistrationFormSAHD } from "./RegisterFormSAHD";

export default function Page() {

  const onFormAction = async (
    prevState: {
      message: string;
      user?: RegistrationSchemaValues;
      issues?: string[];
    },
    formData: FormData
  ) => {
    "use server";
    const data = Object.fromEntries(formData);
    const parsed = await registrationSchema.safeParseAsync(data);

    if (parsed.success) {
      console.log("User registered");
      return { message: "User registered", user: parsed.data };
    } else {
      return {
        message: "Invalid data",
        issues: parsed.error.issues.map((issue) => issue.message),
      };
    }
  };

  return (
    <div className="mx-auto max-w-xl">
      <RegistrationFormSAHD onFormAction={onFormAction} />
    </div>
  );
}
