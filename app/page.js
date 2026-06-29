"use client";

import { useState } from "react";

// Internationalization Translations Database (EN / ES)
const translations = {
  en: {
    announcement_text: "100% Authentic Luxury Timepieces | Serving New York City & Tri-State Area",
    announcement_payout: "Same-Day NYC Cash Payout",
    nav_home: "Home",
    nav_catalog: "Catalog",
    nav_jewelry: "Custom Jewelry",
    nav_sell: "Sell & Trade",
    nav_process: "Process",
    nav_guarantee: "About Us",
    nav_reviews: "Reviews",
    nav_faq: "FAQ",
    btn_quote: "Get Valuation",
    hero_badge: "Curated Luxury Horology • Private Manhattan Office",
    hero_title: "Sell • Buy • Trade Authentic Luxury Timepieces",
    hero_subtitle_tag: "⌚️⏱ • NYC Custom Made VVS Jewelry 💎⚜️",
    hero_desc: "New York's premier destination for buying, selling, and trading new & pre-owned luxury watches. Specialists in Rolex, Patek Philippe, Audemars Piguet, Richard Mille, Cartier, and bespoke solid 18k VVS diamond jewelry with immediate cash payout.",
    hero_btn_catalog: "Explore Vault Catalog",
    hero_btn_offer: "Get Immediate Cash Offer",
    stat_years: "Years of Horological Craft",
    stat_auth: "Authenticity Guaranteed",
    stat_payout: "Same-Day Cash Payout",
    trust_1_title: "Certified Master Inspection",
    trust_1_desc: "Rigorous 30-point mechanical & serial inspection in our private NYC showroom.",
    trust_2_title: "Fully Insured NY Courier",
    trust_2_desc: "White-glove armored courier dispatch covering Manhattan, Brooklyn, Long Island, NJ & CT.",
    trust_3_title: "Instant Cash & Wire Offers",
    trust_3_desc: "Direct wire transfer or immediate cash payout on the exact same day in New York.",
    jewelry_title: "Bespoke VVS Diamond & 18k Gold Creations in NYC",
    jewelry_desc_1: "Elevate your style with New York's finest handcrafted custom jewelry service. With over 20 years of master artisan craftsmanship in the NYC diamond district, we forge exclusive VVS diamond Cuban links, iced-out luxury watches, custom pendants, and engagement rings.",
    jewelry_desc_2: "Crafted exclusively with natural VVS diamonds and solid 18k gold, every piece is custom-tailored to your exact vision with certified gemological appraisal.",
    j_feat_1_title: "Certified VVS Natural Diamonds",
    j_feat_1_desc: "Hand-selected flawless diamonds chosen for maximum radiance.",
    j_feat_2_title: "NYC Master 3D CAD Design",
    j_feat_2_desc: "Interactive 3D preview prior to forging into solid gold.",
    jewelry_btn: "Order Custom Piece in NY",
    process_tag: "Seamless NYC VIP Experience",
    process_title: "How to Buy, Sell or Trade in New York",
    process_desc: "At Rod Watches & Jewelry NYC, we make buying, trading, or selling high-end timepieces effortless, completely confidential, and secure.",
    p1_title: "Request Instant Valuation",
    p1_desc: "Submit your watch reference and photos online or connect with our NYC WhatsApp concierge.",
    p2_title: "VIP Showroom Inspection",
    p2_desc: "Visit our high-security private Manhattan showroom or schedule insured armored pickup across NY/NJ/CT.",
    p3_title: "Immediate Payout or Trade",
    p3_desc: "Receive same-day wire transfer or instant cash payout, or apply trade credit toward your next piece.",
    sell_tag: "Selling or Trading in NY?",
    sell_title: "We Pay Top Market Cash for Luxury Timepieces in NYC",
    sell_desc: "Whether you're in Manhattan, Brooklyn, Queens, Long Island, or New Jersey, get a free, confidential professional appraisal with zero obligation and top market valuations.",
    sb1_title: "Same-Day Cash Payment:",
    sb2_title: "NYC Trade-In Upgrade:",
    sb3_title: "Private VIP Consignment:",
    form_header: "New York Valuation Request Form",
    form_subheader: "Submit your timepiece details for an instant confidential valuation from our NYC watch specialists",
    lbl_brand: "Watch Brand",
    opt_select_brand: "Select brand...",
    lbl_model: "Model & Reference",
    lbl_acc: "Accessories Included",
    chk_box: "Original Box",
    chk_papers: "Papers / Warranty Card",
    lbl_cond: "Condition",
    opt_cond_mint: "Unworn / Mint (Brand New)",
    opt_cond_exc: "Excellent (Light use)",
    opt_cond_used: "Pre-Owned (Normal wear)",
    lbl_name: "Your Full Name",
    lbl_phone: "Phone / WhatsApp",
    lbl_notes: "Additional Details / Location in NY / Asking Price",
    btn_send_wa: "Submit Valuation to WhatsApp Concierge",
    brands_title: "Featured Luxury Brands in New York",
    brand_all: "All Vault Pieces (30)",
    cat_tag: "Curated Vault Inventory",
    cat_title: "Available Luxury Watches & Bespoke Jewelry",
    sort_featured: "Sort by: Featured",
    sort_price_asc: "Price: Low to High",
    sort_price_desc: "Price: High to Low",
    sort_name: "Model: A-Z",
    ab_tag: "Private Horology Heritage",
    ab_title: "Unrivaled New York Expertise & Uncompromising Integrity",
    ab_p1: "With over 20 years serving elite collectors across New York City and internationally, Rod Watches & Jewelry stands as the premier destination for authentic luxury timepieces and bespoke fine jewelry.",
    ab_p2: "Adhering to strict horological standards, every watch entering our NYC vault undergoes mechanical timing calibration, serial verification, and microscopic authenticity check for total collector confidence.",
    ab_f1_title: "Private NYC Concierge Showroom",
    ab_f1_desc: "Discreet high-security private consultations in Midtown Manhattan by appointment.",
    ab_f2_title: "Peak Global Market Rates",
    ab_f2_desc: "Real-time global market monitoring ensuring maximum payout and competitive prices.",
    badge_exp: "Years of Artisan Heritage",
    rev_tag: "Verified NYC Client Reputation",
    rev_title: "What New York Collectors Say",
    rev_desc: "Real feedback from buyers, sellers, and custom jewelry clients across New York and nationwide.",
    rev1_text: `"Sold my Richard Mille RM 11-03 at their Manhattan showroom. The valuation was higher than any Diamond District offer and payment was wire transferred immediately!"`,
    rev1_role: "Verified NYC Seller",
    rev2_text: `"Acquired my Patek Philippe Nautilus with complete box and papers. The private showroom experience in New York was discrete, professional, and top tier."`,
    rev2_role: "VIP Manhattan Buyer",
    rev3_text: `"Had a custom VVS diamond Cuban chain crafted. 20+ years of NYC master craftsmanship really shows. Exceptional brilliance and solid 18k weight!"`,
    rev3_role: "Custom Jewelry Client",
    faq_tag: "Frequently Asked Questions - NYC",
    faq_title: "Everything You Need to Know",
    faq_desc: "Answers regarding authenticity, immediate cash payments in New York, insured shipping, and custom jewelry.",
    faq1_q: "How do you guarantee authenticity for watches sold in New York?",
    faq1_a: "Every timepiece undergoes a meticulous 30-point inspection by certified master watchmakers in New York. We verify internal movements, reference laser engravings, dial typography, hands, and case symmetry. Every piece comes with a lifetime authenticity money-back guarantee.",
    faq2_q: "How does immediate payout work when I sell my watch in NYC?",
    faq2_a: "Once verified at our private Manhattan showroom or via insured courier pickup in NY/NJ/CT, we issue an instant wire transfer or cash payout on the exact same day prior to final handover.",
    faq3_q: "How do Custom Made Jewelry orders work in New York?",
    faq3_a: "We begin with a personal consultation to design your piece. Our NYC master jewelers generate a detailed 3D CAD render for your review. Upon approval, we forge the piece in solid 18k gold and hand-set certified natural VVS diamonds.",
    faq4_q: "Where is your New York showroom located?",
    faq4_a: "Our high-security private showroom is located in Manhattan, NY. To maintain utmost privacy and protection for our high-net-worth clientele, all visits are scheduled strictly by appointment via WhatsApp.",
    foot_desc: "New York's premier dealer for buying, selling, and trading luxury watches and custom VVS diamond jewelry. Over 20 years of excellence serving NYC and worldwide collectors.",
    foot_nav: "Navigation",
    foot_brands: "Key Brands",
    foot_contact: "NYC Showroom & Service",
    ci_loc: "Manhattan VIP Showroom (By Appointment)",
    ci_hours: "Mon - Sat: 10:00 AM - 7:00 PM EST",
    view_details: "View Details",
    buy_inquire: "Buy / Inquire NYC"
  },
  es: {
    announcement_text: "Relojes de Lujo 100% Auténticos | Serviendo a New York y Alrededores",
    announcement_payout: "Pago en Efectivo el Mismo Día en NYC",
    nav_home: "Inicio",
    nav_catalog: "Catálogo",
    nav_jewelry: "Joyería Personalizada",
    nav_sell: "Vender y Cambiar",
    nav_process: "Proceso",
    nav_guarantee: "Nosotros",
    nav_reviews: "Reseñas",
    nav_faq: "FAQ",
    btn_quote: "Tasar Reloj",
    hero_badge: "Alta Relojería y Joyería Fina • Showroom Privado en Manhattan",
    hero_title: "Sell • Buy • Trade Authentic Luxury Timepieces",
    hero_subtitle_tag: "⌚️⏱ • Joyería Fina Personalizada VVS en NYC 💎⚜️",
    hero_desc: "El dealer principal de New York para la compra, venta y cambio de relojes de lujo pre-owned y nuevos. Especialistas en Rolex, Patek Philippe, Audemars Piguet, Richard Mille, Cartier y joyería personaliza en oro 18k con diamantes VVS y pago inmediato en efectivo.",
    hero_btn_catalog: "Explorar Catálogo Bóveda",
    hero_btn_offer: "Oferta de Compra Inmediata",
    stat_years: "Años de Trayectoria Relojera",
    stat_auth: "Autenticidad Garantizada",
    stat_payout: "Pago Inmediato en Efectivo",
    trust_1_title: "Inspección Experta Certificada",
    trust_1_desc: "Inspección mecánica y verificación serial de 30 puntos en nuestro showroom privado de NYC.",
    trust_2_title: "Mensajería Blindada NY Asegurada",
    trust_2_desc: "Despacho en transporte blindado con cobertura 100% en Manhattan, Brooklyn, Long Island, NJ y CT.",
    trust_3_title: "Ofertas Inmediatas en Efectivo",
    trust_3_desc: "Transferencia bancaria directa o pago inmediato en efectivo el mismo día en New York.",
    jewelry_title: "Creaciones en Oro de 18k y Diamantes VVS en NYC",
    jewelry_desc_1: "Eleva tu estilo con el servicio de joyería personalizada más exclusivo de New York. Con más de 20 años de experiencia artesanal en el Diamond District de NYC, diseñamos cadenas Cuban link con diamantes VVS, relojes engastados (bustdown), dijes personalizados y anillos.",
    jewelry_desc_2: "Elaborados exclusivamente con diamantes naturales VVS seleccionados y oro sólido de 18k, cada diseño se realiza exactamente a la medida de tu visión con certificación gemológica.",
    j_feat_1_title: "Diamantes Naturales Calidad VVS",
    j_feat_1_desc: "Diamantes naturales seleccionados a mano con el máximo resplandor.",
    j_feat_2_title: "Diseño 3D CAD en NYC",
    j_feat_2_desc: "Vista previa interactivas en 3D antes de forjar la pieza en oro sólido.",
    jewelry_btn: "Pedir Pieza Personalizada en NY",
    process_tag: "Experiencia VIP Transparente en NYC",
    process_title: "Cómo Comprar, Vender o Cambiar en New York",
    process_desc: "En Rod Watches & Jewelry NYC hacemos que comprar, vender o cambiar tu reloj de alta gama sea un proceso ágil, seguro y completamente confidencial.",
    p1_title: "Solicita tu Cotización Inmediata",
    p1_desc: "Envía la referencia y fotos de tu reloj en línea o habla directo con nuestro concierge de WhatsApp en NYC.",
    p2_title: "Inspección en Showroom VIP",
    p2_desc: "Visita nuestro showroom privado de máxima seguridad en Manhattan o agenda retiro blindado asegurado en NY/NJ/CT.",
    p3_title: "Pago Inmediato o Cambio (Trade-In)",
    p3_desc: "Recibe tu pago el mismo día por transferencia o efectivo, o aplica el valor de tu reloj como parte de pago.",
    sell_tag: "¿Quieres Vender o Cambiar en NY?",
    sell_title: "Compramos tu Reloj al Mejor Precio en Efectivo en NYC",
    sell_desc: "Ya sea que te encuentres en Manhattan, Brooklyn, Queens, Long Island o New Jersey, recibe una tasación profesional confidencial sin compromiso con el valor más alto del mercado.",
    sb1_title: "Pago en Efectivo el Mismo Día:",
    sb2_title: "Servicio de Trade-In en NYC:",
    sb3_title: "Consignación VIP Privada:",
    form_header: "Formulario de Tasación en New York",
    form_subheader: "Completa los detalles de tu pieza para recibir una cotización confidencial de nuestros especialistas en NYC",
    lbl_brand: "Marca del Reloj",
    opt_select_brand: "Selecciona la marca...",
    lbl_model: "Modelo y Referencia",
    lbl_acc: "Accesorios Incluidos",
    chk_box: "Caja Original",
    chk_papers: "Papeles / Tarjeta de Garantía",
    lbl_cond: "Condición Estética",
    opt_cond_mint: "Sin Usar / Mint (Estado nuevo)",
    opt_cond_exc: "Excelente (Uso ligero)",
    opt_cond_used: "Usado (Marcas normales de uso)",
    lbl_name: "Tu Nombre Completo",
    lbl_phone: "Teléfono / WhatsApp",
    lbl_notes: "Detalles Adicionales / Ubicación en NY / Precio Deseado",
    btn_send_wa: "Enviar Tasación a Concierge WhatsApp",
    brands_title: "Marcas Destacadas en New York",
    brand_all: "Todas las Piezas (30)",
    cat_tag: "Piezas de Bóveda Seleccionadas",
    cat_title: "Relojes de Lujo y Joyería Disponibles",
    sort_featured: "Ordenar por: Destacados",
    sort_price_asc: "Precio: Menor a Mayor",
    sort_price_desc: "Precio: Mayor a Menor",
    sort_name: "Modelo: A-Z",
    ab_tag: "Trayectoria y Garantía",
    ab_title: "Experiencia Incomparable en New York y Confianza Total",
    ab_p1: "Con más de 20 años de experiencia atendiendo a coleccionistas selectos en New York y a nivel internacional, Rod Watches & Jewelry es el destino principal para alta relojería y joyería fina.",
    ab_p2: "Bajo estrictos estándares relojeros, cada pieza en nuestra bóveda de NYC pasa por rigurosas pruebas mecánicas, calibración de tiempo y verificación de autenticidad.",
    ab_f1_title: "Showroom Concierge Privado en NYC",
    ab_f1_desc: "Atención discreta de máxima seguridad en Midtown Manhattan bajo cita previa.",
    ab_f2_title: "Cotización al Máximo Valor Global",
    ab_f2_desc: "Monitoreo del mercado internacional en tiempo real para garantizar los mejores precios de compra y venta.",
    badge_exp: "Años de Maestría Artesanal",
    rev_tag: "Reputación Verificada en NYC",
    rev_title: "Lo Que Dicen los Coleccionistas de New York",
    rev_desc: "Experiencias reales de compradores y vendedores de todo New York y Estados Unidos.",
    rev1_text: `"Vendí mi Richard Mille RM 11-03 en su showroom de Manhattan. La cotización superó cualquier oferta del Diamond District y la transferencia fue inmediata."`,
    rev1_role: "Vendedor Verificado en NYC",
    rev2_text: `"Compré mi Patek Philippe Nautilus con set completo. La experiencia privada en el showroom de New York fue discreta, profesional y de primer nivel mundial."`,
    rev2_role: "Comprador VIP de Manhattan",
    rev3_text: `"Mandé a hacer una cadena Cuban link de diamantes VVS a medida. ¡Más de 20 años de maestría artesanal en NYC que se notan! Diamantes impecables y oro sólido de 18k."`,
    rev3_role: "Cliente de Joyería Personalizada",
    faq_tag: "Preguntas Frecuentes - NYC",
    faq_title: "Todo lo Que Necesitas Saber",
    faq_desc: "Respuestas claras sobre garantía de autenticidad, pagos inmediatos en efectivo en New York y envíos blindados.",
    faq1_q: "¿Cómo garantizan la autenticidad de los relojes en New York?",
    faq1_a: "Cada reloj pasa por una inspección meticulosa de 30 puntos por relojeros certificados en New York. Inspeccionamos movimientos internos, seriados grabados en láser, esferas y caja. Todos los relojes incluyen garantía de autenticidad de por vida.",
    faq2_q: "¿Cómo funciona el pago inmediato cuando vendo un reloj en NYC?",
    faq2_a: "Una vez verificado el reloj en nuestro showroom privado de Manhattan o por retiro blindado en NY/NJ/CT, realizamos la transferencia bancaria o pago en efectivo el mismo día antes de la entrega final.",
    faq3_q: "¿Cómo funcionan los pedidos de Joyería Personalizada en New York?",
    faq3_a: "Iniciamos con una consulta para definir tu diseño. Nuestros maestros joyeros en NYC crean un render 3D CAD para tu aprobación antes de forjar la pieza en oro sólido de 18k y engastar diamantes VVS.",
    faq4_q: "¿Dónde se encuentra ubicado su showroom de New York?",
    faq4_a: "Nuestro showroom privado de máxima seguridad se ubica en Manhattan, NY. Para garantizar la privacidad de nuestros clientes VIP, todas las visitas se agendan estrictamente por cita previa en WhatsApp.",
    foot_desc: "El dealer líder de New York para compra, venta y cambio de relojes de lujo y joyería fina personalizada. Más de 20 años sirviendo a coleccionistas de NYC y el mundo.",
    foot_nav: "Navegación",
    foot_brands: "Marcas Principales",
    foot_contact: "Showroom & Servicio NYC",
    ci_loc: "Showroom VIP Manhattan (Cita Previa)",
    ci_hours: "Lun - Sáb: 10:00 AM - 7:00 PM EST",
    view_details: "Ver Detalles",
    buy_inquire: "Comprar / Inquirir NYC"
  }
};

