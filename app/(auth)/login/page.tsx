import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import dynamic from "next/dynamic";

// Dynamically import the client component
const LoginFormWithBg = dynamic(() => import("@/components/Auth/Login"), {
  ssr: false,
});

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { returnUrl = "/dashboard" } = searchParams;
  const session = await getServerSession(authOptions);

  if (session) {
    redirect(returnUrl as string);
  }

  return (
    <div>
      <LoginFormWithBg />
    </div>
  );
}
