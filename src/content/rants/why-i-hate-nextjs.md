---
title: "Why I Hate Next.js (And You Should Too)"
date: 2026-01-19
angerLevel: 95
tags: ["nextjs", "react", "rants"]
---

Here is a simple truth: **Simplicity is dead, and Vercel killed it.**

I remember when you could just write an `index.html` file. I remember when PHP was considered "messy" but literally ran everywhere. Now? Now we have the *App Router*.

## The "Server Component" Lie

"It's server-side rendered!" they say. "It's faster!" they say.
Do you know what else is server-side rendered? **HTML.**

We reinvented PHP, wrapped it in a 2MB JavaScript bundle, and called it "modern". I spent 4 hours yesterday debugging a hydration error because I dared to use a `<div>` inside a `<p>` tag. 

> *Hydration failed because the initial UI does not match what was rendered on the server.*

**I DO NOT CARE.** Just render the text! Why does my blog need to "hydrate"? It's TEXT. It's literally static text. Why is there a JSON payload embedded in the footer that duplicates my entire data structure?

## The Image Component

Don't get me started on `<Image />`.
"It optimizes your images!"
No, it makes my local development a nightmare of `width` and `height` requirements and then charges me for optimization limits. Just let me use an `<img>` tag. Browsers have `loading="lazy"` now. We don't need you, Next.js.

## Conclusion

I'm using Astro now. It ships zero JavaScript by default. It respects me. It doesn't try to be a simplified operating system running in a browser tab.

**Refuse the hydration. return to HTML.**
