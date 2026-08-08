import type { ReactNode } from "react";
import Link from "next/link";

const services = [
  { title: "海運", desc: "海運", icon: "/assets/service-sea.png" },
  { title: "空運", desc: "空運", icon: "/assets/service-air.png" },
  { title: "報關", desc: "報關", icon: "/assets/service-customs.png" },
  { title: "倉庫服務", desc: "倉庫服務", icon: "/assets/service-warehouse.png" },
  { title: "陸路運輸", desc: "卡車運輸", icon: "/assets/service-road.png" },
  { title: "跨邊境運輸", desc: "跨邊境運輸", icon: "/assets/service-border.png" },
];

export function Header() {
  return (
    <header className="legacy-header">
      <Link className="legacy-logo" href="/" aria-label="Ananta International Logistics">
        <img src="/assets/logo.jpg" alt="Ananta International Logistics" />
      </Link>
      <div className="legacy-navigation">
        <div className="legacy-top-row">
          <span className="top-spacer" />
          <details className="language-menu">
            <summary>◉&nbsp; 繁体中文</summary>
            <div><a href="/en">English</a><Link href="/">繁體中文</Link><a href="/zh-cn">简体中文</a></div>
          </details>
          <span className="top-divider">|</span>
          <a href="/login">登錄</a>
        </div>
        <div className="legacy-menu-row">
          <nav className="legacy-menu" aria-label="Main navigation">
            <a href="/about">關於我們</a>
            <details><summary>服務 <span>⌄</span></summary><div className="menu-dropdown">{services.map((item) => <a href="/services" key={item.title}>{item.title}</a>)}</div></details>
            <details><summary>物流資訊 <span>⌄</span></summary><div className="menu-dropdown"><a href="/incoterms">Incoterms</a><a href="/container-size">Container size</a></div></details>
            <a href="/office">衍亞辦公室</a>
            <a href="/contact">聯絡我們</a>
            <a href="/career">加入我們</a>
          </nav>
          <a className="quote-link" href="/quote">獲得報價</a>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="legacy-footer">
      <div className="legacy-container footer-grid">
        <div className="footer-about"><img src="/assets/logo.jpg" alt="Ananta International Logistics" /><p>我们是一家非常成功的跨国公司。</p></div>
        <div><h4>聯繫我們</h4><p>Unit C31, 5/F., International Commodity Exchange Building, Baoan North Road, Luohu District, Shenzhen, China</p><p>電話: <a href="tel:+8675582204810">+86-755-82204810</a></p><p>電子郵件: <a href="mailto:marketing@anantalog.com">marketing@anantalog.com</a></p></div>
        <div><h4>常用鏈接</h4><ul><li><a href="/about">關於我們</a></li><li><a href="/services">服務</a></li><li><a href="/office">衍亞辦公室</a></li><li><a href="/contact">聯絡我們</a></li></ul></div>
        <div><h4>新聞</h4><p>訂閱最新消息，提供並與我們聯系。</p><input aria-label="輸入電郵地址" placeholder="輸入電郵地址" /><button type="button">訂閱</button></div>
      </div>
      <div className="footer-bottom"><div className="legacy-container">© 2020. Anantalog.com 版權所有　<a href="https://beian.miit.gov.cn/">沪ICP备2020028392号-1</a></div></div>
    </footer>
  );
}

