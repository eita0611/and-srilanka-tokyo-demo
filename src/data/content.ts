import { photos, type Photo } from "./photos";

export const navItems = [
  { href: "#about", en: "About", ja: "私たちについて" },
  { href: "#dishes", en: "Dishes", ja: "おすすめ料理" },
  { href: "#story", en: "Story", ja: "こだわり" },
  { href: "#gallery", en: "Gallery", ja: "ギャラリー" },
  { href: "#access", en: "Access", ja: "店舗情報" },
];

export const hero = {
  headline: ["スパイスが香る。", "記憶に残る一皿。"],
  lead: "発酵とスパイスが織りなす、神保町のスリランカカレー。",
};

export const about = {
  heading: "スリランカのスパイスと、日本の食文化が出会う場所。",
  body: [
    "&スリランカTOKYOは、神保町にあるカレーの店です。発酵とスパイスを取り入れ、ココナッツの風味を活かしたカレーをお出ししています。",
    "スリランカの香りと、日本の食文化。その二つが、一皿の中で出会います。",
  ],
  points: [
    { term: "発酵とスパイス", description: "辛さだけで終わらない、奥行きのある味わいに。" },
    { term: "ココナッツの風味", description: "まろやかさの中に、スパイスのキレが立ちます。" },
    { term: "豚肩ロースステーキカレー", description: "ステーキがそのまま入った、印象に残る一皿。" },
  ],
};

export type StoryPair = {
  left: string;
  right: string;
  body: string;
  /** 店舗への取材後に確定させる内容を、本文と区別して表示します */
  note?: string;
  photo: Photo;
};

export const story = {
  heading: "スパイスの奥深さと、記憶に残る一皿。",
  pairs: [
    {
      left: "スパイス",
      right: "香り",
      body: "運ばれてきた瞬間の香りから、食べ終えたあとの余韻まで。スパイスの輪郭がはっきりと立つカレーです。",
      photo: photos.storySpice,
    },
    {
      left: "発酵",
      right: "余韻",
      body: "「発酵とスパイス」は、私たちのカレーを語る二つの言葉です。辛さの先に残る、ふくらみのある味わいを大切にしています。",
      note: "使用する素材と工程は、店舗への取材後に掲載します。",
      photo: photos.storyFerment,
    },
    {
      left: "ココナッツ",
      right: "鉄板",
      body: "ココナッツをベースにしたカレーは、まろやかでありながら、スパイスのキレを失いません。熱々の鉄板で運ばれてくる時間も、味わいの一部です。",
      photo: photos.storyCoconut,
    },
    {
      left: "スリランカ",
      right: "日本",
      body: "スリランカのカレーの香りと、日本の食文化の感覚を一皿に。二つの国の料理が、神保町で出会います。",
      photo: photos.storyFusion,
    },
  ] satisfies StoryPair[],
};

export type GalleryItem =
  | { kind: "photo"; category: "料理" | "店内"; photo: Photo; layout: string }
  | { kind: "pending"; category: "外観"; text: string; layout: string };

/** layout はデスクトップで12列グリッド上に置く位置です */
export const gallery: GalleryItem[] = [
  { kind: "photo", category: "料理", photo: photos.galleryBowl, layout: "row-span-2 lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-6" },
  { kind: "photo", category: "料理", photo: photos.galleryPan, layout: "lg:col-start-5 lg:col-end-10 lg:row-start-1 lg:row-end-4" },
  { kind: "photo", category: "店内", photo: photos.galleryInterior, layout: "row-span-2 lg:col-start-10 lg:col-end-13 lg:row-start-1 lg:row-end-5" },
  { kind: "photo", category: "料理", photo: photos.galleryRice, layout: "lg:col-start-5 lg:col-end-8 lg:row-start-4 lg:row-end-7" },
  { kind: "photo", category: "料理", photo: photos.galleryPlate, layout: "lg:col-start-8 lg:col-end-10 lg:row-start-4 lg:row-end-7" },
  {
    kind: "pending",
    category: "外観",
    text: "外観の写真は店舗での撮影後に掲載します。",
    layout: "col-span-2 lg:col-span-1 lg:col-start-10 lg:col-end-13 lg:row-start-5 lg:row-end-7",
  },
  { kind: "photo", category: "料理", photo: photos.galleryRed, layout: "col-span-2 lg:col-span-1 lg:col-start-1 lg:col-end-5 lg:row-start-6 lg:row-end-10" },
  { kind: "photo", category: "店内", photo: photos.galleryLamp, layout: "lg:col-start-5 lg:col-end-9 lg:row-start-7 lg:row-end-10" },
  { kind: "photo", category: "店内", photo: photos.galleryCounter, layout: "lg:col-start-9 lg:col-end-13 lg:row-start-7 lg:row-end-10" },
];
