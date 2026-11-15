import React from "react";
import { CERTIFICATES } from "@/lib/site";

export default function Certificates() {
  return (
    <section id="certificates-section" className="relative z-10 bg-bg px-[5vw] pb-[7vw] pt-[2vw] text-fg max-lg:px-6 max-lg:pb-16">
      <div className="pj-head">
        <span className="pj-label">CERTIFICATES</span>
        <h2 className="pj-title">certified</h2>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATES.map((c) => (
          <article
            key={c.name}
            className="flex flex-col overflow-hidden rounded-2xl border border-fg/15 bg-fg/5 transition hover:border-accent"
          >
            <div className="flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-white">
              {c.image ? (
                <img src={c.image} alt={c.name} className="h-full w-full object-contain p-8" />
              ) : (
                <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-black/30" aria-hidden="true">
                  <circle cx="12" cy="9" r="6" />
                  <path d="M8.5 14 7 22l5-3 5 3-1.5-8" />
                </svg>
              )}
            </div>
            <div className="flex flex-1 flex-col gap-1 p-5">
              <h3 className="text-base font-semibold md:text-lg">{c.name}</h3>
              {c.org ? <p className="text-sm text-fg/60">{c.org}</p> : null}
              {c.link ? (
                <a
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-xs font-semibold text-bg transition active:scale-95"
                  style={{ marginTop: "1rem" }}
                >
                  <span>View Certificate</span>
                  <span aria-hidden="true">↗</span>
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
