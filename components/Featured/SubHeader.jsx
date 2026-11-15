import React from "react";
import { SITE, SERVICES } from "@/lib/site";

export default function SubHeader() {
  return (
    <div className="flex w-full flex-col items-start px-4 text-left md:px-0">
      <div className="flex w-full flex-col gap-3 text-sm leading-relaxed text-justify opacity-80 md:text-base lg:text-lg">
        {SITE.intro.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

      <div className="about-inline-services mt-8 w-full md:mt-12">
        <div className="about-inline-services__head">
          <span className="about-inline-services__label">CORE EXPERTISE</span>
        </div>
        <div className="about-inline-services__grid">
          {SERVICES.map((s) => (
            <article key={s.title} className="about-inline-services__item">
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
