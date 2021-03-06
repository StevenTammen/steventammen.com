+++
title = "Portable Computer Setup: Part 1"
date = 2019-01-07T16:53:24-05:00
tags = []
categories = []
draft = false
+++

[//]: # (tags = ["workflow", "portability", "gear cluster"], categories = ["Gear", "Productivity/Efficiency", "Computers/Software"])


## This post {#this-post}

I've been working on pulling together a computer configuration to my liking that is completely portable. I have, for the last couple years, been using a 27" monitor for my general computer use. However, as I've gotten more and more involved in computer science, I've started to find that two windows side by side isn't quite enough space anymore. Plus, ever since my 15.6" laptop stopped being usable and I bought a 12.3" tablet instead (a Microsoft Surface Pro i5, 128GB SSD, 8 GB RAM), I've found that I can't even fit two windows side by side on my traveling screen without squinting severely. As a programmer, this isn't gonna fly.

I'm a big person too (6'5"), and looking down at a tiny tablet screen causes me to get uncomfortable faster than the average bear. I already use [an expensive ergonomic keyboard](https://www.kinesis-ergo.com/shop/advantage2-lfq/) to help deal with the fact that my shoulder width is a good 6" wider than most people's (so putting my hands together on a normal keyboard is excruciating).

{{< figure src="/posts/portable-computer-setup-part1/wrist-angle.jpg" caption="Figure 1: The wrist angle is the big problem. This is my left hand shown on the home row of the [CM Storm Quickfire Rapid Tenkeyless (Cherry Reds)](https://www.amazon.com/gp/product/B007VDLVD4/)" >}}

I figured if I was going to go to the bother of hauling my spaceship keyboard around, I might as well go all-in and find a monitor setup worthy of matching it (social consequences notwithstanding -- good thing I stopped really caring what other people thought a long time ago). This will the topic of this first post in the series: if you want to carry around a multi-monitor setup everywhere, how do you do it?


## Introduction to the concept: multiple monitors and workflow efficiency {#introduction-to-the-concept-multiple-monitors-and-workflow-efficiency}

If you are an individual who has only ever worked on a laptop screen, carrying around two external monitors might seem a little bit insane. However, I assure you that it is perfectly sane -- in fact, not only is it rational, I would argue that _not_ carrying around external monitors is the irrational choice (for people that could make use of them that is -- some people's computer use is casual enough that it really doesn't matter).

Here's the thing: until you hit diminishing returns, every additional monitor you have adds _a lot_ of productivity. (See [an article on this by someone other than me](https://www.hanselman.com/blog/TheSweetSpotOfMultipleMonitorProductivityThatMagicalThirdMonitor.aspx)). I say this with full conviction and no exceptions: even if you are already efficiently using multiple virtual desktops (see [i3 workspaces](https://i3wm.org/docs/userguide.html#%5Fusing%5Fworkspaces), e.g., on Linux, [VirtuaWin](https://virtuawin.sourceforge.io/) for Windows, and [macOS's spaces](https://support.apple.com/guide/mac-help/work-in-multiple-spaces-mh14112/mac)), efficiently using keyboard-driven window switching (see [rofi](https://github.com/DaveDavenport/rofi), e.g., on Linux, [iswitchw](https://github.com/tvjg/iswitchw) for Windows, and [some Alfred workflows](https://github.com/mandrigin/AlfredSwitchWindows) for macOS), and efficiently using keyboard-driven browser tab switching -- like [Fast Tab Switcher](https://chrome.google.com/webstore/detail/fast-tab-switcher/jkhfenkikopkkpboaipgllclaaehgpjf) or [Vimium](https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb) for Chrome -- you will benefit monumentally from more monitors. You know what's better than being able to quickly and easily switch between windows so that you can see their contents? Not having to switch between windows because they're already open on another screen. There is a limit to this, of course. Once you have to move your head too much, then window switching is probably better (both speed-wise and in terms of ergonomics). But until you hit that point, more monitors are simply better. Full stop.

But what about people whose workflow doesn't revolve around keyboard use? In my opinion, these folks benefit even more from additional monitors. When you are still primarily switching between windows with Alt-Tab and reaching for your mouse to switch between Chrome tabs, the benefits of multiple monitors are amplified, not reduced.

I could get into plenty of specific examples in excruciating detail (and plan to in the future), but for typical computer users, here's a few that come to mind:

-   Having a document for a report or paper open, while also having Chrome open for research, while also having an electronic version of your textbook open for reference.
-   Having a Discord channel for your team open on one monitor with a video game open on another, and a wiki for the game on a third.
-   Having a draft of a blog post open in Wordpress (or some other non-programmer CMS), and two different Chrome windows for different research clusters.
-   Having a conference call (e.g., via Skype) open on one monitor, with notes about the call open on a another, and an outline of topics to cover on a third.
-   Etc.


## Context-dependent purchasing decisions {#context-dependent-purchasing-decisions}

Ok, so multiple monitors are good. Got it. So how big should they be? What resolution should they be? How many of them should I get? How should they be arranged (e.g., in landscape mode vs. portrait mode)? Do I need to invest in gear that lets me use them when away from outlets? What happens if I have a laptop and not a tablet? What happens if I don't have a lot of money at the moment? These are all good questions, questions that I will hopefully shed some light on below. Past me recommending that you consider using a portable multi-monitor setup, a lot of the specifics are going to come down to use case. For example, photo and video professionals are going to care about color accuracy a lot more than me as a programmer, and someone who walks many miles every day is going to care about weight more than me as a college student (and hopefully soon-to-be commuting professional). Etc.

With all this being said, some options are definitely better than others across the board, and some very obviously excel in particular circumstances. Bearing this in mind, let me start by answering these questions based on _my_ specific circumstances, so that you can get a feel for how you might go about approaching this based on _your_ circumstances.

Before going further, here's a couple pictures of my setup. I'm using two 15.6" 1080p portable monitors with my tablet in a portrait-landscape-portrait (henceforth "PLP") configuration.

{{< figure src="/posts/portable-computer-setup-part1/setup-with-keyboard.jpg" caption="Figure 2: The full setup, including keyboard and trackball, seen from a bit further back" >}}

{{< figure src="/posts/portable-computer-setup-part1/monitor-setup.jpg" caption="Figure 3: The monitor setup, a bit closer in" >}}

Here are all the components necessary to run the portable monitor setup that I do, when powering the monitors externally using wall power:

-   Microsoft Surface Pro tablet (in my case, [the 5th generation](https://www.microsoft.com/en-us/p/surface-pro-5th-gen/8nkt9wttrbjk/c0hl?activetab=pivot%3aoverviewtab))
-   [ProCase tablet case](https://www.amazon.com/gp/product/B01MDT6G6K/)
-   x2 [Asus MB169B+ portable USB monitors](https://www.amazon.com/gp/product/B013XFJKGI/)
    -   And the display cables and cases that come with them
-   [Anker 7-port powered USB hub and power adapter](https://www.amazon.com/gp/product/B014ZQ07NE/)
-   [Portable power strip with retractable cord](https://www.amazon.com/gp/product/B074MPZ21B/)
-   [Elevate aluminum monitor stand](https://www.amazon.com/gp/product/B01MXD21HP/)
-   x4 [MountEra monitor clamps](https://www.amazon.com/gp/product/B01LQT1RBO/)

Note that this setup only works if you use a separate keyboard from your tablet, rather than using an integrated typecover. I personally use a [Kinesis Advantage2 keyboard](https://www.kinesis-ergo.com/shop/advantage2-lfq/) (with Cherry red switches) and a [Logitech M570 thumb trackball](https://www.logitech.com/en-us/product/wireless-trackball-m570). I'll write about these in the next post in the series.

Note also that you need to counterweight the aluminum stand when supporting three monitors all clamped together; if you don't, the stand will tip forwards. (It was designed for a single monitor). You don't need anything special to do this: I just place the two monitor cases and my tablet case on the base of the stand, and that keeps it sturdy and stable.

Now onto discussing the portable monitors:


### How big should they be? {#how-big-should-they-be}

I had initially conceived of a single large, high-resolution portable monitor to pair with my tablet and a portable desktop, if I ever get one (see [my discussion of this in a prior post](https://www.steventammen.com/posts/portability-power-and-screen-configurations/#but-wouldn-t-a-bigger-screen-help-increase-productivity-would-bigger-laptops-have-an-edge-here)). As soon as I started thinking about things more, I came to the conclusion that this actually doesn't make as much sense as multiple smaller external monitors (see [two sections forward](#how-many-of-them-should-i-get-how-should-they-be-arranged)).

The main idea is that vertical screen space is more important than horizontal screen space for most computational tasks, and that therefore it is better to run a PLP screen configuration rather than something involving a single large landscape external monitor. Monitor orientation (landscape vs. portrait) will be discussed more thoroughly below, but for now it is enough to note that 16:9 smaller monitors (15.6" and below) can comfortably be used vertically without wasted space, while larger things get wider than necessary unless you blow up the font a lot.

Humans also have a limited vertical field of view (FOV), skewed towards lower angles (i.e., we are more adapted to looking downwards than upwards). This is why it is best to have the tops of monitors a little bit above the centerline of your vision: it maximizes the amount of monitor in one's vertical FOV. I have not done any sort of rigorous analysis on it, but at the viewing distances I customarily use, I wouldn't want much more vertical height than I get on a 15.6" monitor since it would be out of my basic vision range: I'd have to tilt my neck downwards to see more.

Finally, big monitors are more expensive, heavier, and harder to carry around. If you can accomplish the same thing with smaller monitors and a slightly closer seating position, there is little reason to go with the bigger monitors. It is less stressful on the eyes to focus at longer distances, but I do not think the benefits in this area are enough to offset all the other costs brought about by using larger monitors (since we are not talking about a huge difference in focal distance). Plus, I find that I personally do not have significant problems with computer eyestrain as long as I consistently follow the structure imposed by the [Pomodoro Technique](https://en.wikipedia.org/wiki/Pomodoro%5FTechnique), and rest my eyes during break periods. I will see if this changes when I start wearing contacts; my understanding regarding modern daily-disposable [silicone hydrogel contacts](https://www.clspectrum.com/issues/2015/december-2015/the-benefits-of-silicone-hydrogel-daily-disposable) is that their oxygen permeability (Dk/t) is high enough that they do not cause dry-eyes and computer eyestrain nearly as much as older types of contacts; while perhaps not quite as easy on the eyes as glasses for computer use, they are no longer so detrimental so as to be a big consideration.

Note that if you have the choice, you should always opt for using bigger screens (as [at home and work](#do-you-recommend-using-this-at-home-and-at-work), when portability is not a factor): the bigger screens will let you sit further back with less eyestrain. The above discussion of screen size applies for screens being used as part of a portable monitor configuration that you have to lug around.


### What resolution should they be? {#what-resolution-should-they-be}

In my opinion, until screen sizes get sufficiently large (~40"+ diagonal) such that they increase usable space, high resolution screens are a marketing gimmick (if you do not work professionally with high-resolution photo or video). They are substantially more expensive, draw more power, and use more processing resources... but don't let you display more things.

I am willing to entertain the possibility that reading on high resolution screens leads to less eye strain due to sharper text; however, I have not come across any science that conclusively supports this. Despite marketing claims, there appears to be little functional difference between display resolutions as long a bottom threshold on pixel density is met. You may find these links informative:

-   [How to Pick a Good Monitor for Software Development — Nick Janetakis](https://nickjanetakis.com/blog/how-to-pick-a-good-monitor-for-software-development)
-   [ophthalmology - Does the Retina Display cause less eyestrain than other screens? - Skeptics Stack Exchange](https://skeptics.stackexchange.com/questions/13800/does-the-retina-display-cause-less-eyestrain-than-other-screens)
-   [Scientifically, Do Retina Displays Make Sense?](http://awesci.com/scientifically-retina-displays-make-sense/)
-   [Why Hi-Res Isn't Always Better - Scientific American](https://www.scientificamerican.com/article/pogue-why-hi-res-isnt-always-better/)

Perceived density is, of course, [relative to viewing distance](https://res18h39.netlify.com/calculator). As long as you are sitting at viewing distances that are healthy (see above; the further away you are, the less eyestrain you have), very high resolutions do absolutely nothing since you can't even perceive the difference anyway.

My vote thus goes towards screens that follow the normal 1920x1080 16:9 resolution, since increasing the resolution a lot more is not substantially better, but has demonstrable downsides (cost being foremost among them).


### How many of them should I get? How should they be arranged? {#how-many-of-them-should-i-get-how-should-they-be-arranged}

Monitors can either be used in landscape mode or portrait mode. Some things are very obviously better in landscape mode (most photos, most videos, most spreadsheets, and some poorly-designed desktop applications that only support landscape-sized widths), but most things are better in portrait mode. Portrait monitors can fit more text from documents, more terminal history, more of log files that you want to display, entire pages from PDF documents, and, most importantly, more content from web pages.

While actually _reading_ on the web is somewhat suboptimal due to the high cognitive load that scrolling causes (among other things; [I've written some about this before](https://www.steventammen.com/pages/screen-reading/)), the scanning-focused mental process that dominates how we interact with webpages benefits immensely from having more content on a page visible at any given time. Text lines are usually around 70 characters long (which is good: lines that are too long make it hard for us to track from one line to the next), which leaves lots of horizontal whitespace on most websites. Portrait monitors eliminate this inefficiency. Here is [an excellent article about portrait mode in general](https://senk9.wordpress.com/2015/08/30/thoughts-why-i-use-a-vertical-monitor/) (that goes over pros and cons thoroughly).

So, it would seem that we would want a bunch of portrait monitors then... right? Well, not so fast. You still really want at least one landscape monitor for the various times that landscape really is better. The question thus becomes twofold: how many portrait monitors to add to this landscape monitor, and how to best do so.

The answer to the first question is easy: the number of portrait monitors you should get should be the ceiling of the number of windows that you regularly need concurrently open that would benefit a lot from portrait monitors.

As to which windows benefit from portrait monitors, it is easier to define this as a set negation: all windows benefit a lot from portrait orientation except the landscape exceptions defined above, and, in my opinion, windows that you are actively writing in (this includes both code and prose). Let me explain:


#### Keeping code blocks short {#keeping-code-blocks-short}

It is generally accepted that when coding (with the exception of big switch statements or repetitive declarations that cannot be kept DRY by their nature), your functions should not get much longer than a 1920x1080 landscape monitor's vertical height. This has been argued by people far smarter than myself a number of times. For an introduction, have a look at these links:

-   [Are short methods actually worse?](https://dubroy.com/blog/method-length-are-short-methods-actually-worse/)
-   [design - What is the ideal length of a method for you? - Software Engineering Stack Exchange](https://softwareengineering.stackexchange.com/questions/133404/what-is-the-ideal-length-of-a-method-for-you)
    -   The SRP and OCP mentioned in some of the answers are the ["single responsibility principle"](https://code.tutsplus.com/tutorials/solid-part-1-the-single-responsibility-principle--net-36074) and the ["open/closed principle"](https://code.tutsplus.com/tutorials/solid-part-2-the-openclosed-principle--net-36600), respectively.
-   [programming practices - What should be the maximum length of a function? - Software Engineering Stack Exchange](https://softwareengineering.stackexchange.com/questions/27798/what-should-be-the-maximum-length-of-a-function)
-   [coding style - How many lines of code should a function/procedure/method have? - Stack Overflow](https://stackoverflow.com/questions/611304/how-many-lines-of-code-should-a-function-procedure-method-have)
-   [programming practices - Can a function be too short? - Software Engineering Stack Exchange](https://softwareengineering.stackexchange.com/questions/64449/can-a-function-be-too-short)
-   [Mark VandeWettering's answer to Why do so many programmers have a vertical monitor? - Quora](https://www.quora.com/Why-do-so-many-programmers-have-a-vertical-monitor/answer/Mark-VandeWettering?ch=10&share=61e80f63&srid=ugaI2)

The general idea is that humans can only keep track of so much complexity at any given time, and it is better to abstract things away to keep your methods easy to follow and self-documenting.

Arguably, having multiple methods on a screen showing is good, since it might allow for you to see a method that gets called without needing to use an IDE hotkey (e.g.) to jump to said method's definition. However, from my own observation, unless your project is quite small, the probability of calling neighboring methods is low enough that using a portrait monitor for this benefit alone is not inherently worth it.

What is worth it, however, is having a second window of your code file open to be able to jump to declarations in one window while still looking at your code in the other. Most IDEs and text editors worth using make so-called "splits" easy to achieve, and I would highly recommend doing so. Especially once you get comfortable jumping to and from method declarations with key combinations, a two-window-per-file approach to coding increases productivity by a lot. (At least in my experience, N=1).

Based on this, it seems that we need two windows for coding, and they don't necessarily need to be super tall, since most function definitions should fit on a single page height. Is there anything else? It turns out that coding in fact uses _two_ other windows (at least in my experience): a terminal window for compiling/running/testing with a REPL/etc., and what I will call the "product" window -- the window that represents the result of whatever it is that you are coding. This could be a shell dedicated to running an interactive command-line program, a web browser on the page of your webapp, a process instance of a GUI desktop application you are creating, a VM program like VirtualBox that has instances of your program running in different environments for testing, and so forth.

In general, I have found that while I sometimes want to be able to see a terminal window and my code windows at the same time (looking at error messages comes to mind -- if I'm not using something more complicated like `gdb`, that is) and sometimes want to be able to see the product window and my code windows at the same time (testing app behavior and comparing it with the code that generates it -- for things that are harder to test with automated unit tests and whatnot), I very seldom want to see my code windows _and_ the terminal window _and_ the product window all at the same time.

The best way to approach this, in my opinion, is not to have these two windows take up valuable screen space when they are not needed (which is most of the time), but to only take up screen space when they are specifically needed. This can be accomplished with some intelligent use of keybindings via scripting (in my case, using [AutoHotkey](https://www.autohotkey.com/)). Rather than compiling with some arcane key combination or function keys, if you use custom hotkeys (or a leader key sequence à la [Spacemacs](http://spacemacs.org/)) you can very easily define things like "compile the code file for the window that is currently focused and put the terminal on top of the window stack on the right," "compile the code file for the window that is currently focused and put the product window on top of the window stack on the left," and so forth.

The upshot of all this is that we can get away with a landscape monitor for the basic coding windows, with an editor tab on either side of the monitor. The other coding windows (that are not always active) can be automagically handled with a bit of intelligent scripting.


#### Keeping prose organized, and keeping writing and presentation separate {#keeping-prose-organized-and-keeping-writing-and-presentation-separate}

Prose is a bit different. Generally speaking, it is definitely better to have more of a text document showing at any given time than less, so that reading is more efficient, and you don't have to scroll to follow the argument at a given point. This would seem to favor portrait monitors.

I am going to be completely up front in stating that I am going to be approaching this problem from the point of view of what I hold to be the optimal situation: writing highly-structured documents in Emacs' Org mode with one window for writing, a second window for displaying the outline of the document, and a third window for showing the produced result (either as a webpage via [Hugo's local webserver](https://gohugo.io/commands/hugo%5Fserver/) or as a PDF [via XeLaTeX](https://kieranhealy.org/blog/archives/2011/01/21/exporting-org-mode-to-pdf-via-xelatex/)). This is highly opinionated, I know, but I see no reason to talk about approaches that I would personally never use (Microsoft Word and Wordpress/other typical CMSs with built-in rich-text editors, for example) because they are so inferior to the above approach.

I favor prose that is highly structured. By this, I mean that content is broken into sections and subsections such that a semantic tree can be built based on headings. Org mode encourages this by making [visibility cycling](https://orgmode.org/manual/Visibility-cycling.html) of headlines extremely simple: think being able to expand and minimize sections as you please. This approach has numerous benefits (such as allowing for automatic creation of a table of contents and semantically chunking information to make it easier for users to find and link to), but has as a side-effect the grouping of text into blocks, blocks that will typically fit on a single landscape-screen height.

Now, you might ask: why are two other windows necessary, if we could just get away with writing in such a way that text nicely groups itself into blocks? As to why I use a window to display the outline, this is to let me see the semantic structure of a document at a glance (to keep track of argument flow in my head), and more importantly, to let me see the names and ordering of headlines instantaneously so that I can immediately jump forwards or backwards with Vim motion commands, [jump to a specific headline with fuzzy-search completion](https://emacs.stackexchange.com/questions/32617/how-to-jump-directly-to-an-org-headline), or copy the name of a headline to use for a relative link. This outline window is also actually a different document than the Org file I am writing in (with the headline structuring duplicated and only the most barebones of content, functioning as a true outline). I have only recently started doing this since I plan in the future to offer an outline form of content along with all my webpages, since I have personally wished for this sort of thing frequently in my use of other websites.

Just as with the terminal window and product windows for coding above, it would be wasteful to show the separate preview window when it is not needed. Also just as with these other windows, it is best to handle this "conditionally displayed" window with intelligent scripting. You can define a keybinding that saves the current buffer to trigger the refreshing of the webpage on the Hugo server and focuses the localhost tab in Chrome (or, for PDFs, saves the current buffer to trigger the XeLaTeX export and focuses the PDF viewer application). When you want to read a page/document more thoroughly (as when giving it a look-over before publishing it or rereading parts of it you have already written), you can have the full benefits of a vertical monitor without actually having to use vertical monitor space when writing your document, instead making use of side-by-side windows on a landscape monitor.

Using a separate window for reading your content is also superior for all the reasons why drafting documents in Org mode and Markdown (and even HTML) is beneficial: keeping content separate from its presentation keeps editor buffers fast, text easy to manipulate, and reading optimal when it is actually what you want to do (in the case of webpages, with full CSS in all its glory, the displaying of images and LaTeX renders that would ordinarily slow down your document in an editor, and seamless link following in the browser itself).


#### Adding portrait monitors to a central landscape monitor {#adding-portrait-monitors-to-a-central-landscape-monitor}

As discussed in the two preceding sections, the main windows for coding and prose can be handled on a single landscape display, and do not benefit as substantially from additional vertical height (although it wouldn't hurt either). Most other computing tasks naturally center themselves around a landscape monitor (photo, video, spreadsheets, Bible study, and eBook reading being the other main ones for me).

All of these computing tasks thus use the landscape monitor for their primary windows: coding and prose due to the reasons above, and all the others since they require a single window displayed across the landscape monitor. Thus, the landscape monitor should be the centrally located one, in the middle of one's horizontal FOV. This leaves reference windows: the other windows one might wish to have open when doing any of these tasks. These are typically browser windows for research, PDFs, documentation, and so on.

I personally have not found myself wanting more than two reference windows at any given time when coding or writing prose. In an ideal world, I would be able to have monitors to display every individual browser tab or other source (with no time/ergonomic penalties for looking at said monitors), but this is simply not possible.

When coding, I typically have resources open relating to documentation of packages I am using, tutorials relating to functionality I am trying to implement (e.g., pages from [TutorialsPoint](http://www.tutorialspoint.com/)), StackOverflow threads relating to things I want to do, and a list of functional requirements that I am working with. What having two windows for this allows is the simultaneous heavy use of two sources of documentation, or one source of documentation and one StackOverflow thread, etc.

A similar situation obtains when I am writing prose. I am a very research-focused individual (at least I would like to think that I am), and frequently find myself with 40 or more tabs open at a time and many separate clusters of research. While I can think of a few exceptions, most of the time I don't find myself needing to access information from more than two sources at a time. Of course, which sources these two are will vary as I write, but that's not a problem since I make use of quick, keyboard-driven tab switching. No, what the multiple monitors should provide is _immediate_ access to a resource being referred to a lot or mined for information.

Two of these immediately accessible resources seems to me to be the best number: one is too few most of the time (I do often want to be comparing what two different sources have to say on something, e.g.), but three is too many most of the time (the third monitor would only get used somewhat infrequently; this is diminishing returns kicking in).

I have other standard workflows vis-à-vis reference windows for all the other computer tasks that I do regularly. I'll probably write up all the screen configurations in a separate post later, but the main takeaway for now is that two portrait monitors are the best solution for reference materials, at least given my usage. This is why I use and recommend a PLP setup.


### Do I need to invest in gear that lets me use them when away from outlets? {#do-i-need-to-invest-in-gear-that-lets-me-use-them-when-away-from-outlets}

In my opinion, no. The full monitor configuration takes a bit of time to set up, so you should use the tablet on the stand (without the USB monitors and powered USB hub) or tablet without the stand if you are just going to be working for a short time. I find that I am usually only without power when I am working for a short time, and thus don't need a power source to set up the full configuration anyway.

When I wish to be working for an extended period of time, however, I find that I usually have access to an outlet (or at least it is not much of a bother to go somewhere that has an outlet). This is speaking from the perspective of a college student who mostly hangs out in computer science buildings though, so YMMV.

You need a 12V DC out battery to power the USB hub. These are actually sort of hard to find, since most  portable power packs focus on USB-A and USB-C charging. You may have luck with the following equipment (note that I have not bought these things and cannot guarantee that they work, although I see no reason why they wouldn't):

-   [Battery to power tablet and the powered USB hub](https://www.amazon.com/Powkey-External-Battery-Indicator-Smartphones/dp/B07GJDML3F/)
-   [Male-male 12V DC cable for the powered USB hub](https://www.amazon.com/Power-2-1mm-2-5mm-Angled-Degree/dp/B016BJGZ2U/)


### What happens if I have a laptop and not a tablet? {#what-happens-if-i-have-a-laptop-and-not-a-tablet}

You'll need to figure out a different stand solution, since the monitor stand that I use doesn't work for laptops. You should still be able to use the same portable monitors and monitor clamps, however, assuming you use your laptop screen as the landscape screen.

You may be lucky enough to have 3 or more USB ports on your laptop, which would let you drive the two USB monitors directly and a keyboard/mouse combination off another port via USB hub. This would mean you could eliminate the powered USB hub and portable power strip. Setting up would be faster for you.

I would still recommend elevating your laptop and the portable monitors to get them at eye-level, since it is significantly more ergonomic.


### What happens if I don't have a lot of money at the moment? {#what-happens-if-i-don-t-have-a-lot-of-money-at-the-moment}

I would recommend saving until you have enough, or buying components over time: the setup I use was the cheapest configuration I could find that used quality components and did what I wanted. I was horrified at how expensive the monitor clamps and aluminum stand were, but couldn't find equivalent products that had more reasonable pricing.

You might be able to get away with even lower resolution monitors, or smaller monitors, or a less powerful base tablet, etc., depending upon your needs.


## Other matters concerning this portable monitor setup {#other-matters-concerning-this-portable-monitor-setup}


### Transporting things {#transporting-things}

The full setup is quite heavy and fairly bulky. I very much recommend you invest in a high-quality backpack that distributes weight on your hips rather than concentrating it on your shoulders. Such a backpack would allow you to carry this setup long distances with minimal discomfort.

I personally use [this Aarn hiking pack](https://www.aarn-usa.com/products/liquid-agility), and couldn't be happier: the pack distributes weight optimally without interfering with walking biomechanics. Everything goes in the flat-opening back pocket except the bulky concave keyboard, which goes in the front pocket.

I don't use the dry-liners since I carry around a large umbrella on rainy days. This has worked OK for me so far.


### Set up time {#set-up-time}

If you unplug and disassemble everything when transporting, setting up the USB monitors with the power strip and powered USB hub takes some time (as does clamping the monitors together). This is the only big con of the setup that I have identified so far.

If somebody made coiled cables for the monitor cables and power adapter cable for the powered USB hub, it would be possible to leave most everything assembled since the cables wouldn't tangle and get in the way (because they were coiled). However, I could not find any at the time of writing, so assembly takes some time (probably on the order of 5-7 minutes). I've gotten faster as I've done it more.


### Do the monitor clamps damage the screens? {#do-the-monitor-clamps-damage-the-screens}

My tablet and the Asus portable monitors use IPS panels with a backlight. When you have the clamps tightened, there is minor light-bleed at the areas of high pressure on the edges. This is most noticeable on very dark backgrounds. I have not found this to be a problem since it is minor and I can ignore it.

I purposefully bought two clamps for either side so that I wouldn't have to tighten them as much. I think it might have been possible to get away with one, but I was concerned at how much pressure I would have to put on the screens.

I have not noticed permanent screen damage from the clamps; when you remove the clamps and the pressure is gone, the light-bleed goes away. There are a few spots on the Asus screens (one screen in particular) that have minor image inconsistencies, but I think these are from lacking quality control rather than the clamps (and these are not bad at all: you can see small imperfections if you look for them). I am kicking myself for not checking the screens more thoroughly when I first got them (to know if these developed over time or were there from the beginning). If more image problems develop over time then I will have to rethink the whole setup, but I don't think this is likely.


### Do the monitor clamps obstruct vision? {#do-the-monitor-clamps-obstruct-vision}

A little bit. The Asus portable monitors have large enough bezels that the clamps do not end up blocking much of the screens. My tablet, with a much smaller bezel, has more of its screen blocked.

This is mostly a problem for line numbers, since the tablet screen has to go on the right to make the display cable for the landscape monitor work (it plugs in on the top right side when the monitor is flipped -- see the images above). If you resize windows on the tablet to be floated a little bit off the left edge, you can still have plenty of width (the Microsoft Surface tablets are 3:2). I'll probably write a script at some point to do this automatically.


### Do you recommend using this at home and at work? {#do-you-recommend-using-this-at-home-and-at-work}

I don't really think this setup is ideal when you have the ability to have larger monitors in a static location: the parameters are simply different. For this setup, portability is a factor. For most monitors in general, it is not. It makes sense then that what works best in a portable context is not necessarily the same as what works best in a static context (although much of the discussion relating to PLP and so forth still holds).

There are a [wide variety of monitors to choose from when programming](https://www.guru99.com/best-monitor-programming.html) -- some big, some small, some wide, some "normally" proportioned. While context will of course determine what is best for individuals, I think using a 4k TV with low input lag as a computer monitor makes a lot of sense _at home_, since that way you can use the same display as both a TV and a computer monitor, saving money and space.

If you decide to go this route, you'll want a display that is big enough to display 4 portrait windows side by side without being so large that you have to move your head a lot. I think that 49" or 55" TVs work well, if you sit a ways back from them. (I don't speak from experience, since I don't own a 4k TV yet -- I plan to get one in the not-so-distant future). If you have a dock, you can also plug in your tablet and peripherals with very minimal set up time, unlike the stand + clamps monitor configuration.

Using something like this on the job also works well since you don't have to deal with bezels, but combining multiple smaller monitors works too (and multiple smaller monitors have the advantage of being easier to shift around with employee turnover, and are better able to deal with monitor damage, since ruining one screen won't ruin all of them -- it's not always easy to guarantee that employees and clients will be careful around screens).

The main problem with larger monitor options is that they are not portable. The setup described in this post can (hypothetically) be taken anywhere.


### Isn't this... a bit much? {#isn-t-this-dot-dot-dot-a-bit-much}

I certainly don't think this sort of monitor configuration is necessary for everyone. Those who think that they could use more screen real estate likely know who they are. People who mostly use their computers for casual browsing and Netflix probably shouldn't waste their money buying something like this, since they don't need it.

If you worry what other people think about you, I suppose it is worth noting that this setup is a bit geeky in person, and will draw attention to you. Particularly if you set up somewhere like a coffee shop where the population is not just programmers.