const productsData = [
  {
    id: 1,
    brand: "Rolex",
    model: "Daytona 18k Yellow Gold 'John Mayer'",
    reference: "116508-0013",
    price: 48500,
    priceFormatted: "$48,500 USD",
    condition: "Mint / Unworn",
    year: "2023",
    boxPapers: "Box & Guarantee Card",
    movement: "Calibre 4130 Automatic",
    caseSize: "40 mm",
    image: "/assets/images/daytona.png",
    featured: true,
    description: "Iconic Rolex Daytona chronograph in solid 18k yellow gold with emerald green dial."
  },
  {
    id: 2,
    brand: "Rolex",
    model: "Submariner Date 'Starbucks'",
    reference: "126610LV",
    price: 15800,
    priceFormatted: "$15,800 USD",
    condition: "Unworn / Mint",
    year: "2024",
    boxPapers: "Full Set (Rolex 5yr Warranty)",
    movement: "Calibre 3235 Automatic",
    caseSize: "41 mm",
    image: "/assets/images/rolex_daytona_gold_1782682415241.png",
    featured: true,
    description: "The benchmark divers timepiece featuring a green Cerachrom ceramic bezel and black dial."
  },
  {
    id: 3,
    brand: "Rolex",
    model: "GMT-Master II 'Pepsi' Jubilee",
    reference: "126710BLRO",
    price: 21500,
    priceFormatted: "$21,500 USD",
    condition: "Unworn / Mint",
    year: "2024",
    boxPapers: "Full Set (Rolex 5yr Warranty)",
    movement: "Calibre 3285 Automatic",
    caseSize: "40 mm",
    image: "/assets/images/rolex_pepsi.png",
    featured: true,
    description: "Legendary GMT-Master II with red and blue Cerachrom ceramic bezel and Jubilee bracelet."
  },
  {
    id: 4,
    brand: "Rolex",
    model: "Day-Date 40 Olive Green 18k Everose Gold",
    reference: "228235",
    price: 54000,
    priceFormatted: "$54,000 USD",
    condition: "Mint Condition",
    year: "2023",
    boxPapers: "Full Collector Set",
    movement: "Calibre 3255 Automatic",
    caseSize: "40 mm",
    image: "/assets/images/daytona.png",
    featured: false,
    description: "The ultimate flagship President watch in proprietary 18k Everose gold with olive green dial."
  },
  {
    id: 5,
    brand: "Rolex",
    model: "Daytona Cosmograph 'Panda' White Dial",
    reference: "126500LN",
    price: 33500,
    priceFormatted: "$33,500 USD",
    condition: "Unworn / New Release",
    year: "2024",
    boxPapers: "Full Set Box & Card",
    movement: "Calibre 4131 Automatic",
    caseSize: "40 mm",
    image: "/assets/images/rolex_daytona_gold_1782682415241.png",
    featured: false,
    description: "Next-generation steel Daytona featuring white dial with black chronograph rings."
  },
  {
    id: 6,
    brand: "Rolex",
    model: "Sky-Dweller Blue Dial Oystersteel",
    reference: "326934",
    price: 22800,
    priceFormatted: "$22,800 USD",
    condition: "Excellent",
    year: "2023",
    boxPapers: "Original Box & Card",
    movement: "Calibre 9001 Annual Calendar",
    caseSize: "42 mm",
    image: "/assets/images/rolex_sky_dweller.png",
    featured: false,
    description: "Sophisticated annual calendar dual timezone watch with vibrant blue dial."
  },
  {
    id: 7,
    brand: "Patek Philippe",
    model: "Nautilus Steel Blue Dial",
    reference: "5711/1A-010",
    price: 98000,
    priceFormatted: "$98,000 USD",
    condition: "Excellent Grade",
    year: "2021",
    boxPapers: "Full Set (Box & Certificate)",
    movement: "Calibre 26-330 S C Automatic",
    caseSize: "40 mm",
    image: "/assets/images/nautilus.png",
    featured: true,
    description: "The Holy Grail of luxury sports watches. Octagonal bezel design with blue dial."
  },
  {
    id: 8,
    brand: "Patek Philippe",
    model: "Aquanaut Jumbo Travel Time",
    reference: "5164A-001",
    price: 46000,
    priceFormatted: "$46,000 USD",
    condition: "Mint Condition",
    year: "2023",
    boxPapers: "Box & Certificate",
    movement: "Calibre 324 S C FUS Automatic",
    caseSize: "40.8 mm",
    image: "/assets/images/patek_nautilus_1782682425283.png",
    featured: true,
    description: "Modern casual chic dual timezone timepiece featuring a composite tropical black strap."
  },
  {
    id: 9,
    brand: "Patek Philippe",
    model: "Nautilus Chronograph Rose Gold",
    reference: "5980/1R-001",
    price: 185000,
    priceFormatted: "$185,000 USD",
    condition: "Collector Grade",
    year: "2022",
    boxPapers: "Full Set Collector Box",
    movement: "Calibre CH 28-520 C Automatic",
    caseSize: "40.5 mm",
    image: "/assets/images/nautilus.png",
    featured: false,
    description: "Commanding 18k rose gold Nautilus Flyback Chronograph with black gradient dial."
  },
  {
    id: 10,
    brand: "Patek Philippe",
    model: "Grand Complications Perpetual Calendar",
    reference: "5270G-018",
    price: 145000,
    priceFormatted: "$145,000 USD",
    condition: "Like New",
    year: "2020",
    boxPapers: "Full Set Original Papers",
    movement: "Calibre CH 29-535 PS Q Manual",
    caseSize: "41 mm",
    image: "/assets/images/patek_nautilus_1782682425283.png",
    featured: false,
    description: "Masterpiece of high horology combining chronograph with perpetual calendar and moonphase."
  },
  {
    id: 11,
    brand: "Patek Philippe",
    model: "Calatrava Clous de Paris Rose Gold",
    reference: "6119R-001",
    price: 29500,
    priceFormatted: "$29,500 USD",
    condition: "Unworn",
    year: "2024",
    boxPapers: "Factory Sealed Set",
    movement: "Calibre 30-255 PS Manual",
    caseSize: "39 mm",
    image: "/assets/images/nautilus.png",
    featured: false,
    description: "Timeless dress watch featuring a double-row guilloché hobnail bezel."
  },
  {
    id: 12,
    brand: "Richard Mille",
    model: "RM 11-03 Flyback Chronograph",
    reference: "RM11-03 Red Carbon TPT",
    price: 225000,
    priceFormatted: "$225,000 USD",
    condition: "Mint / Collector Grade",
    year: "2022",
    boxPapers: "Full Collector Set & Papers",
    movement: "Calibre RMAC3 Skeletonized Automatic",
    caseSize: "44.5 mm x 49.9 mm",
    image: "/assets/images/rm1103.png",
    featured: true,
    description: "Ultra-exclusive Richard Mille RM 11-03 in Red Carbon TPT with skeletonized movement."
  },
  {
    id: 13,
    brand: "Richard Mille",
    model: "RM 35-02 Rafael Nadal Carbon TPT",
    reference: "RM35-02 Red Quartz",
    price: 195000,
    priceFormatted: "$195,000 USD",
    condition: "Mint Condition",
    year: "2023",
    boxPapers: "Full Set & Original Box",
    movement: "Calibre RMAL1 Automatic",
    caseSize: "44.5 mm x 49.9 mm",
    image: "/assets/images/rm35.png",
    featured: true,
    description: "Tonneau-shaped Richard Mille RM 35-02 Rafael Nadal edition in red quartz TPT."
  },
  {
    id: 14,
    brand: "Richard Mille",
    model: "RM 055 Bubba Watson White Ceramic",
    reference: "RM055 White ATZ",
    price: 280000,
    priceFormatted: "$280,000 USD",
    condition: "Collector Grade",
    year: "2021",
    boxPapers: "Full Set & Archive Papers",
    movement: "Calibre RMUL2 Skeletonized Manual",
    caseSize: "42.7 mm x 49.9 mm",
    image: "/assets/images/rm1103.png",
    featured: false,
    description: "Lightweight architectural marvel in blast-finished ATZ white ceramic."
  },
  {
    id: 15,
    brand: "Richard Mille",
    model: "RM 67-02 Extra Flat Sprint",
    reference: "RM67-02 Green/Yellow",
    price: 240000,
    priceFormatted: "$240,000 USD",
    condition: "Mint Condition",
    year: "2023",
    boxPapers: "Full Set Box & Card",
    movement: "Calibre CRMA7 Ultra-Light Automatic",
    caseSize: "38.7 mm x 47.5 mm",
    image: "/assets/images/rm35.png",
    featured: false,
    description: "Weighing just 32 grams including strap, crafted in Quartz TPT and Carbon TPT."
  },
  {
    id: 16,
    brand: "Audemars Piguet",
    model: "Royal Oak Offshore Chronograph 18k Rose Gold",
    reference: "26470OR",
    price: 54000,
    priceFormatted: "$54,000 USD",
    condition: "Like New",
    year: "2022",
    boxPapers: "Original Box & Papers",
    movement: "Calibre 3126 / 3840 Automatic",
    caseSize: "42 mm",
    image: "/assets/images/royaloak.png",
    featured: true,
    description: "Powerful 18k pink gold case with 'Méga Tapisserie' black dial pattern."
  },
  {
    id: 17,
    brand: "Audemars Piguet",
    model: "Royal Oak Selfwinding Blue Dial",
    reference: "15510ST",
    price: 38500,
    priceFormatted: "$38,500 USD",
    condition: "Mint Condition",
    year: "2023",
    boxPapers: "Full Set Box & Card",
    movement: "Calibre 4302 Automatic",
    caseSize: "41 mm",
    image: "/assets/images/ap_royal_oak_1782682436696.png",
    featured: true,
    description: "Stainless steel case with integrated bracelet and iconic 'Grande Tapisserie' blue dial."
  },
  {
    id: 18,
    brand: "Audemars Piguet",
    model: "Royal Oak Chronograph '50th Anniversary'",
    reference: "26240OR",
    price: 72000,
    priceFormatted: "$72,000 USD",
    condition: "Unworn / Special Edition",
    year: "2022",
    boxPapers: "Full 50th Anniversary Set",
    movement: "Calibre 4401 Flyback Chronograph",
    caseSize: "41 mm",
    image: "/assets/images/royaloak.png",
    featured: false,
    description: "Exclusive 50th Anniversary edition in 18k rose gold."
  },
  {
    id: 19,
    brand: "Audemars Piguet",
    model: "Royal Oak Concept Flying Tourbillon",
    reference: "26589IO",
    price: 198000,
    priceFormatted: "$198,000 USD",
    condition: "Collector Grade",
    year: "2023",
    boxPapers: "Full Special Box & Papers",
    movement: "Calibre 2954 Manual Tourbillon",
    caseSize: "44 mm",
    image: "/assets/images/ap_royal_oak_1782682436696.png",
    featured: false,
    description: "Futuristic titanium case with GMT selector and openworked flying tourbillon."
  },
  {
    id: 20,
    brand: "Audemars Piguet",
    model: "Code 11.59 Chronograph Rose Gold",
    reference: "26393OR",
    price: 32000,
    priceFormatted: "$32,000 USD",
    condition: "Mint Condition",
    year: "2024",
    boxPapers: "Factory Full Set",
    movement: "Calibre 4401 Automatic Flyback",
    caseSize: "41 mm",
    image: "/assets/images/royaloak.png",
    featured: false,
    description: "Architectural 18k rose gold case with octagonal mid-section."
  },
  {
    id: 21,
    brand: "Cartier",
    model: "Santos de Cartier Large",
    reference: "WSSA0018",
    price: 8400,
    priceFormatted: "$8,400 USD",
    condition: "Mint Condition",
    year: "2024",
    boxPapers: "Factory Full Set",
    movement: "Calibre 1847 MC Automatic",
    caseSize: "39.8 mm",
    image: "/assets/images/santos.png",
    featured: true,
    description: "Classic aviation icon in stainless steel featuring the QuickSwitch bracelet system."
  },
  {
    id: 22,
    brand: "Cartier",
    model: "Santos Skeleton ADLC Black",
    reference: "WHSA0009",
    price: 28000,
    priceFormatted: "$28,000 USD",
    condition: "Unworn",
    year: "2024",
    boxPapers: "Full Set Box & Papers",
    movement: "Calibre 9612 MC Manual",
    caseSize: "39.8 mm",
    image: "/assets/images/cartier_santos_1782682449056.png",
    featured: true,
    description: "Avant-garde skeleton movement in sleek black ADLC coating."
  },
  {
    id: 23,
    brand: "Cartier",
    model: "Tank Louis Cartier 18k Yellow Gold",
    reference: "WGTA0011",
    price: 13200,
    priceFormatted: "$13,200 USD",
    condition: "Mint Condition",
    year: "2023",
    boxPapers: "Full Set Box & Certificate",
    movement: "Calibre 1917 MC Manual",
    caseSize: "33.7 mm x 25.5 mm",
    image: "/assets/images/santos.png",
    featured: false,
    description: "Refined Parisian sophistication in solid 18k yellow gold with sapphire crown."
  },
  {
    id: 24,
    brand: "Cartier",
    model: "Ballon Bleu de Cartier 42mm",
    reference: "WSBB0040",
    price: 7800,
    priceFormatted: "$7,800 USD",
    condition: "Excellent",
    year: "2023",
    boxPapers: "Box & Guarantee Card",
    movement: "Calibre 1847 MC Automatic",
    caseSize: "42 mm",
    image: "/assets/images/cartier_santos_1782682449056.png",
    featured: false,
    description: "Floating cabochon design with guilloché silver dial."
  },
  {
    id: 25,
    brand: "Hublot",
    model: "Big Bang Unico Titanium Ceramic",
    reference: "441.NM.1170.RX",
    price: 14200,
    priceFormatted: "$14,200 USD",
    condition: "Mint Condition",
    year: "2023",
    boxPapers: "Full Set Electronic Warranty",
    movement: "Calibre HUB1280 Unico Flyback",
    caseSize: "42 mm",
    image: "/assets/images/hublot_bigbang.png",
    featured: false,
    description: "Industrial luxury fusion featuring satin-finished titanium case and ceramic bezel."
  },
  {
    id: 26,
    brand: "Hublot",
    model: "Classic Fusion Chronograph Titanium",
    reference: "521.NX.1171.LR",
    price: 8900,
    priceFormatted: "$8,900 USD",
    condition: "Excellent",
    year: "2022",
    boxPapers: "Box & Papers",
    movement: "Calibre HUB1143 Automatic",
    caseSize: "45 mm",
    image: "/assets/images/hublot_bigbang.png",
    featured: false,
    description: "Sleek matte black dial with titanium case and alligator leather-rubber strap."
  },
  {
    id: 27,
    brand: "Omega",
    model: "Speedmaster Moonwatch Professional",
    reference: "310.30.42.50.01.001",
    price: 7600,
    priceFormatted: "$7,600 USD",
    condition: "Unworn",
    year: "2024",
    boxPapers: "Full Set Master Chronometer",
    movement: "Co-Axial Master Chronometer 3861",
    caseSize: "42 mm",
    image: "/assets/images/omega_speedmaster.png",
    featured: false,
    description: "The legendary chronograph flight-qualified by NASA for all space missions."
  },
  {
    id: 28,
    brand: "Omega",
    model: "Seamaster Diver 300M Master Chronometer",
    reference: "210.30.42.20.01.001",
    price: 5400,
    priceFormatted: "$5,400 USD",
    condition: "Mint Condition",
    year: "2023",
    boxPapers: "Full Cards & Box",
    movement: "Omega Calibre 8800 Automatic",
    caseSize: "42 mm",
    image: "/assets/images/omega_speedmaster.png",
    featured: false,
    description: "Professional diving watch with laser-engraved wave dial and ceramic bezel."
  },
  {
    id: 29,
    brand: "Jewelry",
    model: "Custom Diamond Cuban Link Set 💎⚜️",
    reference: "Bespoke Custom Made",
    price: 32000,
    priceFormatted: "$32,000 USD",
    condition: "New / Bespoke Craft",
    year: "2026",
    boxPapers: "Certified Gemological Valuation",
    movement: "Solid 18k Gold & VVS Diamonds",
    caseSize: "Custom Length",
    image: "/assets/images/custom_jewelry.png",
    featured: true,
    description: "Handcrafted 18k solid gold iced-out Cuban link chain and diamond bracelet set."
  },
  {
    id: 30,
    brand: "Jewelry",
    model: "Custom Diamond Bustdown Luxury Watch & Pendant Set 💎",
    reference: "Bespoke VIP Order",
    price: 45000,
    priceFormatted: "$45,000 USD",
    condition: "New / Custom Paved",
    year: "2026",
    boxPapers: "Gemological Appraisal Certificate",
    movement: "Automatic Swiss & VVS Diamonds",
    caseSize: "Full Pave Setting",
    image: "/assets/images/custom_jewelry.png",
    featured: true,
    description: "Full VVS diamond pave bustdown custom watch accompanied by 18k solid gold diamond pendant."
  }
];

