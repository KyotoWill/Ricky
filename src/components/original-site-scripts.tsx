"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    mainbs?: { is_announcement: number; announcement_delay: string };
    rtl?: number;
  }
}

const scripts = [
  "/original-assets/js/jquery-3.3.1.min.js",
  "/original-assets/js/popper.min.js",
  "/original-assets/js/bootstrap.min.js",
  "/original-assets/js/plugin.min.js",
  "/original-assets/js/logistic-main.js",
];

export function OriginalSiteScripts() {
  useEffect(() => {
    window.mainbs = { is_announcement: 0, announcement_delay: "0" };
    window.rtl = 0;
    let cancelled = false;

    const loadSequentially = async () => {
      for (const source of scripts) {
        if (cancelled || document.querySelector(`script[data-original-source="${source}"]`)) continue;
        await new Promise<void>((resolve, reject) => {
          const script = document.createElement("script");
          script.src = source;
          script.dataset.originalSource = source;
          script.onload = () => resolve();
          script.onerror = () => reject(new Error(`Unable to load ${source}`));
          document.body.appendChild(script);
        });
      }
    };

    void loadSequentially();
    const forms = Array.from(document.querySelectorAll<HTMLFormElement>("form[data-replica-form]"));
    const preventSubmit = (event: SubmitEvent) => event.preventDefault();
    forms.forEach((form) => form.addEventListener("submit", preventSubmit));

    return () => {
      cancelled = true;
      forms.forEach((form) => form.removeEventListener("submit", preventSubmit));
    };
  }, []);

  return null;
}
