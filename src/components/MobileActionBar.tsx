import { store } from "@/data/store";

/** スマホの画面下に常に表示する、アクセスと予約への導線です */
export function MobileActionBar() {
  return (
    <nav
      aria-label="アクセスと予約"
      className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 bg-ink pb-[env(safe-area-inset-bottom)] text-cream lg:hidden"
    >
      <a href="#access" className="flex h-15 items-center justify-center text-[0.9375rem] tracking-[0.08em]">
        アクセス
      </a>
      <a
        href={store.links.reservation.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-15 items-center justify-center bg-spice-deep text-[0.9375rem] tracking-[0.08em]"
      >
        予約する
        <span className="sr-only">（{store.links.reservation.label}が別タブで開きます）</span>
      </a>
    </nav>
  );
}
