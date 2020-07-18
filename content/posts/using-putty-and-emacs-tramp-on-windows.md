+++
title = "Using Putty and Emacs' Tramp on Windows"
date = 2018-01-22T11:03:22-04:00
tags = ["workflow", "ssh", "remote work"]
categories = ["Computers/Software", "Productivity/Efficiency"]
draft = false
+++

## Introduction and Motivation {#introduction-and-motivation}

Windows doesn't support a lot of common Unix commands, `ssh` included.

There are several ways to overcome this fact. The [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10) is one option. I use it a lot, but I didn't at the beginning when I was less comfortable in the terminal (it does not run GUI applications). It's a bit of a pain to interface natively with normal Windows files, since you have to use `/mnt/c/` to get to to them. This doesn't matter so much if set up aliases for folders you commonly use.

[Cygwin](https://cygwin.com/) is another option. You can use the Cygwin bash shell just like any other bash shell, and most commands will work seamlessly since they are all compiled natively. However, you again have special notation for handling normal Windows files: `cygdrive/c/`. I didn't have any problems getting Cygwin set up (some people reportedly find it fidgety and difficult), nor did I have issues using the versions of vim and Emacs that come with it. You may have to adjust Environment Variables and your Path to be able to invoke binaries globally. See this [stackoverflow thread](https://stackoverflow.com/questions/14797194/cygwin-ls-command-not-found).

You can install things like updated text editors (e.g., Spacemacs, NeoVim) and different shells (fish, zsh) in these configurations, if you so wish. They are basically POSIX-compatible environments on Windows, with some limitations. You can, of course, also run a full Linux distribution on a virtual machine, or partition your hard drive to boot to one. VirtualBox makes it pretty straightforward to set up a virtual machine (watch some YouTube videos if you're interested), so if you actually want full Linux, you should probably do that.

Anyhow, all this isn't necessarily what this post is going to focus on -- this was all to establish the fact that it's possible to get SSH outside of the configuration described below, and that some people may find other things equal or better for their purposes. YMMV, as they say. (Note that the below focuses on native Windows Emacs, but you can easily set up something similar with Cygwin Emacs, at least I'd assume so).

What I want is to be able to access my Windows files normally, and to use [Tramp](https://www.Emacswiki.org/Emacs/TrampMode) with SSH keys to automagically log me in whenever I use `find-file` to open a file with a remote path. And I want to be able to do this within Emacs so that I can use my evil mode vim-fu on the command line and when going through history and so forth.

I don't have anything against using remote shells and local editors at the present time (you can get evil mode vim-fu through local terminal Emacs too, for example), but the more configuration and customization I build up, the more important it will be for me to have _my_ configuration -- all my shell aliases, font and powerline customizations, autocompletion and expansion packages, etc. -- accessible to me at all times. I don't want to limit myself to vanilla bash and vim because that's all that comes preinstalled on many servers; some of these things are not just pretty colors and fonts, but serious productivity improvements. Sure, bash may be "good enough." But I don't like "good enough," I like "as good as can possibly be given practical constraints." So setting up a system such that I will always have the same, consistent, efficient system of my choosing only makes sense.

(Edit: writing a few months after this initial post, I work mostly in JetBrains' IDEs, and exclusively local. Rsync and SSHFS enable local work outside of Emacs. Understanding Tramp is still useful though.)


## Step One: Install Emacs and PuTTY {#step-one-install-emacs-and-putty}

You don't have to do it from the command line. I'd recommend you get a high quality (i.e., optimized) Windows Emacs build from [this maintained project](https://sourceforge.net/projects/Emacsbinw64/). You can get PuTTY from [the official site](https://www.putty.org/).

When installing PuTTY, make sure you check the box that lets you add the programs to your Path.


## Step Two: Familiarize Yourself With Relevant Emacs Commands {#step-two-familiarize-yourself-with-relevant-emacs-commands}

If you want to use vim bindings in Emacs, I suggest you install [Spacemacs](https://github.com/syl20bnr/spacemacs). I got it up and running in short order, and it makes it really easy to extend functionality with layers.

Otherwise, you can stay with vanilla (chord-heavy) Emacs. You can still use Tramp and so forth with vanilla Emacs.

Here's a good list of basic commands to get started:

| Command                               | Spacemacs                        | Vanilla Emacs   |
|---------------------------------------|----------------------------------|-----------------|
| Find file                             | `Spc f f`                        | `C-x C-f`       |
| Use PuTTY to SSH to a remote server   | `plink user@host`                | identical usage |
| Access remote file with Tramp + PuTTY | `/plink:user@host:/path/to/file` | identical usage |
| Save buffer                           | `Spc f s`                        | `C-x C-s`       |
| Close buffer                          | `Spc b d`                        | `C-x k`         |
| Open eshell                           | `Spc Spc eshell`                 | `M-x eshell`    |
| Open system shell with M-x shell      | `Spc Spc shell`                  | `M-x shell`     |

In the commands above, `Spc Spc` is Spacemacs' equivalent to `M-x`. In Spacemacs, you can also open your default shell type with `Spc '`. You can customize this with code in your .spacemacs file. For example, to make eshell the default shell:

```lisp
(setq-default dotspacemacs-configuration-layers
  '((shell :variables shell-default-shell 'eshell)))
```

There are other shell options in Spacemacs. Check out [the documentation](https://github.com/syl20bnr/spacemacs/tree/master/layers/%2Btools/shell).

I do occasionally use eshell since it integrates with Tramp seamlessly, allows for completely normal accessing of Windows files, and automatically switches to remote directories when you are editing a file in one. There are some performance considerations, however, so I wouldn't recommend using it for long compile commands, long `cat` commands, or anything else that dumps a bunch of text to console; using it to pipe large amounts of data from process to process; or using it for interactive programs -- e.g., `htop`, `nano`, other ncurses programs -- that require cursor control (since it simply doesn't support these). You can use a system shell in a real terminal emulator for such things, without an Emacs layer over the top slowing things down or making them more complicated.

With all this being said, eshell can run lisp in-line (serving as a lisp REPL of sorts), has access to all the Emacs functions straight from the command line, and is extremely hackable. (You can totally customize globbing and predication, for example). So you could hypothetically use it most of the time for its advantages, and switch to a system shell in a terminal emulator when doing so is the superior choice.


## Step Three: Set Up SSH Keys {#step-three-set-up-ssh-keys}

Tramp works great for not having to bother with the nitty-gritty details of remote files and editing. However, it quickly gets old entering your password for the remote server all the time. SSH keys can handle this problem, to make Tramp use truly effort-free.

[Here is a guide for setting up PuTTY SSH keys to automate login](https://www.howtoforge.com/ssh%5Fkey%5Fbased%5Flogins%5Fputty). I recommend setting an SSH password and using Pageant to automatically enter it, as they suggest, since it is more secure. It is not necessary to disable password-based login on your remote server. (It's a bad idea for me, for example, since school IT people would be angry if I locked myself out).

(Edit: if you are using a Unix-like system, PuTTY is not necessary. See [SSH Keys Are Not as Hard as You Think](https://www.steventammen.com/posts/ssh-keys-are-not-as-hard-as-you-think/).)


## Step Four: Optional Optimizations {#step-four-optional-optimizations}

Accessing files directly with Tramp certainly beats always having to keep track of remote shells and sessions. But it is still a bit of a pain typing out something like `/plink:nike:/path/to/file` whenever I want to access a remote file. There is also the irritating fact that using, e.g., `Spc f f` starts you off in the current directory, and on Windows, starting a path with `/` will leave a `c:/` prepended (which you have to delete when entering a remote file path).

To make it all easier, I wrote a simple [Authotkey](https://www.autohotkey.com/) hotstring to expand out `pl{Spc}` to `/plink:nike:~/` (nike is the name in PuTTY I gave the remote connection to my school's servers, `tammen@nike.cs.uga.edu`). It's smart enough to delete the `c:/`, and it even includes some delay before starting on the remote file path to give helm (an autocompletion package that I use in Spacemacs) time to catch up. You can, of course, include this in part of a larger Autohotkey script (i.e., one that does other things too). Here's the code:

```autohotkey
; Defines a hotstring for a PuTTY remote connection called 'nike'
:*?:pl ::
    SendInput {Backspace 3}/plink:nike:
    Sleep 1000
    SendInput ~/
    return
```

The last thing you may want to do is add this Autohotkey script and the shortcut to activate Pageant to your Windows startup sequence so that all this stuff happens automatically.