export function HomePage({ language = "traditional" }: { language?: "traditional" | "simplified" | "english" }) {
  const hero = language === "english"
    ? { kicker: "Logistics Freight Services", title: <>AIR&nbsp;&nbsp; SEA<br />ROAD&nbsp;&nbsp; RAIL</>, more: "Learn More" }
    : language === "simplified"
      ? { kicker: "物流货运服务", title: <>空运&nbsp;&nbsp; 海运<br />汽运&nbsp;&nbsp; 铁运</>, more: "了解更多" }
      : { kicker: "物流貨運服務", title: <>空運&nbsp;&nbsp; 海運<br />汽運&nbsp;&nbsp; 鐵運</>, more: "瞭解更多" };
  return (
    <>
      <Header />
      <main>
        <section className="legacy-hero">
          <div className="legacy-container hero-content"><p>{hero.kicker}</p><h1>{hero.title}</h1><a href="/services">{hero.more}</a></div>
        </section>
        <section className="feature-wrap"><div className="feature-bar">
          {[{ glyph: "✈", label: "空運服務" }, { glyph: "▰", label: "海運服務" }, { glyph: "▣", label: "項目貨物" }, { glyph: "▤", label: "倉庫服務" }].map((item) => <div className="feature-item" key={item.label}><span>{item.glyph}</span><h4>{item.label}</h4></div>)}
        </div></section>

        <section className="legacy-about legacy-section">
          <div className="legacy-container two-col">
            <div className="photo-stack"><img className="photo-one" src="/assets/about-ship.jpg" alt="Container ship at port" /><img className="photo-two" src="/assets/about-delivery.jpg" alt="Cargo delivery" /><span className="play-disc">▶</span></div>
            <div className="section-copy"><span className="orange-label">Who we are</span><h2>We keep things simple, putting you in control so you can make informed choices</h2><a className="orange-button" href="/about">what we do</a></div>
          </div>
        </section>

        <section className="services-home legacy-section">
          <div className="legacy-container"><span className="orange-label">Our Services</span><h2>We work with you to achieve your goals</h2><div className="service-grid">{services.map((item) => <article className="service-card" key={item.title}><img src={item.icon} alt="" /><h4>{item.title}</h4><p>{item.desc}</p><a href="/services">查看服務　›</a></article>)}</div></div>
        </section>

        <section className="how-section legacy-section"><div className="legacy-container how-grid"><div><span className="orange-label">HOW WE DO</span><h2>THE BEST</h2><a className="orange-button" href="/about">Our Approach</a></div><div className="how-list"><div><b>◎</b><span><h4>Goals</h4><p>Great financial advice starts with an understanding of your personal, financial and lifestyle goals.</p></span></div><div><b>▧</b><span><h4>Plans</h4><p>Goals without a plan are just a dream.</p></span></div><div><b>↻</b><span><h4>Actions</h4><p>Plans require action or they are just words.</p></span></div></div></div></section>

        <section className="stats-section"><div className="stats-overlay"/><div className="legacy-container stats-grid">{[["▣","1000+","COMPLETED PROJECTS"],["☺","1200+","HAPPY CLIENTS"],["⚑","120+","COUNTRIES"],["♡","450+","POSITIVE REVIEWS"]].map((item) => <div key={item[2]}><i>{item[0]}</i><strong>{item[1]}</strong><span>{item[2]}</span></div>)}</div></section>
        <section className="legacy-cta"><div className="legacy-container"><h2>Contact us for help.</h2><a href="/contact">Contact Us</a></div></section>
      </main>
      <Footer />
    </>
  );
}

export function PageBanner({ title, subtitle }: { title: string; subtitle?: string }) {
  return <section className="page-banner"><div className="page-banner-overlay"/><div className="legacy-container"><h1>{title}</h1>{subtitle && <p>{subtitle}</p>}<div><Link href="/">主頁</Link>　<span>{title}</span></div></div></section>;
}

export function StandardPage({ title, subtitle, children }: { title: string; subtitle?: string; children: ReactNode }) {
  return <><Header /><main><PageBanner title={title} subtitle={subtitle}/><section className="content-section"><div className="legacy-container">{children}</div></section></main><Footer /></>;
}

export function AboutPage() {
  return <StandardPage title="關於我們"><div className="rich-copy"><h2>公司簡介</h2><p>衍亞国际物流是一家国际物流和供应链公司，</p><p>于2018年成立，总部设在香港。</p><p>我们是一家多元化及发展迅速的公司，</p><p>於2020年，我们已经在香港、深圳、上海、新加坡和印度尼西亚扩展了自己的办公室。</p><p>我们的员工都是非常有经验的超过15年的国际货运代理背景。</p><h2>公司使命</h2><p>衍亞不仅提供传统的货运代理服务，</p><p>更提供量身定制的物流解决方案，</p><p>确保客戶的货物运输由专业人员以最具成本效益的方式。</p><p>我们的使命“你不满意，我们就不满意。”</p><p>“您不做，我们就不会成功”指引我们以您的满意，克服行业中的任何挑战。</p><h2>公司宗旨</h2><p>被我們的客戶和員工視為世界上最頂級的物流公司 這是一項艱鉅的任務，</p><p>但是我們知道我們員工的專业水平以及可以為客戶提供的解決方案的能力。</p><p>值着對客戶的付托业務的深刻理解開始，我們可以為客戶提供增加最大價值的供應鏈解決方案。</p></div></StandardPage>;
}

export function ServicesPage() {
  return <StandardPage title="我們提供的服務" subtitle="我們與您一起努力實現您的目標。"><div className="services-page-grid">{services.map((item) => <article key={item.title}><img src={item.icon} alt=""/><div><h3>{item.title}</h3><p>{item.desc}</p><a href="#">閱讀更多　›</a></div></article>)}</div></StandardPage>;
}

