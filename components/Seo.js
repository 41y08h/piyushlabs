import { NextSeo } from "next-seo";
import config from "../site.config";

export default function Seo({ title, description, link }) {
  const url = link ? `${config.url}/${link}` : config.url;
  const type = url === config.url ? "website" : "article";

  return (
    <NextSeo
      {...{ title, description }}
      canonical={url}
      openGraph={{
        url,
        title,
        description,
        type,
      }}
    />
  );
}
