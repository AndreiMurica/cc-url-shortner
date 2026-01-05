import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { GetLongUrl } from "./service";

export const RedirectPage = () => {
    const { shortCode } = useParams();
    const [status, setStatus] = useState("Redirecting...");

    const hasFetched = useRef(false);

    useEffect(() => {
        if (hasFetched.current) return;
        hasFetched.current = true;

        const fetchUrl = async () => {
            if (!shortCode) return;
            try {
                const longUrl = await GetLongUrl(shortCode);
                let targetUrl = longUrl;
                if (!/^https?:\/\//i.test(targetUrl)) {
                    targetUrl = "https://" + targetUrl;
                }
                window.location.href = targetUrl;
            } catch (error) {
                console.error("Redirect error:", error);
                setStatus("Failed to connect to the server.");
            }
        };

        fetchUrl();
    }, [shortCode]);

    return (
        <div style={{ padding: "50px", textAlign: "center" }}>
            <h2>{status}</h2>
        </div>
    );
};
