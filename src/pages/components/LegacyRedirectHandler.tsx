import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function LegacyRedirectHandler() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        if (params.get("page_id") === "10891") {
            navigate("/contact-us-fire", { replace: true });
        }
    }, [location, navigate]);

    return null;
}
