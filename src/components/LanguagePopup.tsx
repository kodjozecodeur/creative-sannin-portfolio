"use client";
import { useState, useEffect } from "react";

export default function LanguagePopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (!lang) setShow(true);
  }, []);

  // Language selection is no longer needed, so just close the popup
  // Language selection is no longer needed, so just close the popup
  const chooseLang = () => {
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded shadow-lg text-center">
        <p className="mb-4">This site is now only available in English.</p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={chooseLang}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
