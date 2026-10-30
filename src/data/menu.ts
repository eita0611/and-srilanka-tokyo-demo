import { photos, type Photo } from "./photos";

export type Dish = {
  id: string;
  name: string;
  summary: string;
  description: string;
  /** 口コミなどの公開情報から確認できた特徴。店舗確認後に更新します */
  details: { label: string; value: string }[];
  /** 店舗確認後に数値を入れると表示されます。未確認の間は null のままにします */
  price: string | null;
  photo: Photo;
  photoPosition?: string;
};

export const dishes: Dish[] = [
  {
    id: "pork-steak",
    name: "豚肩ロースステーキカレー",
    summary: "ステーキがそのまま一皿に。迷ったら、まずはこのカレーから。",
    description:
      "塩胡椒で味つけした豚肩ロースのステーキを、ココナッツベースのカレーと合わせました。やわらかな肉の旨みに、スパイスの香りが重なります。",
    details: [
      { label: "のせるもの", value: "豚肩ロースのステーキ、パプリカ、カイワレ" },
      { label: "カレー", value: "ココナッツベース" },
      { label: "辛さ", value: "選べます" },
    ],
    price: null,
    photo: photos.dishPork,
    photoPosition: "50% 82%",
  },
  {
    id: "dry-and-curry",
    name: "ドライカレー＆カレー",
    summary: "ドライカレーとカレー。二つの味わいを一皿で。",
    description:
      "ドライカレーとカレーを、ひと皿で楽しめるメニューです。食べ進めるごとに、味わいの違いが楽しめます。",
    details: [
      { label: "内容", value: "ドライカレー、カレー" },
      { label: "辛さ", value: "選べます" },
    ],
    price: null,
    photo: photos.dishDry,
  },
  {
    id: "garlic-shrimp",
    name: "雑穀フライドガーリックシュリンプカレー",
    summary: "シュリンプとフライドガーリックの香ばしさを、雑穀とともに。",
    description:
      "シュリンプにフライドガーリックと雑穀を合わせたカレーです。香ばしさと食感が、ココナッツのまろやかさに重なります。",
    details: [
      { label: "内容", value: "シュリンプ、フライドガーリック、雑穀" },
      { label: "辛さ", value: "選べます" },
    ],
    price: null,
    photo: photos.dishShrimp,
    photoPosition: "50% 60%",
  },
];
