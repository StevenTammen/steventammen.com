---
title: "Unicode Language Layers"
description: ""
date: 2018-04-25T00:32:11-04:00
---

## Subscribing to updates, staying informed, and beta-testing

Significant milestones for this project will be posted to this page as the ball gets rolling. I have also created a mailing list you can subscribe to if you are interested in staying informed of what is going on. You may sign up using this form:


<!-- Begin MailChimp Signup Form -->
<link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
<style type="text/css">
	#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
	/* Add your own MailChimp form style overrides in your site stylesheet or in this style block.
	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
<div id="mc_embed_signup">
<form action="https://steventammen.us18.list-manage.com/subscribe/post?u=8975ea5632e637433df8c5866&amp;id=7ae9d95967" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
	<h2>Subscribe to our mailing list</h2>
<div class="mc-field-group">
	<label for="mce-EMAIL">Email Address </label>
	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
</div>
	<div id="mce-responses" class="clear">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response" style="display:none"></div>
	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_8975ea5632e637433df8c5866_7ae9d95967" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
</form>
</div>
<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
<!--End mc_embed_signup-->


Depending on how quickly I finish core program functionality, there may be beta-testing opportunities for those interested in providing feedback and testing out the ideas I have. People on the mailing list will be notified, but anyone is welcome to participate.

Everyone is free to [look at the source code](https://github.com/StevenTammen/unicode-language-layers) and contribute (please do!). Additionally, you may find it helpful to look at the project's [Kanban board](https://waffle.io/StevenTammen/unicode-language-layers) to see what is being worked on and what is in the works.


## Introduction and motivation

This project is born out my own frustrations concerning text entry options of polytonic Greek and vowel-pointed Hebrew on computers. I have switched to doing as much academic work as possible on computers, and found several serious obstacles facing me in terms of typing Greek and Hebrew. Here's a brief list:

- I type on a very custom non-standard keyboard layout (i.e., not QWERTY). All of my letters are in different places. This means that any homophonic keyboards for other languages (that match characters in the target language with English letters) are mnemonically useless for me, since they are all based on QWERTY. Combined with a lack of customizability of system keyboard layouts, I essentially cannot use a Greek keyboard layout on the operating system level if I wish for it to be homophonic.
- None of the options that I am presently aware of allow for what I consider the "trifecta" of mandatory features: a customizable homophonic letter layout, *intuitive* (but customizable) entry of diacritical marks, and universality (meaning it can be used in all applications seamlessly without having to copy-paste in and out of some window). Some present layouts may have one or two of these characteristics, but I am not aware of any option on the market at present that combines all three. Cutomizability is the biggest sticking point -- particularly with diacritics, you are basically stuck with whatever systems the designers of layouts choose (which, for whatever reason, seem to usually revolve around arcane key chords).
- None of the options I am presently aware of allow for users to tailor entry order to their own preferences. For example, people may wish to type some diacritical marks in a certain order (accents before vowels instead of after them, for example).

I could go on. It is definitely important to note that I am an edge case user in that I actually *want* to get into nuts and bolts and tweak things to my liking. If you type on QWERTY and are content accepting whatever systems of diacritical entry are presented to you, there are already existing options that will you get you most of the way there. Even with these though, there are some concerns:

- Many are not free. Keyboard layouts, which are essentially defining tables of keys (scancodes) and values (characters) for the operating system to map, are simple enough on the software end of things that it feels philosophically wrong to pay for them, particularly if the amount is anything substantial.
- I am not aware of any open source projects with active development (like this one will be), so there is no guarantee of long term stability. In my preliminary research, I came across many abandoned projects and 404'd pages. Maintaining software takes time, and my guess is that many keyboard projects in the past have come from an individual's frustration with the product space, just like mine. But since the code isn't public, when these people lose interest or simply move on to other things, the projects atrophy. (Open source isn't a panacea, by the way, but having the code accessible means that at least if development dries up, people won't have to reinvent the wheel).
- Finally, most programs only focus on one language. It is not uncommon for people studying Classics and/or Ancient Near East to pick up multiple languages with complex alphabets (including, but certainly not limited to, Greek, Hebrew, Arabic, Syriac, and Sanskrit). A lack of consistency in approaches can be frustrating, particularly if one has to go through the bother of installing and updating text entry solutions for all these languages on all the computers used for writing. One unified interface with boxes you check for languages you'd like to support would be much better in this regard, particularly for folks who would rather deal with computers as little as possible (which is fine by the way -- we all have different interests and strengths).

Now, I'd like to finish this section by stating that I'm not trying to denigrate any of the programs out there that handle similar problems. I've used many of them, and will likely shamelessly copy much of what they do (as legality allows) in my own grappling with the issues at hand. I just feel that there is room for another program out there, particularly one that is open source and community-driven.

## Soon to be on this page

Once I finish finals and gear up for my research fellowship this summer, I will update this page to include more basic information about the project. At this point I am still discussing with faculty and my University sponsors whether or not the academic paper associated with this research will live in the public repository with the code (and be visible through all parts of the process), or be closed-off until publication. There are concerns of intellectual property (contributions would end up under my name, for example), and also of the fact that I am taking a research class for credit... and the University might be concerned with other people people "helping" me write my paper. Or whatever.



