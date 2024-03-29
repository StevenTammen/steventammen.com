+++
title = "Using the Cloud"
date = 2018-06-26T20:16:59-04:00
tags = []
categories = []
draft = false
inprogress = true
+++

[//]: # (tags = ["cloud", "workflow", "rsync"], categories = ["Computers/Software"])

## Motivation {#motivation}

Some people want to use cloud storage options for collaboration; some people want to use cloud storage options for storing images of VMs; and some people want a simple way to make sure that they have family pictures and videos backed up for future access. All of these are equally valid and sensible uses of the cloud. But they are definitely _not_ identical usages. We shouldn't expect one service to accomplish all things inherently (even though it would be possible in theory).


## Collaboration {#collaboration}

Since I only work with text based datatypes and live in my editors (NeoVim, Emacs for Org mode, IntelliJ/PyCharm/etc. for code), [Floobits](https://floobits.com/) looks like a good collaboration choice. Far superior to hackish support via Dropbox concurrent editing, and far less crippled than Google Docs or Office online. (Not because these are necessarily crippled for most people, but they are in terms of the Org mode files and code files I work with/plan to work with).


## Sync {#sync}

I have a primary work tablet with a 128 GB SSD. Due to installed software (some of which includes HD images of Greek manuscripts that take up a lot of space), I only have about 25 GB of usable space from the get go.

After bumping into the idea of a cloud file system that only downloads files locally during use (e.g., ODrive, Dropbox's smart sync, Google's file stream), I was sold instantly. Why should I buy a whole bunch of physical storage if can get by with keeping most of files in the cloud? I was going to keep a set of my files in the cloud anyway for backup purposes and irregular access (from a computer I don't own and what have you), so why not just forgo expensive internal SSDs to begin with?

This is different from mounting remote filesystems through SFTP with a persistent connection (cf. SSHFS). You only need an internet connection when downloading copies locally and when syncing these local copies back up to the cloud. Unstable connections do not present as much of a problem for the local + sync model as they do for the remote file system model.


## Some initial thoughts/research links for the brave and motivated {#some-initial-thoughts-research-links-for-the-brave-and-motivated}


### General cloud storage {#general-cloud-storage}

-   <https://www.cloudwards.net/comparison/>
-   block-level sync is mandatory for performance reasons. If you change one byte in a 4 GB file, why you should you need to resync the whole file? That's dumb.
-   "smart sync" (sync only what you need, dynamically) is important, in my opinion. If not automatic, absolutely must be scriptable with some sort of API.
-   link sharing (expiration, passwords), app integrations, Zapier/IFTTT support, (zero-knowledge) encryption, etc. are all also factors.


### P2P is maybe a good idea? Over LAN? {#p2p-is-maybe-a-good-idea-over-lan}

-   <https://www.resilio.com/>


### Deduplication {#deduplication}

-   <https://www.reddit.com/r/linux/comments/3nhx0p/rsync%5Fblock%5Flevel%5Fincremental%5Fbackup/>
-   <https://rsync.samba.org/>
-   <https://www.cis.upenn.edu/~bcpierce/unison/>
-   For interfacing with cloud storage options <https://rclone.org/>
-   S3-based paranoid backup <https://www.tarsnap.com/usage.html>
-   Attic and borg also


### Cheap storage options {#cheap-storage-options}

-   <https://www.backblaze.com/b2/cloud-storage.html> (only half a cent per GB of storage and a cent per GB transfer, a lot lower than Amazon S3/Google Cloud/Microsoft Azure/etc.)
-   <http://www.vmwareblog.org/looking-affordable-cloud-storage-aws-vs-azure-vs-backblaze-b2/>
-   <https://www.soyoustart.com/us/server-storage/>
-   FreeNAS


### Inotify + rsync idea {#inotify-rsync-idea}

-   <https://serverfault.com/questions/7969/is-there-a-working-linux-backup-solution-that-uses-inotify>
-   <https://github.com/JayGoldberg/birsync>
-   <https://bartsimons.me/sync-folders-and-files-on-linux-with-rsync-and-inotify/>
-   <https://github.com/axkibe/lsyncd>


### ZFS replication as an ideal solution? Fascinating stuff. {#zfs-replication-as-an-ideal-solution-fascinating-stuff-dot}

-   <https://arstechnica.com/information-technology/2014/01/bitrot-and-atomic-cows-inside-next-gen-filesystems/?comments=1>
-   <https://arstechnica.com/information-technology/2015/12/rsync-net-zfs-replication-to-the-cloud-is-finally-here-and-its-fast/>
-   <https://github.com/jimsalterjrs/sanoid/>
-   <https://news.ycombinator.com/item?id=10751269>
-   <https://www.reddit.com/r/sysadmin/comments/3x7wr1/rsyncnet%5Fzfs%5Freplication%5Fto%5Fthe%5Fcloud%5Fis%5Ffinally/>
-   <https://slashdot.org/story/15/12/22/026209/zfs-replication-to-the-cloud-is-finally-here-and-its-fast>

Here are some more links in this area from another round of research. Most of this is still a bit above me:

-   <https://sixfeetup.com/blog/backing-up-using-zfs-snapshots-and-replication>
-   <https://serverfault.com/questions/842531/how-to-perform-incremental-continuous-backups-of-zfs-pool>
-   <https://github.com/ewwhite/zfs-ha/wiki>
-   <http://www.bolthole.com/solaris/zrep/>

ZFS vs btfrs performance

-   <https://www.diva-portal.org/smash/get/diva2:822493/FULLTEXT01.pdf>

ZFS on Linux performance (vs. something like FreeBSD)

-   <https://www.phoronix.com/scan.php?page=article&item=ubuntu-xenial-zfs&num=2>
-   <https://hardforum.com/threads/has-anyone-compared-freebsd-zfs-vs-zfs-on-linux.1819266/>
-   <https://www.reddit.com/r/zfs/comments/6f5cqn/is%5Fperformance%5Fusing%5Fzfsonlinux%5Fthe%5Fsame%5Fas/>


### Rsync.net {#rsync-dot-net}

-   <https://www.rsync.net/index.html>
-   Apparently you get root access inside your slice of the pie. But can you run a shell if you SSH in? Install stuff (Python, CLIs for stuff, etc.) like a normal VM?
-   Would allow for ZFS replication workflow
-   Support from real sysadmins not phone-answering people
-   Need to email them for more info.


### Legit Linux servers for sure {#legit-linux-servers-for-sure}

-   <https://www.linode.com/>
-   Expensive for just cloud storage. But you could definitely host a website/webapp/etc. on this. Again, need to figure out exactly what you can do on Rsync.net (to see if it is a full-blown VM that you can use over SSH or something more crippled).


### SSHFS {#sshfs}

-   might be too slow? Not so bad if you use a stream cipher? Is RC4 secure (is there something better?)? <http://www.admin-magazine.com/HPC/Articles/Sharing-Data-with-SSHFS>
-   Could always have the cloud mounted and then ZFS replicate over files you know you are going to use to local? Mirror directory structure and one-way copy with rsync maybe?


### Compression and encryption {#compression-and-encryption}

-   Save bandwidth. Tradeoff with CPU cycles/processing time? Faster to just transfer the files straight?
-   Does zero-knowledge encryption slow things down? Can you do block-level sync with encrypted archives? Would VeraCrypt work?
-   Assuming a secure datacenter does encryption even matter?


### Multiple clouds {#multiple-clouds}

-   Is geographic redundancy necessary or just statistically a waste of money (and electricity etc. on the environmental side from duplicate servers)?
