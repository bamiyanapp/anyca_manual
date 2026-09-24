"use strict";

// dev-standards共通のtextlint設定（commitlint.config.cjs同様、組織共通ルールを
// そのまま踏襲する）。本リポジトリはdev-standardsをsubmoduleとして持たないため、
// symlinkではなく実体ファイルとしてコピーしている。
module.exports = {
  rules: {
    "preset-ja-technical-writing": {
      // 既定値（100文字）は将来的な目標とし、当面はdev-standards同様に緩和する。
      "sentence-length": { max: 150 },
      "no-doubled-joshi": false,
      "max-ten": false,
      "max-comma": false,
      "no-mix-dearu-desumasu": false,
    },
    // max-lines（textlint-rules/max-lines.js）はこのrulesオブジェクトへ併記しない。
    // --rulesdir経由でのみ解決できる独自ルールを書くと、設定ファイル側のルール解決が
    // 全キーを通常npmパッケージとして解決しようとし失敗するため。CLI側の
    // --rulesdir textlint-rulesのみで有効化される（dev-standards issue #595の教訓）。
  },
};
