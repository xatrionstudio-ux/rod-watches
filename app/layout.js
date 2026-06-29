import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "Rod Watches & Jewelry NYC | Buy, Sell & Trade Luxury Watches New York",
  description: "Premier New York luxury watch dealer for buying, selling, and trading pre-owned Rolex, Patek Philippe, Audemars Piguet, Richard Mille, Cartier & custom VVS diamond jewelry. Same-day cash payouts in NYC, Manhattan, Brooklyn, Long Island & NJ.",
  keywords: [
    "Luxury watch dealer New York",
    "Sell Rolex NYC",
    "Buy Patek Philippe Manhattan",
    "Custom diamond jewelry New York",
    "Trade luxury watches NY",
    "Audemars Piguet dealer Brooklyn",
    "Watch appraisal Long Island",
    "Same day watch cash payout NYC"
  ],
  authors: [{ name: "Rod Watches & Jewelry" }],
  creator: "Rod Watches & Jewelry",
  publisher: "Rod Watches & Jewelry",
  openGraph: {
    title: "Rod Watches & Jewelry NYC | Premier Luxury Watch & Custom Jewelry Dealer",
    description: "Buy, sell, and trade authentic luxury timepieces & handcrafted VVS custom jewelry in New York. Immediate payout, private showroom, over 20 years of experience.",
    url: "https://rodwatches.com",
    siteName: "Rod Watches & Jewelry",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rod Watches & Jewelry NYC | Luxury Timepieces & Custom Jewelry",
    description: "Top market prices for Rolex, Patek, Audemars Piguet & Richard Mille in New York & tri-state area.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "JewelryStore",
  "name": "Rod Watches & Jewelry",
  "image": "https://rodwatches.com/assets/images/daytona.png",
  "telephone": "+1-917-763-1282",
  "email": "contact@rodwatches.com",
  "url": "https://rodwatches.com",
  "priceRange": "$$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Private VIP Showroom",
    "addressLocality": "New York",
    "addressRegion": "NY",
    "postalCode": "10036",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.758896,
    "longitude": -73.985130
  },
  "areaServed": [
    "New York City",
    "Manhattan",
    "Brooklyn",
    "Queens",
    "Long Island",
    "Westchester",
    "New Jersey",
    "Connecticut"
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "10:00",
    "closes": "19:00"
  },
  "sameAs": [
    "https://www.instagram.com/rod_watches_jewerly/"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;600;700;800&family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

