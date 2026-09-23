# How to publish a blog post

Your blog is built by GitHub Pages (Jekyll) from Markdown files. No build tools needed.

## Write a post (computer or phone)

1. In the GitHub repo, open the `_posts` folder -> **Add file -> Create new file**.
2. Name it `YYYY-MM-DD-short-title.md`, e.g. `2026-10-05-pipeline-consolidation.md`.
   The date in the name is the publish date. The rest becomes the URL: cshehu.com/blog/pipeline-consolidation/
3. Start the file with this header, then write in Markdown below it:

```
---
layout: post
title: "Your post title"
description: "One sentence. Shows on the blog list, in search results and link previews."
tags: [databricks, data-engineering]
---

Your post starts here.
```

4. **Commit changes**. The site rebuilds in 1-2 minutes. It shows up automatically on the homepage, /blog/ and the RSS feed.

## Drafts

Files in `_drafts/` are never published. Write there, then move the file to `_posts/` and add the date prefix when ready.
A starter draft (`pipeline-consolidation.md`) is already there.

## Markdown cheat sheet

- `## Heading`, `### Smaller heading`
- `**bold**`, `*italic*`, `[link text](https://...)`
- `- bullet`, `1. numbered`
- `> quote`
- Code: wrap in three backticks with the language, e.g. ```python
- Images: upload to an `images/` folder, then `![alt text](/images/file.png)`

## After publishing (distribution)

1. **LinkedIn post**: 3-6 short lines with the key takeaway, link to the post in the first comment or at the end.
2. **dev.to cross-post** (optional): paste the Markdown, set `canonical_url: https://cshehu.com/blog/your-slug/` in the dev.to front matter so Google credits your site.

## If the site breaks

Repo -> **Actions** tab shows the Pages build. A red X means a typo in the header (usually a missing `---` or quote).
