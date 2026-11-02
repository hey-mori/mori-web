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
  /** True while the name is a codename; surfaces an honest note in the footer. */
  isCodename: true,
  /** One-line positioning, Korean-first. */
  tagline: "흩어진 작업의 흔적을, 다시 쓸 수 있는 기록으로.",
  /** Longer description used in meta tags and the hero. */
  description:
    "메모, 링크, AI 대화, Git 기록 같은 작업의 흔적을 시간과 프로젝트에 연결된 기록으로 정리하는 로컬-first 개인 컨텍스트 워크스페이스입니다. 기록은 사용자의 기기에 저장됩니다.",
  /** Copyright holder shown in the footer. The code is hosted under hey-mori. */
  org: "swarea",
  /** Current app distribution status. Keep honest; no fake download buttons. */
  appStatus: "private-development" as const,
} satisfies Record<string, unknown>;

export type AppStatus = typeof SITE.appStatus;
