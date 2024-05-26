import { registrationSchema } from "@/validators/registrationSchema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData(); //get form data from request
  const data = Object.fromEntries(formData); // convert form data to object

  const parsed = registrationSchema.safeParse(data);
  if (parsed.success) {
    // add to DB ;)
    return NextResponse.json({ message: "User registered", data: parsed.data });
  } else {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }
}
