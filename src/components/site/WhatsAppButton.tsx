import { waLink } from "@/lib/site-config";

export function WhatsAppButton() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 group inline-flex items-center gap-3 ink-panel border hairline-silver px-4 py-3 shadow-xl shadow-ink/30 transition-all hover:bg-royal hover:border-royal cursor-pointer"
    >
      <svg viewBox="0 0 32 32" width="20" height="20" className="text-silver group-hover:text-white transition-colors" fill="currentColor" aria-hidden>
        <path d="M19.11 17.27c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.36.23-.66.08-.3-.15-1.27-.47-2.42-1.5-.89-.79-1.5-1.77-1.67-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.36.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.63-.93-2.23-.24-.59-.49-.51-.68-.52l-.58-.01c-.2 0-.53.08-.81.38-.28.3-1.07 1.05-1.07 2.55s1.1 2.96 1.25 3.16c.15.2 2.16 3.3 5.24 4.62.73.31 1.3.5 1.74.64.73.23 1.39.2 1.92.12.59-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.07-.13-.27-.2-.57-.35zM16.03 5.33c-5.92 0-10.72 4.8-10.73 10.7 0 1.89.49 3.72 1.44 5.35L5 26.67l5.46-1.7a10.7 10.7 0 005.56 1.55h.01c5.92 0 10.72-4.8 10.73-10.7 0-2.86-1.11-5.55-3.13-7.57a10.65 10.65 0 00-7.6-3.12z"/>
      </svg>
      <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white">
        WhatsApp
      </span>
    </a>
  );
}
