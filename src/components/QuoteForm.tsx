"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/lib/site";

type Status = "idle" | "success";

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("success");
    event.currentTarget.reset();
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-brand-red/20 bg-brand-red/5 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            className="h-6 w-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-4 text-lg font-bold text-brand-black">
          Talebiniz alındı
        </h3>
        <p className="mt-2 text-sm text-black/60">
          İlginiz için teşekkür ederiz. Ekibimiz talebinizi inceleyip en kısa
          sürede sizinle iletişime geçecektir.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex items-center justify-center rounded-md border border-brand-black/15 px-5 py-2.5 text-sm font-semibold text-brand-black hover:bg-black/5 transition-colors"
        >
          Yeni Talep Oluştur
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <label htmlFor="name" className="block text-sm font-semibold text-brand-black">
          Ad Soyad / Firma
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Adınız Soyadınız"
          className="mt-2 w-full rounded-md border border-black/15 px-4 py-3 text-sm outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red"
        />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="phone" className="block text-sm font-semibold text-brand-black">
          Telefon
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="05xx xxx xx xx"
          className="mt-2 w-full rounded-md border border-black/15 px-4 py-3 text-sm outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red"
        />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="email" className="block text-sm font-semibold text-brand-black">
          E-posta
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="ornek@eposta.com"
          className="mt-2 w-full rounded-md border border-black/15 px-4 py-3 text-sm outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red"
        />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="service" className="block text-sm font-semibold text-brand-black">
          Hizmet Türü
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className="mt-2 w-full rounded-md border border-black/15 bg-white px-4 py-3 text-sm outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red"
        >
          <option value="" disabled>
            Seçiniz
          </option>
          {services.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
          <option value="Diğer">Diğer</option>
        </select>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="message" className="block text-sm font-semibold text-brand-black">
          Talep Detayı
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Güzergah, kişi/personel sayısı, sefer sıklığı gibi bilgileri paylaşabilirsiniz."
          className="mt-2 w-full rounded-md border border-black/15 px-4 py-3 text-sm outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red"
        />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-md bg-brand-red px-6 py-3.5 text-sm font-semibold text-white hover:bg-brand-red-dark transition-colors sm:w-auto"
        >
          Talebi Gönder
        </button>
      </div>
    </form>
  );
}
