"use client";

import Image from "next/image";
import { useState } from "react";

import { gallery } from "@/data/content";

import { CloseButton, Modal } from "./Modal";
import { Photo } from "./Photo";

const photoItems = gallery.flatMap((item) => (item.kind === "photo" ? [item] : []));

export function Gallery() {
  const [current, setCurrent] = useState<number | null>(null);
  const active = current === null ? null : photoItems[current];

  const move = (step: number) =>
    setCurrent((value) => (value === null ? value : (value + step + photoItems.length) % photoItems.length));

  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="py-20 lg:py-36">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-3">
          <div>
            <p data-reveal className="section-label">
              Gallery <span>ギャラリー</span>
            </p>
            <h2
              id="gallery-heading"
              data-reveal
              className="mt-6 text-[clamp(1.875rem,4.4vw,4rem)] leading-[1.4] tracking-[0.05em]"
            >
              料理と、店の空気を。
            </h2>
          </div>
          <p data-reveal className="max-w-[26em] text-[0.875rem] leading-relaxed text-ink-soft">
            掲載の写真はすべて仮画像です。店舗で撮影した写真に差し替えて公開します。
          </p>
        </div>

        <ul
          className="mt-10 grid auto-rows-[44vw] grid-flow-dense grid-cols-2 gap-2 sm:auto-rows-[30vw] lg:mt-16 lg:auto-rows-[min(7.4vw,6.75rem)] lg:grid-cols-12 lg:gap-3"
        >
          {gallery.map((item) => {
            if (item.kind === "pending") {
              return (
                <li
                  key={item.text}
                  data-reveal
                  className={`flex flex-col justify-between bg-ink p-4 text-cream lg:p-5 ${item.layout}`}
                >
                  <span className="amp text-[2.5rem] leading-none text-spice-light">&amp;</span>
                  <span className="text-[0.8125rem] leading-relaxed lg:text-[0.875rem]">{item.text}</span>
                </li>
              );
            }
            const index = photoItems.indexOf(item);
            return (
              <li key={item.photo.alt} data-reveal className={item.layout}>
                <button
                  type="button"
                  onClick={() => setCurrent(index)}
                  aria-haspopup="dialog"
                  className="zoom-trigger group relative block size-full cursor-zoom-in"
                >
                  <span className="zoom-frame block size-full">
                    <Photo
                      photo={item.photo}
                      sizes="(min-width: 1024px) 34vw, 50vw"
                      decorative
                      className="size-full"
                    />
                  </span>
                  <span className="absolute right-2.5 top-2.5 bg-cream px-2 text-[0.6875rem] leading-[1.7] tracking-[0.06em] text-ink opacity-0 transition-opacity duration-500 ease-soft group-hover:opacity-100 group-focus-visible:opacity-100">
                    {item.category}
                  </span>
                  <span className="sr-only">：{item.photo.alt}を拡大する</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <Modal
        open={active !== null}
        onClose={() => setCurrent(null)}
        label="写真の拡大表示"
        className="on-dark bg-[#1d1611]! text-cream"
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") move(1);
          if (event.key === "ArrowLeft") move(-1);
        }}
      >
        {active ? (
          <div className="flex h-full flex-col">
            <div className="flex shrink-0 items-center justify-between px-3 py-2 md:px-6 md:py-4">
              <p className="text-[0.8125rem] tracking-[0.06em]" aria-live="polite">
                {(current ?? 0) + 1} / {photoItems.length}
              </p>
              <CloseButton onClick={() => setCurrent(null)} label="拡大表示を閉じる" />
            </div>

            <div className="relative min-h-0 flex-1">
              <Image
                key={active.photo.alt}
                src={active.photo.src}
                alt={active.photo.alt}
                fill
                sizes="(min-width: 1024px) 80vw, 100vw"
                quality={80}
                placeholder="blur"
                className="object-contain"
              />
            </div>

            <div className="flex shrink-0 flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-3 md:px-6 md:py-5">
              <p className="min-w-0 flex-1 basis-60 text-[0.8125rem] leading-relaxed text-cream/85">
                {active.photo.alt}
                {active.photo.credit ? (
                  <>
                    {"（Photo: "}
                    <a
                      href={active.photo.credit.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2"
                    >
                      {active.photo.credit.author}
                    </a>
                    {" / Unsplash）"}
                  </>
                ) : null}
              </p>
              <div className="flex gap-2">
                <button type="button" onClick={() => move(-1)} className="btn btn-cream-line !min-h-11 !px-5 cursor-pointer">
                  前の写真
                </button>
                <button type="button" onClick={() => move(1)} className="btn btn-cream-line !min-h-11 !px-5 cursor-pointer">
                  次の写真
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </Modal>
    </section>
  );
}
