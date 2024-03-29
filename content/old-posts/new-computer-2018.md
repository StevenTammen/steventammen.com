+++
title = "New Computer: 2018"
date = 2018-05-20T21:43:18-04:00
tags = []
categories = []
draft = false
+++

[//]: # (tags = ["workflow", "rethinking standards"], categories = ["Gear", "Computers/Software"])

## The impetus {#the-impetus}

So, the next few posts here are going to be a very rough approximation of my thought process as I picked out a new computer (I ended up going with [a Dual-core i5, 8GB RAM, 128GB SSD Microsoft Surface Pro](https://www.microsoft.com/en-us/store/d/surface-pro/8nkt9wttrbjk/C0HL)). My old Lenovo laptop broke at the hinge and the bezel started popping off the screen... making it impossible to close and thus transport anywhere.

I hope designers decide sometime in the future to use case components on low-mid range computers that cost at least a few dollars, so that no little plastic bits fail, relegating otherwise perfectly-functional computers to sitting-at-home duty. This isn't a problem if you shell out the money for more premium products, but there really is no reason for some little plastic hinge piece to be the thing that bricks laptops.

Anyhow, it wasn’t going to be worth fixing this. All the screen electronics attach right around the hinge mechanism, and it would probably be a few hundred dollars to replace the screen completely. Plus the hinge design would still be rubbish after the replacement, and probably fail again eventually anyway. And the 4-year-old electronics in this weren’t worth keeping around. And the battery life was like 3 hours with all the battery saving settings maxed out. So t’was time.


## Some things to think about {#some-things-to-think-about}

I very firmly believe that people should not buy "more computer" than they need. That is to say, if you casually browse and check your email, you don't need an overclocked processor and 32GB of RAM. Unfortunately, however, humans have a tendency towards the new and shiny, and advertisers/manufacturers towards the bottom line, and so very many people are ending up with much more computational power than they really need (and thus wasting money, and to a degree, the natural resources that go into higher specs).

To be perfectly honest, if flagship smartphones (e.g., iPhone 8, Google Pixel 2, Samsung Galaxy S9) were to allow charging and peripheral access simultaneously (such that a keyboard, mouse, and portable monitor could be used without having to be on battery power), and app support for iOS and Android expanded just a little bit more, this is all the computer that many people would need.


## But how do I know how much computer I need? {#but-how-do-i-know-how-much-computer-i-need}

Well, you should analyze the things you'll spend most of your time doing, and then run through all the different measurements of computer power/abilities. Here's my take on things:


### Processor {#processor}

Processing power is one of the three most important computer variables, in my opinion, as everything you do on a computer goes through the processor. Processors have two primary metrics: _clock speed_ (in GHz) and _number of cores_.

If we ignore cores for a second, a processor clocked at 4.0 GHz will complete things exactly twice as fast as a processor clocked at 2.0 GHz. So faster processors are better.

However, processors can't run a whole bunch of things in parallel. Each core can handle one thing at a time. So if you are running two different processes on a core, what is really happening is that the processor is very rapidly switching between the two tasks. This is significantly less efficient that running a single process on the core: switching between tasks and remembering task state are both things that have overhead. So it follows that the more cores you have, the more efficiently you can complete multiple tasks.

The challenge in this comes from balancing the two variables. Most modern software now supports threading (i.e., the ability to fork off processes to multiple cores), which was not always the case. It used to be (and still is for some programs with older codebases) that entire programs ran on a single core. So even if you had 4 cores, if you were only running one program, only one core would be used. This meant, generally speaking, it was better in the past to have faster processors with less cores.

Nowadays the waters are a bit more muddied. Parallelization and process forking are incredibly complex, and how efficiently they may be done in a particular situation is variable. As a rule of thumb, scientific computation, simulation, and video and image processesing parallelize well, while many other things do not.

Finally, without getting too deep into the nitty gritty, there are some other things to mention. In no particular order:

-   More powerful processors (more cores, faster clock speeds) consume more power and generate more watts of heat that must be gotten rid of somehow. This is a problem in mobile computing more than desktops with built-in liquid cooling.
-   Processors will upshift and downshift operating frequencies according to task load. Intel's "Turboboosting," for example, will scale up operating frequency in most circumstances, but (as long as [this article](https://www.pugetsystems.com/labs/articles/Impact-of-Temperature-on-Intel-CPU-Performance-606/) isn't too out of date) will be throttled by heat constraints. So if you have a very powerful processor clocked at 4.2 GHz when turboboosted, but have poor heat management, your processor will actually operate somewhat slower than this.
-   Logical cores through hyperthreading are not real cores. People seem to greatly misunderstand how they work, and I think it is unfortunate that there are not better explanations out there (from Intel themselves, e.g.). [This thread](http://www.tomshardware.com/answers/id-2366077/hyperthreading-differ-actual-physical-cores.html) is the best I've found. According to my understanding of the matter, hyperthreading lets two discretized process stacks share the same execution resources, meaning that when one thread pauses due to I/O, the other thread can utilize all the execution resources that are temporarily not being used. More than this, so long as the two threads do not need exactly the same execution resources, they can actually run simultaneously. But if they ever need the same resources, then one must wait for the other. So, best case scenario, they let you use the same core to complete dissimilar tasks (i.e., those that do not share many execution resources) somewhat efficiently, and worst case, they make sure the core is always being efficiently utilized by running alternate processes on the core when a process has to wait because of I/O and the like. So so-called "logical cores" are strictly worse than additional physical cores, but do allow for a more efficient use of physical cores that are already there. At least this is my present understanding.

So what would I recommend? For most people (who do not need lots of dedicated physical cores for intense parallelized computing), I would recommend something that balances the two variables. If you know you mostly focus on one task at a time, you can opt for more clock speed. If you know you multitask a lot (with a whole bunch of apps open at the same time), then you can opt for more cores.


### RAM {#ram}

Random Access Memory (RAM) is the second of the three biggies. If we imagine, for a moment, that a computer is like a water pipe, then data is like water, and RAM is like the diameter of the pipe. The more RAM you have, the bigger the pipe is, and the more data (water) you can handle.

RAM is orders of magnitude faster than storage, which we'll get to in a second. Even faster NVMe PCIe storage devices are sluggish compare to RAM.

What RAM does, essentially, is store information related to processes currently running. So when you are displaying an image, the bytes representing colors are in RAM. When you have a text document, the character encodings are in RAM. And so forth.

But RAM is also used for all the tasks that you, as the end user, do not see. Operating systems require a certain base amount of RAM, with some of them being more efficient than others. So too with programs like drivers, print services, network ports, and so on: essentially, everything "running" on your computer needs a slice of the RAM pie.

Now, very bad things start to happen when you get close to or do exceed the amount of RAM you have. Your computer will freeze and lock up, and everything will feel sluggish. The exact reasons for why these things happen are a bit involved (requiring an explanation of memory locations and addresses, e.g.), but suffice it to say, you don't want to be trailing too close to the upper end of your RAM on a regular basis.

Most people should be able to happily live on 8GB of RAM, and 4GB can work under some circumstances (you run a lean Linux distro with scaled-back desktop environment and keep the number of active programs to a minimum, for example). If you run a bunch of virtual machines, do photo and video editing, work with CAD, or deal with large datasets on a regular basis, you'll want more.

My recommendation is for most people to get 8GB. You may be happy to have it sometimes even if you won't use it most of the time. If you are on a tight budget and are willing to run a light Linux distro (or Android/iOS, which are more performance tailored than most desktop OS's to run on more minimal hardware), 4GB will work. Since RAM is so cheap nowadays, though, if you are building a non-phone computer, I would really suggest you go with 8GB.


### Storage {#storage}

Storage is the third of the three most important factors. There are three main types of storage in use today: Hard Disk Drives (HDDs), SATA Solid State Drives (SSDs), and NVMe SSDs.

Storage options are mostly driven by considerations of how fast you can read and write from them. In this regard, NVMe SSDs > SATA SSDs >> HDDs. There is further complexity when you consider different "types" of reading and writing (random vs. sequential, e.g.), but in general, if you are going with an NVMe SSD or SATA SSD, things will be fast enough that most people won't get much out of worrying about these things. If you _need_ the faster reads and writes of NVMe SSDS, you probably know who you are.

HDDs are also more fragile mechanically than the SSDs (more susceptible to damage from dropping your computer, e.g.), and consume more power to move the magnetic disks (so are bad in mobile computers). Basically the only thing HDDs have going for them is that they are cheap.

How much storage you need will be dependent on use case. 128GB is where most SSDs start, and is what I would consider on the low end for most people. I opted to go with 128GB, but I knew beforehand exactly what I would be running on the computer and crunched the numbers. I'm also comfortable fiddling with package managers and such to minimize bloat on my computer (e.g., I run a custom LaTeX install rather than a full TeXLive install), and store most static things (like photos) in the cloud.

My recommendation would be to get a 256GB NVMe SSD if you can afford it and don't want to think a lot about being selective about what you install, a 128GB NVMe SSD if you are willing to fiddle a little bit to run lean, and a 256GB SATA SSD if money is an issue or you just don't care about performance as much.

You can buy more storage if you work with photos, videos, and lossless audio a lot.

At this point in time, if you are a "normal user" (to the extent that such a thing exists), I would only really recommend you use HDDs as backup drives, and even then, only if you are paranoid about cloud companies like Dropbox and do not wish to use them.


### Graphics {#graphics}

We are now out of the realm of universally important variables, in my opinion. Most computers with reasonably powerful CPUs nowadays have integrated graphics good enough to handle most things that aren't demanding video games, VR, and a few other things. In doing so, they will be more power efficient, but share system resources with the CPU like RAM (rather than having dedicated graphics RAM).

In general, I think discrete GPUs aren't worth it for most people. Integrated graphics can now drive 4k displays just fine, and handle video playback comfortably at such resolutions. Word processing, email, general browsing, etc. -- none of these things benefit from a discrete GPU.

Things that will benefit, in no particular order, are

-   Graphics intensive 3D video games, especially at higher resolutions
-   Virtual reality
-   _Real_ photo editing (by which I mean serious use outside of basic cropping and color balance)
-   Video editing, especially 4k video editing
-   Rendering for other programs (3D drawing, design, etc.)

Even for people who do these activities, you probably don't _need_ a top-of-the-line graphics card. In my opinion, unless you are a very heavy user, you should opt for the higher end of the mid-range graphics cards, which offer good performance for a fraction of the cost.

I should also point out that due to the power draw, discrete graphics should mostly be limited to desktops or devices that you are comfortable usually having plugged in.


### Display {#display}

While this is more properly a separate category of device, since most computers that aren't desktops have some sort of display baked in, it's worth addressing briefly here.

Resolution is a big factor in built-in displays. Higher resolutions will mean sharper text and images, and past a certain point, screens can actually be sharper than normal paper printing. It's arguable exactly how beneficial sharper screens are (e.g., do people read faster with less eye strain?), but most everyone agrees that higher is better to some degree. The downside is that higher resolution screens take more power themselves (and cause a higher CPU/GPU load), so there is probably a trade off here once you reach a certain point.

Panel type also matters, and will govern such things as refresh rate, color accuracy, contrast (and how close to "true black" the monitor can get), viewing angles, and so on. Generally speaking, unless you are a gamer, you  probably don't want a TN panel. Aside from that, there are pros and cons and it's hard to generalize. Although if manufacturers can fix burn in problems, uneven wear patterns (blue pixels wearing out noticeably faster, e.g.), and high costs for OLED displays, they are basically superior in all the other areas, and will likely take over the market eventually.

Latency ("input lag") is also important, and I'll get to that in a separate post.


## Whoa, that's a lot of information! {#whoa-that-s-a-lot-of-information}

Believe me, that's not even the beginning. Comparing computers in a very objective, scientific sort of way requires understanding architecture on a low level, and, what's more, exactly how different manufacturers are integrating software and hardware (since you can do optimizations on the low level to make software run better on specific hardware). It's really beyond the capabilities of most people (including myself) to do comparisons accurately.

Buying a new computer can be stressful not only because of this frustrating lack of full knowledge, but also since there are so many different choices and different companies saying their products are best.

If you want my opinion, unless you know you need more computer for some specific purpose, you should set a budget, pick an operating system, and then see which computer from a reputable brand (e.g., Apple, Microsoft, Dell, HP, Samsung, Lenovo) can get you to the level of computing you want:


### Light computing: office tasks, email, light browsing, watching videos, etc. {#light-computing-office-tasks-email-light-browsing-watching-videos-etc-dot}

In my opinion, you should look for a  ~2.0 to ~3.0 (when boosted) GHz processor @ 2 physical cores/2 virtual cores, 8GB RAM (or 4GB if you are willing to do some workflow optimizations), and 128GB of SATA SSD storage.


### Moderate computing: light computing tasks plus more multitasking/intense programs {#moderate-computing-light-computing-tasks-plus-more-multitasking-intense-programs}

In my opinion, you should look for a  ~2.5 to ~3.5 GHz processor @ 2 physical cores/2 virtual cores, 8GB RAM, and 128GB of NVMe SSD storage.


### Heavier computing: like moderate computing but more intense in all aspects {#heavier-computing-like-moderate-computing-but-more-intense-in-all-aspects}

In my opinion, you should look for a computer with at least a ~2.8 to ~3.8 GHz processor @ 4 physical cores/4 virtual cores, 16GB RAM, and 256GB of NVMe SSD storage, adjusting these up as use case and budget allow (when you get into really intense tasks, more is usually better). Add a discrete graphics card if you are playing video games, doing photo/video editing (especially at high resolutions), or rendering stuff in, e.g., 3D art.
