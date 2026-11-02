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
  tagline: "당신의 작업을, 검토된 기억으로.",
  /** Longer description used in meta tags and the hero. */
  description:
    "AI 코딩 세션을 증거가 연결된 타임라인과 검토를 거친 프로젝트 기억으로 바꾸는 로컬-first 데스크톱 앱입니다. 모든 데이터는 사용자의 기기에만 저장됩니다.",
  /** Copyright holder shown in the footer. The code is hosted under hey-mori. */
  org: "swarea",
  /** Current app distribution status. Keep honest; no fake download buttons. */
  appStatus: "private-development" as const,
} satisfies Record<string, unknown>;

export type AppStatus = typeof SITE.appStatus;
