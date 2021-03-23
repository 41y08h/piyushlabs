import { NextSeo } from "next-seo";

export default function FeaturedImage({ ...props }) {
  return (
    <>
      <NextSeo openGraph={[{ url: props.src }]} />
      <meta name="image" content={props.src} />
      <img {...props} />
    </>
  );
}
