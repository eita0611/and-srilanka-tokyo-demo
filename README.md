# &スリランカTOKYO 提案用デモサイト

店舗への営業提案に使う、非公式のデモサイトです。店舗の公式サイトではありません。

## 起動方法

Node.js 24 が必要です。このMacでは `~/.local/node` に Node.js を入れているため、ターミナルごとに最初の1行を実行します。

```bash
export PATH="$HOME/.local/node/bin:$PATH"
```

```bash
npm install
```

```bash
npm run dev
```

ブラウザで http://localhost:3000 を開きます。

| コマンド | 内容 |
| --- | --- |
| `npm run dev` | 開発サーバーを起動 |
| `npm run build` | 本番用にビルド |
| `npm run start` | ビルドしたサイトを起動 |
| `npm run typecheck` | 型チェック |

## 内容を変更する

| 変更したいもの | ファイル |
| --- | --- |
| 営業時間、住所、予約先、SNS、デモ設定 | `src/data/store.ts` |
| 料理名、説明、価格 | `src/data/menu.ts` |
| 見出し、紹介文、ギャラリーの構成 | `src/data/content.ts` |
| 写真の差し替え、クレジット | `src/data/photos.ts` と `src/assets/photos/` |

店舗に確認する項目は [docs/store-info-checklist.md](docs/store-info-checklist.md) にまとめています。

## 正式公開するとき

1. `src/data/store.ts` の `site.isDemo` を `false` にします。デモ表記と検索除外が外れ、構造化データが出力されます。
2. 独自ドメインを使う場合は、環境変数 `NEXT_PUBLIC_SITE_URL` に公開するURLを設定します。OGP画像のURLに使います。`.vercel.app` のURLで公開する場合、設定は不要です。
3. `public/og.jpg` を店舗の写真から作り直します。
4. 店舗の写真に差し替え、`src/data/photos.ts` の `placeholder` を `false` にします。

Next.js 16 / React 19 / TypeScript / Tailwind CSS 4
