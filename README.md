# yizhilll.github.io

Personal website of **Yizhi Li** — researcher at [IQuest Research, UbiQuant](https://iquestlab.com/),
working on coding LLMs, agents, recursive self-improvement and scalable RL for large language models.
Previously PhD at The University of Manchester with
[Dr. Chenghua Lin](https://chenghua-lin.github.io/); initiated the
[M-A-P](https://m-a-p.ai) open research community.

🌐 <https://yizhilll.github.io> &nbsp;·&nbsp;
[Google Scholar](https://scholar.google.com/citations?user=l5NEL4wAAAAJ) &nbsp;·&nbsp;
[Hugging Face](https://huggingface.co/yizhilll) &nbsp;·&nbsp;
[X](https://x.com/yizhilll)

## Editing the site

| What               | Where                                                                       |
| ------------------ | --------------------------------------------------------------------------- |
| Landing page copy  | `_pages/about.md`                                                           |
| Publications       | `_bibliography/papers.bib` (`selected={true}` puts one on the landing page) |
| Venue badges       | `_data/venues.yml`                                                          |
| News items         | `_news/*.md` (one file per item, newest date first)                         |
| Co-author links    | `_data/coauthors.yml`                                                       |
| Social icons       | `_data/socials.yml`                                                         |
| Site-wide settings | `_config.yml`                                                               |

Pushing to `main` triggers the **Deploy site** workflow, which builds the site and
publishes it. A separate **Prettier** workflow gates formatting — run
`npx prettier . --check` before pushing.

## Local preview

```bash
bundle install
bundle exec jekyll serve
```

Needs Ruby 3.x with OpenSSL and ImageMagick (`convert`) on `PATH`.

## Credits

Built on [al-folio](https://github.com/alshedivat/al-folio) by Maruan Alshedivat and
contributors, distributed under the [MIT License](LICENSE).
