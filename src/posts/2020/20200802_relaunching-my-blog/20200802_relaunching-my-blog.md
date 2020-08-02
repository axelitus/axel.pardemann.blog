---
permalink: 2020/relaunching-my-blog
title: "Relaunching my blog :tada:"
layout: Post
description: |
    How many times have you relaunched your blog? Well, I'm not counting anymore! With the re-branding of my personal
    site, I decided to also relaunch my blog. So, here we are.
published_at: 2020-08-02 20:14:30
featured: false
tags:
    - general
    - tech
---

How many times have you relaunched your blog? Well, after having several blogs I'm not counting anymore! With the
re-branding of [my personal](https://axel.pardemann.me) site, I decided to also relaunch my blog. So, after multiple
attempts, here we are.

<!-- more -->

![Writing](./writing.jpg)

## Positive lookbehind :arrow_backward:

For the past years, I have had several attempts to host a blog of my own. All of these multiple spawns had their own
goals and spirit. I even tried hosting like 5 blogs at the same time, because I wanted to write about different topics
(music, writings, tech, the ultimate question of life, the universe, and everything...) and I wanted a _separation_
between them. I quickly got overwhelmed with maintaining all of them (I struggle just with one, so go figure what I
was thinking of having that many).

The last _split_ between them was about personal life and business. This didn't work either. I slowly began to think:
"Why am I having to maintain several sites just to talk about whatever I want?" As a developer, we are taught about
_separation of concerns_, which in itself is a good thing, but I think I went too far with it.

In retrospect, I think it all made me learn a bunch of things, what works for me and what doesn't. All that learning
got me where I am today regarding my next steps.

## Positive lookahead :arrow_forward:

One of the things I have learned is that maintaining a steady writing pace is tough! ([Just take a look at what
George R. R. Martin has to say about it](https://georgerrmartin.com/notablog/2020/07/19/writing-2/)) Being tough is not
a reason to quit what I want to do though, so I decided to give it another try. This time with a couple of changes in
sight.

The main goal of having a blog has and will always remain the same: expressing myself. This time the goals surrounding
it have changed a bit (or at least I can say I thought about them beforehand). The goals encompass several levels of
this venture which I won't describe here as I think they can be easily inferred. The main goals I went for, in no
particular order, are (drum rolls please! 🥁):

- Make my life easier when writing posts. To that end, I decided I needed to write posts in Markdown.
- Having something that was more _me_. I recently [re-branded myself](https://axel.pardemann.me) which still is
very much under development, but design-wise I'm very happy with it.
- Easily publish new posts. So I already had Markdown in mind. The next thing is:
[Github repo](https://github.com/axelitus/axel.pardemann.blog) + auto-publishing on push.
- Learn something new. I'm a very curious person, and I'm always trying to learn something new, so this was a great
opportunity to do so.
- Enjoy it. One important rule for me is that I would enjoy building and writing for my blog. If not, it would felt
just like a tedious task _I have to do_ instead of something **I want to do**. Over time this would make me less prone
to write and thus my blog would go stale.
- I wanted to write mainly in English. My native language is Spanish (due to being born and raised in Mexico). The
other languages I know are german (proudly due to german roots) and English (this one is a must in this globalized
world). So I wanted to both practice my English and reach a wider, multi-country audience.

So far I think I have accomplished all of them very neatly. Without further ado, in the next section I present you:
the stack!

## The stack :books:

Settling for a stack was not easy (though it wasn't that hard either). I needed to take my goals into consideration,
but I didn't want to stray down a path that was totally unknown by me that would drag the process of creating this blog
over several months instead of just weeks. There were a couple of things that were already fixed in my mind:
[Tailwind](https://tailwindcss.com) for CSS, [Github](https://github.com) to store the blog and posts and that was it,
everything else could easily change without too much thought.

Before I decided I wanted to store posts directly into a repo, I was considering using [Laravel](https://laravel.com)
with Mohamed Said's package [Wink](https://github.com/themsaid/wink) or a fork of [Freek's Blog](https://freek.dev) but
that wouldn't have pushed me away from my comfort zone (that lately surrounds around Laravel's ecosystem). Thankfully,
they were discarded early on in favor of a solution that leveraged the file system structure for posts.

Right around the time, [Adam Wathan](https://adamwathan.me) and [Steve Schoger](https://www.steveschoger.com) released
the sleek [Tailwind Blog](https://blog.tailwindcss.com). After reading the post
[Building the Tailwind Blog](https://blog.tailwindcss.com/building-the-tailwind-blog) it made me take a look into the
JS static site generator's scene more closely. This was perfect to fulfill the goal of learning something new: next-gen
Javascript. I have known JS for a long time now, but I lost track of JS (haven't really used it) since before ES6 was
released (I know, so long ago! :date:).

I took a look at the Tailwind Blog and [Next.js](https://nextjs.org/), but I'm not really a fan of
[React](https://reactjs.org/) (not that I actually deep-dived into it to have great reasoning for this) I prefer
[Vue](https://vuejs.org) as the syntax is more appealing to me, and I have read more about it (remember these days I'm
much more related to Laravel's ecosystem?), so I immediately started looking for Vue's alternative. Who would have
thought that Vue has an official SSG? Well, they have one, and it's called [Vuepress](https://vuepress.vuejs.org).
Having known [Adam's knowledge of Vue](https://adamwathan.me/advanced-vue-component-design), I wondered why they
didn't choose Vuepress to build Tailwind's Blog, so I contacted him
[about this](https://twitter.com/axelpardemann/status/1279826120506871808) and he kindly explained to me why they
didn't choose Vuepress.

So with all this information at hand, I decided I would take the risk of trying Vuepress as long time had passed since
Adam's assessment, and I was confident the team behind Vuepress had made big improvements over the years (a short
glimpse into the future :crystal_ball: I was right!). The one thing missing was: where to host this?

I could have gone for the tried and tested [Digital Ocean](https://digitalocean.com) +
[Forge](https://forge.laravel.com) combo route and just use a custom build script but remember I wanted to learn
new things? So I decided to try hosting my blog in [Netlify](https://netlify.com) as I heard good things about them
and boy are they true! Setting my blog publishing infrastructure was a breeze! I'm so happy to have my blog there!

So the stack I went for ended up being:

- Backend:
  - Vuepress
  - Github
  - Netlify
- Frontend:
  - Tailwind
  - Vue

And I am really happy about it!

Stay tuned as I will write shortly about a more in-depth view of how I built the actual blog.

<!-- definitions -->

*[SSG]: Static Site Generator
