+++
title = "Portability, Power, and Screen Configurations"
date = 2018-05-20T22:08:26-04:00
tags = []
categories = []
draft = false
+++

[//]: # (tags = ["workflow", "rethinking standards"], categories = ["Gear", "Computers/Software"])

## Reading with your computer {#reading-with-your-computer}

Since I started buying eBooks and doing reading on a Kindle and a cheapo tablet, it became very clear to me that in my next computer purchase, I wanted the ability to read comfortably.

[Done correctly](https://www.steventammen.com/pages/screen-reading/) (with page-turning rather than scrolling, correct brightness settings, blue-wavelength filtering at night, purposeful minimization of distractions, and so forth), I don't believe screen reading has very many downsides compared with reading paper books. However, it allows you carry an entire library with you at all times, take advantage of instantaneous cross-referencing, easily look up words in dictionaries and concepts in encyclopediae, always have your notes with you, etc.

So I wanted a computer that was light enough and comfortable enough to use for reading use. Right off the bat, this eliminates computers without removable keyboards (in my opinion).


## Opportunity cost {#opportunity-cost}

As it turns out, getting a lot of computational power into a small package is costly, and involves much compromise. For example, to get a powerful tablet with an i7, 16GB of RAM, and a 512GB NVMe SSD, expect to pay more than $2,000. And good luck if you want 32GB of RAM, a very fast processor, and a discrete GPU.

Now, Microsoft has experimented with the Surface Book to put a discrete GPU in a detachable keyboard. This sounds good in theory (have the tablet part to read when you want it, and the discrete GPU when you want it), but the problem with this is that the computer is still limited in what sort of processor it can use. You can't have anything that consumes too much power or generates too much heat, because then you have bad battery life and a hard time managing heat in the slim chassis. And putting the CPU in the base also doesn't work because you can't have a tablet without a CPU.

What all this means in general is that if you want a heavy-duty performance computer, it will not be in a very small package. Have a look at System76's [Oryx Pro](https://system76.com/laptops/oryx) computer, for example. This is about as slim as real performance gets, but it's still not something that you would curl up in bed with, or hold in one hand to read.


## Playing to configurations' strengths {#playing-to-configurations-strengths}

I am of the opinion that you should not try to force very portable things to be hyper-performant against their natural tendencies of emphasizing power-efficiency and thermal stability, and that you should not try to force very performant things to be hyper-portable against their natural tendencies of emphasizing high specs and heat dissipation. In short, the two things simply do not mix.

This observation explains why trying to go "against the grain" will cost you enormous sums of money, and lead to less than optimal configurations anyway. It is much, much easier and cheaper to build a portable tablet with reasonably good specs and a high-performance desktop with reasonably good portability than to turn those "reasonably goods" into "definitely goods." Attempting to so, to the extent that it is possible, strikes me as a design problem in search of a use case.


## The typical breakdown in portability and power {#the-typical-breakdown-in-portability-and-power}

Many people want something portable for reading, casual browsing, movies, etc., but also want a real computer to do real computer things on the go.

The iPad is essentially the portable component of the duo for many people, or some sort of roughly equivalent Android tablet. Most people will pair this with a laptop of middling power that gets good battery life: a Macbook Pro, a Dell XPS 13, an HP Spectre x360, etc.


## Explaining the typical breakdown {#explaining-the-typical-breakdown}

As best as I can tell, people use a configuration like the above because they have been tricked into thinking that there is some situation in which a tablet with a "mobile operating system" is better than a real computer. In truth, if you are using a tablet for _anything_ other than reading through something (when you won't ever have to look anything up, take notes by typing, etc. -- like a novel), watching something, or drawing something, you should have a keyboard hooked up. Period. And when you have a keyboard hooked up, why should you limit hardware specs since "it's just a tablet?"

To me, the entire idea of "mobile operating systems" is mostly rubbish. I'm not selective: I think iOS is overhyped marketing on tablets, and I think the same of tablet Andoid. These things simply don't make sense. Why should we arbitrarily impose a touch-focused paradigm when keyboards are just straight up superior for most everything? (Note that this isn't a criticism of these operating systems on phones -- you really won't have the luxury of a keyboard most of the time using a phone, so here the touch paradigm actually makes sense).

So why does this situation obtain? From the producer point of view, it lets them sell a bunch of overpriced unneccessary computers for a large profit. Tablets are cheap to produce: since the processors and components used are "not expected" to be performant, corners can be cut at will. I still haven't figured out why _consumers_ buy them, although I'm guessing a large part of it is because people in general are unaware of exactly how much more efficient proper keyboard use is than touchscreens and GUIs.

This is all ignoring the fact that Android and iOS don't have apps for some things you might want to do on a computer, so are not at this point a drop-in replacement for more conventional operating systems like Windows, MacOS, and Linux proper. But they (along with ChromeOS, for example) are close enough that they are almost there for "most people."


## A More rational breakdown {#a-more-rational-breakdown}

All those people above who buy a tablet for reading and a laptop for real computer things on battery power can safely combine the two into a tablet with an external keyboard that has non-crippled hardware and doesn't run an operating system that limits what you can do. Microsoft certainly started the trend and has a mature product line in the Surface tablets, but you can find other options as well. For people that never need tons of computational power, you can buy a single computer like this and be done with it.

Now, there are some types of laptops that you can't replace with a tablet. The System76 Oryx Pro laptop mentioned above, for example. Or any of its bigger, badder, brothers that have even more ridiculous specs and even worse battery life. Using jargon, these are called "desktop replacements."

"Aha. So maybe that's why iPads exist. To complement dekstop replacements." You see, the problem with this (while it makes infinitely more sense than the typical breakdown), is that you now have no middle ground of doing real computer things on reasonable specs with long battery life. While I hear the next generation of System76 computers get better battery life, we're still talking maybe 6 hours, and a whole lot less if you're actually doing anything intense. Not to mention that bigger batteries to get better battery life add a lot of weight... that is ultimately unecessary if you just keep the computer plugged in most of the time.

So what I do think is better? I think a real portable desktop makes the most sense (e.g., the [Hades Canyon NUC](https://www.simplynuc.com/8i7hvk-full/)). No need to bother with any batteries, special (i.e., expensive) GPUs designed for thinness, etc. I've kept pretty careful track of my usage patterns, and there are very few times when I _need_ to do anything computationally intense when I don't have outlets nearby. But when I do have outlets nearby, power consumption doesn't matter and I can safely value performance above all else.


## A more thorough explanation of this pairing {#a-more-thorough-explanation-of-this-pairing}

So, mid-range tablet and portable desktop. Why?

Here's what it offers:

-   Good reading ability due to the lightweight tablet.
-   Good mid-range computing ability on battery power with the non-wimpy tablet.
-   Lightest possible combination of a reading-ready computer and extreme performance computer (since the performance computer doesn't bother with batteries).
-   Most powerful portable extreme performance computer possible (without large restrictions imposed by slimness or power draw for CPU or GPU).
-   Cheapest portable extreme performance computer (since the design constraints regarding space and heat dissipation are less tight).

Here's what it lacks:

-   The ability to do very intense tasks without outlets around.
-   Small dimensions: while the Hades Canyon NUC, for example, is small, it's fatter than even beefy laptops. It won't be heavier than said laptops though, since it doesn't try force a battery in there too.
-   The lowest possible cost: if you could get away with a wimpier tablet and the portable desktop, that would cheaper.

For me and my use cases, the downsides either don't matter, or are unavoidable. As mentioned above, when I really want power, I'm not going to be worried about outlet access. I'm willing to have a portable desktop computer that is a couple inches thicker than alternatives in my backpack (personally, I don't understand the obsession with thinness... I think weight is generally a much bigger deal). I couldn't get away with a wimpier tablet because sometimes I might want to code for long periods of time away from outlets, for example, and there is no way to get my full workflow operating smoothly on a tablet with crippled hardware.


## But wouldn't a bigger screen help increase productivity? Would bigger laptops have an edge here? {#but-wouldn-t-a-bigger-screen-help-increase-productivity-would-bigger-laptops-have-an-edge-here}

Indeed, it would. I advocate for programming on 4k displays with much more real estate. The problem is, for the extra pixels to do much good, they have to be big enough that you can actually read 4 times as much, not just have text 4 times sharper. For this you need screens with at least a ~45" diagonal, which definitely aren't portable. (And I don't really think foldable/rollable OLEDs are ever going to get there due to fragility concerns. I'd love to be proved wrong though).

But what people that ask things like this are really saying is "My performance laptop has a 17" screen. Hurr hurr, I'm more productive than you." The problem is, these people are thinking inside the box. Why limit yourself to one screen directly attached to your computer?

So let's say you want to carry around a portable monitor to supplement your tablet or laptop screen. Due to how humans are shaped, if you are using a backpack to haul your stuff around (which you should be: briefcases and purses are far less efficient), you probably can't get away with a screen diagonal of much more than ~20-22" (depending on height). As it so happens, ASUS is developing [a portable 4K OLED display right along these dimensions](https://www.asus.com/us/Monitors/PQ22UC/). So a largish 3:2 tablet paired with a 21.6" portable monitor gives you an awful lot of screen real estate to work with... significantly more than any single laptop display could ever provide. And if you use an external keyboard that you put in your lap, you can use both screens around eye level.

I'm fairly convinced that the marginal cost of using more than one large portable monitor (money, extra effort in carrying your setup around) would never be exceeded by marginal benefit (increases in workflow productivity due to more screen real estate) for like 99% of people. Some very frequent business travelers that basically never have access to 4k displays to work on (either at work or at home) might be well served by purchasing more than one of these large portable displays, but most of us would never work on-the-go enough to make it worth it. Note also that you really do want at least one larger display, since some things don't work well split across multiple screens (if you were to set up a bunch of 3:2 tablets next to each other, e.g.), like pictures, spreadsheets, and so forth. So one 3:2 tablet (which you want for reading and general tablet stuff) plus a large display beats 3-4 3:2 tablets in terms of display properties.

I'll report back about all this once I buy the monitor mentioned above and test out my theories. But the main point I want to make is that carrying around a portable monitor to use with your tablet and portable desktop actually beats laptops in terms of display size. There is no way to get more screen real estate while retaining the ability to comfortably read (=having a mid-size tablet) than by using a portable monitor. And portable desktop + 21.6" diagonal portable monitor destroys workstation laptop + 15.6" screen on most things but the ability to use the computer away from power (and, incidentally, also allows for the efficient use of the screen for your powerful computer with your tablet... unlike a laptop with a baked-in screen).


## But, but... {#but-but-dot-dot-dot}

People will disagree. That's fine. This is the internet, after all. But I think if most people started learning how to compute in a keyboard-centric way (using, for example, Emacs' org mode instead Microsoft Word, org mode + beamer instead of Microsoft PowerPoint, vimium or some equivalent for browsing, ranger as a file manager, etc.), they would soon come to see the pointlessness of a touch-centric operating system for tablets (as opposed to phones), and be more likely therefore to adopt the "2-in-1" mindset that gets a bunch of flak for not being designed with a "touch-first" paradigm.

At this point, you may as well combine your reading device and your computer proper. If you need any more power than that which may be easily (and inexpensively) fit in a tablet form factor, you can then consider buying some form of portable desktop computer. If you absolutely must have the ability to operate your powerful computer without outlets, you are going to want one of the beefy laptops that balance power draw, component size, and battery capacity. (Just don't expect to get hours and hours out of this configuration if you are doing anything intense).

Of course, you might be a person where yet another configuration makes sense. If you don't think you'll ever work away from power, then you can just use a portable dektop for all real computing tasks and buy a wimpier tablet to use for reading. Etc.

One size most certainly does not fit all. But if your computer usage is similar to mine, I'm pretty sure that you can't beat 2-in-1 tablet + portable monitor (if you don't need lots of power), or 2-in-1 tablet + portable desktop + portable monitor (if you do need lots of power).
