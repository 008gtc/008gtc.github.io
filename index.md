---
layout: home
title: Industry Blog
---

Welcome to **Industry Blog** 👋  
Here you’ll find insights and articles about industrial technology, manufacturing, and business trends.

---

## 最新文章列表

<ul>
{% for post in site.posts %}
  <li><a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%Y-%m-%d" }}</li>
{% endfor %}
</ul>
