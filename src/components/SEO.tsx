import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
  schema?: object | object[];
  image?: string;
}

const SITE = "https://ykcandcompany.com";

export const SEO = ({ title, description, keywords, path = "/", schema, image = "/og-image.jpg" }: SEOProps) => {
  const url = `${SITE}${path}`;
  const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
      ))}
    </Helmet>
  );
};

export const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "YKC & Company",
  url: SITE,
  logo: `${SITE}/logo.png`,
  sameAs: [
    "https://linkedin.com/company/ykc-company",
    "https://instagram.com/ykcandcompany",
    "https://x.com/ykcandcompany",
  ],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "YKC & Company — Chartered Accountants",
  image: `${SITE}/og-image.jpg`,
  url: SITE,
  telephone: "+91-9999999999",
  priceRange: "₹₹",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Mira Road (East)",
      addressLocality: "Thane",
      addressRegion: "Maharashtra",
      postalCode: "401107",
      addressCountry: "IN",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "12th Floor, 1209, Addore Aspire, Gulbai Tekra Road",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      postalCode: "380015",
      addressCountry: "IN",
    },
  ],
  geo: { "@type": "GeoCoordinates", latitude: 19.2813, longitude: 72.8546 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "19:00",
    },
  ],
  sameAs: orgSchema.sameAs,
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: `${SITE}${it.url}`,
  })),
});
