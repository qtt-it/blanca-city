import { Metadata, MetadataRoute } from "next";

export class ConstantConfig {
  public static BASE_URL = "https://blancacity.sungroup.io.vn";
  public static BACKEND_URL =  "http://14.225.205.200:2228/insert-excel" 

  public static readonly DEFAULT_DESCRIPTION =
    "Nổi tiếng trên bản đồ du lịch Đông Nam Bộ và cả miền Nam nhưng Vũng Tàu chưa có một dự án đô thị đẳng cấp đúng nghĩa, chưa có các khu vui chơi, giải trí hoành tráng hay những công trình mang tính biểu tượng để “check-in” . Tất cả những mong đợi này sẽ xuất hiện ở BLANCA CITY - “Biểu tượng đô thị all-in-one” đầu tiên của […]";
  public static readonly DEFAULT_KEYWORDS = "STC Golden Land";
  public static readonly DEFAULT_AUTHOR = "STC Golden Land";
  public static readonly DEFAULT_LOGO = "favicon.ico";
  public static readonly DEFAULT_OG_IMAGE = [
    {
      url: `/hero1.jpg`,
      width: 1920,
      height: 1080,
      type: "image/jpeg",
    },
  ];
  // url bảo trì MAINTENANCE_URL
  public static readonly MAINTENANCE_URL: string[] = [];
  public static readonly REVALIDATE = 60 * 60;
  // ẩn layout
  public static readonly HIDDEN_LAYOUT_URL: string[] = [
    "/camon-gg",
    "/daptanysl",
  ];
  public static readonly DEFAULT_OG = {
    "og:title": this.DEFAULT_DESCRIPTION,
    "og:description": this.DEFAULT_DESCRIPTION,
    "og:image": "/hero1.jpg",
    "og:url": this.BASE_URL,
    "og:type": "website",
  };

  // Tên công ty
  public static readonly COMPANY_NAME = "STC Golden Land";

  public static MetaBuilder() {
    
    const meta: NonNullable<Metadata> = this.DEFAULT_METADATA();
    let result = {
      setTitle: (title: string = "") => {
        if (title !== "") {
          meta.title = title + " - " + ConstantConfig.DEFAULT_AUTHOR;
          // @ts-ignore
          meta.openGraph.title = title + " - " + ConstantConfig.DEFAULT_AUTHOR;
        }
        return result;
      },
      setDescription: (description: string = "") => {
        if (description !== "") {
          meta.description = description;
          // @ts-ignore
          meta.openGraph.description = description;
        }
        return result;
      },
      setRobots: (robots: Record<string, any>) => {
        meta.robots = robots;
        return result;
      },
      setUrl: (url: string = "") => {
        // @ts-ignore
        meta.openGraph.url = `${this.BASE_URL}${url}`;
        return result;
      },
      setOgImage: (
        data: {
          width: number;
          height: number;
          url: string;
          type: string;
        }[]
      ) => {
        // @ts-ignore
        meta.openGraph.images = data;
        return result;
      },
      setAuthor: (author: string = "") => {
        if (author !== "") {
          meta.authors = [
            {
              name: author,
            },
          ];
          meta.creator = author;
          meta.publisher = author;
        }
        return result;
      },
      setSiteName: (siteName: string = "") => {
        // @ts-ignore
        meta.openGraph.siteName = siteName;
        return result;
      },
      setKeywords: (keywords: string = "") => {
        if (keywords !== "") {
          meta.keywords = keywords;
        }
        return result;
      },
      setCanonical: (canonical: string = "") => {
        if (canonical !== "") {
          meta.alternates = {
            ...meta.alternates,
            canonical,
          };
        }
        return result;
      },
      build: () => {
        return meta;
      },
    };
    return result;
  }

  public static JSONLDBuilder() {
    const jsonld = this.DEFAULT_JSONLD()["graph"][0];
    const result = {
      setTitle: (title: string = "") => {},
    };
    return result;
  }

