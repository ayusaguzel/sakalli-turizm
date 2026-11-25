import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description:
    "Taşımacılık, servis taşımacılığı ve fabrika servisi hizmetlerimiz hakkında detaylı bilgi alın.",
};

export default function HizmetlerPage() {
  return (
    <>
      <PageHero
        eyebrow="Hizmetlerimiz"
        title="Taşımacılık, Servis ve Fabrika Servisi"
        description="Kurumsal ve bireysel müşterilerimize sunduğumuz taşımacılık çözümlerini aşağıda inceleyebilirsiniz."
      />

      <section className="py-20 sm:py-24">
        <div className="container-page flex flex-col gap-20">
          {services.map((service, index) => (
            <div
              key={service.slug}
              id={service.slug}
              className="scroll-mt-28 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <span className="text-sm font-semibold uppercase tracking-widest text-brand-red">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-brand-black sm:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-black/60">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                        <CheckIcon />
                      </span>
                      <span className="text-sm text-black/70">{bullet}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/iletisim"
                  className="mt-8 inline-flex items-center justify-center rounded-md bg-brand-red px-6 py-3.5 text-sm font-semibold text-white hover:bg-brand-red-dark transition-colors"
                >
                  Bu Hizmet İçin Teklif Al
                </Link>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-brand-black">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(135deg, rgba(255,255,255,0.12) 0px, rgba(255,255,255,0.12) 2px, transparent 2px, transparent 14px)",
                    }}
                  />
                  <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-brand-red/30 blur-3xl" />
                  <div className="relative flex h-full w-full items-center justify-center">
                    <span className="text-brand-red/90">
                      <BigServiceIcon slug={service.slug} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black/[0.03] py-16">
        <div className="container-page flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="text-2xl font-extrabold text-brand-black sm:text-3xl">
              İhtiyacınıza özel bir plan mı gerekiyor?
            </h2>
            <p className="mt-2 text-black/60">
              Güzergahınızı, araç sayınızı ve vardiya düzeninizi bize iletin,
              size özel teklif hazırlayalım.
            </p>
          </div>
          <Link
            href="/iletisim"
            className="inline-flex shrink-0 items-center justify-center rounded-md bg-brand-black px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-charcoal transition-colors"
          >
            İletişime Geçin
          </Link>
        </div>
      </section>
    </>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      className="h-3 w-3"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function BigServiceIcon({ slug }: { slug: string }) {
  const common = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    className: "h-28 w-28",
  } as const;

  if (slug === "tasimacilik") {
    return (
      <svg {...common}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13l1.5-4.5A2 2 0 0 1 6.4 7h11.2a2 2 0 0 1 1.9 1.5L21 13v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H6v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-5z"
        />
        <circle cx="7" cy="17" r="1.5" />
        <circle cx="17" cy="17" r="1.5" />
      </svg>
    );
  }

  if (slug === "servis") {
    return (
      <svg {...common}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 17V9a2 2 0 0 1 2-2h6l6 4v6a1 1 0 0 1-1 1h-1"
        />
        <circle cx="8" cy="17" r="1.5" />
        <circle cx="16" cy="17" r="1.5" />
        <path strokeLinecap="round" d="M4 13h14" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 21h18M5 21V10l4-3 4 3v11M13 21v-7h4v7"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 9v.01M8 13v.01M8 17v.01" />
    </svg>
  );
}
