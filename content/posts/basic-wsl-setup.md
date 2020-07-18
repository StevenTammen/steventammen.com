+++
title = "Basic WSL Setup"
date = 2018-05-16T12:52:23-04:00
tags = ["workflow", ""]
categories = ["Computers/Software"]
draft = false
+++

## Background and software prerequisites {#background-and-software-prerequisites}

For anyone wishing to set up the Ubuntu environment on Windows 10, this is a very brief guide to how I set it up my first time. I now have a [dotfiles repository](https://github.com/StevenTammen/dotfiles) that I will clone for future setups, but this was how I did it before I got that up and running (I do things a little bit differently now). You can see how to get things up and running using the dotfiles repository by looking at the Readme in the repo.

This post assumes that you [have the Ubuntu WSL installed](https://docs.microsoft.com/en-us/windows/wsl/install-win10), and that you have Git for Windows installed and on your Path (if you don't know what that is, just make sure you check the box when installing Git that says "include Git on Path" or whatever).

If you haven't updated your installation prior to reading this post, you should probably do that first.

```bash
sudo apt-get update
sudo apt-get upgrade
```


## Getting a terminal emulator {#getting-a-terminal-emulator}

Download wsltty from <https://github.com/mintty/wsltty>. Wsltty is based off of Cygwin's mintty terminal emulator.

If you have problems with wsltty not recognizing the WSL distro you have installed and so forth, I found [this thread](https://github.com/mintty/wsltty/issues/72) helpful. If you uninstall and reinstall a WSL distro (because you broke something) you may have to deal with this.


## Getting Solarized colors {#getting-solarized-colors}

```bash
git clone https://github.com/karlin/mintty-colors-solarized.git
mv mintty-colors-solarized/ .mintty-colors-solarized/
```


## Solarized dir colors {#solarized-dir-colors}

```bash
wget https://raw.githubusercontent.com/seebi/dircolors-solarized/master/dircolors.256dark
mv dircolors.256dark .dir_colors
```


## Fish shell {#fish-shell}

```bash
sudo apt-add-repository ppa:fish-shell/release-2
sudo apt-get update
sudo apt-get install fish
```

Once you have the shell installed, put the following in your .bashrc file (at the end works fine, e.g.):

```bash
# Launch Fish
if [ -t 1 ]; then
  exec fish
fi
```


## Oh-My-Fish {#oh-my-fish}

```bash
curl -L http://get.oh-my.fish | fish
```


## Pure prompt {#pure-prompt}

```bash
omf install pure
```


## Pulling everything together in the config file {#pulling-everything-together-in-the-config-file}

First, open the fish config file. For example:

```bash
vim ~/.config/fish/conf.d/omf.fish
```

Then add these lines to the end of it:

```bash
# Set up colors
source ~/.mintty-colors-solarized/mintty-solarized-light.sh
eval (dircolors -c ~/.dir_colors | sed 's/>&\/dev\/null$//')

# Aliases
alias night "source ~/.mintty-colors-solarized/mintty-solarized-dark.sh"
alias day "source ~/.mintty-colors-solarized/mintty-solarized-light.sh"
```

You can now switch between the Solarized light and Solarized dark themes by typing "day" and "night" (respectively) into the shell. You would want to do this depending on environmental light levels.


## Installing ranger {#installing-ranger}

One of the cool things about using the WSL is that you can use [ranger](https://wiki.archlinux.org/index.php/Ranger) as a keyboard driven file manager.

I didn't get around to fully integrating it with Windows until I set up my dotfiles, but installing it is easy enough:

```bash
sudo apt-get install ranger
```


## Setting up custom aliases {#setting-up-custom-aliases}

If you can think of anything you might want to abbreviate, you should add aliases to your fish config file. For example, I end up cd'ing to my Dropbox directory a lot, so I set up this one:

```bash
alias dbox "cd /mnt/c/Users/steve/Dropbox"
```


## Discussion {#discussion}

And there you have it. If you are familiar with the command line and what config files are (so you don't have to Google up what some of this means), you should be able to get a prettyish, functional version of the WSL up and running in like 15 minutes.

You can, of course, choose to use bash instead of fish. I just find bash's syntax (and, by extension, zsh's, ksh's, etc.) bug-prone and unreadable, and like fish's better. I also like the support for arrays as a first-class data type, and all the syntax highlighting, completion, etc. that comes with fish out of the box. I'm not wedded to fish though, and will probably switch over to the [ion shell](https://github.com/redox-os/ion) eventually once it is less alpha and has better completions.
