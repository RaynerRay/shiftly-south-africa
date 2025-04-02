import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import dynamic from "next/dynamic";

// Dynamically import RegisterWithBg to prevent SSR issues
const RegisterWithBg = dynamic(() => import("@/components/Auth/Register"), {
  ssr: false,
});

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { role, plan } = searchParams;
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div>
      <RegisterWithBg role={role} plan={plan} />
    </div>
  );
}
