"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-gold/25 bg-surface p-6 shadow-card md:p-10"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Upit</p>
      <h2 className="mt-2 font-serif text-2xl text-cream md:text-3xl">Pitajte nas, tu smo da pomognemo</h2>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <label className="block sm:col-span-1">
          <span className="text-xs font-medium text-cream/70">Ime i prezime</span>
          <input
            name="name"
            required
            className="mt-2 w-full rounded-xl border border-gold/25 bg-surface-deep/80 px-4 py-3 text-sm text-cream placeholder:text-cream/35 outline-none transition-shadow focus:border-gold/50 focus:ring-2 focus:ring-gold/30"
            placeholder="Vaše ime"
          />
        </label>
        <label className="block sm:col-span-1">
          <span className="text-xs font-medium text-cream/70">E-pošta</span>
          <input
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-xl border border-gold/25 bg-surface-deep/80 px-4 py-3 text-sm text-cream placeholder:text-cream/35 outline-none transition-shadow focus:border-gold/50 focus:ring-2 focus:ring-gold/30"
            placeholder="vi@primer.rs"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-xs font-medium text-cream/70">Željena vila</span>
          <select
            name="villa"
            className="mt-2 w-full rounded-xl border border-gold/25 bg-surface-deep/80 px-4 py-3 text-sm text-cream outline-none transition-shadow focus:border-gold/50 focus:ring-2 focus:ring-gold/30"
            defaultValue=""
          >
            <option value="" disabled>
              Izaberite vilu
            </option>
            <option value="villa-1">Vila 1 — Borov vrh</option>
            <option value="villa-2">Vila 2 — Kamen i nebo</option>
            <option value="villa-3">Vila 3 — Livadska kuća</option>
            <option value="unsure">Još nisam odlučio/la</option>
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="text-xs font-medium text-cream/70">Poruka</span>
          <textarea
            name="message"
            rows={5}
            className="mt-2 w-full resize-y rounded-xl border border-gold/25 bg-surface-deep/80 px-4 py-3 text-sm text-cream placeholder:text-cream/35 outline-none transition-shadow focus:border-gold/50 focus:ring-2 focus:ring-gold/30"
            placeholder="Datumi, broj gostiju, pitanja…"
          />
        </label>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-medium tracking-wide text-forest shadow-card transition-all duration-500 hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          Pošalji upit
        </button>
        {submitted ? (
          <p className="text-sm text-gold-light" role="status">
            Hvala — ova verzija ne šalje e-poštu; pozovite nas ili pišite direktno.
          </p>
        ) : null}
      </div>
    </motion.form>
  );
}
