export const siteConfig = {
  name: "Sakallı Turizm",
  fullName: "Sakallı Turizm & Taşımacılık",
  description:
    "Personel servisi, fabrika servisi ve turizm taşımacılığında güvenilir çözüm ortağınız.",
  phone: "0850 123 45 67",
  phoneHref: "tel:+908501234567",
  whatsapp: "+90 500 000 00 00",
  whatsappHref: "https://wa.me/905000000000",
  email: "info@sakalliturizm.com",
  address: "Örnek Mahallesi, Örnek Caddesi No: 1, Kat: 2, İlçe/İl",
  workingHours: "Hafta içi 08:00 - 18:00",
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
};

export const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
];

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "tasimacilik",
    title: "Taşımacılık",
    shortDescription:
      "Şehir içi ve şehirler arası güvenli, konforlu grup ve personel taşımacılığı.",
    description:
      "Modern ve bakımlı araç filomuzla şehir içi, şehirler arası ve özel gün taşımacılığı hizmeti sunuyoruz. Deneyimli şoför kadromuz ve düzenli araç bakımlarımızla yolculuğunuzun güvenliğini ve konforunu ön planda tutuyoruz.",
    bullets: [
      "Şehir içi ve şehirler arası toplu taşıma",
      "Özel gün ve organizasyon taşımacılığı",
      "Kurumsal misafir ve VIP transfer hizmeti",
      "Deneyimli, SRC belgeli şoför kadrosu",
    ],
  },
  {
    slug: "servis",
    title: "Servis Taşımacılığı",
    shortDescription:
      "Kurumlara özel, düzenli ve zamanında personel/okul servis hizmeti.",
    description:
      "Firmalara ve kurumlara özel olarak planlanan servis güzergahlarıyla personelinizin işe zamanında, güvenli ve konforlu şekilde ulaşımını sağlıyoruz. Güzergah optimizasyonu ve takip sistemleriyle sürecin her adımını yönetiyoruz.",
    bullets: [
      "Kuruma özel güzergah planlama",
      "Sabit ve düzenli sefer saatleri",
      "Araç takip ve raporlama imkanı",
      "İhtiyaca göre araç/kapasite esnekliği",
    ],
  },
  {
    slug: "fabrika-servisi",
    title: "Fabrika Servisi",
    shortDescription:
      "Vardiya sistemine uygun, kesintisiz fabrika ve tesis personel servisi.",
    description:
      "Fabrika ve üretim tesislerinin vardiya düzenine uygun servis planlaması yapıyoruz. Çok vardiyalı çalışan işletmeler için kesintisiz, zamanında ve güvenli personel taşımacılığı sağlayarak üretim sürekliliğinize katkıda bulunuyoruz.",
    bullets: [
      "Çoklu vardiya servis planlaması",
      "Organize sanayi bölgeleri için toplu taşıma",
      "Yüksek kapasiteli araç seçenekleri",
      "İş sağlığı ve güvenliği standartlarına uygunluk",
    ],
  },
];
