'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';

export default function CookieBanner() {
  const { t } = useLang();
  const { cookie } = t;
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consentGiven = localStorage.getItem('cookie-consent');
    if (!consentGiven) setShowBanner(true);
  }, []);

  const handleAccept = () => { localStorage.setItem('cookie-consent', 'accepted'); setShowBanner(false); };
  const handleReject = () => { localStorage.setItem('cookie-consent', 'rejected'); setShowBanner(false); };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-t border-accent/20 p-4 md:p-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-light font-semibold mb-2">{cookie.title}</h3>
          <p className="text-text text-sm">{cookie.body}</p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <button onClick={handleReject} className="px-4 py-2 rounded-lg border border-light text-light hover:bg-primary/50 transition-colors text-sm">
            {cookie.reject}
          </button>
          <button onClick={handleAccept} className="px-4 py-2 rounded-lg bg-gold text-dark font-semibold hover:bg-gold/90 transition-colors text-sm">
            {cookie.accept}
          </button>
        </div>
        <button onClick={handleReject} className="absolute top-4 right-4 md:hidden text-light hover:text-accent">
          <X size={20} />
        </button>
      </div>
    </div>
  );
}
