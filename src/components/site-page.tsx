import type { Copy, Locale } from "@/content";

const localeLabels: { locale: Locale; label: string }[] = [
  { locale: "en", label: "EN" },
  { locale: "zh", label: "中" },
  { locale: "zh-hant", label: "繁" },
];

export function SitePage({ locale, copy }: { locale: Locale; copy: Copy }) {
  const localePath = (value: Locale) => `/${value}`;
  return (
    <main>
      <header className="topbar">
        <div className="shell nav">
          <a className="brand" href={`/${locale}`} aria-label="Ananta Logistics home">
            <span className="brand-mark"><span>A</span></span>
            <span className="brand-copy"><strong>ANANTA</strong><small>GLOBAL LOGISTICS</small></span>
          </a>
          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#about">{copy.nav.about}</a>
            <a href="#services">{copy.nav.services}</a>
            <a href="#network">{copy.nav.network}</a>
            <a href="#contact">{copy.nav.contact}</a>
          </nav>
          <nav className="locale-switch" aria-label="Language selector">
            {localeLabels.map((item) => <a key={item.locale} href={localePath(item.locale)} className={item.locale === locale ? "active" : ""} lang={item.locale}>{item.label}</a>)}
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="shell hero-inner">
          <div className="hero-copy">
            <div className="hero-kicker">{copy.hero.kicker}</div>
            <h1>{copy.hero.title}<em>{copy.hero.titleAccent}</em></h1>
            <p className="hero-lede">{copy.hero.lede}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">{copy.hero.primary}<span className="arrow">→</span></a>
              <a className="button button-ghost" href="#services">{copy.hero.secondary}</a>
            </div>
          </div>
          <div className="route-board" aria-hidden="true">
            <div className="globe" />
            <div className="route r1"/><div className="route r2"/><div className="route r3"/>
            <span className="node n1"/><span className="node n2"/><span className="node n3"/><span className="node n4"/>
            <div className="signal-card"><small>Live route intelligence</small><strong>Origin → Destination</strong><div className="signal-line"><span/></div></div>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Service highlights">
        <div className="shell proof-grid">{copy.proof.map((item) => <div className="proof-item" key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}</div>
      </section>

      <section className="services" id="services">
        <div className="shell">
          <div className="services-head">
            <div><p className="eyebrow">{copy.services.eyebrow}</p><h2 className="section-title">{copy.services.title}</h2></div>
            <p className="section-copy">{copy.services.intro}</p>
          </div>
          <div className="services-grid">{copy.services.items.map((item, index) => <article className="service-card" key={item.title}><span className="service-number">0{index + 1}</span><span className="service-arrow">↗</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div>
        </div>
      </section>

      <section className="network" id="network">
        <div className="shell network-grid">
          <div><p className="eyebrow">{copy.network.eyebrow}</p><h2 className="section-title">{copy.network.title}</h2><p className="section-copy">{copy.network.intro}</p></div>
          <div className="steps">{copy.network.steps.map((step, index) => <div className="step" key={step.title}><b>0{index + 1}</b><div><h3>{step.title}</h3><p>{step.copy}</p></div></div>)}</div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="shell about-grid">
          <div className="quote-panel"><blockquote>{copy.about.quote}</blockquote><small>{copy.about.signature}</small></div>
          <div><p className="eyebrow">{copy.about.eyebrow}</p><h2 className="section-title">{copy.about.title}</h2><p className="section-copy">{copy.about.intro}</p><div className="principles">{copy.about.principles.map((item) => <div className="principle" key={item.title}><strong>{item.title}</strong><p>{item.copy}</p></div>)}</div></div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="shell contact-card">
          <div><p className="eyebrow">{copy.contact.eyebrow}</p><h2>{copy.contact.title}<br/><span>{copy.contact.accent}</span></h2></div>
          <div className="contact-side"><p>{copy.contact.copy}</p><a className="button button-primary" href="mailto:info@anantalog.com">{copy.contact.action}<span className="arrow">→</span></a></div>
        </div>
      </section>

      <footer className="footer">
        <div className="shell">
          <div className="footer-top"><a className="brand" href={`/${locale}`}><span className="brand-mark"><span>A</span></span><span className="brand-copy"><strong>ANANTA</strong><small>GLOBAL LOGISTICS</small></span></a><nav className="footer-links"><a href="#about">{copy.nav.about}</a><a href="#services">{copy.nav.services}</a><a href="#network">{copy.nav.network}</a><a href="#contact">{copy.nav.contact}</a></nav></div>
          <div className="footer-bottom"><span>{copy.footer.rights}</span><span>{copy.footer.tagline}</span></div>
        </div>
      </footer>
    </main>
  );
}
