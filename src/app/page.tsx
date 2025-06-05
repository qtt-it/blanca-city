import { MainPage } from "@/screens";
import type { Graph } from "schema-dts";
import { ConstantConfig } from "@/common/config/constant.config";

export const metadata = ConstantConfig.DEFAULT_METADATA();

export const revalidate = 3600; // invalidate every hour


export default function Home() {
  const graph: Graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        url: ConstantConfig.BASE_URL,
        name: `Trang chủ - ${ConstantConfig.DEFAULT_AUTHOR}`,
        description: ConstantConfig.DEFAULT_DESCRIPTION,
        publisher: {
          "@type": "Organization",
          name: ConstantConfig.DEFAULT_AUTHOR,
          logo: {
            "@type": "ImageObject",
            url: ConstantConfig.DEFAULT_LOGO,
          },
        },
      },
      {
        "@type": "WebPage",
        "@id": `${ConstantConfig.BASE_URL}/#webpage`,
        url: ConstantConfig.BASE_URL,
        name: ConstantConfig.DEFAULT_AUTHOR,
        description: ConstantConfig.DEFAULT_DESCRIPTION,
        inLanguage: "vi",
        isPartOf: {
          "@id": `${ConstantConfig.BASE_URL}/#website`,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Trang chủ",
            item: ConstantConfig.BASE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Danh mục",
            item: `${ConstantConfig.BASE_URL}/san-pham`,
          },
        ],
      },
    ],
  };
  return (
    <>
      <script
        id={"trungthanhdev"}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
      <MainPage />
    </>
  );
}
