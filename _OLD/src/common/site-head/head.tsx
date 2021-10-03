import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

type SiteMetaProps = {
  title: string;
  siteUrl: string;
  description: string;
};

export const Head: FC = () => {
  const { site } = useStaticQuery(query);
  const siteMeta: SiteMetaProps = site.siteMetadata;

  console.log("site", site);

  return (
    <Helmet>
      <title>{siteMeta.title}</title>
      <meta name="description" content={siteMeta.description} />

      <link
        href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap"
        rel="preload"
        as="font"
        type="font/woff2"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
        rel="preload"
        as="font"
        type="font/woff2"
      />

      {/** FavIcons */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </Helmet>
  );
};

const query = graphql`
  query siteData {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`;
