+++
title = "Dictionary Generator"
date = 2018-03-18T17:49:40-04:00
tags = []
categories = []
draft = false
inprogress = true
+++

[//]: # (tags = ["worthy projects", "stenography", "linguistics", "language processing"], categories = ["Computers/Software"])

## Disclaimer {#disclaimer}

I have been watching Plover for a long time, but haven't actually learned very much steno yet (at least physically). Part of this is because the SOFT/HRUF is still yet to ship, and part of it also is because I have been very busy. What I'm trying to say is that my comments should be taken with a large helping of salt. It is entirely possible that there are things in the software that I'm not aware of or am misinformed about. I'm also looking at this primarily from the perspective of a non-programmer, so there is probably a hint of rose colored glasses here; that is to say, what I think might be simple to implement may in fact be much more difficult than I know.


## The Problem {#the-problem}

To my knowledge, there are four widely taught/learned theories in steno: Pheonix Theory, Magnum Steno, StenEd, and Plover's theory. Plover's theory is closely related to StenEd. Magnum was based on StenEd but is now sort of its own thing entirely. While there are other less well-known theories (e.g., Philadelphia Clinic Theory, or "Philly"), and infinite variety among individual stenographers (people tend to customize things to suit their own way of thinking, e.g., Stan Sakai), these are the ones people think of when you say "stenographic theory".

Of these four, Pheonix focuses on increasing the rate at which words can be stroked out phonetically (paradigm: "stroke everything out for consistency"), Magnum focuses on reducing the number of words that actually need to be stroked out (paradigm: "brief everything for short writing"), and StenEd/Plover are somewhere between the two.

The problem with this situation is threefold:

1.  Of these options, only Plover's theory is really free in a monetary sense. For most hobbyists getting started, that knocks the theory options down from four to one. And since change friction is built into human cognition, many people won't change _ever_ once they've started with Plover's theory.
2.  None of these theories are easy to modify. Let's say you want to change the way in which you fold in -ing endings. Perhaps with some clever regex you can get most dictionary entries, but you might miss a few and mess up some others (like sing or ring, for example). Short of checking many dictionary entries by hand (!), I don't know of a clean way to tinker with theories: it's all (accept the theory's way) or nothing (use a different theory).
3.  To my knowledge, there is currently no good way for translation dictionaries to update over time: they are "closed-source", if you will. If I come a across a word that isn't defined, I make a definition for it in my dictionary and life is good. But everyone else is using that dictionary without the entry I just added, so if they come across the word, they'll have to make a definition for it too. If I could have somehow pushed that change to a shared "dictionary source", the other person would not need to waste time in defining a word I'd already thought of.


## The Idea {#the-idea}

What if, instead of choosing from a small number of discrete, mostly-proprietary options, everyone could make their own theory based on the principles that make sense to them? What if changes could be automatically propagated to a "base" dictionary that contained words that everyone could use in their own theory automatically? What if all this could somehow benefit disabled people and raise awareness of the Open Steno Project?

What I have in mind is a program that reads in the [Carnegie Mellon University Pronouncing Dictionary](http://svn.code.sf.net/p/cmusphinx/code/trunk/cmudict/cmudict-0.7b) and outputs a translation dictionary according to the preferences of an individual stenographer. CMUdict uses a modified version of [Arpabet](https://en.wikipedia.org/wiki/Arpabet) as its method of phonetic transcription, which is entirely ASCII based (unlike IPA). The format of CMUdict has text-to-speech in mind (and this is primarily what it is used for), but we could also use it for text-to-steno.

Currently, CMUdict has about 134,000 words, and most things that would come up in any sort of normal conversation. I haven't done any sort of rigorous testing, but uncommon technical terms are probably not defined for some fields. Alternate pronunciations of words are accounted for in the dictionary by listing the word with a number in parentheses at the end -- for example "WORD(1)".

Over time, if more and more of the Plover community started using dictionaries generated with CMUdict, we could work out a system where Plover's copy of CMUdict (and consequently people's dictionaries) are updated dynamically with the word/pronunciation pairs other people add (after some sort of submission and vetting process). This might take the form of Plover optionally checking for new approved words upon startup, or through some sort of refresh command that would let Ploverites import new definitions at a time convenient for them.

As new definitons are approved on our end, we could send changes upstream to the team that maintains the dictionary at CMU. This would have the net effect of improving text to speech software (indirectly benefitting those people who rely on TTS to communicate), while giving Plover free publicity at a prominent research university.


## An Example {#an-example}

I'll use an example theory to illustrate a possible build path.

Theory Features:

