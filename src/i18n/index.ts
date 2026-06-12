const ja = {
  siteTitle: "Yuya Kayama | ポートフォリオ",
  siteDescription: "Yuya Kayama のソフトウェアエンジニアとしてのポートフォリオ",

  cardLabel: "YUYA KAYAMA",
  cardName: "Yuya Kayama",
  cardRole: "Software Engineer",
  cardSkills: "TypeScript / Go / Rust / OCaml",
  cardEmail: "yuyakayama23@gmail.com",

  heroEyebrow: "Portfolio",
  heroLead:
    "信頼性が高く、安全で、よく考えられたソフトウェアを作るソフトウェアエンジニアです。",

  heroLinkProjects: "Projects",
  heroLinkPublications: "Publications",
  heroLinkAbout: "About",
  heroLinkContact: "Contact",
  heroLinkGithub: "GitHub",

  projectsEyebrow: "Projects",
  projectsTitle: "Selected work",
  projectsBody: "公開している OSS や、技術的な取り組みを掲載しています。",

  projectOneLabel: "Open Source",
  projectOneTitle: "react-native-websocket-self-signed",
  projectOneBody:
    "自己署名証明書を利用した WebSocket サーバーへ React Native から接続するためのライブラリです。",
  projectOneLink: "GitHub で見る",

  publicationsEyebrow: "Publications",
  publicationsTitle: "執筆実績",
  publicationsBody: "技術記事や雑誌への寄稿実績です。",

  publicationOneMeta: "Magazine",
  publicationOneTitle: "日経ソフトウエア 2025年1月号 記事寄稿",
  publicationOneBody:
    "日経ソフトウエア 2025年1月号にて、書籍管理アプリの実装例に関する記事を執筆しました。バーコードを読み取ってISBNを取得し、楽天ブックスAPIから書籍情報を取得・保存・表示する方法を紹介しています。",

  publicationTwoMeta: "Magazine",
  publicationTwoTitle: "日経ソフトウエア 2024年1月号 記事寄稿",
  publicationTwoBody:
    "日経ソフトウエア 2024年1月号にて、OCR翻訳アプリの実装例に関する記事を執筆しました。画像から文字を抽出し、DeepL翻訳APIを使って翻訳結果を取得・保存する方法を紹介しています。",

  aboutEyebrow: "About",
  aboutTitle: "Engineering with security in mind.",
  aboutBody:
    "フロントエンド、モバイル、バックエンド、アーキテクチャを横断して開発しています。React / React Native / TypeScript / Go を中心に、シンプルで速く、保守しやすく、運用しやすいプロダクト開発を得意としています。",

  contactEyebrow: "Contact",
  contactTitle: "気になることがあれば、お気軽にご連絡ください。",
  contactBody:
    "フリーランスのソフトウェアエンジニアとして、Web / モバイルアプリ開発、技術相談、設計レビューなどのご相談を受け付けています。",

  contactLinkEmail: "Email",
  contactLinkGithub: "GitHub",
};

const en = {
  siteTitle: "Yuya Kayama | Portfolio",
  siteDescription: "Software engineer portfolio of Yuya Kayama",

  cardLabel: "YUYA KAYAMA",
  cardName: "Yuya Kayama",
  cardRole: "Software Engineer",
  cardSkills: "TypeScript / Go / Rust / OCaml",
  cardEmail: "yuyakayama23@gmail.com",

  heroEyebrow: "Portfolio",
  heroLead:
    "Software engineer building reliable, secure, and thoughtful software. Based in Nice FR from Tokyo JP.",

  heroLinkProjects: "Projects",
  heroLinkPublications: "Publications",
  heroLinkAbout: "About",
  heroLinkContact: "Contact",
  heroLinkGithub: "GitHub",

  projectsEyebrow: "Projects",
  projectsTitle: "Selected work",
  projectsBody: "Selected open-source work and technical projects.",

  projectOneLabel: "Open Source",
  projectOneTitle: "react-native-websocket-self-signed",
  projectOneBody:
    "A React Native library for connecting to WebSocket servers using self-signed certificates.",
  projectOneLink: "View on GitHub",

  publicationsEyebrow: "Publications",
  publicationsTitle: "Technical writing",
  publicationsBody: "Magazine contributions and technical writing.",

  publicationOneMeta: "Magazine",
  publicationOneTitle: "Nikkei Software",
  publicationOneBody: "Contributed a technical article.",

  publicationTwoMeta: "Magazine",
  publicationTwoTitle: "Nikkei Software",
  publicationTwoBody: "Contributed a second technical article.",

  aboutEyebrow: "About",
  aboutTitle: "Engineering with security in mind.",
  aboutBody:
    "I work across frontend, mobile, backend, and architecture. I mainly work with React, React Native, TypeScript, and Go, and I like products that are simple, fast, maintainable, and easy to operate. Started my career as a ",

  contactEyebrow: "Contact",
  contactTitle: "Feel free to reach out.",
  contactBody:
    "I work as a freelance software engineer. If anything catches your interest, feel free to contact me about web and mobile app development, technical consultation, or architecture review.",

  contactLinkEmail: "Email",
  contactLinkGithub: "GitHub",
};

export const translations = {
  ja,
  en,
};

export type Locale = keyof typeof translations;

export type TranslationSchema = typeof ja;

/**
 * Return the translation for the given locale.
 * If the locale is not found, it returns the Japanese translation as a fallback.
 */
export const getTranslations = (locale: Locale): TranslationSchema =>
  translations[locale] ?? translations.ja;
