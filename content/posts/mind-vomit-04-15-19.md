+++
title = "Mind Vomit 04/15/19"
date = 2019-04-15T19:56:41-04:00
tags = ["copyright", "workflow", "portable desktops"]
categories = ["Mind Vomit"]
draft = false
+++

## The idea {#the-idea}

I figure I've been rather spotty at posting this semester when things got busy. It's not like I'm ever probably going to acquire so much time that I can write beautiful coherent treatises on all the things I might wish, so instead interested parties can see the napkin scribbles and slightly-insane musings that occupy whatever vanishingly small amount of free time I have every day (or whatever the timeline ends up being). This will also give me a good opportunity to force myself to practice typing on [my custom layout](https://github.com/StevenTammen/personal-keyboard-config) until I hit my initial goal of 90 WPM, so there's that.

I also gave up on my idea of [Twitter as a link repository](https://www.steventammen.com/posts/a-usage-philosophy-for-twitter/): word limits are a bigger problem than I thought. In recent memory, my college papers have been like

-   10 pages on Plato's conception of poetic inspiration
-   34 pages on Unicode, mnemonics in keyboard layouts, ancient Greek orthography, cognitive models of hierarchical control in typing mechanics, language learning, etc.
-   33 pages about the historical and religious environment that led to the 4th century Spanish heretic Priscilla of Avila's execution

So while I was aware that brevity isn't exactly my style, I thought maybe there was something to the idea of imposing clarity of thought (or something).

I was wrong. Word limits are rubbish. I find that usually I have far more to say on a topic than just a couple sentences. If I don't, whatever I am linking to is not worth sharing. I'll probably establish a more formal system on this site at some point. I might make another Hugo taxonomy for it.


## YouTube watching reel {#youtube-watching-reel}

-   [Electric Unicycle, ninebot Z10, Patent and the Death of Innovation - YouTube](https://www.youtube.com/watch?v=A2srFI9vuDI)
    -   I don't like patents on principle, but I sort of understand why they exist. There needs to be some system to front the cost of research and innovation that doesn't subsequently lock down any good that comes from it in corporate shenanigans.
    -   International differences in copyright are interesting. Once something is out there, there is no guarantee that someone else in another country (that doesn't respect your country's patents) won't do it better than you.
    -   The open source anarchist in me think that the litigious patent holders are almost always on the moral lower ground, but I don't know how much of this is just from the fact that I have never gotten a good perspective from a company. Companies do need to turn a profit to keep innovating, after all.
-   [Samsung Galaxy Fold hands-on: more than a concept - YouTube](https://www.youtube.com/watch?v=-O39FAQapSA)
    -   Seems like a decent first attempt at the concept. Too bad Samsung doesn't run a clean version of Android.
    -   Most interested in the idea personally for making use of structural time loss (e.g., lines for food, sitting in the bathroom, etc.) more productively than with a traditional smaller phone screen.
    -   I always wear pants with deep pockets, so doesn't seem like the height would be a problem.
    -   The price needs to come down; the priorities seem wrong to me. I would be happy to have a wimpy processor that could only handle a couple browser tabs, but the big screen for better reading. If I need a bigger processor for more work, I'd also probably benefit from a keyboard and mouse, and therefore the whole phone concept becomes redundant. The screen will never be large enough for real productivity, so making the device uber powerful just isn't something that has a draw for me.
    -   I also personally don't understand the push for so much innovation in phone cameras when a portable mirrorless with a real lense absolutely massacres any phone camera in literally every measurable way.
-   [Keanu Reeves Shows Us His Most Prized Motorcycles | Collected | GQ - YouTube](https://www.youtube.com/watch?v=O4iGNXsqghs)
    -   The idea of withdrawal when not riding gels with a lot of other stuff I have read. Aside from practical benefits of motorcycles (particularly electric ones), the "therapy" aspect of them may in fact be the thing that draws me to them most.
    -   Celebrities are people too.
-   [MINDBLOWING New Features in Adobe's After Effects & Premiere Pro CC 2019 Spring/April Update! - YouTube](https://www.youtube.com/watch?v=ks9OpawV5aY)
    -   As a neophyte outsider looking in, I didn't understand everything. But the observation of much requested features finally getting added—even though they make perfect sense, and could improve workflow efficiency by quite a lot—is something that that always seems a bit puzzling to me. I admit to not having a huge amount of real world programming experience under my belt, but I'd like to think that I am in the habit of being thorough and thoughtful about what users _actually_ want. I guess part of the issue is probably that the users of the software and programmers of the software may not be the same people (as is the case in my own personal projects relating to workflow), and may have problems communicating effectively. Additionally, I suppose, what seems essential to one person may be useless for the next... although I think that in general subjectivity is pretty limited. In other words, I'm the sort of person who thinks that there is usually _one_ right way to do it, and that people who think otherwise are in need of some education.
-   [A Video Editor's Review Of The Dell XPS 15 9570 Laptop - YouTube](https://www.youtube.com/watch?v=91KEAfLNOLA)
    -   I've always been interested in the idea of replacing the need for a desktop completely, simply because not being able to take serious work with you is a handicap. I've long thought that a [portable desktop](https://simplynuc.com/hades-canyon/) makes more sense than a laptop—since there is no need to use power and heat limited components—but I have not seen any NUCs with an 8 core processor running 16 threads at 5.0 GHz. It's an interesting concept—that perhaps the higher demand for workstation laptops will mean that they outperform their portable desktop counterparts, even despite tighter constraints. It reminds me of my recent research into forum software and mailing list software. Even though forums are much more complicated than mailing lists, because they are more common nowadays, it is actually easier to set them up and maintain them (at least in some ways).
    -   While I currently do not have any video projects or expertise, it is one of the things I think I want to get into once I have some income to support it. I've been messing around with portable monitor setups for a while now, and it's interesting to consider how the priorities are very different. The portable monitors I am currently using probably have pretty terrible color accuracy, but they were relatively cheap and let me triple my working space in terms of pixels.


## Current computer setup {#current-computer-setup}

Ugly photos, but they get the idea across. I should be trying out a new kind of stand soon for the portable monitors that might make them much faster to set up on the go, and also allow them to be turned/adjusted in a sort of spur of the moment "demo" when pair-programming or simply trying to explain something to someone else.

{{< figure src="/posts/mind-vomit-04-15-19/input-devices.jpg" caption="Figure 1: Input devices" >}}

{{< figure src="/posts/mind-vomit-04-15-19/monitors.jpg" caption="Figure 2: Monitors in the home setup" >}}

I still need to get scrolling set up in AutoHotkey such that I can scroll with the trackball wheels (probably while holding a down a key on the home row of the opposite hand). It would also be useful to set up the ability to lock movement by axis, to increase mouse speed temporarily, to decrease mouse speed temporarily, etc. Setting up one "mouse modifier" should make it easier for other features to follow.

The ergonomics of this setup are alright, but I still want a fully split keyboard. I came across another build of the [Dactyl Keyboard](https://github.com/veikman/dactyl-keyboard) with thumb clusters for those people who favor more keys instead of layer abstraction. Seems like just about the ideal way to do this approach, but I'd still prefer three large horizontal thumb keys (like the two on the Kinesis Advantage plus one more closer to the keywells) to allow for better chording: less keys, more abstraction.
