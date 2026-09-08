import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-xl flex-col justify-center px-6 text-ws-ink">
      <h1 className="font-display text-3xl text-ws-blue">Sidan finns inte</h1>
      <p className="mt-3 text-ws-muted">
        Gå tillbaka till startsidan och välj en av de tre resorna.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex min-h-[var(--tap-min)] items-center justify-center rounded-full bg-ws-blue px-6 font-semibold text-white"
      >
        Huvudmeny
      </Link>
    </main>
  );
}
