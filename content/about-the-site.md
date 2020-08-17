+++
title = "About the Site"
+++

## Purpose {#purpose}

This site exists to

-   Give me a centralized internet presence
-   Give me a platform to spread my thoughts on a wide variety of otherwise unrelated topics
-   Contribute to free and open knowledge. I hope especially that the free resources (e.g., writings, software, video guides) might prove helpful to those in a disadvantaged position.

This site does not exist to

-   Let me paint myself as more capable, educated, or experienced than I really am
-   Make money through locking content behind exclusive mailing lists, monthly subscriptions, or other things of the sort
-   Make money through advertising
-   Make money through selling or promoting stuff


## Writing and biases {#writing-and-biases}

I do my best to avoid letting my personal background (race, socio-economic status, etc.) and personal opinions (religious, political, etc.) affect the writing on this site, which I hope to keep as objective as possible. I also do my best to avoid conflicts of interest: I make no money from running this site, and I do not have institutional or corporate ties influencing me to write in a certain way. You can see a declaration of my biases [here](/about-the-author/#declaration-of-biases).

If you believe any writing on the site is truly biased, please tell me, so that I can fix it.

## Content types

### Guides

#### Why pages for video guides
Unlike most content on this site, which is all text due to the enormous advantages text has as a study medium, <!-- (see /pages/advantages-of-text-as-study/medium) --> the actual content of guides is primarily video-based, since videos are objectively better for guides (which really ought to “show” rather than “tell”). So why even bother having this section on the site, and instead just leave all the organization of videos on YouTube?

Two big reasons. First, if I ever want to update a guide by uploading an updated video and subsequently unlisting the old video (so it doesn’t appear on my YouTube profile, but also doesn’t break already-existing links to it; cf. 301 redirects), it is beneficial to preserve the same URL for the guide. If people link to the URL of the guide page on my website, then when I update the guide, while the video may have changed to some degree, *they never have to manually update their links* to point to the most up-to-date version of the guide. From their perspective, it happens transparently, minimizing work for them. I benefit by (primarily) having only the most recent versions of my content receiving link traffic.

Second, while it is true that video guides make lots of sense, it is very common for me to want to discuss things brought up in a guide or tangentially related to a guide in more detail. Keeping such discussion (that doesn’t benefit from the video medium in the same way as actual guide content — like demonstrations and such — does) in text means it receives all the benefits of text as a medium, as above, and also, importantly, *keeps it out of the video*. Keeping guide videos short, focused, and to-the-point is extremely important. While it would be possible to put some of this “guide-related content” in the description of YouTube videos, it is better to put it on the site, where there is much more flexibility (e.g., I can actually use hyperlinks with link text, use images, have sections with different background colors, etc.) and it can take advantage of the (completely automatic) creation of section header links and a table of contents that readers can use in linking to specific parts of the page.


## Backend {#backend}

See also the [GitHub repository's Readme](https://github.com/StevenTammen/steventammen.com/blob/master/README.md).

### Content

The content of this site is written in [Markdown](https://www.markdownguide.org/getting-started/). I use [NeoVim](https://neovim.io/) with an excellent [Realtime Markdown Preview Plugin](https://github.com/iamcco/markdown-preview.nvim) as my editor of choice, along with a lot of macros and text expansions done through the Windows scripting language [AutoHotkey](https://www.autohotkey.com/).

If Vim is a bit scary, I would recommend either setting up [Netlify CMS](https://www.netlifycms.org/) and editing content through the online WYSIWYG interface, or using [Typora](https://typora.io/) (a Markdown editor) locally.

### Exporting to HTML

This site uses [Hugo](https://gohugo.io/) as its static site generator. Pages are run through templates to produce web-ready output. Hugo is incredibly fast, and has been in development long enough that the templating it offers is sufficient for such things as automatically creating content display pages (for all the content that matches a particular category, for example), or conditionally showing page elements depending on what “kind” (Hugospeak: taxonomy) of page is being generated.

### Hosting

This site has the source content located in a [Github repository](https://github.com/StevenTammen/steventammen.com/), with the generated files being hosted on [Netlify](https://www.netlify.com/). Netlify has an extremely fast global content delivery Network (CDN) that caches the entire site, since everything is static. I am using Netlify as my DNS as well, since having the DNS through them lets the CDN work at maximum effectiveness with little configuration.

Netlify also allows for continuous deployment by means of a build command. [Netlify.toml](https://github.com/StevenTammen/steventammen.com/blob/master/netlify.toml) contains information relating to the continuous deployment I use via Netlify (mainly information pertaining to the Hugo command to run on their server). Whenever a build is triggered (I push to the Github repository containing the source), Netlify automatically updates all the cache fingerprints for assets, so only the most recent files are on the CDN. Not having to worry about invalidating out of date assets has been one of my favorite things about this current workflow.

### Domain redirects and subdomains

Netlify automatically handles the 301s between the www and non-www versions of the site. I am keeping the www subdomain for several reasons:

1. Having a proper subdomain (rather than a CNAME at root, as in [CNAME flattening](https://blog.cloudflare.com/introducing-cname-flattening-rfc-compliant-cnames-at-a-domains-root/)) allows for Netlify’s CDN to work somewhat more effectively, as described [on this page](https://www.netlify.com/blog/2017/02/28/to-www-or-not-www/). The performance considerations apparently revolve around how Netlify’s CDN interacts with the caches commonly kept by DNS providers.
2. Using a proper subdomain allows for cookie separation on subdomains. This is the biggie. Using an Apex domain does not allow you to be selective about which subdomains use the cookies of the main domain, which is a bad thing. Unnecessary cookies slightly increase security risk, and, perhaps more importantly, slow down page loads. This is especially noticeable if you store static assets on the same domain as your primary site (rather than using a separate site entirely, like some big websites do). This is because the cookies will get sent for *every single static asset loaded* – every style sheet, every script, every image. A few kilobytes of cookies can amount to a fairly significant increase in page size if many static assets are used. I much prefer to use a static subdomain on the main site for serving static content (rather than using a separate domain entirely), since it allows you to mirror static URLs to exactly correspond with the content URLs they are associated with. (For example, [www.mysite.com/posts/somepost/](www.mysite.com/posts/somepost/) might have an image stored at [static.mysite.com/posts/somepost/img1.png](static.mysite.com/posts/somepost/img1.png)). This is much more intuitive and easier for readers to link to, and also happens to save a not insubstantial amount of money in the long run by making extra domain registration costs unnecessary.
3. There is not any performance reason to use a bare domain if you can just type in the bare domain and get redirected to the www subdomain anyway (a redirect so fast a human could never process it). So you can still do less typing by ignoring the www if you wish, but the performance benefits of the www subdomain will still be in effect.

### SSL

Netlify provides [easy HTTPS for custom domains](https://www.netlify.com/docs/ssl/) by partnering with [Let’s Encrypt](https://letsencrypt.org/). While security is not super important for this site as I don’t have user sessions or deal with credit card information, I am 100% behind encrypting everything simply on principle.

I also force HTTPS sitewide. So all non-HTTPS requests will automatically get converted to HTTPS requests.

### Performance: gzipping, minification, etc.

Netlify automatically minifies and gzips many content types. It is theoretically possible to gain a better compression level by running a more size-efficient DEFLATE encoder (like [Zopfli](https://en.wikipedia.org/wiki/Zopfli)), but the added cycles would slow down site builds for not much gain.

If I anticipate little change in a static asset (a referenced Javascript library, a big image), I may run it through Zopfli to get that maximum compression level. If I link to a an already compressed file, Netlify won’t mess with it.

### Email

I use [forwardemail.net](https://forwardemail.net/en/pricing) to handle all email through the site (rather than, say, Google Apps for Business).


## Publishing in-progress pages {#publishing-in-progress-pages}

I believe in publishing in-progress pages for two reasons: 1) waiting until pages are "finished" before publishing means that they aren't useful to anyone else until the very end of the research and writing process, and 2) I am far from a perfect writer (and my knowledge in many areas is less than complete), so giving other people opportunities to critique my writing from the very beginning of the process will help improve the content more than waiting until some arbitrary point of "good enough for others to see." To use an analogy, open source code projects don't wait until their code is "good enough" to push to GitHub, they start open source from the get go, and are better for it. Obviously prose is not code, but the same general logic applies:

1.  Multiple people working on the same thing will yield better results than a single individual
2.  This is true at all stages of the creative process, not just for edits of an already-finished work
3.  Therefore, enabling multiple people to contribute at all stages of the process will yield optimal quality


## Open source {#open-source}

As the progression above shows, I believe that open source projects will generally be of higher quality than non-open source projects. Software has been part of the open source movement for a while now, and hardware is beginning to get there, but, to my knowledge, there has not been much of a push to open source _websites themselves_. I find this somewhat puzzling, since open source projects offer so many advantages and so few disadvantages. I have designed this website to be entirely open source, and the content is licensed under open source licenses (see below). Contribution guidelines may be found in the [Contribution Guidelines Section](https://github.com/StevenTammen/steventammen.com#contribution-guidelines) of the [Readme](https://github.com/StevenTammen/steventammen.com/blob/master/README.md) in the site's [Github repository](https://github.com/StevenTammen/steventammen.com/).


## Continuous improvement {#continuous-improvement}

I view this site as a perpetual "work in progress" rather than a collection of static documents in an immutable framework. This constant refinement over time is, in my opinion, essential to long-term quality. Changes to individual pages can be tracked by viewing the commit history of their markdown source in the site's [GitHub repository](https://github.com/StevenTammen/steventammen.com/). I may clean out the commit history every once in a while if it gets too cluttered, but, for any given page, you'll generally be able to get a pretty good idea of what's happened in the last few commits.


## Copyright and terms of use {#copyright-and-terms-of-use}

The contents of this site are licensed under the [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/).

In short, you may use these materials in any way you see fit so long as you give attribution where it is due and share any derivative works under the same license. This license is an example of what is commonly termed "copyleft" -- instead of depriving people of freedom, copyleft maximizes the freedom people have to distribute and modify materials while ensuring that this freedom is preserved. To achieve this, copyleft imposes one and only one restriction (in essence): the limitation of further restriction.

You may find information on best practices for the attribution of Creative Commons works [here](https://wiki.creativecommons.org/wiki/Best%5Fpractices%5Ffor%5Fattribution).
