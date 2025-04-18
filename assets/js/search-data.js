// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "For more latest work, please refer to my scholar page.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "selected public repos",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "news-transher-is-accepted-by-emnlp-22",
          title: 'TranSHER is accepted by EMNLP’22.',
          description: "",
          section: "News",},{id: "news-our-work-done-with-map-was-reported-by-the-university-of-sheffield-news",
          title: 'Our work done with MAP was reported by the University of Sheffield News....',
          description: "",
          section: "News",},{id: "news-successfully-organized-the-music-and-audio-processing-workshop-hosted-at-hkust",
          title: 'Successfully organized the Music and Audio Processing workshop hosted at HKUST.',
          description: "",
          section: "News",},{id: "news-two-papers-accepted-by-the-ismir-23",
          title: 'Two papers accepted by the ISMIR’23.',
          description: "",
          section: "News",},{id: "news-received-the-best-student-pitch-at-multimodalai-23-workshop",
          title: 'Received the best student pitch at MultimodalAI’23 workshop.',
          description: "",
          section: "News",},{id: "news-gave-a-talk-at-ai-time-chinese-with-over-20k-views",
          title: 'Gave a talk at AI Time (Chinese), with over 20K+ views.',
          description: "",
          section: "News",},{id: "news-la-ser-3-is-accepted-by-emnlp-23",
          title: 'LA(SER)^3 is accepted by EMNLP’23.',
          description: "",
          section: "News",},{id: "news-marble-is-accepted-by-neurips-23",
          title: 'MARBLE is accepted by NeurIPS’23.',
          description: "",
          section: "News",},{id: "news-m-a-p-models-at-hugging-face-achieve-over-50k-monthly-downloads",
          title: 'M-A-P models at Hugging Face achieve over 50K+ monthly downloads.',
          description: "",
          section: "News",},{id: "news-mert-is-accepted-by-iclr-24",
          title: 'MERT is accepted by ICLR’24.',
          description: "",
          section: "News",},{id: "news-we-release-the-fully-transparent-pre-trained-llm-map-neo-and-its-corpus-matrix",
          title: 'We release the fully transparent pre-trained LLM MAP-Neo and its corpus Matrix.',
          description: "",
          section: "News",},{id: "news-four-papers-are-accepted-by-the-acl-24",
          title: 'Four papers are accepted by the ACL’24.',
          description: "",
          section: "News",},{id: "news-release-the-comprehensive-review-paper-foundation-models-for-music-a-survey",
          title: 'Release the comprehensive review paper Foundation Models for Music: A Survey.',
          description: "",
          section: "News",},{id: "news-release-the-text-image-and-audio-tri-modal-omnibench",
          title: 'Release the text, image and audio tri-modal OmniBench.',
          description: "",
          section: "News",},{id: "news-the-workshop-open-science-for-foundation-models-sci-fm-is-accepted-at-iclr-2025-singapore",
          title: 'The workshop Open Science for Foundation Models (SCI-FM) is accepted at ICLR 2025,...',
          description: "",
          section: "News",},{id: "projects-m-a-p-mert-model",
          title: 'M-A-P MERT Model',
          description: "A project for large-scale acoustic music understanding pre-training.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-marble-benchmark",
          title: 'MARBLE Benchmark',
          description: "a benchmark for universal music understanding.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/yizhilll", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=l5NEL4wAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/yizhilll", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
