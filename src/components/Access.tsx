import { store } from "@/data/store";

function Row({ term, children }: { term: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1 border-b border-ink/20 py-5 sm:grid-cols-[7em_1fr] sm:gap-4">
      <dt className="text-[0.875rem] text-olive-deep">{term}</dt>
      <dd className="leading-[1.8]">{children}</dd>
    </div>
  );
}

export function Access() {
  const { hours, links } = store;

  return (
    <section id="access" aria-labelledby="access-heading" className="bg-cream-deep py-20 lg:py-36">
      <div className="shell grid gap-x-16 gap-y-12 lg:grid-cols-12">
        <div className="lg:col-span-6 xl:col-span-5">
          <p data-reveal className="section-label">
            Access <span>店舗情報</span>
          </p>
          <h2
            id="access-heading"
            data-reveal
            className="mt-6 text-[clamp(1.875rem,3.2vw,3rem)] leading-[1.5] tracking-[0.05em]"
          >
            神保町で、お待ちしています。
          </h2>

          <dl data-reveal className="mt-10 border-t border-ink/20">
            <Row term="店名">
              {store.name}
              <span className="block text-[0.875rem] text-ink-soft">旧店名：{store.formerName}</span>
            </Row>
            <Row term="住所">{store.address}</Row>
            <Row term="営業時間">
              {hours.open}〜{hours.close}
              <span className="block text-[0.875rem] text-ink-soft">
                ラストオーダー {hours.lastOrder}
                <br />
                {hours.note}
              </span>
            </Row>
            <Row term="定休日">{hours.closed}</Row>
            <Row term="アクセス">
              <ul>
                {store.access.map((item) => (
                  <li key={item.station}>
                    {item.station}から{item.walk}
                  </li>
                ))}
              </ul>
            </Row>
            {store.phone ? (
              <Row term="電話">
                <a href={`tel:${store.phone.replaceAll("-", "")}`} className="link-line">
                  {store.phone}
                </a>
              </Row>
            ) : null}
          </dl>

          {hours.verified ? null : (
            <p data-reveal className="mt-4 text-[0.8125rem] leading-relaxed text-ink-soft">
              営業時間と定休日は、公開情報にもとづく参考値です。ご来店前に店舗へご確認ください。
            </p>
          )}

          <div data-reveal className="mt-8 flex flex-wrap gap-3">
            <a
              href={links.reservation.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-spice flex-1 whitespace-nowrap sm:flex-none"
            >
              予約ページを開く
              <span className="sr-only">（{links.reservation.label}が別タブで開きます）</span>
            </a>
            <a
              href={links.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-line flex-1 whitespace-nowrap sm:flex-none"
            >
              Googleマップで開く
              <span className="sr-only">（別タブで開きます）</span>
            </a>
          </div>
          <p data-reveal className="mt-4 text-[0.8125rem] leading-relaxed text-ink-soft">
            予約は{links.reservation.label}で受け付けています。予約の条件は予約ページでご確認ください。
            <a href={links.tabelog} target="_blank" rel="noopener noreferrer" className="link-line ml-1 inline-block">
              食べログの店舗ページ
              <span className="sr-only">（別タブで開きます）</span>
            </a>
          </p>
        </div>

        <div data-reveal className="lg:col-span-6 xl:col-span-7">
          <iframe
            src={links.googleMapsEmbed}
            title={`${store.name}の地図（Googleマップ）`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block aspect-square h-full w-full border-0 bg-cream sepia-[0.18] saturate-[0.85] sm:aspect-[4/3] lg:aspect-auto"
          />
        </div>
      </div>
    </section>
  );
}
