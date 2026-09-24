# Goal

本ドキュメントは、Claudeが`anyca_manual`リポジトリで作業する際に常に守るべき恒久的なルールをまとめる。組織共通のノウハウ・品質基準は[dev-standards](https://github.com/bamiyanapp/dev-standards)を正本とし、本ドキュメントには本リポジトリ固有の内容のみを記載する。

# リポジトリの性質

本リポジトリは、カーシェア（Anyca代替サービス）の利用者向け案内をまとめたVuePress製の静的サイトである。ソースは`docs/`配下のMarkdownと、`docs/.vuepress/`配下の設定・コンポーネント（Vue）のみで構成される、テストやAPIを持たない小規模なコンテンツサイトである。

- CI（`.github/workflows/github-pages.yml`）は`master`へのpushをトリガーに、dev-standards共通の`deploy-github-pages`複合action（`npm run build`→GitHub Pagesデプロイ）を呼び出すのみで、lintやテストによる品質ゲートは存在しない
- パッケージ管理はnpm（`package-lock.json`）に統一している。`yarn.lock`は使わない
- そのため、変更内容の正確性・整合性はマージ前の目視レビューが唯一の品質担保手段である

# 出力言語

dev-standards CLAUDE.mdの「出力言語」節に従い、チャット上の応答は日本語で行う。コンテンツ（Markdown本文）自体も本サイトの読者（オーナー・ドライバー）向けであるため日本語で記述する。

# コードレビュー観点・品質基準

## Markdownコンテンツの変更時

- **サイドバー登録の確認**: `docs/`配下に新規ページ（`.md`）を追加した場合、`docs/.vuepress/config.js`の`themeConfig.sidebar`に追記されているか確認する。登録漏れがあると、ビルドは成功してもサイドバーからページへ到達できない
- **内部リンクの整合性**: ページ間の相対リンク（例: `./guideline.html`）が実在するページを指しているか確認する。ページ名を変更・削除した場合は、リンクしている他ページも合わせて更新する
- **料金・数値情報の整合性**: 料金表（`outlander.md`等）と`RentalCalculator.vue`に渡す`base-cost`等のprops値は、変更時に両方を揃える。片方だけ更新すると表示価格と計算結果が食い違う
- **第三者の個人情報**: オーナー自身の情報（住所の目安、連絡手段等）は本サイトの性質上意図的に公開されているが、それ以外の第三者（ドライバー・過去の利用者等）の実名・連絡先・車両ナンバー等を追記しないよう注意する

## `docs/.vuepress/components/*.vue`変更時

- コンポーネントのprops名・型を変更する場合、呼び出し側（`docs/*.md`内の`<RentalCalculator ...>`等）の全箇所を洗い出して合わせて更新する
- 計算ロジック（走行距離加算等）を変更した場合、対応するMarkdown側の料金表記（テキストでの説明）とロジックの結果が一致することを確認する

## 変更前後で必ず行う検証

- ローカルまたはCIログで`npm run build`が成功することを確認する。本リポジトリにはlint/testが無く、ビルド成功が唯一の自動検証であるため、これを省略しない
- 可能であれば`npm start`でローカルプレビューし、変更したページが意図通り表示されることを目視確認する

# Issue駆動・Git運用

dev-standards CLAUDE.mdの「Issue駆動の原則」「PR（MR）承認・マージ禁止」に準ずる。本リポジトリは過去GitHub Web UIからの直接編集・直接push運用も見られるが、Claudeが変更する場合は必ずブランチ作成・PR経由で行い、直接`master`へpushしない。
