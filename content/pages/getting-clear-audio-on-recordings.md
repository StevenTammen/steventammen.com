---
title: Getting clear audio on recordings
date: 2021-07-18
categories: ["Software"]
tags: ["audio", "mics", "dynamic range compression", "normalization", "dynamic normalization", "ffmpeg"]
weight: 
inprogress: false
---

## The basic problem

I want to have excellent, clear audio on all the videos recordings I upload. I could care less about audio balance, audio color, EQ, and so on -- an audio engineer can have my head. I don't care. What I want is for all speakers on every recording I have to be roughly volume-matched (so no one is noticeably louder or quieter than everyone else -- kind of a tall order given that I'm a pretty loud person), for the audio to be relatively clear (without background noise getting amplified to the extent that it obscures speech), and without clipping or distortion anywhere, because that's just annoying. Those are basically my standards.

This is in line with the content-first, function-over-form paradigm I am trying to adopt in all things. I want anyone watching my content (even including my toughest customers: any of my old listeners out there with hearing degeneration) to be able to clearly make out what we are saying on the recordings -- to be able to make use of the content with basically zero *practical* disadvantage, even if it isn't the most beautiful-sounding audio mix they've ever listened to.

I spent many hours learning about audio to figure exactly what it is I want. Is it dynamic range compression? Normalization? Do I need to record multitrack audio to get things to a "good enough" state, or is that overkill and more bother than it is worth?

All of these things will be covered below. But in case you'd like to stop reading here, if you have `ffmpeg` installed and on your path, to clean up the audio on your video, just run:

```powershell
ffmpeg -i  inputfile.mp4 -c:v copy -filter:a dynaudnorm  outputfile.mp4
```

That's it. You're good to go!

## The initial impetus behind all this

