+++
title = "Latency as a Design Variable"
date = 2018-05-24T18:46:06-04:00
tags = ["optimization variables", "rethinking standards"]
categories = ["Computers/Software", "Productivity/Efficiency"]
draft = false
+++

## How I bumped into the concept of latency {#how-i-bumped-into-the-concept-of-latency}

When considering what sort of text editor I should use when coding, I was pondering the question of "slowness." I had heard over time that IDEs were "slow" and text editors (particularly Vim) were "fast." But what did this mean? How do you measure such things?

It seems obvious that you want a "fast" editor. But as I set out to find such an editor, it quickly became clear that many people were just speaking without data, rationalizing their own editor choices. [Choice-supportive bias](https://en.wikipedia.org/wiki/Choice-supportive%5Fbias) is the official term.

Editor choice is one of the so-called "holy wars" among programmers. People have been arguing about this sort of thing for decades. My experience in such things has been that there is usually a right answer if you cut through all the noise and resolve to only accept data meticulously collected and analyzed, and nothing less.

I was not disappointed. But I also found out that latency is a variable for a whole lot more than text-editor choice.


## Where everyone should start {#where-everyone-should-start}

I bumped into an article by a fellow named Pavel Fatin called [Typing With Pleasure](https://pavelfatin.com/typing-with-pleasure/). I read the whole thing through, and then read it again. Now this is what blog posts should be like! I'd recommend you digest this article before continuing in this post.

The gist of it is that latency can affect our general computer experience (and typing in particular), even if it is at levels far below that of human reaction time. Typing is fascinating from the perspective of cognitive psychology in that it is a semi-autonomous process; experienced typists type subconsciously (like driving). This means that reaction time is actually a complete red herring in this conversation. Since the process is happening via brain structures that communicate with each other without going through the frontal lobe, delays of milliseconds actually _do_ affect our experience. Every millisecond counts.

At the bottom of his post, Pavel links to a bunch of places where others discuss his article (Reddit, etc.). I'd read through some of those too. It's a great place to start getting a handle on these things.


## The next place you should go {#the-next-place-you-should-go}

There's another guy named Dan Luu that also wrote an [article on input latency](https://danluu.com/input-lag/). The reason why I recommend reading this next is that it gets into some more of the details of how non-software things influence input latency as well. Keyboards and monitors in particular have a role to play in how much latency actually occurs. There are some links to other resources at the bottom of this one too.

There's also some [discussion on Reddit](https://www.reddit.com/r/programming/comments/7lxmat/computer%5Flatency%5F19772017/) related to this post. This is the case for most of the posts mentioned here, and you can assume there is probably more discussion out there than what I link. So search more if you're still interested.


## On keyboards {#on-keyboards}

Ok. So this stuff is complicated and has lots of variables. Let's look at things one at a time.

Dan Luu wrote a post about [keyboard latency in particular](https://danluu.com/keyboard-latency/), which is a good place to start. Now, while I agree with many of the article's conclusions (especially concerning marketing people trumpeting loads of nonsense that they know nothing about; gaming keyboards), I don't necessarily agree that "keyboard latency" should include full key travel time. While the disadvantages of latency would imply that less key travel and higher actuation points are superior, my personal experience has led me to believe that there is a middle ground here.


### Travel distance and controversial matters {#travel-distance-and-controversial-matters}

I'll get around to writing up my failed keyboard/stenotype hybrid later, but here's the gist: I created a keyboard with customized Kailh Silver speed switches containing trimmed Gateron White springs. This gave the keys less than a millimeter of travel to actuation (probably around 0.5mm), and an incredibly low actuation force. This sounds all good in theory (and it is in fact good for stenography, which revolves around key releases not actuation), but it was _terrible_ for typing. Now, I'm by no means a pro typist (still pretty slow on my custom layout), but the error rate was significantly increased because it was too easy to actuate the keys accidentally. And this appears to be a function of the low actuation distance more than the low actuation force, although both contributed.

On the other hand, typing on Cherry Red switches, which have approximately 2mm of pre-actuation travel and about double the required actuation force, led to significantly less errors right off the bat.

Someone might argue that this is just a training issue. Spend some more time "learning" how to type with the custom switches, and the errors would go away. The thing is, while this is true to an extent, these sorts of switches just don't work for typing at speed. If you try to go full-blast typing, you'll notice you bottom out more and have less precise movements in general... and to type with "trigger switches," you can't afford to even brush a key accidentally.

So my experience has been that you need some key travel and at least a little actuation force so that you make less mistakes and can handle the less precise hand movements once you start approaching your max speed. I'm not convinced Cherry Reds are _the_ answer, but for me, they have struck a good balance of the variables at play.

So, to get back to latency, it is wrong, in my opinion, to judge the Apple keyboard with low key travel as "best" because it technically takes less time from when your finger touches a key to send a packet (I mean, duh, you have to move less). It may win the latency game (as so defined in this piece), but if it causes more typing errors, then it is not itself a net gain.

Other people also thought including key travel was perhaps not the best way to go about this: see [Reddit](https://www.reddit.com/r/programming/comments/76szvk/keyboard%5Flatency/) and [Hacker News](https://news.ycombinator.com/item?id=15485672). It's definitely something that needs more research.


### Less controversial matters {#less-controversial-matters}

With all this being said, there is a software component to keyboards polling and registering keystrokes that can be done better or worse, and thus add different degrees of latency.

The best treatment on measuring this sort of thing that I have come across is [this article](https://blog.seethis.link/2017/04/16/measuring-wired-split-keyboard-input-latency.html). This guy's firmware can be seen [here](https://github.com/ahtn/keyplus). Looks like a good project, especially considering it has a GUI and you don't have to flash the firmware through some arcane process.


## On monitors {#on-monitors}

There's some complicated stuff going on with refresh rates, screen redraw times, and display-specific rendering lag. The first two articles above deal with many of the specifics involved with monitor latency, and you should go back and read them again if anything still seems fuzzy.

Since LCD screens -- even those with higher refresh rates -- introduce a measure of latency (display lag), I am curious how some of the new high-quality OLED screens stack up in this regard. My understanding is that their times for pixel-level redraw (pixel response time) are significantly faster than LCDs, more similar to CRT performance. But I've struggled to find any good data-driven articles on this.

Since I think OLED is the future (once they get burn-in and blue-pixel wear to reasonable levels), it would be cool if OLED allowed for better latency performance.


## Terminal emulators {#terminal-emulators}

At this point I felt like I knew more or less how latency works, the variables at play, and so forth. So I decided to see if there was anything out there on terminal emulators.

Now, a big reason why terminals can feel laggy is due to remote connections. An SSH session will always introduce latency. But due to how terminal emulators work, there are also different levels of latency inherent to the terminal emulators themselves.

Most traditional measures of terminal performance tend to center around how fast the terminal can dump to stdout (e.g., [this article](https://martin.ankerl.com/2007/09/01/comprehensive-linux-terminal-performance-comparison/)). This didn't strike me as a particularly good measure: I always `Ctrl-C` something if I end up dumping too much. So a better metric, in my opinion, is capacity to `Ctrl-C` when you messed up.

Incidentally, Dan Luu came to exactly the same conclusion in [his article about terminal latency](https://danluu.com/term-latency/). The ability to reliably `Ctrl-C` out of a process is really more important than how fast you can `cat` a huge text file.

Since I don't use a OS X (with teminal.app), I wanted more comparisons and more data. In the [Reddit thread about Dan Luu's article](https://www.reddit.com/r/linux/comments/776e2l/terminal%5Fand%5Fshell%5Fperformance/), the writer of the top comment found that xterm had very low latency.

I googled around about xterm latency and came across these two articles: [Part 1](https://lwn.net/Articles/749992/), [Part 2](https://lwn.net/Articles/751763/). It looks like Xterm and Mlterm absolutely destroy all the other terminal emulators with respect to latency. Mlterm also appears to be more stable in performance with heaver DEs like GNOME, and also has better scrolling speed. This would seem to me to make it a good choice overall.


## Conclusions {#conclusions}

So what did I learn from all this?

Essentially, latency is the measure of how "laggy" something is. To make programs as responsive as possible, you want to minimize latency.

Based on the all the articles and research above, here are the best options for various use cases:

1.  Operating system: something that allows for very minimal desktop environments. This means Linux/\*BSD (since you can't change Windows and OS X in this regard). Note that you want to be running your OS natively (i.e., not through virtualization), since [virtualization adds latency](https://pavelfatin.com/typing-with-pleasure/#virtualbox).
2.  Desktop environment: something minimal like i3.
3.  Editor: the zero-latency IntelliJ Idea (other Jetbrains products have zero-latency mode now as well) and Vim are the clear winners in latency. Other editors are not even close.
4.  Terminal emulator: Xterm and Mlterm are by far the best. Mlterm has faster scrolling than Xterm and is more balanced overall, making it a better general choice.
5.  Keyboard: something that uses firmware with efficient polling and debouncing algorithms. See the link above for an example of such firmware.
6.  Monitor: something with fast pixel response time, fast refresh rate, and little-no visual processing/frame buffering. OLED screens might (?) be better than LCDs in these areas.

So there you have it. My first stab at understanding this complicated issue.

Based on all this I've adapted NeoVim as my main terminal-based editor (for quick stuff), and the Jetbrains products as my main coding environments. And since I'm locked on Windows at the moment due to keyboard remapping done via AutoHotkey, I'm running everything natively to avoid virtualization delays. Eventually the remapping will be done via firmware (and probably be done faster too, since doing it in firmware will remove the bother of keyboard hooks and another input layer filtering stuff), and I can move to Linux directly to run a more minimal desktop environment.

You can and should test all this for yourself with the [program Pavel Fatin wrote to test software-introduced latency](https://pavelfatin.com/typometer/).
