/**
 * The single rename point for the whole site.
 *
 * "Mori" is a placeholder codename (see the app repo's
 * docs/production-program.md, decision D3). When the real product name
 * lands, change it here; no page hardcodes the name.
 */
export const SITE = {
  /** Product name as rendered in the wordmark and copy. */
  productName: "Mori",
  /** One-line positioning, Korean-first. */
  tagline: "흩어진 작업의 흔적을, 다시 쓸 수 있는 기록으로.",
  /** Longer description used in meta tags and the hero. */
  description:
    "메모, 링크, AI 대화, Git 기록 같은 작업의 흔적을 시간과 프로젝트에 연결된 기록으로 정리하는 로컬-first 개인 컨텍스트 워크스페이스입니다. 기록은 사용자의 기기에 저장됩니다.",
  /** Copyright holder shown in the footer. The code is hosted under hey-mori. */
  org: "swarea",
  /** Where the source lives. There is no download button until a release is published. */
  repositoryUrl: "https://github.com/hey-mori/mori",
} satisfies Record<string, unknown>;

/** The other Mori projects, introduced on the landing page. */
export const FAMILY = [
  {
    name: "Mori Lens",
    body: "화면의 어떤 글이든 포인터를 올리면 내 언어로 풀어 줍니다. 모델은 내 컴퓨터에서 실행됩니다.",
    href: "https://github.com/hey-mori/mori-lens",
  },
  {
    name: "Mori 브라우저 확장",
    body: "작업하던 웹 페이지를 Mori의 기록에 더합니다. 켜 둔 동안에만 동작합니다.",
    href: "https://github.com/hey-mori/mori-browser-extension",
  },
] as const;
