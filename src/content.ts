export type Locale = "en" | "zh" | "zh-hant";

export type Copy = {
  nav: { about: string; services: string; network: string; contact: string };
  hero: { kicker: string; title: string; titleAccent: string; lede: string; primary: string; secondary: string };
  proof: { value: string; label: string }[];
  services: { eyebrow: string; title: string; intro: string; items: { title: string; copy: string }[] };
  network: { eyebrow: string; title: string; intro: string; steps: { title: string; copy: string }[] };
  about: { eyebrow: string; title: string; intro: string; quote: string; signature: string; principles: { title: string; copy: string }[] };
  contact: { eyebrow: string; title: string; accent: string; copy: string; action: string };
  footer: { rights: string; tagline: string };
};

export const content: Record<Locale, Copy> = {
  en: {
    nav: { about: "About", services: "Services", network: "How it works", contact: "Contact" },
    hero: { kicker: "Global freight, intelligently connected", title: "Move with", titleAccent: "certainty.", lede: "One accountable logistics partner across ocean, air, road, customs and warehousing — engineered around the way your supply chain actually moves.", primary: "Start a shipment", secondary: "Explore services" },
    proof: [{ value: "6", label: "Integrated services" }, { value: "24/7", label: "Shipment visibility" }, { value: "1", label: "Accountable partner" }, { value: "Global", label: "Partner network" }],
    services: { eyebrow: "What we move", title: "One network. Every critical handoff.", intro: "From the first booking to final delivery, we coordinate the details, documents and decisions that keep cargo moving.", items: [
      { title: "Ocean Freight", copy: "FCL and LCL solutions with flexible routing, reliable carrier options and hands-on exception management." },
      { title: "Air Freight", copy: "Priority, standard and charter options for time-critical cargo, supported by proactive milestone tracking." },
      { title: "Customs Clearance", copy: "Accurate documentation, tariff support and local coordination to reduce border delays and compliance risk." },
      { title: "Warehousing", copy: "Flexible storage, inventory handling, consolidation and value-added services near key transport hubs." },
      { title: "Land Transportation", copy: "First-mile, last-mile and cross-regional trucking planned around your cargo, schedule and destination." },
      { title: "Cross-Border Logistics", copy: "Connected multimodal solutions for complex trade lanes, with one team accountable end to end." },
    ]},
    network: { eyebrow: "How we work", title: "Clarity at every milestone.", intro: "A disciplined operating model turns complex freight into a clear, manageable journey.", steps: [
      { title: "Understand the shipment", copy: "We map cargo, trade lane, timing, risk and commercial priorities before recommending a route." },
      { title: "Design the right plan", copy: "Our team balances speed, cost and resilience across modes, carriers and border requirements." },
      { title: "Control every handoff", copy: "Milestone visibility and active exception management keep teams informed before issues become delays." },
      { title: "Deliver and improve", copy: "We close the loop with clear documentation, performance insight and practical optimization." },
    ]},
    about: { eyebrow: "About Ananta", title: "Logistics built on ownership.", intro: "Ananta Logistics brings international reach together with responsive, hands-on execution. We believe the best freight partner is not simply a booking channel — it is a team that sees around corners, communicates early and takes responsibility for the outcome.", quote: "Your cargo may cross borders. Our responsibility never does.", signature: "The Ananta standard", principles: [
      { title: "Clear communication", copy: "Practical updates, honest answers and no ambiguity about the next step." },
      { title: "Adaptive planning", copy: "Options designed around real operating conditions, not a one-size-fits-all route." },
      { title: "End-to-end ownership", copy: "One accountable team from origin booking through final delivery." },
    ]},
    contact: { eyebrow: "Plan your next move", title: "Tell us what needs to move.", accent: "We’ll map the way forward.", copy: "Share your origin, destination, cargo and timing. Our team will come back with the right questions and a clear next step.", action: "Contact our team" },
    footer: { rights: "© 2026 Ananta Logistics. All rights reserved.", tagline: "Move with certainty." },
  },
  zh: {
    nav: { about: "关于我们", services: "服务", network: "服务流程", contact: "联系我们" },
    hero: { kicker: "全球货运 · 智慧连接", title: "稳行全球，", titleAccent: "从容抵达。", lede: "海运、空运、陆运、清关与仓储由一个团队协同管理，以真正适合您供应链的方式，让每一程更透明、更可靠。", primary: "咨询运输方案", secondary: "查看服务" },
    proof: [{ value: "6", label: "一体化服务" }, { value: "24/7", label: "运输节点可视" }, { value: "1", label: "统一负责团队" }, { value: "全球", label: "合作伙伴网络" }],
    services: { eyebrow: "我们的服务", title: "一张网络，衔接每个关键节点。", intro: "从首次订舱到最终交付，我们协调细节、文件与决策，让货物持续向前。", items: [
      { title: "海运", copy: "整箱与拼箱灵活组合，提供可靠船东选择、航线规划及异常处理。" },
      { title: "空运", copy: "加急、标准与包机方案覆盖时效型货物，并提供主动节点追踪。" },
      { title: "报关清关", copy: "准确文件、税则支持与本地协调，降低通关延误和合规风险。" },
      { title: "仓储服务", copy: "关键枢纽周边提供弹性仓储、库存管理、集拼与增值服务。" },
      { title: "陆路运输", copy: "依据货物、时效与目的地安排首程、末程及跨区域卡车运输。" },
      { title: "跨境物流", copy: "复杂贸易线路的一体化多式联运，由一个团队全程负责。" },
    ]},
    network: { eyebrow: "服务流程", title: "每个节点，都清楚可控。", intro: "严谨的运营方式，将复杂货运转化为清晰、可管理的运输旅程。", steps: [
      { title: "了解运输需求", copy: "在推荐路线前，先梳理货物、线路、时效、风险与商业优先级。" },
      { title: "设计合适方案", copy: "综合运输方式、承运商与边境要求，平衡速度、成本和韧性。" },
      { title: "管理每次交接", copy: "以节点可视化和主动异常管理，让团队在问题影响时效前及时掌握。" },
      { title: "交付并持续优化", copy: "以清晰文件、绩效洞察和务实建议完成闭环。" },
    ]},
    about: { eyebrow: "关于 Ananta", title: "以责任感，重新定义物流。", intro: "Ananta Logistics 将国际网络与快速、务实的执行结合。我们相信，真正优秀的货运伙伴不仅负责订舱，更应提前判断、主动沟通，并对最终结果负责。", quote: "货物可以跨越国界，我们的责任始终如一。", signature: "Ananta 服务标准", principles: [
      { title: "清晰沟通", copy: "提供务实更新、坦诚答案，并明确每一个下一步。" },
      { title: "灵活规划", copy: "依据真实运营环境定制方案，而非套用单一路线。" },
      { title: "全程负责", copy: "从起运订舱到最终交付，由同一个团队统一负责。" },
    ]},
    contact: { eyebrow: "规划下一程", title: "告诉我们货物要去哪里。", accent: "我们为您规划前路。", copy: "请提供起运地、目的地、货物和时效。我们的团队将确认关键问题，并给出清晰的下一步。", action: "联系团队" },
    footer: { rights: "© 2026 Ananta Logistics. 保留所有权利。", tagline: "稳行全球，从容抵达。" },
  },
  "zh-hant": {
    nav: { about: "關於我們", services: "服務", network: "服務流程", contact: "聯絡我們" },
    hero: { kicker: "全球貨運 · 智慧連接", title: "穩行全球，", titleAccent: "從容抵達。", lede: "海運、空運、陸運、清關與倉儲由一個團隊協同管理，以真正適合您供應鏈的方式，讓每一程更透明、更可靠。", primary: "諮詢運輸方案", secondary: "查看服務" },
    proof: [{ value: "6", label: "一體化服務" }, { value: "24/7", label: "運輸節點可視" }, { value: "1", label: "統一負責團隊" }, { value: "全球", label: "合作夥伴網絡" }],
    services: { eyebrow: "我們的服務", title: "一張網絡，銜接每個關鍵節點。", intro: "從首次訂艙到最終交付，我們協調細節、文件與決策，讓貨物持續向前。", items: [
      { title: "海運", copy: "整櫃與併櫃靈活組合，提供可靠船東選擇、航線規劃及異常處理。" },
      { title: "空運", copy: "加急、標準與包機方案覆蓋時效型貨物，並提供主動節點追蹤。" },
      { title: "報關清關", copy: "準確文件、稅則支援與本地協調，降低通關延誤和合規風險。" },
      { title: "倉儲服務", copy: "關鍵樞紐周邊提供彈性倉儲、庫存管理、集拼與增值服務。" },
      { title: "陸路運輸", copy: "依據貨物、時效與目的地安排首程、末程及跨區域卡車運輸。" },
      { title: "跨境物流", copy: "複雜貿易線路的一體化多式聯運，由一個團隊全程負責。" },
    ]},
    network: { eyebrow: "服務流程", title: "每個節點，都清楚可控。", intro: "嚴謹的營運方式，將複雜貨運轉化為清晰、可管理的運輸旅程。", steps: [
      { title: "了解運輸需求", copy: "在推薦路線前，先梳理貨物、線路、時效、風險與商業優先級。" },
      { title: "設計合適方案", copy: "綜合運輸方式、承運商與邊境要求，平衡速度、成本和韌性。" },
      { title: "管理每次交接", copy: "以節點可視化和主動異常管理，讓團隊在問題影響時效前及時掌握。" },
      { title: "交付並持續優化", copy: "以清晰文件、績效洞察和務實建議完成閉環。" },
    ]},
    about: { eyebrow: "關於 Ananta", title: "以責任感，重新定義物流。", intro: "Ananta Logistics 將國際網絡與快速、務實的執行結合。我們相信，真正優秀的貨運夥伴不僅負責訂艙，更應提前判斷、主動溝通，並對最終結果負責。", quote: "貨物可以跨越國界，我們的責任始終如一。", signature: "Ananta 服務標準", principles: [
      { title: "清晰溝通", copy: "提供務實更新、坦誠答案，並明確每一個下一步。" },
      { title: "靈活規劃", copy: "依據真實營運環境訂製方案，而非套用單一路線。" },
      { title: "全程負責", copy: "從起運訂艙到最終交付，由同一個團隊統一負責。" },
    ]},
    contact: { eyebrow: "規劃下一程", title: "告訴我們貨物要去哪裡。", accent: "我們為您規劃前路。", copy: "請提供起運地、目的地、貨物和時效。我們的團隊將確認關鍵問題，並給出清晰的下一步。", action: "聯絡團隊" },
    footer: { rights: "© 2026 Ananta Logistics. 保留所有權利。", tagline: "穩行全球，從容抵達。" },
  },
};
