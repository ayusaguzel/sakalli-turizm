import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: `${siteConfig.fullName} olarak kim olduğumuz, misyonumuz ve değerlerimiz hakkında bilgi alın.`,
};

const values = [
  {
    title: "Güvenlik Önceliğimiz",
    description:
      "Araç bakımı, sürücü eğitimi ve trafik güvenliği konularında hiçbir taviz vermiyoruz.",
  },
  {
    title: "Zamanında Hizmet",
    description:
      "Vardiya ve mesai saatlerine uygun planlamayla her zaman zamanında ulaşım sağlıyoruz.",
  },
  {
    title: "Müşteri Memnuniyeti",
    description:
      "Her iş ortağımızın ihtiyacına özel çözümler üreterek uzun soluklu iş birlikleri kuruyoruz.",
  },
  {
    title: "Sürekli Gelişim",
    description:
      "Filomuzu ve operasyon süreçlerimizi güncel standartlara göre sürekli iyileştiriyoruz.",
  },
];

const timeline = [
  {
    year: "Kuruluş",
    text: "Bölgemizde taşımacılık ihtiyacına çözüm olmak amacıyla yola çıktık.",
  },
  {
    year: "Büyüme",
    text: "Filomuzu genişleterek kurumsal servis ve fabrika servisi hizmetlerine odaklandık.",
  },
  {
    year: "Bugün",
    text: "Onlarca kurumsal iş ortağımıza düzenli ve güvenilir taşımacılık hizmeti sunuyoruz.",
  },
];

export default function HakkimizdaPage() {
  return (
    <>
      <PageHero
        eyebrow="Hakkımızda"
        title="Güvenilir taşımacılığın adresi"
        description={`${siteConfig.fullName}, taşımacılık, personel servisi ve fabrika servisi alanlarında müşterilerine güvenli ve konforlu ulaşım çözümleri sunmak amacıyla kurulmuştur.`}
      />

      <section className="py-20 sm:py-24">
        <div className="container-page grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-red">
              Biz Kimiz
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">
              Yolculuğunuzun güvencesi
            </h2>
            <p className="mt-4 text-base leading-relaxed text-black/60">
              {siteConfig.fullName} olarak; personel servisi, fabrika servisi
              ve genel taşımacılık alanlarında kurumsal ve bireysel
              müşterilerimize hizmet veriyoruz. Modern araç filomuz, deneyimli
              şoför kadromuz ve titizlikle planlanan güzergahlarımızla her
              yolculuğu güvenli ve konforlu hale getiriyoruz.
            </p>
            <p className="mt-4 text-base leading-relaxed text-black/60">
              Amacımız; işletmelerin personel ulaşımını sorunsuz yönetmelerini
              sağlamak ve her müşterimize zamanında, güvenilir bir hizmet
              deneyimi sunmaktır.
            </p>
            <Link
              href="/iletisim"
              className="mt-8 inline-flex items-center justify-center rounded-md bg-brand-red px-6 py-3.5 text-sm font-semibold text-white hover:bg-brand-red-dark transition-colors"
            >
              Bizimle İletişime Geçin
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <h3 className="text-base font-bold text-brand-black">
                Misyonumuz
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-black/60">
                Kurumların ve bireylerin ulaşım ihtiyacını güvenli, konforlu
                ve zamanında karşılayarak değer üretmek.
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <h3 className="text-base font-bold text-brand-black">
                Vizyonumuz
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-black/60">
                Bölgemizin tercih edilen, güvenilirliği ile öne çıkan
                taşımacılık markası olmak.
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm sm:col-span-2">
              <h3 className="text-base font-bold text-brand-black">
                Sorumluluğumuz
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-black/60">
                Trafik güvenliği, araç bakımı ve iş sağlığı standartlarına
                tam uyumla, taşıdığımız her yolcunun güvenliğini garanti
                altına alıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black/[0.03] py-20 sm:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-red">
              Değerlerimiz
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">
              Bizi biz yapan ilkeler
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
              >
                <h3 className="text-base font-bold text-brand-black">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-black/60">
                  {value.description}
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
              Yolculuğumuz
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">
              Bugüne kadarki gelişimimiz
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className="relative rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-red text-sm font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-base font-bold text-brand-black">
                  {item.year}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-black/60">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
