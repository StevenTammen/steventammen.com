---
title: Learning programming - only what you really need
date: 2021-06-19
categories: ["Software"]
tags: ["education", "learning", "career-prep", "python", "git", "vscode"]
weight: 
inprogress: false
---


## 27: Starting to set up a local development environment - Python in VSCode

### Video

{{% video
src="https://www.youtube.com/embed/S0bxBX6ZBWE"
playlist="https://www.youtube.com/playlist?list=PLQ-N5KyJUu_VqG38oglZEEw17b_ZQ13On"

video="https://archive.org/details/swt-27-starting-to-set-up-a-local-development-environment-python-in-vscode-video"

audio="https://archive.org/details/swt-27-starting-to-set-up-a-local-development-environment-python-in-vscode-audio"

slides="https://www.steventammen.com/slides/pages/learning-programming-only-what-you-really-need/27-starting-to-set-up-a-local-development-environment-python-in-vscode"
%}}

### Summary

One of the most intimidating parts of starting out on one's journey of learning programming can be setting up a development environment: getting a programming language installed, a text editor, a package manager, and so on. It never quite becomes pleasant, but over time, you get kind of used to dealing with annoying configuration errors, and learn how to solve them. But when things don't work right when you're a beginner... it can be tempting to just give up there.

In an attempt to head off such problems, it is my opinion that it makes sense to have an experienced software developer help you set things up the first time through. Along these lines, in this video I use Chrome Remote Desktop (a free tool that lets you remotely take control of someone else's computer, with their permission of course) to help my friend set up a development environment for Python in Visual Studio Code (VSCode), a popular free text editor.

### Timestamps

- [00:00](https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=0s) - Introduction
- [05:23](https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=323s) - Chrome remote desktop
- [06:15](https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=375s) - Versions of programming languages, Python specifically
- [10:02](https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=602s) - Configuration management is unpleasant and is easy to mess up
- [13:10](https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=790s) - Command line basics
- [20:16](https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1216s) - Package managers
- [27:15](https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1635s) - System environment variables, PATH
- [29:40](https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1780s) - Downloading Python with package manager
- [40:57](https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2457s) - Text editor: VSCode
- [44:06](https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2646s) - Python in VSCode
- [50:20](https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3020s) - Bugs relating to the Chrome Remote Desktop connection - can skip unless you're interested in watching the debugging process

{{% content %}}

### Content

#### Chrome remote desktop

- Setting it up, figuring out how to use it, etc.
- One of the options for letting someone else remotely control you computer. Great for IT help for friends and family too, if you have become a go-to computer help person. (OTOH, if you hate constantly getting roped into helping people with their computers, you may not want to tell people of this option!)
- Makes it easiest to get a new developer set up, since someone experienced can run through the setup steps directly. Installing and configuring things can be a larger barrier than first apparent to getting new developers up and running, and it can be really discouraging to want to learn programming hands-on only to get blocked for hours or days by obscure configuration-related errors. (New people don't have as much general debugging/troubleshooting experience either, making these errors a bigger deal for them than for seasoned veteran programmers who will just shrug and instantly Google them).
- Package management and configuration management are some of the most unpleasant parts of software engineering, IMO. Having people start with them is thus less than ideal.

<!-- --- -->

#### Command line basics

- No need to spend lots of time getting into messy details regarding operating systems and shells, etc. For our purposes, we'll just start by navigating around the file system on the command line.
- Three starting commands:
  - ls
  - cd
  - clear

<!-- --- -->

#### Package managers

- Let you manage and update software from the command line
- Popular with software developers for managing development packages and frameworks, and really shine there. Many also support normal applications too (like browsers, text editors, etc.).
- Can be scripted like all other command-line programs, but also support updating all installed software at the same time in bulk (so they are already inherently advantageous relative to many other installation management approaches). Manual update wizards can be a thing of the past.
- For example: Chocolatey on Windows, Homebrew on Mac, various on Linux (e.g., `apt` on Ubuntu)
- https://community.chocolatey.org/courses/installation/installing?method=install-from-powershell-v3

<!-- --- -->

#### Downloading Python with package manager

- https://community.chocolatey.org/packages/python
- Automatically grabs the most recent version, sets up environment variables properly.
- I don't remember if the Python .exe/.msi GUI installer wizard makes everything "just work" out of the box (PATH environment variable, etc.), since I've installed Python via `choco` on the last several computers I've worked on. Maybe?

<!-- --- -->

#### System environment variables, PATH

- Environment variables for an operating system are kind of analogous to variables that live within a function's scope.
- You can only run executable files that are "on your PATH" = specified in the system environment variable called PATH. It is a list of file locations that are (or contain) executable files = programs that can be executed.
- A common gotcha that can cause issues is that after installing something in a shell, you have to either reload environment variables with a command or exit out of the shell and open a new instance for the PATH environment variable to get updated after you install something. Otherwise the shell will say that it can't find the new thing that you want to run.

<!-- --- -->

#### Text editor: VSCode

- Text editors with good plugin support and Integrated Development Environments (IDEs) proper are more-or-less interchangeable nowadays. IDEs (or the text editor plugins that have "IDE-like" functionality) statically analyze all the code in your project and let you do some useful things like renaming a variable everywhere in your codebase, or jumping to where a function is defined, even if it is in a different file from the one you are presently in.
- Using something that lots of other people use means good plugin support and good out-of-the-box defaults. So I'd recommend that most people use something that is pretty popular and well-maintained.
- I use VSCode (https://code.visualstudio.com/) professionally in my job, and I think it's pretty great.
- We'll go over some recommended plugins and such later, as well as useful hotkeys

<!-- --- -->

#### Python in VSCode

- Install the Python plugin and its related things (PyLance). On top of syntax highlighting and so on, lets you jump to functions and packages instantly, which is useful.
- https://code.visualstudio.com/docs/python/python-tutorial
- You might compare this setup with a full-on Python IDE like PyCharm (https://www.jetbrains.com/pycharm/)

{{% /content %}}

{{% transcript %}}

### Video transcript

<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2">0:02</a> - hey guys so today is march 23rd and we are picking back up in the programming<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=8">0:08</a> - series here now my friend and i have had a rather long discussion about how we want to continue and proceed moving<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=14">0:14</a> - forward in particular we're going to try to formalize some things and so uh you know thus far we've been doing<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=21">0:21</a> - some of the more basic stuff in programming like uh variables and loops and conditionals and things and as we<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=27">0:27</a> - move into some of the more advanced topics um and especially as we're trying to kind of get things scaffolded set up<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=33">0:33</a> - for the real world we're going to try to pick up the pace a little bit um so of course this is going to be good because it means that my friend can get a job<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=39">0:39</a> - faster hopefully and also that we can just finish things more rapidly in general so<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=45">0:45</a> - we spent a lot of time discussing some ideas that will go into this and uh of<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=50">0:50</a> - some of the things we settled on uh well we are going to try to go through a curriculum more formally<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=56">0:56</a> - so uh thus far i have kind of just been coming up with things on the fly i'm<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=61">1:01</a> - trying to make good example problems as we go um but we've decided here to try<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=66">1:06</a> - to make things a little bit more formal and that's gonna involve several things so<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=73">1:13</a> - in particular here i'm going to be making a a plan here for us getting things done<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=80">1:20</a> - uh in the readme uh let me see let me hide beating controls<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=86">1:26</a> - there okay that's better um and then uh so<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=91">1:31</a> - sorry i lost my train of thought um so i will be posting teaching videos some days of the week and then we will be<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=97">1:37</a> - meeting um on the other days so alternating days here uh to go over<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=102">1:42</a> - practice problems that we've assigned and then assign new practice problems so this is gonna be homework basically and then once we finish uh stuff we're gonna<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=109">1:49</a> - have tests so this is gonna be set up a little bit more like a more formal academic class thus far we've been pretty informal but<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=116">1:56</a> - tests are a very important part of academic procedure they let you know how you're doing in your learning what<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=122">2:02</a> - you're doing good on what you need more work on and they help identify areas that you aren't understanding and so<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=129">2:09</a> - we're going to basically set up more assessments and more tests and have a more defined structure and some of the<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=136">2:16</a> - structure here should help in terms of schedule pressure you know if we have deadlines where we're going to try to<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=141">2:21</a> - cover things by it'll help for me it'll help for my friend who's learning in this process and basically we're just going to try to be a lot more formal in<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=147">2:27</a> - general so one of the issues that we've run into uh in the last little bit is we've been<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=153">2:33</a> - going on our online ide experience is that we keep running into this problem where the debugger and the<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=158">2:38</a> - online ide isn't working completely properly now to be fair to them uh supposedly it's a feature that's beta<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=165">2:45</a> - right now so not considered stable in release but that's kind of a problem because debugging is important uh<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=171">2:51</a> - especially as we get into more complicated things here um so what we're going to be trying to focus on for the<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=176">2:56</a> - initial bit here uh we have that thing where i'm going to be making teaching videos and we're going to alternate days<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=181">3:01</a> - in that well that's going to pick up kind of once we have everything set up here and specifically once we have everything<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=188">3:08</a> - set up in terms of visual studio code so a development environment for my friend locally and then also a version control<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=196">3:16</a> - with git and github and sourcetree you know all of this version control software here<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=202">3:22</a> - that way we'll be able to share code in a repository and so i can come up with practice exercises and push to the<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=208">3:28</a> - repository and he can pull down the practice exercises and work on them locally and then push up his changes and<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=215">3:35</a> - i can look at them and so we'll get to practice with version control uh as we go on moving forward here that's the<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=221">3:41</a> - goal here but for the first few days until we get all of this infrastructure set up until we get the framework set up<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=226">3:46</a> - we're going to be working together um right now i'm actually recording my screen in zoom and we have a chrome<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=234">3:54</a> - remote desktop session going on um so we'll shift into the slides here that i prepped for today this is real real<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=239">3:59</a> - brief i might come and flush these out a little bit more i'm going to be trying to be more formal like i said though um so today on the 23rd uh these are the<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=247">4:07</a> - things in our outline here so i don't know how much of this will actually get through uh first is we're going to talk<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=253">4:13</a> - about chrome remote desktop a little bit that's what we have setting up here uh then i'm gonna go over just some basic stuff on the command line using command<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=259">4:19</a> - lines moving around on the command line we're gonna go over package managers uh at the operating system level we're<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=265">4:25</a> - gonna download python with the package manager check the system environment variables and specifically the path variable<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=272">4:32</a> - which tells you uh what you can and cannot execute basically what<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=278">4:38</a> - just how you have name spaces in python another programming language this is kind of like the name space for<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=284">4:44</a> - applications on your operating system uh then we'll talk about text editors and specifically vs code that's probably the<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=290">4:50</a> - one that we'll end up using here talk about python and vs code virtual environments for python and visual<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=295">4:55</a> - studio code setting up a launch configuration file for our project that is python and visual studio code uh then<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=302">5:02</a> - we'll go over python packages the python package index uh the pip package manager<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=307">5:07</a> - for python and then we'll talk about package dependencies at the project level and how you store these things in<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=312">5:12</a> - a requirements file here requirements.txt so just tons of stuff this is all basics of getting python set<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=319">5:19</a> - up locally developing locally um so lots to go into this um<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=324">5:24</a> - so we'll start off here with chrome remote desktop so this is actually my first time using it too um but it seems<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=331">5:31</a> - to be working okay uh you know we had one slight hiccup was we were having audio echo over the call because we<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=338">5:38</a> - already have a call set up over zoom is how we're screen recording here and then audio was also getting picked up over<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=343">5:43</a> - the chrome remote desktop tab so i just muted the tab and that fixed that and the reason why we're doing this is<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=350">5:50</a> - because it should make it easiest for a new developer to get set up if someone experienced is just sitting<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=356">5:56</a> - there and installing everything in the correct order rather than having to type everything out into some long<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=361">6:01</a> - complicated guide if someone can just briefly take over control of the keyboard and the mouse well we can make<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=368">6:08</a> - things go faster just by installing all of the right things in the right order here um<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=374">6:14</a> - so uh along these lines before we go you know before we actually get farther<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=379">6:19</a> - i will check out here see if we have python installed already locally<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=385">6:25</a> - so i was actually planning on having us install it with a package manager um because that is very much the<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=392">6:32</a> - software engineering sort of way to um install things so<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=397">6:37</a> - packages packages packages python so looks like you already have two versions of python installed now are<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=403">6:43</a> - you okay uninstalling these uh just for the sake of going through this tutorial here<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=409">6:49</a> - um if we do it my way is the way i'm most familiar with and then i know things will be set up correctly that way<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=416">6:56</a> - um so we'll go ahead and uh actually quite hoping that we don't have<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=422">7:02</a> - to restart your computer in this that would be unfortunate um but if we do we do um<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=429">7:09</a> - so it looks like you have python version 3.10.2 and then an earlier python version looks<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=435">7:15</a> - like 3.6 um so i'll just briefly ramble here while we're waiting for the installation to go<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=442">7:22</a> - uh so all uh programming languages have versions their programming languages are a form of software themselves<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=448">7:28</a> - now python in particular uh you may have heard of python 2 and python 3. um so<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=455">7:35</a> - python had significant breaking changes between version 2 and version 3 of python and so<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=461">7:41</a> - the most current version of python at the time of speaking in 2022 is python 3<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=466">7:46</a> - um and basically you can't run python 3 code in<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=471">7:51</a> - python 2. it just doesn't work um so not portability between these two versions<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=477">7:57</a> - but python three code in general um you can run<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=482">8:02</a> - older code from python three so like code from like python 3.1 point<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=488">8:08</a> - something well we're in 3.10 now but code from 3.1 will run in 3.10 so it's backwards compatible um within version 3<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=496">8:16</a> - of python um and so you can have multiple versions installed at the same time like you see<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=502">8:22</a> - here uh we'll get into this more when we talk about virtual environments but it's actually a very very<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=508">8:28</a> - significant issue in software development because you if your project is developed in a<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=514">8:34</a> - specific version of python but whoever downloads your project has a later version of python and they try to run<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=521">8:41</a> - your project with that well what happens if something breaks because of that right so matching python version to the<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=526">8:46</a> - version of whatever your project is in is actually quite important um and<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=532">8:52</a> - so for that purpose uh python lets you set up what we are going to call virtual environments which<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=538">8:58</a> - is basically you put everything in a box um it it's in its own container all of the stuff that you need for your<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=545">9:05</a> - application will be contained in this container for your application and it's going to ignore any<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=551">9:11</a> - other python stuff that you have on your system so each application has its own box that<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=556">9:16</a> - has everything in it and so um in some ways this is kind of inefficient because if your application<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=562">9:22</a> - uses a package and another application uses the same package even if it's the exact same package exact same version<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=569">9:29</a> - each one of them will have their own copy of it because it will be in the box for each one does that make sense um so<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=576">9:36</a> - we do try to like scope limit things sandbox things um so that you don't get interference um that's what we're gonna<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=583">9:43</a> - do here as well so we're gonna get rid of all the python versions for now um and just so that we're starting from<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=589">9:49</a> - a clean slate so this one was actually a 32-bit version here<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=594">9:54</a> - we're not going to worry about the difference for now it doesn't really matter too much for our purposes so<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=601">10:01</a> - right now just continuing to ramble as we go on here um installing programming<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=607">10:07</a> - languages and text editor support for programming languages and libraries for them<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=613">10:13</a> - this is a pretty huge headache um as you'll come to see it's one of the least pleasant parts of being a software<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=620">10:20</a> - developer is you have to manage your configuration uh your programming uh like the languages you have installed<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=625">10:25</a> - and what versions of everything and managing packages i mean we have better tools for it now<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=630">10:30</a> - than in the dark days but it's still kind of unpleasant um because it's easy<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=636">10:36</a> - for things to get messed up and if you ever have to go track down like a package reference<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=642">10:42</a> - that's not correct or something that's causing errors in your project is really annoying<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=649">10:49</a> - my team at work we have a back-end project and a front-end project which we'll get to eventually when we talk about web stuff<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=655">10:55</a> - but we have packages in both places and updating the package dependencies and stuff is probably one of the most<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=661">11:01</a> - bug-prone steps that you'll that you'll be involved in um and it can cause all sorts of weird<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=668">11:08</a> - behavior and bugs and it's easy to mess things up and uh well this a long way of saying that you<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=674">11:14</a> - want to be making sure that you understand why we sandbox things in their own<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=680">11:20</a> - environments for python applications what the benefit of that is uh why we would want to version lock things uh<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=686">11:26</a> - we'll get into all of this in more detail so don't worry if you're not tracking so much right now um but<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=693">11:33</a> - this is a reason why um you need to be careful in terms of like what versions of programming languages<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=700">11:40</a> - and stuff you have installed it's not just python so java is another programming language so<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=706">11:46</a> - java has a runtime and also the development kit so a stable version of java that lots of<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=713">11:53</a> - stuff runs like java 8 but you can install java 12 you know so that's several versions ahead<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=720">12:00</a> - and guess what same deal here java 8 code may not necessarily run in java 12. at least i don't think so some<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=727">12:07</a> - things are backwards compatible but not all the time it really depends but versions very very very important when<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=732">12:12</a> - you're developing software because your code will only run for a specific version at a specific point in<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=738">12:18</a> - time with specific package libraries as well and anytime any one of those variables changes your code might not<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=745">12:25</a> - work anymore so changes here typically called something<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=751">12:31</a> - getting deprecated so if something gets deprecated then<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=757">12:37</a> - what that means is is that something that used to be implemented as like a feature of the programming language<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=763">12:43</a> - is no longer there um so if something gets deprecated it basically means you can't use it anymore<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=770">12:50</a> - um it's been it's been taken away um also new things get added and sometimes functionality gets changed as well<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=777">12:57</a> - so all of this together compose what we call breaking changes and anytime breaking changes happen<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=783">13:03</a> - suddenly code that used to work won't work anymore in the new environment um<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=789">13:09</a> - so as we finish uh with all of this let me briefly go over<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=795">13:15</a> - um let's see yeah let me briefly go over command<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=801">13:21</a> - line stuff um so right now we were uh download we were uninstalling old versions of python and what we're going<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=808">13:28</a> - to do in just a sec here is um actually i can look at the slides on i can look<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=814">13:34</a> - at the slides on your computer as well<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=820">13:40</a> - maybe hopefully things haven't crashed here<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=826">13:46</a> - um you still hear me right yeah okay and there we go never finished i<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=833">13:53</a> - guess it's just being kind of slow yeah we can look at the slides on yours all right so um that was us finishing to uninstall so<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=840">14:00</a> - before we go farther i'm going to open a command prompt on your computer so um<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=846">14:06</a> - programmers and command lines um i guess we can go ahead and open a powershell here see<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=851">14:11</a> - if you are an admin on your account it looks like it or<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=859">14:19</a> - maybe<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=864">14:24</a> - what is this saying right now it's not saying anything but<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=870">14:30</a> - um you have security prompt that should be<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=876">14:36</a> - popping up being like well you see it<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=882">14:42</a> - yeah um i think there may be some latency here um from it it actually<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=889">14:49</a> - shows me um a screen asking me to<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=895">14:55</a> - uh okay the launch of the app so [Music] like<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=901">15:01</a> - i don't know how to explain it it it shows a security window asking me whether<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=906">15:06</a> - one so it doesn't seem to me like i can control your window anymore um okay okay okay<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=916">15:16</a> - that's can you control it now<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=922">15:22</a> - it looks like you can uh i mean you're going to want to go<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=928">15:28</a> - back to where we are um this is where we are i don't know can<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=934">15:34</a> - you let me let me uh<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=947">15:47</a> - hmm technical difficulties see i it says i'm<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=952">15:52</a> - in insert mode right now i don't know precisely what that is what i want to do is be able to send<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=959">15:59</a> - see stuff i do is not getting sent<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=967">16:07</a> - my seats have to do with the um the partial<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=973">16:13</a> - uh no uh let me see if i can it looks like you you're<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=978">16:18</a> - moving you're moving the mouse [Music]<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=986">16:26</a> - well i still doesn't seem like it's moving to me okay let's see now i am<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=993">16:33</a> - okay it's moving in is powershell maximized for you not not yet no<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1001">16:41</a> - so is it just a powershell thing maybe it's just a powershell thing yeah okay so i can access your chrome<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1008">16:48</a> - fine um but the second i open up powershell<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1015">16:55</a> - yeah can i oh okay you know what maybe powershell is a no-go um<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1021">17:01</a> - let's try just there's another powershell that's not an administrator well that won't work oh that's what i'm<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1027">17:07</a> - wondering i'm wondering if maybe perhaps um can you can you close out of the<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1033">17:13</a> - powershell yourself can you take over yeah get rid of that um<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1040">17:20</a> - okay um let me see if i can just do normal powershell<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1047">17:27</a> - see i was wondering if the commands will work here so can i do this can i control this window okay yes i can control this<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1053">17:33</a> - one looks like so perhaps just because okay so<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1062">17:42</a> - wow so much lag<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1067">17:47</a> - okay so um have you ever done things on the command line before no<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1073">17:53</a> - okay so um you know how uh normally we have a file structure like<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1079">17:59</a> - if we go into windows explorer um you have a set of files in windows explorer here<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1085">18:05</a> - and you have folders and stuff right um so you know you have desktop downloads<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1091">18:11</a> - documents these are all folders you can access well it turns out that you can access all of this stuff from the<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1097">18:17</a> - command line as well so there's two commands that we're going to be going over today on the command line uh one of<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1102">18:22</a> - them is called ls ls stands for list and so you see right here this says ps and<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1109">18:29</a> - then c colon slash user slash odichinmardiwodo so that's your name here<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1114">18:34</a> - and this represents the directory that we're in this represents the folder that we're in just like in windows explorer<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1121">18:41</a> - okay so ps stands for powershell we're in the powershell prompt right now and when we type in the ls list command<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1129">18:49</a> - inside of this directory what it does is it prints all of the things inside this directory<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1135">18:55</a> - and so um basically uh you can see over here that<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1141">19:01</a> - uh some of these things are directories and some of these things are not directories so you see how<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1148">19:08</a> - everything here that has a d probably directors looks to me so like desktop and documents and downloads are all<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1154">19:14</a> - directories and so if we want to change directories there's another command for that called cd cd stands for change<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1161">19:21</a> - directory right and ls stands for list and so um if we want to go into another<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1167">19:27</a> - directory uh we can cd into uh let's go in downloads from now and<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1172">19:32</a> - you can if you press tab it will complete for you it will like complete the path and so<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1178">19:38</a> - now that uh another command you can run clear clear will clear everything that's on the screen of the powershell uh right<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1186">19:46</a> - here so we just cleared that so now we are in you see how the path has changed now right we're in the downloads folder<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1193">19:53</a> - and if we type ls again now wow you have lots of stuff in the downloads folder right<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1200">20:00</a> - so that is what that is what um the basic commands are here so clear<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1207">20:07</a> - clears the screen here cd lets you change from directory to directory and ls prints the things in the directory<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1214">20:14</a> - does that make sense so far yes yes okay so why i pulled powershell up here was<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1220">20:20</a> - because um one of the easy ways to manage um<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1226">20:26</a> - to manage the installation of uh programming languages and frameworks and<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1231">20:31</a> - stuff is to use what's called a package manager um so<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1237">20:37</a> - these are very very common on linux they are not so common on windows and mac<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1243">20:43</a> - because many people use windows and mac primarily through a graphical user<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1248">20:48</a> - interface so mac os of course is actually running on a flavor of unix and windows is running on the windows<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1254">20:54</a> - kernel these are different operating systems linux is properly built on unix as well so linux<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1261">21:01</a> - and mac os are actually similar to each other more than they are to windows um but all of these things can use a<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1268">21:08</a> - package manager that you run on the command line so one of the benefits of this is that you are able to script<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1274">21:14</a> - things uh now that you're learning programming you can use things uh in a programming language to automate things<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1281">21:21</a> - if you use a command line tool so of course people who are a little bit more what we would call power users<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1287">21:27</a> - well they tend to like package managers better because rather than having to manually go and update things or have a bajillion<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1293">21:33</a> - files that all have their own updaters that take your system resources and<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1299">21:39</a> - stuff you can manage everything from you can manage everything uh from the<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1305">21:45</a> - package manager itself so we're gonna go ahead and open this link here this is to a package manager for windows called<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1312">21:52</a> - chocolaty um so this is the one that i recommend i use this on windows fine it makes it really<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1319">21:59</a> - easy to to basically install<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1324">22:04</a> - programming languages and uh other libraries and files and stuff and so<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1331">22:11</a> - uh we'll see i don't know if this will work as we are aren't in a<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1337">22:17</a> - admin powershell instance here so i'm going to go ahead and copy the command here this is the command to install<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1344">22:24</a> - to install uh chocolaty for windows here so we're gonna install it using a powershell script um so we're in powershell here<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1351">22:31</a> - um i'm gonna paste this now um it's what i just did i pasted it and now we're gonna press enter we're gonna<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1357">22:37</a> - see if it works or not um<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1363">22:43</a> - okay so it is looks like looks like we are uh we are going here um so<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1370">22:50</a> - um uh so downloading stuff on the command line usually looks something like this<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1375">22:55</a> - you know you'll have something running as you download and it'll show you uh things you'll get text printed um<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1381">23:01</a> - so uh let me see more on package managers um something very useful the package<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1387">23:07</a> - managers let you do is they let you download and update all of your software all at once<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1393">23:13</a> - please run from an elevated prompt okay<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1399">23:19</a> - so looks like this is something that we are going to need to run in<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1404">23:24</a> - uh an admin prompt so so if we go ahead and close out of this<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1412">23:32</a> - you can take over the keyboard and stuff again go ahead and open an admin version<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1417">23:37</a> - of powershell and then using um<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1422">23:42</a> - using this command the command here you can copy paste this into the admin<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1428">23:48</a> - powershell and try running it from the admin powershell instance is everything i just<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1433">23:53</a> - said make sense yes<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1449">24:09</a> - okay and we'll see if it goes this time<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1458">24:18</a> - now i can't mess with this window i don't think because it's an app<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1464">24:24</a> - yes i can see it and it looks like it's working fine but um<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1469">24:29</a> - no i'll kind of make you drive here for a little bit<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1474">24:34</a> - [Music] okay so you see that warning up there it says<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1479">24:39</a> - warning it's very likely that you will need to close and reopen your shell before you can use choco choco is just the abbreviations the<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1486">24:46</a> - command name here um so hmm<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1492">24:52</a> - sorry um i need to allow this but i i don't know oh<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1498">24:58</a> - it might be that i don't know i mean let's see if it<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1503">25:03</a> - actually failed first uh so uh just ignore things for now um<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1508">25:08</a> - and um okay so i'm gonna take back over here we're gonna go back to chrome<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1516">25:16</a> - well actually can you go back to chrome here briefly yeah okay so<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1522">25:22</a> - uh let's see if i can do things again yes i can okay so this was the package manager itself um so before we go on let<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1528">25:28</a> - me let me sing the praises of package managers just a little bit there will be a period of discomfort here<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1534">25:34</a> - as you are a little bit unfamiliar with updating things on the command line but<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1539">25:39</a> - something that is very very useful is that if you start uh using a package manager to track a lot of your software<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1546">25:46</a> - distribution so maybe your browser your text editor other things like that you can run something like choco update<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1554">25:54</a> - or a package manager that's used all the time on linux is on like ubuntu and stuff is called like apt app so like<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1561">26:01</a> - apt-get update apt-get upgrade uh you'll run these commands and then it will automatically download and patch all of<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1567">26:07</a> - the software that you have on your system and so it's very convenient for keeping things up to date security wise<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1574">26:14</a> - and also uh you know it's quick um so i won't absolutely force you to do this<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1580">26:20</a> - but one of the benefits of downloading especially especially programming languages with a package<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1586">26:26</a> - manager is when you have a setup script it will make sure that all of the environment<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1591">26:31</a> - variables for your system are set up properly and i will explain exactly what that means in just a second here<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1597">26:37</a> - so the next thing that we're going to do is we're going to install python using the package manager here like this<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1602">26:42</a> - now it's been a while since i installed python like manually as i recall manually sometimes you might install it<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1609">26:49</a> - i can't remember if it gets the variables right um and uh if everything just works the<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1615">26:55</a> - first time my recollection having installed programming language maybe not python java uh uh c plus plus other<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1622">27:02</a> - things is that sometimes you install the programming language and then things don't just work you have to go figure out why they don't work why can't you<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1628">27:08</a> - use the language um and i haven't had that problem since i've done this okay so now we've installed<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1634">27:14</a> - um chocolaty now you remember that warning that we got um we got a warning that said you might need to restart your<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1641">27:21</a> - shell before the command will be recognized right this is what i say right here um so a<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1648">27:28</a> - common gotcha that can cause issues when you're in a show so that's what powershell is that's what a command<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1654">27:34</a> - prompt is uh you'll hear them called shells and terminals these are things where you're<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1659">27:39</a> - interacting with your operating system on the command line um so a shell reads<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1664">27:44</a> - these things called environment variables so when your operating system is running uh you know how functions<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1671">27:51</a> - have scope we've talked about function scope and programming right um so think in an analogous way that an<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1678">27:58</a> - operating system when you're running like windows or mac os or linux an operating system has a set of variables<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1684">28:04</a> - and stuff it can access too sort of i mean we're being very hand-wavy but that's basically what it's<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1690">28:10</a> - like and so one of the environment variables is this one here capital p a t h path<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1697">28:17</a> - and what your path is is it represents all of the things that you can execute<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1702">28:22</a> - so for you to be able to run a command on the command line that command has to quote unquote be on your path<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1709">28:29</a> - and what that means is this is the set of things that your operating system knows i can run this um if a user types this<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1717">28:37</a> - on the command line and presses enter i know what this thing is i know what code i need to run when this command gets<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1724">28:44</a> - called that's what it means for it to be on your path and so the path environment variable is a set of file locations uh<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1731">28:51</a> - separated by semicolons i think i'm pretty sure it's semicolons um so you have a set of file locations<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1737">28:57</a> - so it would be like slash user slash your username some other directory until you get to an<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1743">29:03</a> - executable file if you're on windows um and what these things represent is these<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1748">29:08</a> - are the programs that your operating system knows how to run um and so for our purposes here installing a<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1754">29:14</a> - programming language like python what we want to be able to run python that needs to be an application that we can execute<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1760">29:20</a> - so that we can tell the system hey i want to run python and i want to do this thing or i want to do that thing<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1766">29:26</a> - or i want to run a script with python well we need the operating system needs to know oh i know what python is um and<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1774">29:34</a> - so to do that python needs to be on your path that is the jargon used here it<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1779">29:39</a> - needs python needs to be on your path okay so here is the command in chocolaty to download python but why i was pulling<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1785">29:45</a> - this slide back up here was we're going to have to actually reopen our shell here um so if you go back to your admin<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1791">29:51</a> - command prompt and you try to run the choco command in fact we can even do it here um if you go<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1797">29:57</a> - to the chocolatey page and you try to run like taco install python i kind of doubt it will work um<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1805">30:05</a> - okay so you haven't closed out of this one right this is still the same shell that we installed chocolaty right<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1812">30:12</a> - yes okay so go back to chrome and then go to the tab i think it's the second tab<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1819">30:19</a> - um for installing python 3 okay and then you see that<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1825">30:25</a> - that command so you copy that and let's try it here in our<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1832">30:32</a> - okay so it's probably going to tell us uh we can't find choco<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1838">30:38</a> - well okay well never mind and sometimes it's smart um<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1843">30:43</a> - it depends um sometimes it will dynamically reload the environment variables um but<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1849">30:49</a> - you see this is all you have to do you know how when you install uh<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1854">30:54</a> - uh software with something called an installer you know how like you would download a file that's like dot exe or dot msi and then you have to like<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1862">31:02</a> - go through a wizard and it has like steps and stuff um this is the programmer version of that<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1869">31:09</a> - basically um so this might not mean a lot to you but it shows you all of the dependencies it's<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1876">31:16</a> - downloading right now so we're downloading python version 3.11 this is the most recent python version it's<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1881">31:21</a> - downloading some of the redistributable packages that are dependencies for it um it's setting up some extensions and<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1888">31:28</a> - stuff for chocolatey it shows you everything it's doing right now a lot of people aren't going to care about this information whatsoever right and even<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1894">31:34</a> - for me look i mean i'm a programmer i've done stuff with this doesn't mean very much to me either right but it's kind of<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1900">31:40</a> - cool that it is there okay so it says this package wants to run this thing<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1906">31:46</a> - note if you don't run the script installation will fail to confirm automatically next time use dash y or<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1913">31:53</a> - consider choco feature enable dash n allow global confirmation okay so<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1920">32:00</a> - what we are going to do is you see how um if you<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1926">32:06</a> - you see those letters that have brackets around them like the y and yes the a and all so<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1931">32:11</a> - we're going to type capital a here well actually you should type capital a we want to say yes to all of these things<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1937">32:17</a> - so what it's going to be doing is and then press enter um it's going to be asking you for permission to do things<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1943">32:23</a> - here um to install this thing or that thing and if you don't do yes to all<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1949">32:29</a> - uh what it will do is it will ask you each and every time and so then you're gonna have to keep sitting here and babysitting the installation<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1955">32:35</a> - um and so now it's installing all of these things that it downloaded initially and um<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1964">32:44</a> - uh well i mean you can read the output there um so this is how installing and updating uh<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1971">32:51</a> - software on the command line looks um now part of why i'm having us do this isn't because<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1977">32:57</a> - the normal installer installation wouldn't work or you wouldn't be able to do it that way but uh you're gonna be a<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1983">33:03</a> - software developer now right um it's not entirely a bad thing for you to start speaking the language of computer<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1989">33:09</a> - programmers and i'm not telling you you're not a real programmer if you don't use this or whatever like there's<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=1995">33:15</a> - none of that nonsense we don't need to be elitist about it but this is something that software developers tend to be kind of<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2001">33:21</a> - enthusiastic about right of all the human beings in the world we are the ones who who do things like this<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2007">33:27</a> - uh not all of us but some people um additionally uh knowing how to move around your file system on the command<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2014">33:34</a> - line with those commands that we talked about earlier here so cd lets you change directories ls lets you<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2021">33:41</a> - uh you know see things in the directory and then you will be able to execute<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2026">33:46</a> - things when you're in the same directory which we didn't do but that's another thing you can do this is<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2031">33:51</a> - again uh many normal people will use the file explorer or some other graphical file uh<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2038">33:58</a> - system explorer to look at the files on their system but you can also do it on the command line um<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2044">34:04</a> - and so these are just uh tools for you to pick up uh because eventually you will probably need to do some things on<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2051">34:11</a> - the command line as a programmer um so when we get into uh version control systems like git<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2057">34:17</a> - git git has a command line version now uh i will show you the command line version and then we'll probably almost<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2063">34:23</a> - never use it again because uh you can use git on the command line it works fine but there are some<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2069">34:29</a> - advantages to using a graphical program for it such as it shows you all the differences between files completely automatically<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2075">34:35</a> - in a nice pretty gui um so uh one of the nice things though about<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2081">34:41</a> - command line stuff is that you can actually use it in uh programming scripts um so so-called shell scripts<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2087">34:47</a> - that run in your shell you can basically write snippets of code that will execute<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2093">34:53</a> - certain commands in a certain order right and it's really really powerful because it lets you automate things um<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2099">34:59</a> - so even things that you can access with a graphical user interface it's very very nice if they have a command line<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2105">35:05</a> - utility or a cli is what they're called command line interface that lets you interact with the program on the command line<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2111">35:11</a> - because suddenly then you can write you can write scripts that do things with the program um<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2119">35:19</a> - okay so it's still going you see um there's lots of files in python and you'll notice that it's downloading the<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2125">35:25</a> - 64-bit version here that means that you are running a 64-bit version of the windows operating system we don't need<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2132">35:32</a> - to worry about that so much right now uh in fact i won't even go there but<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2137">35:37</a> - basically there's different kinds of uh different kinds of computer architectures here um 64-bit<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2144">35:44</a> - systems are different than 32-bit systems and so when code is running on your computer it needs to actually be<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2150">35:50</a> - specifically running in the 64-bit architecture like not all code is completely portable so when code gets<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2156">35:56</a> - translated down into ones and zeros it will only run on a specific kind of computer the specific kind of computer<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2163">36:03</a> - for the ones and zeroes that it made this time so you'll have these things called compilers for compiled languages that<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2169">36:09</a> - will take code that looks like you know code you know like variable x equals<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2175">36:15</a> - something and it will turn that into statements the computer understands uh first it goes through something called<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2180">36:20</a> - assembly then it gets from assembly translated down into machine language which is just ones and zeros and then it runs on your computer um so<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2188">36:28</a> - we're not going to talk about most of that for now we're just going to kind of wave our hands and make pretend that all that stuff happens and we can just<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2195">36:35</a> - wave our magic wand because for us programming and high level programming languages we don't really care that much<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2200">36:40</a> - um computers do some magical stuff to make it all work um all right so let me go uh while we're<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2206">36:46</a> - waiting for this to finish installing okay it says it has been installed uh restricting write permissions to<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2211">36:51</a> - administrators we'll see how much more it has here okay so it says here environment<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2217">36:57</a> - variables it says environment variables like path<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2223">37:03</a> - have changed close reopen your shell to see the changes or in powershell just type refresh environment so you want to<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2230">37:10</a> - type that refresh env<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2240">37:20</a> - okay and what that means is that uh we have uh<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2247">37:27</a> - printed or we have now updated the uh path here so um type in python three and then do dash<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2256">37:36</a> - dash version so and then space<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2263">37:43</a> - is space after python 3.<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2271">37:51</a> - oh you don't need a space after the dashes just before the dashes yep<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2278">37:58</a> - okay press enter<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2290">38:10</a> - well interesting<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2296">38:16</a> - try doing the same thing but just with python rather than python 3.<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2310">38:30</a> - well maybe we should try closing the shell and reopening it we want to make sure that we can actually access python<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2316">38:36</a> - here<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2331">38:51</a> - so try the same thing then<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2340">39:00</a> - [Music]<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2346">39:06</a> - okay there we go so i guess the command here is python so not python 3. i can't remember a<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2352">39:12</a> - difference differs by which operating system you're using um so<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2357">39:17</a> - you see now but we typed in python and dash dash version and now it returns something it tells us that the python<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2363">39:23</a> - version we're using is three point eleven point whatever that is um<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2368">39:28</a> - that release right okay so now it says we have python accessible and uh<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2373">39:33</a> - specific to us so if you can x out of this shell i think we're good for now here um<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2379">39:39</a> - specific to us now we have python installed and it's on this thing called our path that represents the set of<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2386">39:46</a> - things that the operating system knows what they are so you saw the second time we did it the operating system knows<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2392">39:52</a> - what python is now right so we give python as the name of the<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2397">39:57</a> - application and then we pass that the thing on the command line there with the dashes is called a flag it's called a<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2402">40:02</a> - command line flag we give it the flag version it tells us hey i want to i want to check the version of this<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2407">40:07</a> - um and so we do python dash dash version it spits us back a version of python that means that the operating system<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2412">40:12</a> - knows what python is it's on the path it's something that it can execute all right so thus far what we've done<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2419">40:19</a> - is we've talked about package managers at a high level right i'm not going to force you to do this this is something<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2424">40:24</a> - that i'm enthusiastic about as a software developer lots of people are uh it's cool lets you automate things right<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2430">40:30</a> - so this is kind of just g whiz information for you um but installing it with chocolatey like this means that it<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2436">40:36</a> - automatically sets up the environment variables for you does some of the configuration uh so i'm a big fan of<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2441">40:41</a> - package managers especially for programming tools i don't think it matters so much like browsers and stuff but programming tools specifically i<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2448">40:48</a> - think package managers are great so we downloaded python with the package manager it automatically set things up on our<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2454">40:54</a> - system and now we see that we can access python so that's where we are right now uh the next thing that we're going to do<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2460">41:00</a> - is look at vs code some so i think you probably you might already have a vs<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2466">41:06</a> - code uh we'll check here so uh maybe actually i'll go to search here<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2472">41:12</a> - and uh i do ps code let's see yes you do have visual studio code<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2479">41:19</a> - all right so um uh uh let me see just briefly on text<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2485">41:25</a> - editors so text editors are the the things that we as software developers use to write our code in um<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2492">41:32</a> - you may also hear the word ide uh ide is an acronym stands for integrated development environment um<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2500">41:40</a> - honestly most text editors now have plugins that make them ides so you can use these things more or less<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2505">41:45</a> - anonymously um an ide contains things that like basically analyze your code and let you jump around in your code uh<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2512">41:52</a> - we'll get to all of this soon uh once i go over some hotkeys and stuff in vs code for you to use i like jumping<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2519">41:59</a> - to the definition of functions things like that um so uh text editors these<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2524">42:04</a> - are going to be the tool that you spend a lot of your time in as a software developer um you know outside of version<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2529">42:09</a> - control stuff and uh whatever system you use to track your tasks uh like agile task management systems like jira<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2536">42:16</a> - or devops depending on your platform uh we won't go there for now um but uh text editor<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2542">42:22</a> - is very important for us um now visual studio code is great because lots of<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2547">42:27</a> - people use it and for that reason it has really good plugins uh since there's like millions and millions and millions<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2553">42:33</a> - of people using it some people have poured a lot of time into making the experience in it good and it has a lot<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2560">42:40</a> - of good out of the box defaults so a lot of stuff just works pretty well<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2565">42:45</a> - like you don't have to configure stuff it just works uh basically as soon as you install stuff um<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2571">42:51</a> - so i use vs code professionally in my job we use it for our front end stuff we actually use visual studio for a lot of<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2577">42:57</a> - our back and stuff in c sharp because that's another microsoft ide specifically set up for c sharp stuff<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2583">43:03</a> - but we use vs code for our angular project angular is a javascript front end and uh i mean i use vs code anyway<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2590">43:10</a> - for myself when i do markdown uh stuff with markdown files um so uh vs code is<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2595">43:15</a> - a text editor um i think it's a pretty great one uh you know in terms of text editors you may have also heard of<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2601">43:21</a> - something called sublime text it's another text editor um survive text is also quite good um<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2608">43:28</a> - of the text editors that are like text editors you may have also heard of things like vim and emacs those are some<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2613">43:33</a> - of the power user uh command line like linux type text editors<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2619">43:39</a> - uh there are people who would who would roast me for saying this but i would avoid them um things like vs code if you<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2626">43:46</a> - want to use vim key bindings you can it has a plug-in for that but it's just way more user-friendly for like 99 of human<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2633">43:53</a> - beings that don't care that much about the other stuff um so i would stick with vs code um as long as you don't have<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2639">43:59</a> - preferences you can just take my word for it vs code is one of the best um so<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2644">44:04</a> - okay so we have vs code open now um now for us specifically<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2650">44:10</a> - uh let's see what packages you have here extensions so<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2655">44:15</a> - uh well it looks like you already have the python extension here so<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2661">44:21</a> - uh so pylance gives you the ide type<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2667">44:27</a> - features for python specifically um and it looks like you installed all<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2672">44:32</a> - of these things so ah and i see this was the<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2678">44:38</a> - looks like something relating to that uh project that uh you'd mentioned from before right this web scraper thing yeah<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2686">44:46</a> - um looks familiar there i didn't read too much about scrapey but it looks like it's a python package for doing web<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2692">44:52</a> - scraping so maybe we can go on your file system here<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2699">44:59</a> - and uh oh it looks like you already have some python set up here so uh for now i'll<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2706">45:06</a> - just go into downloads and maybe we'll just make a new folder and downloads here um so<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2712">45:12</a> - let's do there's our slides that we're doing here<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2718">45:18</a> - let me just make a new folder<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2723">45:23</a> - i've got to click not on something specifically new folder [Applause] now looks like you have visual studio<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2729">45:29</a> - installed too um so we'll do this<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2735">45:35</a> - right so on example okay so we're going to make a new directory here<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2740">45:40</a> - and then in vs code over here we can go to the explorer here<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2746">45:46</a> - uh right now oh so yeah you're you're currently in the reply this is the uh zip file that<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2754">45:54</a> - they sent you uh for this application uh well for now we'll just click on new<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2759">45:59</a> - file so uh well that's not where we want to do it um<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2767">46:07</a> - well let's let's just<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2774">46:14</a> - can we just close it's like leave it completely [Music]<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2780">46:20</a> - one second i pressed the wrong thing i was just gonna we can go open that empty directory that we just made right<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2785">46:25</a> - so right now you're in this folder here which contains um<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2791">46:31</a> - uh all of the stuff from that example application that they sent you for web scraping but now i just i just switched<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2797">46:37</a> - folders so we just made that empty folder called python dash example um<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2802">46:42</a> - this is fine um so now we're in this folder you see if you don't have any files so we're gonna go ahead and add a file here<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2808">46:48</a> - and we can call it uh or we can just call test.com okay so<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2814">46:54</a> - we're gonna add a python file test up by like this and then we have the file we double click on it now we're in test.pi<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2821">47:01</a> - right and so we could do something like this right um<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2827">47:07</a> - uh and so this is our test.pi file okay so now if we<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2833">47:13</a> - press f5 to run this uh<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2840">47:20</a> - and then debug create a launch json file<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2855">47:35</a> - okay so we just ran it says hello world right um so let's go ahead and do this now um i'm skipping ahead a little bit<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2862">47:42</a> - um so visual studio code uses uh things called json files so json is a file type<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2869">47:49</a> - um uh it's a uh sorry it's a syntax for organizing information it has lots of curly braces<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2876">47:56</a> - and stuff okay so um<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2882">48:02</a> - huh how do i get out okay so<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2887">48:07</a> - um this is our uh this is our<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2893">48:13</a> - uh configuration here so we have the current file here um<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2898">48:18</a> - right you know i don't want to talk about this now maybe i don't want to talk about this now um<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2904">48:24</a> - so basically uh you can configure how you want things to run uh using this file here called launch.json<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2911">48:31</a> - um so right now we're in a python file called test.pi if you ever want to change which file gets run by default um<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2917">48:37</a> - so we're on the run panel here see this thing has got a bug on it and then an arrow this is our run and debug panel um<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2924">48:44</a> - i'll do more when we do vs code stuff specifically but you show and hide the sidebar with control b<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2930">48:50</a> - uh if you are on any anything in the sidebar you can<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2935">48:55</a> - pull it up by control shift d will automatically take you to the debug menu and then if you just want to run stuff<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2941">49:01</a> - if you just want to run stuff no matter where you are you press f5 um those are real real briefly that's some<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2949">49:09</a> - of the execution stuff here okay so we just ran our file hello world so there you go you have python setup great right<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2956">49:16</a> - so what we're going to shift into now um uh for the rest of our time here<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2962">49:22</a> - yeah go for it okay so down here it says this version of python seems to be<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2968">49:28</a> - incorrectly compiled what does that mean<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2974">49:34</a> - oh good question um i mean we can go look at this so it says<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2980">49:40</a> - bugs.python.org so we're going to control click the link probably open something in chrome here<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2986">49:46</a> - um<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=2999">49:59</a> - um<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3019">50:19</a> - oh interesting i wonder which version of python thinks it's using<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3024">50:24</a> - okay so we're in powershell right here right me<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3032">50:32</a> - yeah i can't see i've got the your desktop is being shared thing okay<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3039">50:39</a> - so if i type in<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3049">50:49</a> - i think i just nuked our connection that's unfortunate okay<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3055">50:55</a> - the window must have gotten cut off here um yeah you're getting really cool now<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3063">51:03</a> - all right well uh let's go back to the chrome remote desktop thing<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3069">51:09</a> - you want to send me another code um yeah<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3076">51:16</a> - whoops<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3081">51:21</a> - well i can't say for sure it's kind of weird that you're getting that it looks like there's an open issue um i couldn't<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3087">51:27</a> - tell you why python isn't it says it's not compiled correctly what i was going to check right here is which python version it thinks is pulling from is<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3093">51:33</a> - this the new python that we just installed or maybe it's referencing a python that is not the right one so that's what i<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3100">51:40</a> - was going to check oh excuse me let me see<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3107">51:47</a> - i can't find my zoom may zoom okay i think i think it's right<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3114">51:54</a> - there that's right we were on different desktops so<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3122">52:02</a> - [Music]<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3128">52:08</a> - i suppose we would need to keep recording through this but it's okay so anyone who's watching will get to see<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3133">52:13</a> - how chrome remote desktop works um okay so<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3139">52:19</a> - did you just send it to me yeah okay so chrome remote desktop you take<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3144">52:24</a> - in the code that your friend sends you you put it in the connect to another computer thing<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3150">52:30</a> - and it sits here and does its thing<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3160">52:40</a> - and there we go okay so we're looking at this issue here so i was going to go back to vs code<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3167">52:47</a> - before weird things happen my vs code now so i moved the window here<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3173">52:53</a> - so let me do python why is it it closes again<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3180">53:00</a> - what the heck [Applause] all right well i'll pause this time so<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3186">53:06</a> - we don't waste time okay so we're going to try again here<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3194">53:14</a> - hide floating do i have<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3200">53:20</a> - to press enter in that terminal yes i<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3207">53:27</a> - keeps can the connection that is<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3213">53:33</a> - very strange huh<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3218">53:38</a> - i i just want to press the letter p i i wonder i wonder what the deal is um<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3224">53:44</a> - okay i mean here let's let's try one more time um and obviously i can't press the letter p<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3231">53:51</a> - in that terminal without having something go back<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3250">54:10</a> - all right very strange lovely technical difficulties we'll probably get the hang of this if we do<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3256">54:16</a> - this more um<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3279">54:39</a> - all right let's move that out of the way somewhere<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3289">54:49</a> - why doesn't it let me type letters down there<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3299">54:59</a> - let's meet them all right well type in python-version let's see if we can<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3305">55:05</a> - test it<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3310">55:10</a> - okay so it is that python version well<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3319">55:19</a> - internal generated file names are not absolute huh<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3324">55:24</a> - well you know what if we run into problems later i guess we'll have to try reinstalling but<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3329">55:29</a> - um for the time being let's not worry about that<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3338">55:38</a> - now the fact that i can't use our terminal that's that's an issue um<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3348">55:48</a> - maybe it still treats that it treats it like the um<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3353">55:53</a> - [Music] yeah but the thing is i can press enter in it [Music]<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3361">56:01</a> - weird so it thinks that it's still capturing the keys in my chrome not your window<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3369">56:09</a> - but if i'm here<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3374">56:14</a> - ah now something weird's happening with the keys it's not just the terminal it's anything okay it's not letting you type<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3381">56:21</a> - there too okay yeah yeah what's going on then it's weird very<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3386">56:26</a> - weird but you you were able to type before<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3398">56:38</a> - yeah it seems to me like it thinks the control key is being held down because<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3404">56:44</a> - that's what control t opens a new tab right and that's what's happening when i press<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3409">56:49</a> - t here inside this so it thinks control is being held down<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3415">56:55</a> - even though i'm not holding down control i'm not here either<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3430">57:10</a> - i can type it on my computer so why can't i<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3437">57:17</a> - let me relaunch vs code would that help no i don't think it's<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3462">57:42</a> - um [Music]<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3472">57:52</a> - ah i don't know this is kind of gonna block us here see it wasn't doing this forever it just randomly started<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3479">57:59</a> - doing this [Music]<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3493">58:13</a> - well let me go to chrome and let me see in<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3500">58:20</a> - your chrome well let me press the letter t<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3505">58:25</a> - nope so it seems like my keyboard in general is not working but my mouse is and i can<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3511">58:31</a> - press the enter key i can press the enter key on your uh<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3516">58:36</a> - on stuff over here too so<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3522">58:42</a> - well i mean i i tell you what uh let me let me figure finish talking through stuff here<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3528">58:48</a> - um i guess i am still recording here so let me finish talking through a couple more<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3534">58:54</a> - things but let's figure this out before we next meet because otherwise this can be kind of hard for us to keep doing um<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3540">59:00</a> - so uh what we've gone through so far is we have vs code opened um we have the<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3547">59:07</a> - python plugin installed for vs code which lets us use python files um and you see also that in your python file<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3554">59:14</a> - here it is like highlighting things this is called syntax highlighting right that's good<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3560">59:20</a> - and if we were to<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3565">59:25</a> - press f12 which is what i just did there we'll get into this later when we do hotkeys more formally it takes us to the<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3572">59:32</a> - definition of that function and so this probably doesn't mean too much to you here but this is the definition in<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3578">59:38</a> - python of the print function now i want to resize this window why aren't you letting me resize<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3586">59:46</a> - okay yeah so this is the print function you know it's got some very interesting<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3591">59:51</a> - looking library functions there but that's what happens when you jump to definition much more useful for your own<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3597">59:57</a> - functions um now of course i can't type anything because of our lovely bug here but um<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3603">1:00:03</a> - so yeah that's python in visual studio code uh we will pick up next time we meet talking about virtual environments<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3608">1:00:08</a> - more um so uh specifically setting up a virtual environment for our project here in vs code and then setting up the<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3614">1:00:14</a> - launch configurations for vs code as well um so i think we'll cut for here so we did<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3621">1:00:21</a> - make some good progress today um i know it was kind of slow as we were getting used to uh this chrome remote desktop stuff and<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3628">1:00:28</a> - installing software and checking versions and stuff but uh we'll keep slogging through this um until we get to<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3635">1:00:35</a> - uh the point where you're running everything in python locally here um so sound like a plan yeah okay so that's<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3643">1:00:43</a> - where we'll cut today and let's try to figure out that weird bug that's not letting me type um<br/>
<a href="https://www.youtube.com/watch?v=S0bxBX6ZBWE&t=3648">1:00:48</a> - so we will pick up next time continuing on with python configuration vs code specifically virtual environments<br/>

{{% /transcript %}}



## 28: Python virtual environments, VSCode launch configurations, packages w/ pip and requirements.txt

### Video

{{% video
src="https://www.youtube.com/embed/BUzCErp4dUI"

playlist="https://www.youtube.com/playlist?list=PLQ-N5KyJUu_VqG38oglZEEw17b_ZQ13On"

video="https://archive.org/details/swt-28-python-virtual-environments-vscode-launch-configurations-packages-w-pip-a"

audio="https://archive.org/details/swt-28-python-virtual-environments-vscode-launch-configurations-packages-w-pip-a-audio"

slides="https://www.steventammen.com/slides/pages/learning-programming-only-what-you-really-need/28-python-virtual-environments-vscode-launch-configurations-packages-w-pip-and-requirements-txt"
%}}

### Summary

In this video, we continue to work on setting up a local Python development environment in VSCode.

We talk about the concept of virtual environments (sandboxing packages per-project). We also talk about how to set up a launch configuration in VSCode to be able to always launch from your project's main file, no matter what file you might otherwise be presently editing.

After this, we get into packages in Python, discussing the Python package index (https://pypi.org/), the `pip` package manager for Python, and how you can use `pip` to save a list of your project's packages (in a file conventionally called `requirements.txt`) to make installation of your application easier in the future (and also stable = independent from breaking changes in updated package versions).

We also install Git, a version control tool, which we'll work on setting up more next time.

### Timestamps

- [00:00](https://www.youtube.com/watch?v=BUzCErp4dUI&t=0s) - Introduction
- [02:20](https://www.youtube.com/watch?v=BUzCErp4dUI&t=140s) - Our bug from yesterday: a Vim browser extension
- [03:03](https://www.youtube.com/watch?v=BUzCErp4dUI&t=183s) - Python virtual environments (in VSCode)
- [25:07](https://www.youtube.com/watch?v=BUzCErp4dUI&t=1507s) - Setting up a launch configuration in VSCode
- [33:53](https://www.youtube.com/watch?v=BUzCErp4dUI&t=2033s) - Python packages, the Python package index, and pip
- [53:15](https://www.youtube.com/watch?v=BUzCErp4dUI&t=3195s) - Package dependencies at the project level, requirements.txt
- [1:01:20](https://www.youtube.com/watch?v=BUzCErp4dUI&t=3680s) - Preview: Git (with Git bash), SourceTree, and GitHub (remote repository host)

{{% content %}}

### Content

#### Our bug from yesterday: a Vim browser extension

- If anyone else uses Chrome Remote Desktop with Vimium active, you have been warned!

<!-- --- -->

#### Python virtual environments (in VSCode)

- Virtual environments at a high level -- sandboxing project packages so that they don;t interfere with each other
- In VSCode specifically: https://jasonmurray.org/posts/2020/vscodepythonvenv/
- In the integrated terminal, run:
  - `python -m venv .venv`
  - And then `./.venv/Scripts/activate` to activate the virtual environment

<!-- --- -->

#### Setting up a launch configuration in VSCode

- https://code.visualstudio.com/docs/python/debugging#_set-configuration-options

Example:

```json
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "configurations": [
        {
            "name": "Preprocess",
            "type": "python",
            "request": "launch",
            "program": "main.py",
            "console": "integratedTerminal"
        }
    ]
}
```

<!-- --- -->

#### Python packages, the Python package index, and pip

- https://pypi.org/
- https://www.w3schools.com/python/python_pip.asp
- `pip` is a package manager for Python, just like `choco` is a package manager for Windows.

Example:

- Let's say you want to build a URL from a file path. URLs don't have spaces (conventionally), and usually follow a specific format. To get strings in a format, we can download a package and use it: https://pypi.org/project/python-slugify/

<!-- --- -->

Let's say we had a simple program like the following

```python

import slugify

def make_url(input_string):
  return slugify.slugify(input_string)

```

You can also just import the function directly (`from slugify import slugify` = in the format of `from module_name import function_name`), and then you don't need to worry about the module name when invoking the method.

<!-- --- -->

#### Package dependencies at the project level, requirements.txt

- It's not as hard as you might think
- https://note.nkmk.me/en/python-pip-install-requirements/
  - First: `pip freeze > requirements.txt`
  - Then when installing your program somewhere else: `pip install -r requirements.txt`

<!-- --- -->

#### Preview: Git (with Git bash), SourceTree, and GitHub (remote repository host)

- Git is a version control system. There are other options too, but Git is probably the most popular.
- Version control systems track the changes you make to files over time, and are absolutely essential to the software development process, especially when working on a team of developers.
- Today we will just be downloading and setting up a couple tools. We will get into specifics in our next lesson

{{% /content %}}

{{% transcript %}}

### Video transcript

<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4">0:04</a> - all right so uh today is march 24th and uh today we are going to be continuing<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=10">0:10</a> - on uh in our series here of learning programming and this is going to be the second day here<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=17">0:17</a> - uh of us uh moving uh faster so uh yesterday we had uh started downloading<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=24">0:24</a> - things on my friend's computer to get the development environment set up and today we're gonna keep doing uh that<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=30">0:30</a> - sort of setup procedure uh working with python and visual studio code uh so here's the outline of things that we are<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=37">0:37</a> - going to focus on today uh we're going to uh first off we're going to go over we<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=42">0:42</a> - spent the last few minutes yesterday trying to figure out this reason why i wasn't able to send key presses over<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=49">0:49</a> - uh the chrome remote desktop application that we're using here um<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=54">0:54</a> - so we did end up figuring that out it was actually on my end i'll go over that we'll talk about python virtual<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=60">1:00</a> - environments which we kind of brought up some yesterday but we'll actually experiment with them a little bit and talk more about them today we'll talk<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=66">1:06</a> - about setting up a launch configuration in vs code what exactly that means and how that controls how you run your<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=72">1:12</a> - applications we'll talk about python packages so library files that we can use in our code applications uh the<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=79">1:19</a> - python package index so finding python packages that you can use and then pit<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=84">1:24</a> - which is the python package manager here um and so just how we had chocolatey as a package<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=90">1:30</a> - manager for windows pip is a package manager for python then we'll go over package dependencies<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=96">1:36</a> - at the project level so that's managing groups of packages how you track them how you stabilize so you pick a set<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=103">1:43</a> - version and you don't let the version go above that so that your code doesn't break if things change<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=109">1:49</a> - in the version and then we'll talk about the requirements.txt file which is conventionally how python applications<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=116">1:56</a> - store their lists of packages finally i will work on installing git at the end of<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=122">2:02</a> - today for you so it gets a version control software we'll also install sourcetree and we'll look at github<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=127">2:07</a> - the website again here probably won't do a great deal with it today just because it would get very<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=134">2:14</a> - late probably but we'll at least get it set up so that we can go over it the next time we meet<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=139">2:19</a> - so that's our plan for today so first off uh i took me some troubleshooting uh<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=144">2:24</a> - the end of yesterday after we stopped recording but um there was a plugin i used for google chrome called vimium<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=150">2:30</a> - that lets you do some cool stuff in the browser with key bindings but i hadn't realized that it was<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=156">2:36</a> - actually activating on the chrome remote desktop tab which is how we're doing the sharing screen so that's why some key<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=162">2:42</a> - presses were getting intercepted so anyone else use this chrome remote desktop if you have uh some<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=169">2:49</a> - extension in your browser like vimium so vm is not the only vim emulator for the browser but it's one of them well if you<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=174">2:54</a> - have one of those things you might want to disable it when you're using chrome remote desktop otherwise you end up with<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=180">3:00</a> - books like we had so that's what it was yesterday for us there and so where we're going to start here<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=186">3:06</a> - today is with virtual environments in python so if we go find the folder that we were working in yesterday we made<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=192">3:12</a> - we've made a folder in your downloads folder called python-example and if we go find this folder here you<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=198">3:18</a> - see these folders here that start with dot v-e-n-v right here this is the virtual environment folder<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=204">3:24</a> - and so we're going to go ahead and just start fresh today so i'll go ahead and delete the one that we made yesterday<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=209">3:29</a> - towards the end when we were experimenting there and so see there's a whole lot of stuff in this<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=214">3:34</a> - folder right and that's because when python sets up a virtual environment remember how i talked yesterday about<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=220">3:40</a> - how it's basically building its own box um so you see here is another folder with<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=226">3:46</a> - uh a dot uh so-called doc files are configuration files and folders um so<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=232">3:52</a> - dot vs code is a folder containing files related to configuration for the project in visual studio code and that one's our<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=239">3:59</a> - launch file which we'll go ahead and update a little bit later today so now let's go ahead and we'll open up a vs<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=246">4:06</a> - code on your system again here so ps code<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=252">4:12</a> - and it should probably open in the directory that we have been in for our python example application here<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=258">4:18</a> - um so<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=265">4:25</a> - here was me trying to test my keyboard towards the end of yesterday<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=271">4:31</a> - all right so this was just our normal hello world application right um<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=276">4:36</a> - and uh so at the moment we are just in this directory uh remember we talked about<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=282">4:42</a> - the command line yesterday and do you remember what the three commands that we talked about were<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=288">4:48</a> - yes there was ls there was cd and um<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=294">4:54</a> - was the last time we just had clear uh just the command to clear the console stream right so we<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=301">5:01</a> - want to see what's in this folder right here we do ls if we want to clear we do this and if we want to go<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=309">5:09</a> - oh i don't know let's go into the vs code folder uh we can cd there and then<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=314">5:14</a> - if we ls there we'll see the launch file right and actually um so cd takes it as an argument it takes<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=322">5:22</a> - in a path right and by convention uh dot dot means the directory above the<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=329">5:29</a> - directory that you're currently in so right now we are in the directory vs code<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=334">5:34</a> - and two dots means we're gonna go one directory up python example so actually one dot one dot represents the current<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=341">5:41</a> - folder so if you do don't slash like this if you do dot slash like this then i press tab it will auto complete to just<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=348">5:48</a> - the files in this folder so dot dot is the current folder and so we do dot slash and then i press tab it will auto<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=355">5:55</a> - complete to launch or it would if it was a directory but you know cd doesn't operate on files but<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=361">6:01</a> - dot dot means go to the directory above this one so that'll be python example here all right so that was just those<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=368">6:08</a> - were the command lines things that we did yesterday so right now what we are going to be focusing on<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=374">6:14</a> - is um making a virtual environment so if you remember at a high level uh what we talked about was that virtual<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=380">6:20</a> - environments take everything relating to an application and they kind of put it all in its own box so each application<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=387">6:27</a> - is running in its own box it doesn't care about the other applications or what things the other applications use<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=393">6:33</a> - because we want all of our stuff to be specific to our application and the reason for this is if you globally<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=399">6:39</a> - installs things so you install it in like the global scope so if you try to install one package and<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=405">6:45</a> - use the same package in different applications but what happens if your applications all use different versions<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=410">6:50</a> - of the package and if you remember we talked some yesterday about this idea of deprecation<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=416">6:56</a> - of libraries that you use in your code not always staying the same sometimes they make breaking changes<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=421">7:01</a> - um and so if different applications depend on different versions of a library and you<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=427">7:07</a> - only have one version of the library suddenly you're going to start getting bugs in your code and it's going to be very hard to track down and keep track<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=433">7:13</a> - of and so why not all up front let's just give each application its own set of packages<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=439">7:19</a> - that way when the application uses its libraries it won't get hung up with<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=444">7:24</a> - other applications uh so uh usually this is just by far the most<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=450">7:30</a> - headache-free way to do this um you want your programs applications to not or<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=455">7:35</a> - sorry your programs libraries not interfere with any other programs so this is definitely considered best<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=460">7:40</a> - practice this is what you want to do um so if you install things to the global name<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=466">7:46</a> - space you don't have to set up virtual environments arguably it's a little bit easier but the problem is then then you start getting conflicts as you build<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=473">7:53</a> - more applications so we definitely want to start with virtual environments from the very first day<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=478">7:58</a> - unfortunately as you'll see it's really not that hard so that is what a virtual environment is<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=483">8:03</a> - conceptually it's this way to organize all of the information relating to our application specifically so that it<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=490">8:10</a> - doesn't conflict with other applications we want to keep everything isolated in its own box<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=496">8:16</a> - staying in its own lane basically so that even if we have multiple versions of python on our system or<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=502">8:22</a> - multiple applications depending on different versions of libraries none of that stuff will conflict with each other<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=508">8:28</a> - so conceptually does what i'm saying makes sense i think so i want to ask a question i<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=515">8:35</a> - hope will verify for me so if you're working in vs code for example<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=521">8:41</a> - and we we're building two [Music]<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=526">8:46</a> - uh applications it's not what we're talking about like<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=532">8:52</a> - um let me open that so here for example if if i'm making a<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=540">9:00</a> - storefront application then everything we're working with all the information<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=546">9:06</a> - we're working with is in one place if i were to be working on another application in vs code as<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=553">9:13</a> - well everything i all the information i'm using is also is that is that sort of thing you mean<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=559">9:19</a> - so it's actually based on directories uh you remember at the very beginning of today i deleted the directory called<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=565">9:25</a> - venv within this folder so the virtual environment lives within<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=570">9:30</a> - your projects folder and so if you have two different projects they'll be in two different folders with<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=577">9:37</a> - two different virtual environments i'm not sure if that's answering exactly<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=582">9:42</a> - what you're asking um yeah it kind of is two different projects<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=588">9:48</a> - will have two different virtual environments right now you can also have multiple python<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=595">9:55</a> - files in the same virtual environment um okay so<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=600">10:00</a> - there's no reason why you can't do that either it's just the point is it's a way for you to encapsulate<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=605">10:05</a> - a certain set of libraries and uh the python version you're running with and<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=611">10:11</a> - all of that stuff you you basically say this is the standard of the things that i'm using<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=617">10:17</a> - here um this is like my list of dependencies um and so if you have multiple things to<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=624">10:24</a> - share the same list then they can live in the same virtual environment but if you have a different<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=629">10:29</a> - application with different requirements then they'll be in different ones um<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=635">10:35</a> - i think what i want to be clear about is whether applications here is the same as projects or<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=641">10:41</a> - if they me if they mean something else i mean so generally speaking you would<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=647">10:47</a> - want you know an application uh can contain multiple functions that do multiple<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=654">10:54</a> - things right and uh especially as things get bigger you might you might break it into like modules like you might have<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=660">11:00</a> - one part of your application that oh i don't know displays information to the user and another part<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=666">11:06</a> - that does like operations calculations on the information and you might choose to organize your code into multiple<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=672">11:12</a> - different modules but they're all part of the same application right so<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=677">11:17</a> - i would say if you have one script that is uh i don't know let's say it's doing<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=682">11:22</a> - something with video files you're you're like basically you're sticking video files together on the command line or something that's what one script does<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=689">11:29</a> - and then you have another script that like replaces text in some of the text<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=695">11:35</a> - files on your system those two scripts have nothing in common you really shouldn't have those living in the same<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=700">11:40</a> - virtual environment you should split them up because those conceptually are two separate applications doing two different things right so one<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=707">11:47</a> - application can be composed of multiple components but<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=712">11:52</a> - i would track this in your head by you know like actually<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=718">11:58</a> - an application has a certain set of requirements that does a certain thing um you see what i'm saying<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=725">12:05</a> - when we call the storefront application that the what we were working on<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=731">12:11</a> - can we that's the education is that sort of thing you mean<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=736">12:16</a> - yeah um but i mean i'm trying to see where the the<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=741">12:21</a> - disconnect is here um i mean i i understand it can be a little bit hand wavy because<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=748">12:28</a> - what is the difference you know obviously an application can do many different things and why do we call it<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=753">12:33</a> - one thing if it does multiple things right where is the line between one application and multiple applications<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=760">12:40</a> - i would think of it like this if you were a user would you conceivably ever use one part of it alone without<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=767">12:47</a> - everything else if the answer to that question is yes then they're multiple applications if they answer that question is no then<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=773">12:53</a> - they're not so in the storefront application would the user ever would the user ever<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=779">12:59</a> - be like uh for example making a transaction buying a product<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=784">13:04</a> - if they didn't have the rest of the storefront running you know so they had to be logged in as a user and they had to know the other stores around them and<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=791">13:11</a> - things right you see how it's all kind of dependent um and so the answer would be in that<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=796">13:16</a> - specific case they wouldn't ever use that part of our application in isolation without everything else<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=803">13:23</a> - but if you have multiple things that really don't depend on one another where<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=808">13:28</a> - you might conceivably use one all alone without needing the rest of it then arguably that doesn't really belong<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=815">13:35</a> - in the same application okay so there it is so we have a project<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=821">13:41</a> - that's actually made up of multiple applications is that it now there is a design paradigm uh<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=829">13:49</a> - especially in web architecture called microservices um this is getting a bit ahead of ourselves<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=835">13:55</a> - you may have heard of the difference between a monolith application versus microservices uh<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=841">14:01</a> - that is about microservices yeah so uh microservices the idea is you want to<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=846">14:06</a> - keep each application will do one thing and basically one thing only a separation of concerns uh there are some<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=853">14:13</a> - advantages when you're deploying to the web scaling wise it load balance is better it can handle traffic easier uh<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=860">14:20</a> - if one part of your application goes down so i don't know something handling like uh<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=867">14:27</a> - like updating user information or something well<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=872">14:32</a> - whatever in the wider application this network of of meshed<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=878">14:38</a> - microservices whatever depends on the thing that's currently having problems won't be accessible but everything else<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=884">14:44</a> - will still work whereas in a monolithic application if you get an error it will take the entire process down<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=889">14:49</a> - this also gets into how programs run on your computer you may have heard of<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=896">14:56</a> - multiple processes versus multiple threads that probably doesn't mean too much to you right now<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=902">15:02</a> - but um if you have a single process that means that<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=907">15:07</a> - conceptually one thing is running on your computer and so if there's an error in that<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=913">15:13</a> - process if if your program's running there's an error in the program since there's only one program it's going to like obviously kill everything right but<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=919">15:19</a> - if you have five programs running and something dies in one of the five programs then the other four programs<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=925">15:25</a> - can keep going right as long as they don't depend on the one that died um so there are some advantages to microservices one downside<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=932">15:32</a> - of it is that well you have to maintain five separate things and they have to talk to each other at least much of the time they do they<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=938">15:38</a> - need to pass information or keep track of state it gets very complicated very fast um<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=944">15:44</a> - now we're getting a little bit ahead of ourselves here but for the purposes of what what has its own virtual<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=951">15:51</a> - environment what is his own application i wouldn't sweat the details for now um<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=957">15:57</a> - if there's nothing bad is going to happen most of the time if you have multiple things in the same<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=964">16:04</a> - project because maybe much of the time maybe one part of your code will use a certain library but it's<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=970">16:10</a> - probably not going to be used everywhere in your code right and so if things have slightly different<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=976">16:16</a> - purposes as long as they're all kind of working together uh in one thing conceptually and like i<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=982">16:22</a> - said the lines can get really blurry because you might have an application that handles multiple different aspects of something and each function could<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=990">16:30</a> - arguably be its own thing but what i'm saying is is that there's not a wrong answer to this um<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=996">16:36</a> - it kind of depends how you break down your code and you split it um for us right now we're probably not<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1002">16:42</a> - gonna we're not gonna be working on something so big that we're gonna split it into a lot of different microservices that's just<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1008">16:48</a> - i mean like that's just this is not where you start anyway in development generally because it's more<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1014">16:54</a> - complicated like i said you have to have them talking to each other and it adds a lot of of uh coding complexity even<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1020">17:00</a> - though there's like performance advantages to it um okay i think i understand the virtual<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1027">17:07</a> - environment thing a bit more now so essentially it's not that um [Music]<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1034">17:14</a> - your entire code will be will [Music]<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1048">17:28</a> - for our purposes right now anytime you're writing one project everything will be in the same<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1054">17:34</a> - virtual environment um yes there's a rule of thumb for now that's what we're getting more complicated<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1061">17:41</a> - when it gets larger and more complex and you might have multiple virtual environments well<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1066">17:46</a> - you might but you might not there's plenty of large enterprise level applications that are still monoliths um<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1073">17:53</a> - in which case they would share the same package dependency the same library because the same thing is running so the<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1079">17:59</a> - answer is not it's not it's not as clear-cut as that um it really depends<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1086">18:06</a> - yeah um so for now i would just emphasize that if you have different projects so it's<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1092">18:12</a> - easy when we're talking about different projects right things that are obviously different and in those in those cases<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1099">18:19</a> - you have different virtual environments um where it gets messier is if you have one project but you're splitting it in a<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1104">18:24</a> - certain way but just don't worry about that for now that's what i'm saying um<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1110">18:30</a> - okay so that's virtual environments um managing all of your packages and dependencies uh in one place so that you<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1117">18:37</a> - don't pollute the general system with it and cause conflicts elsewhere um<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1123">18:43</a> - so the command to make a virtual environment uh you can just copy this is our python program right we give it a<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1130">18:50</a> - flag the m flag for make virtual environment and then we name the virtual environment we give it a folder name and<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1136">18:56</a> - conventionally you put it in a dot a folder that begins with a dot these are<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1142">19:02</a> - hidden folders and this is the a folder called venv for our virtual environment so we'll go down in our<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1148">19:08</a> - terminal here and we're inside the python example folder this is where our test.pi file is and so we'll go ahead<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1156">19:16</a> - and we will run this command to make a virtual environment and so<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1162">19:22</a> - when we run this command you see that we made the the folder there and vs code will say hey we noticed that you just<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1168">19:28</a> - made virtual environment you want to select it for the work workspace folder we're going to go ahead and say yes this is the virtual environment we want to<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1174">19:34</a> - use for this project and then if we click yes there vs code will just go ahead and it will do the rest and so<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1180">19:40</a> - you'll see right here the shell is actually working it's kind of building stuff and you know that because you<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1185">19:45</a> - haven't seen this thing right here um like the prompt that's what it's called we haven't seen the prompt return<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1190">19:50</a> - to us yet so because of that we know that it's just sitting here it's it's building stuff at the moment so it'll take it a while<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1196">19:56</a> - because there's a fair bit to scaffold into i mean we're not we don't really need to worry about what exactly goes on in the virtual environment but you see<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1203">20:03</a> - now the prompt has come back to us so that means it finished right um okay<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1208">20:08</a> - so uh the next thing you do after you build a virtual environment is you need to activate it because right now if we<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1214">20:14</a> - run a command to install a package right now it's going to install it at the global level because the python we're using is<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1221">20:21</a> - the global level versions of python and it's going to install packages globally and so if we want to install a package<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1227">20:27</a> - only for this project in this virtual environment we need to do what's called activating the virtual environment and<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1232">20:32</a> - so to do that um for us specifically here uh this is the<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1238">20:38</a> - this is the location of the script to activate it it's in our virtual environment folder<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1244">20:44</a> - in a folder called scripts and the program is called activate and so if we copy this remember i said the<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1250">20:50</a> - current files path is or sorry the current directory's path is just a single dot you see dot slash<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1257">20:57</a> - means we're in the current directory we go into the virtual environment directory from the current directory then the scripts folder and then the<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1263">21:03</a> - activate script and the directory we're in right now is python example and you can see that in the prompt here<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1269">21:09</a> - okay so we do that and once we execute that you'll see now that we have this green thing in parenthesis over here<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1275">21:15</a> - telling us hey we have a virtual environment active yeah<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1280">21:20</a> - makes sense so now we're actually in the virtual environment here anytime we install a package now we'll install it<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1286">21:26</a> - inside of the virtual environment we run we run inside the virtual environment and things like that okay<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1293">21:33</a> - so that really wasn't so bad right two commands right one command to build it the very first time and after you built<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1299">21:39</a> - it you never have to build it again after that the only thing you need to do is when you're starting up your project you just need to remember to activate<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1305">21:45</a> - your virtual environment so that the things that you do to modify packages and stuff only happens inside of this<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1311">21:51</a> - specific space um and that's it but for now for our purposes<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1317">21:57</a> - you don't have to worry about anything other than that just make sure you remember to do it and that will keep everything nice and sandboxed on your<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1322">22:02</a> - system and that way your projects will never conflict with each other um<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1328">22:08</a> - but you know it's another step in what we need to do to properly work on python projects locally here so that's why we<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1334">22:14</a> - had to cover it<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1340">22:20</a> - all right so do you have any more questions here or are we good to go ahead and move on just for clarity in my<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1348">22:28</a> - head um the bush bits actually<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1354">22:34</a> - says we are we are still in the python example folder within that forward find<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1360">22:40</a> - scripts of our rather the personal environment right within the example we find the<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1366">22:46</a> - virtual environment folder then in the virtual environment folder we find the scripts<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1371">22:51</a> - right and then activate scripts<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1377">22:57</a> - so over here in the sidebar we can actually go find this so this is what happens when you expand the virtual environment folder so right now the<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1383">23:03</a> - folder that's open in the sidebar is the python example folder so it's this is<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1388">23:08</a> - its absolute path on your file system so we have the c drive users and then your name and then downloads because we put<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1395">23:15</a> - it in the downloads folder and then python example that's the name of this directory here then inside that we have<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1400">23:20</a> - the dot v env folder which includes a scripts folder and the scripts folder<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1405">23:25</a> - includes something called activate so there's a there's a batch file and a powershell script<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1411">23:31</a> - um probably running the powershell script here so if we wanted to deactivate<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1419">23:39</a> - go ahead so when when we do the dot slash what we're actually saying is that we we<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1425">23:45</a> - instill in the python example directory okay now it will work fine if we don't<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1432">23:52</a> - so the thing is i auto-complete it and when you auto-comp so let me type it out so if we want to deactivate<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1438">23:58</a> - we can go to the scripts folder again and then there's a script called deactivate which will deactivate our current virtual environment so<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1445">24:05</a> - this time i didn't put um<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1452">24:12</a> - well i guess i guess we don't have the deactivate here as maybe a control c out of it<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1460">24:20</a> - no well that gets rid of the terminal<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1466">24:26</a> - completely not entirely what we wanted um now we reopen it now we're not active<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1471">24:31</a> - but uh all right well anyway um basically uh vs<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1477">24:37</a> - code smart there's no reason why you'd want to be inside this folder without your virtual environment active so<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1483">24:43</a> - um i believe vs code smart enough at least i think it is in my project and i i think once you once you associate the<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1489">24:49</a> - virtual environment with this folder whenever you open this folder in vs code it will activate the version environment<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1495">24:55</a> - for you so you never have to actually remember to do anything to it again okay<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1506">25:06</a> - okay so that's virtual environments now they'll become important in a second here<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1512">25:12</a> - because oh my goodness why is it well i guess i can't scroll through it<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1519">25:19</a> - so we were just talking about virtual environments um the next thing that we're going to do before we get into<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1525">25:25</a> - packages here is we're going to set up a way to launch our file so if you remember right now if we press<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1531">25:31</a> - f5 that's the run command here or we go to this this view here<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1537">25:37</a> - we have something here this is called a launch configuration for launching the current file and so if<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1543">25:43</a> - we had more than one python file it would only ever launch the file that we were currently in which isn't<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1549">25:49</a> - necessarily what we want if we had a main application file you know here let me actually do it just so that you'll<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1555">25:55</a> - see so oops um let's go here and let's add a file<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1562">26:02</a> - called file file<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1568">26:08</a> - [Music] here's an underscore child file dot hi okay so this one could be like a library<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1576">26:16</a> - or something and so we can just print here you know like<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1582">26:22</a> - inside file okay and uh inside test.pi let's say this was<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1588">26:28</a> - our main file we could print um<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1595">26:35</a> - right here okay so if we are inside this file in the text editor<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1601">26:41</a> - um these two files will be different um so if we are inside the child file right<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1607">26:47</a> - now and we use the launch configuration that runs the current file you'll see when we watch<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1613">26:53</a> - here that what gets printed out should be inside child here<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1618">26:58</a> - so it's going to activate the virtual environment then it's going to run child file and so you can say inside child okay and<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1624">27:04</a> - that's because we pressed we we launched our launch configuration inside of that file now when we have this file active<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1631">27:11</a> - and we press f5 it's going to say inside parent because we're going to run it again<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1637">27:17</a> - so and get that out of the way um<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1642">27:22</a> - we're going to run it again and now it says inside parent right<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1648">27:28</a> - okay so you see how what happens if we always want to run the same file no matter where we are<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1653">27:33</a> - because very commonly you'll be breaking your code into multiple different files and then you'll import stuff from one file to another once your project gets<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1660">27:40</a> - bigger most of the time you want to be running your project as a whole right not just the specific file<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1667">27:47</a> - you're in so yes let's go ahead and um so<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1672">27:52</a> - if we want to add the configuration this is going to open up the launch json file here and this is what it looks like<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1678">27:58</a> - so the file here it says is is going to take in this<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1684">28:04</a> - this app this thing right here rather than being an actual path right now is<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1689">28:09</a> - just taking in the current file um so let's change this<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1696">28:16</a> - to say run the test application that's what<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1701">28:21</a> - we'll call this and then rather than passing in the current file that's what this<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1706">28:26</a> - uh that's what this thing does right here with the ah come on don't cover<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1712">28:32</a> - with the file injected into the parameter there let's just type in<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1718">28:38</a> - testosterone so from our application folder this is takes in the path to<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1723">28:43</a> - where uh the file that we want to run is and so um you know let's just call this rather<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1729">28:49</a> - than that whole longboardy thing let's just call this test like that and so now we just modified it so that our program<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1736">28:56</a> - will always launch test.pi which will contain the main program rather than the child one okay so if we<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1742">29:02</a> - save this file this file like i said yesterday this is a json file a json is<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1749">29:09</a> - you see these curly braces and brackets and stuff that is the syntax specified for storing information in json<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1757">29:17</a> - and so uh this is used for configuration of setting up now you could have your<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1763">29:23</a> - different things uh set up here so right now we just saved this we call this test so if we run test here<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1770">29:30</a> - um and this is the configuration that we use for launching then you'll see that this should this should print inside<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1776">29:36</a> - parent because we're just going to run test.pi um right there okay<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1782">29:42</a> - so now no matter which file we're in even if i go over here to the child file and i run the program when i'm inside<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1789">29:49</a> - the child file like i am right here it's still going to print the parent one because we set up our<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1795">29:55</a> - launch to always execute the parent does that make sense so<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1801">30:01</a> - um that that that means that if we make<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1806">30:06</a> - if we make a particular file the main file that we always want things<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1813">30:13</a> - to run there and build things like this child let's just say child files like that what we<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1819">30:19</a> - would do is actually kind of connect the files between it<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1825">30:25</a> - between them and the parent so that when you walk around the main program it actually<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1831">30:31</a> - runs all the stuff in the other one that's needed am i guessing<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1837">30:37</a> - okay so let's say in the child file we define a function like this print message okay<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1843">30:43</a> - so it's not going to take in any parameters we're just going to print the string hello world okay so print<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1853">30:53</a> - hello world very normal you know beginner application here okay so<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1859">30:59</a> - uh this is the only thing for now that we'll have in this file so right now the child file just contains a single<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1865">31:05</a> - function definition right yes so now if we come over to our test<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1870">31:10</a> - file over here what we can do is we can say from<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1876">31:16</a> - so we can actually import that function from<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1881">31:21</a> - child file yes i think this should work um<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1888">31:28</a> - we have print underscore message<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1903">31:43</a> - now uh we'll find out real fast if this will work or not it might say can't find it<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1909">31:49</a> - um<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1914">31:54</a> - oh no it works fine right it works yes so that's the idea of having multiple<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1921">32:01</a> - files like that and deciding to make one in one that always runs if you if you<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1929">32:09</a> - set things up like that yep and then you'll import things from your library your modules that you write into your<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1936">32:16</a> - main program file this is this is the way in which you write programs 100 of the time um if you have<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1943">32:23</a> - a big interconnected program you'll break it down into smaller bits and pieces so that it helps you think about<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1949">32:29</a> - it so it's easier to work on one thing at a time and then you'll combine it all in your your main program<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1956">32:36</a> - that's the one that you will always run um so in the launch setting here uh you know<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1962">32:42</a> - maybe you don't call it test output maybe call it main.pi maybe you call it whatever but you'll almost always be running just one file 100 of the time<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1969">32:49</a> - and you don't need to worry about other things for now i mean eventually uh launching it you might launch it in a<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1976">32:56</a> - debug mode versus a release mode or launch it in a different environment for comparing if you're deploying to a<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1982">33:02</a> - server we're not going to worry about any of that for now for now you're going to pick whatever file you're designating your main file you're going to set up a<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1989">33:09</a> - launch configuration for that and then you'll reference any other files that you write in your main file<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=1997">33:17</a> - since i understand okay great so now we've set up a launch<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2002">33:22</a> - configuration we can run our application here our test.pi application uh just by<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2008">33:28</a> - going to the run menu here i mean so it's ctrl shift d if you want to always just pull this up immediately or you can<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2015">33:35</a> - just press f5 and it will run the currently selected watch configuration uh which is we only have one right now<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2021">33:41</a> - so um yeah we'll get more into hotkeys and stuff later um very useful because they<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2026">33:46</a> - save you a lot of time once you've memorized them all right so um that is setting up our<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2032">33:52</a> - launch configuration here for our application um and uh oops i forgot i can't use the<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2038">33:58</a> - scroll wheel because of whatever bug um all right so now that we have our<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2047">34:07</a> - uh application up and running the next thing that we might want to do is we might want to install a package um so<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2054">34:14</a> - packages are programming libraries they're code that other people have already written and as much as possible<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2060">34:20</a> - we don't want to reinvent the wheel so if someone else has already solved a problem that we want to solve<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2067">34:27</a> - why don't we just use their code rather than writing it ourselves right it saves time and uh and you know just makes lots<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2074">34:34</a> - of sense right so um this what you see right here um pypi.org<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2081">34:41</a> - um i'm not actually sure how you pronounce it i've only ever seen it written pie pie maybe that's probably how i pronounced it pie pie uh the<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2087">34:47</a> - python package index so pis is an acronym stands for package index this is where you go to find packages that you<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2094">34:54</a> - might want to use um so like trending projects well tensorflow very famous thing for<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2101">35:01</a> - machine learning um you know there's another package called numpy like n-u-n-p-y uh that's<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2107">35:07</a> - used a lot in data science stuff um you know different different packages used<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2113">35:13</a> - for different things um you know i mean as i most of these<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2118">35:18</a> - things probably don't mean too much to us you know a cryptocurrency trading library all<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2123">35:23</a> - right interesting huh if you want to trade cryptocurrencies now there's a python app there's python package for that and what you'll realize very<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2130">35:30</a> - quickly uh especially for popular programming languages um python is among<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2135">35:35</a> - the most popular so python c-sharp javascript java see<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2140">35:40</a> - i'd say probably those are the most common production leverages i think probably i'd have to go look at the<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2146">35:46</a> - statistics but javascript is probably the most common uh python it may be second<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2152">35:52</a> - java c-sharp are up there too all of these things will have packages<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2157">35:57</a> - to do most things you want to um every once in a while you will have to write stuff<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2163">36:03</a> - yourself but many many many of the things that you would want to do someone else has already written the code for now what<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2169">36:09</a> - your responsibilities developer will be is you need to go find a package that does what you want and then you have to read how to use it<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2176">36:16</a> - because even if someone else has already written the code you need to know what inputs to pass the functions for example<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2181">36:21</a> - and what the functions will return and the format that they'll do things and you see what i'm saying right like<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2187">36:27</a> - just because someone else has already done the the coding part of whatever you want<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2192">36:32</a> - to do you still need to understand how to use it um and so uh this is where you go and actually not<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2199">36:39</a> - here i would not usually recommend that you go straight to pi pi and you try to find something what i would do is i would 100<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2206">36:46</a> - google how do i do x in python and on stack overflow or some other site you'll<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2212">36:52</a> - come up with someone saying oh just use this library and then you go search for the library and pipeline right um<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2218">36:58</a> - and the reason why we do this is because you can find the official package uh the package names here and you'll find the<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2223">37:03</a> - command to install them uh so i'll give you the example that we're gonna use use we're going to use an example here for<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2230">37:10</a> - making a string url safe so it's called sluggifying the string um so a url is this is this<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2237">37:17</a> - string that we put up in the address bar in our browser right you see right here it says programming dash teaching dash<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2243">37:23</a> - series right that has a dashes in the path well you don't have spaces inside of urls i<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2250">37:30</a> - don't know if you've ever noticed that but you don't yeah and so there's a certain way in which they're formatted<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2256">37:36</a> - right and we're not going to worry about some of the icky specifics of this but we're just using this as a simple example um so<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2262">37:42</a> - if we want to take in an arbitrary string and we want to convert it in the format that will be like valid to use in<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2268">37:48</a> - a url so actually the slug is not this full path because we have things like<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2274">37:54</a> - the domain name up here uh the slug would just be the path once you're once you're in like the file structure part<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2280">38:00</a> - of it it would be like this uh rather than like the domain name and uh the connection type so if you http versus<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2286">38:06</a> - https and stuff like that or the port number we're not gonna worry about any of that the slug is just like the name<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2293">38:13</a> - of whatever it is you're doing right but if you have spaces in it it's not gonna be a valid url right so if we want to<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2299">38:19</a> - take in an arbitrary name maybe of a file or a path on our system and then we want to make it in a form such that we<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2305">38:25</a> - can publish it to the internet it needs to be a valid url right so that's what this package here will do so we'll go<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2311">38:31</a> - open this package on pi pi um uh python dash slugify it's a it's a<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2316">38:36</a> - package here it takes in unicode strings and then it tries to to create a slug for it something that<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2322">38:42</a> - you can reference in a url um so you can see that there's a version for python 2<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2328">38:48</a> - and a python 3. of course we'll get the python 3 version when we install it here and when you go find it on slugify right<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2335">38:55</a> - you can see that you know like there's a some information about uh who has this<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2340">39:00</a> - if we want to go look at this we could probably go find see if we go to the home page it<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2346">39:06</a> - looks like this this project is hosted on github which we'll talk about towards the end of today this is one of those uh<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2354">39:14</a> - code repositories online so you can see uh the guy who maintains this<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2359">39:19</a> - um you know has you know a number of commits to it and the last commit was<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2364">39:24</a> - like it says like 30 26 days ago or something and you know you can see all the information this is<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2370">39:30</a> - the package uh someone has made this free to use and you can check the license on it that's actually kind<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2376">39:36</a> - of important depending on how you're using your project um different kinds of software line systems<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2381">39:41</a> - i don't want to get off to uh uh too off topic here um if you see a license that's either mit that's this<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2388">39:48</a> - one or apache or oh what are other common one those are probably the two most common like<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2394">39:54</a> - so-called permissive licenses where basically if something's licensed on mit when you use it in your own code you<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2400">40:00</a> - have to say hey i got it from this guy i didn't write this you know you can't like claim it as your own code but that's about it like you can use it for<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2405">40:05</a> - anything uh commercial applications whatever um open source right um<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2411">40:11</a> - and uh uh licenses that are more restrictive uh there's a license called the gpl license uh<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2418">40:18</a> - put out by the the gnu software foundation um so gnu is the acronym there uh the gpl uh<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2425">40:25</a> - they're on version three now the gpl v3 is uh so-called copy left license that<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2430">40:30</a> - basically whenever you use that license anything that uses code that's licensed under that also has to be open source<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2436">40:36</a> - and copy left has to use the same license um so it's popular in the free software community that's like really<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2442">40:42</a> - big on like privacy and uh you know open source everything uh but it means that commercial<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2449">40:49</a> - applications will tend not to use their code um so um i would say the vast majority of stuff<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2456">40:56</a> - on github is probably mit or apache um i i have to go check the statistics on it but um these are the open source<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2462">41:02</a> - licenses that are basically like yeah just make sure you give credit where credit's due but other than that you can use it to your heart's content um<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2469">41:09</a> - so this one's mit right this is the package i mean you see they have some examples here and uh<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2474">41:14</a> - you know like different parameters and we're not going to do anything complicated here right so there's some regular expression matching and stuff<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2480">41:20</a> - but um so that's where this package lives but to install it if we go on pi pi you'll see that it just gives you the<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2487">41:27</a> - pip command right so we are using pip as our package manager here there's other ways to do it but for<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2493">41:33</a> - now we're going to use pip and so this will be the command that we run here pip install<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2498">41:38</a> - python-sluggify that's all we need to do to install the package in our virtual environment so here we are if we go back<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2505">41:45</a> - here you'll see that now in our terminal we have our virtual environment active right<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2510">41:50</a> - so we have this venv active and green over here we just copy paste that in<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2515">41:55</a> - here and we say pip install python's lockify this will actually download the package<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2520">42:00</a> - for us and uh well okay i guess you have<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2527">42:07</a> - i just x out of that i don't know if it'll work but it looks like it's gonna work okay so downloaded it downloaded it downloaded it successfully installed<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2534">42:14</a> - and uh you see it installed the dependency there's a reason why i picked this one see text dash<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2540">42:20</a> - uh you you need decode right here that package well you might say but stephen we just<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2546">42:26</a> - installed this package why'd we install something else so this is the idea of the package dependency<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2553">42:33</a> - this is one of the reasons why managing packages is such a pain in the butt um because<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2559">42:39</a> - if one package depends on a certain version of something and another package depends on a different version of it you might end up with two versions of the<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2565">42:45</a> - same library neither one of which you actually thought that you needed because you didn't say install this it just got<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2571">42:51</a> - installed when you installed something else right so hopefully what i'm saying maybe maybe<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2577">42:57</a> - this doesn't sound so bad to you right now i guarantee this will cause pain and suffering no matter where you work um<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2584">43:04</a> - dealing with packages and wrangling packages and dependencies for packages and somewhere sometimes something will<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2590">43:10</a> - get messed up i promise you um it happens frequently enough that everyone has to learn how to deal with it it's<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2596">43:16</a> - just one of the headaches of being a software developer if your application gets big enough especially so that you<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2601">43:21</a> - have multiple dependencies and you're relying on a lot of other code each one of those things will have<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2606">43:26</a> - its own package dependencies which may have their own package dependencies and you get the idea right it gets very complicated very fast and uh easy for<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2613">43:33</a> - stuff to get messed up um now it won't always get messed up right it's<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2618">43:38</a> - not always doom and gloom but uh it's just something to be aware of right so when we<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2623">43:43</a> - installed this you'll see how there's a number on the end of this this is the version number and this will be important we'll talk about this towards<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2629">43:49</a> - the end of today when we talk about freezing packages um and setting them up in our requirements file so<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2636">43:56</a> - anytime this package the sluggify package here gets updated we don't necessarily want to just automatically<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2642">44:02</a> - use the updated code in our application because what happens if it breaks something right remember we've been talking about that stuff gets deprecated<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2650">44:10</a> - or they add new features or they change how they do it so we in our application we want to use what we know works so if<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2656">44:16</a> - we say i'm going to use python sluggify whatever version i'm going to keep it at that version now one exception to this<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2661">44:21</a> - is you generally don't want to let your versions of things get too too too out of date especially if they're part of<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2668">44:28</a> - your application that deals with security because there will be security like patches there'll be bug fixes or<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2675">44:35</a> - improvements related to security matters so especially if you have a package dealing with like network traffic or<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2682">44:42</a> - something that is like security related you will definitely want to keep those things up to date more and it's just<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2688">44:48</a> - generally considered good practice to not let your packages get super super out of date but anytime you bump the<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2694">44:54</a> - version on something you might have to go fix a bunch of places where it breaks stuff um kind of unpleasant right this<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2701">45:01</a> - is part of software maintenance so i don't want to get off on too big a tangent but i think i've kind of uh got<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2707">45:07</a> - up on my high horse a couple times and mentioned how uh software maintenance is like a way<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2713">45:13</a> - bigger part of the software engineering life cycle than actual development is so<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2718">45:18</a> - you will spend more of your time especially if you work for a big company who has big applications you're going to<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2723">45:23</a> - spend more of your time dealing with something that already exists then you then you're going to be writing something from scratch um<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2731">45:31</a> - and a big part of the maintenance is well when the application was written we wrote it in java 8 and like angular 5<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2738">45:38</a> - for example and now we need to update it to java 12 and angular 11. and when you do that update you might<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2744">45:44</a> - think oh well everything will just work one no it won't um you're gonna have to go fix all the places where it breaks when you update the versions on stuff um<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2752">45:52</a> - so yeah um no that's enough on that um so this is packages this is our introduction to<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2758">45:58</a> - packages and um so now these are packages that we can use and so i have an example application<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2765">46:05</a> - that we're going to take in now where we use the slugify package here i'm going to remember not to scroll this time<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2773">46:13</a> - so here's our application so we're going to import the sluggify package that's the one we just installed and then we're<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2779">46:19</a> - going to have a function called make url that takes in an input string and then it solidifies the input string to make<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2785">46:25</a> - it valid okay so in our project here uh we'll go we can<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2793">46:33</a> - actually do this in the child file right there's no reason why we can't so um we'll replace that very simple<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2798">46:38</a> - function we have there with this and so we'll import slogify here and python will know what this is because we have<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2804">46:44</a> - the selectify package installed in our virtual environment right and um i'll show you two different ways<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2811">46:51</a> - of calling this function right so this is going to import the sluggify package this likify package defines a function<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2816">46:56</a> - called sluggify so we do package dot function name and we give it our input<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2822">47:02</a> - so that's how we're going to call this right now and over here we're going to go<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2827">47:07</a> - make our url so we no longer have that function name now we have something called make url so we<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2833">47:13</a> - need to make sure that we're importing the right thing from our child file here so we're instead of importing print<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2838">47:18</a> - message we're going to import make url and we're going to call make url<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2844">47:24</a> - with oh what shall we do something like huh this is a<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2851">47:31</a> - file name so we need to make it a string<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2856">47:36</a> - okay so this right here is not something that can be part of a url right it's got spaces it's got an<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2862">47:42</a> - exclamation point right so let's go ahead and let's print<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2868">47:48</a> - what happens when we make this a url right so that should<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2875">47:55</a> - what what how this will run when we run the test.pi file because remember that's what we set up in our launch<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2880">48:00</a> - configuration it's going to run this file but this file imports a function from the child file that we have which<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2887">48:07</a> - imports a package defines a function that calls the package to modify the input string<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2894">48:14</a> - is everything i just said makes sense yes it sounds really complicated right but<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2899">48:19</a> - you see we only have five lines of code here but this is why it's so important for us to understand<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2905">48:25</a> - what's calling what why does it call it how does it work how does python know where things are right if you actually<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2912">48:32</a> - understand how this runs you're gonna be good to go uh basically your programs can get pretty large you<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2919">48:39</a> - can make lots of different function calls but the actual mechanism for how things are connected won't be much<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2925">48:45</a> - different than this like ever like this is how python knows uh how to call libraries and how you call a local code<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2932">48:52</a> - files here you do import statements right so if you want to import a function you do uh from module name import function<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2940">49:00</a> - right that's this syntax here and over here we have just import module and then you call it as module.function name so<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2947">49:07</a> - typically this format right here is what you'll do because usually you won't need everything that's in a module you'll<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2952">49:12</a> - just need a function or two right but i started us out over here with the whole module just to show you that it<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2957">49:17</a> - does work fine if you do it this way too it's just usually it's considered uglier because then you have to like put the module<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2963">49:23</a> - name in front of the function every time you call it right um okay so let's go ahead and let's run i<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2970">49:30</a> - actually haven't run this i really hope it works because i was just<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2975">49:35</a> - coding this off the cuff here um so it did right and you see this is a file<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2981">49:41</a> - name exclamation point gets turned into this dash is dash a dash file name right<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2987">49:47</a> - and that is something that would look just fine in a url right yes<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=2993">49:53</a> - okay all right so let's go ahead and let's try doing the more elegant approach here<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3000">50:00</a> - so we know that we all we want to do with our selectify package we want to call this logo function<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3006">50:06</a> - so uh what that means is that we want to do from module name so our<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3012">50:12</a> - module that we've installed is called slugofont and you can just take my word for it but the function that we want to use from<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3018">50:18</a> - the sortify module is well it's actually called the same thing it's called socify but if we do this we don't have to we<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3026">50:26</a> - don't have to include the modulate anymore right so we're saying from the sockify module import the sluggify function and now it looks prettier right and this<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3033">50:33</a> - is especially important once your code gets bigger right right now we only have like one thing so it doesn't really matter that much but um<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3039">50:39</a> - eventually eventually you might have a whole bunch of different library calls that you're making and it's much more convenient to<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3045">50:45</a> - call it this way because it's easier to read in your code it's not so cluttered right<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3054">50:54</a> - understand that the two sluggifiers mean different things<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3060">51:00</a> - one of one of them is is the actual [Music]<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3065">51:05</a> - thing we're using and the other one is what contains the things yep yep so the<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3070">51:10</a> - official terms for that would be the the thing that contains the thing uh it's called it's called the module um<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3076">51:16</a> - or the library right um and within that module within that name space you might also hear it referred to as that is a<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3083">51:23</a> - function or a method and that is what we're calling right because you invoke or call functions and methods with<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3088">51:28</a> - arguments like this right so open parenthesis close parenthesis we're calling a function here it's contained<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3094">51:34</a> - inside a module that's actually kind of confusingly named the same thing um<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3099">51:39</a> - generally actually probably kind of frowned upon if you can make your module<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3105">51:45</a> - not the same name as functions and it's probably better because then at least it's a little bit clearer to people<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3110">51:50</a> - right um yes i mean this isn't wrong there's nothing wrong with it it will work just fine the compiler or the<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3115">51:55</a> - interpreter for python will know the difference between the two of them but um<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3120">52:00</a> - and it knows the difference because the syntax of this statement here is you from a module you import a function<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3128">52:08</a> - that's how this reads that's how the interpreter interprets it um so you never write from function name<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3134">52:14</a> - import a module that doesn't make any sense right because functions don't contain modules modules contain functions<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3144">52:24</a> - all right so we'll just keep on going um nothing we're doing today i just i i hope not i hope nothing we're doing<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3150">52:30</a> - today is super duper hard um this is just all the basic framework stuff that you need to write<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3155">52:35</a> - python applications locally uh in your your vs code environment in your virtual environment you know setting everything<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3161">52:41</a> - up uh getting it uh integrated now now you know how to uh find packages you<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3167">52:47</a> - know you find a stack overflow that says hey you should use this package you go look the package up on pi pi and then<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3172">52:52</a> - you you find the pip command to install it um after you install it in pip<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3178">52:58</a> - you can then reference it um by importing it you do have to use the import statement you can't can't<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3183">53:03</a> - reference it before you import it but after you import it then you can use it in your code as if it were your own code so<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3188">53:08</a> - very critical part of programming is learning how to use other people's code so that you don't have to do it all um don't<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3195">53:15</a> - reinvent the wheel ah i did it again all right so<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3202">53:22</a> - we only got a couple more things left uh the next thing that we're going to talk about now is we're going to talk about<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3208">53:28</a> - keeping track of all of the libraries that we're using in a requirements.txt file so let's say<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3215">53:35</a> - that you've made this application here and you want to send it to me and i want to be able to run your<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3220">53:40</a> - application well right now we only have one library file so you might say hey steven uh you just<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3226">53:46</a> - need to go download this logify package right so as long as you download this logify package<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3232">53:52</a> - you should be able to run my code and it should work just fine because what happens if you try to run the code without having this package installed is<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3238">53:58</a> - you'll get an error it'll say i'm sorry i can't find sluggify what's likify um<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3243">54:03</a> - and so that's what will happen if you don't install the package first right we installed the package with the pip package manager for python but when you<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3251">54:11</a> - share your code with someone else their system is just not going to inherently have that package right and so you could<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3257">54:17</a> - tell them verbally hey you need to download this before you run my application but what happens when it's not just one package or two packages<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3264">54:24</a> - what happens when it's like 50 packages and also don't remember that for to run<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3269">54:29</a> - our application you might think ah but you see i'm only importing things from one place right but you remember how<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3275">54:35</a> - actually two things got installed right so when you share your application with your friend<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3280">54:40</a> - you're well i mean actually you can just install sluggify because when they install it it'll install the other one but technically they're actually installing two packages um<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3288">54:48</a> - and so all of this is the reason why typically you want to<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3294">54:54</a> - track which packages you're using somewhere these things are called configuration files right we have a<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3299">54:59</a> - configuration file for setting up our launch the the<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3304">55:04</a> - specific parameters of how we're launching our application well here we're going to have another configuration file for specifying which<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3311">55:11</a> - packages we're using and what version of those packages we're using right um so i've made a pretty big deal today<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3317">55:17</a> - talking about how important it is to keep track of your packages and which versions you're using and not just<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3323">55:23</a> - automatically bumping versions because it might break stuff and all that um so python's way of doing this they they<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3329">55:29</a> - typically i mean it's different across different programming languages you know there are some patterns here um you know<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3336">55:36</a> - many programming languages might use like an xml document for this uh a project file or whatever that's what c<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3341">55:41</a> - does but for us here we have a text file that contains a list of packages called<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3346">55:46</a> - requirements.txt so the way in which you want to make this file you should not make this file by hand let me repeat<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3354">55:54</a> - that you should not make this file by hand um whatever package manager you're using<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3359">55:59</a> - will have a way to freeze the packages that your project is currently using and you will want to use that command to<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3365">56:05</a> - build your requirements file because the program's smarter than you it knows exactly which packages and which versions you want to use now you can<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3372">56:12</a> - update this if you want to say hey you should have this version of this package or greater<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3378">56:18</a> - you know maybe you do that or this version or less than or equal to this version or exactly you go to this version like you can tweak stuff about<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3384">56:24</a> - that um so i have a good link here you know someone's blog um and uh on this person's blog they go<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3391">56:31</a> - over uh some of the stuff you can do uh as being kind of slow come on let me<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3396">56:36</a> - click<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3402">56:42</a> - ah well lag um so this person has a good guide to it i'm<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3408">56:48</a> - just taking the the main the main takeaways but i think they have some examples he see here's the comments so<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3414">56:54</a> - aversion matching minimum version version excluding anything but this version compatible version you get the<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3420">57:00</a> - idea right there's this is the syntax for we're not going to worry about it for our purposes you really don't have to worry about it you're just going to<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3426">57:06</a> - always say hey i want this version and that's what most people will use like 90 of cases that's all you care about so<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3432">57:12</a> - we're going to let the package manager build our package file basically so we're going to copy this command here<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3437">57:17</a> - it's called the freeze command so we're using the pip package manager the pip package manager has a command called<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3443">57:23</a> - freeze and we're going to save the output of this into a file called<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3449">57:29</a> - requirements.txt now for now you can just copy paste this command i don't really want to get into<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3454">57:34</a> - this thing right here is actually directing the output of this away from the command line and it's<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3461">57:41</a> - going to output it into this text file if you don't have this it will just print it to the command line<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3466">57:46</a> - so this is so-called redirection operator um but don't worry about it for now just copy this command and use this<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3471">57:51</a> - command so we're gonna go to vs code uh we're in our virtual environment right so now<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3477">57:57</a> - we've installed the package we've run our we've run our application we want to be able to share it with someone else so we're going to go ahead and we want to<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3484">58:04</a> - build this file called requirements.txt that will contain a list of the packages that our program depends on okay so we<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3490">58:10</a> - run that command and inside of our project if we go look now it made a text file<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3495">58:15</a> - called requirements right if we open this text file hey look there's our selectify package and here's the thing<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3501">58:21</a> - that this like package depends on right and it says version double equals these so to run the application that we're<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3507">58:27</a> - building here you need the python dash slugify package and the text.unidecode package right which is a<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3514">58:34</a> - dependency of this but you know in the requirements file<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3519">58:39</a> - this is how it will install them okay so what we just did make sense right we took the packages that we had in our<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3526">58:46</a> - virtual environment and we ran a command with our package manager that said hey i want to figure out what packages i'm<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3532">58:52</a> - using right now and i want to save those to a file and then i can share that file with other people<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3537">58:57</a> - okay so now let's say that you sent this to me and i'm on my installation and someone else gave me a requirements.txt<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3544">59:04</a> - file and i said hey uh here's my application here's all the code i have but you need to install your<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3549">59:09</a> - packages first so to do that you're also going to use pip right so we saved them with the pip we're going to install the<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3555">59:15</a> - requirements file so pip has another command called install so we have the freeze command we have the install<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3560">59:20</a> - command right for now don't worry about the dash r that's a command line flag telling us to do it i think it's recursively i'm not<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3567">59:27</a> - actually sure what the flag is whatever i could look at it um but we go here to<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3573">59:33</a> - our virtual environment right so let's say that i didn't have these right in fact i'll show you what happens when we<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3580">59:40</a> - do this right now it's going to say hey you already have these packages basically it's not going to like error it's just going to be like no we didn't<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3586">59:46</a> - do anything you already have it right but if we didn't have these packages<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3592">59:52</a> - then it would install them for us right so it says requirement already satisfied we<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3597">59:57</a> - already have this package and here's where this package lives right so<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3603">1:00:03</a> - saying that it's already insight packages for us but if we didn't have these packages and you sent me this file right here<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3609">1:00:09</a> - i would actually go ahead and install the packages so do you want me to show it to you like<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3614">1:00:14</a> - we could make another python project and you know take this requirements file and<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3619">1:00:19</a> - then run this command and it would install the packages or you can just take my word for it um that it does that<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3624">1:00:24</a> - i think it gets it's how it works okay so you know what maybe maybe<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3630">1:00:30</a> - uh as an exercise you can make a completely separate python project and in fact i think that's what it would be<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3636">1:00:36</a> - good for you to do we've done a lot of things right we've set up the launch configuration we've set up a virtual<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3641">1:00:41</a> - environment all of these things you want to do this at the beginning of when you set up a new project so probably before<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3647">1:00:47</a> - we next mean i'll have you go ahead and just make a new project doesn't matter what the project does it can even just be a hello world application but for<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3653">1:00:53</a> - that to be correct for you to get full marks you're gonna want to uh you know make a new directory set up a virtual<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3660">1:01:00</a> - environment set up a launch configuration to run just the main file uh install a package and then uh<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3667">1:01:07</a> - you know get a set of package requirements and put them in a text file like this so that anyone else who uses<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3672">1:01:12</a> - your application will be able to install the requirements right and all of that once you've done all of that you're kind<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3678">1:01:18</a> - of finally done now you're ready to go develop your python application and then you can share it with people right<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3685">1:01:25</a> - so uh what we're going to close on today then is we're going to talk about version control okay so now great our<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3691">1:01:31</a> - python environment is set up we have the ability to run it in a virtual environment where we have all of our<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3696">1:01:36</a> - packages and we've frozen our packages we put them in a list so that someone else can use our application now they<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3702">1:01:42</a> - can install all the package dependencies so we're ready to go write code right but then the question is how do we share<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3708">1:01:48</a> - code with others how do we develop our project on a team of developers and<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3713">1:01:53</a> - that's where this thing called version control comes in so today we're just gonna go ahead and install things for<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3718">1:01:58</a> - you uh we'll talk about next time we meet we'll talk about how you use it um this is pretty complicated um<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3726">1:02:06</a> - uh you know we'll go over some of the more basic cases but there are some some<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3732">1:02:12</a> - parts of git that you know even i try not to touch too much just because it gets very confusing and uh it's kind of<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3738">1:02:18</a> - buggy but not buggy gets not buggy there's you know millions of people use it but like it's easy to make mistakes<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3743">1:02:23</a> - with it um but version control is a completely essential part of being a software developer on a team um so if<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3751">1:02:31</a> - you're on a team of software developers you're going to be all working on the same project you might even be working on the same files and you want to make<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3757">1:02:37</a> - sure you don't step on each other's toes and so how do you do that you track the changes to your files over time with the<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3763">1:02:43</a> - version control system so git git is a version control system there's others uh subversion and<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3770">1:02:50</a> - mercurial are probably two of the other famous ones but a git probably is the most popular probably used by the most<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3775">1:02:55</a> - projects um so version control systems at a high level they track the changes that you make to files over time so they<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3781">1:03:01</a> - show you what you've added and what you've removed from files right uh you and everyone else on your team right and<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3788">1:03:08</a> - so today like i said we're just going to be downloading and setting up a couple of tools we'll get into specifics uh<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3793">1:03:13</a> - next time so the first thing that we're going to do is we're going to go ahead well actually first let me check if you<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3798">1:03:18</a> - haven't i uh i guess we'll find out so<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3807">1:03:27</a> - at a high level any questions while we're waiting on this to pull up any questions about what version control is<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3812">1:03:32</a> - or why we'd use it um and if you don't 100 get it right now it's fine because we haven't really done any examples with<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3818">1:03:38</a> - it but um yeah you don't have to have a question right now i think i get<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3825">1:03:45</a> - the concept of it okay<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3831">1:03:51</a> - so uh we're going to use git um it's the one that literally like um<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3837">1:03:57</a> - working in a google docs with with other people that's how i'm thinking of it<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3843">1:04:03</a> - except that of course that gets<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3848">1:04:08</a> - gives you a record of changes google docs does<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3854">1:04:14</a> - well it kind of does but you structure the changes that you make into things called commits<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3860">1:04:20</a> - and so you may have heard this before a commit and get is basically it's a set of changes a change step that's what a<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3867">1:04:27</a> - commit is in kit and um the other big difference between uh git and google docs is on google docs<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3873">1:04:33</a> - you everyone is sharing the same copy of stuff in git there's one centralized copy on your<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3879">1:04:39</a> - remote git repository and then everyone else has a local copy where they can do stuff themselves and you you i mean i<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3887">1:04:47</a> - don't want to get too off in the weeds here git also has things called branches which is basically you take a copy of a project and then you clone it and then<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3894">1:04:54</a> - you do stuff to the clone and before you change the original you want to say hey guys do you like the changes i made and then other people can<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3900">1:05:00</a> - improve your changes or reject your changes and and if they approve them then that branch that you made<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3905">1:05:05</a> - uh so-called get it gets merged into the main branch right so that change set that you've adopted or uh you might<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3911">1:05:11</a> - actually have multiple changes that multiple commits on a branch if that gets merged back into the main one<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3917">1:05:17</a> - then you change the shared version but otherwise you're just changing your version um<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3924">1:05:24</a> - so if i lost you there don't worry um get it's not the easiest thing once you<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3931">1:05:31</a> - learn it you learn it once you're good though um and you'll use it all the time so um<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3937">1:05:37</a> - now we may as well just install it as a normal setup you can also install a portable version of it if you want to run things off a flash drive i don't<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3943">1:05:43</a> - think we care that much here so we'll go ahead we'll save the 64-bit installer here you're probably gonna<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3949">1:05:49</a> - have to enter your you know admin password and all that great stuff for us setting it up<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3956">1:05:56</a> - okay okay so this one is an installer we might be able to start with chocolaty i guess i just haven't ever bothered<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3961">1:06:01</a> - because i don't know um i've installed it with the installer before uh it was pretty<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3966">1:06:06</a> - shame on me you know i was encouraging you to use chocolatey the other day and here i am not using it um but<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3974">1:06:14</a> - we could have used it to do the installing is what you're saying uh maybe i'm not actually sure um chocolatey doesn't have all packages<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3981">1:06:21</a> - like ever it has many things um but i it doesn't i mean<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3986">1:06:26</a> - like honestly you're never gonna really update git um i mean you probably can but yeah i mean like it's been around<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3993">1:06:33</a> - for a long time since the 1980s i think um so all right so<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=3999">1:06:39</a> - here here's that you remember i said the the general the gpl right oh look at this<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4004">1:06:44</a> - uh git is licensed under the gpl version two um<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4010">1:06:50</a> - open source software license so okay okay<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4016">1:06:56</a> - lag<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4023">1:07:03</a> - actually i can't i can't touch that window so you go ahead and you do this you can press next<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4029">1:07:09</a> - that's fine press next uh let's see<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4034">1:07:14</a> - okay so uh if i were you i would uncheck the windows explorer integration<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4041">1:07:21</a> - you don't really need that um and<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4050">1:07:30</a> - yeah that's fine okay so you can press next<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4055">1:07:35</a> - and that's fine that'll let you open it from the start menu<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4062">1:07:42</a> - uh i would go see what's in that drop down um you probably don't want bim<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4069">1:07:49</a> - uh i would use visual studio code<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4086">1:08:06</a> - that's fine<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4095">1:08:15</a> - so tell me if you see if you can figure out what this is saying um<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4101">1:08:21</a> - this is base this is related to something we talked about yesterday so<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4115">1:08:35</a> - this option has only [Music]<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4123">1:08:43</a> - do you remember when we were talking about the path yesterday and what the path represented<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4129">1:08:49</a> - yes um essentially let me see if i can put it in words and<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4136">1:08:56</a> - make sense to me okay so the path is um<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4145">1:09:05</a> - i okay the way i'm thinking of it is this is how the computer can actually<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4153">1:09:13</a> - launch something or run something<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4158">1:09:18</a> - that's how i understand the path i'm not sure if i'm getting there i mean it's<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4163">1:09:23</a> - the set of things that the computer knows how to execute right you know you point it you point the computer to<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4170">1:09:30</a> - here's the things i want to be able to run right and so the difference between the first radio button here and the<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4176">1:09:36</a> - second one is if you check the first one it's not going to actually add git to your path it's only going to add it to<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4183">1:09:43</a> - the environment variables for one specific shell and that's git bash which i'll show you in a sec the second one is<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4189">1:09:49</a> - well you might want to be able to use git no matter what command line you're on right that's why this is the<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4195">1:09:55</a> - recommended one right um is that is that this will let you use git no<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4202">1:10:02</a> - matter what shell you're in so powershell command prompt and git bash will i'll let you use git this is<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4207">1:10:07</a> - probably what most people want but what it will do is it will add it will add the path to get to your path<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4215">1:10:15</a> - variable your system path variable so if you didn't want it on your path well suddenly now you have things there that<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4220">1:10:20</a> - you added right so if you want it it's great if you don't want it well then you wouldn't want it there right that's why they give you the choice um okay so okay<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4229">1:10:29</a> - we're gonna want it there because the default uh the default terminal in vs code i think is powershell and so we're<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4236">1:10:36</a> - 100 gonna want to be able to do git stuff right so uh if you want to leave that that one checked that's the right<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4241">1:10:41</a> - one<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4249">1:10:49</a> - okay all right now that's fine um<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4256">1:10:56</a> - that's fine too<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4270">1:11:10</a> - yeah keep that<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4280">1:11:20</a> - all right keep that<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4289">1:11:29</a> - keep that<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4295">1:11:35</a> - uh that's fine we're going to be using an ssh key eventually anyway<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4303">1:11:43</a> - uh that's fine<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4321">1:12:01</a> - hey don't worry about it i shouldn't check anything yeah don't<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4326">1:12:06</a> - don't check anything those are like beta features just go ahead and press install<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4333">1:12:13</a> - all right so i'm just gonna install some library extensions here um and uh<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4339">1:12:19</a> - this will probably be the the biggest thing we install now um<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4345">1:12:25</a> - can you go ahead and click can you click on your browser again um<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4350">1:12:30</a> - so that i can do things again all right so we're going to go ahead here and we're going to look for<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4357">1:12:37</a> - another application called sourcetree now sourcetree uh interfaces we get it's<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4363">1:12:43</a> - like a graphical user interface for it so git is a command line program for the most part um<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4369">1:12:49</a> - but what happens if you want to be able to see the changes that you've done like this so you see this it tells you what<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4376">1:12:56</a> - you've added and what you removed and this nice pretty file it shows you where the additions are and stuff and you can see all the files in your change set<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4383">1:13:03</a> - blah blah blah um so uh sourcetree is one of the two big<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4389">1:13:09</a> - graphical user interface front ends for git another one is called github desktop<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4394">1:13:14</a> - so obviously github desktop is made by github um sourcetree is made by a company called atlassian that runs<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4401">1:13:21</a> - basically a competitor to github called bitbucket we actually use bitbucket at work previously we were using<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4408">1:13:28</a> - microsoft devops but you know you don't care about any of that i use sourcetree is the one i'm familiar<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4413">1:13:33</a> - with they're all basically the same so it really doesn't matter that much um but i'm actually pretty opinionated<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4420">1:13:40</a> - about this i really think that for most people it makes sense to use one of these programs rather than doing everything on the command line sometimes<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4426">1:13:46</a> - you may want to hop on the command line if you want to do something more complicated because the command line lets you script it you can use multiple<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4432">1:13:52</a> - arguments etc etc but for general day-to-day use i recommend most people use one of these visual programs i just<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4438">1:13:58</a> - kind of makes it easier to think about and see so we're going to go ahead and we're going to install this as well so if you<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4444">1:14:04</a> - want to go back let's see what the progress of our git installation is here<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4451">1:14:11</a> - okay so i would go ahead and check that launch get bash and uh<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4456">1:14:16</a> - and it will open up a terminal uh when we do this and so now you will have a new shell on your system so<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4463">1:14:23</a> - uh we installed this thing hopefully i can i can touch this window okay good um<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4468">1:14:28</a> - so i see this is actually a unix shell um so<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4474">1:14:34</a> - we'll get into that eventually powershell is actually a different shell language than uh bashes so this is<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4479">1:14:39</a> - called a bash so bash is one of the most common probably the most common shell scripting language um a shell scripting language<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4487">1:14:47</a> - is kind of like a programming language but it's kind of suited for doing stuff on the command<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4492">1:14:52</a> - line uh there's actually a large segment of people who think that shell scripting languages are stupid and we shouldn't have them and so there's some people who<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4498">1:14:58</a> - made a shell for python basically where you just write python on the command line because you know that makes sense right why are<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4505">1:15:05</a> - we learning a separate thing and also the way in which bash makes you do things is like really confusing in some<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4511">1:15:11</a> - ways and so why don't we just use a real programming language there's also other shells there's like a c shell<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4518">1:15:18</a> - where that lets you write c on the shell although python is much prettier than c so if you're going to pick a programming<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4523">1:15:23</a> - language i'll add 100 go for one of the python ones um although it's a little bit slower of course um but at any rate<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4530">1:15:30</a> - um this is bash so um are we ls here you're in your home directory um and so this is<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4537">1:15:37</a> - the same thing as what you had before it's a little bit prettier you know see it's got some uh<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4542">1:15:42</a> - it's got some you know like uh uh colors here for different folders and<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4548">1:15:48</a> - stuff and so if we want a cd into documents we can still do that we can still ls<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4554">1:15:54</a> - we can still clear right all the same all the same stuff um okay now but what this will let us do is<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4563">1:16:03</a> - if i go back up remember i said dot dot takes you back to the parent directory right<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4568">1:16:08</a> - and i want to go in the downloads folder okay well i'm just going to say i can't find that so downloads right then i want<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4575">1:16:15</a> - to go into our directory for python test right so we have python<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4581">1:16:21</a> - that's what we called it right oh i think we call python example yeah<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4586">1:16:26</a> - you're right okay so now we're in this directory here's what's in this directory right<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4592">1:16:32</a> - so um i mean oh so<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4598">1:16:38</a> - uh this is a command cat is a command on the command line that shows you what's inside the file um basically uh sticks<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4604">1:16:44</a> - it on the output so that's the file we know we're in the right place here right all right so um just to test our git uh there's a<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4612">1:16:52</a> - command for git called init this will set up the scaffolding for a git repository for whatever folder you're<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4618">1:16:58</a> - currently in right so we're in we're in this python example folder right to test if we have git or not we're going to go<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4624">1:17:04</a> - ahead and run the git to knit command and then if we ls again you should see a dot get well<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4630">1:17:10</a> - um don't worry about that for now um this shows hidden uh commands and folders uh the dash a stands for all the<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4637">1:17:17</a> - dash l stands for like the list view that shows us everything right but you see how now there's a folder here called<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4643">1:17:23</a> - dot git so if we go open this up in your vs code it'll be clear in vs code um<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4650">1:17:30</a> - is actually vs code won't show it because it has a separate thing for source control here<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4663">1:17:43</a> - i think it just needs to be updated<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4671">1:17:51</a> - now it should probably show up okay yeah so now source control is there<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4678">1:17:58</a> - if we go to the file tree what i just did was i ran a command called uh reload<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4683">1:18:03</a> - window here uh if you press control shift p in vs code it will take up a command<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4689">1:18:09</a> - window here that lets you run a bunch of different commands um and uh control p in vs code will<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4697">1:18:17</a> - let you search between files now we'll get to all that later okay but anyway in git bash we've now made this new folder<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4703">1:18:23</a> - here you see how it says dot get right that means that now this thing is a git<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4710">1:18:30</a> - repository and so um you know uh<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4716">1:18:36</a> - so i suppose i don't need the l if i just do a now you see that gets there right um all right so that means that git is set<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4722">1:18:42</a> - up and it's working properly and we could do more things like commit and push and merge and stuff but we're not gonna do any of that today we just<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4728">1:18:48</a> - wanted to make sure that we got it installed so now we're gonna download sourcetree uh<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4734">1:18:54</a> - hmm what was that that was the release notes that we had so we're going to go ahead and download sourcetree so that we<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4739">1:18:59</a> - have a visual front end for this blah blah blah assuming you are fine with their<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4744">1:19:04</a> - software policy which is normal stuff okay so we have another setup thing here<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4750">1:19:10</a> - that we're going to download<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4755">1:19:15</a> - and then you're probably going to have to do this again i mean it's kind of logical right if you're sharing someone's screen that<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4761">1:19:21</a> - they wouldn't let me just like take over control of your computer and install whatever i want you know it's kind of a<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4767">1:19:27</a> - security risk<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4778">1:19:38</a> - well i can't see anything that's happening right now maybe it's just being slow yeah it's slow it's actually<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4786">1:19:46</a> - right okay i would say install anyway yeah<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4794">1:19:54</a> - so are you on windows 11 then no this is windows 10 i use those ten still okay yeah<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4800">1:20:00</a> - just wondering because that didn't look real familiar to me all right well<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4806">1:20:06</a> - looks like it's opening that's what the normal opening looks like or is it just going to be an installer i<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4812">1:20:12</a> - guess we'll find out in a second<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4833">1:20:33</a> - okay so there's bitbucket server bitbucket<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4838">1:20:38</a> - will i do anything with all that<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4845">1:20:45</a> - i guess you're gonna have to create an account um<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4851">1:20:51</a> - so i guess we'll have to do that um you know what let's pause the recording<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4856">1:20:56</a> - real quick and we'll go ahead and do that off screen and then we'll pick back up to pick back up once you've done that<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4864">1:21:04</a> - all right so we picked up uh have a source tree installed now logged into an<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4869">1:21:09</a> - account uh with the atlassian folks and so the last thing that we're going to do here today is we're going to go ahead<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4875">1:21:15</a> - and we're going to add the new git repository that we just made if you remember we on the command line here we<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4880">1:21:20</a> - did a git init we made a an empty git repository in our folder for our example python application so<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4888">1:21:28</a> - we're going to go and we're going to actually get that imported into our visual get tool here so we're going to<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4894">1:21:34</a> - go to downloads where we have it right now and we have our python example<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4900">1:21:40</a> - and this is the folder in which we have our git repository so we're going to go ahead and we're going to add this right<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4906">1:21:46</a> - and it would give you an error it would give you an error if this wasn't a git repository it would say hey you can't do<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4912">1:21:52</a> - that okay and uh over here it's going to show us all of the files that we have staged and you<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4918">1:21:58</a> - can actually see these are all the files that are living inside of the virtual environment but i bet you didn't know<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4923">1:22:03</a> - that these things were there huh but you see pretty long bar right um so we get down towards the<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4930">1:22:10</a> - very end and then we have some vs code launch and then you know here's our here's our watch configuration file that<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4936">1:22:16</a> - should look familiar right um yeah so before we do anything else uh we will<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4942">1:22:22</a> - make a file called a git ignore file so here's our here's the files that we're expecting right there's our child file<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4948">1:22:28</a> - here's our test file here's our requirements file um and so if we add this it would let us make a commit to<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4954">1:22:34</a> - the repository right so-called stage file we'll talk about all this tomorrow or not tomorrow whatever next time we<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4960">1:22:40</a> - meet um but you see now we have the git repository loaded in this program that lets you see what the files are you see<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4966">1:22:46</a> - the contents over here you'll be able to see additions and deletions from it all very kind of clean easy to use right<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4972">1:22:52</a> - um so that was actually the last thing that i was going to have us do today so let's go and briefly recap before we<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4980">1:23:00</a> - finish here so this is what we did we just finished installing git with git bash that command line version of it<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4986">1:23:06</a> - here with the unix shell or uses bash and uh so we did that<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4991">1:23:11</a> - we got git installed we downloaded source tree um i guess actually the last thing that we were going to do is we were going to go ahead and look at<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=4998">1:23:18</a> - um github.com so for now i'll mostly just take you here um<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5005">1:23:25</a> - actually we go look at one of my repositories i suppose um so github is uh is basically where people push code<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5013">1:23:33</a> - where they host their their applications their projects you have to update your code somewhere especially if you have<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5019">1:23:39</a> - multiple people developing to it um uh you know you have to store it somewhere right so bitbucket which is<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5025">1:23:45</a> - what you just made an account for to use uh sourcetree well bitbucket is basically the same thing as github it's<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5031">1:23:51</a> - another option uh there's pros and cons between them they're both uh used a lot github is probably the<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5036">1:23:56</a> - most uh the most prevalent one so if you want to see the bible teaching ministry that i have<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5043">1:24:03</a> - right so this website um that you know i've obviously been working on for a while now you know still haven't<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5048">1:24:08</a> - completely launched but uh you know hosted with the top bar and the sidebar and all this so this is what the website<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5054">1:24:14</a> - looks like well this is actually posted on github so<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5059">1:24:19</a> - if i search for it on github um you'll come to see that i'm actually<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5065">1:24:25</a> - hosting this on github as the application platform so<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5071">1:24:31</a> - you know this is me this is my account stephen tamman that's that's me and so you can see well look you see remember that file<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5078">1:24:38</a> - that we have there vs code right remember how we had a vs code file that had a launch dot json file on it well<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5084">1:24:44</a> - guess what i have oh look at that<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5090">1:24:50</a> - and so i have a python application embedded in this website and that python<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5095">1:24:55</a> - application is the one that you've heard me talk about more recently here it's a python application for pre-processing<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5101">1:25:01</a> - the content to build slides from it and in fact knowing what you know today you should know more or less what that<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5108">1:25:08</a> - thing is right we're saying from this module app module setup right<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5114">1:25:14</a> - import a function called clean slides directory right that's what that's doing and then look a for loop and uh you know<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5120">1:25:20</a> - all this you should maybe you don't know exactly what stuff does but you should be able to look at it and kind of know the gist of it right um<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5128">1:25:28</a> - so it's the power of programming but yeah this is what github looks like um so we'll talk about commits and branches<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5134">1:25:34</a> - and pull requests and we'll talk about all that stuff once we start talking about git but another cool thing is it shows it shows you what programming<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5141">1:25:41</a> - languages are being used so you can see 68 of my site is html right and then i have css css python javascript right um<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5150">1:25:50</a> - but there you go um so this is an example of a remote code repository um<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5156">1:25:56</a> - you know in fact another cool thing that github lets you do is it lets you make a board uh for tracking all the work<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5162">1:26:02</a> - you're doing on your project the so-called uh kanban board here or kanban i'm not actually sure how you say that<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5167">1:26:07</a> - word um again must have seen it written so here's a whole bunch of in progress<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5173">1:26:13</a> - stuff well actually i haven't really been tracking to work on my website with this for a while because you know i've had so much and it's been changing so<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5180">1:26:20</a> - rapidly but if you're a good developer and you're on top of things you can track all of your issues here and something like this<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5189">1:26:29</a> - so well there you go um so i was just gonna show github this is<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5197">1:26:37</a> - probably where we'll push code um so as we get things set up here as we move forward in our programming teaching<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5202">1:26:42</a> - series i will actually make a repository here and then i'll have you pull it down and then we'll both be we'll both be<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5209">1:26:49</a> - working on code in the same repository that will be up here at public on github right um so<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5215">1:26:55</a> - we can build an application together basically where both you and i will be able to contribute to it um<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5221">1:27:01</a> - and uh more specifically what i'll do is i'll post a bunch of practice problems to the git repository and then you can<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5226">1:27:06</a> - work on them and then i'll post the solutions the next day so you can check yourself against them um<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5232">1:27:12</a> - okay okay all right well that's where we'll cut for today um so i'll go back through<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5238">1:27:18</a> - some of the things we've talked about real briefly before we stop here so um that was our git preview so what we did<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5244">1:27:24</a> - we started today just mentioning uh anyone else in the future who uses chrome remote desktop for something like this make sure your browser extensions<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5250">1:27:30</a> - don't get in the way like they did for us we talked about virtual environments uh specifically setting them up in vs code<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5256">1:27:36</a> - an integrated shell there setting up a launch configuration of vs code it's a json file<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5262">1:27:42</a> - we talked about python packages the python package index and the pip package manager<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5267">1:27:47</a> - we talked about package dependencies and why we freeze them in the uh<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5273">1:27:53</a> - the virtual environment right we talked about the requirements.txt file that you build by freezing your requirements and<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5278">1:27:58</a> - you can install them or someone else can install them when they run your application and then finally we got some<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5285">1:28:05</a> - tools for git setup to use and we'll talk a lot more about git and version control next time we meet and how all of<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5291">1:28:11</a> - that will interface with the python applications that we'll be writing here but as off leaving today uh you now have<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5298">1:28:18</a> - everything you need to develop python applications locally in vs code um so if you've followed everything we've done<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5305">1:28:25</a> - the last couple times we've met you should be able to make a new folder on your system uh open it in vs code make a<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5311">1:28:31</a> - python file make a virtual environment uh set up a launch configuration and<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5317">1:28:37</a> - then uh build your package index right with the the python uh with the python package<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5324">1:28:44</a> - manager uh so pip freeze will let you build your requirements file you do all this and suddenly now you're all set up<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5330">1:28:50</a> - and you're ready to go right you're ready to develop your python applications and share them with other people<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5335">1:28:55</a> - and uh when we next pick up we'll be talking about how you actually get this code that you have on your local computer and<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5341">1:29:01</a> - you push it up to the internet uh in a version control repository so that other people can access it um we'll be talking<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5347">1:29:07</a> - about how you track your changes to it as well um so we have a bit more to do here but we're getting closer to uh<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5353">1:29:13</a> - being fully independent being able to code python applications locally and uh basically setting you up for how rio<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5360">1:29:20</a> - developers in the real world work so this is where we'll cut for now and uh<br/>
<a href="https://www.youtube.com/watch?v=BUzCErp4dUI&t=5365">1:29:25</a> - when we pick up we'll be talking more about version control<br/>

{{% /transcript %}}


## 29: A conceptual introduction to version control

### Video

{{% video
src="https://www.youtube.com/embed/ftm2cyYTabg"

playlist="https://www.youtube.com/playlist?list=PLQ-N5KyJUu_VqG38oglZEEw17b_ZQ13On"

video="https://archive.org/details/swt-29-a-conceptual-introduction-to-version-control-video"

audio="https://archive.org/details/swt-29-a-conceptual-introduction-to-version-control-audio"

slides="https://www.steventammen.com/slides/pages/learning-programming-only-what-you-really-need/29-a-conceptual-introduction-to-version-control"
%}}

### Summary

Version control can be tricky to wrap your head around the first little bit. There are a lot of moving parts, and some of the concepts are easily mixed up before everything clicks. It's very normal to struggle a bit with these things initially, so no worries.

This video attempts to introduce version control... without talking about code at all! Instead, an extended analogy is made to accounting ledgers in business, and how a central ledger in the bank might interact with the records kept by indidivdual co-owners in a business setting. It's a pretty close analogy, all things considered, and the time spent here outlining things conceptually will hopefully pay off later as we move into code-focused specifics. Having a concrete physical example of why we might want to be accurately tracking changes in various records can hopefully make these abstract concepts easier to get sorted in your head.

### Timestamps

- [00:00](https://www.youtube.com/watch?v=ftm2cyYTabg&t=0s) - Introduction
- [04:05](https://www.youtube.com/watch?v=ftm2cyYTabg&t=245s) - Foreword: version control can be hard to understand, and that's OK
- [05:44](https://www.youtube.com/watch?v=ftm2cyYTabg&t=344s) - Defining terms in version control by analogy
- [08:46](https://www.youtube.com/watch?v=ftm2cyYTabg&t=526s) - Repositories, commits, pushing, and pulling
- [18:17](https://www.youtube.com/watch?v=ftm2cyYTabg&t=1097s) - Branches
- [35:45](https://www.youtube.com/watch?v=ftm2cyYTabg&t=2145s) - Work items/tasks/product backlog items (PBIs)
- [40:54](https://www.youtube.com/watch?v=ftm2cyYTabg&t=2454s) - Merging
- [53:07](https://www.youtube.com/watch?v=ftm2cyYTabg&t=3187s) - Pull requests
- [58:45](https://www.youtube.com/watch?v=ftm2cyYTabg&t=3525s) - Even as complex as all of this has been, we've still made some simplifications
- [1:06:53](https://www.youtube.com/watch?v=ftm2cyYTabg&t=4013s) - Some other jargon and miscellaneous notes

{{% content %}}

### Content

#### Foreword: version control can be hard to understand, and that's OK

If you find version control hard to wrap your head around for the first little bit, I wouldn't sweat it. It will be pretty tricky until things click and you have an "aha moment."

Many new developers have a hard time figuring out the differences between repositories, branches, pull requests, and commits, so you may want to pay special attention to our discussion of these concepts.

<!-- --- -->

#### Defining terms in version control by analogy

Let's use an analogy: let's say you run a business alongside several business partners, with each of you having a local ledger where you keep track of your business finances, with a master copy of your business' overall accounts kept at a secure bank. The bank's copy is the "real one" under law (so if you get audited, it is what is referenced as the authentic "current version" of the record). This situation is rather parallel to version control in code, so we'll define all the relevant terms based off this analogy:

<!-- --- -->

#### Repositories, commits, pushing, and pulling

**Repository**: a record (ledger) of business financial transactions. Each co-owner of your company has their own repository, and the main repository is the one at the bank.

**Commit**: some action taken that is added to a repository (an individual's ledger or the shared one at the bank). A commit here might be something like "bought 500 units of new inventory for $10,000". A commit represents a single, discrete change in state.

**Push**: one of the business owners takes their local repository (individual business ledger) to the bank (remote repository) to update the shared ledger with their most recent financial activity.

**Pull**: One of the business owners goes to the bank and updates their local copy to reflect the overall history of all the financial history. Their local activity is still there, but everybody else's financial activity has now been added to it.

Everything making sense so far?

<!-- --- -->

#### Branches

Now things will get more complex.

On top of there being all these different business ledgers (repositories) floating around, now let's also say that each ledger is further subdivided into sections. Every ledger contains one "main section" that represents the overall financial record, but before certain groups of financial transactions (that is, groups of commits) go through (i.e., are pulled into the formal record), they are tracked separately. Basically, they are treated as pending until the transactions clear. You might think of these sections as representing pending business deals that are almost certainly going to go through, but some additional negotiation on contract specifics is required before they become final and get pulled into the main record.

**Branch**: A section in an individual ledger. By convention, the branch representing the overall final record is often called "master" (although some people are now also calling it "main" due to some unfortunate slavery associations with the former word -- most people probably won't bat an eyelash at either name). Also by convention, no individual co-owner will have deals that go directly into the permanent record, but will always have a different branch for each new business deal, in case one of them ends up having issues. Generally speaking, the most up-to-date information relating to a specific pending business deal will be located in the branches (sections in the ledgers) of the individual business owners (=local repositories) relating to the specific pending business deal, but from time to time, someone will push, so that the bank (remote repository) has a record of the open pending business deals too.

<!-- --- -->

#### Work items/tasks/product backlog items (PBIs)

**Work Item**: each individual pending business deal is typically tracked on its own branch, so that the pending business deals don't interfere with each other. Each one of these goals will usually be achieved through a collection of one or more commits targeted at the specific business dealing, typically with a very definite purpose in mind. For example, in business, the goals might be like "acquire X company" or "sell stockpiled supply to bring market prices down." Each one of these things might ultimately need multiple transactions to coordinate the work being done, but together kind of represent "one thing". Hence why the whole specific business deal is tracked on its own separate branch.

<!-- --- -->

#### Merging

**Merging**: in the process of making a business deal, your company's assets and liabilities might change due to the actions of your business' co-owners. Let's say you are in charge of acquisitions for your company, and therefore the acquisition budget. Your current business deal might depend on you having a certain amount of capital on hand therein, but what happens if Jeff, one of the other co-owners, uses some of the company's money in that budget for a really important internal research project? Suddenly, you now need to reconcile changes in the global business ledger with your pending business deal (local branch corresponding to a task). Most of the time, you won't have to scrap your pending deal entirely, but you'll need to figure out how to square what new thing you are trying to accomplish with the changes in the company's overall ledger. This process is known as "merging", and it usually involves combining your new pending branch with the master branch. (Although occasionally you might need to reconcile the accounts for two pending business deals, if you decide to combine them into only one branch).

It is actually common to have merging be easy, with no input needed on your part. If Jeff were to take money from the R&D budget, for example, it would not mess with the acquisition budget that is important for your new deal (even though you'd still want to know about Jeff's expenditure and pull information concerning it into your own ledger). But if there are conflicts, merging will involve reconciling the two records that now conflict in some area, and this can sometimes get really messy and gross. An ounce of prevention is worth a pound of cure here, so it would be advisable to tell your co-owners to temporarily keep their hands off your acquisition budget, if you know you'll be dealing with it a lot for your current business deal.

**Merge conflicts**: the specific areas leading to some form of conflict when merging two branches. Merge conflicts arise when two different records (ledgers) are trying to do something different with the same resources. (E.g., the acquisition budget from above).

<!-- --- -->

#### Pull requests

**Pull request**: once a business deal (work item/task/etc.) has been completed and all contract negotiations have been finalized and looked-over (the relevant person has pushed such that the business deal has been inked into the bank's version of the ledger so that some or all people in your company have been able to give it a look and approve it), a request is made to incorporate the new deal into the **main section of the bank's official ledger** (to write it into stone in the official final record). Note the emphasis. Pull requests are typically always against the master branch in the bank's copy of the ledger.

<!-- --- -->

#### Even as complex as all of this has been, we've still made some simplifications

Believe it or not, we've actually made quite a few simplifications here:

- In a real production environment, there are actually usually several branches that all correspond to some "final-ish" version of the ledger. All of these might have pull requests against them, rather than just having a single master branch. It is common to have no branch called master, and instead have three (dev, test, production) or four (dev, integration, test, production) main branches. If none of this means anything to you, that's fine, don't worry about it for now. Just know that in the real world, usually the bank will actually have several different copies of the shared ledger, all of which might end up being slightly different. As a normal developer, you will probably still mostly be interfacing with a single ledger at the bank (and it will likely be called "dev"). So just pretend that the master from our above conversation is dev, and you're good to go.
- Sometimes people rewrite history, and change the record of what happened in the ledgers everywhere. Obviously this can cause lots of issues (what happens if someone goes forward with an out-of-date ledger?), and is usually avoided if at all possible. But sometimes it needs to happen anyway because life. This is called rebasing, and usually ends up being excessively complex and error-prone. In simple terms, rebase bad.

<!-- --- -->

#### Some other jargon and miscellaneous notes

**Cloning**: the first time you as an individual stop by the bank to acquire a local copy of a ledger, that is called cloning the repository.

**Ignoring files**: let's say that your company has an internal fund for helping out employees (or their spouses) with medical costs from cancer. Employees at your company can voluntarily elect to donate to this internal fund. It is not material to your business applications, so you don't want it being tracked as part of your business' overall assets. Therefore, you would specify that you want this thing specifically to be ignored in all the ledgers floating around everywhere. You would specify this in a document called `.gitignore`, which exists solely to tell ledgers to not worry about certain areas that aren't relevant.

**Unstaged changes**: work that has been completed but not yet committed can be in one of two states. It can either be unstaged (so that if you commit, it won't show up in the commit), or staged, meaning that it will be part of the next commit. It is common to stage all of your current changes when committing, but sometimes, after making a set of changes, you might want to have two or more separate commits to better organize the work that you did into discrete chunks.

**Diffs**: comparisons between two different versions of the company ledger, to highlight where the differences are. By convention, things highlighted red are deletions, and things highlighted green are additions.

{{% /content %}}

{{% transcript %}}

### Video transcript

<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2">0:02</a> - hey guys so today on the 28th we are going to be picking up uh in the lesson<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=8">0:08</a> - number 29 here in our series on picking up programming in a practical sense and<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=13">0:13</a> - today we're going to be talking about version control in terms of a conceptual introduction so<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=19">0:19</a> - we're not actually going to practice things with it specifically relating to git<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=24">0:24</a> - that is the version control software that we installed at the end of our last meeting but before we even get into<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=31">0:31</a> - doing things in a hands-on sense we're going to talk about it conceptually and that's because<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=36">0:36</a> - this is one of the trickier aspects of learning how to be a software developer<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=42">0:42</a> - especially integrate onto teams where you have to make your changes to a code base<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=47">0:47</a> - alongside many other people this is a very important skill that often doesn't get emphasized enough<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=54">0:54</a> - in the college environment at least in my opinion i didn't learn almost anything about it in college even though it is something that comes into play<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=61">1:01</a> - every single day when you are working on an actual team and so we're gonna spend a good bit of<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=67">1:07</a> - time just hitting uh this idea of version control uh conceptually and uh specifically as we'll see here um i'm<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=74">1:14</a> - going to be using an analogy to talk about things here so uh this is the outline of the things that we're going<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=80">1:20</a> - to talk about today so we're going to start out uh just kind of talking about the fact that version control can be<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=85">1:25</a> - tricky to understand and it usually does actually take people a while it's not something that you'll probably just<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=91">1:31</a> - instantly be able to snap your fingers and rattle off what everything means and how everything's related you'll see what<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=96">1:36</a> - i mean in a second here there's just a lot to kind of wrap your head around and so you shouldn't get discouraged if<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=103">1:43</a> - it takes you a little bit eventually hopefully things will click and you'll start being able to see how everything<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=108">1:48</a> - relates but it may take a little while um because you know what seems easy for people who've been doing this for a long<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=114">1:54</a> - time maybe it's not so intuitive the first few times you see it and so you just shouldn't get discouraged on<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=119">1:59</a> - that account and then we're going to talk about um an analogy uh that will help us hopefully understand<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=126">2:06</a> - some of what we mean by tracking changes so we're going to use an analogy relating to uh the ledger that a<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=133">2:13</a> - business might have so a list a record of transactions uh used to represent<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=139">2:19</a> - business finances that's going to be kind of the analogous situation that we use here to understanding uh changes to<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=146">2:26</a> - our code with version control so now we're going to talk about all of these terms involved in version control<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=153">2:33</a> - so repositories commits pushing pulling those are kind of like the basics then<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=158">2:38</a> - we're going to talk about branches and then work items tasks product backlog items radiated as pbis these are all<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=164">2:44</a> - synonyms kind of depends what sort of uh a task management system uh your software development team might use if<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=170">2:50</a> - you're in the agile framework uh pvis is what my team calls them but uh yeah i've seen work items in tasks too these are<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=177">2:57</a> - these are the goals the chunks of functionality you're trying to implement um then we're gonna talk about merging<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=183">3:03</a> - uh you merge branches and we'll get what that means in a second pull requests and um<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=188">3:08</a> - finally we'll go over some other stuff like uh diffs and cloning and uh ignoring things that you don't want to<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=195">3:15</a> - track in version control um and uh you know even even when we get there we're going to note that we've made some<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=201">3:21</a> - simplifying assumptions for this first pass we're not even going to hit everything completely as it is in<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=206">3:26</a> - reality uh our very first time looking at it just because there's so much and after all of this we're going to move<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=212">3:32</a> - from the analogy i don't actually have so much written here we're just going to go look at it um so i have this is the<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=218">3:38</a> - git repository for the ministry website that i've been working on so you can see i'm here on github<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=224">3:44</a> - which is this a remote a repository host um and uh we're gonna look at one of the<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=230">3:50</a> - pull requests that i made uh in this repository and that should hopefully help us understand uh the difference<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=235">3:55</a> - between uh repositories and pull requests and branches and commits because all of those things i just said<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=242">4:02</a> - are very easy to confuse especially when you're first getting introduced to these topics so uh that probably doesn't mean<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=248">4:08</a> - too much to you now but we'll get to it as we go there later on today so first thing as i was saying just as a forward<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=254">4:14</a> - for us here version control can be a hard topic to understand or wrap your head around and that's okay um you<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=260">4:20</a> - should give yourself some slack here uh uh just be prepared for this to take a<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=265">4:25</a> - little bit of time for you to be able to wrap your head around most people don't get it the very first time<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=270">4:30</a> - so ask questions if you get stuck if you don't understand what the purpose of something is or what the differences<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=276">4:36</a> - between some of these terms are as we're going over them please do ask questions because uh it is pretty tricky to get<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=282">4:42</a> - these things straight in your head uh once you do uh usually it's like a one-time thing you know once you have<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=287">4:47</a> - your your aha moment your eureka moment uh you'll kind of have it after that um but getting there can sometimes take a<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=293">4:53</a> - little while is what i'm saying so like i was saying uh just before a lot<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=299">4:59</a> - of new developers have problems distinguishing between these things here so repositories branches pull requests<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=305">5:05</a> - and commits all of these things are sort of related but these things all represent uh you<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=311">5:11</a> - know sets of changes or uh you know the state of your project at a given point in time and so given that uh sometimes<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=319">5:19</a> - they seem really similar uh in the minds of new developers and so it can be kind of hard to tell them apart and uh what<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=326">5:26</a> - the differences are what the what what they're used for how we talk about them um so just as we go through all of the<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=332">5:32</a> - terms i haven't haven't done them exactly in this order but as you go through you missed mine on may want to<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=338">5:38</a> - pay some special attention to these things specifically because these are often uh the the terms that people<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=345">5:45</a> - stumble over uh because they get them confused with one another um all right so with that out of the way um we're<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=351">5:51</a> - gonna try to use an analogy um so in fact you might be a little bit put off<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=356">5:56</a> - we aren't going to talk about programming we're not going to talk about code for like the next 10 slides<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=362">6:02</a> - or something everything that i'm going to bring up today uh in our high level conceptual uh<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=367">6:07</a> - overview of version control is going to be through analogy um and that's just because uh<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=374">6:14</a> - we're talking about the concepts here uh not the specific concrete implementation are used by a git our version control<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=381">6:21</a> - system here but we're talking about what uh what each of these concepts represents like what is it basically<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=387">6:27</a> - doing how does it relate to some situation that we might have more of an intuitive feel for<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=393">6:33</a> - that's not just lines of code so the analogy the lens that we're going to view all of these things through<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=400">6:40</a> - is kind of a business analogy so let's say this let's say that you run a business alongside several business<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=407">6:47</a> - partners with each of you having a local ledger where you keep track of your business's finances with a master copy<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=414">6:54</a> - of your business's overall accounts kept it a secure bank um so so just to repeat<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=419">6:59</a> - this you know might seem repetitious but we just want to make sure we're being clear you alongside several co-owners of your<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=425">7:05</a> - business each have a local ledger where you're keeping track of your business finances and then there's a master copy<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=432">7:12</a> - of your business's overall accounts kept it a bank and so the one at the bank is separate from the one that all of the<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=437">7:17</a> - individuals have um and the bank's copy is quote unquote the real one so under<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=444">7:24</a> - law this would be the one that if you got audited uh you know in terms of taxes or whatever the one at the bank is the one that<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=450">7:30</a> - would be referenced as uh the authentic current version of the record so it's<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=455">7:35</a> - kind of it's kind of the one that is considered the uh the last stop you know this is<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=460">7:40</a> - what the current state of the finances are set in stone this is uh the the<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=467">7:47</a> - original copy if you will that everyone else has to work off of um so this situation that we're talking about<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=474">7:54</a> - here uh where uh individual co-owners in a business might each have their own ledger where they keep track of the<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=480">8:00</a> - financial transactions that they specifically make and then all of that ends up eventually flowing into<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=486">8:06</a> - a master copy of your business's accounts that are kept in a secure bank uh this situation<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=492">8:12</a> - is actually quite parallel to how version control will work in code um so specifically uh the sets of changes that<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=498">8:18</a> - we're tracking uh you know that's the versioning that we use in version control very similar to this idea of<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=504">8:24</a> - having a ledger something that tracks transactions uh individual things that<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=509">8:29</a> - change the state of our code base are very similar very parallel here that's why we're going to try to use this<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=515">8:35</a> - business example as an analogy so we're going to try to define all of the terms here<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=520">8:40</a> - based off of this analogy that we're setting up so before we go ahead and move any further uh does the the general<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=526">8:46</a> - situation that we're bringing up does this make sense in a high level yes it makes sense okay<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=532">8:52</a> - okay cool so now we're gonna do uh kind of the easy stuff so most people can<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=538">8:58</a> - kind of get this the first try these things aren't usually where people get hung up because as long as we keep it uh<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=544">9:04</a> - a set to just these things it's not so bad so uh we said that uh each individual here has a ledger right and<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=551">9:11</a> - then there's one that's shared between everyone that ends up at the bank and that one represents kind of like the final copy right um so uh in our<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=558">9:18</a> - terminology each ledger each record of the business financial transactions is<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=564">9:24</a> - going to be called a repository um that is the word used of them in programming terms um so in our analogy we're just<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=571">9:31</a> - going to call these records we're going to call them repositories so each co-owner of your company has their own repository and the main repository is<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=578">9:38</a> - the one at the bank still okay so far yes it is okay<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=583">9:43</a> - so next term to define here is called a commit so some action taken that is added to a<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=589">9:49</a> - repository so that could either be an individual's ledger or the shared one at the bank um so a commit here in business<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=596">9:56</a> - terms might be something like bought 500 units of new inventory for 10 000<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=602">10:02</a> - so a commit represents a single discrete change in state something has changed you record that<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=608">10:08</a> - change in a repository still tracking okay yes so this would be like an individual<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=615">10:15</a> - line on a transaction uh register so someone has done something we're gonna<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=620">10:20</a> - we're gonna update how does that affect our program um how does that change the state of our ledger um that is what a<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=628">10:28</a> - commit message represents and commits are discreet they're separable um typically if you are following good code<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=635">10:35</a> - style uh your commits will be all organized around one one thing so<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=640">10:40</a> - you try to do something in the commits you don't want to do a whole bunch of things you want your commits to be separable um so that if you need to roll<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=647">10:47</a> - something back you're able to get rid of just that undo the changes uh that are doing one thing specifically so uh just<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=654">10:54</a> - keep that in the back of your mind you don't want your commits to get like basically uh<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=660">11:00</a> - you don't want them to be doing multiple things all over the place you want them focused um and and that would be<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=666">11:06</a> - similarly to a business uh would want each line item in their record of transactions to be for one thing that is<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=674">11:14</a> - easy for them to understand what it is right so you buy these items you sell these items<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=679">11:19</a> - uh you make this acquisition uh you know you you deposit this amount of money you get the idea um something that is<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=687">11:27</a> - one purpose discrete separable that's what a commit is and commits are tracked in these repositories so you commit<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=693">11:33</a> - against a repository um each person uh each person has their own repository<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=700">11:40</a> - right each owner of the business has their record of the things that they're doing for the business right so they<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=706">11:46</a> - might spend some money they might gain some money each one of them has a record of these transactions here that we're<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=713">11:53</a> - calling commits um so uh like let's say if you have john<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=718">11:58</a> - and robert and joe and all three of those people are owners in a business<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=723">12:03</a> - they each have their own uh they each have their own repositories each person would be taking these actions and<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=729">12:09</a> - recording these actions in their own repository and then eventually all of these things that they've done would end<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=735">12:15</a> - up if the one in the bank so that's what we're going to talk about next so having made commits against a repository so<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=741">12:21</a> - they've kept track of the changes that have happened in their local uh ledger that we're calling a repository uh<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=748">12:28</a> - eventually we want to have all of these changes recorded in the main one right so uh this is called pushing so one of<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=756">12:36</a> - the business owners here takes their local repository so that's their individual business ledger where they've been keeping track of their changes and<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=763">12:43</a> - they take it to the bank which is called the remote repository here so the one that's shared among everyone's called<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=768">12:48</a> - the remote repository to update the shared ledger with their most recent financial activity so i think we said<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=775">12:55</a> - john and robert and joe right each one of them would take their uh their ledger to the bank and then they'd record the<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=782">13:02</a> - changes that they made in the banks one right and then so after each one of these three people push<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=788">13:08</a> - the banks ledger will contain all of the commits from their local repositories<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=795">13:15</a> - does that make sense yes it is so you can push one commit<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=802">13:22</a> - you can sorry say that again you can push more than one commits that is true um so<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=808">13:28</a> - uh each commit represents one uh state of change right so let's take john for<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=814">13:34</a> - example let's say john bought like oh i don't know what kind of business you have let's say you're in a grocery<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=820">13:40</a> - store so john bought a bunch of new fresh produce and then he sold<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=826">13:46</a> - you know the produce from the last day he would have some amount of money going out some amount of money coming in and<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=831">13:51</a> - he would record both things right but he would record them separately because if he record them at the same time<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=837">13:57</a> - what happens if there's a problem with some of the money coming in right what happens if someone overcharged or something um you see what i'm saying<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=844">14:04</a> - right you want to be able to isolate things so those things would be tracked separately but then eventually when all of this is<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=851">14:11</a> - going into the main record for the business then both of those things will need to be tracked<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=856">14:16</a> - right and so when he's going to the bank to fill out what changes he made to the business's account books he's going to<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=862">14:22</a> - record both things um so both of those things that we're calling commits will end up uh when he goes to the bank in<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=868">14:28</a> - the final record of things so that's called pushing um<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=875">14:35</a> - and each one of these commits uh is uh basically that they have unique names i<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=880">14:40</a> - won't get into exactly how this works um but you know you're gonna be able to track uh each line in this will be<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=887">14:47</a> - distinguishable from the others so uh you can just think of it as having numbers for now right commits one two<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=894">14:54</a> - and three may come from john four five and six may come from robert uh six seven or seven eight and nine might come<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=901">15:01</a> - from joe um and then in the final record of things you'll be able to see all of<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=906">15:06</a> - those all nine of those and you'll be able to see which one came from which person and things like that<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=914">15:14</a> - okay so a good question then might be so once once people have pushed their local<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=920">15:20</a> - commits to the remote repository the ones that shared then the remote repository has a complete record of all<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=927">15:27</a> - the transactions that happened of all the commits does that make sense<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=932">15:32</a> - yes then the question is how do the people get that the the complete uh the complete<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=939">15:39</a> - record of transactions well they want that in their own local ledgers as well right because otherwise they have like<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=946">15:46</a> - an incomplete set of information right they're operating on a certain set of assumptions about what assets the<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=952">15:52</a> - company might have but they don't know that so so john might not know that robert and joe spent money on this or<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=958">15:58</a> - earned money here and so if he doesn't somehow update his local copy to match<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=964">16:04</a> - the shared copy eventually his state will kind of get out of sync right and he'll be making decisions based on data<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=969">16:09</a> - that isn't valid anymore right and so just as people can sync the shared copy<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=976">16:16</a> - with their local copies you can also sync your local copy with a shared copy right this is called pulling um so you<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=983">16:23</a> - push to the remote repository that contains the shared version and you pull from the remote repository containing<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=990">16:30</a> - the shared version to get your local version up to date right so in our analogy how this would work is<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=995">16:35</a> - one of the business owners goes to the bank and they go get the shared copy and then they update their local copy to<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1002">16:42</a> - reflect the overall history of all the financial history across all of the different people so their local activity<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1008">16:48</a> - is still there in their ledger they don't overwrite theirs their activity is still there um but everyone else's<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1014">16:54</a> - financial activity that they didn't have previously has now been added to it<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1019">16:59</a> - yes you're tracking yes i am i am okay so this is the<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1025">17:05</a> - general uh idea of version control so different people have their own copies<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1031">17:11</a> - of the changes being made and then eventually all of the changes being made will end up in the shared version that<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1038">17:18</a> - represents like the the final state of the project um and that is uh that<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1043">17:23</a> - shared version is is what ends up getting hosted not locally for you but somewhere shared so<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1048">17:28</a> - it's on a server somewhere a github is an example of the bank in our analogy<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1054">17:34</a> - here uh they're the people who contain uh the shared ledger that everyone uh references so this repository here on<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1060">17:40</a> - github this is an example of the bank's ledger uh basically in our analogy and<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1066">17:46</a> - uh there's another another site called bitbucket that's the same thing as github so just as they're different banks there's different people who will<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1073">17:53</a> - happily support you uh keeping your your ledger that is shared among people<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1079">17:59</a> - on the internet somewhere okay so like i said this is what i would<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1086">18:06</a> - consider the easier part of the analogy all of these things kind of directly map onto our analogy very nicely kind of<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1091">18:11</a> - easy to wrap our head around i mean it's just new names for things for concepts that you can probably already kind of<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1097">18:17</a> - understand right and yes so now things are going to get a little bit more complicated um so the<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1104">18:24</a> - next thing we're going to talk about are called branches and like i said things are going to get more complex here so uh<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1109">18:29</a> - we've talked now about how there's different kinds of these business ledgers that we're calling repositories right there's different ones of these<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1115">18:35</a> - floating around some of them belong to individuals we have the shared one that belongs to the bank um so now<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1121">18:41</a> - even though we have multiple ledgers we're going to go a step farther now let's say that each ledger is further subdivided into sections so each one of<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1129">18:49</a> - these ledgers contains one main section that represents the overall financial record um so this is the record of all<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1137">18:57</a> - the transactions that have occurred you know kind of uh by by date uh you know so it's chronological and so on um and<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1144">19:04</a> - and this is the thing that is kept up to date with the bank's copy because this represents the total record<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1149">19:09</a> - of all transactions this represents the overall state of the assets of the company<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1155">19:15</a> - but you might group other sets of of commits other sets of transactions into a<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1160">19:20</a> - different section um and so the best way to think about this let me finish here um is that before<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1166">19:26</a> - certain groups of financial transactions so that is groups of commits uh according to our terminology here so<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1172">19:32</a> - before they go through and by going through we mean before they're pulled into the formal record<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1178">19:38</a> - as things that were kind of saying yes these things happened we're committing these to our history um<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1184">19:44</a> - they're actually going to be tracked separately and so basically they're going to be in a different section because they're treated as pending until<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1191">19:51</a> - the transaction's clear so you might think of these sections that aren't the quote unquote main<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1196">19:56</a> - section you might think of these sections as representing pending business deals that<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1201">20:01</a> - are almost certainly going to go through that is we're planning on doing them um<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1207">20:07</a> - but some additional negotiation on contract specifics might be required uh before they become final and get pulled<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1213">20:13</a> - into the main record um so very common uh in businesses in a business context<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1218">20:18</a> - someone might want to buy you know one company might want to buy another company but they have to go back and<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1224">20:24</a> - forth a bit to decide on terms and timing and things like that or if uh a<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1229">20:29</a> - manufacturer is buying supplies from a supplier right they might agree on a<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1234">20:34</a> - certain volume of shipment and a payment and they might have dates associated with this or whatever well<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1241">20:41</a> - what happens of in the process of negotiation something something bad comes up right they<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1246">20:46</a> - realize that a deadline is not going to be met uh the suppliers overcharging them or something well they might want<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1252">20:52</a> - to cancel it right and so the problem with directly putting uh some of these these commits that we've talked about<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1258">20:58</a> - right these incremental changes you know like one commit might be paying a supplier uh like half of the money up<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1264">21:04</a> - front and then you might pay them half once the supplies have come or something like that right or some other agreed<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1269">21:09</a> - upon you might make some commits before everything is done right well the problem with making those commits<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1275">21:15</a> - directly to the shared record is what happens if your new business deal falls through for some reason or if not falls<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1281">21:21</a> - through you have to like renegotiate something comes up right something in this pending set of transactions that<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1288">21:28</a> - you want to do i'm using a business deal that's our conceptual unit here for a set of<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1294">21:34</a> - transactions so not one commit uh i mean it could just be a single one but one or more commits uh represent this a unit of<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1302">21:42</a> - work that we're doing here um uh kind of conceptually one thing but uh it<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1307">21:47</a> - represents you know these individual transactions taken to get there well all of these things are going to happen in a<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1313">21:53</a> - separate section then the main section where we're tracking the formal history because we don't want to have these<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1319">21:59</a> - things end up in the final history of our ledger until we're sure that they're actually going to happen right until<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1326">22:06</a> - everyone has looked at the changes and we've decided that yes this is this is a good thing we want to keep<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1331">22:11</a> - this this is this is what is going to actually uh be there moving forward<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1336">22:16</a> - yes does it kind of make sense at a high level um yes okay we have a little more to say<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1342">22:22</a> - here and so like i said we're calling these things branches so a branch is a section in an individual ledger and like<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1348">22:28</a> - i said by convention we do have a main branch the one that represents the overall history um so by convention the<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1354">22:34</a> - branch representing the overall final record is often called master um so that's the name of this branch is called<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1360">22:40</a> - master although some people are now calling it main uh due to uh some of the unfortunate slavery associations with<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1366">22:46</a> - the word master um so most people really won't bat an eyelash if you call it either one of these things these are the<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1372">22:52</a> - two names most conventionally used for this this particular branch as a concept and so this is the final record where<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1379">22:59</a> - you're tracking the overall state uh of uh like your your business ledger at any point in time and so also by convention<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1386">23:06</a> - this is what we were just talking about here no individual co-owner so no one in the business will have deals that go<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1392">23:12</a> - directly into the permanent record um for the reasons we just said what happens if something comes up what<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1398">23:18</a> - happens if something goes wrong you have to renegotiate terms something like that you won't have the records of all these<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1404">23:24</a> - transactions end up in the company records until we're sure that the deal is actually going to go through<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1410">23:30</a> - um so in that way we will always have a different branch for each new pending business deal in case one of them ends<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1416">23:36</a> - up having issues um and so remember how we were talking about in terms of repositories each of<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1423">23:43</a> - the co-owners in your business has their own repository and then there's the shared one well for these pending<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1429">23:49</a> - business deals the most up-to-date information relating to one of these things uh so one of these specific<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1435">23:55</a> - pending deals right that set of transactions that's happening uh in pursuit of some specific goal uh well<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1442">24:02</a> - the most up-to-date information for that will probably be located uh on the branches so again branches are sections<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1450">24:10</a> - in the ledgers um of the individual business owners and so that means that there will be a section in the ledger of<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1458">24:18</a> - a specific individual rather than the shared one dealing with some of the transaction history relating to uh<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1464">24:24</a> - whatever the pending business deal is do you need me to repeat that or do you think you tracked there<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1472">24:32</a> - i think i tracked it so again each individual has their own<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1478">24:38</a> - specific ledger uh their own record of the financial transactions that's called a repository um<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1485">24:45</a> - each transaction itself uh each set of of things being done we call a commit<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1492">24:52</a> - but uh in the section of the repository so in a section of a ledger you might<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1498">24:58</a> - have multiple commits relating to a new pending business deal that's the idea of a branch<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1503">25:03</a> - so in terms of relationships a repository might have multiple<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1509">25:09</a> - branches and each branch might have multiple does that make sense<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1515">25:15</a> - okay um just one thing that's confusing me um<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1520">25:20</a> - said that the branch that represents the overall final record is called<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1527">25:27</a> - the master or domain [Music] so you should understand<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1533">25:33</a> - that the branch can mean the entire repository<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1539">25:39</a> - or is there something else i should understand there<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1545">25:45</a> - so the repository isn't uh the main the master branch it's not as if the master<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1550">25:50</a> - branch equals the entire repository um so each branch represents uh you know<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1555">25:55</a> - one state of the assets of your company in our analogy um and the master branch<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1562">26:02</a> - happens to be the one that has all of the transaction information across everyone it happens to be the one that has the<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1568">26:08</a> - most complete state but a repository actually isn't the master branch a repository contains<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1574">26:14</a> - multiple branches right the repository is the whole ledger which conceptually contains the main record but it also<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1580">26:20</a> - contains these other sections relating to kind of pending changes right things<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1586">26:26</a> - that haven't yet come in to the main record but are kind of in progress<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1592">26:32</a> - um so repository is a collection of these branches right one of the branches like you said is the main historical<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1598">26:38</a> - record has all the changes from the beginning of time related to the financial<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1604">26:44</a> - aspects of your view company but all of these other sections in the repository might be related to these deals that are<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1610">26:50</a> - kind of underway on these things that are still going on<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1616">26:56</a> - okay so a repository will contain more than just the information on what's going on<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1623">27:03</a> - right now or what the state of things is right now so it will also contain information<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1628">27:08</a> - about what what might yet be or um use that<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1634">27:14</a> - i mean i might not think of this so much in terms of temporal sense um i think it's best to think of it as uh you have<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1641">27:21</a> - a history right you know that's kind of another thing for this log for this ledger idea and<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1646">27:26</a> - uh one history is the one that has kind of been set into stone right it's like been<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1652">27:32</a> - recorded in the history books if you will that is the master branch right this is the one where once things end up<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1658">27:38</a> - there uh they don't canonically at least they don't change anymore right um yes<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1663">27:43</a> - and it's the things that um are kind of based on uh so if you've ever seen<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1670">27:50</a> - um uh you know idea in like time travel books or whatever how there's like branches in a tree right if someone<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1676">27:56</a> - makes a certain decision then some other things happen right but different branches share the same starting point<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1683">28:03</a> - that is entirely why we use the word branch here because you might have um let's go back to our<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1691">28:11</a> - our people here john and robert and joe right so john and robert two people who work for the same company the the<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1697">28:17</a> - co-owners of this company right so john and robert might both be working on two things at the same time<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1702">28:22</a> - now let's say that they both start their new business deals uh right on the date<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1708">28:28</a> - of like march 15th so that's the day when they look at their they look at their ledgers they go to the bank they<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1714">28:34</a> - they they pull right so they they go to the bank and they they update their local history to make sure that they're<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1720">28:40</a> - up to date with what's going on in the bank's ledger right so that's called polling now they they are up to date uh<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1727">28:47</a> - they know that their their financial record is current with the financial record for the whole company<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1733">28:53</a> - um so they pull on march 15th and then they start their business deals and so john's business deal might be different<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1740">29:00</a> - than robert's business deal but they both start from the same place right so on march 15th their local ledgers look<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1747">29:07</a> - exactly the same right and then they both quote unquote branch off of it uh<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1753">29:13</a> - because they're doing something new and so john let's say he's acquiring trucks right he<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1760">29:20</a> - wants to make more logistic shipping for the stores so john's business deal is relating to acquiring trucks that's what<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1765">29:25</a> - he's doing so all of his transactions will be related to i don't know maybe<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1771">29:31</a> - buying trucks retrofitting them hiring drivers things like that right um let's<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1776">29:36</a> - say that robert his focus isn't on trucks but it's on oh what's a good thing uh i mean we'll<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1783">29:43</a> - just go with infrastructure we'll keep on going here his his things about buying new store locations okay so john<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1789">29:49</a> - is buying trucks and figure buying uh people not buying people uh hiring<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1794">29:54</a> - people to drive the trucks and stuff like that um and then robert's working on buying store locations right so he<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1799">29:59</a> - might have to buy property hire a construction company you know hire someone to uh pour the the asphalt for a<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1806">30:06</a> - parking lot things like that right so both of them start on march 15th from<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1811">30:11</a> - the same place they have the same set of financial information and then uh john spends some money uh he<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1818">30:18</a> - makes some transactions he has a certain set of things that are uh branching off from that march 15th point i<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1825">30:25</a> - after he does all of these things the state of the ledger would be updated right and similarly robert starting from<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1832">30:32</a> - march 15th does another set of things but starting from that same point right and so from a certain<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1839">30:39</a> - from a certain point of view if you from the perspective of march 15th if you could look into the future it's as if<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1846">30:46</a> - uh it's as if a split happened there right it's as if those people started at the same place<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1852">30:52</a> - and then uh you know a branch like i said you think of time travel here a branch was<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1857">30:57</a> - taken and you know if you were in john's shoes this stuff happened if you were in robert's shoes this stuff happened<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1864">31:04</a> - yes tracking so far okay so that's the idea of branches right you you have this initial starting<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1870">31:10</a> - state uh from your history uh the the master branch uh the main branch uh in<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1875">31:15</a> - your repository represents the shared set of history this is what's set in stone the final record that's where<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1882">31:22</a> - that's where every single new business deal starts from so every single time uh you're going to be doing something new<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1888">31:28</a> - uh you the steps are first you go you pull you go to the bank you make sure that you have up-to-date information on<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1894">31:34</a> - the assets of your company right you don't want to go strike out making a new business deal if you don't know what your current assets are right you want<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1900">31:40</a> - to make sure you're up to date and then so you're going to pull and then you have your record of transactions you<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1906">31:46</a> - know exactly what the state of your company's financial assets is and then you're gonna go start doing whatever you<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1913">31:53</a> - need to do for uh the goal that you have right and then you're gonna branch<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1919">31:59</a> - you're gonna branch off of the master branch at that time you're gonna have that split where you say okay this is<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1925">32:05</a> - the financial information of what we currently have but now i'm gonna go do something different but i'm gonna start<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1931">32:11</a> - with the same thing that is already there right yes okay so<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1937">32:17</a> - now this gets more complicated because so individuals can have local branches<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1942">32:22</a> - right so in their local ledgers uh their record books of the finances of the<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1948">32:28</a> - company so the thing that they carry around with them they'll have a history of the transactions that<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1954">32:34</a> - they're making for their new business deal right and that part easier to understand however you can<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1961">32:41</a> - kind of see why the company as a whole might want to track the pending deals going on right so<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1968">32:48</a> - both john and robert are doing things related to company infrastructure right whoever manages all of the finances but<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1975">32:55</a> - want to know how much money is this person spending how much money is this person spending uh what pools you know<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1980">33:00</a> - most companies share they have like budgets so different departments have different budgets and stuff right where's the money coming from can they<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1985">33:05</a> - both use these resources at the same time where we can have problems right so<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1990">33:10</a> - you would want to track this sort of thing and so eventually both john and robert are going to want to push they're<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=1997">33:17</a> - going to want to say you know what i've been doing some stuff now i bought my trucks i bought my property i've hired<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2003">33:23</a> - some construction workers i need to go record this information in the bank's ledger so that the other people in the<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2009">33:29</a> - company can see what i'm doing right so that they can have a view into oh the changes that are<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2015">33:35</a> - going to be made if my deal goes through right if all of the changes that i've made end up coming into the the final<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2022">33:42</a> - record well then all of this stuff is going to be affecting other people and so<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2028">33:48</a> - um they have their their local copy of branches right so this is the section in<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2034">33:54</a> - their personal ledgers of the company finances dealing with their new business deal<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2039">33:59</a> - that they're doing right so they have that but every once in a while they're going to go back to the bank and they're going to say here's the progress on my<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2046">34:06</a> - new business deal since the last time i checked in right i've made some additional commits i've done some<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2051">34:11</a> - additional things right these these atomic operations uh that represent you know changes in the state of the<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2057">34:17</a> - application i've bought trucks i've hired people uh you know uh things like that right these<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2063">34:23</a> - transactions um are the commits and uh you might have multiple commits to a branch each branch<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2070">34:30</a> - representing this this new direction this new business deal and then eventually you might register uh the<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2076">34:36</a> - branches you might update uh the the the bank's record of how your deal's going<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2082">34:42</a> - and that's called pushing as we talked about here yes yes okay i understand it<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2091">34:51</a> - okay right so this is definitely more complicated than when we just had this right because suddenly now we're saying<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2098">34:58</a> - that uh rather than straight up committing to a repository actually commits belong to<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2104">35:04</a> - branches and branches belong to repositories right um so each ledger can<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2109">35:09</a> - have multiple sections in it one section will contain the history since the beginning of time that's called the<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2115">35:15</a> - master section usually or the master branch and then the other ones are these<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2120">35:20</a> - branches representing pending sets of changes pending business transactions going on<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2125">35:25</a> - and so a repository is a collection of all the branches and then each branch has a set of<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2131">35:31</a> - changes associated with it so the whole change set is per branch but within that<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2137">35:37</a> - it will be composed of multiple different commits a multiple different smaller sets of changes representing a<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2143">35:43</a> - very specific a very specific change in state<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2148">35:48</a> - okay so definitely more complicated right and this is why i said version control can<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2154">35:54</a> - take a little bit to get through so now we're going to talk about things this is from the level of organizing your work<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2160">36:00</a> - on a programming team so we just talked about branches now branches conceptually come about when<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2167">36:07</a> - you have a new goal so we're going to talk about these things i'm going to call them work items although you might hear them called tasks or product<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2172">36:12</a> - backlog items depends on which software development infrastructure you're using um so<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2178">36:18</a> - each work item basically represents a block of things you want to do right so in the example that we have had here<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2184">36:24</a> - john's work item was he wanted to increase the number of trucks that the<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2190">36:30</a> - company had for shipping right that was what he was trying to do and so all of the transactions he made all the commits<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2196">36:36</a> - he made were related to that right one commit was buying more trucks another commit was retrofitting the trucks<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2201">36:41</a> - another commit was hiring drivers right all those are separate but they're all related to this goal of<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2208">36:48</a> - getting more trucks for the company right and then robert's goal was uh you know<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2213">36:53</a> - buying more store locations so he'd buy the property he'd hire the construction company to build the store hire the<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2218">36:58</a> - people to lay out the parking lot and each one of those commits is separate but all of those things are working<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2224">37:04</a> - towards the goal of getting more store locations open right<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2229">37:09</a> - so each of those commits would be going on separate branches but actually each branch is organized by one specific like<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2236">37:16</a> - conceptual thing it's the branch is trying to do something right all of the work for a purpose is is towards some<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2243">37:23</a> - end and that's what we're calling a work item so each individual pending business deal is typically tracked on its own<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2249">37:29</a> - branch so like i said uh when john is doing his thing with the trucks he's kind of doing that separately from what<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2255">37:35</a> - robert's doing with the stores each of those things is tracked separately just as you'd expect in a normal company<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2260">37:40</a> - right because those are kind of separate endeavors they each have their own uh costs and schedule pressures and you<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2266">37:46</a> - know all of the different factors there but they're kind of done separately in parallel um so each pending business<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2272">37:52</a> - deal is tracked on its own branch so that the pending business deals don't interfere with each other right so that<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2278">37:58</a> - everything is kept nice and boxed and all of the work associated with this work item<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2284">38:04</a> - is cleanly separable onto the branch for that work item right so if you want to see how are things going on john's<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2290">38:10</a> - acquisition of trucks you can go see all of the commits that have been pushed to that branch<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2296">38:16</a> - again pushing back here right of the record of what's going on in the bank's register um you can go check that<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2302">38:22</a> - for the work item here of acquiring trucks and you'll be able to see all the progress that's been made on that branch<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2307">38:27</a> - and similarly you'll be able to do the same thing with robert's branch for acquiring store locations uh even though<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2312">38:32</a> - it's it's in a different section of the legend of the ledger right those things are being tracked separately but you can<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2318">38:38</a> - see how both of them have diverged since they split off of the shared history of<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2323">38:43</a> - of when the the the new a business deal started this was the set of assets that<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2328">38:48</a> - the company had and things like that um so as we've said each one of these goals<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2334">38:54</a> - will be achieved through a collection of one or more commits targeted at the specific business dealing right these<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2339">38:59</a> - commits are going to a specific branch which is tracking all of the changes being made uh towards this work item um<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2346">39:06</a> - typically with a very definite purpose in mind right again in our example definite purpose is uh john's acquiring<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2352">39:12</a> - trucks and robert's acquiring new store locations um so i give some examples here in business<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2358">39:18</a> - the goals might be like acquire x company or sell stockpiled supply to bring market prices down or whatever<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2364">39:24</a> - right each one of these things might ultimately need multiple transactions to coordinate the work being done but<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2369">39:29</a> - together kind of represent one thing right hence uh getting more trucks for the company involves again buying the<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2375">39:35</a> - trucks retrofitting the trucks hiring the drivers right each one of those is a specific milestone in the process but<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2381">39:41</a> - together they all compose the idea of getting more trucks right um and so all of this is why each a new<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2389">39:49</a> - business deal is tracked on its own separate branch right so that you can track uh the progress on the work being<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2394">39:54</a> - done uh kind of separately still making sense<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2400">40:00</a> - yes so all the activities relating to one specific thing that's being done<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2406">40:06</a> - will be on its own that's correct it's rather than each of those<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2412">40:12</a> - activities being a branch and it's it all constitutes one branch<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2418">40:18</a> - now the lines can get a little bit fuzzy like how do you how big how many things do you clump together because arguably<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2425">40:25</a> - there might be some tasks involved in like hiring drivers too for example right like you might have to go contract<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2431">40:31</a> - with a labor company and set up insurance health insurance plans for the drivers and those things are tasks too<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2436">40:36</a> - right so do those things get their own branches well you you kind of draw a line somewhere and you say okay this is<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2442">40:42</a> - the the higher level concept that may have sub tasks and those subtasks may have sub tasks and i mean it can break<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2448">40:48</a> - down further than that but eventually you you you say everything that goes in this box is related to this thing right<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2454">40:54</a> - that is the branch level<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2461">41:01</a> - okay so now we're going to talk about what happens when despite your best efforts<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2468">41:08</a> - the branches that you're working on separately what happens when they come into conflict with each other and you have to reconcile the records um<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2475">41:15</a> - so uh let me go ahead and read this this is this is going to be one of the harder things to understand here um so uh this<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2481">41:21</a> - process we're going to call it merging so in the process of making a business deal your company's assets and<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2487">41:27</a> - liabilities might change due to the actions of your business's co-owners so someone other than you right uh let's<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2493">41:33</a> - say you were in charge of acquisitions for your company and therefore the acquisition budget your current business<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2499">41:39</a> - deal might depend on you having a certain amount of capital on hand therein but what happens if jeff is one<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2504">41:44</a> - of the other co-owners what happens if he uses some of the company's money in that budget for a really important<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2509">41:49</a> - internal research project so that money that you're counting on for your business deal well someone else just took some of it right suddenly you now<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2516">41:56</a> - need to reconcile the changes in the global business ledger with your pending business deal uh that is your local<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2522">42:02</a> - branch corresponding to one of these work items that we're talking about here right<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2527">42:07</a> - so uh to keep using our example here uh let's say that uh john and robert were<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2533">42:13</a> - sharing resources right they were pulling money from the same place and robert uses some of that money to buy a<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2539">42:19</a> - new store location but suddenly now john doesn't have enough to cover the cost<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2544">42:24</a> - that he thought he was going to have for buying a truck right and so how this would play out in a code practice is<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2551">42:31</a> - robert would go he would um you know he would be<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2556">42:36</a> - uh making his business deals and then he'd go to the bank and say okay here's the stuff i've done and then uh<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2561">42:41</a> - similarly john would go to the bank to be okay here's the stuff that i've done or the things that i promised the obligations that i have<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2567">42:47</a> - and then eventually they'd see that oh wait uh this isn't good right let's say<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2572">42:52</a> - that robert's stuff finishes first so robert closes his business dude he signs the contract with the people that he's<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2578">42:58</a> - buying the property from they shake hands it's in ink right can't be undone now right and so he finishes before john<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2585">43:05</a> - and then john comes back and says oh wait look at that wire transfer right robert transferred more money than i<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2590">43:10</a> - thought he was out of this account so suddenly john doesn't have quite enough to cover what he thought he was going to<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2595">43:15</a> - have right now he has to renegotiate the terms of his contract he has to figure out what he's going to do given the fact<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2603">43:23</a> - that things have changed since he first branched off of the initial history of the ledger right so in our example we<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2610">43:30</a> - said john and robert were both starting from the state of the company's assets on march 15th<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2616">43:36</a> - that was what we were using in our example right and since march 15th robert has pushed<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2622">43:42</a> - his changes and we'll in fact he's merged them we'll talk about full requests in just a second here but<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2627">43:47</a> - robert's stuff has gone into the final record right it's now part of the company's business transaction he's he<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2633">43:53</a> - signed it in inc it's not reversible anymore and so suddenly now john has to reconcile<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2639">43:59</a> - the the fact that the final record has changed so the state that he started from is not the current state now so<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2645">44:05</a> - when his changes go into the final record they have to play nice with everything that's already there right<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2651">44:11</a> - and so things have changed since john first started making his new business deal<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2656">44:16</a> - and so he's going to have to reconcile his contract with the changes that have<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2662">44:22</a> - happened since he first branched off of that initial state um<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2667">44:27</a> - so now he has to reconcile changes in the global business ledger with his pending business deal right and that<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2673">44:33</a> - pending business deal is tracked in a section of his of his personal ledger right um it's one<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2682">44:42</a> - of the things in his local repository right and he occasionally will be pushing uh the stuff that he does to the<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2689">44:49</a> - remote repository that's to the bank's ledger saying okay here's the progress i'm making in my business deal in this<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2695">44:55</a> - set of tasks that i'm undertaking here okay so a lot of the time you won't have to<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2701">45:01</a> - scrap your pending deal entirely right but you might need to figure out how to square what new thing you were trying to<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2707">45:07</a> - accomplish with the changes in the company's overall ledger right so if someone else touches something that you were depending on or relying on you<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2714">45:14</a> - might have to make some some tweaks some changes to adjust here um so this process of reconciling uh what has now<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2720">45:20</a> - become the final the final ledger uh even the so of reconciling the changes in the final ledger uh with your branch<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2728">45:28</a> - is called merging um so it usually involves combining your new pending branch so this<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2733">45:33</a> - this section in your local ledger uh with the master branch um so occasionally you might actually merge<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2740">45:40</a> - two branches where one of the branches isn't master right so if you have uh two<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2746">45:46</a> - business deals going on at the same time and they're kind of related to each other you might say you know what we should be tracking all this stuff in one<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2752">45:52</a> - place right and you might consolidate branches actually and in that case you would merge one branch into another<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2757">45:57</a> - branch and you'd say okay uh like let's say let's say that john who's acquiring<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2763">46:03</a> - the trucks uh let's say that he has a subordinate named jim okay and so jim<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2769">46:09</a> - was working with some other thing and initially the company was tracking their stuff separately but then they said you know what jim stuff is really kind of<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2775">46:15</a> - under john right jim's negotiating the labor contracts or something but his stuff really part of john's goal right<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2782">46:22</a> - relating to all the trucks so then they might merge those two branches and track all of those changes<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2789">46:29</a> - in the same place does that make sense yes so normally the most normal thing that you<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2795">46:35</a> - have to do is you have to merge the master branch that has changed because someone else has done something since<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2801">46:41</a> - you branched off it uh since you basically since you started uh your new project and you've been making changes<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2808">46:48</a> - uh to the the record uh as your company had it from that point in time well now suddenly the company record the global<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2814">46:54</a> - company record has changed now you have to reconcile the changes that you've been making with the changes that<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2819">46:59</a> - someone else made right usually that is what you have to do when you merge right you have to reconcile<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2826">47:06</a> - the two records to make everything work and play next with each other um so it's actually pretty common to have<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2833">47:13</a> - merging be easy so this might sound scary like any time someone else changes something everything's gonna break<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2839">47:19</a> - that's actually not the case um a lot of the time you don't have to do anything so in our example that we brought up<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2845">47:25</a> - here where jeff kind of pirates some of your uh your acquisition budget for his internal research project right well if<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2851">47:31</a> - jeff were rather than taking your money if you were to take money from the r d budget let's say your company has an r d<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2857">47:37</a> - budget well it wouldn't actually mess with the acquisition budget that's important for your need deal um<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2863">47:43</a> - and therefore it wouldn't like mess with your new deal right and so your new deal could still go through even though jeff<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2869">47:49</a> - did this and even though the company's spending money over here now we don't really care because it doesn't really affect your stuff right um yeah and so<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2877">47:57</a> - you'd still want to know about jeff's expenditure right so you'd still want to go to the bank uh you know as you do<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2883">48:03</a> - periodically to go to the bank to pull right and get that updated ledger for the transactions of what everyone else<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2889">48:09</a> - has done and so you'll go there and you'll be like hey any changes and they'll say oh yeah look jeff jeff bought this stuff for that internal<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2895">48:15</a> - research project and you'll be okay cool um you know i'm glad that progress is being made over there but you know that's not really my stuff so you know<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2901">48:21</a> - i'm happy to see my acquisition budget still untouched right all that money i need for my business deal well i still<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2906">48:26</a> - have that right this is actually probably the the more common case especially if your team is<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2912">48:32</a> - well coordinated so if you have good meetings at your company you try not to have people step<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2919">48:39</a> - on each other's toes right you try to make sure that people are working on independent things that they're not going to cross each other's paths and<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2925">48:45</a> - get in each other's way right but sometimes it happens you know even if you don't intend for it to sometimes it<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2930">48:50</a> - happens anyway right but a lot of the time you can get a merging<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2936">48:56</a> - doesn't always have to be gross so so we still call it merging right we still call it merging so taking what's in the<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2942">49:02</a> - master record and putting it in your own record so that your own record is up to date with the master one we still call<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2948">49:08</a> - that merging even if there aren't any conflicts it's still merging we just call it an easy merge right<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2954">49:14</a> - um and so if you think of this if you think of this again as that that decision tree where we have branches so<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2962">49:22</a> - this is why they use these words right it's supposed to help us envision this idea of history so if a<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2967">49:27</a> - branch is where something deviates from like this this common path right well<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2973">49:33</a> - when you merge you're going back into the common path right so<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2978">49:38</a> - you're kind of you're you're coming off it and then you reconcile your changes with whatever's there and then you you go back into it you merge back into it<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2985">49:45</a> - right that's how you ought to think about this right um yes now so we said sometimes and in<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2991">49:51</a> - fact a lot of the time if you organize your work well merging won't be that bad right it it should happen completely<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=2997">49:57</a> - automatically you don't have to worry about it because no one will be touching your stuff uh but if there are conflicts<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3002">50:02</a> - suddenly then you have to reconcile the two records that now conflict in some area and this can sometimes get really<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3008">50:08</a> - really messy and gross um this is a very challenging part of being a software developer um<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3014">50:14</a> - usually all it takes is a time or two for you to have a really gross merge for you to like get it through your head this is terrible i never want to do this<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3020">50:20</a> - again um and then you'll be sure to communicate better with your teammates so it doesn't happen again um<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3026">50:26</a> - you'll get the hang of this communication very important in avoiding really bad merge conflicts right so uh<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3032">50:32</a> - in code terms i'm gonna i'm gonna break our analogy for a second here in code terms if you and a coworker are both<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3038">50:38</a> - working on the same file changing the same functions you're going to step on each other's toes right you might change<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3044">50:44</a> - the same line of code and how how is the the ledger how is the the record here how is it supposed to know which which<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3050">50:50</a> - change it wants right it can't do that on its own that's how you have to<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3055">50:55</a> - resolve conflicts in code now for our business transaction this might be someone's using money over here but you<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3060">51:00</a> - said you were using that money who actually gets to use the money right that's in our business context the the<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3066">51:06</a> - idea of these conflicts here um so again merging sometimes it's easy<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3071">51:11</a> - but if it's gross it can be really really gross and so let me again emphasize that an ounce of prevention is<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3076">51:16</a> - worth a pound of cure here so it's definitely advisable to tell your co-owners to temporarily keep their<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3082">51:22</a> - hands off of your acquisition budget if you know that you're going to be dealing with it so in code terms if you say hey i'm work i'm dealing with this function<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3089">51:29</a> - and this file don't touch it um sometimes it'll be harder because sometimes everything's connected and it's really<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3094">51:34</a> - hard to avoid stepping on each other's toes but as best you can good communication can help you avoid really gross merge conflicts um<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3101">51:41</a> - it kind of depends how big your team is too um but all right so last thing to cover for<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3108">51:48</a> - merging here is this idea of merge conflicts so merge conflicts are the things that<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3113">51:53</a> - cause the merge to not go easy right on the specific areas leading to some form of conflict when merging<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3120">52:00</a> - two branches so merge conflicts arise when these two different ledgers are trying to do something different with<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3125">52:05</a> - the same resources so in our example on this slide this would be with the acquisition budget right if you're the<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3131">52:11</a> - only one using it you won't have any problems but if someone else suddenly starts using it too then you have to know well who actually<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3137">52:17</a> - gets to use it and what do they get to do with it because if you have two different reports of what is happening with it<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3143">52:23</a> - then how is the bank the bank record of the bank ledger which represents the final uh set in stone state well what<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3150">52:30</a> - goes in the record for all time um<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3156">52:36</a> - and that will need to be reconciled okay how we doing um<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3166">52:46</a> - okay i think you've got everything still so far yes yes okay<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3172">52:52</a> - um so next we're going to talk about pull requests okay so now we've talked about repositories commits pushing pulling<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3179">52:59</a> - branches work items which are the things that kind of represent the work that happens on a branch and then merging<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3187">53:07</a> - which is when you get one branch stuck into another branch so that you can get that final record<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3193">53:13</a> - ironed out now we're going to talk about pull requests so once a business deal and that's what<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3199">53:19</a> - we're calling a work item or a task has been completed and all contract negotiations have been finalized and<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3204">53:24</a> - looked over which means that whoever's been a running point on this business deal has pushed they've put their<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3210">53:30</a> - changes in the bank's ledger not in the master branch not in the main section of the bank's ledger but in<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3216">53:36</a> - their little section detailing all the work that they've been doing on this business deal so they've put it in a place where everyone else can see it<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3223">53:43</a> - right in the bank's ledger so in that part of the bank's repository they push their branch to the main repository so<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3230">53:50</a> - that other people can look at their branch right so once the person has done that and<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3235">53:55</a> - the business deal has been inked into the bank's version of the ledger so that some or all people in your company have been able to give it a look and approve<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3241">54:01</a> - it so after that happens a request is made to incorporate the new deal into the<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3247">54:07</a> - main section of the bank's official ledger so this is the step in which it becomes written in stone right it gets<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3254">54:14</a> - added to the main history that shall not be touched um so um<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3260">54:20</a> - branches you know branches branch off the main branch and to get merged back<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3265">54:25</a> - into the main branch the actual thing that gets them stuck back into the main history is called pull request<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3271">54:31</a> - so a pull request is really kind of like a special kind of merging right so you merge<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3276">54:36</a> - you typically merge master into your local branch and then you open a pull request to get your local branch stuck<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3282">54:42</a> - back in master um so this is after your new business deal<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3289">54:49</a> - has closed uh you've made all the made all the transactions you need to do to get something done everyone has approved<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3295">54:55</a> - it so this is an important step it's called peer review um so you peer review pull requests you say hey i think i'm<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3301">55:01</a> - done with my business deal um here's all the things i did does all this look right does it check out with the goals<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3307">55:07</a> - that we had in mind for this and then you'll get other people from your company to come and look at it and they'll be like yeah that looks like<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3313">55:13</a> - what we wanted go ahead and put that in our final history right um<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3318">55:18</a> - that's what pull requests are um so typically and again note the emphasis here pull requests are typically always<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3325">55:25</a> - against the master branch in the bank's copy of the ledger so uh each individual person will have a local copy of<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3333">55:33</a> - the full history right so they'll have a local copy of the master branch but you don't put a pull request against that<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3338">55:38</a> - what you put a pull request against is the bank's version of the set in stone history<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3345">55:45</a> - right because that's the thing that represents actually the current state of your project if you remember when we<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3350">55:50</a> - were setting up our analogy we said that the the real copy so to speak is the bank's copy um<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3358">55:58</a> - for the main branch right so if you get audited by the irs that's the one that's important right and so what the pull<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3364">56:04</a> - request does is it it says all this work that we've been doing in an area now that's going to go into the irs copy of<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3370">56:10</a> - this right that's going to go into the the main important one that is shared between all people<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3379">56:19</a> - so a pull request is different from a pool that is correct<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3384">56:24</a> - um so a poll is something that a an individual does uh where they go to the<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3390">56:30</a> - bank and they get a copy of the bank's main ledger right that's what polling is um actually you<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3396">56:36</a> - don't just you don't just get a copy of the main ledger you can actually get copies of other people's uh uh business<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3404">56:44</a> - deals branches right so you can pull down any branch as long as the branch<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3410">56:50</a> - has been entered in the bank's ledger you can get a copy of that section of the ledger<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3415">56:55</a> - does that make sense so so in our example of john and robert<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3420">57:00</a> - earlier you know john's doing the truck stuff robert's doing the store location stuff as long as both john and robert<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3425">57:05</a> - regularly go to the bank and update the bank's ledger on their progress the other person will be able to keep an eye<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3431">57:11</a> - on what the other one's doing right because they'll be able to go to the bank and they'll be able to pull the other person's branch and say okay good<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3437">57:17</a> - he's done this and this and this and they'll be able to like watch each other's progress right so you could you pull branches from the bank a pull<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3444">57:24</a> - request i i know this people don't like the word i hate how they named this this is how it's<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3450">57:30</a> - been named we can't change it but a pull request is kind of like the opposite of polling because polling is the bank's<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3458">57:38</a> - ledger basically you're getting a copy of the bank's ledger and it's putting it in your own ledger a pull request<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3463">57:43</a> - is you know you're opening a request other people have to approve it right they have to look it over and say yes we want<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3469">57:49</a> - this but it's going the other direction it's saying hey i made some changes uh in my localizer i've now pushed those<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3475">57:55</a> - changes to the bank's ledger but now i want this section of the ledger i want it to become one with the main section i<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3482">58:02</a> - want to merge it into the main section so you're taking uh where is pulling normally<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3488">58:08</a> - is you getting something from the remote repository right a pull request is you<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3494">58:14</a> - take something from your local repository you push it up to the remote repository so it's in the shared ledger and then you're going to combine that<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3500">58:20</a> - with the master branch it's kind of like it's not exactly the opposite but it's<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3505">58:25</a> - definitely different right okay<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3516">58:36</a> - okay so i mean i know all of this is very hypothetic it's all very abstract right now right um but<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3523">58:43</a> - hopefully the analogy is helping kind of us uh orient ourselves in terms of what<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3528">58:48</a> - these things mean at a high level um all right so even as much as we've gone through here<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3534">58:54</a> - right believe it or not we've actually made quite a few simplifications uh for how this stuff actually really works i<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3539">58:59</a> - give two examples here these aren't it's not an exhaustive list there's other other points to be made too but in a<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3545">59:05</a> - real production environment so this is like when you're deploying to an actual server you have an application that a whole bunch of people are hitting um<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3550">59:10</a> - there's actually usually several branches that correspond to some finalist version of the ledger right so<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3557">59:17</a> - in our previous discussion we've been saying that the the one history version is called master right that's according<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3563">59:23</a> - to the discussion we previously had it's actually a little bit of a simplification a lot of the times um you'll have multiple versions of this of<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3570">59:30</a> - this so-called final state right so all of these different ones might have pull requests against them rather than just<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3575">59:35</a> - having a single master branch um so it's actually common to have no branch called master and instead you'd have<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3581">59:41</a> - three you might have a branch called dev a branch called test and a branch called production which everyone just calls<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3586">59:46</a> - prod so the split here this is the one that that you and your team push to when you're like developing a new feature<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3593">59:53</a> - test is when the feature goes to whatever testers your customer has to make sure that you're doing the right<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3598">59:58</a> - thing and then production is when it goes into it goes into effect for like final end users right<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3604">1:00:04</a> - um now some people might have four uh dev same deal right this is where you<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3610">1:00:10</a> - and your team are working on stuff it's kind of in progress still integration uh this is an extra step where suddenly<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3616">1:00:16</a> - you're pushing to your you're pushing to your deployed environment this is literally this is still not it is not<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3622">1:00:22</a> - crossing the eyes of external testers it's still you and your team but what you're doing is if you're pushing your<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3628">1:00:28</a> - code onto a server rather than running it on your own computer you need to make sure that that environment works well um<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3633">1:00:33</a> - so both of these are pretty common development patterns um so each one of these three things uh kind of represents<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3640">1:00:40</a> - a final state right so uh generally speaking uh dev is<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3645">1:00:45</a> - it's like has more recent activity to it than test and test has more recent activity than<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3650">1:00:50</a> - prod and so in terms of like what's most up to date dev will be most up to date but it's also less stable right because<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3657">1:00:57</a> - you might have stuff that ended up in dev but maybe there's a bug or something um<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3662">1:01:02</a> - so these are actually pretty common uh like quote unquote real approaches right<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3668">1:01:08</a> - for small projects a lot of small projects actually really do just have master right and they do<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3673">1:01:13</a> - make pull requests directly to master if you don't deploy somewhere else maybe you don't need as much of this other stuff um so actually my my projects are<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3681">1:01:21</a> - like i it's actually getting kind of late today i don't know if we'll actually look at the code side of this today but my project here you see i only<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3688">1:01:28</a> - have one branch and my branch is called master so uh smaller projects that aren't deployed as much it works<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3694">1:01:34</a> - fine with just one branch but um so that's you know one level of complexity that we're going to kind of wave our<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3700">1:01:40</a> - hand at right now and just not worry about so much so even when you're on a team like this uh usually you'll have uh you'll have some<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3707">1:01:47</a> - of the production guys you know particularly more senior developers who have been in an environment like this<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3712">1:01:52</a> - longer who know more they'll be the ones who probably handle the deployments to test and prod and so especially as a<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3719">1:01:59</a> - normal developer at junior dev you'll probably still mostly be interfacing with just one ledger at the bank in our<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3725">1:02:05</a> - analogy um just rather than calling it master you're just going to call it dev instead<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3730">1:02:10</a> - that is probably uh the the version control uh source that most<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3737">1:02:17</a> - people are going to be familiar with as software engineers most of the time the work that you do will be pushed to a<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3742">1:02:22</a> - branch called dev um that's normal um so for now just think of things like this right dev<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3750">1:02:30</a> - will be the name of the shared ledger that the bank has um i just want to introduce this to you to<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3756">1:02:36</a> - make it clear that uh we're making some simplifying assumptions here right and so<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3762">1:02:42</a> - don't get super wedded to exactly how i'm describing it because if you ever go into a real job it might<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3768">1:02:48</a> - be set up a little bit differently but the concepts are what's important right um so the other thing is thus far we've<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3774">1:02:54</a> - been saying that that history that we've been talking about we've been saying it's set in stone after something goes into the final ledger uh it shall not be<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3780">1:03:00</a> - undone right well actually you can muck around with the history um so<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3786">1:03:06</a> - sometimes people rewrite history and change the record of what happened in the ledgers everywhere so obviously this<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3792">1:03:12</a> - can cause lots of issues right because what happens if john doesn't go to the bank for a week well suddenly if the<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3797">1:03:17</a> - bank has like rewritten their ledger john's operating on something that's like really wrong right um so what<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3803">1:03:23</a> - happens if someone goes forward with an out-of-date ledger you have all sorts of issues so what we're talking about here<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3809">1:03:29</a> - is called rebasing um so you basically rewrite history in the ledgers um so<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3814">1:03:34</a> - things that you said happened you know they say they didn't happen they happen differently right um so usually this is avoided if at all<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3821">1:03:41</a> - possible because it causes a lot of issues um sometimes it needs to happen anyway because life um sometimes bad<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3828">1:03:48</a> - decisions are made something gets in your code base that shouldn't be there like a common a common uh thing for this<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3836">1:03:56</a> - is if someone actually ends up committing a password um like a password in one of your code<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3842">1:04:02</a> - files right so you have a connection string to a database for example and you need to be authenticating on that<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3848">1:04:08</a> - database and someone pushes the actual password into version control um<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3854">1:04:14</a> - well guess what that's a huge security flaw right um you can't have a password<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3859">1:04:19</a> - in your code that's not okay however in version control by default even if you put another commit to remove<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3866">1:04:26</a> - that password guess what it's still visible in version control right what you want to do is make it so that<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3872">1:04:32</a> - as if that password was never there right and to do that the only thing that you could<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3878">1:04:38</a> - do is to rewrite history the problem is as soon as you rewrite history anyone who had a branch open at<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3885">1:04:45</a> - the time where you rewrite history like they're completely screwed because suddenly what they branched off of no<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3891">1:04:51</a> - longer exists even close it's not even remotely the same right and so this causes lots of issues again you as<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3898">1:04:58</a> - a junior developer probably won't worry about i mean i did so by the way upshot of this conversation don't commit passwords to version control terrible id<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3905">1:05:05</a> - um you will get in lots of trouble um but that aside you probably won't be the one doing this<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3911">1:05:11</a> - right um if you need to ask uh uh hey senior developer how do i<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3917">1:05:17</a> - rebase you should say here you do this also do we really need to do this you<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3922">1:05:22</a> - should ask that question too um rebasing very frowned upon sometimes it is necessary though like i said excellent<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3928">1:05:28</a> - example someone gets a password in version control you need to wipe it out as if it had never been there the only<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3934">1:05:34</a> - way to do that is to rewrite all the history um but as a general practice this doesn't happen um it's happened<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3940">1:05:40</a> - once on my project here and uh trying to remember why we did it something got super super messed up someone pushed<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3947">1:05:47</a> - they merged a branch into our master branch uh this was before we'd split into like a dev and prod branch and they<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3953">1:05:53</a> - pushed something into our main branch that just like broke everything and we couldn't figure out where exactly it<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3960">1:06:00</a> - went wrong and we wanted to just get rid of that thing that had gone in and said you know what somehow this got through<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3967">1:06:07</a> - peer review but it broke everything and we don't know where it broke and we can't just like not have our app<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3972">1:06:12</a> - functioning for like two weeks while we try to figure it out right and the problem was things had gone in<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3978">1:06:18</a> - since then right so this thing went in and then something else went in on top of it so we needed to remove that as if<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3983">1:06:23</a> - it had never been there so i think it's only happened once on my application and i've been on it for about two years now<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3989">1:06:29</a> - so in production environments quite rare um and you want to avoid this if at all possible but<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=3995">1:06:35</a> - okay no enough on that these are the exceptions right so i just take my word for it there's some nuance here that<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4001">1:06:41</a> - we're not going into just because it's not super helpful the very first time you go over these things but<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4006">1:06:46</a> - you know don't be shocked if in the real world at some point something comes up a little bit different than the main<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4012">1:06:52</a> - process that we're going over but we're going to focus on that main process because it's the general development<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4017">1:06:57</a> - workflow that you'll see as a developer um so i know we've just been dumping lots<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4023">1:07:03</a> - of data on you right now we have just a little bit more to get through and then i think we're actually gonna call it a day there um i would encourage you to go<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4030">1:07:10</a> - back and try to make sure that all of the stuff that we're talking about makes sense in your head because we're going<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4035">1:07:15</a> - to go look at what all this means in terms of code uh next time right we've been talking conceptually here but all<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4041">1:07:21</a> - of the things i think i picked my analogy pretty well i think everything should transfer over pretty seamlessly<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4046">1:07:26</a> - so if you understand that everything works here then i think you should understand how it works uh when you're<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4052">1:07:32</a> - version controlling a set of a set of text files code wise um so just some other some other terms that you're going<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4058">1:07:38</a> - to need to know um so cloning cloning is the very first time that you as an individual stop by the bank to get<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4064">1:07:44</a> - a local copy of the ledger that's called cloning the repository so maybe maybe your company hires a new uh like a new<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4072">1:07:52</a> - person who's gonna be in charge of something well they don't have all of the company's assets up until now right<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4077">1:07:57</a> - so they need to go get a copy of it so they go to the bank and they say hey mr bank teller i'm new to the company but i<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4082">1:08:02</a> - need a copy of this information say okay here you go right that's called cloning the repository you get a copy of what<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4088">1:08:08</a> - the bank's copy is okay yes so cloning is something that<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4093">1:08:13</a> - individuals do so you from the remote repository you clone the remote pository<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4098">1:08:18</a> - into a local one um something that the individuals do so simple enough right that's actually not<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4104">1:08:24</a> - one of the hard terms here uh something else uh that might happen in this is you might want to ignore certain things from<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4110">1:08:30</a> - version control so here's the analogy i use in our business our business analogy so let's say that your company has an<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4117">1:08:37</a> - internal fund for helping out employees or their spouses with medical costs from cancer right so my uh i work for the<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4124">1:08:44</a> - government i work for the air force we actually don't have something directly like this but what we do have is we have<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4129">1:08:49</a> - uh what's called a voluntary leave transfer program so if people uh have a spouse with a severe medical emergency<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4136">1:08:56</a> - like cancer or they're out of work due to debilitating health condition if you want to you can donate your annual leave<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4144">1:09:04</a> - to them right if someone has to be out for circumstances it's just it's out of their control it's hard and they don't<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4150">1:09:10</a> - have enough vacation for it you can say here have some of my vacations i actually have something kind of similar to this in my job right it's elective<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4157">1:09:17</a> - so employees it's your company but uh for our example let's say that it's actually monetary right so uh your<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4163">1:09:23</a> - company has an internal fund for helping out um costs related to cancer for employees and their spouses so um<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4168">1:09:28</a> - employees that your company can voluntarily voluntarily elect to donate to this internal fund<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4174">1:09:34</a> - um however as a business you don't really want to track this as like business assets right um because this<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4181">1:09:41</a> - isn't material to your business applications this isn't relevant to like your bottom line or the amount of capital you have for acquiring equipment<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4188">1:09:48</a> - or means of production or logistics or whatever like you can't use this right this is just internal to your company<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4194">1:09:54</a> - right so this is something that you really wouldn't want to be tracked as part of your business's overall assets<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4201">1:10:01</a> - do you see why right because this isn't really relevant to the overall scope of you of your business<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4208">1:10:08</a> - and so for that reason uh you would specify that you want this thing specifically to be ignored in all the<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4214">1:10:14</a> - ledges floating around everywhere so this is every ledger in existence right so this is john's legend robert's ledger<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4220">1:10:20</a> - joe's ledger and the ledger the bank and if you have multiple ledgers like we said here with like devtest and prod<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4226">1:10:26</a> - right all the ledgers everything you're gonna be ignoring this stuff right um<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4231">1:10:31</a> - so code wise um this is what it's called in code it's a file called a dot git<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4237">1:10:37</a> - ignore right so it's a hidden file called git ignore this is basically just a list of stuff that you want to ignore<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4243">1:10:43</a> - so you want to say i don't want this thing to version control and so whenever you come across this and it gets confusing in your head think i<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4250">1:10:50</a> - want to i want to ignore this from version control just like how a company would want to ignore their internal<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4255">1:10:55</a> - cancer fund because it doesn't relate to their operating expenses right they don't want to track it in their main<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4260">1:11:00</a> - assets ledger same thing in our code base there's some stuff well we don't care about right uh so something that's<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4266">1:11:06</a> - common for this uh different people might have a preferences according to their uh to their text editors and<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4272">1:11:12</a> - oftentimes those things remember we've actually seen this um we've seen this in our uh examples<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4279">1:11:19</a> - already so this is vs code folder right so right now we just have a launch configuration which you probably<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4284">1:11:24</a> - actually want to share across people but you might have like a settings file here that contains like my key bindings or<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4289">1:11:29</a> - something for vs code i don't really want to commit that to the shared repository because it's not going to be<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4294">1:11:34</a> - relevant for other people might just get in the way right um yes that's the sort of thing that you'd ignore um<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4302">1:11:42</a> - okay so that's ignoring files you specify the files to ignore in this thing called a git ignore file um very<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4307">1:11:47</a> - analogous to how companies might not track everything on their balance sheets but only the stuff that's actually relevant for their company<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4315">1:11:55</a> - good so far okay just a couple more things so we have uh this idea of staging changes uh<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4322">1:12:02</a> - on stage changes and stage changes so um if you have work on a branch that you're doing that has been completed but you<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4328">1:12:08</a> - haven't committed it yet right so it can be in one of two states you can either have it on stage and that means that if<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4335">1:12:15</a> - you commit the next time you commit and so you say i made this set of changes um<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4341">1:12:21</a> - so it means that if it's on stage it won't show up in your commit so your next commit uh you pick a set of stuff<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4347">1:12:27</a> - that you want to say hey i did this stuff and that is your that's your block this is the stuff i've done this time<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4353">1:12:33</a> - right but if you stage it it means that it will be part of the next commit and so it's actually quite common um if you<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4360">1:12:40</a> - set if you task out your work well it's pretty common for you to stage all of your current changes when you commit<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4365">1:12:45</a> - something so basically everything you've done since the last time you committed you'll stick in the next commit right<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4371">1:12:51</a> - but sometimes you might get a little bit ahead of yourself and you'll implement one thing and then you'll implement something else<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4377">1:12:57</a> - that's really not that related to it right but you'd do it before you committed the last stuff<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4382">1:13:02</a> - see what i'm saying and so sometimes after making a set of changes you might want to have two or more separate<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4388">1:13:08</a> - commits to better organize the work that you did into discrete chunks and so let me give an example here right<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4395">1:13:15</a> - let's say that you had someone uh who worked for both john and robert in our example right let's say that this<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4401">1:13:21</a> - person's specialty was like hiring employees they were an hr person right and so the hr person might have done<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4408">1:13:28</a> - stuff on john's project relating to hiring truck drivers and he might have done stuff on robert's project relating<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4413">1:13:33</a> - to hiring like construction for men or supervisors or whatever right and so he<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4419">1:13:39</a> - has hours built to both of these things right so he might have done work since the last time he went to the bank<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4426">1:13:46</a> - and reported the stuff that he did and how it affects the company's ledger right he might have done work on acquiring trucks and acquiring new<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4432">1:13:52</a> - buildings right but since the last time he went he hasn't<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4437">1:13:57</a> - kept in his record he didn't put those transactions as you know did truck stuff or did banks or did uh a building stuff<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4445">1:14:05</a> - right so he has all of these things that he has ready to record now kind of all<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4450">1:14:10</a> - jumbled up right in this circumstance it'd be better for him to not put all of that stuff in one commit it would be<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4456">1:14:16</a> - better for him to break it up and say okay here's when i did truck stuff and here's when i did building stuff see what i'm saying<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4464">1:14:24</a> - yes okay this is very very very very indicative of programming experience a<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4470">1:14:30</a> - lot of the times new developers just because they're not used to it will have commits that just contain a whole<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4476">1:14:36</a> - jumbled mess of stuff they don't organize it very well because they're just saying you know i did all the<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4481">1:14:41</a> - things it works i don't want to care about organization or structure whatever i'm like here's all the changes i did<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4486">1:14:46</a> - and you'll have these big change sets i mean even those of us who've been at this awhile sometimes we get lazy right<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4491">1:14:51</a> - or you fix something and you're just just i mean i don't want to go dig through line by line and figure out what<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4496">1:14:56</a> - should go where um but the benefit of having more atomic commits that are very focused on one specific thing is if<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4503">1:15:03</a> - something breaks it's much easier to roll back a small set of changes than it is to roll back<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4509">1:15:09</a> - you know a huge set of changes right because it makes it easier to pinpoint what you need to undo to fix things um<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4517">1:15:17</a> - so okay this is the idea of staging so on stage changes um and here let me show<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4522">1:15:22</a> - you an example i i know we won't get into a lot of code stuff today but this is the example so you see here it says<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4529">1:15:29</a> - unstaged files right now so yes um down at the bottom of the screen<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4534">1:15:34</a> - um this is where i can type my commit message so i could say did this work right and so right now if<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4541">1:15:41</a> - i commit here i don't have any changes in my in my change that i don't have anything that i say i've done in this<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4546">1:15:46</a> - commission but you see here i'm deleting uh right here these are two temporary pages that i had scaffolded when i was<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4552">1:15:52</a> - testing stuff right so both of these things i'm deleting stuff so you can see it's all red in the change set here right um yes but<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4559">1:15:59</a> - i could paste a commit here and if i wanted to call this something specific i might call this um like delete<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4567">1:16:07</a> - uh no longer needed uploading<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4572">1:16:12</a> - right so if i make that my commit message it's actually very clear what i'm doing right uh what's this commit<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4578">1:16:18</a> - doing it is getting rid of no longer needed scaffolding files right but let's say<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4584">1:16:24</a> - let's say that i update uh this path bit in the general python folder right this<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4590">1:16:30</a> - was me last night i was trying to get my slides partial to work on stuff in the root directory right so now if i add<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4597">1:16:37</a> - this file to my change set and i say delete no longer needed scaffolding files well is this right is this right<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4603">1:16:43</a> - here deleting no longer needed scaffolding files like no has nothing related to that at all right and so if i let you come back<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4610">1:16:50</a> - and i'm trying to find oh you know there's a bug related to the general program loop right uh where'd<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4617">1:16:57</a> - that get introduced i'm not gonna be able to find it if i put it in this commit that has nothing that's not related to it right um<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4624">1:17:04</a> - so in this regard what i want to do is first i'd want to commit these things over here i'd want to commit the<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4629">1:17:09</a> - deleting the no longer need find i'm not actually going to do it because i need to go like organize all this stuff but<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4634">1:17:14</a> - after that after i i i got those deletions up then i would come to this<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4640">1:17:20</a> - and i would say you know like like increase files<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4645">1:17:25</a> - first or slides or something like that right i'm doing a different thing here i would<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4651">1:17:31</a> - want those things to be split out and separate because that's better organization<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4658">1:17:38</a> - does that make sense yes so you get to pick here uh this is the interface for sourcetree one of the<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4664">1:17:44</a> - reasons why i like sourcetree it's really easy to see what changes are involved in your change set because you<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4669">1:17:49</a> - can go ahead and just look like you can preview the changes here like you see right it makes it easy to see<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4675">1:17:55</a> - like what you are and are not getting ready to put in an actual commit<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4682">1:18:02</a> - okay last main thing then uh for today we're going to talk about diffs so diffs quite simply you see this thing over<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4688">1:18:08</a> - here this is a diff um it shows you the changes it shows you red stuff<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4694">1:18:14</a> - uh red stuff is deletions green stuff is additions that's it that's what a diff is um so i<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4701">1:18:21</a> - mean i have some more words to say comparisons between two different versions of the company ledger to highlight where the differences are by<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4707">1:18:27</a> - convention things highlighted red or deletions things highlighted green are additions um okay so this is actually me talking<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4713">1:18:33</a> - about some of the actions of the patriarchs it looks like right um what's the actual context whatever but<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4718">1:18:38</a> - you know like you see redar editions you know i'm not done with this yet i'm still editing this particular piece of content but um you know red are<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4725">1:18:45</a> - deletions green our auditions um and oh no actually no this isn't that this is the slides this should look<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4731">1:18:51</a> - familiar this is the slides that we did when we were looking at role models right um so moses job um<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4739">1:18:59</a> - yeah joseph so i haven't committed that to version control yet but um that is what the diff is it shows you the<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4744">1:19:04</a> - differences in the files that you're working with and so we might commit this right we might<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4751">1:19:11</a> - uh which one is this this one what whichever one it is right um we might commit that and put those<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4757">1:19:17</a> - changes in the bank's ledger so the shared version of things um<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4762">1:19:22</a> - but diffs are very important for you to get used to looking at because this is how uh when you're reviewing someone<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4768">1:19:28</a> - else's code you want to be seeing what stuff they changed and so you'll be evaluating the<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4774">1:19:34</a> - things they did i mean you want to functionally test it too make sure that the stuff does what they say it does but you'll also be looking at the code and<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4781">1:19:41</a> - most of the time you'll just be getting a chainsaw you'll be getting one of these diffs the difference between<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4786">1:19:46</a> - the master branch and then the branch that you're putting up for pull request to put into the master branch you want<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4792">1:19:52</a> - to see the differences between them to make sure that everything checks out that everything looks okay<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4798">1:19:58</a> - all right so we've skipped some other stuff and i mentioned that peer reviews peer reviews happen when pull requests<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4805">1:20:05</a> - get put up right so other people look over your code they approve it before it gets pulled into master or you know dev<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4811">1:20:11</a> - or test or prod or whatever um so peer reviews are a part of the pull request process um you know i i'm sure i<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4819">1:20:19</a> - missed some other stuff right i came up with all of this this afternoon so uh you know entirely possible that i missed other thing but i think i got most of<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4825">1:20:25</a> - the big stuff here and so um you know initially i was telling us to actually look at some code today too i don't<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4830">1:20:30</a> - think we're gonna have time um so i will pick up with this next time probably um specific examples in a git repository um<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4837">1:20:37</a> - so you know like this is a pull request uh from this branch about the site content section into the master branch<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4843">1:20:43</a> - and you can see that this this pull request on this branch here this branch has lots of commits to it right um<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4850">1:20:50</a> - so we'll look at this uh next time uh once we have some time to actually look at the uh code version of this but<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4857">1:20:57</a> - hopefully the analogy has proved helpful here uh for getting our feet wet uh conceptually into the idea of version<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4863">1:21:03</a> - control um so i'm just closing us out here i'm actually do you have any questions<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4868">1:21:08</a> - before i jump into uh you know summarizing everything we've talked about<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4874">1:21:14</a> - so far i follow uh i'm not confused by anything so far<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4880">1:21:20</a> - now the trick will actually come when i say okay great now you make a branch and you make a pull request right um yes<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4888">1:21:28</a> - yeah you know then it always it becomes challenging when you're the one who has to do it uh without someone holding your<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4893">1:21:33</a> - hand right but okay well i'm glad that that was hopefully clear um so that's what we did today right we talked about<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4899">1:21:39</a> - how this stuff can be tricky to understand especially for the first little bit right once it clicks and once you have all these things<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4905">1:21:45</a> - straight in your head you won't have such a hard time of it but it can take a little bit for things to click there um so we talked about our analogy here of<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4912">1:21:52</a> - viewing this idea in terms of like transaction ledgers for businesses so the business accounting a good way kind<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4918">1:21:58</a> - of parallel analogy to use here to uh tracking code changes and version control so we talked about repositories<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4925">1:22:05</a> - commits pushing and pulling right so repositories being the local copies of the ledgers that individuals have versus<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4931">1:22:11</a> - the one at the bank commits or these uh kind of atomic operations that we're doing these transactions that get<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4937">1:22:17</a> - recorded in the ledgers uh pushing is when uh someone takes their ledger and<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4942">1:22:22</a> - updates the bank's ledger based on what they've been doing polling is they go to the bank they get information about what<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4947">1:22:27</a> - other people are doing and put it in their own ledger right we talked about branches and work items or tasks right<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4954">1:22:34</a> - so each work item or task has its own branch that you do work on uh kind of<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4959">1:22:39</a> - analogous to pending business deals right so all the stuff related to acquiring trucks goes on one branch all<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4966">1:22:46</a> - the stuff uh relevant to buying new buildings going on another branch the<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4971">1:22:51</a> - the two branches can be worked in parallel without uh getting in each other's way right and we talked about merging uh so that<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4978">1:22:58</a> - is reconciling differences in the history since you last uh branched off of something right if<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4984">1:23:04</a> - someone else has stuff that goes into the main record and then you're gonna have to reconcile that with the changes<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4990">1:23:10</a> - you've made as well and sometimes this doesn't require too much work on your part right if if their changes were in<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=4995">1:23:15</a> - something that you weren't working on but sometimes if you do have conflicts it can get kind of messy to resolve<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=5001">1:23:21</a> - those then we talked about how after this uh once you think all of your stuff in a pending business transaction<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=5008">1:23:28</a> - is done you might put that up for pull request to to kind of put it in the history that gets set in stone right so<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=5015">1:23:35</a> - the official record of your application's uh history um so to do that you open a pull request you'll have<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=5021">1:23:41</a> - some some co-workers teammates a peer review the pull request look things over say you know what this looks right this<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=5027">1:23:47</a> - does what we want it to do we've allocated all of our resources accordingly i'm going to go ahead and approve this give it a green check and<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=5034">1:23:54</a> - then once you get however many approvers you need that will go and it will be set in stone as final history<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=5039">1:23:59</a> - now we talked a little bit here i'm not spending too much time but just about how we're making some simplifying<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=5045">1:24:05</a> - assumptions just for the sake of making this easier to understand the first time um but don't be surprised if you have<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=5050">1:24:10</a> - multiple branches like devtest and prod when you go into a real application development environment um and sometimes<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=5058">1:24:18</a> - even though we've been saying that this history is set in stone and doesn't get changed well if someone commits a password to version control it will get<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=5064">1:24:24</a> - changed there are some circumstances where history does need to be rewritten but you try to avoid it if at all possible<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=5072">1:24:32</a> - and then finally we talked about some of these other terms cloning right so<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=5077">1:24:37</a> - getting that ledger the first time from the bank ignoring files in our business analogy just like how a company would<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=5082">1:24:42</a> - ignore the assets relating to an internal fund for helping employees with medical expenses<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=5088">1:24:48</a> - unstaged changes so the idea that you want to have very organized commit messages so that<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=5094">1:24:54</a> - when you are kind of recording the transactions that you did inside your ledgers so so that people in the future<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=5101">1:25:01</a> - will have a record of what was done uh you want to break things up uh into these atomic operations these things<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=5107">1:25:07</a> - that are descriptive of one thing and one thing only um so that it's much clearer and easier to roll back if you<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=5113">1:25:13</a> - need to and finally we talked about diffs uh which are uh you know the the red and the green everywhere uh that<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=5119">1:25:19</a> - oops let's not do that uh the red and the green everywhere that represents what you added and what you removed um<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=5125">1:25:25</a> - so i think that's where we'll stop uh quite a whirlwind introduction lots of information today so i would 100<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=5131">1:25:31</a> - recommend uh once i post this video that you go back and you look at it if you need to i'll just make sure that you have all the differences between these<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=5138">1:25:38</a> - things clear in your head because we will pick up looking at this in terms of code uh the next time we meet um so with<br/>
<a href="https://www.youtube.com/watch?v=ftm2cyYTabg&t=5145">1:25:45</a> - that that's where we'll cut for today and uh we'll talk to everyone again when we pick up next time<br/>

{{% /transcript %}}

## 30: Practical coding examples with version control (Git), setting up an SSH key pair

### Video

{{% video
src=""

playlist="https://www.youtube.com/playlist?list=PLQ-N5KyJUu_VqG38oglZEEw17b_ZQ13On"

video=""

audio=""

slides="https://www.steventammen.com/slides/pages/learning-programming-only-what-you-really-need/"
%}}

### Summary

### Timestamps

{{% content %}}

### Content

#### Debugging

- Getting unstuck, if we need it.

<!-- --- -->

#### Example of a repository

- https://github.com/StevenTammen/bibledocs.org

<!-- --- -->

#### Example of a branch

- https://github.com/StevenTammen/bibledocs.org/branches

<!-- --- -->

#### Example of a pull request

- https://github.com/StevenTammen/bibledocs.org/pull/24

<!-- --- -->

#### Example commits

- https://github.com/StevenTammen/bibledocs.org/pull/24/commits

<!-- --- -->

#### Example diffs

- https://github.com/StevenTammen/bibledocs.org/pull/24/commits

<!-- --- -->

#### SSH keys

When you connect to a remote repository, you need to be authenticated -- would a bank let just anyone see the company ledger, and especially modify it? No, right?

You could authenticate with a password each time you wanted to push or pull, but that's kind of inconvenient. Fancy business owners might have ID cards they can scan at an RF-signal card reader to get them access to their important company vault quickly. We can do something very similar as developers working on a repository.

Our "ID cards" are called SSH keys, and they are basically a matched-pair of authentication hashes. You can think of them in the exact same terms as our RF-signal card and card reader example. The card reader has a set of people whose chips it "knows", and whenever they scan, it lets them in. So too here.

The very first time, however, we will have to "go to security" and get them to register our card with the card reader. That's what we are going to do now.

<!-- --- -->

#### Git Bash, OpenSSH, SourceTree, and GitHub

Here's an outline of the steps:

1. Open Git Bash and `cd` into your home directory.
2. Use OpenSSH to generate a public/private key pair
3. Add your private key to SourceTree
4. Add your public key to GitHub
5. Test things out to make sure they are functioning properly

We'll get to step (4) here, and then talk about setting up a remote repository to test with (5).

<!-- --- -->

#### Connecting a remote version control repository with a local one

There are two approaches to connecting a remote version control repository with a local one. You can either start locally and connect to a remote repo after-the-fact, or start with a remote repo, clone it down, and only then begin working.

In my opinion, the latter approach is easier, as all you have to do is clone (you don't have to worry about setting up remote refs). It truly doesn't matter that much, but we'll be going through the latter approach together.

<!-- --- -->

#### Start remote, clone local (my preferred option)

Easy to do with just SourceTree, no command-line required.

<!-- --- -->

#### Start local, connect to remote

- `git init`
- `git add .`
- `git commit -m "Initial commit."`
- Create a repo on GitHub
- `git remote add origin git@github.com:UserName/repo-name.git`
- `git push -u origin master`

{{% /content %}}

{{% transcript %}}

### Video/audio transcript

{{% /transcript %}}




<!--

#### Make a new repository

#### Make a couple initial commits

#### Push changes

#### Make remote changes

#### Pull changes

#### Make a branch

#### Make a couple new commits

#### Open a pull request

#### Resolve merge conflicts

#### Get pull request actually merged in

-->