+++
title = "Copying Urls of Tabs"
date = 2018-09-07T21:35:06-04:00
tags = ["smarter not harder", "browsers"]
categories = ["Productivity/Efficiency"]
draft = false
+++

## Motivation {#motivation}

[Last post](https://www.steventammen.com/posts/opening-groups-of-links/) I talked about opening groups of links in the browser. This post is about effectively accomplishing the reverse: given that I have some tabs open, how can I save them as a list of links to use later? The primary purpose of this for me at the moment is to quickly save research sessions into my Org mode drafts related to various topics. I want the whole process to be as seamless as possible: once I have a cluster of related tabs, I want to be able to select them and then paste them into an Org mode document already formatted as an unordered list, with the link texts being the page titles. (I can change the link texts to more appropriate things later with Spacemac's Org mode insert link command: `Spc m i l`).


## Implementation {#implementation}

The behavior of copying groups of URLs isn't baked into browsers. Fortunately, there is a Chrome extension that lets one save tabs as a list of links: [Copy All Urls](https://chrome.google.com/webstore/detail/copy-all-urls/djdmadneanknadilpjiknlnanaolmbfk/related?hl=en). It easily lets one define a custom framework for copying, so I set it up to do exactly what I wanted: transforming a group of selected tabs into URLs formatted as an unordered list in Org mode syntax. You can see the settings I roll below:

{{< figure src="/posts/copying-urls-of-tabs/settings.png" caption="Figure 1: Steven’s settings for Copy All URLs" link="/posts/copying-urls-of-tabs/settings.png" >}}

Notice the new line in the custom-defined copy scheme. You need this to have line breaks in the copied list of links.

Also notice the lower settings: I have it set up to only copy the URLs for the tabs I have selected, and to do this immediately when I click on the extension button (I don't need the pasting behavior since I use LinkClump for opening groups of links -- see [last post](https://www.steventammen.com/posts/opening-groups-of-links/)).
