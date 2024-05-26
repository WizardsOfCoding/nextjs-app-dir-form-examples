import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-xl flex flex-col">
      <Link href="/client-side-validation">Client side validation</Link>
      <Link href="/server-side-validation">Server side validation</Link>
      <Link href="/form-data-to-api-route">Form data to api route</Link>
      <Link href="/server-action-for-form-data">
        Server action for form data
      </Link>
      <Link href="/server-action-for-handling-data">
        Server action for handling data
      </Link>
    </div>
  );
}
