import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: string;
}

export const BASE_URL = "https://corporateguarantee.com.ph";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;
const SITE_NAME = "Corporate Guarantee (CG)";

export default function SEO({
    title = "Corporate Guarantee (CG)",
    description = "Corporate Guarantee provides a comprehensive array of insurance products designed to meet all your needs, ensuring a safe and secured future.",
    image = DEFAULT_IMAGE,
    url = BASE_URL,
    type = "website",
}: SEOProps) {
    const fullTitle = title.includes(SITE_NAME)
        ? title
        : `${title} | ${SITE_NAME}`;

    const location = useLocation();
    const resolvedUrl =
        url === BASE_URL ? `${BASE_URL}${location.pathname}` : url;

    return (
        <Helmet>
            {/* Primary */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={resolvedUrl} />

            {/* Open Graph - Facebook, Messenger previews */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={resolvedUrl} />
            <meta property="og:type" content={type} />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:locale" content="en_PH" />

            {/* Geo tags - helpful for local SEO */}
            <meta name="geo.region" content="PH-PAM" />
            <meta name="geo.placename" content="San Fernando, Pampanga" />
        </Helmet>
    );
}
