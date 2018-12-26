+++
title = "Dotfiles Repository"
date = 2018-05-20T23:02:11-04:00
tags = ["workflow", "configuration"]
categories = ["Computers/Software"]
draft = false
+++

## Comments on the process {#comments-on-the-process}

I recently got [my dotfiles repository](https://github.com/StevenTammen/dotfiles) operational. I thought I'd share some thoughts regarding the process of constructing such a repository, since there are things I wish I'd know when I was working on this.


## 1. Don’t try to make installation files part of you dotfiles repository {#1-dot-don-t-try-to-make-installation-files-part-of-you-dotfiles-repository}

Initially, I was symlinking my entire `.config` and `.local` directories from my dotfiles repository. But I kept bumping into things that would break, or environment variables that weren't defined how I thought they would be, etc.

It is entirely possible that I'm just noobish at the moment, and that doing this works fine if you know what you are doing, but it seems to complicate everything when you are starting out.

For example, Oh-My-Fish gets installed to `~/.local/share/omf`, and despite having this symlinked after installing my dotfiles, it wasn't getting recognized. But symlinking my `init.fish` file and simply installing Oh-My-Fish on new computers worked just fine.


## 2. In installation scripts, you can automatically say yes to things {#2-dot-in-installation-scripts-you-can-automatically-say-yes-to-things}

At least with the `apt` package manager, you can use `--yes` and `--force-yes` to remove many of the dialogues that you face in installation.


## 3. Keep your dotfile symlinking script and installation script separate {#3-dot-keep-your-dotfile-symlinking-script-and-installation-script-separate}

There may be times when you are setting up a system that already has programs installed, but you still want your own dotfiles.

Also, if you bungle something (e.g., accidentally delete a symlink), it is easy to reset your dotfiles by just re-running your dotfile symlinking script. But having program installation be part of this script wouldn't make sense under these circumstances.


## 4. Be careful how you are setting up your default shell {#4-dot-be-careful-how-you-are-setting-up-your-default-shell}

When testing shell things, don’t run your custom shell as the default shell until you are sure everything is configured properly. This makes it so you never get stuck where you broke something and your shell/distribution doesn’t work. This proved to be especially problematic when configuring things for the WSL on Windows, since the shell was the only way to talk to the Ubuntu distro, and there was no way to edit the dotfiles except through the shell (due to permission stuff, Windows programs can't edit stuff on the WSL without possible corruption).

So, for example, you can run bash as your default shell and then use the “fish” command to invoke the fish shell when you are testing. Then make fish the default shell later once you’ve tested everything and know it won’t get stuck.
