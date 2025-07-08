import React from "react";

const RESUME_LINK =
  "https://drive.google.com/file/d/1SkP1eBwCUnrLmXRZC0je0QEMQS4ZwvJG/view?usp=drive_link";

export default function ResumePage() {
  return (
    <main className="flex flex-col items-center justify-center bg-gray-50 px-4 py-20 -mx-6 sm:-mx-8 lg:-mx-12 -mt-24 min-h-screen">
      <div className="max-w-xl w-full bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4 text-center">My Resume</h1>
        <p className="text-gray-600 mb-8 text-center">
          You can view or download my latest resume using the button below.
        </p>
        <a
          href={RESUME_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-8 py-3 rounded-full font-semibold text-lg shadow hover:bg-gray-900 transition-colors"
        >
          View / Download Resume
        </a>
      </div>
    </main>
  );
}
