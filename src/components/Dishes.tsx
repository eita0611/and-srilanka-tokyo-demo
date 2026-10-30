"use client";

import { useState } from "react";

import { dishes, type Dish } from "@/data/menu";
import { store } from "@/data/store";

import { CloseButton, Modal } from "./Modal";
import { Photo } from "./Photo";

const layouts = [
  { frame: "lg:col-span-7", photo: "aspect-[4/5] lg:aspect-[6/7]", sizes: "(min-width: 1024px) 56vw, 100vw" },
  { frame: "lg:col-span-5 lg:mt-40", photo: "aspect-[4/3] lg:aspect-[5/4]", sizes: "(min-width: 1024px) 40vw, 100vw" },
  { frame: "lg:col-span-8 lg:col-start-3 lg:mt-24", photo: "aspect-[4/5] lg:aspect-[16/9]", sizes: "(min-width: 1024px) 64vw, 100vw" },
];

export function Dishes() {
  const [current, setCurrent] = useState<number | null>(null);
  const dish = current === null ? null : dishes[current];

  return (
    <section id="dishes" aria-labelledby="dishes-heading" className="bg-cream-deep py-20 lg:py-36">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-4">
          <div>
            <p data-reveal className="section-label">
              Signature dishes <span>おすすめ料理</span>
            </p>
            <h2
              id="dishes-heading"
              data-reveal
              className="mt-6 text-[clamp(1.875rem,4.4vw,4rem)] leading-[1.4] tracking-[0.05em]"
            >
              はじめての一皿に。
            </h2>
          </div>
          <p data-reveal className="max-w-[26em] text-[0.875rem] leading-relaxed text-ink-soft">
            写真は仮画像で、実際の料理とは異なります。掲載メニューと価格は、店舗に確認したうえで掲載します。
          </p>
        </div>

        <ul className="mt-12 grid gap-x-16 gap-y-14 lg:mt-20 lg:grid-cols-12 lg:gap-y-0">
          {dishes.map((item, index) => (
            <li key={item.id} data-reveal className={layouts[index].frame}>
              <button
                type="button"
                onClick={() => setCurrent(index)}
                aria-haspopup="dialog"
                className="zoom-trigger group block w-full cursor-pointer text-left"
              >
                <span className="zoom-frame block">
                  <Photo
                    photo={item.photo}
                    sizes={layouts[index].sizes}
                    position={item.photoPosition}
                    decorative
                    className={layouts[index].photo}
                  />
                </span>
                <span className="mt-5 flex items-start justify-between gap-6">
                  <span className="block">
                    <span className="block font-mincho text-[1.5rem] leading-[1.5] tracking-[0.04em] lg:text-[1.875rem]">
                      {item.name}
                    </span>
                    <span className="mt-2 block text-[0.9375rem] leading-relaxed text-ink-soft">{item.summary}</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="relative mt-2 block size-10 shrink-0 rounded-full border border-ink/40 transition-colors duration-500 ease-soft group-hover:border-spice-deep group-hover:bg-spice-deep group-hover:text-cream"
                  >
                    <span className="absolute left-1/2 top-1/2 h-px w-3.5 -translate-x-1/2 -translate-y-1/2 bg-current transition-transform duration-500 ease-soft group-hover:rotate-90" />
                    <span className="absolute left-1/2 top-1/2 h-3.5 w-px -translate-x-1/2 -translate-y-1/2 bg-current transition-transform duration-500 ease-soft group-hover:rotate-90" />
                  </span>
                </span>
                <span className="sr-only">の詳細を開く</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Modal open={dish !== null} onClose={() => setCurrent(null)} label={dish ? `${dish.name}の詳細` : "料理の詳細"}>
        {dish ? (
          <DishDetail
            dish={dish}
            onClose={() => setCurrent(null)}
            onNext={() => setCurrent(((current ?? 0) + 1) % dishes.length)}
          />
        ) : null}
      </Modal>
    </section>
  );
}

function DishDetail({ dish, onClose, onNext }: { dish: Dish; onClose: () => void; onNext: () => void }) {
  return (
    <div className="ml-auto flex h-full w-full max-w-[64rem] flex-col overflow-y-auto bg-cream text-ink md:flex-row md:overflow-hidden">
      <Photo
        photo={dish.photo}
        sizes="(min-width: 768px) 32rem, 100vw"
        position={dish.photoPosition}
        className="aspect-[5/4] w-full shrink-0 md:aspect-auto md:h-full md:w-1/2"
      />
      <div className="flex flex-1 flex-col px-5 pb-8 pt-4 md:overflow-y-auto md:px-10 md:pb-10 md:pt-6">
        <CloseButton onClick={onClose} label="詳細を閉じる" className="-mr-2 ml-auto shrink-0" />
        <h3 className="mt-2 text-[1.75rem] leading-[1.45] tracking-[0.04em] md:mt-8 md:text-[2.125rem]">{dish.name}</h3>
        <p className="mt-5 text-ink-soft">{dish.description}</p>

        <dl className="mt-7 border-t border-ink/20 text-[0.9375rem]">
          {dish.details.map((detail) => (
            <div key={detail.label} className="grid grid-cols-[6.5em_1fr] gap-3 border-b border-ink/20 py-3 leading-relaxed">
              <dt className="text-olive">{detail.label}</dt>
              <dd>{detail.value}</dd>
            </div>
          ))}
          <div className="grid grid-cols-[6.5em_1fr] gap-3 border-b border-ink/20 py-3 leading-relaxed">
            <dt className="text-olive">価格</dt>
            <dd>{dish.price ?? "店舗に確認後、掲載します"}</dd>
          </div>
        </dl>

        <p className="mt-4 text-[0.8125rem] leading-relaxed text-ink-soft">
          料理の内容は公開情報をもとにした案です。掲載前に店舗へ確認します。
        </p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-8">
          <a
            href={store.links.reservation.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-spice flex-1 whitespace-nowrap sm:flex-none"
          >
            予約する
            <span className="sr-only">（{store.links.reservation.label}が別タブで開きます）</span>
          </a>
          <button type="button" onClick={onNext} className="link-line cursor-pointer text-[0.9375rem]">
            次の料理を見る
          </button>
        </div>
      </div>
    </div>
  );
}
