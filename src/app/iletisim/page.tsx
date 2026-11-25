import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Taşımacılık, servis ve fabrika servisi talepleriniz için bizimle iletişime geçin.",
};

const contactItems = [
  {
    label: "Telefon",
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
    icon: "phone" as const,
  },
  {
    label: "E-posta",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: "mail" as const,
  },
  {
    label: "Adres",
    value: siteConfig.address,
    icon: "pin" as const,
  },
  {
    label: "Çalışma Saatleri",
    value: siteConfig.workingHours,
    icon: "clock" as const,
  },
];

export default function IletisimPage() {
  return (
    <>
      <PageHero
        eyebrow="İletişim"
        title="Bizimle İletişime Geçin"
        description="Taşımacılık, servis veya fabrika servisi talepleriniz için formu doldurun ya da doğrudan bize ulaşın."
      />

      <section className="py-20 sm:py-24">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-red">
              İletişim Bilgileri
            </p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-brand-black sm:text-3xl">
              Size nasıl yardımcı olabiliriz?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-black/60">
              Aşağıdaki iletişim kanallarından bize ulaşabilir ya da yandaki
              formu doldurarak talebinizi iletebilirsiniz.
            </p>

            <ul className="mt-8 space-y-5">
              {contactItems.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
                    <ContactIcon icon={item.icon} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-black/40">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-medium text-brand-black hover:text-brand-red transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-brand-black">
                        {item.value}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="relative mt-10 flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl border border-black/10 bg-brand-black">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(135deg, rgba(255,255,255,0.12) 0px, rgba(255,255,255,0.12) 2px, transparent 2px, transparent 14px)",
                }}
              />
              <div className="relative flex flex-col items-center gap-2 text-center text-white/70">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="h-10 w-10 text-brand-red"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21s-7-6.1-7-11a7 7 0 1 1 14 0c0 4.9-7 11-7 11z"
                  />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                <p className="text-sm">Konum haritası yakında eklenecek</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-red">
                Teklif / Rezervasyon Formu
              </p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-brand-black">
                Hemen teklif alın
              </h2>
              <p className="mt-3 text-sm text-black/60">
                Formu eksiksiz doldurun, ekibimiz en kısa sürede size dönüş
                yapsın.
              </p>
              <div className="mt-8">
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactIcon({ icon }: { icon: "phone" | "mail" | "pin" | "clock" }) {
  const common = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    className: "h-5 w-5",
  } as const;

  switch (icon) {
    case "phone":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1L6.6 10.8z"
          />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 6h18v12H3zM3 6l9 7 9-7"
          />
        </svg>
      );
    case "pin":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21s-7-6.1-7-11a7 7 0 1 1 14 0c0 4.9-7 11-7 11z"
          />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
        </svg>
      );
  }
}
