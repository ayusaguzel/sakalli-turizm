import Image from "next/image";
import Link from "next/link";
import { services, siteConfig } from "@/lib/site";

const stats = [
  { value: "15+", label: "Yıllık Sektör Tecrübesi" },
  { value: "50+", label: "Araçlık Filo Kapasitesi" },
  { value: "100+", label: "Kurumsal İş Ortağı" },
  { value: "7/24", label: "Kesintisiz Planlama" },
];

const whyUs = [
  {
    title: "Güvenilir Filo",
    description:
      "Düzenli bakımlardan geçen, mevzuata uygun ve sigortalı araçlarla hizmet veriyoruz.",
  },
  {
    title: "Deneyimli Şoförler",
    description:
      "SRC belgeli, güzergaha hakim ve trafik kurallarına duyarlı şoför kadrosu.",
  },
  {
    title: "Zamanında Ulaşım",
    description:
      "Vardiya ve mesai saatlerine uygun planlamayla gecikmesiz servis garantisi.",
  },
  {
    title: "Esnek Çözümler",
    description:
      "İşletmenizin ihtiyacına göre güzergah, kapasite ve sefer sıklığını uyarlıyoruz.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-black text-white">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 2px, transparent 2px, transparent 14px)",
          }}
        />
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-red/25 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-brand-red/10 blur-3xl" />

        <div className="container-page relative grid grid-cols-1 items-center gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="inline-flex items-center rounded-full border border-brand-red/40 bg-brand-red/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-red">
              Taşımacılık &amp; Servis Hizmetleri
            </p>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Personelinizi ve
              <span className="text-brand-red"> yolcularınızı</span> güvenle
              taşıyoruz
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/70">
              {siteConfig.fullName}, taşımacılık, personel servisi ve fabrika
              servisi alanlarında kurumsal ve bireysel müşterilerine güvenli,
              konforlu ve zamanında ulaşım çözümleri sunar.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center rounded-md bg-brand-red px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-red/20 hover:bg-brand-red-dark transition-colors"
              >
                Teklif Al
              </Link>
              <Link
                href="/hizmetler"
                className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Hizmetlerimizi İnceleyin
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
            <div className="absolute inset-0 rounded-3xl bg-white/5 blur-2xl" />
            <div className="relative rounded-3xl border border-white/10 bg-white/95 p-10 shadow-2xl">
              <Image
                src="/logo.png"
                alt={siteConfig.fullName}
                width={480}
                height={107}
                priority
                unoptimized
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 bg-black/30">
          <div className="container-page grid grid-cols-2 gap-6 py-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-extrabold text-brand-red sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-white/60 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-red">
              Hizmetlerimiz
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">
              İhtiyacınıza uygun taşımacılık çözümleri
            </h2>
            <p className="mt-4 text-base text-black/60">
              Kurumlara ve bireysel müşterilere özel planlanan hizmetlerimizle
              yanınızdayız.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.slug}
                className="group flex flex-col rounded-2xl border border-black/10 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
                  <ServiceIcon slug={service.slug} />
                </div>
                <h3 className="mt-6 text-xl font-bold text-brand-black">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-black/60">
                  {service.shortDescription}
                </p>
                <Link
                  href={`/hizmetler#${service.slug}`}
                  className="mt-6 inline-flex items-center text-sm font-semibold text-brand-red group-hover:text-brand-red-dark"
                >
                  Detaylı Bilgi
                  <ArrowIcon />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black/[0.03] py-20 sm:py-24">
        <div className="container-page grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-red">
              Neden Biz
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">
              Güvenli yolculuğun adresi
            </h2>
            <p className="mt-4 text-base text-black/60">
              Yılların verdiği tecrübeyle, işletmenizin ve çalışanlarınızın
              ulaşım ihtiyacını uçtan uca yönetiyoruz.
            </p>
            <Link
              href="/hakkimizda"
              className="mt-8 inline-flex items-center justify-center rounded-md bg-brand-black px-6 py-3.5 text-sm font-semibold text-white hover:bg-brand-charcoal transition-colors"
            >
              Hakkımızda
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
              >
                <h3 className="text-base font-bold text-brand-black">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-black/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-red py-16 text-white">
        <div className="container-page relative flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Fabrika servisi veya taşımacılık teklifi mi lazım?
            </h2>
            <p className="mt-2 text-white/85">
              Formu doldurun, ihtiyacınıza en uygun teklifi en kısa sürede
              size iletelim.
            </p>
          </div>
          <Link
            href="/iletisim"
            className="inline-flex shrink-0 items-center justify-center rounded-md bg-white px-7 py-3.5 text-sm font-semibold text-brand-red hover:bg-white/90 transition-colors"
          >
            Hemen Teklif Al
          </Link>
        </div>
      </section>
    </>
  );
}

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function ServiceIcon({ slug }: { slug: string }) {
  const common = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    className: "h-6 w-6",
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
