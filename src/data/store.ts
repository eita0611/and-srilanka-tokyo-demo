/**
 * 店舗情報。営業時間やリンクの変更はこのファイルだけで完結します。
 * 確認状況と出典は docs/store-info-checklist.md にまとめています。
 */

const name = "&スリランカTOKYO";
const address = "東京都千代田区神田神保町1-54-4 JHVビル1F";
const coordinates = { lat: 35.6982148, lng: 139.7571573 };

export const store = {
  name,
  formerName: "RスリランカTOKYO",
  address,
  /** 構造化データ用に住所を分けたもの */
  addressParts: { region: "東京都", locality: "千代田区", street: "神田神保町1-54-4 JHVビル1F" },
  coordinates,

  access: [
    { station: "神保町駅 A5出口", walk: "徒歩約3分" },
    { station: "JR水道橋駅", walk: "徒歩約7分" },
  ],

  hours: {
    open: "11:00",
    close: "21:30",
    lastOrder: "21:00",
    closed: "不定休",
    /** 公開情報に記載あり。店舗確認後も掲載する場合は残す */
    note: "カレーがなくなり次第、営業を終了します。",
    /** 店舗に確認できたら true にすると「参考値」の注記が消えます */
    verified: false,
  },

  award: "食べログ カレー TOKYO 百名店 2026 選出",

  /** 電話番号は店舗確認後に入力すると店舗情報に表示されます */
  phone: null as string | null,

  links: {
    googleMaps: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name} ${address}`)}`,
    googleMapsEmbed: `https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}&z=17&hl=ja&output=embed`,
    reservation: {
      label: "ホットペッパーグルメ",
      url: "https://www.hotpepper.jp/strJ003917075/yoyaku/",
    },
    tabelog: "https://tabelog.com/tokyo/A1310/A131003/13276047/",
    instagram: {
      handle: "@andsrilankatokyo",
      url: "https://www.instagram.com/andsrilankatokyo/",
    },
  },
};

/** Vercel が設定する本番ドメイン。https:// は含まれません */
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

/**
 * サイト全体の設定。正式公開時は isDemo を false に変更します。
 * false にすると、デモ表記と検索除外が外れ、構造化データが出力されます。
 */
export const site = {
  isDemo: true,
  url: process.env.NEXT_PUBLIC_SITE_URL || (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000"),
  title: `${name}｜神保町のスリランカカレー`,
  description:
    "発酵とスパイスが織りなす、神保町のスリランカカレー。神保町駅A5出口から徒歩約3分。メニュー、営業時間、アクセスをご案内します。",
  demoNotice:
    "このサイトは、店舗への提案用に制作した非公式のデモです。店舗の公式サイト、または店舗が公認したサイトではありません。",
};
