+++
title = "Windows vs MacOS vs Linux"
date = 2018-05-20T22:24:18-04:00
tags = []
categories = []
draft = false
+++

[//]: # (tags = ["workflow", "operating systems"], categories = ["Computers/Software", "Productivity/Efficiency"])

## Review of last post {#review-of-last-post}

Recall, [last post](https://www.steventammen.com/posts/portability-power-and-screen-configurations) I made a case for using a 2-in-1 tablet for reading use and light-medium computational tasks, and a portable desktop for more power if/when necessary.

At this juncture, I am looking for a computer for light-medium computational tasks, since I don't really need more power yet (I mostly write and program on my computer at the moment). I am planning on getting into videography and video editing in the next few years (toying with the idea of vlogging), and when I do so, that's when I'll spring for a portable desktop.

So right now I'm looking for some sort of 2-in-1 computer. But what sort of operating system should it run? In my opinion, given what options I've come across at the present time, it should run Windows + Linux in a dual-boot.


## Initial thoughts {#initial-thoughts}

Since Apple refuses to put non-crippled hardware in and run a real operating system on any of their tablets, that means no Apple products right-off the bat. There are also some things that Apple as a company does that I don't like. For example, not letting anyone use their OS on non-Apple hardware, _requiring you to own a Mac to even code programs for Macs and iOS_, making things like Facetime and iMessage Mac/iOS-specific (thereby forcing people into their ecosystem and keeping them there by inertia and the necessity of communicating with family and friends), and emphasizing marketing over more important things like manufacturing ethics. Apple has also tried to convince the world that OS X is some sort of panacea for computer neophytes when Ubuntu/Mint/Manjaro/etc. and Windows are just as acceptable -- some of the marketing is simply false. Now, Apple is not alone in distasteful marketing (all the other big tech companies do it too), but theirs is among the worst, in my opinion, since it revolves around the "coolness" of being a Mac owner rather than data and performance benchmarks. Part of this is the fact that all the Windows OEMs like Dell and HP have lots of competition so can't afford as much hipster nonsense; they are compelled by market forces to sell their products with less of an emphasis on intangible "cool factor" -- something that is in reality simply marketing for profit margin. I suppose this makes Apple somewhat less culpable (since if said OEMs didn't have the competition they do, they would probably be just as bad as Apple in their marketing), but it hardly seems like a good defense for Apple's behavior. We'll return to Apple later below.

Now, I’m not a Microsoft fanboy or anything either. I like that Microsoft does not wall-in their garden, that they are working on the Windows subsystem for Linux, and that they actively contribute open source code (e.g., <https://github.com/Microsoft/language-server-protocol>). But the underlying reason why I think a Windows + Linux machine is the ideal at the present time isn’t due to brand loyalty. It’s because it really does make the most sense. [Here’s another programmer’s thoughts](http://www.akitaonrails.com/2017/09/20/windows-subsystem-for-linux-is-good-but-not-enough-yet) regarding some of the things involved. Basically, here’s how I view it:

-   Linux (particularly minimal installs like Arch and its derivatives) are lean and fast. Especially if you use light DEs (i.e., not KDE/Gnome, but something like Xfce) or just stick to a tiling WM like i3 (which is what I am planning on doing eventually).
-   Linux also has things for powerusers that make it the best choice. Good open source command-line tools, i3, rofi/dmenu, and so on.
-   But Linux doesn’t have support for certain applications (and \*BSDs are even worse). Off the top of my head: the Kindle app, Adobe creative applications (e.g., Illustrator), many context-specific applications where the company writing the software isn’t big enough to support Linux.
-   There are also programs that really only work or work noticeably better on Windows alone: CAD software (Inventor, SolidWorks), the Microsoft Office suite (which is, objectively speaking, more advanced and optimized than open source alternatives and Apple products), and many video games.

So basically, there are some programs that you might want to use that you can’t use/can’t use well on Linux (even with Wine and/or virtualization). Which means you need either Windows or OS X as well. Which one of these? Well, as noted above, Windows still has some applications that don’t have good answers on the Mac side of things (of course there are some specific examples going the other way as well, notably [OmniFocus](https://www.omnigroup.com/omnifocus)). So that would seem to make one initially lean towards Windows over Mac. But how do the two stack up in specs/dollar?


## Windows PCs vs Macs: specs/dollar ratio {#windows-pcs-vs-macs-specs-dollar-ratio}

Note that I did this comparison simply because I was interested. I would never actually buy a Mac under my circumstances due to the whole lack-of-tablet thing. But many people may not agree with my views in this area, so I figured it would be interesting to run a comparion anyway.

Let’s see what sort of Mac I could have gotten for around the same price as the Microsoft Surface Pro tablet I ended up going with ([Dual-core i5, 8GB RAM, 128GB SSD](https://www.microsoft.com/en-us/store/d/surface-pro/8nkt9wttrbjk/C0HL)). I got this tablet for $899 with a student discount, but with these specs it would be $999 ordinarily. The only computer Apple offers with a base price of ~$999 is the [base-spec version of the MacBook Air](https://www.apple.com/macbook-air/specs/) for $999. So, as of May 2018, how do they stack up?

| Variable               | Surface Pro 2017                                                                                                                           | MBA 13-inch 2017                                                                                                                                | Winner  |
|------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| CPU                    | [Intel Core i5-7300U](https://ark.intel.com/products/97472/Intel-Core-i5-7300U-Processor-3M-Cache-up-to-3%5F50-GHz) (2.60 to 3.50 GHz)     | [Intel Core i5-5350U](https://ark.intel.com/products/84990/Intel-Core-i5-5350U-Processor-3M-Cache-up-to-2%5F90-GHz) (1.80 to 2.90 GHz)          | Surface |
| Memory                 | 8 GB 1866MHz LPDDR3 RAM                                                                                                                    | 8GB 1600MHz LPDDR3 RAM                                                                                                                          | Surface |
| Storage                | 128GB SSD ([Q32T1 Read/Write Seq.: 1680/977 MB/s](https://www.anandtech.com/show/11538/the-microsoft-surface-pro-2017-review-evolution/5)) | 128GB SSD ([Q32T1 Read/Write Seq.: 1567/737 MB/s](https://www.notebookcheck.net/Apple-MacBook-Air-13-2017-Laptop-1-8-GHz-Review.230010.0.html)) | Surface |
| Graphics               | Intel HD Graphics 620                                                                                                                      | Intel HD Graphics 6000                                                                                                                          | Surface |
| Display                | 2736x1824                                                                                                                                  | 1440x900                                                                                                                                        | Surface |
| Battery Life (Claimed) | 13.5 hours video playback                                                                                                                  | 12 hours video playback                                                                                                                         | Surface |

Well, that was pretty one sided. Since I didn't really want any more computer than this, and these were the main options I was considering for either operating system, and I wanted a tablet anyway, it should be pretty obvious why I chose the Surface tablet.

Now, there are some things to note. First, the MBA comes with a keyboard and trackpad, and the Surface does not. The type-cover that you buy separately adds ~$120 to the price of the tablet, if you want to use it as a laptop that is (doesn't bother me since I'm using a separate keyboard anyway). I really recommend that people don't use it like a laptop since the ergonomics of splitting up the keyboard (which you should have in your lap to keep your wrists straight and unpronated) and the screen (which you should have at eye level) are really much better. Plus you can't use keyboards like the [Kinesis Advantage2](https://www.kinesis-ergo.com/shop/advantage2/) (what I use) "laptop-style," and keyboards like this have many practical advantages. Too bad no big companies ever mention this.

Based on this comparison alone (and note again the disparity due to lack of keyboard), someone might think that Macs are overpriced. It has been a persistent opinion for many years now. In all the research I've done in the last couple months, however, this particular opinion seems to be not entirely true. Macs seem to me to be priced right about the same as premium Windows machines of similar build quality. For example, if you compare the 13" MacBook Pro with the Dell XPS 13, HP Spectre x360, and Microsoft Surface laptop, they are all "right around" the same price for similar specs, give or take $100 here or there. (And of course whatever currently has a sale is going to win here).

So why do people think Macs are significantly overpriced? I think this is because they are major overkill for most people, just like the Dell XPS 13 is major overkill for most people. The thing is, since Microsoft does not lock down their operating system, you can buy a Windows laptop all the way from $200 (though I wouldn't recommend it) to MackBook Pro prices, as above. With Macs, you basically start at $1,000 and work your way up from there. So they are incredibly overpriced if all you really want is a basic computer that does basic computer things... which is unfortunate, since that is typically how Apple markets Macs to uninformed people. Boo.

Secondly, there are _times_ when they really are probably overpriced. Since there is just Apple making hardware, they won't always have Macs in production with the newest processors and other components. So maybe they are a processor generation behind, or whatever (as in the comparison above). To the extent that they don't remedy this problem, to that extent they are overpriced, since you are basically paying the premium price, but for old hardware.

Finally, I am less informed on the desktop side of things. But my understanding is that Apple loses more significantly here mostly due to lack of options, and the fact that desktop components tend to change more rapidly than the components that find their way into ultrabooks. If you are building your own rig (or even buying a pre-built machine from respectable dealers), you can tailor basically whatever you want, to use specs that exactly match what you want to do, using whatever hardware you want. Not so if you buy the Mac Pro -- which, as I undestand it, is several years behind now, with no new release planned until 2019. And if you want a portable desktop like me, too bad so sad. So no Apple here either.


## So... Windows. But how should Linux be run? {#so-dot-dot-dot-windows-dot-but-how-should-linux-be-run}

For me, this decision is simple. I'm going to spend much more time in Linux than on Windows, since there are only a few applications that I need Windows for. And since SSD's make rebooting significantly faster, it's not too big a bother to switch over to Windows if I need to get the performance benefits of doing so (Windows still dominates in GPU performance, e.g.) or use something like Adobe Illustrator. Additionally, many of the Windows applications I use are not so demanding that I couldn't just spin up a Windows 10 virtual machine on Linux to use them.

So is this what I'm using right now? No. However, this is what I plan to use in the long term. Dual booting Linux (primary) and Windows (secondary) with most Windows apps being accessed through a VM and a select few being accessed through a proper reboot simply makes the most sense for users like me, in my opinion.

There are several reasons why I have not immediately jumped into such a configuration. First, I am new to Linux, and want to ease myself into it. There is a lot of nonsense about "el1te progr4mmers only use Linux!!!!!11" that I find distasteful. I learn fastest by doing things myself and really digging into the nuts and bolts. The problem is, doing this tends to break stuff. Especially when you are really new and don't know what you are doing. Virtualbox makes it ridiculously easy to store snapshots of a Linux virtual machine and revert back to them if you brick your distro. While you can also do this with a dual boot, it is more complicated. Full stop.

Secondly, and most importantly for me, most of my keyboard remapping is currently being done through AutoHotkey, a Windows scripting language. Linux does not have a good equivalent to the AutoHotkey libraries I am using, and it is going to take me time to get everything in firmware. As will be discussed below, you can run many/most Linux-specific things on Windows through a VM or through the WSL, so I don't feel like I am terribly crippled in the short term.


## Virtualization software on Windows 10 {#virtualization-software-on-windows-10}

I did some research regarding hypervisors, and came to the conclusion that I need a type 2 hypervisor to pass through my keyboard remapping. And since I'm still figuring this stuff out, I didn't want to drop lots of money on a professional virtualization program.

So this immediately knocked out all options except Virtualbox and VMware's Workstation Player (the free version of their software). According to my knowledge, the free VMware option does not offer snapshots and does not let you run multiple VMs at once, while Virtualbox does offer snapshots and lets you run multiple VMs at the same time. Combine this with the fact that Virtualbox is open source (GPLv2), and Virtualbox seems like the obvious choice for users wanting free virtualization. The page I linked to above ([here](http://www.akitaonrails.com/2017/09/20/windows-subsystem-for-linux-is-good-but-not-enough-yet)) found that Virtualbox was not substantially slower than the free VMware option too, even though I think it has historically lagged behind somewhat.

Because of all this, I decided to go with Virtualbox for when I am using virtualization.


## Beginning distro {#beginning-distro}

I decided early on that I agree most with Arch's take on Linux. All the distros have something to offer (and I wouldn't go so far as to say that Arch is strictly better than, say, Ubuntu), but for my purposes, Arch seems the best. A clean, minimal install without any bloat, a rolling release schedule, an excellent wiki, and a more developer-centric community are all reasons why I favor Arch.

However, I didn't really want to deal with partitioning by command line (and all the other low level stuff you have to do just to get a simple Arch distribution up and running) my very first time. However, I did want to use something "Arch-like" to help better prepare myself for the eventuality of switching to Arch.

Consequently, I settled on Manjaro as my first distro to use virtualized. It uses the same package manager as Arch (Pacman), but comes with a lot of extra stuff and handles all the basic setup for you. It seems to me to be a good starting distro for my purposes, and so far I've enjoyed it greatly.

With no experience in virtualization software or setting up a distro, I got Manjaro running in Virtualbox in like an hour. I simply followed [this tutorial](https://www.youtube.com/watch?v=Dhw8ttRjXeg), and then the advice on [this page](https://forum.manjaro.org/t/hidpi-support-in-manjaro/26088) regarding making Xfce behave with a high resolution screen. I also turned off key capturing in Virtualbox to let my keyboard remapping programs work.


## OK, so you're using Virtualbox to run Linux? {#ok-so-you-re-using-virtualbox-to-run-linux}

No. I'm using Virtualbox to _learn_ Linux because I can rollback if I break things catastrophically. For my day to day computing, I'm using Ubuntu through the WSL.

[Here](https://www.phoronix.com/scan.php?page=article&item=wsl-february-2018&num=1) is an excellent comparison of various options of running Linux on Windows machines. There's really not much more I can add to that comparison, except note that my current workflow is not typically I/O bound, since I don't compile through WSL, and all the stuff I use it for is mostly shell-related (fish + ranger, most notably). [Virtualbox also adds latency](https://pavelfatin.com/typing-with-pleasure/#virtualbox), unlike the WSL in a terminal like wsltty, which is definitely not good. That piece is fantastic, and you should read it all the way through.

Latency will addressed more thoroughly in a future post


## Conclusion {#conclusion}

To reiterate, I _do not_ recommend that most people run a setup like I am running, i.e., using Windows day to day with somewhat hackish Linux support. Rather, I think most people should dual-boot, with Linux as their primary OS, and Windows accessed through VMs and a full reboot when performance is needed.

I will be switching to such a setup when I get my keyboard remapping in firmware.
