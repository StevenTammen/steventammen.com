+++
title = "SSH Keys Are Not as Hard as You Think"
date = 2018-07-05T00:21:59-04:00
tags = ["ssh", "workflow", "cryptography"]
categories = ["Computers/Software"]
draft = false
+++

## Motivation {#motivation}

I had to change my password on my school's remote server today, which ended up being an enormous chore. I had a very strong password that I had been using previously, but the server wouldn't let me shift capitalization and keep the strong password, or just change a couple characters, etc. So I had to come up with another strong password to use.

But then the server wasn't taking the new password consistently. I think this might have had something to do with me being connected over SFTP (to mount the remote system) at the time of my password changing. Anyhow, I spent a couple of frustrating hours trying to get the new password to work consistently. Eventually it just started working (...?), at which point I was seriously irritated, since I had done absolutely nothing different but now it was working. So I didn't even have the satisfaction of figuring out some arcane problem by means of intelligence and dedication.

All of this made me decide I never wanted to deal with server passwords again. I already use Lastpass for browsers, and the automation is extremely useful. And since I knew SSH keys are like Lastpass for remote connections (pardon the technically imprecise analogy), I decided to finally bite the bullet and set up a keypair.


## The general procedure {#the-general-procedure}

1.  Run the ssh-keygen utility, and just hit Enter when asked for a password (unless you have other people with root on your computer, in which case you'll probably want to password protect your private key and use the [ssh-agent](https://kb.iu.edu/d/aeww). Also see below).
2.  Copy the text of the public key (located at `~/.ssh/id_rsa.pub`). Make sure the private key is at `~/.ssh/id_rsa`.
3.  SSH in to your remote server, and paste the public key text into the file `~/.ssh/authorized_keys`. (The file should have [octal permissions](http://www.filepermissions.com/articles/understanding-octal-file-permissions) 600 -- it probably already exists).
4.  Repeat 3 for all your remote servers.
5.  If you use Git and GitHub, [add your new public key to your GitHub Account.](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/) (The procedure is similar for GitLab, Bitbucket, etc.).
6.  Change the remotes for your git repositories to use `ssh://` rather than `https://`. In other words, go into all your `.git/config` files and change lines like `url = https://github.com/path/to/repository` into lines like `url = ssh://git@github.com/path/to/repository`. You could probably script this if you have lots of repositories. I only had 5 local at the time of writing, so I just did it by hand.
7.  Test all your new connections, and rejoice at password-less remote connections.


## Notes {#notes}

The password protection (= encryption) of private keys is up to you. Some good reading: [what private key passwords do](https://security.stackexchange.com/questions/119402/is-the-rsa-private-key-useless-without-the-password), [adding a password later if you decide you want one](https://stackoverflow.com/questions/3818886/how-do-i-add-a-password-to-an-openssh-private-key-that-was-generated-without-a-p#3818909). If you practice good security habits (so that no one will ever get their hands on your unencrypted private key), it's probably less important. But an argument can be made that you can never be too careful.

If you end up using a password, you should definitely use stronger encryption than the default. [This article](https://martin.kleppmann.com/2013/05/24/improving-security-of-ssh-private-keys.html) is a good starting place.
