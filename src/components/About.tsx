import { about } from "@/data/content";
import { photos } from "@/data/photos";
import { store } from "@/data/store";

import { Photo } from "./Photo";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-20 lg:py-36">
      <div className="grid items-center gap-y-12 lg:grid-cols-12 lg:gap-x-16">
        {/* 写真は画面の左端まで広げる */}
        <div data-reveal className="lg:col-span-7">
          <Photo
            photo={photos.about}
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="drift aspect-[4/3] lg:aspect-[5/4]"
          />
        </div>

        <div className="shell !mx-0 lg:col-span-5 lg:!pl-0">
          <p data-reveal className="section-label">
            About <span>私たちについて</span>
          </p>
          <h2
            id="about-heading"
            data-reveal
            className="mt-6 max-w-[15em] text-[clamp(1.875rem,3.2vw,3rem)] leading-[1.5] tracking-[0.05em]"
          >
            {about.heading}
          </h2>
          <div data-reveal className="mt-8 max-w-[34em] space-y-4 text-ink-soft">
            {about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <dl data-reveal className="mt-10 max-w-[34em] border-t border-ink/20">
            {about.points.map((point) => (
              <div key={point.term} className="border-b border-ink/20 py-4">
                <dt className="font-mincho text-[1.125rem] leading-relaxed">{point.term}</dt>
                <dd className="text-[0.875rem] leading-relaxed text-ink-soft">{point.description}</dd>
              </div>
            ))}
          </dl>

          <p data-reveal className="mt-6 text-[0.875rem] text-olive">
            {store.award}
          </p>
        </div>
      </div>
    </section>
  );
}