A while back, I held an in-person Bible study. Using a USB audio mixer, I set up a [boundary microphone](https://en.wikipedia.org/wiki/Boundary_microphone) to capture the audio of everyone around a table. After a couple recordings, it became clear to me that people closer to the mic appeared noticeably louder on the recordings than everyone else. Since this was a single-track setup (using a sensitive condenser mic to pick up multiple people at once), I couldn't normalize different speakers in isolation.

At this point in time, I came across a program called [Levelator](http://conversationsnetwork.org/levelator) that claimed to do magical things to single track audio files to even out the volume between speakers. I still think the writeup on that page is an excellent jumping-off point into the issues here, and while it's been a while and I don't remember all the specifics, I do believe the program worked, at least to a degree. (I was feeding it raw WAV files. The filetype restrictions really do make this program pretty niche).

Ever since then, I've been determined to find a way to have algorithms magically do audio cleanup for me so that I don't have to spend any time doing it manually myself. It planted the seed in me, in other words.

If you are really interested, I wrote up a bunch of this stuff way back when (TODO: edit and polish). This never went up on my blog at the time because I got hit by the college truck. (Especially bad since I was a triple major).

{{% sidenote %}}

### Mic for recording smallish meetings of people

#### Omnidirectional mics make more sense than cardioid mics

- [Directional Mic compared to an Omnidirectional Mic | Knowledge Base | Shure Americas](http://www.shure.com/americas/support/find-an-answer/directional-mic-compared-to-an-omnidirectional-mic)

For a meeting of 5-10 people where you want to be able to hear everyone clearly, omnidirectional mics work best. It is difficult to place a cardioid mic at a close distance from all people: you might get better sound due to less room noise (by rejecting noise coming from the back or sides), but you cannot get 5+ people to sit as close when a mic is truly directional (and you would definitely get off-axis coloration). It is easier to pick up audio clearly when it is louder due to proximity, and a sensitive mic (read: condenser) with a lower gain setting can be used to get good audio from people positioned 360 degrees around a mic, but near to it. Most meetings work best with people sitting in a circle anyway, to let everyone look at each other.

Room acoustics become more important when using an omnidirectional condenser mic. You will pick up more room reverb than with a directional mic.  Omnidirectional mics also do not suffer from proximity response effects boosting bass at close distances. Not that this matters much with speech, or at the distances used with an omnidirectional mic capturing the conversation of a group of people. 

#### Mics for everyone

High quality directional gooseneck mics would unquestionably work better (clearer sound, less room noise) if everybody was properly mic'ed and tracks got mixed correctly. But it is more hassle, and more intimidating to have everybody be explicitly dealing with mics. In a casual meeting of friends, you can't forget that goosenecks are there, in other words, and they are more suited for conference tables than armchairs.

Lavalier mics are less intrusive and would have better gain due to proximity, but they are still somewhat intrusive/fiddly to set up, and you would need as many of them as you had participants. Still thinking on this one.

You might also be able to get away with just passing around a handheld directional mic, like a talking stick. That's not what I decided to do though -- my particular group had quite dynamic discussions (we'd sometimes end up essentially talking over each other = you couldn't guarantee only one person was ever talking!).

#### Boundary mics

Boundary mics are the best type of omnidirectional mic for the things I wanted to do, as far as I was able to determine.

##### Have a high sensitivity and high signal/noise ratio

Boundary mics have about 6 dB higher sensitivity compared to normal omnidirectional mics due to in-phase direct and reflected sounds off of the mounting surface (giving them very good signal to noise ratios). This is important since an omnidirectional mic being used to record a group of speakers won't be mic'ed super close. [Mic'ing close reduces the necessity for mic sensitivity and you don't have to worry about a mixer's noise floor as much](https://www.prosoundweb.com/topics/studio/in-depth_microphone_specifications_explained/5/).

Assuming reasonably OK room acoustics and reasonably decent sound isolation (no noisy AC, road noise, fans, etc.) -- such that high sensitivity doesn't come back to bite you a lot -- a more sensitive mic lets you pick up people that are both close and further away clearly, while a less sensitive mic could only clearly pick up the close people. You don't have to crank up the gain (and thus deal with more background noise) with sensitive mics to mic distant people.

##### Pick up a high ratio of direct sound to reverberant sound (improving reach)

With 6 dB of direct boosting and 3 dB of reverberant sound boosting, boundary mics boost direct sounds more than reverberant sounds, and thus are better for picking up distant audio cleanly than normal omnidirectional mics.

{{% quote text="A very good resource on boundary mics" src="boundary-microphones.pdf" %}}

The direct-to-reverberant sound ratio is high because the direct sound is boosted 6 dB near the surface, while the reverberant sound, being incoherent, is boosted only 3 dB. In other words, distant sources sound closer and clearer with the PZM than they do with a conventional omnidirectional microphone.

{{% /quote %}}

##### Have a smooth frequency curve with no comb-filters

Effective frequency response does not change as the sound source moves, unlike conventional microphones that have to deal with the wave-cancellations of reflections.

##### Collection of link research

- [In-Depth: Microphone Specifications Explained - Page 5 of 8 - ProSoundWeb](https://www.prosoundweb.com/topics/studio/in-depth_microphone_specifications_explained/5/)\
- [Exploring the Boundaries – A Close Look at an Invisible Microphone | B&H Photo Video Audio](https://www.bhphotovideo.com/c/find/newsLetter/ExploringBoundaries.jsp)\
- [Putting Them (Microphones, That Is) On The Floor - ProSoundWeb](https://www.prosoundweb.com/channels/live-sound/putting-them-microphones-that-is-on-the-floor/)\
- [THE OMNIDIRECTIONAL BOUNDARY MICROPHONE](boundary-microphones.pdf)\
- [Q. PZM and Boundary mics — what's the difference? |](https://www.soundonsound.com/sound-advice/q-pzm-and-boundary-mics-whats-difference)

#### Picking between options

I compared two boundary mics with XLR out, on the higher end of things:

- [Shure MX393/O Microflex Omnidirectional Boundary MX393/O B&H](https://www.bhphotovideo.com/c/product/126758-REG/Shure_MX393_O_MX393_O_Omni_Directional_Boundary.html)\
- [Audio-Technica U851RO Omnidirectional Condenser Boundary U851RO](https://www.bhphotovideo.com/c/product/753544-REG/Audio_Technica_U851RO_U851RO_Condenser_Boundary_Microphone.html)\
- [U851RO Omnidirectional Condenser Boundary Microphone || Audio-Technica](https://www.audio-technica.com/cms/wired_mics/3560f507ae430adb/index.html)\
- [MX392 & MX393 Microflex Boundary Microphones | Shure Americas](https://www.shure.com/americas/products/microphones/microflex/mx392-mx393-microflex-boundary-microphones#downloads)

Comparing the spec sheets at the manufacturer links, the Shure microphone has a higher signal to noise ratio (quoted at 80 dB vs 73 dB for the Audio Technica model), so that's the one I went with. These two mics appear to be equally good in most things -- and are both from quality, reputable brands.

This Shure mic is probably overkill for my immediate applications, but it will scale with groups of more people; assuming room acoustics are kept decent, if I turn up the gain and try to space people out so no one is tons louder than everyone else, the audio should still be good with this mic. You also get what you pay for.

### Computer audio interface

Just need a preamp with phantom power and good gain settings without much noise.

- [Shure X2u - XLR to USB Microphone Signal Adapter X2U B&H Photo](https://www.bhphotovideo.com/c/product/598406-REG/Shure_X2U_X2u_XLR_to.html)\
- [Shure X2U XLR-to-USB Interface Review / Test / Explained - YouTube](https://www.youtube.com/watch?v=QBsL8PGYRuY)\
- [Focusrite Scarlett Solo USB Audio Interface Explained / Review - YouTube](https://www.youtube.com/watch?v=6ivuYee6KAw)\
- [Focusrite Scarlett 2i2 (2nd Gen) USB Audio Interface Review / Explained - YouTube](https://www.youtube.com/watch?v=B7tw8WRVnJQ)\
- [Difference between Focusrite Scarlett Solo and Focusrite SCARLETT 2i2? : Twitch](https://www.reddit.com/r/Twitch/comments/3utyuu/difference_between_focusrite_scarlett_solo_and/)\
- [Focusrite Scarlett (2i2 & Solo) | Frostbyte - YouTube](https://www.youtube.com/watch?v=V5U7ShuGy1w)

The Focusrite Scarlett Solo is what I decided to go with. I may use this with a podcasting mic (a cardioid directional mic; I like the look of the [Rode Procaster](https://www.rode.com/microphones/procaster)) as well, eventually. I don't really need dual mics for stereo or inputs for any MIDI stuff since I'm not a musician and will only being using the interface for voice recording with an omnidirectional boundary mic and a directional podcasting mic (one at a time). Therefore, I went with the ~$50 cheaper Solo version that doesn't have a second mic pre-amp. It is also somewhat smaller and more portable than the 2i2.

### Room stuff

#### Acoustics

- [The Ultimate Podcasting Hack: Record in your closet and use two pillows](https://medium.com/@saronyitbarek/the-ultimate-podcasting-hack-record-in-your-closet-39a478f4d89a)\
- [How to Get Good Room Acoustics for Your Podcast | Joe Casabona](https://casabona.org/2018/06/podcasting-room-acoustics/)

Essentially, you want a pretty absorbent room, but with some sound diffusion so your recording doesn't sound dead.

The house I was staying in had a room with a fair bit of sound absorption (a floor rug, couches/cushy chairs, a big canvas painting on one hard wall, curtains, and fairly large cloth tapestries on two other walls). That room had decent acoustics.

#### Mic placement in room

- [How to Record Vocals in a Bedroom](https://music.tutsplus.com/tutorials/how-to-record-vocals-in-a-bedroom--audio-2224)\
- [Mic Placement for VO in small room - Gearslutz](https://www.gearslutz.com/board/low-end-theory/579578-mic-placement-vo-small-room.html)

It makes the most sense if you have a directional mic to point the mic at the best insulated part of the room; if you get to insulate one thing, insulate the thing directly opposite the mic. And make darn well sure you don't have a glass window or something that is very reflective opposite the mic.

With omnidirectional mics, things aren't so obvious. It is probably best to still try to move as far away from windows (or other very hard surfaces) as possible, however, to avoid the worst of reflections. That is, trying to record in the best-insulated part of the room is likely to yield the highest quality, in general. (At least based upon my understanding, which could very well be wrong since I'm still learning about all this stuff).

{{% /sidenote %}}

## Improving initial audio input is best

If you can convince the people on your recordings to do the things that lead to better input audio to begin with, that will be ideal. The better the initial audio coming in, the better it will sound after all is said and done. Period.

However, while I might suggest most people either sit close to their computer's built in mic in a quiet room (or go and buy a $70 lav mic with better ambient noise-rejection, e.g.) and turn up their gain/mic boost a bit, maybe these things aren't possible. Maybe people have lots of unavoidable noise around them. Maybe they can't casually drop $70 like most of us here in the West can. Maybe they have no idea what gain is or how you adjust it. You get the idea.

Unfortunately, as a creator, you may not have much control over other people's audio. If I could, I'd set up hard zero-compromise rules about audio whenever I record with others... but I just know it would never fly. This means it is going to be on me to clean up the audio in post as best I can to make sure end-viewers don't have a suboptimal experience.

All other things aside, you do control *your* setup, so do make sure that at least your part of the audio is good!

## Avoiding clipping and distortion

Honestly, I don't think I have come across a single automated audio tool yet that I think will really let you merrily screw up your audio (= clipping off peaks, e.g.) without at least warning you first. Manual editors are another story, however.

If you have more headroom in your recordings, you'll be able to renormalize to a higher overall volume after compression, if you do compress the dynamic range of your audio. That can be useful, and is something to keep in mind, but I don't think most people need to worry too much about clipping and audio distortion as long as you stick to using (intelligent, modern) tools rather than manually editing audio files.

I think almost everyone should be using automated tools anyway -- letting the algorithms get you to 80% effectiveness or whatever with zero hand-editing involved. If you are in a context where you really do need to hand-optimize your files, you probably know who you are, and probably know way more than me about all this audio stuff anyhow.

All this to say, while I did include this as an important variable in good audio because it is, it isn't something we'll really need to worry about too much in practice, as long as you don't go directly monkeying around with things unless you really understand them.

## (Linear) audio normalization and dynamic range compression

Some links concerning what these things are and what the differences between them are:

* [Audio normalization - Wikipedia](https://en.wikipedia.org/wiki/Audio_normalization)
* [Dynamic range compression - Wikipedia](https://en.wikipedia.org/wiki/Dynamic_range_compression)
* [How To Normalize Audio - Why Do It? Everything You Need To Know](https://www.learndigitalaudio.com/normalize-audio)
* [audio - Normalizing large differences in volume (pumping) in a movie file (with ffmpeg) - Super User](https://superuser.com/questions/1476912/normalizing-large-differences-in-volume-pumping-in-a-movie-file-with-ffmpeg/1477032#1477032)

The basic idea is this: if you want to make your audio softer or louder (across the entire file, without changing the relative gap between loud parts and soft parts at all), you would use (linear) audio normalization. You know how ads on TV always seem louder than the show you were watching? You could fix that by running the ads through an audio normalizer adjusted to the level of the other content, so that the ads would end up at the same volume as everything else (i.e., quieter than before). The whole ad -- from the very loudest parts to the very softest parts -- would all get reduced in volume by the same amount.

If, on the other hand, you want to want to make everything closer to the same volume, you might use dynamic range compression, which, just as its name suggests, compresses the dynamic range (absolute value difference in loudness between loudest and quietest parts), making everything closer to the same volume. It does this by making *all* loud parts softer and *all* soft parts louder.

So, it sounds like dynamic range compression might be the answer to getting our audio at a more consistent level, even across speakers, right?

The problem is, dynamic range compression is "dumb" -- it will compress the dynamic range even when you might otherwise want it preserved because one single speaker is varying their volume for emphasis (for example). DRC seriously changes audio character, in other words, because it squashes the dynamic range everywhere, even where it might be not so great to do so.

## Leveling out audio without getting rid of an individual speaker's localized changes in dynamic range

Well, as we touched on initially, if you are in control of everyone's audio, you can handle the worst of things before ever having to worry about such things as software-driven DRC algorithms:

- If you have a USB mixer setup with two different proper XLR mics (e.g.), you can adjust mic gains individually to compensate for different speaker volumes. As a loud person, you might turn down my gain, while boosting the gain of my soft-spoken friend, for example. This solves the volume difference problem in large part, right from the beginning. (Assuming we are both the same distance from our mics, etc.).
- There also exist some so-called "automatic gain control" (AGC) devices. These things can handle a degree of leveling on the input side of things, but the overall impact of the leveling is muted, given that it suffers from the constraints of running real-time (rather than running on a static file in post-production). Basically, it is crippled since it can't do multiple passes to generate a "loudness map", and has no lookahead at all.

Unfortunately, these things will probably typically be completely out of your control anyhow. Thus, we need to figure out a software solution that is more general.

To make sure we are being clear about what we want here, if we have Mr. Loud speaker and Mr. Quiet speaker on the same call, what we are trying to do is basically (i.e., in a "good enough" sense) preserve Mr. Loud's dynamic range in his speech and Mr. Quiet's dynamic range in his speech while simultaneously making it so that they both sound about equally loud. Tricky, eh?

### One solution: multitrack audio

If you record multitrack audio, you can use linear normalization on each speaker, so that you completely preserve everyone's dynamic range, while also being able to adjust people's volume up and down. (Recall, linear normalization just adds or subtracts a constant amount of loudness from the whole audio file, essentially). Based on my initial research, here's how you could set this up:

#### 1. Record multitrack audio

Make sure the audio is of the exact same length for all participants, and is time-matched (i.e., lined up).

{{% sidenote %}}

It is possible to have Zoom set up to record multitrack audio by speaker. You [have to check a box in Zoom's settings](https://yayapodcasting.com/remote-podcast-interviews-recording-separate-tracks-on-zoom-us/).

However, Zoom's multitrack recording by speaker is unacceptably dumb, as it has no way aside from manual editing to deal with people disconnecting (even if they reconnect soon after). The audio for the disconnected speaker will end up all in pieces... and be a different overall length than everyone else's!

How it *should* work, in my opinion, is that if someone disconnects from a meeting, then their audio track during their disconnect will be padded second-for-second with silence, so that all audio tracks come out the same length, and are completely time-matched. Mixing audio tracks of different lengths -- if they are not time-matched -- is a complete nightmare, because the whole process has to be manual (and it is very error-prone at that).

This time padding should be used in all possible cases. If someone doesn't join the meeting until halfway through, then their audio up to the time they join should be padded with silence. If someone leaves thirty minutes early, their audio from that point on should be padded with silence. In this way, at the end of the recording, everyone will end up with audio tracks of exactly the same total length, with everyone's speech time-matched with each other's recordings.

I don't know how well other multitrack recording solutions work with this disconnect business either -- it's a function of online recordings, not Zoom specifically. For example, using [Craig](https://craig.chat/home/) to record on Discord -- does it handle speaker disconnects in its multitrack audio?

With all this said, Zoom's multitrack recording (and I'm assuming all other multitrack options too) does work absolutely fine if all parties stay connected the full duration of the recording. Since you always get the combined audio track anyway in the Zoom recording output, you could try to use the multitrack approach when possible (nobody disconnected during the recording = all audio tracks by speaker are time matched and exactly the same length), and the shared one otherwise (which has all tracks already mixed appropriately).

{{% cautionary-note %}}

If I'm being really dumb and there is metadata in the Zoom-generated multitrack speaker audio that lets you line up all the fragments at the correct time spots with some special audio editing program that can pick up the metadata (e.g.), someone please let me know. I don't want to be spreading misinformation. I'm pretty new when it comes to all this, so am just going on how things seem to me.

{{% /cautionary-note %}}

{{% /sidenote %}}

#### 2. Normalize the audio of each separate audio file

There are [multiple ways to do it](https://superuser.com/questions/323119/how-can-i-normalize-audio-using-ffmpeg). I'll be talking about dynamic normalization separately later. This is just the gist of how you might set up normalization.

This will get all the audio files/speakers at the same loudness.

#### 3. Downmix the audio files together to get a single audio file

We aren't concatenating files (combining a file of 5 minutes and a file of 3 minutes into a combined file that is 8 minutes), nor making multiple audio tracks for the same video (as in having a English track, Hindi track, and Mandarin track on the same video -- you'd never play these at the same time). Instead, we want to overlay/downmix multiple files into one file. Some links:

* [How to overlay/downmix two audio files using ffmpeg - Stack Overflow](https://stackoverflow.com/questions/14498539/how-to-overlay-downmix-two-audio-files-using-ffmpeg)
* [FFmpeg Filters Documentation](http://www.ffmpeg.org/ffmpeg-filters.html#amix)
* [FFmpeg Filters Documentation](http://www.ffmpeg.org/ffmpeg-filters.html#amerge-1)
* [how to merge audio using ffmpeg, not concat - Super User](https://superuser.com/questions/644768/how-to-merge-audio-using-ffmpeg-not-concat)
* [How do I use ffmpeg to merge all audio streams (in a video file) into one audio channel? - Stack Overflow](https://stackoverflow.com/questions/45824127/how-do-i-use-ffmpeg-to-merge-all-audio-streams-in-a-video-file-into-one-audio?rq=1)
* [FFmpeg : mixing and setting each volume of a multi audio track file - Super User](https://superuser.com/questions/769168/ffmpeg-mixing-and-setting-each-volume-of-a-multi-audio-track-file)

#### 4. Add the newly combined audio file to your video

If you don't have any audio on the video, you can just add it (you should not re-encode the video, as doing such is unnecessary, but should just copy it straight):

* [How to merge audio and video file in ffmpeg - Super User](https://superuser.com/questions/277642/how-to-merge-audio-and-video-file-in-ffmpeg)

If you already have audio on the video, you could [remove all audio from the video](https://superuser.com/questions/268985/remove-audio-from-video-file-with-ffmpeg), and then add your new audio file with the command from above.

Or, if that seems like an extra unnecessary step (which it is), you could just do the audio replacement in a single command:

* [ffmpeg - replace audio in video - Super User](https://superuser.com/questions/1137612/ffmpeg-replace-audio-in-video)
* [windows - How do I replace the audio in an MP4 file without re-encoding? - Super User](https://superuser.com/questions/602662/how-do-i-replace-the-audio-in-an-mp4-file-without-re-encoding)

#### 5. Profit

Now we have a video with audio that has full dynamic range for all the speakers, yet still has consistent volume throughout. Cool, huh?

There are even more benefits to recording multitrack audio than just this workflow, however, as some of the previous links discuss: 

{{% quote text="Recording separate tracks on Zoom" src="https://yayapodcasting.com/remote-podcast-interviews-recording-separate-tracks-on-zoom-us/" %}}

When each speaker on your podcast has their own track (aka audio file), editing out problems is easier. You can silence coughs, pen clicks, dog barking, the wails of unhappy children or whatever unwanted noise without having to delete any content...

To get rid of the offending audio in a single track would require lots of fancy editing and effects that will probably distort at worst or reduce your audio quality at best. To get rid of the offensive audio in separate tracks is a lot easier and you’ll preserve your audio quality. All you’ll need to do is cut or silence the track with unwanted noise.

In addition to the noise problem a single track presents, there are also other limitations. You can’t EQ precisely. You can’t apply effects to one speaker. It puts major limitations on getting the best from your audio. Separate tracks help you get the most out of your audio and *you should always, always record each speaker on their own track whenever possible*. 

{{% /quote %}}

{{% quote text="Craig" src="https://craig.chat/home/" %}}

[W]hen Craig records your Discord voice channel, you get a separate audio file for each speaker. You can independently level, cut or otherwise edit each speaker, an invaluable ability for podcasts, let's plays and the like.

{{% /quote %}}

Let me add a direct example of my own. Let's say you have three speakers: Alice, Bob, and Charlie. Charlie has good audio, but Alice's baby right next to her wails periodically, and Bob is right next to his reasonably-loud HVAC unit.

To get optimum audio, you'd ideally want to be able to edit out the wailing baby completely, and then run some audio process (perhaps something muting low frequency noise) to take the worst of the edge off of Bob's HVAC unit. With all the speakers on separate audio tracks, this is pretty easy. You go silence every part of Alice's recording where the baby is wailing. You then run the audio process on Bob's audio alone.

Neither of these operations messes with Charlie's audio at all. If Charlie is speaking when the baby is wailing, we don't affect the clarity of his speech at all when we remove the baby... because we don't have to try to somehow separate his sound waves from wailing baby sound waves -- they're on different tracks completely. Likewise, none of Charlie's recording has even the slightest possibility of getting messed up by the process we run on Bob's audio to lessen the severity of the HVAC noise. These are the advantages of separability in action.

#### Are there cons to doing things the multitrack way?

In the example I just gave, you are coming back in to do manual sound editing in post. On top of that, you have to deal with downmixing the separate audio tracks, and splicing the new audio back into the video.

While I think the latter two disadvantages would be completely solvable if someone would just write some software to automate it or wrap it (rather than all of us having to go squint at `ffmpeg` commands all the time), nonetheless, the truth of the matter is that many of the reasons people cite for recording multitrack don't matter at all if you aren't willing to spend any time manually processing your audio to begin with.

This describes me. I'm willing to run a script or two against my videos in a hands-off sort of way to improve the quality as much as I can, but I am 100% opposed to ever touching a waveform editor. I don't have the time. I'm *starting* with five consistent videos a week (plus a couple more every other week, and even more on top of that less predictably) in my output, and I want to be producing more text content than videos anyway! Manual editing is out of the question for me.

For this reason, many of the editing advantages of multitrack go out the window for my circumstances specifically, such that one begins to question if going through the additional hassle is really necessary. The question then remains if it is somehow possible to level out the volume across speakers while preserving most of the dynamic range on the recording when processing everyone combined in the same audio file (rather than multiple tracks).

### A second solution: dynamic audio normalizers

The answer to the above is "yes, it is basically possible." Some very smart people wrote algorithms that use sampling frames, Gaussian smoothing, and intra-frame linear interpolation to dynamically normalize audio -- boosting quiet parts more than loud parts during normalization -- while still basically preserving localized dynamic range. (Contrast dynamic range compression which isn't context-sensitive like this). This stuff flies above my head (and substantially so, if I'm being honest), so I only understand the surface level of it. You can read the documentation links directly to see the full treatment:

* [lordmulder/DynamicAudioNormalizer: Dynamic Audio Normalizer](https://github.com/lordmulder/DynamicAudioNormalizer#introduction)
* [loudnorm](http://k.ylo.ph/2016/04/04/loudnorm.html)
* [FFmpeg Filters Documentation - dynaudnorm](https://ffmpeg.org/ffmpeg-filters.html#dynaudnorm)
* [FFmpeg Filters Documentation - loudnorm](https://ffmpeg.org/ffmpeg-filters.html#loudnorm)

And also several discussion links where these come up and are explained a bit:

* [getting audio all at same volume - VideoHelp Forum](https://forum.videohelp.com/threads/382865-getting-audio-all-at-same-volume)
* [Adjusting audio with varying loudness (recorded talks) with FFMPEG - Super User](https://superuser.com/questions/1303036/adjusting-audio-with-varying-loudness-recorded-talks-with-ffmpeg)
* [ffmpeg loudnorm filter does not make audio louder - Super User](https://superuser.com/questions/1281327/ffmpeg-loudnorm-filter-does-not-make-audio-louder)
* [Volume normalization without loudnorm : ffmpeg](https://www.reddit.com/r/ffmpeg/comments/eobrl6/volume_normalization_without_loudnorm/)

Here's what the DynamicAudioNormalizer dev had to say by way of explanation on a forum:

{{% quote text="A forum post" src="https://forum.doom9.org/showthread.php?p=1813760#post1813760" %}}

Yes, when using the DynamicAudioNormalizer, any "frame" whose level is below the target level will be amplified to the target level, and any "frame" whose level is above the target level will be attenuated to the target level -- with some trickery (Gaussian filter) to avoid fast fluctuation of the amplification/attenuation factors. In other words, the DynamicAudioNormalizer will "equalize" the volume of "quiet" and "loud" sections.

The more simple "volume" filter will just apply the same **fixed** amplification factor to all samples. So, if the "loud" sections of your file already *are* at maximum signal level, then the "volume" filter can not further increase the volume of your file, as this would unavoidably result in *clipping* (in the "loud" sections). In other words, with the "volume" filter, the "loud" sections may prevent further amplification of the "quiet" sections. The DynamicAudioNormalizer can help in this situation.

If, on the other hand, the "loud" sections of your file are **not** at maximum signal level yet, i.e. there is some "headroom" in your file, then the "volume" filter can increase the volume of your file -- to the extent that brings the "loud" sections to the maximum signal level. But even in that case, the "volume" filter does **not** "equalize" the volume of "quiet" and "loud" sections! It's just like turning up the volume of your speakers a little more. There is **no** "dynamic" adjustment.

Still, if you actually **do** have some "headroom" in your file, I would suggest to apply the "volume" filter first, to get "traditional" normalization. And then, if still required, use DynamicAudioNormalizer to bring up the "quiet" section some more...

{{% /quote %}}

Loudnorm is best done in two passes if you are doing the normalization in post-processing rather than doing it real-time (as you would if streaming live, e.g). Links:

* [How can I normalize audio using ffmpeg? - Super User](https://superuser.com/a/323127/1124311)
* [Audio Loudness Normalization With FFmpeg](http://peterforgacs.github.io/2018/05/20/Audio-normalization-with-ffmpeg/)

Basically, letting it do one pass first lets it work more efficiently when doing the normalization, as it can have "scoped out" the audio before running on it -- think lookahead. DynamicAudioNormalizer uses lookahead too. It's very clever.

The guy from that Super User answer wrote his own Python wrapper for the otherwise-messy multi-step process for doing two Loudnorm passes. It's nice and easy to use. Just install it with `pip` and off you go.

* [slhck/ffmpeg-normalize: Audio Normalization for Python/ffmpeg](https://github.com/slhck/ffmpeg-normalize)

So, the question here then is which one of these two brings the quiet and loud sections closest to the same value? I'm sure the answer to this one depends somewhat on what settings you use (there are lots of command-line options for both of these `ffmpeg` filters), so I don't know how good comparisons on the internet will be.

On the other hand, DynamicAudioNormalizer seems to very explicitly advertise itself as solving this exact problem we're interested in solving, whereas it actually took me a lot of searching and digging to verify that Loudnorm even did dynamic rather than linear normalization -- it mostly seems to bill itself as being a plug-and-play normalizer for [EBU R128](https://en.wikipedia.org/wiki/EBU_R_128). (See also [the official spec](https://tech.ebu.ch/docs/r/r128.pdf) -- the main value of interest is −23.0 LUFS).

I am thus predisposed to thinking that DynamicAudioNormalizer probably does dynamic normalization to a higher degree (which would mean it brings quieter parts closer to parity with louder parts than Loudnorm). After much searching, I did finally come across a comparison of before and after waveforms. Behold:

* [Audio Loudness Normalization](https://groups.google.com/a/opencast.org/g/users/c/R40ZE3l_ay8/m/2IUpQTcQCAAJ)

This particular data point supports my hypothesis in that it shows that DynamicAudioNormalizer equalizes things to much higher degree -- although without an exact description of which flags and values were set when running the filters, it's hard to get very dogmatic. It's plenty to convince me to use DynamicAudioNormalizer though. So how do you use it? (Specifically, how do you use it to filter the audio without simultaneously unnecessarily re-encoding the video)?

```powershell
ffmpeg -i  inputfile.mp4 -c:v copy -filter:a dynaudnorm  outputfile.mp4
```

So it really isn't that bad usage-wise. It's not quite as easy as using that nice pretty `ffmpeg-normalize` project to do two-pass Loudnorm, but it's only just barely harder.

## Combining dynamic audio normalization with silence removal

I also run another nifty `ffmpeg` wrapper called [auto-editor](https://github.com/WyattBlue/auto-editor) on my videos to *automatically* remove silence. This tool completely blew my mind when I first learned about it (or rather, [jumpcutter](https://github.com/carykh/jumpcutter) -- which I came across first -- and [the awesome accompanying video related to it](https://www.youtube.com/watch?v=DQ8orIurGxw) that explains the motivation for manipulating silence in videos), and I almost cannot recommend tools like these enough. Not only do these things save your viewers time (no unnecessary silence in your videos), but they also give your videos the feel of having been professionally edited, even though it's all completely automatic!

Anyhow, after some experimentation, I decided I liked a slightly more relaxed `frame_margin` (leaving slightly more of a silence buffer on either side of speech) for the videos I do. Leaving it at the default of 6 frames (even at the slower static 25 fps framerate Zoom records at) still felt a bit jumpy, so I use 15 instead, as recommended in the docs for a more relaxed feel:

```powershell
auto-editor.exe  inputfile.mp4 --frame_margin 15
```

I'm bringing this other tool up just because I'm not 100% sure how it might affect the dynamic normalization done by DynamicAudioNormalizer. Right now I'm running `auto-editor` before doing the dynamic normalization, but doing it the other way around might produce slightly different results.

I honestly don't believe it will matter much either way (it seems to me like the differences are likely to be small enough to basically not matter, which is why I haven't spent a lot of time thinking about it), but I figured I'd bring it up anyway.

## Conclusions

Well, there you go. Leveling out audio to give nice clear speech recordings to your listeners.

I am personally too time-deprived (given my average output of 6+ videos a week, which may only grow) to do any manual audio editing whatsoever, so happily run my single-track spoken recordings through a well-thought-out dynamic normalizer and call it "good enough." If you have stricter requirements (or just more time to polish things), and if you can reliably record multitrack audio (maybe you can guarantee a stable connection during recording?) and downmix it easily, then by all means use the multitrack approach. You'll probably objectively end up with better audio overall. But like everything in life, nothing comes for free.

One final note: everything I am talking about is for speech-centered recordings, *not* music, backing tracks, etc. Dynamic normalizers *do* mess with the overall (i.e., wider-view) dynamic range (as opposed to strict linear normalizers that change the loudness of every part of the file exactly the same amount), so aren't always going to be the right choice. See [here](https://whoislewys.com/2018/10/18/audio_norm_guides_are_evil_and_immoral/). You can still normalize music with a linear normalizer to make sure you don't have some music that is way louder... but the point is that you'll probably *not* want to do it with a dynamic normalizer as we have been discussing.

I think that piece comes on a bit too strong (technically speaking, Loudnorm still respects dynamic range... in a localized neighboring-frames sense, at least based on my understanding), but I guess it is forgivable since the focus here is obviously music. In this case, you very much do not want the volume in songs to always be the exactly the same over time. Ever heard of *pianissimo* and *fortissimo* in music?