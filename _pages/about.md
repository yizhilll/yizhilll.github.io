---
layout: about
title: about
permalink: /
subtitle: Coding LLMs &amp; Agents at <a href="https://iquestlab.com/">IQuest Research, UbiQuant</a> &middot; initiated <a href="https://m-a-p.ai">M-A-P</a> &middot; 💍📖💻🐶⛰️🤿

profile:
  align: right
  image: turing_bench.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>w/ Jolly at the Alan Turing Memorial, Manchester, UK</p>

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3
---

<meta name="google-site-verification" content="S4kbKtEbks2C_vUp5k0RsyUsqnr4iLwD6euFRIdAoQY" />

<style>
  /* The theme gives the custom-social <svg> a 4rem box but only a 3.5rem inner
     <image>, anchored to the top, so the logo renders 1rem above the baseline
     while the icon-font glyphs sit 0.5rem above it. Match the box to the image
     and halve the margin so the Hugging Face logo lines up with the rest. */
  .social .contact-icons a svg {
    height: 3.5rem;
    margin-bottom: 0.5rem;
  }
</style>

I am a researcher at <a href="https://iquestlab.com/">IQuest Research</a>, building LLMs & Agents.
I received my PhD from the lab supervised by <a href="https://chenghua-lin.github.io/">Dr. Chenghua Lin</a>, Professor of Natural Language Processing at The University of Manchester.
I initiated the <a href="https://m-a-p.ai">Multimodal Art Projection (M-A-P)</a> research community with <a href="https://scholar.google.com/citations?user=qyTrq4kAAAAJ&hl=zh-CN">Ge Zhang</a>, <a href="https://github.com/a43992899">Ruibin Yuan</a> and <a href="https://nicolaus625.github.io/">Yinghao Ma</a> -- which aims to drive open-source research to cutting-edge level as the industry.
During my journey, I've also collaborated with <a href="https://bigaidream.github.io/">Dr. Jie Fu</a> and had a lot of fun.

---

### Research

My current research focus involves:

- **Recursive self-improvement (RSI)** -- letting systems rewrite the harness they run on
  (<a href="https://arxiv.org/abs/2609.14857">ModularRSI</a>,
  <a href="https://arxiv.org/abs/2604.19572">self-evolving terminal agents</a>).
- **Generalizable coding & terminal agents**, from data to model
  (<a href="https://arxiv.org/abs/2602.01244">TerminalTraj</a>, <i>ICML'26 Outstanding Paper</i>;
  <a href="https://arxiv.org/abs/2603.16733">IQuest-Coder-V1</a>,
  <a href="https://arxiv.org/abs/2603.16790">InCoder-32B</a>).
- **Scalable Reinforcement Learning for LLMs**
  (<a href="https://arxiv.org/abs/2508.17445">TreePO</a>,
  <a href="https://arxiv.org/abs/2507.07017">First Return, Entropy-Eliciting Explore</a>).

Before that, some of my research interests involve:

- Music modelling -- building the universal understanding
  (<a href="https://openreview.net/forum?id=w3YZ9MSlBu">MERT</a>) and generative
  (<a href="https://map-yue.github.io/">YuE</a>, <a href="https://map-yue2.github.io/">YuE-2</a>) models for music.
- LM evaluation at scale
  (<a href="https://arxiv.org/abs/2502.14739">SuperGPQA</a>,
  <a href="https://arxiv.org/abs/2409.15272">OmniBench</a>,
  <a href="https://arxiv.org/abs/2512.24867">Encyclo-K</a>).
- Synthetic data for vision-language models
  (<a href="https://aclanthology.org/2025.acl-long.680/">MAmmoTH-VL</a>).

More recent and detailed topics can be referred to my <a href="/publications/">publication page</a>
or <a href="https://scholar.google.com/citations?user=l5NEL4wAAAAJ">Google Scholar</a>.

---

### Selected Open-Source Releases

Most of my work ships as open weights, data and code -- usually under
<a href="https://huggingface.co/IQuestLab">IQuestLab</a> or <a href="https://huggingface.co/m-a-p">M-A-P</a> on Hugging Face.

- <a href="https://github.com/IQuestLab/IQuest-Coder-V1">IQuest-Coder-V1</a> --
  7B/14B/40B(-Loop) code LLMs, white-box checkpoints from pre-training to the final thinking/instruct models
  (<a href="https://huggingface.co/IQuestLab/IQuest-Coder-V1-40B-Instruct">weights</a>).
- <a href="https://github.com/multimodal-art-projection/TerminalTraj">TerminalTraj</a> --
  32K Docker environments and 50K verified terminal-agent trajectories.
- <a href="https://github.com/yizhilll/MERT">MERT</a> --
  self-supervised acoustic music understanding models, widely used as music encoders
  (<a href="https://huggingface.co/m-a-p/MERT-v1-330M">MERT-v1-330M</a>, ~300K monthly downloads across the family).
- <a href="https://github.com/multimodal-art-projection/YuE">YuE</a> --
  open foundation models for long-form music generation
  (<a href="https://huggingface.co/m-a-p/YuE2-3B">YuE2-3B</a>).
- <a href="https://github.com/multimodal-art-projection/TreePO">TreePO</a> --
  tree-based segment-wise rollouts for scalable RL.
- <a href="https://github.com/multimodal-art-projection/MAP-NEO">MAP-NEO</a> --
  a fully transparent bilingual LLM series, data pipeline included
  (<a href="https://huggingface.co/m-a-p/neo_7b">neo_7b</a>).
- <a href="https://github.com/multimodal-art-projection/OmniBench">OmniBench</a> and
  <a href="https://huggingface.co/datasets/m-a-p/SuperGPQA">SuperGPQA</a> --
  evaluation suites for omni-language models and graduate-level knowledge across 285 disciplines.

---

### Past Experience

- Interned at <a href="https://www.jpmorgan.com/technology/artificial-intelligence">J.P. Morgan Artificial Intelligence Research</a> in 2024 summer.
- I previously worked as a research assistant at Tsinghua NLP Lab with <a href="https://nlp.csai.tsinghua.edu.cn/~lzy/">Prof. Zhiyuan Liu</a> in 2021-2022.

Academic Service: workshop organizer at <a href="https://open-foundation-model.github.io/">Open Science for Foundation Models, ICLR'25</a> and <a href="https://m-a-p.ai/LLM4Music/">LLM4MA, ISMIR'25</a>; shared-task organizer at <a href="https://arxiv.org/abs/2506.12574">NLPCC'25 (Gender Bias Mitigation)</a>; reviewer at ACL, EMNLP, CVPR, ICLR, NeurIPS and more.