1.  Phonetic definitions like in Pheonix. Phonemes are stroked the same regardless of how we spell them in English.
2.  Medial schwa omission. (What Pheonix calls the "vowel omission principle"). For example, DEPLORBL instead of de-plor-uh-bul.
3.  Rolled in suffixes in the manner of Magnum (and other theories). For example, adding -G via inversion to put -ing on a verb rather than coming back for it in another stroke.
4.  Automatic disambiguation of common homophones (by, bye, buy) based upon frequency (i.e., by occurs more often than the other two so it should have an easier brief).

What the dictionary builder will do is read in CMUdict, and then let me choose how I want to stroke all the different phonemes in English. It will automatically take out medial schwa, roll in suffixes, and create disambiguation briefs to the extent possible without creating conflicts. Problematic words will be displayed for either further programmatic processing (e.g., if a word ends in -ing without it being a suffix, do \\\_\\\_\\\_\\\_\\\_\\\_\\\_&ensp;to add on -ing), or hand-correction. It will then give me the option to save my preferences so that the dictionary can be automatically updated or recreated in the future without doing all the configuration again. When the base dictionary updates (i.e., someone adds a word/pronunciation pair to Plover's copy of CMUdict and a pull request or something of the sort gets approved), the dictionary builder will automatically create a definition based upon my saved preferences without changing existing definitions (unless I indicate that I want to do so).


## Implementation {#implementation}

Python's vanilla text-processing capabilities should be sufficient for handling the consistent format of CMUdict, perhaps with some regular expressions for situational matching. Because Arpabet is all ASCII (it does not require native unicode support), there is no great disadvantage in Plover's Python 2 codebase.

In my (inexperienced, naive) understanding of the problem, the thing that is going to require work is situational matching -- figuring out what things are affixes and what things are part of words (e.g., -ed is a suffix for batted but part of the word for moped), and what the actual letter combinations are that make up a given phoneme. Because we're only dealing with a couple hundred thousand lines here, we could probably get away with something somewhat inefficient in terms of algorithmic complexity but very clean in terms of implementation.

I'll leave it to real programmers to figure out the details. I wish I could be of more help, but I'm a Classics (Latin and Greek) major not a CS major, and full time classes don't make it easy for me to be much more than a novice dabbler in Python. From my perspective, a basic implementation doesn't look too terribly difficult, but I'm probably missing all the nasty surprises that pop up when you get down in the nitty gritty details of it. I'd be happy to help in any way I can.


## Flaws and Criticisms {#flaws-and-criticisms}

First off, people (at least those coding the implementation and creating new definitions in Plover's copy of CMUdict) are going to have to learn Arpabet notation. I think it is pretty easy -- it is _much_ simpler than IPA -- but it is still a time committment. I also happen to love lingusitics, so this sample size of one is probably not representative of what it is like for normal people.

Secondly, all time spent on this side-project will necessarily detract from time spent squashing bugs or making improvements to the main Plover engine. That is to say, there may be significant opportunity cost in pursuing this goal. It would be a real pity if something like this took away from the weeklies that have been coming out and killed the active development mojo, so to speak.

Thirdly, this method of dictionary creation is heavily slanted towards phonetic theories (in the manner of Pheonix). Because CMUdict has the phonetic transcription of words, converting to a phonetic theory should be relatively straightforward. Converting to a spelling dependent theory (what Plover's theory is), while not impossible, will probably be a bit more of a headache on the backend. The extent to which this factor comes into play is obviously subjective, and will depend to some extent on how difficult getting spelling dependent strokes turns out to be.

Finally, for those professional stenographers that have a lifetime's worth of custom definitions and briefs, going to a programatically generated dictionary may actually be a step backwards. It seems to me that programmatically generated dictionaries would be much better for the Open Steno community long-term, but some people may want to think twice before messing with their current workflow. (Sidenote: there is nothing stopping the use of briefs with these custom theories, and it would probably be pretty easy to write a function to import briefs into dictionaries of this form. Standardized dictionary metadata would simplify such a function).


## Closing Remarks {#closing-remarks}

In my opinion, adding a programmatic dictionary generator to Plover would set it apart drastically from all other steno software out there. For those of us who want the freedom to change our theories, the addition of this feature would give us an opportunity to do so, an opportunity that we would not otherwise have. In the long term, I believe stenographic theories will go through a process of tradition shedding just how keyboard layouts have moved away from QWERTY. Plover being on the forefront of this change would be great for its longterm relevance.

This is the first idea of many that I have regarding stenography. As time allows, I'll try doing more idea outlines similar to this. Any feedback, either about this particular idea or how I've layed out the presentation of it, can be directed to stevenwtammen@gmail.com, or, better yet, to the [related discussion on the Google Group](https://groups.google.com/forum/#!topic/ploversteno/-sowdKC%5FbjU).

Thanks for reading!
