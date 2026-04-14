import { useEffect } from "react";

type PageMetaProps = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
  ogImagePath?: string;
};

function upsertMetaByName(name: string, content: string) {
  let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertMetaByProperty(property: string, content: string) {
  let tag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertCanonical(url: string) {
  let tag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", "canonical");
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", url);
}

const SITE_URL = "https://ikwe.ai";
const DEFAULT_OG_IMAGE = "/og/home.png";

function toAbsolute(pathOrUrl: string) {
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }
  return `${SITE_URL}${pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`}`;
}

export default function PageMeta({
  title,
  description,
  path,
  noIndex = false,
  ogImagePath = DEFAULT_OG_IMAGE,
}: PageMetaProps) {
  useEffect(() => {
    const absolutePath = path.startsWith("/") ? path : `/${path}`;
    const absoluteUrl = `${SITE_URL}${absolutePath}`;
    const absoluteImage = toAbsolute(ogImagePath);
    const robotsValue = noIndex ? "noindex,nofollow" : "index,follow";

    document.title = title;
    upsertMetaByName("description", description);
    upsertMetaByName("robots", robotsValue);
    upsertMetaByName("theme-color", "#141218");
    upsertMetaByName("twitter:card", "summary_large_image");
    upsertMetaByName("twitter:title", title);
    upsertMetaByName("twitter:description", description);
    upsertMetaByName("twitter:image", absoluteImage);
    upsertMetaByName("twitter:image:alt", "Ikwe.ai social preview");
    upsertMetaByName("twitter:url", absoluteUrl);
    upsertMetaByProperty("og:title", title);
    upsertMetaByProperty("og:description", description);
    upsertMetaByProperty("og:url", absoluteUrl);
    upsertMetaByProperty("og:type", "website");
    upsertMetaByProperty("og:site_name", "Ikwe.ai");
    upsertMetaByProperty("og:image", absoluteImage);
    upsertMetaByProperty("og:image:alt", "Ikwe.ai social preview");
    upsertMetaByProperty("og:image:width", "1200");
    upsertMetaByProperty("og:image:height", "630");
    upsertCanonical(absoluteUrl);
  }, [title, description, path, noIndex, ogImagePath]);

  return null;
}
