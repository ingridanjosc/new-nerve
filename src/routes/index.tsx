import { createFileRoute } from "@tanstack/react-router";
import desktopBg from "@/assets/desktop-bg.png";
import mobileBg from "@/assets/mobile-bg.png";

const OFFER_URL =
  "https://secure.nervefresh.com/index-nf-ds#aff=ingridcalazans2007";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Nerve Fresh — Natural Relief for Nerve Pain",
      },
      {
        name: "description",
        content:
          "A natural formula with 5 clinically studied ingredients for burning, tingling, and numbness. Includes a 180-day money-back guarantee.",
      },
      {
        property: "og:title",
        content: "Nerve Fresh — Natural Relief for Nerve Pain",
      },
      {
        property: "og:description",
        content:
          "A natural formula with 5 clinically studied ingredients. Includes a 180-day money-back guarantee.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  }),
  component: Pressel,
});

function go() {
  window.location.href = OFFER_URL;
}

function Pressel() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background">
      <h1 className="sr-only">Nerve Fresh</h1>

      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat md:hidden"
        style={{ backgroundImage: `url("${mobileBg}")` }}
        role="img"
        aria-label="Nerve Fresh"
      />

      <div
        className="absolute inset-0 hidden bg-cover bg-top bg-no-repeat md:block"
        style={{ backgroundImage: `url("${desktopBg}")` }}
        role="img"
        aria-label="Nerve Fresh"
      />

      <div className="absolute inset-0 bg-foreground/40" />

      <div className="relative flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-xl rounded-2xl bg-card p-7 shadow-2xl sm:p-9">
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-2xl font-extrabold tracking-tight text-card-foreground sm:text-3xl">
              Cookie Settings
            </h2>

            <button
              type="button"
              onClick={go}
              aria-label="Close"
              className="text-card-foreground/70 transition-colors hover:text-card-foreground"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <p className="mt-5 text-[15px] leading-relaxed text-card-foreground/80">
            We use cookies and similar technologies to help personalize content,
            tailor and measure ads, and provide a better experience. By clicking
            accept, you agree to this, as outlined in our Cookie Policy.
          </p>

          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <button
              type="button"
              onClick={go}
              className="rounded-lg bg-primary px-6 py-4 text-lg font-bold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Accept
            </button>

            <button
              type="button"
              onClick={go}
              className="rounded-lg bg-secondary px-6 py-4 text-lg font-bold text-secondary-foreground transition-colors hover:bg-muted"
            >
              Preferences
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
