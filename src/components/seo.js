import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

const Seo = ({ metadata }) => {
  if (!metadata) {
    metadata = {
      title: "John Canelis",
      description: "John Canelis is a product designer in New York City.",
      image:
        "https://images.ctfassets.net/9d4lji205yye/3MGwCO2cumwMlGZ19htmt7/adb90b9b25aa425d054a6891fdd21e15/guy.jpg?h=1400",
      imageAlt: "John Canelis.",
      url: "https://design.johncanelis.com",
    }
  }

  return (
    <Helmet
      title={metadata.title || "John Canelis"}
      meta={[
        {
          name: "charset",
          content: "UTF-8",
        },
        {
          name: "robots",
          content: "index, follow",
        },
        {
          name: "description",
          content:
            metadata.description ||
            "John Canelis is a product designer in New York City.",
        },
        {
          property: "og:type",
          content: "article",
        },
        {
          property: "og:title",
          content: metadata.title || "John Canelis",
        },
        {
          property: "og:description",
          content:
            metadata.description ||
            "John Canelis is a product designer in New York City.",
        },
        {
          property: "og:image",
          content:
            metadata.image ||
            "https://images.ctfassets.net/9d4lji205yye/3MGwCO2cumwMlGZ19htmt7/adb90b9b25aa425d054a6891fdd21e15/guy.jpg?h=1400",
        },
        {
          property: "og:image:alt",
          content: metadata.imageAlt || "an image of john",
        },
        {
          property: "og:url",
          content: metadata.url || "https://design.johncanelis.com",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: metadata.title || "John Canelis",
        },
        {
          name: "twitter:description",
          content:
            metadata.description ||
            "John Canelis is a product designer in New York City.",
        },
        {
          name: "twitter:image",
          content:
            metadata.image ||
            "https://images.ctfassets.net/9d4lji205yye/3MGwCO2cumwMlGZ19htmt7/adb90b9b25aa425d054a6891fdd21e15/guy.jpg?h=1400",
        },
        {
          name: "twitter:image:alt",
          content: metadata.imageAlt || "image of John Canelis",
        },
        {
          name: "twitter:url",
          content: metadata.url || "https://design.johncanelis.com",
        },
        {
          name: "twitter:site",
          content: "@johncanelis",
        },
      ]}
    >
      <html lang="en" />

      {/* Structured data for Google */}
      <script type="application/ld+json">{`
      {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": "${metadata.headline || "John Canelis"}",
        "description": "${
          metadata.description ||
          "John Canelis is a product designer in New York City."
        }",
        "image": [ "${
          metadata.image ||
          "https://images.ctfassets.net/9d4lji205yye/3MGwCO2cumwMlGZ19htmt7/adb90b9b25aa425d054a6891fdd21e15/guy.jpg?h=1400"
        }"]
      }
    `}</script>
    </Helmet>
  )
}

Seo.propTypes = {
  metadata: PropTypes.object,
}

export default Seo
