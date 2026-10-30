"use client";

import { useEffect, useRef, useState } from "react";

import { navItems } from "@/data/content";
import { site, store } from "@/data/store";

import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const offsetTop = site.isDemo && !scrolled ? "top-7" : "top-0";

  return (
    <>
      <header
        className={`fixed inset-x-0 z-40 transition-[top,background-color,color,box-shadow] duration-500 ease-soft ${offsetTop} ${
          scrolled
            ? "bg-cream/95 text-ink shadow-[0_1px_0_rgb(41_32_25/0.14)] backdrop-blur-sm"
            : "on-dark text-cream"
        }`}
      >
        <div className="shell flex h-16 items-center justify-between lg:h-20">
          <a href="#main" aria-label={`${store.name} ページの先頭へ`} className="text-[1.125rem] lg:text-[1.3125rem]">
            <Logo className={scrolled ? "[&>span:first-child]:text-spice-deep" : ""} />
          </a>

          <nav aria-label="メインメニュー" className="hidden items-center gap-8 lg:flex xl:gap-10">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="group relative py-2 text-[0.875rem] tracking-[0.08em]">
                {item.ja}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-1 h-px origin-left scale-x-0 bg-current transition-transform duration-500 ease-soft group-hover:scale-x-100"
                />
              </a>
            ))}
            <a
              href={store.links.reservation.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn !min-h-11 !px-5 ${scrolled ? "btn-spice" : "btn-cream"}`}
            >
              予約する
              <span className="sr-only">（{store.links.reservation.label}が別タブで開きます）</span>
            </a>
          </nav>

          <button
            type="button"
            onClick={() => menuRef.current?.showModal()}
            aria-haspopup="dialog"
            aria-label="メニューを開く"
            className="-mr-2 flex size-11 flex-col items-center justify-center gap-[7px] lg:hidden"
          >
            <span className="h-px w-6 bg-current" />
            <span className="h-px w-6 bg-current" />
          </button>
        </div>
      </header>

      <dialog ref={menuRef} aria-label="メニュー" className="modal on-dark bg-ink! text-cream lg:hidden">
        <div className="flex h-full flex-col overflow-y-auto">
          <div className="shell flex h-16 shrink-0 items-center justify-between">
            <Logo className="text-[1.125rem]" />
            <button
              type="button"
              onClick={() => menuRef.current?.close()}
              aria-label="メニューを閉じる"
              className="relative -mr-2 size-11"
            >
              <span className="absolute left-2.5 top-1/2 h-px w-6 rotate-45 bg-current" />
              <span className="absolute left-2.5 top-1/2 h-px w-6 -rotate-45 bg-current" />
            </button>
          </div>

          <nav aria-label="メニュー" className="shell flex-1 pt-6">
            <ul>
              {navItems.map((item) => (
                <li key={item.href} className="border-b border-cream/15">
                  <a
                    href={item.href}
                    onClick={() => menuRef.current?.close()}
                    className="flex items-baseline justify-between py-[1.1rem]"
                  >
                    <span className="font-mincho text-[1.5rem] leading-snug">{item.ja}</span>
                    <span className="font-caslon text-[1rem] italic text-spice-light">{item.en}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="shell pb-8 pt-8">
            <a
              href={store.links.reservation.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-cream w-full"
            >
              {store.links.reservation.label}で予約する
              <span className="sr-only">（別タブで開きます）</span>
            </a>
            <p className="mt-4 text-[0.8125rem] leading-relaxed text-cream/75">{store.address}</p>
          </div>
        </div>
      </dialog>
    </>
  );
}