export default function Home() {
  const [lang, setLang] = useState("en");
  const [currentBrandFilter, setCurrentBrandFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentSort, setCurrentSort] = useState("default");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchActive, setSearchActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const t = translations[lang];

  // Filter & Sort Products
  let filteredProducts = productsData.filter(product => {
    const matchesBrand = currentBrandFilter === "all" || product.brand.toLowerCase() === currentBrandFilter.toLowerCase();
    const matchesSearch = product.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.reference.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesBrand && matchesSearch;
  });

  if (currentSort === "price-asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (currentSort === "price-desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (currentSort === "name-asc") {
    filteredProducts.sort((a, b) => a.model.localeCompare(b.model));
  }

  const handleValuationSubmit = (e) => {
    e.preventDefault();
    const brand = e.target.watchBrand.value;
    const model = e.target.watchModel.value;
    const hasBox = e.target.hasBox.checked ? (lang === "en" ? "Yes" : "Sí") : "No";
    const hasPapers = e.target.hasPapers.checked ? (lang === "en" ? "Yes" : "Sí") : "No";
    const condition = e.target.watchCondition.value;
    const name = e.target.clientName.value;
    const phone = e.target.clientPhone.value;
    const notes = e.target.clientNotes ? e.target.clientNotes.value.trim() : "";

    const isEn = lang === "en";

    let message = isEn ?
      `Hello Rod Watches! I have submitted a valuation request via your Next.js website form:%0A%0A` +
      `⌚ *Brand:* ${brand}%0A` +
      `📌 *Model:* ${model}%0A` +
      `📦 *Original Box:* ${hasBox}%0A` +
      `📜 *Papers/Warranty:* ${hasPapers}%0A` +
      `✨ *Condition:* ${condition}%0A%0A` +
      `👤 *Client Name:* ${name}%0A` +
      `📞 *Phone/WhatsApp:* ${phone}`
      :
      `Hola Rod Watches! He enviado una solicitud de tasación a través de su sitio Next.js:%0A%0A` +
      `⌚ *Marca:* ${brand}%0A` +
      `📌 *Modelo:* ${model}%0A` +
      `📦 *Caja Original:* ${hasBox}%0A` +
      `📜 *Papeles/Garantía:* ${hasPapers}%0A` +
      `✨ *Estado:* ${condition}%0A%0A` +
      `👤 *Nombre:* ${name}%0A` +
      `📞 *Contacto:* ${phone}`;

    if (notes) {
      message += `%0A📝 *${isEn ? "Notes" : "Notas"}:* ${encodeURIComponent(notes)}`;
    }

    window.open(`https://wa.me/19177631282?text=${message}`, "_blank");
  };

  return (
    <div>
      {/* Announcement Bar */}
      <div class="announcement-bar">
        <div class="container announcement-content">
          <span><i class="fa-solid fa-shield-halved"></i> {t.announcement_text}</span>
          <div class="announcement-links">
            <span><i class="fa-solid fa-bolt"></i> {t.announcement_payout}</span>
            <a href="https://wa.me/19177631282" target="_blank" class="wa-quick-link"><i class="fa-brands fa-whatsapp"></i> VIP Support: +1 (917) 763-1282</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header class="main-header" id="header">
        <div class="container header-container">
          <a href="#" class="brand-logo">
            <span class="logo-title">ROD</span>
            <span class="logo-subtitle">WATCHES & JEWELRY</span>
          </a>

          <nav class={`nav-menu ${mobileMenuOpen ? 'active' : ''}`} id="navMenu">
            <a href="#inicio" class="nav-link active">{t.nav_home}</a>
            <a href="#catalogo" class="nav-link">{t.nav_catalog}</a>
            <a href="#jewelry" class="nav-link">{t.nav_jewelry}</a>
            <a href="#vender" class="nav-link highlight-link">{t.nav_sell}</a>
            <a href="#proceso" class="nav-link">{t.nav_process}</a>
            <a href="#nosotros" class="nav-link">{t.nav_guarantee}</a>
            <a href="#resenas" class="nav-link">{t.nav_reviews}</a>
            <a href="#faq" class="nav-link">{t.nav_faq}</a>
          </nav>

          <div class="header-actions">
            <button class="lang-toggle-btn" onClick={() => setLang(lang === "en" ? "es" : "en")} title="Switch Language">
              <i class="fa-solid fa-globe"></i> <span>{lang === "en" ? "ES" : "EN"}</span>
            </button>
            <button class="icon-btn" onClick={() => setSearchActive(!searchActive)} aria-label="Search"><i class="fa-solid fa-magnifying-glass"></i></button>
            <a href="#vender" class="btn btn-gold-outline header-cta">{t.btn_quote}</a>
            <button class="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menu"><i class="fa-solid fa-bars"></i></button>
          </div>
        </div>

        {/* Search Overlay */}
        <div class={`search-overlay ${searchActive ? 'active' : ''}`}>
          <div class="container search-container">
            <i class="fa-solid fa-magnifying-glass" style={{ color: 'var(--color-gold)' }}></i>
            <input 
              type="text" 
              placeholder={lang === 'en' ? "Search by model, reference or brand..." : "Buscar por modelo, referencia o marca..."} 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button id="closeSearchBtn" onClick={() => setSearchActive(false)}><i class="fa-solid fa-xmark"></i></button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section class="hero-section" id="inicio">
        <video class="hero-video" autoPlay loop muted playsInline poster="/assets/images/daytona.png">
          <source src="/assets/images/hero-bg.mp4" type="video/mp4" />
        </video>
        <div class="hero-overlay"></div>

        <div class="container hero-content">
          <div class="hero-badge"><i class="fa-solid fa-award"></i> <span>{t.hero_badge}</span></div>
          <h1 class="hero-title">{t.hero_title}</h1>
          <p class="hero-subtitle-tag">{t.hero_subtitle_tag}</p>
          <p class="hero-description">{t.hero_desc}</p>
          <div class="hero-buttons">
            <a href="#catalogo" class="btn btn-gold"><i class="fa-solid fa-compass"></i> {t.hero_btn_catalog}</a>
            <a href="#vender" class="btn btn-glass"><i class="fa-solid fa-comments-dollar"></i> {t.hero_btn_offer}</a>
          </div>

          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-number">20+</span>
              <span class="stat-label">{t.stat_years}</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-number">100%</span>
              <span class="stat-label">{t.stat_auth}</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-number">SAME-DAY</span>
              <span class="stat-label">{t.stat_payout}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section class="trust-bar">
        <div class="container">
          <div class="trust-grid">
            <div class="trust-card">
              <i class="fa-solid fa-shield-halved"></i>
              <div>
                <h3>{t.trust_1_title}</h3>
                <p>{t.trust_1_desc}</p>
              </div>
            </div>
            <div class="trust-card">
              <i class="fa-solid fa-truck-fast"></i>
              <div>
                <h3>{t.trust_2_title}</h3>
                <p>{t.trust_2_desc}</p>
              </div>
            </div>
            <div class="trust-card">
              <i class="fa-solid fa-hand-holding-dollar"></i>
              <div>
                <h3>{t.trust_3_title}</h3>
                <p>{t.trust_3_desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Made Jewelry Section */}
      <section class="jewelry-section" id="jewelry">
        <div class="container">
          <div class="jewelry-grid">
            <div class="jewelry-content">
              <span class="section-tag">{t.hero_subtitle_tag}</span>
              <h2 class="section-title">{t.jewelry_title}</h2>
              <p>{t.jewelry_desc_1}</p>
              <p>{t.jewelry_desc_2}</p>
              
              <div class="jewelry-features">
                <div class="j-feat">
                  <i class="fa-solid fa-gem"></i>
                  <div>
                    <h4>{t.j_feat_1_title}</h4>
                    <p>{t.j_feat_1_desc}</p>
                  </div>
                </div>
                <div class="j-feat">
                  <i class="fa-solid fa-cube"></i>
                  <div>
                    <h4>{t.j_feat_2_title}</h4>
                    <p>{t.j_feat_2_desc}</p>
                  </div>
                </div>
              </div>

              <a href="https://wa.me/19177631282?text=Hello%20Rod%20Watches,%20I%20am%20interested%20in%20a%20Custom%20Made%20Jewelry%20piece." target="_blank" class="btn btn-gold margin-top-lg">
                <i class="fa-brands fa-whatsapp"></i> <span>{t.jewelry_btn}</span>
              </a>
            </div>

            <div class="jewelry-image-card">
              <img src="/assets/images/custom_jewelry.png" alt="Custom Diamond Jewelry" />
              <span class="jewelry-badge">Bespoke Artisanship</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Filter Strip */}
      <section class="brands-strip">
        <div class="container">
          <p class="section-subtitle center">{t.brands_title}</p>
          <div class="brands-grid">
            {["all", "Rolex", "Patek Philippe", "Richard Mille", "Audemars Piguet", "Cartier", "Hublot", "Omega", "Jewelry"].map(b => (
              <button 
                key={b} 
                class={`brand-chip ${currentBrandFilter === b ? 'active' : ''}`}
                onClick={() => setCurrentBrandFilter(b)}
              >
                {b === "all" ? t.brand_all : (b === "Jewelry" ? "Custom Jewelry 💎" : b)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section class="catalog-section" id="catalogo">
        <div class="container">
          <div class="section-header">
            <div>
              <span class="section-tag">{t.cat_tag}</span>
              <h2 class="section-title">{t.cat_title}</h2>
            </div>
            <div class="catalog-controls">
              <select value={currentSort} onChange={(e) => setCurrentSort(e.target.value)} class="custom-select">
                <option value="default">{t.sort_featured}</option>
                <option value="price-asc">{t.sort_price_asc}</option>
                <option value="price-desc">{t.sort_price_desc}</option>
                <option value="name-asc">{t.sort_name}</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div class="products-grid" id="productsGrid">
            {filteredProducts.length === 0 ? (
              <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '4rem 1rem' }}>
                <i class="fa-solid fa-clock-rotate-left" style={{ fontSize: '3rem', color: 'var(--color-gold)', marginBottom: '1rem' }}></i>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', marginBottom: '0.5rem', color: '#ffffff' }}>{lang === 'en' ? 'No items found' : 'No se encontraron piezas'}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{lang === 'en' ? 'Try adjusting your search terms or selecting another brand.' : 'Intenta buscar con otros términos o cambia el filtro.'}</p>
              </div>
            ) : (
              filteredProducts.map(product => (
                <div key={product.id} class="product-card">
                  <div class="product-image-container">
                    <img src={product.image} alt={`${product.brand} ${product.model}`} />
                    <span class="product-badge">{product.condition}</span>
                  </div>
                  <div class="product-info">
                    <span class="product-brand">{product.brand}</span>
                    <h3 class="product-title">{product.model}</h3>
                    <p class="product-specs">Ref. {product.reference} &bull; {product.year} &bull; {product.caseSize}</p>
                    <div class="product-footer">
                      <span class="product-price">{product.priceFormatted}</span>
                      <div class="product-actions">
                        <button class="btn btn-gold-outline view-details-btn" onClick={() => setSelectedProduct(product)} title={t.view_details}><i class="fa-solid fa-eye"></i></button>
                        <a 
                          href={`https://wa.me/19177631282?text=${encodeURIComponent((lang === 'en' ? 'Hello Rod Watches, I am interested in acquiring the ' : 'Hola Rod Watches, estoy interesado en el ') + product.brand + ' ' + product.model + ' (Ref. ' + product.reference + ')')}`} 
                          target="_blank" 
                          class="btn btn-gold" 
                          title={t.buy_inquire}
                        >
                          <i class="fa-brands fa-whatsapp"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Valuation Web Form Section */}
      <section class="sell-section" id="vender">
        <div class="container">
          <div class="sell-wrapper">
            <div class="sell-info">
              <span class="section-tag">{t.sell_tag}</span>
              <h2 class="section-title">{t.sell_title}</h2>
              <p class="sell-description">{t.sell_desc}</p>

              <ul class="sell-benefits">
                <li><i class="fa-solid fa-circle-check"></i> <strong>{t.sb1_title}</strong> Direct wire transfer or instant cash immediately.</li>
                <li><i class="fa-solid fa-circle-check"></i> <strong>{t.sb2_title}</strong> Trade your current watch toward upgrading to any piece in inventory.</li>
                <li><i class="fa-solid fa-circle-check"></i> <strong>{t.sb3_title}</strong> Global private collector network for peak returns.</li>
              </ul>
            </div>

            <div class="appraisal-card">
              <div class="appraisal-header">
                <h3><i class="fa-solid fa-file-signature"></i> <span>{t.form_header}</span></h3>
                <p>{t.form_subheader}</p>
              </div>

              <form onSubmit={handleValuationSubmit} class="valuation-form">
                <div class="form-group-grid">
                  <div>
                    <label htmlFor="watchBrand">{t.lbl_brand}</label>
                    <select id="watchBrand" name="watchBrand" required class="form-input">
                      <option value="">{t.opt_select_brand}</option>
                      <option value="Rolex">Rolex</option>
                      <option value="Patek Philippe">Patek Philippe</option>
                      <option value="Richard Mille">Richard Mille</option>
                      <option value="Audemars Piguet">Audemars Piguet</option>
                      <option value="Cartier">Cartier</option>
                      <option value="Omega">Omega</option>
                      <option value="Jewelry">Custom Jewelry 💎</option>
                      <option value="Other">Other Luxury Brand</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="watchModel">{t.lbl_model}</label>
                    <input type="text" id="watchModel" name="watchModel" placeholder="e.g. Submariner 126610LN..." required class="form-input" />
                  </div>
                </div>

                <div class="form-group-grid">
                  <div>
                    <label htmlFor="watchCondition">{t.lbl_cond}</label>
                    <select id="watchCondition" name="watchCondition" class="form-input">
                      <option value="Unworn / Mint">{t.opt_cond_mint}</option>
                      <option value="Excellent">{t.opt_cond_exc}</option>
                      <option value="Pre-Owned">{t.opt_cond_used}</option>
                    </select>
                  </div>
                  <div>
                    <label>{t.lbl_acc}</label>
                    <div class="checkbox-group">
                      <label class="checkbox-card">
                        <input type="checkbox" id="hasBox" name="hasBox" defaultChecked />
                        <span><i class="fa-solid fa-box"></i> <span>{t.chk_box}</span></span>
                      </label>
                      <label class="checkbox-card">
                        <input type="checkbox" id="hasPapers" name="hasPapers" defaultChecked />
                        <span><i class="fa-solid fa-file-contract"></i> <span>{t.chk_papers}</span></span>
                      </label>
                    </div>
                  </div>
                </div>

                <div class="form-group-grid">
                  <div>
                    <label htmlFor="clientName">{t.lbl_name}</label>
                    <input type="text" id="clientName" name="clientName" placeholder="e.g. Michael Vance" required class="form-input" />
                  </div>
                  <div>
                    <label htmlFor="clientPhone">{t.lbl_phone}</label>
                    <input type="tel" id="clientPhone" name="clientPhone" placeholder="+1 (555) 000-0000" required class="form-input" />
                  </div>
                </div>

                <label htmlFor="clientNotes">{t.lbl_notes}</label>
                <textarea id="clientNotes" name="clientNotes" rows={3} placeholder="e.g. Year 2023, full set, asking for fast cash payout..." class="form-input form-textarea"></textarea>

                <button type="submit" class="btn btn-gold btn-block margin-top-sm"><i class="fa-brands fa-whatsapp"></i> <span>{t.btn_send_wa}</span></button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section class="process-section" id="proceso">
        <div class="container">
          <div class="text-center">
            <span class="section-tag">{t.process_tag}</span>
            <h2 class="section-title">{t.process_title}</h2>
            <p class="section-desc">{t.process_desc}</p>
          </div>

          <div class="process-grid">
            <div class="process-card">
              <div class="process-step-num">01</div>
              <i class="fa-solid fa-laptop-file process-icon"></i>
              <h3>{t.p1_title}</h3>
              <p>{t.p1_desc}</p>
            </div>
            <div class="process-card">
              <div class="process-step-num">02</div>
              <i class="fa-solid fa-magnifying-glass-location process-icon"></i>
              <h3>{t.p2_title}</h3>
              <p>{t.p2_desc}</p>
            </div>
            <div class="process-card">
              <div class="process-step-num">03</div>
              <i class="fa-solid fa-wallet process-icon"></i>
              <h3>{t.p3_title}</h3>
              <p>{t.p3_desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Guarantee Section */}
      <section class="about-section" id="nosotros">
        <div class="container">
          <div class="about-grid">
            <div class="about-image-card">
              <div class="image-wrapper">
                <img src="/assets/images/daytona.png" alt="Rod Watches VIP Showroom" />
              </div>
              <div class="experience-badge">
                <span class="exp-years">20+</span>
                <span class="exp-text">{t.badge_exp}</span>
              </div>
            </div>

            <div class="about-content">
              <span class="section-tag">{t.ab_tag}</span>
              <h2 class="section-title">{t.ab_title}</h2>
              <p>{t.ab_p1}</p>
              <p>{t.ab_p2}</p>

              <div class="about-features">
                <div class="feat-item">
                  <i class="fa-solid fa-user-shield"></i>
                  <div>
                    <h4>{t.ab_f1_title}</h4>
                    <p>{t.ab_f1_desc}</p>
                  </div>
                </div>
                <div class="feat-item">
                  <i class="fa-solid fa-chart-line"></i>
                  <div>
                    <h4>{t.ab_f2_title}</h4>
                    <p>{t.ab_f2_desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section class="reviews-section" id="resenas">
        <div class="container text-center">
          <span class="section-tag">{t.rev_tag}</span>
          <h2 class="section-title">{t.rev_title}</h2>
          <p class="section-desc">{t.rev_desc}</p>

          <div class="reviews-grid">
            <div class="review-card">
              <div class="review-stars">
                <i class="fa-solid fa-star gold-star"></i><i class="fa-solid fa-star gold-star"></i><i class="fa-solid fa-star gold-star"></i><i class="fa-solid fa-star gold-star"></i><i class="fa-solid fa-star gold-star"></i>
              </div>
              <p class="review-text">{t.rev1_text}</p>
              <div class="review-author">
                <strong>Marcus Vance</strong>
                <span>{t.rev1_role}</span>
              </div>
            </div>
            <div class="review-card">
              <div class="review-stars">
                <i class="fa-solid fa-star gold-star"></i><i class="fa-solid fa-star gold-star"></i><i class="fa-solid fa-star gold-star"></i><i class="fa-solid fa-star gold-star"></i><i class="fa-solid fa-star gold-star"></i>
              </div>
              <p class="review-text">{t.rev2_text}</p>
              <div class="review-author">
                <strong>David L. Sterling</strong>
                <span>{t.rev2_role}</span>
              </div>
            </div>
            <div class="review-card">
              <div class="review-stars">
                <i class="fa-solid fa-star gold-star"></i><i class="fa-solid fa-star gold-star"></i><i class="fa-solid fa-star gold-star"></i><i class="fa-solid fa-star gold-star"></i><i class="fa-solid fa-star gold-star"></i>
              </div>
              <p class="review-text">{t.rev3_text}</p>
              <div class="review-author">
                <strong>Alexander K.</strong>
                <span>{t.rev3_role}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section class="faq-section" id="faq">
        <div class="container">
          <div class="text-center">
            <span class="section-tag">{t.faq_tag}</span>
            <h2 class="section-title">{t.faq_title}</h2>
            <p class="section-desc">{t.faq_desc}</p>
          </div>

          <div class="faq-accordion">
            {[
              { id: 1, q: t.faq1_q, a: t.faq1_a },
              { id: 2, q: t.faq2_q, a: t.faq2_a },
              { id: 3, q: t.faq3_q, a: t.faq3_a },
              { id: 4, q: t.faq4_q, a: t.faq4_a }
            ].map(faq => (
              <div key={faq.id} class={`faq-item ${activeFaq === faq.id ? 'active' : ''}`}>
                <button class="faq-question" onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}>
                  <span>{faq.q}</span>
                  <i class="fa-solid fa-chevron-down"></i>
                </button>
                <div class="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer class="main-footer">
        <div class="container footer-grid">
          <div class="brand-col">
            <div class="brand-logo">
              <span class="logo-title">ROD</span>
              <span class="logo-subtitle">WATCHES & JEWELRY</span>
            </div>
            <p>{t.foot_desc}</p>
            <div class="social-links">
              <a href="https://www.instagram.com/rod_watches_jewerly/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
              <a href="https://wa.me/19177631282" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
            </div>
          </div>

          <div class="footer-col">
            <h4>{t.foot_nav}</h4>
            <ul>
              <li><a href="#inicio">{t.nav_home}</a></li>
              <li><a href="#catalogo">{t.nav_catalog}</a></li>
              <li><a href="#jewelry">{t.nav_jewelry}</a></li>
              <li><a href="#vender">{t.nav_sell}</a></li>
              <li><a href="#nosotros">{t.nav_guarantee}</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>{t.foot_brands}</h4>
            <ul>
              <li><a href="#catalogo">Rolex</a></li>
              <li><a href="#catalogo">Patek Philippe</a></li>
              <li><a href="#catalogo">Richard Mille</a></li>
              <li><a href="#catalogo">Audemars Piguet</a></li>
              <li><a href="#catalogo">Cartier</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>{t.foot_contact}</h4>
            <ul class="contact-info">
              <li><i class="fa-solid fa-location-dot"></i> <span>{t.ci_loc}</span></li>
              <li><i class="fa-brands fa-whatsapp"></i> +1 (917) 763-1282</li>
              <li><i class="fa-solid fa-envelope"></i> contact@rodwatches.com</li>
              <li><i class="fa-solid fa-clock"></i> <span>{t.ci_hours}</span></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="container copyright-content">
            <p>&copy; 2026 Rod Watches & Jewelry. All rights reserved. Not affiliated directly with mentioned brands.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Action Button */}
      <a href="https://wa.me/19177631282?text=Hello%20Rod%20Watches,%20I%20would%20like%20information%20about%20your%20luxury%20timepieces%20and%20custom%20jewelry." target="_blank" class="floating-wa" aria-label="WhatsApp Contact">
        <i class="fa-brands fa-whatsapp"></i>
      </a>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div class="modal-backdrop active" onClick={() => setSelectedProduct(null)}>
          <div class="modal-content" onClick={(e) => e.stopPropagation()}>
            <button class="modal-close" onClick={() => setSelectedProduct(null)}><i class="fa-solid fa-xmark"></i></button>
            <div class="modal-body">
              <div class="modal-image">
                <img src={selectedProduct.image} alt={`${selectedProduct.brand} ${selectedProduct.model}`} />
              </div>
              <div class="modal-details">
                <span class="product-brand">{selectedProduct.brand}</span>
                <h3>{selectedProduct.model}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{lang === 'en' ? 'Reference' : 'Referencia'}: <strong>{selectedProduct.reference}</strong></p>

                <div class="modal-price">{selectedProduct.priceFormatted}</div>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>{selectedProduct.description}</p>

                <table class="modal-specs-table">
                  <tbody>
                    <tr>
                      <td><i class="fa-solid fa-shield"></i> {lang === 'en' ? 'Condition' : 'Condición'}:</td>
                      <td><strong>{selectedProduct.condition}</strong></td>
                    </tr>
                    <tr>
                      <td><i class="fa-solid fa-calendar"></i> {lang === 'en' ? 'Year' : 'Año'}:</td>
                      <td><strong>{selectedProduct.year}</strong></td>
                    </tr>
                    <tr>
                      <td><i class="fa-solid fa-box-archive"></i> {lang === 'en' ? 'Includes' : 'Incluye'}:</td>
                      <td><strong>{selectedProduct.boxPapers}</strong></td>
                    </tr>
                    <tr>
                      <td><i class="fa-solid fa-gear"></i> {lang === 'en' ? 'Movement' : 'Movimiento'}:</td>
                      <td><strong>{selectedProduct.movement}</strong></td>
                    </tr>
                    <tr>
                      <td><i class="fa-solid fa-ruler-combined"></i> {lang === 'en' ? 'Size' : 'Tamaño'}:</td>
                      <td><strong>{selectedProduct.caseSize}</strong></td>
                    </tr>
                  </tbody>
                </table>

                <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                  <a 
                    href={`https://wa.me/19177631282?text=${encodeURIComponent((lang === 'en' ? 'Hello Rod Watches, I wish to inquire / buy the ' : 'Hola Rod Watches, deseo inquirir / comprar el ') + selectedProduct.brand + ' ' + selectedProduct.model + ' (Ref. ' + selectedProduct.reference + ')')}`} 
                    target="_blank" 
                    class="btn btn-gold btn-block" 
                    style={{ fontSize: '1rem' }}
                  >
                    <i class="fa-brands fa-whatsapp"></i> {lang === 'en' ? 'Inquire on WhatsApp' : 'Iniciar Compra por WhatsApp'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
