+++
title = "Emacs for Org Mode"
date = 2018-05-16T15:23:41-04:00
tags = ["workflow", "org mode"]
categories = ["Computers/Software", "Productivity/Efficiency"]
draft = false
+++

## The purpose and scope of this post {#the-purpose-and-scope-of-this-post}

Since I recently decided to start doing all my major software development inside of JetBrains IDEs like IntelliJ and PyCharm (why is for another post), I no longer needed as many packages inside of Emacs.

This post will go through step-by-step how I set up a minimal Spacemacs installation on Windows 10 to work with org files. I write basically everything in org mode nowadays, but since I no longer need syntax checking, Magit, etc., I want to keep my .spacemacs file as small as possible for performance reasons. This means the only layers in use will be helm (for navigation/integration with Spacemacs framework), org mode (for obvious reasons), and spell checking (flyspell/ispell).

As with my last post, make sure you have Git installed and on your Path.


## 1. Get a good x64 Windows version of Emacs {#1-dot-get-a-good-x64-windows-version-of-emacs}

I like this one: <https://sourceforge.net/projects/emacsbinw64/>

Extract it with [7-Zip](https://www.7-zip.org/) and put it somewhere.


## 2. Add the binaries to your Path {#2-dot-add-the-binaries-to-your-path}

Open system environment variables, then find the user variables. (Unless you want to change the Path for all users installed, in which case modify the system Path).

Then click on Path --> Edit --> New --> paste the path to the bin folder of your recently extracted Emacs installation.

For example, I have been putting all the software that doesn't go automatically into Program Files into my Local AppData directory. So the path I entered when I modified my Path variable was `C:\Users\steve\AppData\Local\emacs\bin`.

Note that AppData is hidden by default. So if you are using Windows Explorer you may need to toggle its visibility with View --> Hidden items.


## 3. Clone the Spacemacs .emacs.d into your home directory {#3-dot-clone-the-spacemacs-dot-emacs-dot-d-into-your-home-directory}

If you already have an .emacs.d (and you know who you are), you should back it up first and then copy over your configuration once Spacemacs is set up.

But if you are reading this guide, you probably don't. So you should open up a command prompt and `cd` to your home directory where your .emacs.d will live. At the time of writing on Windows 10 (May 2018), this is the Roaming AppData directory. So, for example, I would type `cd C:\Users\steve\AppData\Roaming`.

Once here, you should run `git clone https://github.com/syl20bnr/spacemacs .emacs.d`

You can look at the installation section of the Spacemacs Readme [here](https://github.com/syl20bnr/spacemacs#install), if you'd like.


## 4. Start Emacs and select your Spacemacs options {#4-dot-start-emacs-and-select-your-spacemacs-options}

Packages should automatically install. I use helm, but you could use ivy too. I highly recommend you use Vim bindings over Emacs bindings. (Let that be an opinion at present. There are reasons for this selection, but they are for another post).


## 5. Download hunspell {#5-dot-download-hunspell}

Emacs doesn't ship with spell checking. Since we are using this Emacs setup for writing, we definitely want spell checking.

You have the option of using three different spell-checking programs: ispell, aspell, and hunspell. I chose hunspell after reading [this StackOverflow page](https://emacs.stackexchange.com/a/28352).

You can download hunspell from [this page](https://sourceforge.net/projects/ezwinports/files/?source=navbar) (scroll down to find it). After you unzip it, you can put it wherever you like. I put this too in my Local AppData directory.

You'll need to add the hunspell executable binaries to your Path. Following a similar procedure as with Emacs, you'll end up with another value in your User Path. I added `C:\Users\steve\AppData\Local\hunspell\bin`.


## 6. Customize Spacemacs by editing your .spacemacs file {#6-dot-customize-spacemacs-by-editing-your-dot-spacemacs-file}

The .spacemacs file lives in the Roaming AppData directory. For me: `C:\Users\steve\AppData\Roaming\.spacemacs`.

First, you should find the layer section and uncomment the org and spell checking layers. I only have the helm, org, and spell checking layers uncommented, since I only use Emacs for org mode, but you may want more layers.

You should probably also change the font, since unless you download the Source Code Pro font, Spacemacs will complain. I use Verdana for legibility, but some people hate it. YMMV. I commented out the font size to make Emacs use a font size according to the screen resolution (since the text on my high-res screen was pretty puny at the default size of 13).

```lisp
dotspacemacs-default-font '("Verdana"
                             ;; :size 13
                             :weight normal
                             :width normal
                             :powerline-scale 1.1)
```

I also recommend using the Solarized themes (you can switch between them with `SPC T n`):

```lisp
dotspacemacs-themes '(solarized-light
                       solarized-dark)
```

And if you are a vimmer, relative line numbers are useful:

```lisp
dotspacemacs-line-numbers 'relative
```

Finally, there a few things to add to the user-config section. To get hunspell operational, I have the following:

```lisp
;; Hunspell
(setenv "LANG" "en_US")
(setq-default  ispell-program-name "C:/Users/steve/AppData/Local/hunspell/bin/hunspell.exe")
(with-eval-after-load "ispell"
  (setq ispell-really-hunspell t)
  (setq ispell-program-name "hunspell")
  (setq ispell-dictionary "en_US"))
```

I also have a few org mode hooks for word wrapping and the like:

```lisp
 ;; Org mode hooks
(add-hook 'org-mode-hook #'toggle-word-wrap)
(add-hook 'org-mode-hook #'toggle-truncate-lines)
(add-hook 'org-mode-hook #'org-indent-mode)
```

Finally, if you customize your key mapping, that would go here as well. I do quite a bit of this since I don't type on QWERTY, but many people will do something simple like swapping CapsLock with Esc or Control/Meta. I recommend the former if you are a vimmer and don't have a heavily customized layout that puts Esc somewhere convenient, and the latter if you are an Emacs user.


## 7. Run Emacs as a server {#7-dot-run-emacs-as-a-server}


### Motivation {#motivation}

Running Emacs as a sever lets files be opened very quickly as long as the server is running. Think of it like flipping a switch that makes Emacs open as fast as Vim.

To run the Emacs server, you can make shortcuts like the following.


### Only start the server {#only-start-the-server}

`C:\Users\steve\AppData\Local\emacs\bin\runemacs.exe --daemon`


### Start the server and open the homescreen buffer {#start-the-server-and-open-the-homescreen-buffer}

`C:\Users\steve\AppData\Local\emacs\bin\emacsclientw.exe -c -n -a ""`


### Default file handler {#default-file-handler}

Finally, you should set the default program to open org files to `emacsclientw.exe` (right click on a file --> "open with" --> "Always use this app to open .org files" and navigate to the emacsclientw executable).

As long as you make sure you have a server instance running before trying to open an org file (i.e., use one of the shortcuts above before trying to open an org file), opening org files should happen extremely quickly.


### Avoid crashes {#avoid-crashes}

I was puzzled for a while when I first started using this Emacs server setup since I was getting what appeared to be random crashes, crashes wherein I'd have to kill the whole Emacs process, server and all.

As I spent some time debugging, I was finally able to replicate the issue consistently (although I haven't figured out a way to solve it completely). Evidently, if you close out of the Emacs window (with the button on the window) without killing the current buffer or using `:q`, and then try to open the same file that is already open but not currently displayed (since you closed out of the window), you break something and Emacs wigs out. So just remember to kill buffers (`SPC b d` for Spacemacs) instead of closing the Emacs window, or `:q` out, and you should be good to go.
