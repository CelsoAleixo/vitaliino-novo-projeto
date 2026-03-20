/**
 * Cookie Consent Hook — LGPD/GDPR compliant
 * 
 * Stores consent in localStorage with timestamp for audit trail.
 * GA4 Measurement ID: G-QR59DBQ4F0 (substituir pelo ID real)
 * 
 * Consent is stored as JSON with structure:
 * {
 *   necessary: true (always),
 *   analytics: boolean,
 *   advertising: boolean,
 *   timestamp: ISO string,
 *   version: string
 * }
 */

import { useState, useEffect, useCallback } from "react";

const CONSENT_KEY = "rv-cookie-consent";
const CONSENT_VERSION = "1.1"; // Bumped: now includes Google Ads
const GA4_MEASUREMENT_ID = "G-QR59DBQ4F0";
const GOOGLE_ADS_ID = "AW-17848981781";

export interface CookiePreferences {
  necessary: boolean; // Always true
  analytics: boolean;
  advertising: boolean;
}

export interface ConsentRecord {
  preferences: CookiePreferences;
  timestamp: string;
  version: string;
}

function getStoredConsent(): ConsentRecord | null {
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) return null;
    const parsed = JSON.parse(stored) as ConsentRecord;
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

function storeConsent(preferences: CookiePreferences): ConsentRecord {
  const record: ConsentRecord = {
    preferences: { ...preferences, necessary: true },
    timestamp: new Date().toISOString(),
    version: CONSENT_VERSION,
  };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(record));
  return record;
}

/**
 * Initializes gtag with consent denied by default,
 * then updates consent based on user choice.
 * Manages both GA4 (G-QR59DBQ4F0) and Google Ads (AW-17848981781).
 */
function updateGtagConsent(preferences: CookiePreferences) {
  if (typeof window === "undefined") return;
  const w = window as any;
  if (!w.gtag) return;

  // Update consent based on user preferences
  w.gtag("consent", "update", {
    analytics_storage: preferences.analytics ? "granted" : "denied",
    ad_storage: preferences.advertising ? "granted" : "denied",
    ad_user_data: preferences.advertising ? "granted" : "denied",
    ad_personalization: preferences.advertising ? "granted" : "denied",
  });
}

/**
 * Revokes consent by updating gtag to denied.
 */
function revokeGtagConsent() {
  const w = window as any;
  if (w.gtag) {
    w.gtag("consent", "update", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  }
}

export function useCookieConsent() {
  const [consent, setConsent] = useState<ConsentRecord | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // On mount: check for existing consent
  useEffect(() => {
    const stored = getStoredConsent();
    if (stored) {
      setConsent(stored);
      updateGtagConsent(stored.preferences);
    } else {
      setShowBanner(true);
    }
    setIsLoaded(true);
  }, []);

  const acceptAll = useCallback(() => {
    const prefs: CookiePreferences = { necessary: true, analytics: true, advertising: true };
    const record = storeConsent(prefs);
    setConsent(record);
    setShowBanner(false);
    setShowPreferences(false);
    updateGtagConsent(prefs);
  }, []);

  const rejectAll = useCallback(() => {
    const prefs: CookiePreferences = { necessary: true, analytics: false, advertising: false };
    const record = storeConsent(prefs);
    setConsent(record);
    setShowBanner(false);
    setShowPreferences(false);
    revokeGtagConsent();
  }, []);

  const savePreferences = useCallback((prefs: CookiePreferences) => {
    const record = storeConsent(prefs);
    setConsent(record);
    setShowBanner(false);
    setShowPreferences(false);
    updateGtagConsent(prefs);
  }, []);

  const openPreferences = useCallback(() => {
    setShowPreferences(true);
  }, []);

  const closePreferences = useCallback(() => {
    setShowPreferences(false);
  }, []);

  return {
    consent,
    showBanner,
    showPreferences,
    isLoaded,
    acceptAll,
    rejectAll,
    savePreferences,
    openPreferences,
    closePreferences,
  };
}
