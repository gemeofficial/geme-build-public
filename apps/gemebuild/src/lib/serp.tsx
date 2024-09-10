

export const manualJsonLd = () => {
  return {
    __html: `
      {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to compost at home, use GEME electric kitchen composter to setup the world's easiest waste management system to reduce your daily food waste and carbon footprint",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.geme.bio/_next/image?url=%2Fassets%2Fimages%2Fmanual%2Fhero-v1.jpg&w=3840&q=75",
        "height": "406",
        "width": "305"
      },
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "USD",
        "value": "699"
      },

      "supply": [
        {
          "@type": "HowToSupply",
          "name": "food waste"
        }, {
          "@type": "HowToSupply",
          "name": "GEME Kobold"
        }
      ],
      "tool": [
        {
          "@type": "HowToTool",
          "name": "GEME Composter"
        }
      ],
      "video": {
        "@type": "VideoObject",
        "name": "GEME Composter How to Use",
        "description": "How to setup and use GEME Composter, the official tutorial.",
        "thumbnailUrl": "https://example.com/photos/photo.jpg",
        "contentUrl": "https://www.youtube.com/watch?v=5rWoJlB-uVo",
        "embedUrl": "https://www.youtube.com/embed/5rWoJlB-uVo",
        "uploadDate": "2022-12-10T08:00:00+08:00",
        "duration": "P10MT59S",
        "hasPart": [
          {
            "@type": "Clip",
            "@id": "Clip1",
            "name": "Unbox",
            "startOffset": 0,
            "endOffset": 74,
            "url": "https://www.youtube.com/watch?v=5rWoJlB-uVo&t=1"
          },
          {
            "@type": "Clip",
            "@id": "Clip2",
            "name": "Caution",
            "startOffset": 74,
            "endOffset": 187,
            "url": "https://www.youtube.com/watch?v=5rWoJlB-uVo&t=74"
          },
          {
            "@type": "Clip",
            "@id": "Clip3",
            "name": "How to Activate GEME Kobold",
            "startOffset": 187,
            "endOffset": 219,
            "url": "https://www.youtube.com/watch?v=5rWoJlB-uVo&t=187"
          },
          {
            "@type": "Clip",
            "@id": "Clip4",
            "name": "Daily Usage",
            "startOffset": 219,
            "endOffset": 251,
            "url": "https://www.youtube.com/watch?v=5rWoJlB-uVo&t=219"
          },
          {
            "@type": "Clip",
            "@id": "Clip5",
            "name": "How to Use GEME By-products",
            "startOffset": 251,
            "endOffset": 296,
            "url": "https://www.youtube.com/watch?v=5rWoJlB-uVo&t=251"
          },
          {
            "@type": "Clip",
            "@id": "Clip6",
            "name": "How to make GEME Composter Steady",
            "startOffset": 296,
            "endOffset": 320,
            "url": "https://www.youtube.com/watch?v=5rWoJlB-uVo&t=296"
          },
          {
            "@type": "Clip",
            "@id": "Clip7",
            "name": "GEME Composter Control Panel Usage",
            "startOffset": 320,
            "endOffset": 347,
            "url": "https://www.youtube.com/watch?v=5rWoJlB-uVo&t=320"
          },
          {
            "@type": "Clip",
            "@id": "Clip8",
            "name": "How to Change GEME Composter's UV Lamp",
            "startOffset": 347,
            "endOffset": 459,
            "url": "https://www.youtube.com/watch?v=5rWoJlB-uVo&t=347"
          },
          {
            "@type": "Clip",
            "@id": "Clip9",
            "name": "What can be put into GEME?",
            "startOffset": 459,
            "endOffset": 657,
            "url": "https://www.youtube.com/watch?v=5rWoJlB-uVo&t=459"
          }
        ]
      },
      "step": [
        {
          "@type": "HowToStep",
          "name": "Unboxing",
          "text": "Unbox GEME package and basic setup.",
          "image": "https://www.geme.bio/_next/image?url=%2Fassets%2Fimages%2Fmanual%2Fvideo-cover-unboxing.png&w=640&q=75",
          "url": "https://www.geme.bio/manual#step1",
          "video": {
            "@id": "Clip1"
          }
        },
        {
          "@type": "HowToStep",
          "name": "Cautions",
          "text": "What you need to pay attention when using GEME Composter?",
          "image": "https://www.geme.bio/_next/image?url=%2Fassets%2Fimages%2Fmanual%2Fvideo-cover-cautions.png&w=640&q=75",
          "url": "https://www.geme.bio/manual#step2",
          "video": {
            "@id": "Clip2"
          }
        },
        {
          "@type": "HowToStep",
          "name": "Activate Microbiota",
          "text": "Activate Microbiota.",
          "image": "https://www.geme.bio/_next/image?url=%2Fassets%2Fimages%2Fmanual%2Fvideo-cover-activate-microbiota.png&w=640&q=75",
          "url": "https://www.geme.bio/manual#step3",
          "video": {
            "@id": "Clip3"
          }
        },
        {
          "@type": "HowToStep",
          "name": "Daily Usage",
          "text": "Daily Usage.",
          "image": "https://www.geme.bio/_next/image?url=%2Fassets%2Fimages%2Fmanual%2Fvideo-cover-daily-usage.png&w=640&q=75",
          "url": "https://www.geme.bio/manual#step4",
          "video": {
            "@id": "Clip4"
          }
        },
        {
          "@type": "HowToStep",
          "name": "By-Product(Compost) Usage",
          "text": "By-Product(Compost) Usage.",
          "image": "https://www.geme.bio/_next/image?url=%2Fassets%2Fimages%2Fmanual%2Fvideo-cover-by-product-usage.png&w=640&q=75",
          "url": "https://www.geme.bio/manual#step5",
          "video": {
            "@id": "Clip5"
          }
        },
        {
          "@type": "HowToStep",
          "name": "How to Make Steady",
          "text": "How to Make Steady.",
          "image": "https://www.geme.bio/_next/image?url=%2Fassets%2Fimages%2Fmanual%2Fvideo-cover-make-steady.png&w=640&q=75",
          "url": "https://www.geme.bio/manual#step6",
          "video": {
            "@id": "Clip6"
          }
        },
        {
          "@type": "HowToStep",
          "name": "Control Panel Usage & Troubleshooting",
          "text": "Control Panel Usage & Troubleshooting.",
          "image": "https://www.geme.bio/_next/image?url=%2Fassets%2Fimages%2Fmanual%2Fvideo-cover-control-panel-usage.png&w=640&q=75",
          "url": "https://www.geme.bio/manual#step8",
          "video": {
            "@id": "Clip7"
          }
        },
        {
          "@type": "HowToStep",
          "name": "How to Change UV Lamp",
          "text": "How to Change UV Lamp.",
          "image": "https://www.geme.bio/_next/image?url=%2Fassets%2Fimages%2Fmanual%2Fvideo-cover-change-uv-lamp.png&w=640&q=75",
          "url": "https://www.geme.bio/manual#step8",
          "video": {
            "@id": "Clip8"
          }
        },
        {
          "@type": "HowToStep",
          "name": "Can & Can Not",
          "text": "What can be put on GEME and what can not.",
          "image": "https://www.geme.bio/_next/image?url=%2Fassets%2Fimages%2Fmanual%2Fvideo-cover-can-and-can-not.png&w=640&q=75",
          "url": "https://www.geme.bio/manual#step9",
          "video": {
            "@id": "Clip9"
          }
        }
      ],
      "totalTime": "P2D"
    }
    `,
  }
}

export const industrialEquipmentsJsonLd = () => {
  return {
    __html: `
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "GEME for Business",
          "item": "https://www.geme.bio/industrial-equipments"
        }]
      }
    `,
  }
}

export const industrialEquipmentXJsonLd = (
  productName: string,
  productSlug: string,
) => {
  return {
    __html: `
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "GEME for Business",
            "item": "https://www.geme.bio/industrial-equipments"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "${productName}",
            "item": "https://www.geme.bio/industrial-equipments/${productSlug}"
          }
        ]
      }
    `,
  }
}

export const productLdJson = () => {
  return {
    __html: `
      {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "GEME Composter",
      "description": "World's easiest food waste management solution, the best electric composter for kitchen and indoor with biotechnology",
      "review": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4.7",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Shara H."
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "reviewCount": "3"
      }
    }
    `,
  }
}