  public static DEFAULT_JSONLD() {
    return {
      "@context": "https://schema.org",
      graph: [
        {
          "@id": this.BASE_URL,
          "@type": ["http://schema.org/CollectionPage"],
          "http://schema.org/breadcrumb": [
            {
              "@id": this.BASE_URL,
            },
          ],
          "http://schema.org/inLanguage": [
            {
              "@value": "vi",
            },
          ],
          "http://schema.org/isPartOf": [
            {
              "@id": this.BASE_URL,
            },
          ],
          "http://schema.org/name": [
            {
              "@value": ConstantConfig.DEFAULT_AUTHOR,
            },
          ],
          "http://schema.org/url": [
            {
              "@id": this.BASE_URL,
            },
          ],
        },
        {
          "@id": `${this.BASE_URL}/#breadcrumb`,
          "@type": ["http://schema.org/BreadcrumbList"],
          "http://schema.org/itemListElement": [
            {
              "@type": ["http://schema.org/ListItem"],
              "http://schema.org/name": [
                {
                  "@value": "Trang chủ",
                },
              ],
              "http://schema.org/position": [
                {
                  "@value": 1,
                },
              ],
            },
          ],
        },
        {
          "@id": `${this.BASE_URL}/#website`,
          "@type": ["http://schema.org/WebSite"],
          "http://schema.org/description": [
            {
              "@value": ConstantConfig.DEFAULT_DESCRIPTION,
            },
          ],
          "http://schema.org/inLanguage": [
            {
              "@value": "vi",
            },
          ],
          "http://schema.org/name": [
            {
              "@value": "website",
            },
          ],
          "http://schema.org/potentialAction": [
            {
              "@type": ["http://schema.org/SearchAction"],
              "http://schema.org/query-input": [
                {
                  "@type": ["http://schema.org/PropertyValueSpecification"],
                  "http://schema.org/valueName": [
                    {
                      "@value": "search_term_string",
                    },
                  ],
                  "http://schema.org/valueRequired": [
                    {
                      "@value": true,
                    },
                  ],
                },
              ],
              "http://schema.org/target": [
                {
                  "@type": ["http://schema.org/EntryPoint"],
                  "http://schema.org/urlTemplate": [
                    {
                      "@value": `${this.BASE_URL}/?s={search_term_string}`,
                    },
                  ],
                },
              ],
            },
          ],
          "http://schema.org/url": [
            {
              "@id": "https://longthanh.stcgoldenland.com/",
            },
          ],
        },
      ],
    };
  }

  public static DEFAULT_METADATA(): Metadata {
    return {
      title: "Blanca City by Sun Group",
      metadataBase: new URL("https://blancacity.sungroup.io.vn/"),
      applicationName: "BLANCA CITY",
      authors: [
        {
          name: this.DEFAULT_AUTHOR,
        },
      ],
      referrer: "no-referrer",
      description: this.DEFAULT_DESCRIPTION,
      creator: this.DEFAULT_AUTHOR,
      publisher: this.DEFAULT_AUTHOR,
      keywords: this.DEFAULT_KEYWORDS,
      icons: [
        {
          url: "/favicon.ico",
          sizes: "16x16",
          type: "image/x-icon",
          fetchPriority: "auto",
        },
      ],
      alternates: {
        canonical: this.BASE_URL,
      },
      openGraph: {
        type: "website",
        title: this.DEFAULT_DESCRIPTION,
        siteName: "STC Golden Land",
        countryName: "Việt Nam",
        description: this.DEFAULT_DESCRIPTION,
        url: this.BASE_URL,
        locale: "vi_VN",
        images: this.DEFAULT_OG_IMAGE,
      },
      formatDetection: {
        telephone: true,
        address: true,
        date: true,
        url: true,
        email: true,
      },
      assets: "/",
    };
  }
  public static Delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  public static DEFAULT_SITEMAP(): MetadataRoute.Sitemap {
    return [
      {
        url: `${this.BASE_URL}/`,
        changeFrequency: "daily",
        priority: 1,
        lastModified: new Date(),
      },
      {
        url: `${this.BASE_URL}/bao-tri`,
        changeFrequency: "daily",
        priority: 1,
        lastModified: new Date(),
      },
    ];
  }
}
