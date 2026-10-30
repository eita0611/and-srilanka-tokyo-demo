import { hero } from "@/data/content";
import { photos } from "@/data/photos";
import { site, store } from "@/data/store";

import { Photo } from "./Photo";

export function Hero() {
  const height = site.isDemo
    ? "min-h-[max(33rem,calc(100svh-1.75rem-3.75rem))] md:min-h-[max(38rem,calc(100svh-1.75rem))]"
    : "min-h-[max(33rem,calc(100svh-3.75rem))] md:min-h-[max(38rem,100svh)]";

  return (
    <section aria-label="ファーストビュー" className={`on-dark relative isolate flex overflow-hidden bg-ink text-cream ${height}`}>
      <div className="hero-drift absolute inset-0 -z-20">
        <Photo
          photo={photos.hero}
          sizes="(max-aspect-ratio: 3/2) 150vh, 100vw"
          priority
          showTag={false}
          position="50% 48%"
          className="hero-photo size-full"
        />
      </div>
      {/* 写真の色を残したまま、文字が読める濃さまで落とす */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-ink/35 bg-[linear-gradient(to_left,rgb(41_32_25/0.5),transparent_46%),linear-gradient(to_top,rgb(41_32_25/0.62),transparent_42%)]"
      />

      <div className="shell relative flex flex-1 flex-col pb-5 pt-[5.25rem] md:pb-6 lg:pb-10 lg:pt-32">
        <h1 className="mr-1 flex flex-row-reverse justify-start gap-[0.4em] self-end text-[clamp(1.875rem,min(10.5vw,5.5svh),3.25rem)] leading-[1.25] tracking-[0.12em] md:text-[clamp(2.75rem,min(5.4vw,6.7svh),5.75rem)] lg:mr-[4vw]">
          {hero.headline.map((line) => (
            <span key={line} className="hero-line block [writing-mode:vertical-rl]">
              {line}
            </span>
          ))}
        </h1>

        <div className="hero-after mt-auto flex flex-wrap items-end justify-between gap-x-10 gap-y-5 pt-8">
          <div>
            <p className="font-mincho text-[1.0625rem] leading-[1.8] [word-break:auto-phrase] md:text-[1.375rem]">{hero.lead}</p>
            <div className="mt-5 flex flex-wrap gap-3 lg:mt-7">
              <a href="#dishes" className="btn btn-cream flex-1 whitespace-nowrap !px-2 !text-[0.875rem] sm:flex-none sm:!px-7 sm:!text-[0.9375rem]">
                メニューを見る
              </a>
              <a href="#access" className="btn btn-cream-line flex-1 whitespace-nowrap !px-2 !text-[0.875rem] sm:flex-none sm:!px-7 sm:!text-[0.9375rem]">
                アクセスを見る
              </a>
            </div>
          </div>
          <div className="text-[0.75rem] leading-relaxed tracking-[0.05em] text-cream/90 md:text-right">
            <p>{store.award}</p>
            <p className="mt-1">写真は仮画像です</p>
          </div>
        </div>
      </div>
    </section>
  );
}
