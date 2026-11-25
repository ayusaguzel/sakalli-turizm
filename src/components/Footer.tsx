import Image from "next/image";
import Link from "next/link";
import { navLinks, services, siteConfig } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-black text-white/80 mt-24">
      <div className="container-page grid grid-cols-1 gap-10 py-14 md:grid-cols-4">
        <div>
          <Image
            src="/logo.png"
            alt={siteConfig.fullName}
            width={200}
            height={44}
            unoptimized
            className="h-10 w-auto brightness-0 invert"
          />
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            {siteConfig.description}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Kurumsal
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/60 hover:text-brand-red transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Hizmetlerimiz
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/hizmetler#${service.slug}`}
                  className="text-white/60 hover:text-brand-red transition-colors"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            İletişim
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            <li>{siteConfig.address}</li>
            <li>
              <a
                href={siteConfig.phoneHref}
                className="hover:text-brand-red transition-colors"
              >
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-brand-red transition-colors"
              >
                {siteConfig.email}
              </a>
            </li>
            <li>{siteConfig.workingHours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/50 sm:flex-row">
          <p>
            © {year} {siteConfig.fullName}. Tüm hakları saklıdır.
          </p>
          <p>Tüm izinli ve belgeli taşımacılık hizmetleri.</p>
        </div>
      </div>
    </footer>
  );
}
