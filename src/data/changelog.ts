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
    date: "2026-11-04",
    title: "Mori 제품군을 오픈 소스로 공개",
    items: [
      "Mori, Mori Lens, 브라우저 확장과 이 사이트의 소스를 GitHub에 MPL-2.0으로 공개했습니다.",
      "첫 화면에서 GitHub 저장소로 바로 이동할 수 있고, Mori Lens와 브라우저 확장도 함께 소개합니다.",
    ],
  },
  {
    date: "2026-11-02",
    title: "소개 문구를 현재 제품 정의에 맞춤",
    items: [
      "Mori를 AI 세션 기록 도구가 아닌 로컬-first 개인 컨텍스트 워크스페이스로 소개합니다.",
      "자동 정리는 표시되고 되돌릴 수 있다는 실제 동작에 맞춰 원칙을 고쳤습니다.",
      "앱이 아직 배포 전이며 일부 기능은 만들어지는 중이라는 상태를 그대로 적었습니다.",
    ],
  },
  {
    date: "2026-07-12",
    title: "제품 사이트 뼈대",
    items: [
      "랜딩, 변경 이력, 개인정보 초안 페이지로 사이트 골격을 만들었습니다.",
      "앱 배포 전까지는 진행 상황을 이 페이지에 기록합니다.",
    ],
  },
];
