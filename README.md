## Live Demo

https://uxplorers-frontend.vercel.app/

## How to run development environment

- package manager로 yarn을 사용합니다.

```shell
yarn install
yarn dev
```

## How to run storybook

```shell
yarn storybook
```

## 배포: gh-pages 브랜치 기준

```shell
yarn build
yarn deploy
```

> 현재는 fork한 repo를 수동으로 vercel에서 배포하고 있습니다.

## Our Members

- 김별찬:
  - 개발일정 산정 및 테스크 분배, 미팅 로그 작성
  - 개발환경 세팅
  - 공통 컴포넌트 제작
  - 예매 확인 페이지 및 결제 페이지 구현
  - 즐겨찾기를 제외한 전역 상태 설계 및 구현
  - github actions를 통한 lint, build 및 storybook 배포 플로우 작성
- 양석준:
  - 좌석 선택 페이지 구현
- 김지환:
  - vercel에서의 배포 및 proxy server를 이용한 티머니고 api 통신 로직 작성,
  - 버스 목록 페이지 구현
  - 즐겨찾기 기능 구현
- 조용찬:
  - 검색 페이지(홈페이지) 구현
  - 출발지 및 도착지 목록 페이지 구현
  - Date picker 구현
