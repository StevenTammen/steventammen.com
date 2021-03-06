+++
title = "Correcting Git Commit Typos"
date = 2018-05-27T15:47:21-04:00
tags = []
categories = []
draft = false
+++

[//]: # (tags = ["git", "workflow"], categories = ["Computers/Software", "Productivity/Efficiency"])

## Motivation {#motivation}

Earlier today when I was working on my [unicode-language-layers project](https://github.com/StevenTammen/unicode-language-layers), I committed some changes locally with typos, and then pushed them remote without really checking my message very closely. Whoops.

Then I did some more stuff locally, and added my changes. Then I noticed the typos in my last commit, and decided that it would be unprofessional for me not to correct them (I can spell "and" correctly thank you very much...)


## What you should not do {#what-you-should-not-do}

Google-fu turned up the command `git commit --amend`. But I was careless and didn't read the disclaimers that people included with the command.

Since I had added more changes since the initial commit with the typo, the new amended commit included the new changes, which had nothing to do with the earlier commit. But I didn't realize this until later.

Now, the first problem here was that I had already pushed the changes remote. So when I used `git commit --amend`, I was amending a local commit that was already on the remote server. This caused me to now have two commits: the old commit with typos (remote), and the new commit with the typos fixed (but extra stuff added to the commit).

Now, if I had been more careful, I could have gotten rid of the staged changes with `git reset` before I had used `git commit --amend`, and at this point, I could have force pushed the amended commit to overwrite the one with typos in the remote repository. I tested this later just to make sure that this _would have_ worked if I had done it this way.

But for whatever reason, I decided it was a good idea to get everything pushed to remote... so I pulled the original commit (with typos) from remote (which added a merging commit), and then pushed up everything. Now remote had the old commit with typos, the new commit without typos (but with a bunch of extra changes), and the commit to merge the branches (HEAD and remote master).

This was the point when I realized that I had goofed and included a bunch of unrelated changes in the new commit.


## Getting back to before I messed everything up {#getting-back-to-before-i-messed-everything-up}

Now that I had realized that I had done everything the wrong way, I looked up a way to reset local and remote to a specific commit (and delete all the commits after that): [StackOverflow delivers](https://stackoverflow.com/a/3293592).

I used `git reset <hash>` without specifying a mode, since the default mode is `mixed`. If I had wanted to get rid of all my changes in the working tree when I reverted, I would have used `git reset --hard <hash>`. You can also use `git reset --soft <hash>` to roll back to a commit without changing the index or the working tree.

At this point I was smart enough to read more carefully, and figure out how I could have done the amend correctly (as above: amend last commit --> force push). But now I was curious, and wanted to see how I could correct typos in a commit pushed remote when it was a few commits back.


## Rebasing to correct commit typos {#rebasing-to-correct-commit-typos}

To summarize where I was after the reset and force push:

1.  Both local and remote were at the commit that had typos.
2.  Local had some unstaged changes that I completed after this commit (since I had not used the `--hard` option for `git reset`).

At this point I committed the new (unrelated) changes in a separate commit, and pushed the new commit remote. I wanted to learn how to rebase and change commit messages that were a couple commits back.

Then I ran `git rebase -i HEAD~2` to run an interactive rebase, and used the `reword`
option for the commit with typos. After I closed out of the rebase itself, my `$EDITOR` (Vim) opened, and I fixed the typos. After getting out of this too and finishing the rebase, I force pushed the changes. And _voilà_, typo correction successful.


## Gotchas {#gotchas}

Don't do this (i.e., rebase --> force push) if you have people pulling from your remote repository and working on stuff, since it gets iffy real fast. At least that is my understanding according to what people on the internet say.

Also, apparently this sort of approach doesn't work if you have a bunch of messy merges. See [here](https://stackoverflow.com/questions/42252725/git-change-already-pushed-commit-message-using-git-rebase).
