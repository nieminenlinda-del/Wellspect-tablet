"use client";

import Link from "next/link";
import { useStrings } from "@/components/i18n/LocaleProvider";

export default function NotFound() {
  const strings = useStrings();
  return (
    <main className="mx-auto flex min-h-dvh max-w-xl flex-col justify-center px-6 text-ws-ink">
      <h1 className="font-display text-3xl text-ws-blue">{strings.notFound.title}</h1>
      <p className="mt-3 text-ws-muted">{strings.notFound.body}</p>
      <Link
        href="/"
        className="tap-target mt-6 inline-flex items-center justify-center rounded-full bg-ws-blue px-6 font-semibold text-white"
      >
        {strings.nav.home}
      </Link>
    </main>
  );
}
