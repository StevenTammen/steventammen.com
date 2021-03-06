+++
title = "Latex Installation"
date = 2018-05-21T00:31:38-04:00
tags = []
categories = []
draft = false
+++

[//]: # (tags = ["workflow", "org mode"], categories = ["Computers/Software", "Productivity/Efficiency"])

## Getting a lightweight LaTeX environment {#getting-a-lightweight-latex-environment}

This Summer, Summer 2018, I am writing a research paper in Emacs' org mode. However, to make it easier for my sponsoring professor to read, and because I want to get this set up anyways, I started looking for a PDF publishing workflow. Which means that I need a LaTeX installation, since I am planning to use `pdflatex`.

I remembered from my old computer that the full TexLive installation took up a lot of space, and that I only ever seemed to use a few packages. Since my [new computer](https://www.steventammen.com/posts/new-computer-2018/) only has 128GB of storage space, I figured I'd try to slim down the packages I had installed.


## TinyTex {#tinytex}

Fortunately, I am not the first person to think of this. A fellow named Yihui Xie made a package called [TinyTex](https://yihui.name/tinytex/) that is basically a minimal install of TexLive with only frequently used packages. This is an excellent project.


## Installing packages for org mode export {#installing-packages-for-org-mode-export}

TinyTex uses the TexLive manager command-line interface (`tlmgr`) for updating packages and installing new ones. I knew I'd need to install a few for org mode to work, but I wasn't sure how many it would be. Fortunately, it was only 10 or so. The process for figuring out what packages you need to install requires you to look at log files when a build fails, which isn't the most efficient ever, mostly because there is no way to effectively script it to automate it, and you can only see one package you need at a time.

As of May 2018, here are the commands that I needed to run to get org mode export to play nice with my TinyTex install and `pdflatex`.

```bash
tlgmr install wrapfig
tlmgr install ulem
tlmgr install float
tlmgr install capt-of
tlmgr install cm-super
tlmgr install ec
tlmgr install marvosym
tlmgr install wasysym
tlmgr install wasy
```

Running these commands installs all those packages (some of which are fonts). You could make this into a script easily, if you wanted.


## The results {#the-results}

After installing those packages, the required disk space for my LaTeX install was 327MB. Which is _a lot_ less than what the fill TexLive install is. Hooray!


## Automatically deleting the Tex version of an org file when you convert to PDF {#automatically-deleting-the-tex-version-of-an-org-file-when-you-convert-to-pdf}

If you don't want a Tex version for every PDF you publish, you can easily write a shell script to delete it when you publish. For example:

```bash
#!/bin/bash

file=$1
filename="${file%%.*}"

emacs --batch -q --eval "(progn (find-file \"$file\") (org-latex-export-to-pdf))"
rm $filename.tex
```

Of course, if you publish using `C-c C-e l p` inside of Emacs, this doesn't help you. But I have to use a script anyway to copy the org file to a different extension so that you can reference line numbers on GitHub (see [this issue](https://github.com/holman/ama/issues/305)). I could probably setup a hook to do this too in Emacs, but that's for another time.
