import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * RouteTracker — Fires GA4 + Google Ads page_view on every SPA route change.
 * Works with gtag loaded in index.html (G-QR59DBQ4F0 + AW-17848981781).
 */
export function RouteTracker() {
  const { pathname } = useLocation();

  useEffect(() => {
    const w = window as any;
    if (!w.gtag) return;

    // GA4 page view
    w.gtag("event", "page_view", {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
      send_to: "G-QR59DBQ4F0",
    });

    // Google Ads page view
    w.gtag("event", "page_view", {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
      send_to: "AW-17848981781",
    });
  }, [pathname]);

  return null;
}
