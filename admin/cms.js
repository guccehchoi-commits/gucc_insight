import CMS from 'decap-cms-app';

CMS.init({
  config: {
    backend: {
      name: "github",
      repo: "guccehchoi-commits/gucc_insight",
      branch: "master",
      // 직접 연결을 시도하되, 만약의 경우를 대비해 깃허브 게이트웨이를 설정합니다.
      site_domain: "gucc-insight.pages.dev"
    },
    load_config_file: false, // 이 설정으로 config.yml을 찾지 않게 강제합니다.
    media_folder: "assets/images",
    public_folder: "/assets/images",
    collections: [
      {
        name: "posts",
        label: "포스트 등록",
        folder: "_posts",
        create: true,
        slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
        fields: [
          { label: "제목", name: "title", widget: "string" },
          { label: "부제(요약)", name: "excerpt", widget: "string", required: false },
          { label: "작성일", name: "date", widget: "datetime" },
          { label: "본문 내용", name: "body", widget: "markdown" }
        ]
      }
    ]
  }
});
