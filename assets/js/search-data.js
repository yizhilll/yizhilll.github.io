// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Selected and recent work. For the complete and always-current list, see my Google Scholar.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
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
          section: "News",},{id: "news-two-papers-are-accepted-by-the-acl-25",
          title: 'Two papers are accepted by the ACL’25.',
          description: "",
          section: "News",},{id: "news-delivered-a-tutorial-on-domain-specific-llm-at-nlpcc-2025-and-share-the-overview-about-the-organized-shared-task-on-gender-bias-mitigation-challenge",
          title: 'Delivered a tutorial on Domain-specific LLM at NLPCC 2025 and share the overview...',
          description: "",
          section: "News",},{id: "news-two-papers-are-accepted-by-the-neurips-25",
          title: 'Two papers are accepted by the NeurIPS’25.',
          description: "",
          section: "News",},{id: "news-a-family-of-strong-oss-looped-code-llm-iquest-coder-v1",
          title: 'A family of strong OSS (looped) code LLM IQuest-Coder-V1.',
          description: "",
          section: "News",},{id: "news-four-papers-are-accepted-by-the-iclr-26-including-yue",
          title: 'Four papers are accepted by the ICLR’26, including YuE.',
          description: "",
          section: "News",},{id: "news-released-incoder-32b-a-code-foundation-model-for-industrial-scenarios-together-with-the-iquest-coder-v1-technical-report",
          title: 'Released InCoder-32B, a code foundation model for industrial scenarios, together with the IQuest-Coder-V1...',
          description: "",
          section: "News",},{id: "news-two-papers-are-accepted-by-the-acl-26-findings",
          title: 'Two papers are accepted by the ACL’26 Findings.',
          description: "",
          section: "News",},{id: "news-four-papers-are-accepted-by-the-icml-26-seoul",
          title: 'Four papers are accepted by the ICML’26, Seoul.',
          description: "",
          section: "News",},{id: "news-released-modularrsi-a-benchmark-disjoint-and-modular-framework-for-generalizable-recursive-harness-self-improvement",
          title: 'Released ModularRSI, a benchmark-disjoint and modular framework for generalizable recursive harness self-improvement.',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%69%7A%68%69.%6C%69@%68%6F%74%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/yizhilll", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yizhi-li", "_blank");
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
