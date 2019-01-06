+++
title = "Windows Software"
date = 2018-05-24T17:43:25-04:00
tags = ["workflow", "windows"]
categories = ["Computers/Software"]
draft = false
inprogress = true
+++

## Purpose and Scope {#purpose-and-scope}

Fair warning: this page is unapologetically opinionated. As all pages about workflow shoud be.

This page is meant to serve as a perpetual reference for people interested in what programs I use on Windows and why. As time goes on and I move to Linux, my focus will likely shift there. I will make a separate page for Linux programs as this happens.

Over time, I will also likely shift discussion of some software options into their own pages. Browsers for example, and text editors, etc. For now I have my general thoughts here, and as you'll see, this means some sections end up containing some tangents.

Finally, there will be a section at the end that talks about concluding remarks and settings, etc.


## Section 1: Core Programs {#section-1-core-programs}


### Browser: [Chrome](https://www.google.com/chrome/) {#browser-chrome}

In the [Chrome](https://www.google.com/chrome/) vs. [Firefox](https://www.mozilla.org/en-US/firefox/new/) debate, I don't have super strong opinions, and find them pretty similar at this point in time. I have used Chrome for about 5 years, and am used to it.

I am not opposed to looking at things like [Opera](https://www.opera.com/) and [Vivaldi](https://vivaldi.com/), but given that the browser is the primary vehicle through which one might be exposed to malicious code, I think it is best here to use something with lots of eyes looking at it, open source or not. I've seen arguments with regards to smaller codebases having smaller attack surfaces, but according to my (admittedly limited) knowledge of cybersecurity, it is not so much quantity of code that is problematic (although larger codebases certainly have more possible areas for bugs and vulnerabilities), but a lack of people thinking about minimizing attack surfaces. In other words, small poorly-coded applications are more dangerous than even huge browser projects, so long as these huge browser projects have people thinking about these things (which they undoubtedly do).

Maybe there are other pros with respect to smaller browser projects. For example, less people using a browser also makes it proportionally less likely that people will write exploits for it, particularly if corporations and wealthy entities don't use it. So it's hard to say definitively.

I am fascinated by the idea of [Qute Browser](https://qutebrowser.org/) and what sorts of unique things might be possible with it. I haven't used it much yet, but plan to in the future.


#### Extensions {#extensions}

I currently use [uBlock Origin](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm), [LastPass](https://chrome.google.com/webstore/detail/lastpass-free-password-ma/hdokiejnpimakedhajhdlcegeplioahd), and [Vimium](https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb). I consider adblocking the single most important thing that _must be installed on every browser I use_. The internet without adblocking is a much less pleasant place.

I like the resource utilization and philosophy of uBlock (over, say, Adblock Plus). In terms of the other two, I haven't done enough research to say as to whether I'll stick with LastPass long term instead of something else, and whether I'll end up with some other Vim browser extension (of which there are many). But these are what I use right now.


#### Search engines {#search-engines}

I use [Google](https://www.google.com/) most of the time, but use  [DuckDuckGo](https://duckduckgo.com/) when I don't want to be tracked and/or want to see results without any algorithmic filters.


#### Data collection and sales {#data-collection-and-sales}

While I am by no means fond of companies collecting personal information and selling it to advertisers, I don't understand the present hullaboo about it all. The problem here is deeper than Google or Facebook or any other tech company regularly accused of overstepping privacy bounds: the problem is related to the corporate mindset of viewing human beings as numbers that can provide profits (or political advantage, etc.). The problem, in other words, is advertising and marketing and so-called "public relations" -- institutional greed leading to manipulation of people's wants and "needs."

To the extent that user data is bought by advertisers, to that extent it is a supply and demand problem. There is a demand for it, and people are willing to pay big money for it. So of course it will get collected. I don't think that makes the collectors of it evil. I think it makes them good businessmen in our capitalist economy.

Most people are aware that they sign away their data in the terms of service of all the "free" apps that they use. Technically, what's going on isn't even illegal, even if it is a bit underhanded and less understandable than it should be. To be clear: I think it is a good thing that people growl at questionable data management and abuse of data collection (as in Facebook and the Cambridge Analytica scandal). The entire process should be above the table and transparent, as much as market forces will allow for such a thing (nobody is going to come right out and say they are buying demographic information to manipulate people and skew elections).


#### How paranoid are you? {#how-paranoid-are-you}

What the situation boils down to, in my opinion, is how much you care about the potential for advertisers and other big corporations (and the goverment, potentially) to get information about your patterns. I personally don't care that much, and don't see the point in worrying that big brother is going to track what I eat for lunch and where I work out. This is not careless indifference, but a rational appraisal that these things are simply not worth worrying about in America under current circumstances -- and therefore, should not presently play a large role in what software _I_ decide to use.

However, if our country were to turn totalitarian and start jailing people for dissenting political or religious views (for example), then this sort of thing becomes a bigger deal. A valid line of criticism of closed-source software is that if our government turns Orwellian and society falls apart, not supporting FOSS today will lead to a lack of choices in the future (since, in such a hypothetical situation, companies will be in cahoots with the rogue state). What's more, such a situation actually does obtain in some parts of the world today. Now, you have to be pretty cynical to believe that a big multi-national corporation like Google/Facebook/Twitter is working with the North Korean government (e.g.), and informing on people's usage patterns so that political dissidents may be identified and dealt with, but this is the potentiality that exists when corporations control software in a non-open way.

I won't attempt to judge the likelihood of a world in which this becomes important. The question is not whether or not open source software is better in situations of unjust governments and runaway corporate practices (it unquestionably is), but whether or not these things are a threat likely to materialize outside the minds of conspiracy theorists. I will leave such a determination up to the reader.

(Nota Bene: this section presupposes an intelligent audience. There are people that won't use ad blockers and that will reguarly fall for targeted advertising of both commercial and political varieties. They should use whatever software prevents them from destroying themselves and others. This is the problem with democracy).


#### Open source software and decentralization {#open-source-software-and-decentralization}

It is also worth pointing out that decentralization is a good thing, regardless of potential doomsday political situations. Corporate control, especially if it borders on monopolistic, forces people to use something that may not be optimal. Once companies have a hold on the market, they can effectively drive for-profit competitiors out of business. And then the only guarantee you have that the company won't raise prices and slash quality is their promise. How about no.

Open source software is the software side of the decentralization movement. One might compare it to, say, local grocery co-ops and farmer's markets (agricultural decentralization), [Etsy](https://www.etsy.com/) (artisinal decentralization), and [Kickstarter](https://www.kickstarter.com/)/[Indiegogo](https://www.indiegogo.com/) (manufacturing decentralization). Except unlike these things, OSS is more collaborative and also tends to be free, so can have a wider impact.

This always comes down to cases. There are many examples of proprietary software that I will simply refuse to use since they are bloated, monopolistic pieces of garbage ([Adobe Acrobat Reader](https://acrobat.adobe.com/us/en/acrobat/pdf-reader.html), for example). But when corporations are contributing to progress and advancement -- and, importantly, not actively and unethically stamping out all competitors -- then I have no problem using objectively superior options even if they are proprietary. Chrome and Google's search engine are good examples of this, in my opinion. Amazon is another example, although some people will want to lynch me for saying it. Amazon has changed the way people look at shopping, and forced a lot of brick-and-mortar stores with higher operating costs out of business. But it's not as if Amazon has some copyright on online retailing, and in fact many other big brands have comfortably shifted into the online world. It's just people that are nostalgic for those good old "personal shopping" days or whatever that are hot and bothered. I'll take lower prices and the convenience of shopping in my pajamas, thanks much.

Whether or not Amazon (as an example) abuses the system and its employees is a complicated ethical issue, and I won't get into it here. It's always something to consider when you support a company, and you should do your own research. But one also has to be a pragmatist. I will never let the vague philosophical mutterings of a disgruntled minority get in the way of superior functionality, as long as the company in a situation is not wholly exploitative and evil.

This is one area in which I find the open source movement repulsive. Certain people will mumble incoherent nonsense about greedy companies trying to control the world without any (unbiased) data to back up their claims, and then guilt-trip anyone who dares disagree with their holy and unquestionable interpretation of the situation. Yeah, sometimes corporations are unethical, and use software monopolies to do sketchy stuff. But this doesn't mean open source software is _always_ the right choice, or even usually the right choice.


#### Do we get anything out of data collection? {#do-we-get-anything-out-of-data-collection}

Since I have gotten a Google Pixel 2 smartphone, I have been reasonably happy with the Google app that gives me news stories it thinks I'll be interested in. Since I read a fair bit about tech (software and hardware), this is most of what shows up. There have been a few question marks (...Google how is this related to things I've been looking at?), but for the most part, it has given me pretty good suggestions.

I get why people are leery about such power when it relates to political writings (if Google ranks one particular point of view or political ideology above others, for example). But in my opinion, this isn't precisely a moral failing on Google's part, because people should be intelligent enough to do their own research and _not rely on a cultivated list_ for controversial news topics like politics -- and intentionally read both sides of every story. Again, people failing to do this is user error, not Google's fault _per se_. Now, of course, stories do show up in my feed with a political bent, and I'm sure Google does slant things in a particular way. You would be naive to think anything else.

But for stuff like "[Google, Microsoft find another Spectre, Meltdown flaw](https://www.cnet.com/news/intel-microsoft-reveal-new-variant-on-spectre-meltdown-chip-security-flaws/)" or "[Sony wants you to pay $600 for a never-ending piece of paper](https://qz.com/1283932/sony-introduces-the-dpt-cp1-digital-paper-tablet-does-it-do-enough-to-justify-the-600-price-tag/)" (two examples in my feed earlier today), I am not getting the echo chamber effect that is so damning on the political end of things -- this is just typical techy stuff.

Searching algorithms are the other thing. Google collects data about what you search for and tailors search results to better correspond with your history. In my experience, this is helpful most of the time (why I use Google over DuckDuckGo for general searches). Of course some of the time I don't want to be stuck inside my bubble. So then I use DuckDuckGo.

Getting news suggestions and improved search results are just examples of what data-driven machine learning gives. And you can't have effective machine learnining without data. Period.


### Email: [Gmail](https://www.google.com/gmail/about/) {#email-gmail}

I started out using Gmail in the browser, and have never found a need to change to something else. I have email forwarding set up and try to keep as much of my email going through Gmail as possible.

I am interested in learning more about email from the command line like [Mutt](http://www.mutt.org/), but need to do more research.


### Music player: [Spotify Web Player](https://open.spotify.com/) {#music-player-spotify-web-player}

Using a desktop browser with uBlock, almost all ads are avoided. Spotify is easy and convenient, and lacks very few songs and albums that I personally am interested in.

Sometimes I want to lisen to random songs (use a radio), but sometimes I also want to listen to specific things. Hence Spotify and not Pandora.

When I am on my phone (which doesn't have as simple a way to get rid of ads), I sometimes listen to music I own, or free music that I have downloaded. I mostly listen to podcasts I have downloaded when I am out and about, however.


### Quick-and-dirty text wrangling: [NeoVim](https://neovim.io/) {#quick-and-dirty-text-wrangling-neovim}

When holy and pious [Vim](https://www.vim.org/) came down from the sky in light, the pagan editors cowered in fear and tried to run away. But Vim was too fast for them.

Vim had a child with the open source community called NeoVim, who sports asynchronicity, and fortunately did not inherit Vimscript. With a fast core and a pretty Lua runtime to clothe himself, NeoVim stands among editors as a prince. He's even had a good influence on his father.

---

On a more serious note, I only use NeoVim for quick and simple tasks. NeoVim opens and runs ridiculously fast, has almost no latency, and is all you could ask for when you just want to quickly edit something.

I am firm believer of using the right tool for the task, and I don't think there is a better tool than NeoVim for this particular task. If I am ever just working with some small bit of text, or a random text-file, I am in NeoVim.

Note that I run this in Ubuntu on the WSL, in the terminal.


### Cloud storage and file syncing: [Dropbox](https://www.dropbox.com/) {#cloud-storage-and-file-syncing-dropbox}

Backing up files when [rsync](https://rsync.samba.org/)/[unison](http://www.cis.upenn.edu/~bcpierce/unison/) or [Git](https://git-scm.com/)/[GitHub](https://github.com/) is a bit much. I'm not paying for 1TB yet, and I'm not wedded to Dropbox over [Google Drive](https://www.google.com/drive/). I need to do more research, but I'm comfortable with Dropbox so use it.

As with Chrome vs. Firefox, I don't really think you can go wrong with either Dropbox or Google drive. Both of them now integrate nicely with things like [IFTTT](https://ifttt.com/) and [Zapier](https://zapier.com/).

I am also interested in the idea of pure syncing utilites like [Resilio](https://www.resilio.com/), and what benefits they might offer. But as with many other things, I still need to do more research.


### Learning and flashcards: [Anki](https://apps.ankiweb.net/) {#learning-and-flashcards-anki}

Spaced repetition will change the way you learn. Anki is absolutely mandatory.


### Reading (Kindle books): [Kindle App](https://www.amazon.com/kindle-dbs/fd/kcp) {#reading--kindle-books--kindle-app}

Since Amazon is very convenient and I already have a lot books on the platform, I use the Kindle App (on my Windows tablet) a fair bit.

I'm not the biggest fan of DRM, and wish the platform was less locked down. But it is what it is.


### Reading (non-Amazon ePubs): [Calibre](https://calibre-ebook.com/) {#reading--non-amazon-epubs--calibre}

I use and like Calibre. Since I do most of my puchases and reading through Kindle I don't really use it that much, but it's a good program.

Personally, I don't get why everyone is so afraid of Amazon taking away books and whatnot ([a brief introduction to the concept](https://novelconclusions.com/2013/02/17/drm-do-i-own-my-e-books/)). Yeah, sure, I don't like that we don't really "own" the books we buy on Kindle. But at the same time I don't think Amazon is ever going to randomly start revoking access. It's just a bit too tinfoil-hat for me to take it seriously. See the discussion of data and privacy above.

I can appreciate having the ability to index one's library, add custom tags, and things of that sort though. You can do this on the Kindle platform too, although not to as high a degree/with as much customizability. The Kindle's groupings are enough organization for me, but it's good that something like this exists for people that want more.

The biggest draw seems to be for people to have all their eBooks in one place (Kindle, ePub, or otherwise). I really don't have many non-Kindle eBooks so this doesn't apply to me. It also seems like a lot of hassle (importing/de-DRMing all your books), and not worth the bother unless you have a ton of books across platforms that are hard to keep track of.


### Blue light reduction: [F.lux](https://justgetflux.com/) {#blue-light-reduction-f-dot-lux}

F.lux is a program for reducing blue-light emmissions around night time to prevent melatonin disruption. This is one of the most important programs I use, since it makes screen-reading doable, and I read _a lot_ on screens.


### International calls and video calling: [Skype](https://www.skype.com/en/) {#international-calls-and-video-calling-skype}

I've used Skype for years with my family, and have never had problems with it. It just works.

Unlike [Facetime](https://support.apple.com/en-us/HT204380) you are not forced to use a specific platform (Mac or iOS). Unlike Google's options, Skype has been stable and unchanging.


### Recording calls: [Amolto Call Recorder](https://amolto.com/) {#recording-calls-amolto-call-recorder}

The (free) Amolto Call Recorder is a dead-simple program for recording audio Skype calls. It's easy to use and hassle-free. Not much more to say about it, except that recording calls is somewhat of a legal grey area, so you should probably tell people you are doing it.

Recording calls is useful if you ever want to revisit conversations.


### Typing practice: [Amphetype](https://code.google.com/archive/p/amphetype/) {#typing-practice-amphetype}

The best typing training program I've come across. Good statistics and lesson generation. Not actively maintained but seems to work fine. I like this a lot.


## Section 2: Workflow {#section-2-workflow}


### Scripting and customization: [AutoHotkey](https://www.autohotkey.com/) {#scripting-and-customization-autohotkey}

AutoHotkey is almost good enough alone to make me ditch Linux and embrace Windows despite all its flaws. AutoHotkey is incredible and I cannot recommend it enough if you have to use Windows machines.


### Custom keyboard shortcuts, text expansion, etc.: [AutoHotkey](https://www.autohotkey.com/) {#custom-keyboard-shortcuts-text-expansion-etc-dot-autohotkey}

You can use dedicated programs to accomplish similar things, but the benefit of using AutoHotkey is that it is incredibly flexible. You can define a key sequence that looks something up on Google, for example, or opens a particular window, puts the computer to sleep, etc.

The dowside is that you have to learn the scripting language. Which I suppose is a bit daunting for non-programmers. But it's really not bad at all, and the documentation is pretty good.


### Virtual desktops: [VirtuaWin](http://virtuawin.sourceforge.net/) {#virtual-desktops-virtuawin}

Virtual desktops let you organize windows by use case. I personally use one virtual desktop for programming, one virtual desktop for writing, and one virtual desktop for research. YMMV.

I like VirtuaWin more than the default implementation built into Windows 10. It is more flexible and customizable.

Learning how to use virtual desktops can greatly increase productivity by helping you organize your computer use. It's not very hard to learn either.


### Window switcher: [Iswitchw](https://github.com/tvjg/iswitchw) {#window-switcher-iswitchw}

For changing window focus across many windows. I have customized the original program to only display windows on the current virtual desktop.

I use this mostly when I have multiple documentation/code windows open when programming. I tile windows using hotkeys, so try not to have layered windows, but when I have multiple files open for reference, it is faster to switch between them by matching on window title and description than by trying to find them manually (with Alt+Tab, for example).


### File manager: [Ranger](https://github.com/ranger/ranger) {#file-manager-ranger}

Keyboard-driven multi-column file managers make lots of sense. I have Ranger set up on the WSL with open commands configured for Windows programs. See my [dotfiles repository](https://github.com/StevenTammen/dotfiles).


### File and application launcher: [Launchy](http://www.launchy.net/) {#file-and-application-launcher-launchy}

I'm planning on using [Rofi](https://github.com/DaveDavenport/rofi) once I switch over to Linux. But in the meantime, Launchy is open source and works well enough. The support for high-DPI screens is somewhat lacking, and requires a bit of hacking to implement.

This is another type of application that pays huge dividends once you learn how to use it.


## Section 3: Writing {#section-3-writing}


### Stenography: [Plover](http://www.openstenoproject.org/plover/) {#stenography-plover}

I'm still terribly noobish in stenography, but someday I'll get there. Plover is the only free open source steno program, and is excellent.

Stenography lets you write prose incredibly fast -- faster than typical human speech. I prefer to code on my keyboard since it works better for Vim, and since variable and method names don't lend themselves as well to syllabic writing.


### Writing content of all kinds: [Org mode](http://orgmode.org/) + [Spacemacs](http://spacemacs.org/) {#writing-content-of-all-kinds-org-mode-spacemacs}

Remember what I said about using the best tool for the task? Yeah, well NeoVim may rule the quick jobs and basic editing, but Org mode (combined with vim emulation and command sequences from Spacemacs) rules the world of writing and organization.

I've barely scratched the surface of Org mode, and I've already replaced my todo/notetaking application, my WYSIWYG HTML table editor, my LaTeX editor, basically all the stuff I did in PowerPoint (with [org-reveal](https://github.com/yjwen/org-reveal/) and [reveal.js](https://github.com/hakimel/reveal.js/)), and entirely everything that I did in Word/Google Docs. And like I said, I'm still a total noob.

I just wish Org mode was present in NeoVim. While Emacs is still a lot faster than most editors, well, it's not Vim or a child of Vim, and it has some latency. And you can feel it.


### Format converter: [Pandoc](http://pandoc.org/) {#format-converter-pandoc}

Pandoc has got to be one of the most useful tools ever created. I don't use it as much as some people since I can export straight from Org mode, but it can handle anything else I need it to. Useful if I want to pull something into Emacs in Org format.


### Static site generator: [Hugo](https://gohugo.io/) {#static-site-generator-hugo}

By far the best static site generator I've used. Blazingly fast and flexible in all the right ways. Plus it's built with Go! Yay, Go!

Hugo is quite mature now, and offers a lot of customizability. It's also easy to set up automatic deployment on [Netlify](https://www.netlify.com/), making publishing writing absolutely effortless.


## Section 4: Coding {#section-4-coding}


### Terminal emulator: [Wsltty](https://github.com/mintty/wsltty) {#terminal-emulator-wsltty}

There are not as many good terminal emulator options on Windows, so I'm using Wsltty at the moment. Seems acceptable.

At some point I'm interested in setting up [Mlterm](https://sourceforge.net/projects/mlterm/) since it does very well on latency benchmarks, but I haven't figured out how yet, and all the documentation is in Japanese. Boo.


### Shell: [Fish](https://fishshell.com/) {#shell-fish}

I'm running Fish through the WSL. I personally see no reason to use bash/ksh/zsh any more than necessary, since I find typical shell syntax difficult to decipher, especially when scripts get longer.

In the long term I'm planning on using the [Ion Shell](https://github.com/redox-os/ion) for performance, but Fish is a good sane option in the meanwhile, while Ion is still in an alpha-ish state.

Once syntax highlighting and full completions make their way into Ion, that's when I'll switch. Both shells have the advantage of having arrays as a first-class data type.


### Version control: [Git](https://git-scm.com/) {#version-control-git}

Version control is essential when programming. (I use it for writing too, incidentally. It's very useful).

I learned how to use Git in my college classes, and have stuck with it. But I'm interested in what its pros and cons are compared to other options like [Mercurial](https://www.mercurial-scm.org/). I'm planning to do more research, but will probably end up sticking with Git since it's so ubiquitous.


### Editor(s): [JetBrains' IDEs](https://www.jetbrains.com/) {#editor--s--jetbrains-ides}

I coded most of my projects for last semester's Java class in Spacemacs since I'd heard a lot of talk about IDEs being slow and laggy. Recent research has convinced me that this is mostly false, and that a lot of the blowback against IDEs is from the irritating faction of programmers that tries to claim that ancient tradition is better than progress. I still use Vim bindings, of course.

I use JetBrains' [IntelliJ Idea IDE](https://www.jetbrains.com/idea/) for Java, and [PyCharm](https://www.jetbrains.com/pycharm/) for Python. Some IDEs are in fact slow and laggy, but JetBrains' IDEs have a [zero-latency mode](https://blog.jetbrains.com/idea/2015/08/experimental-zero-latency-typing-in-intellij-idea-15-eap/) that actually makes them have around the same latency as Vim, and in some cases, even less.

IDEs have a whole bunch of other advantages in development. For example, they allow for easy refactoring, good code navigation across multiple files, automatic documentation on hover, and so forth. And you don't have to spend a bunch of time selecting packages and making sure they play nice.


### Virtualization: [VirtualBox](https://www.virtualbox.org/) {#virtualization-virtualbox}

For testing software from the internet before installing it permanently, and testing software that I am writing myself on different systems.

You can find more of my thoughts on virtualization [here](https://www.steventammen.com/posts/windows-vs-macos-vs-linux/#virtualization-software-on-windows-10).


## Section 5: Working with other file types {#section-5-working-with-other-file-types}


### Compressed files: [7-Zip](https://www.7-zip.org/) {#compressed-files-7-zip}

7-Zip is the best compression utility for Windows. You should use it.


### Office files: [Libre Office](https://www.libreoffice.org/) {#office-files-libre-office}

I do all my own writing in Org mode. But sometimes I might need to open files from other people.

I currently have access to Microsoft Office as a student, but I'm sure not going to pay for it once I'm out of college. So I figured I might well get used to Libre Office now. It seems to work fine in terms of basic compatibility, which is good enough for me. YMMV. If you are in an office environment that leans heavily on the Microsoft suite (uses lots of custom VBA in Excel spreadsheets and custom themes and animations in PowerPoint, e.g.), you're probably going to have to use Microsoft Office.


### PDFs: [SumatraPDF](https://www.sumatrapdfreader.org/free-pdf-reader.html) {#pdfs-sumatrapdf}

SumatraPDF is a really fast, free, and open source program for viewing PDFs. I like it a lot.

I typically just use an online PDF editor if I have to fill out a PDF form. I never have to do it very often so this works well for me. This wouldn't work if you had sensitive information in the PDFs.


### Audio files: [Audacity](https://www.audacityteam.org/) {#audio-files-audacity}

I've heard lots of good things about Audacity, and have used it a few times myself. Seems to be a fine waveform editor. You will need to install encoders for MP3, AAC, etc.


### Photos/drawings: [Gimp](https://www.gimp.org/) and [Inkscape](https://inkscape.org/en/) {#photos-drawings-gimp-and-inkscape}

Normal free image software. Not as sophisticated as commercial options, but sufficient for my use cases.


### Video files: [HandBrake](https://handbrake.fr/) {#video-files-handbrake}

Again, not as sophisticated as commercial options, but good enough for me.


## Concluding Remarks {#concluding-remarks}

To finish setting up a Windows installation, I recommend you make sure update settings are set in such a way that updates don't come at inconvenient times. I also recommend [disabling snap assist](https://www.tekrevue.com/tip/how-to-disable-snap-assist-windows-10/) if you use the default Windows commands to tile windows.

Finally, you should periodically back up your important files. I use Dropbox to do this, but you can also do it with physical hard drives or home servers. It may seem like a pain, but if your computer ever gets damaged/lost/stolen etc., you'll be glad you put in the effort.
