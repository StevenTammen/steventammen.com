+++
title = "Opening Groups of Links"
date = 2018-08-17T20:11:49-04:00
tags = []
categories = []
draft = false
+++

[//]: # (tags = ["smarter not harder", "browsers"], categories = ["Productivity/Efficiency"])

## Motivation {#motivation}

I oftentimes find myself making heavy use of Chrome's "Bookmark all tabs" option. The typical procedure is to hold down Shift (or Control), select some number of tabs that are related to one another, and then bookmark them in a folder. Sometimes I'll just bookmark a single page too.

The consequence of all this bookmarking is an extremely disorderly and unorganized Chrome profile, with remnants of dozens of research sessions scattered amongst other normal bookmarks like email and what have you. It's convenient to be able to right click a folder and select "Open all;" it makes picking back up a trail of reading quite simple. However, I recently decided that my groups of links were far too disorganized. Now that I've finally got an Org-to-website publishing workflow that I'm happy with (see [ox-hugo](https://ox-hugo.scripter.co/) and, e.g., [the npage script](https://github.com/StevenTammen/dotfiles/blob/master/bin/npage) in [my dotfiles repo](https://github.com/StevenTammen/dotfiles)) -- something that I only really completed to my satisfaction recently -- I decided that it is time to get most of my research in webpage form. I've been meaning to do this for a while, but I've been so busy and distracted I just haven't gotten around to it. It doesn't help that I've been pretty unselective about the ideas I jot down, which means I now have a backlog of 20 or so things that I want to write about. This is a problem because of procrastination mechanics: the larger the task gets the more unwilling one is to start it.

Anyhow, as I began to read back over some previous very much work-in-progress research pages I'd started in earlier periods of manic blog work (e.g., as of 8/17/18, <https://www.steventammen.com/pages/fabrics/>), I realized that opening clusters of links was painful. Right clicking all the links to open them in new tabs is not a very good solution when there are gobs of them. Solving this dilemma of how to open links on webpages in bulk will be the topic of the below sections.


## Solution 1: Copy-Paste Webapps {#solution-1-copy-paste-webapps}

When I turned to Google for a solution, the first things that popped up were websites that let you paste in a group of links into a text box to open. For example, see <http://www.rapidlinkr.com/>; this website also lets you paste in "mixed text" (i.e., URLs embedded in other text), which it will parse to extract the links to open. I don't know how many other websites of this sort do such things.

Now, while there's nothing wrong with these, they are still a bit clunky for frequent use, since they require an extra copy-paste. Moreover, they are entirely unhelpful for links whose text does not match their target (i.e., the vast majority of links on the Internet). When you copy such links to paste, you'll get the text, not the URL to which they refer.

These shortcomings were enough to drive me to keep looking for a better solution. But if all you want to do is paste in a bunch of URLs and open them simultaneously, these solutions work fine for that.


## Solution 2: Browser Extension {#solution-2-browser-extension}

After a bit more poking around, I came across [a Chrome browser extension](https://chrome.google.com/webstore/detail/linkclump/lfpjkncokllnfokkgpkobnkbkmelfefj?hl=en) that allows for the opening of all the links in a mouse-selection. After playing around with it a little bit, I was immediately sold. It's such a simple idea, but it works incredibly well, and now I use it all the time.

I am usually wary of adding browser extensions if I can at all help it: browsers are already memory-hogs, and the more extensions you have running, the more memory and CPU get used. However, this particular browser extension only uses about 22 MB of memory on my system, virtually no CPU, and it doesn't seem like it runs all the time (according to Chrome's task manager) -- only when you've opened tabs with it. (I could be wrong on this though).

I was also happy to see that it has high reviews on the web store, and, importantly, has _lots_ of users. While a high number of users is no guarantee of quality (see: the QWERTY keyboard layout on modern keyboards), it is a good heuristic. And this extension had by far the most users and reviews out of any of the extension options for this sort of thing that I came across.

I'm assuming something like this probably exists for Firefox too. But I don't use Firefox, so YMMV.


## Use cases {#use-cases}

I use Linkclump very frequently when I'm on a research-heavy webpage and want to open a lot of links to read. However, I've also found myself very commonly using it when I'm on a research kick in a search engine: by dragging a box, I can open a bunch of hits all at once, and then briefly skim all of them to see which ones are more relevant. This yields more information than the description provided in the search engine (but, of course, uses more bandwidth, particularly for graphic-heavy sites).

Somewhat ironically, I use Linkclump to open individual links almost as much as groups of links, which is really the purpose it was designed for; opening single links works just fine. Dragging a box lets me be much less precise when I'm clicking on links. This is not usually a huge deal, but it can come in very handy if someone uses single-word link text with a small font. (Shame on them). It's also a speed thing: I can lazily spin my trackball wheel in the direction of the link without spending any time on precision.

Finally, I also use Linkclump to copy clusters of links to my clipboard to paste into Org documents. This provides a convenient way to set up links in a document when writing.


## Options and my setup {#options-and-my-setup}

As the use cases above might have suggested, Linkclump lets you select between several different actions to perform based on link selection. At the time writing, you can choose to have links:

-   Opened in a New Window
-   Opened as New Tabs
-   Bookmarked
-   Copied to clipboard

I currently use the "Opened as New Tabs" and "Copied to clipboard" options. I prefer to keep all my browsing in one window, and switch between tabs with [Vimium](https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb) and Chrome keyboard shortcuts (`Ctrl+Tab` for next tab, `Ctrl+Shift+Tab` for previous tab). For people who want the same sort of title-based tab-switching functionality that Vimium provides without the whole Vim thing: have a look at the Chrome extension [Fast Tab Switcher](https://chrome.google.com/webstore/detail/fast-tab-switcher/jkhfenkikopkkpboaipgllclaaehgpjf). I used this extension for a while before I started using Vimium. Vimium works essentially the same way as the Fast Tab Switcher extension, but adds a bunch of other functionality that you may or may not use. Since I am working toward fully keyboard-centric browsing, Vimium makes sense for me, but it might not make sense for you.

I currently have the "Opened as New Tabs" action set up on `A+Left mouse drag`, and the "Copied to clipboard" action set up on `E+Left mouse drag`. If you want to use modifiers (like Ctrl, Alt, etc.), you may need to disable Linkclump when using web applications that depend on these modifier keys (an example that comes to mind based on my personal interests is <http://www.keyboard-layout-editor.com/>). Here's a screenshot:

{{< figure src="/posts/opening-groups-of-links/linkclump-actions.png" caption="Figure 1: Steven's settings for Linkclump" link="/posts/opening-groups-of-links/linkclump-actions.png" >}}


## Additional thoughts {#additional-thoughts}

Once I get more comfortable using Vim-like behavior in [Vimium](https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb), I'll probably open individual links exclusively by keyboard. However, there really isn't a particularly clean way to open a group of links with a single keyboard shortcut, meaning that I'll probably keep using this extension in perpetuity.

While I am most certainly a keyboard purist (i.e., strongly in favor of CLIs over GUIs, and convinced that keyboard interfaces are a strictly superior way of handling computer input whenever using them is physically possible), I have no problems saying that this is one of the things that a mouse is simply better at. The only other thing that a mouse beats a keyboard at that I can think of off the top of my head is selecting text with a boundary in the middle of a line (Vim-fu can get you there, but not as fast; capturing entire lines, or paragraphs, functions, etc., is probably faster by keyboard, however). The rest of the time, in theory, it is always best to keep both hands on the keyboard.

In terms of touch interfaces, I haven't bothered trying to get any sort of link groups to work (and I don't think Linkclump works in any capacity in a touch environment). I typically only read news on my phone in food-lines and whatnot, and never do "serious" research in a touch-only environment (see above: keyboards are just better at everything, particularly entering text for searching).

However, there is no reason why this behavior _shouldn't_ be available on touch interfaces, so I'd like to see it get implemented at some point. When I am reading on my tablet (blogs, Kindle books, textbooks, etc.), there are times when it would definitely come in useful, even if it would not be as generally applicable here (in "reading mode") as it is in research environments. Regardless, it would still add value, and should therefore be pursued at some point.
