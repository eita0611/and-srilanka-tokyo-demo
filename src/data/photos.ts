import type { StaticImageData } from "next/image";

import about from "@/assets/photos/about.jpg";
import dishDry from "@/assets/photos/dish-dry.jpg";
import dishPork from "@/assets/photos/dish-pork.jpg";
import dishShrimp from "@/assets/photos/dish-shrimp.jpg";
import galleryCounter from "@/assets/photos/gallery-counter.jpg";
import galleryCream from "@/assets/photos/gallery-cream.jpg";
import galleryLamp from "@/assets/photos/gallery-lamp.jpg";
import galleryPan from "@/assets/photos/gallery-pan.jpg";
import galleryPlate from "@/assets/photos/gallery-plate.jpg";
import galleryRed from "@/assets/photos/gallery-red.jpg";
import galleryRice from "@/assets/photos/gallery-rice.jpg";
import hero from "@/assets/photos/hero.jpg";
import storyCoconut from "@/assets/photos/story-coconut.jpg";
import storyFerment from "@/assets/photos/story-ferment.jpg";
import storyFusion from "@/assets/photos/story-fusion.jpg";
import storySpice from "@/assets/photos/story-spice.jpg";

export type Photo = {
  src: StaticImageData;
  alt: string;
  /** true の間は写真に「仮画像」と表示します。店舗の写真に差し替えたら false にします */
  placeholder: boolean;
  credit?: { author: string; url: string };
};

const unsplash = (src: StaticImageData, alt: string, author: string, id: string): Photo => ({
  src,
  alt,
  placeholder: true,
  credit: { author, url: `https://unsplash.com/photos/${id}` },
});

/** すべて Unsplash License の仮画像です。店舗の料理、店内、外観ではありません */
export const photos = {
  hero: unsplash(hero, "仮画像：黒い器に盛った、ライムを添えたココナッツ系のカレー", "Bruna Branco", "0wn-DdavPa4"),
  about: unsplash(about, "仮画像：ごはんの両側に2種類のカレーを盛った一皿", "Kouji Tsuru", "amWPeDKSoCY"),
  dishPork: unsplash(dishPork, "仮画像：煮込んだ肉と焼いたじゃがいもをのせたカレー", "tommao wang", "ktKRgwK3Gj8"),
  dishDry: unsplash(dishDry, "仮画像：ごはんにひき肉のカレーをのせた一皿", "Junel Mujar", "jNUecsXilAo"),
  dishShrimp: unsplash(dishShrimp, "仮画像：オレンジ色のソースにエビと香草を合わせた料理", "67 Digital", "7n-19fjZZ5Y"),
  storySpice: unsplash(storySpice, "仮画像：黒い台に広げた、さまざまなスパイス", "Anju Ravindranath", "Nihdo084Yos"),
  storyFerment: unsplash(storyFerment, "仮画像：密封したガラス瓶の中で発酵する食材", "Stanley Kustamin", "3PMnETa32D4"),
  storyCoconut: unsplash(storyCoconut, "仮画像：積み上げられた、繊維に包まれたココナッツ", "Sri Lanka", "0nH_OVirQSg"),
  storyFusion: unsplash(storyFusion, "仮画像：葉の上に盛りつけたスリランカの食事", "Zoshua Colah", "3gvwRZ_Omgw"),
  galleryCream: unsplash(galleryCream, "仮画像：黒い鍋で仕上げた、クリームと香菜をのせたオレンジ色のカレー", "Raman", "sqcH2q7lkvo"),
  galleryPan: unsplash(galleryPan, "仮画像：黒いフライパンで仕上げた、香菜をのせたカレー", "Sanket Shah", "eEWlcfydzQ4"),
  galleryRed: unsplash(galleryRed, "仮画像：肉とハーブを入れた赤いカレー", "Zayed Ahmed Zadu", "5Kdf1Nnz35g"),
  galleryRice: unsplash(galleryRice, "仮画像：黄色いごはんを丸く盛ったカレー", "Kouji Tsuru", "kKddDHkybVg"),
  galleryPlate: unsplash(galleryPlate, "仮画像：木のテーブルに置いたカレーの一皿", "Kouji Tsuru", "8-ZV01N2804"),
  galleryCounter: unsplash(galleryCounter, "仮画像：器と箸を並べた木のカウンター", "Maximilian Csali", "mV9VIOgojuw"),
  galleryLamp: unsplash(galleryLamp, "仮画像：ランプが灯る飲食店の店内", "takahiro taguchi", "8l_RuuZrOyY"),
} satisfies Record<string, Photo>;
