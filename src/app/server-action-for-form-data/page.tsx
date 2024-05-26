import { z } from "zod";

import { RegistrationFormSAFD } from "./RegistrationFormSAFD";
import { registrationSchema, RegistrationSchemaValues } from "@/validators/registrationSchema";

export default function Page() {
  const onDataAction = async (data: RegistrationSchemaValues) => {
    "use server";
    const parsed = registrationSchema.safeParse(data);

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
      <RegistrationFormSAFD onDataAction={onDataAction} />
    </div>
  );
}
