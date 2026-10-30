import { story } from "@/data/content";

import { Photo } from "./Photo";

export function Story() {
  return (
    <section id="story" aria-labelledby="story-heading" className="on-dark bg-ink py-20 text-cream lg:py-36">
      <div className="shell">
        <p data-reveal className="section-label">
          Our story <span>料理へのこだわり</span>
        </p>
        <h2
          id="story-heading"
          data-reveal
          className="mt-6 max-w-[11.2em] text-[clamp(1.875rem,3.2vw,3rem)] leading-[1.5] tracking-[0.05em]"
        >
          {story.heading}
        </h2>

        <div className="mt-16 space-y-20 lg:mt-28 lg:space-y-36">
          {story.pairs.map((pair, index) => {
            const flipped = index % 2 === 1;
            return (
              <article key={pair.left}>
                <h3
                  data-reveal
                  className={`whitespace-nowrap text-[10.2vw] leading-[1.2] tracking-[0.02em] lg:text-[7.6vw] 2xl:text-[7.5rem] ${
                    flipped ? "lg:text-right" : ""
                  }`}
                >
                  {pair.left}
                  <span className="amp mx-[0.14em] text-[1.18em] text-spice-light lg:text-spice">&amp;</span>
                  {pair.right}
                </h3>

                <div className="mt-7 grid gap-x-16 gap-y-7 lg:mt-12 lg:grid-cols-12 lg:items-end">
                  <div
                    data-reveal="photo"
                    className={`lg:col-span-7 ${flipped ? "lg:col-start-6 lg:row-start-1" : ""}`}
                  >
                    <Photo
                      photo={pair.photo}
                      sizes="(min-width: 1024px) 54vw, 100vw"
                      className="drift aspect-[4/3] lg:aspect-[8/5]"
                    />
                  </div>
                  <div
                    data-reveal
                    className={`lg:col-span-4 ${flipped ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-9"}`}
                  >
                    <p className="max-w-[32em] text-cream/85">{pair.body}</p>
                    {pair.note ? (
                      <p className="mt-3 max-w-[32em] text-[0.8125rem] leading-relaxed text-spice-light">{pair.note}</p>
                    ) : null}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
