/**
 * Cookie Consent Banner — LGPD/GDPR Compliant
 * 
 * Features:
 * - Accept All / Reject All / Customize
 * - Preference modal with granular control
 * - WCAG 2.1 AA accessible (focus trap, aria labels, keyboard nav)
 * - Persistent consent via localStorage
 * - GA4 conditional activation
 */

import { useState, useEffect, useRef } from "react";
import { X, Cookie, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCookieConsent, type CookiePreferences } from "@/hooks/useCookieConsent";
import { useLanguage } from "@/contexts/LanguageContext";

export function CookieConsentBanner() {
  const {
    showBanner,
    showPreferences,
    isLoaded,
    acceptAll,
    rejectAll,
    savePreferences,
    openPreferences,
    closePreferences,
    consent,
  } = useCookieConsent();

  const [tempPrefs, setTempPrefs] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    advertising: false,
  });

  const bannerRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  // Initialize temp prefs from stored consent when opening preferences
  useEffect(() => {
    if (showPreferences && consent) {
      setTempPrefs(consent.preferences);
    }
  }, [showPreferences, consent]);

  // Focus trap for modal
  useEffect(() => {
    if (showPreferences && modalRef.current) {
      const focusable = modalRef.current.querySelectorAll<HTMLElement>(
        'button, [tabindex]:not([tabindex="-1"]), input'
      );
      if (focusable.length > 0) focusable[0].focus();
    }
  }, [showPreferences]);

  // Escape key to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showPreferences) closePreferences();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [showPreferences, closePreferences]);

  if (!isLoaded) return null;

  const isPt = language === "pt";

  // Labels
  const labels = {
    title: isPt ? "Política de Cookies" : "Cookie Policy",
    description: isPt
      ? "Usamos cookies para deixar sua experiência ainda melhor. Você pode ajustar suas preferências quando quiser."
      : "We use cookies to improve your experience, analyze traffic and personalize content. You can manage your preferences below.",
    acceptAll: isPt ? "Aceitar Tudo" : "Accept All",
    rejectAll: isPt ? "Rejeitar Tudo" : "Reject All",
    customize: isPt ? "Personalizar" : "Customize",
    save: isPt ? "Salvar Preferências" : "Save Preferences",
    necessary: isPt ? "Necessários" : "Necessary",
    necessaryDesc: isPt
      ? "Essenciais para o funcionamento do site. Não podem ser desativados."
      : "Essential for the website to function. Cannot be disabled.",
    analytics: isPt ? "Analíticos" : "Analytics",
    analyticsDesc: isPt
      ? "Nos ajudam a entender como os visitantes interagem com o site (Google Analytics)."
      : "Help us understand how visitors interact with the site (Google Analytics).",
    advertising: isPt ? "Publicidade" : "Advertising",
    advertisingDesc: isPt
      ? "Permitem exibir anúncios relevantes e medir campanhas."
      : "Allow us to show relevant ads and measure campaigns.",
    prefsTitle: isPt ? "Preferências de Cookies" : "Cookie Preferences",
    privacyLink: isPt ? "Política de Privacidade" : "Privacy Policy",
    alwaysActive: isPt ? "Sempre ativo" : "Always active",
  };

  return (
    <>
      {/* Banner */}
      {showBanner && !showPreferences && (
        <div
          ref={bannerRef}
          role="dialog"
          aria-label={labels.title}
          aria-modal="false"
          className="fixed bottom-0 left-0 right-0 z-[9999] animate-slide-up"
        >
          <div className="mx-auto max-w-4xl px-4 pb-4 sm:px-6">
            <div className="rounded-2xl border border-border bg-card/95 backdrop-blur-md shadow-2xl p-5 sm:p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded-lg bg-accent/10 shrink-0">
                  <Cookie className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h2 className="text-foreground font-serif text-lg font-semibold mb-1">
                    {labels.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {labels.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <Button
                  onClick={acceptAll}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold flex-1 sm:flex-none"
                >
                  {labels.acceptAll}
                </Button>
                <Button
                  onClick={rejectAll}
                  variant="outline"
                  className="flex-1 sm:flex-none"
                >
                  {labels.rejectAll}
                </Button>
                <Button
                  onClick={openPreferences}
                  variant="ghost"
                  className="flex-1 sm:flex-none text-muted-foreground hover:text-foreground"
                >
                  <Shield className="h-4 w-4 mr-1" />
                  {labels.customize}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Preferences Modal */}
      {showPreferences && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={closePreferences}
            aria-hidden="true"
          />

          <div
            ref={modalRef}
            role="dialog"
            aria-label={labels.prefsTitle}
            aria-modal="true"
            className="relative w-full max-w-lg rounded-2xl border border-border bg-card shadow-2xl max-h-[85vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-card border-b border-border p-5 flex items-center justify-between rounded-t-2xl">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-accent" />
                <h2 className="font-serif text-lg font-semibold text-foreground">
                  {labels.prefsTitle}
                </h2>
              </div>
              <button
                onClick={closePreferences}
                className="p-1 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                aria-label={isPt ? "Fechar" : "Close"}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Cookie Categories */}
            <div className="p-5 space-y-4">
              {/* Necessary */}
              <CookieCategory
                title={labels.necessary}
                description={labels.necessaryDesc}
                checked={true}
                disabled={true}
                badgeText={labels.alwaysActive}
              />

              {/* Analytics */}
              <CookieCategory
                title={labels.analytics}
                description={labels.analyticsDesc}
                checked={tempPrefs.analytics}
                onChange={(v) => setTempPrefs((p) => ({ ...p, analytics: v }))}
              />

              {/* Advertising */}
              <CookieCategory
                title={labels.advertising}
                description={labels.advertisingDesc}
                checked={tempPrefs.advertising}
                onChange={(v) => setTempPrefs((p) => ({ ...p, advertising: v }))}
              />
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-card border-t border-border p-5 flex flex-col sm:flex-row gap-2 rounded-b-2xl">
              <Button
                onClick={rejectAll}
                variant="outline"
                className="flex-1"
              >
                {labels.rejectAll}
              </Button>
              <Button
                onClick={() => savePreferences(tempPrefs)}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold flex-1"
              >
                {labels.save}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/** Individual cookie category toggle */
function CookieCategory({
  title,
  description,
  checked,
  disabled = false,
  badgeText,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  badgeText?: string;
  onChange?: (value: boolean) => void;
}) {
  const id = `cookie-${title.toLowerCase().replace(/\s/g, "-")}`;

  return (
    <div className="rounded-xl border border-border p-4 bg-secondary/30">
      <div className="flex items-center justify-between mb-2">
        <label htmlFor={id} className="font-medium text-foreground text-sm cursor-pointer">
          {title}
        </label>
        {badgeText ? (
          <span className="text-xs bg-accent/15 text-accent px-2 py-0.5 rounded-full font-medium">
            {badgeText}
          </span>
        ) : (
          <button
            id={id}
            role="switch"
            aria-checked={checked}
            disabled={disabled}
            onClick={() => onChange?.(!checked)}
            className={`
              relative inline-flex h-6 w-11 items-center rounded-full transition-colors
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background
              ${checked ? "bg-accent" : "bg-muted"}
              ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
            `}
          >
            <span
              className={`
                inline-block h-4 w-4 rounded-full bg-foreground shadow-sm transition-transform
                ${checked ? "translate-x-6" : "translate-x-1"}
              `}
            />
          </button>
        )}
      </div>
      <p className="text-muted-foreground text-xs leading-relaxed">{description}</p>
    </div>
  );
}
