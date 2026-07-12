/**
 * Changelog entries, newest first.
 *
 * A plain typed data module on purpose: zero framework API surface, easy to
 * migrate into Astro content collections later if entries grow long-form.
 * Dates are ISO (YYYY-MM-DD) and rendered as-is.
 */
export interface ChangelogEntry {
  date: string;
  title: string;
  items: string[];
}

export const CHANGELOG: ChangelogEntry[] = [
  {
    date: "2026-07-12",
    title: "제품 사이트 뼈대",
    items: [
      "랜딩, 변경 이력, 개인정보 초안 페이지로 사이트 골격을 만들었습니다.",
      "앱 배포 전까지는 진행 상황을 이 페이지에 기록합니다.",
    ],
  },
];