const offices = [
  ["Hong Kong’s office", "Ananta International Logistics (Hong Kong) Limited", "Flat C, 8/F, Wah Hing Industrial Building\nNo 2-6 Ma Kok Street, Tsuen Wan, N.T., Hong Kong", "Tel: +852-37977821　　　 Fax: +852-30033059"],
  ["Shanghai’s Office", "Ananta International Logistics (Shanghai) Limited", "Room 3325, 33/Floor of Main Building,\nNo.2668 Zhongshan North Road, Putuo District, Shanghai, China", "Tel: +86-21-66696788　　　 Fax: +86-21-66696788"],
  ["Shenzhen’s Office", "Ananta International Logistics (Shenzhen) Limited", "Unit C31, 5/F., International Commodity Exchange Building,\nBaoan North Road, Luohu District, Shenzhen, China", "Tel: +86-755-82204810　　　 Fax: +86-755-82204810"],
  ["Singapore’s Office", "Ananta International Logistics (PTE) Limited", "22 Sin Ming Lane #06-76 Midview City,\nSingapore, 573969", "Tel: +65-67151455　　　 Fax: +65-64600190"],
  ["Indonesia’s Office", "PT. Ananta Internasional Logistik", "JI.Kalianget No.34 Surabaya\n60165, Indonesia", "Tel: +62-31-3298574　　　 Fax: +62-31-3281350"],
  ["Philippines’ office", "Ananta International Logistics (PHIL), INC.", "Unit 804 Dasmarinas Corporate Center Building,\n#321 Dasmarinas St Binondo Manila 1006", "Tel: +63-2-88127445　　　 Fax: +63-2-88127445"],
];

export function OfficePage() {
  return <StandardPage title="衍亞辦公室"><div className="office-page"><h2>Ananta International Logistics</h2>{offices.map((office) => <article key={office[0]}><h3>{office[0]}</h3><strong>{office[1]}</strong><p>{office[2]}</p><p>{office[3]}</p></article>)}<p className="office-close">We look forward to working with you to establish a mutual cooperation and respect company.</p></div></StandardPage>;
}

export function ContactPage() {
  return <StandardPage title="聯絡我們" subtitle="需要資訊嗎？聯繫我們"><div className="contact-panel"><div className="contact-map"><span>⌖</span><p>Shenzhen, China</p></div><div><span className="orange-label">聯絡我們</span><h2>Ananta International Logistics (Shenzhen) Limited</h2><p>Unit C31, 5/F., International Commodity Exchange Building, Baoan North Road, Luohu District, Shenzhen, China</p><p className="contact-line"><b>電話</b><a href="tel:+8675582204810">+86-755-82204810</a></p><p className="contact-line"><b>電子郵件</b><a href="mailto:marketing@anantalog.com">marketing@anantalog.com</a></p></div></div></StandardPage>;
}

export function CareerPage() {
  return <StandardPage title="招聘" subtitle="加入我們的團隊，提高你的技能"><div className="career-panel"><aside><h3>工作類別</h3><p>所有 <span>(0)</span></p></aside><div><span className="empty-icon">⌕</span><h2>沒有找到工作</h2></div></div></StandardPage>;
}

const quoteFields = ["名稱 *", "電子郵件 *", "國家 *", "城市 *", "公司 *", "聯絡電話 *"];
export function QuotePage() {
  return <StandardPage title="報價請求" subtitle="有項目嗎？給我們發個報價"><form className="quote-form" action="#"><div className="form-grid">{quoteFields.map((label) => <label key={label}>{label}<input required /></label>)}<label>服務選擇 *<select defaultValue=""><option value="" disabled>選擇服務</option><option>全球貨運</option><option>報關服務</option><option>内陸運輸</option><option>倉儲服務</option><option>保險服務</option><option>特別服務</option><option>其他服務</option></select></label><label>模式 *<select defaultValue=""><option value="" disabled>選擇模式</option><option>入口</option><option>出口</option><option>出口和入口</option><option>沒有</option></select></label><label className="wide">行業 *<select defaultValue=""><option value="" disabled>選擇行業</option><option>零售</option><option>紡織品</option><option>汽車行業</option><option>快速消費品</option><option>化學與製藥</option><option>技術</option><option>其他</option></select></label><label className="wide">描述 *<textarea rows={6} required /></label><label className="wide">NDA文件<input type="file"/><small>** 僅允許 doc，docx，pdf，rtf，txt，zip，rar 文件</small></label></div><button type="submit">提交</button></form></StandardPage>;
}

export function LoginPage() {
  return <StandardPage title="登錄"><form className="login-form" action="#"><h2>登錄</h2><label>電子郵件<input type="email" required /></label><label>密碼<input type="password" required /></label><button type="submit">登錄</button></form></StandardPage>;
}

export function IncotermsPage() {
  return <StandardPage title="Incoterms"><div className="rich-copy"><h2>Incoterms</h2><p>International Commercial Terms define the responsibilities of buyers and sellers for the delivery of goods under sales contracts.</p><p>For route-specific guidance, please contact our logistics team.</p></div></StandardPage>;
}

export function ContainerSizePage() {
  return <StandardPage title="Container size"><div className="rich-copy"><h2>Container size</h2><div className="container-table"><div><b>20&apos; GP</b><span>Standard dry container</span></div><div><b>40&apos; GP</b><span>Standard dry container</span></div><div><b>40&apos; HC</b><span>High cube container</span></div></div></div></StandardPage>;
}
