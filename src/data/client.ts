/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-08-02T10:46:18.365Z
 * Kundennummer: 266
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "KFZ-Meisterbetrieb Amato Warendorf",
  branche: "Autowerkstatt",
  unternehmenszweck: null,
  ort: "Warendorf",
  slogan: "in Warendorf",
  adresse: "Am Holzbach 42, 48231 Warendorf",
  maps_url: "https://www.google.com/maps/place/?q=place_id:ChIJkb-AAiOQuUcRWQLiQrh-35E",
  // Geokoordinaten → cookie-freie OSM-Karte im Kontakt; null = Adress-Box.
  // Aus kunden.lat/lng (persistiert) → überlebt jeden Redeploy (kein stiller Verlust).
  geo: { lat: 51.9425648, lon: 8.0140045 } as { lat: number; lon: number } | null,
  telefon: "02581 9283800",
  email: "info@amato.de",
  website: "",
  logo: "https://r2.kuwezu.de/cdn-cgi/image/width=320,fit=contain,quality=78,format=auto/konzepte/autofit/autofit_logo.webp",
  standort_bild: null,
  // Foto-Attribution (Unsplash/Pexels) → Footer-Hinweis „Fotos: …". Leer = kein Hinweis.
  bildAttributionen: {"hero":{"autor":"CHUTTERSNAP","autorUrl":"https://unsplash.com/@chuttersnap","quelle":"unsplash"},"ueberUns":{"autor":"Biswas Automobiles BD","autorUrl":"https://unsplash.com/@biswasautomobiles_bd","quelle":"unsplash"},"karriere":{"autor":"BHARAT VISHAWAKARMA","autorUrl":"https://unsplash.com/@bharat05","quelle":"unsplash"}} as {
    hero?: { autor: string; autorUrl: string; quelle: string };
    ueberUns?: { autor: string; autorUrl: string; quelle: string };
    standort?: { autor: string; autorUrl: string; quelle: string };
    karriere?: { autor: string; autorUrl: string; quelle: string };
    leistungen?: Record<string, { autor: string; autorUrl: string; quelle: string }>;
  },

  // ── Branding ───────────────────────────────────────────────────────────────
  farben: {
    primary: "#e30613",
    secondary: "#000000",
    accent: "#b1b2b3",
  },
  // ── Hero ───────────────────────────────────────────────────────────────────
  hero: {
    bild: "https://r2.kuwezu.de/cdn-cgi/image/width=1600,fit=cover,quality=78,format=auto/kunden/266/stock-bemo0y.jpg",
    bildSrcset: "https://r2.kuwezu.de/cdn-cgi/image/width=768,fit=cover,quality=78,format=auto/kunden/266/stock-bemo0y.jpg 768w, https://r2.kuwezu.de/cdn-cgi/image/width=1280,fit=cover,quality=78,format=auto/kunden/266/stock-bemo0y.jpg 1280w, https://r2.kuwezu.de/cdn-cgi/image/width=1920,fit=cover,quality=78,format=auto/kunden/266/stock-bemo0y.jpg 1920w",
    bildSizes: "100vw",
    overlayOpacity: 0.55, /* fix — nie schwächer, nie überschreibbar */
    ueberschrift: "KFZ-Meisterbetrieb Amato – Ihre Autowerkstatt in Warendorf",
    ueberschriftHighlight: "in Warendorf",
    ueberschriftLines: ["KFZ-Meisterbetrieb Amato – Ihre Autowerkstatt", "in Warendorf"],
    untertext: "Meisterhafte Kfz-Reparatur in Warendorf – zuverlässig, transparent und fair kalkuliert.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/cdn-cgi/image/width=1280,fit=cover,quality=78,format=auto/kunden/266/stock-1rse428.jpg",
    bildSrcset: "https://r2.kuwezu.de/cdn-cgi/image/width=640,fit=cover,quality=78,format=auto/kunden/266/stock-1rse428.jpg 640w, https://r2.kuwezu.de/cdn-cgi/image/width=1024,fit=cover,quality=78,format=auto/kunden/266/stock-1rse428.jpg 1024w, https://r2.kuwezu.de/cdn-cgi/image/width=1536,fit=cover,quality=78,format=auto/kunden/266/stock-1rse428.jpg 1536w",
    bildSizes: "(max-width: 1024px) 100vw, 50vw",
    ueberschrift: "KFZ-Meisterbetrieb Amato Warendorf — Ihr Partner in Warendorf",
    text1: "Als KFZ-Meisterbetrieb in Warendorf steht Amato für erstklassige Handwerkskunst und persönlichen Service rund um Ihr Fahrzeug. Ob Inspektion, Reparatur, Reifenwechsel oder Diagnose modernster Fahrzeugtechnik – wir kümmern uns mit Fachwissen und Leidenschaft um Ihr Auto, als wäre es unser eigenes. Unsere Kunden schätzen die ehrliche Beratung, faire Preise und die schnelle, zuverlässige Umsetzung aller Arbeiten. Mitten in Warendorf gelegen, sind wir Ihr vertrauensvoller Ansprechpartner für alle Marken und Anliegen rund um Ihr Fahrzeug.",
    text2: "",
    tags: ["Qualität", "Zuverlässigkeit", "Faire Preise", "Erfahrung"],
    stats: [
      { value: "26+", label: "Jahre Erfahrung" },
      { value: "122", label: "Zufriedene Kunden" },
      { value: "12", label: "Fachkräfte" },
      { value: "130", label: "Aufträge/Jahr" },
    ],
  },

  // ── Leistungen ─────────────────────────────────────────────────────────────
  leistungen: [
    {
      slug: "achsvermessung",
      title: "Achsvermessung",
      bild: "https://r2.kuwezu.de/cdn-cgi/image/width=800,fit=cover,quality=78,format=auto/bibliothek/Achsvermessung/1777878369186-leistung_achsvermessung.webp",
      bildSrcset: "https://r2.kuwezu.de/cdn-cgi/image/width=400,fit=cover,quality=78,format=auto/bibliothek/Achsvermessung/1777878369186-leistung_achsvermessung.webp 400w, https://r2.kuwezu.de/cdn-cgi/image/width=800,fit=cover,quality=78,format=auto/bibliothek/Achsvermessung/1777878369186-leistung_achsvermessung.webp 800w",
      description: "Professionelle Achsvermessung — schnell, zuverlässig und zu fairen Preisen.",
      highlights: ["Qualität", "Zuverlässigkeit", "Faire Preise"],
    },
    {
      slug: "autoglas",
      title: "Autoglas",
      bild: "https://r2.kuwezu.de/cdn-cgi/image/width=800,fit=cover,quality=78,format=auto/bibliothek/Autoglas/1777829664081-autoglas_reparatur.webp",
      bildSrcset: "https://r2.kuwezu.de/cdn-cgi/image/width=400,fit=cover,quality=78,format=auto/bibliothek/Autoglas/1777829664081-autoglas_reparatur.webp 400w, https://r2.kuwezu.de/cdn-cgi/image/width=800,fit=cover,quality=78,format=auto/bibliothek/Autoglas/1777829664081-autoglas_reparatur.webp 800w",
      description: "Professionelle Autoglas — schnell, zuverlässig und zu fairen Preisen.",
      highlights: ["Qualität", "Zuverlässigkeit", "Faire Preise"],
    },
    {
      slug: "bremsen",
      title: "Bremsen",
      bild: "https://r2.kuwezu.de/cdn-cgi/image/width=800,fit=cover,quality=78,format=auto/bibliothek/Bremsen/1777878346158-bremsen_service.webp",
      bildSrcset: "https://r2.kuwezu.de/cdn-cgi/image/width=400,fit=cover,quality=78,format=auto/bibliothek/Bremsen/1777878346158-bremsen_service.webp 400w, https://r2.kuwezu.de/cdn-cgi/image/width=800,fit=cover,quality=78,format=auto/bibliothek/Bremsen/1777878346158-bremsen_service.webp 800w",
      description: "Professionelle Bremsen — schnell, zuverlässig und zu fairen Preisen.",
      highlights: ["Qualität", "Zuverlässigkeit", "Faire Preise"],
    }
  ] as { slug: string; title: string; bild: string; bildSrcset: string; description: string; highlights: string[] }[],

  // ── Karriere ───────────────────────────────────────────────────────────────
  // Kundenpflegbar (Stammdaten) bzw. künftig autoservice.jobs-Feed — keine
  // erfundenen Platzhalter-Stellen mehr. jobs: [] → Template blendet
  // "Offene Stellen" aus; enabled: false → ganze Section entfällt.
  karriere: {
    enabled: true as boolean,
    jobs: [

    ] as { title: string; type: string; experience: string }[],
    benefits: null as { title: string; text: string }[] | null,
    // null = In-Page-Anker #kontakt; http(s)-URL öffnet im neuen Tab
    buttonUrl: null as string | null,
    // Öffentlicher autoservice.jobs-Profil-Link (aus Slug) → „Offene Stellen ansehen"
    autoserviceUrl: null as string | null,
    // Karriere-/Team-Bild (Bild-Slot typ="karriere"); null = kein Bild.
    bild: "https://r2.kuwezu.de/cdn-cgi/image/width=1280,fit=cover,quality=78,format=auto/kunden/266/stock-1bhuaex.jpg" as string | null,
  },

  // ── Öffnungszeiten & Services ──────────────────────────────────────────────
  tuev_termine: true as boolean,
  // Wiederkehrende TÜV-/HU-Termine — leer/null: kein Infoblock auf der Seite
  tuev_slots: [{ day: "di", from: "08:00", to: "09:00" }, { day: "mi", from: "08:00", to: "10:00" }] as { day: string; from: string; to: string }[] | null,
  tuev_hinweis: null as string | null,
  oeffnungszeiten: {
    mo_fr: "14:00 – 17:00" as string,
    sa:    "" as string,
    so:    "" as string,
  },
  // Effektive Zeiten je Wochentag (Mo–Fr-Block + Ausnahmen bereits aufgelöst) —
  // Quelle für den "heute geöffnet"-Hinweis im Hero. "" = an dem Tag geschlossen.
  oeffnungszeiten_tage: {
    mo: "14:00 – 19:00", di: "14:00 – 17:00", mi: "14:00 – 17:00", do: "13:00 – 17:00",
    fr: "14:00 – 17:00", sa: "", so: "",
  } as Record<"mo" | "di" | "mi" | "do" | "fr" | "sa" | "so", string>,

  // ── Kontakt ────────────────────────────────────────────────────────────────
  kontakt: {
    oeffnungszeiten: ["Mo: 14:00 – 19:00", "Di–Mi: 14:00 – 17:00", "Do: 13:00 – 17:00", "Fr: 14:00 – 17:00"],
  },

  // ── Social Media ───────────────────────────────────────────────────────────
  social: {
    facebook:  null as string | null,
    instagram: null as string | null,
  },

  // ── WhatsApp ───────────────────────────────────────────────────────────────
  whatsapp: "" as string,

  // ── Features ───────────────────────────────────────────────────────────────
  newsEnabled: false as boolean,

  // ── Impressum / Rechtsangaben (Migration 095) ───────────────────────────────
  impressum: {} as {
    inhaber?: string; rechtsform?: string; ust_id?: string; handelsregister?: string;
    registergericht?: string; aufsichtsbehoerde?: string; verantwortlicher?: string;
  },
} as const;

export type LeistungConfig = (typeof client.leistungen)[number];
