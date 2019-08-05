+++
title = "Fixing Image Display"
date = 2019-06-08T11:50:10-04:00
tags = ["rome-2019", "rome", "workflow", "camera-stuff"]
categories = ["Travel", "Computers/Software"]
draft = false
+++

## My camera {#my-camera}

Since I started my Rome study abroad I have been taking pictures with a point-and-shoot camera rather than my phone for a couple of reasons. It has a larger sensor (so can handle lower-light situations better), it has pretty decent optical zoom (although not without its drawbacks: the non-removable lens does restrict aperture when highly zoomed), and it can shoot in a dual RAW/JPG mode. The best part about it is that it is small enough that I can slip it quickly into a pocket when not in use, so it is not nearly as unwieldy as a DSLR or full-frame mirrorless with attached lenses. Since most of my shots are outside (with enough light) and do not need a very wide angle or huge zoom (i.e., the basic zoom range on the point-and-shoot is sufficient), my camera has been working out quite well.


## The problems {#the-problems}


### The importing process: potrait shots {#the-importing-process-potrait-shots}

I have been manually importing my images off of the camera's SIM rather than using an import tool. The portrait images have been showing up in my posts as landscape images (i.e., not rotated properly), and I hadn't had the time this week to look into the problem. Now that a Saturday arrived, however, I got the time to fix it.

It turns out that the issue with Exif tagging. Thankfully, the issue is pretty easy to fix: [Why Your Photos Don’t Always Appear Correctly Rotated - How-To Geek](https://www.howtogeek.com/254830/why-your-photos-dont-always-appear-correctly-rotated/).

Several auto-rotated JPG folders later, and the rotation problem appears to be fixed.


### Super-tall portrait images {#super-tall-portrait-images}

The initial CSS I was using had `width: 100%;` for images, which meant that while landscape images worked fine, the portrait images were way too tall: they wouldn't fit on one vertical screen, so you would have to scroll to see the whole image. Boo.

Copy-pasting useful CSS off StackOverflow: [Fitting portrait and landscape images in a full screen image carousel](https://stackoverflow.com/a/51414706).


### No margins around images {#no-margins-around-images}

Now that I'm actually putting multiple pictures in posts, I noticed that I didn't have any CSS to add space between images, and they were all smushed together. No reason for this, so I added vertical spacing: `margin: 10px auto;`


### Fixing caption spacing {#fixing-caption-spacing}

Adding captions to images using ox-hugo makes use of HTML figures. Adding vertical margins to images messed up how images fit into these figures, so I just got rid of the margins for these specific images.

```css
figure img {
  margin: 0px;
}
```

And there you go. Better images. If the CSS bit wasn't clear, you can just look at the commit for this blog post on GitHub.
