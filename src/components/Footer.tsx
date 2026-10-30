import { photos, type Photo } from "@/data/photos";
import { site, store } from "@/data/store";

import { Logo } from "./Logo";

const credited = Object.values(photos as Record<string, Photo>).filter((photo) => photo.credit);

export function Footer() {
  return (
    <footer className="on-dark bg-ink pb-24 pt-16 text-cream lg:pb-12 lg:pt-24">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-x-16 gap-y-10">
          <div>
            <Logo className="text-[clamp(2rem,5vw,3.75rem)]" />
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-cream/85">{store.address}</p>
          </div>
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-[0.9375rem]">
            <li>
              <a href={store.links.instagram.url} target="_blank" rel="noopener noreferrer" className="link-line">
                Instagram
                <span className="sr-only">（{store.links.instagram.handle}、別タブで開きます）</span>
              </a>
            </li>
            <li>
              <a href={store.links.googleMaps} target="_blank" rel="noopener noreferrer" className="link-line">
                Googleマップ
                <span className="sr-only">（別タブで開きます）</span>
              </a>
            </li>
          </ul>
        </div>

        {site.isDemo ? (
          <div className="mt-12 border-t border-cream/20 pt-6 text-[0.8125rem] leading-relaxed text-cream/80 lg:mt-16">
            <p>{site.demoNotice}</p>
            <details className="mt-3">
              <summary className="cursor-pointer">仮画像のクレジット（Unsplash License）</summary>
              <ul className="mt-3 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
                {credited.map((photo) => (
                  <li key={photo.credit?.url}>
                    <a href={photo.credit?.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                      {photo.credit?.author}
                    </a>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        ) : null}
      </div>
    </footer>
  );
}
