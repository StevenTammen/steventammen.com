---
title: 08-15-22 Computer Security When Studying Abroad
date: 2022-08-15
weight: 
inprogress: false
---

## Background - why this writeup?

I have a sister going on a long (9 month+) study abroad trip this year. Her program gave her a packet containing some computer-related security information that was a lot of random suggestions, some of which were good advice, but some of which also made me go ???. It also seemed to me that some of the wording bordered on scaremongering, although perhaps that was more because it provided little explanation for most things.

Anyhow, given that I (the software engineer of the family) was tasked by our parents to help my sister's computer practices be secure on her trip abroad, I wrote up something I thought would be much more useful in practice. Perhaps it will prove useful for any other students traveling abroad through their universities too.

## Is antivirus software still necessary? Not really, as long as you keep your devices up to date

Actual news articles:

* [Still paying for antivirus software? Experts say you probably don't need it](https://www.nbcnews.com/tech/security/still-paying-antivirus-software-experts-say-probably-dont-need-rcna6335)
* [Why experts say you don’t need antivirus software anymore – The Hill](https://thehill.com/changing-america/enrichment/arts-culture/583831-why-experts-say-you-dont-need-antivirus-software/)

For-profit blogs/websites with a clear financial conflict of interest (affiliate sales, etc.) -- at least as things seem to me:

* [Do You Still Need Antivirus Protection Software in 2022?](https://www.security.org/antivirus/do-you-need-antivirus/)
* [Is Antivirus Software Really Necessary in 2022?](https://www.safetydetectives.com/blog/is-antivirus-necessary/)

Guess who says what?

It seems to me very much like as long as you keep your computer (and phone/tablet) operating systems up to date with security patches, there is no longer any great need to buy and use third party antivirus software. The operating systems have it baked in nowadays, and it is basically effective. The rest is mostly just marketing nonsense.

Nowadays, most breaches happen because of phishing or poor password practices (weak passwords combined with no two factor authentication -- see below), not malware *per se*. Put differently, third-party antivirus software can't even save you from the attack vectors that are actually most successful in practice. So what's the point?

## Eliminating the possibility of getting compromised in the really important areas

The juiciest targets for bad actors:

- Sites that have or store financial information.
  - Banks
  - Amazon
  - PayPal/Venmo/etc.
  - Any other online retailer you have a stored card for
- Your primary email (the one you have attached to most of your logins). If people get access to this, they may be able to reset your passwords on many things, so it's a big security risk.
- Social media accounts (or any other platform where someone might be able to get something or do great harm by impersonating you)

Put simply, everything other than these things doesn't matter that much. It would be unfortunate for any personal information or logins to fall into the wrong hands, but they probably aren't going to care about you Khan Academy login information, for example.

I think these categories cover most things for most people, but be sure to rack your brains for your circumstances to think if there is anything else that might be very important to safeguard for you specifically.

### Ways to protect these things

#### 1. Never stay logged in, either on the web or on mobile apps

There is sometimes a box titled "keep me logged in" (or something similar) when logging into websites. When in higher risk environments (as when studying abroad), never check that box, and always be sure to close your browser when done so that the session will end. You'll have to log in again every time, but nobody will end up with access to your important accounts just because they got into your computer. It adds another layer between them and anything important.

Most banks via web interface won't even let sessions persist/keep you logged in (it's not even an option), but Amazon will, for example.

This holds true for apps on your phone too. Every time you use a sensitive app (like a bank app, e.g.), if it doesn't automatically log you out (so you have to re-authenticate fully when you open it again), you sure better make sure you log out yourself. Otherwise if someone steals your phone, you're toast!

(Note too that if you tie login solely to biometrics -- like fingerprint or facial recognition -- if you get knocked out/kidnapped/whatever, unlikely as that may be, then those do no good, as criminals can, e.g., use your fingerprint when you are unconscious. So it should always be at least biometrics + password. PINs are easier to crack since they are short, which is why passwords are more favorable overall).

#### 2. Use strong passwords for all of the important things

I mean 15-20+ characters, and it's preferable if there are lots of symbols and numbers everywhere too rather than just being a phrase composed of real words (programs that iteratively try passwords will typically start with so-called "dictionary attacks" composed of real words).

In practice, for most of us normal mortals, to do this most effectively, you are going to need a password manager to automatically remember all the long, complicated passwords. They work on both desktop (browser extension) and mobile. I personally use and like [Bitwarden](https://bitwarden.com/).

#### 3. Use two factor authentication for all of the important things

If you use a password manager, if you set up 2FA for any single thing, it should be that. Obviously. Otherwise you have a risky single point of failure.

However, it is another line of defense for all the other important things too, and won't add that much time in practice.

If given the option, you should never use SMS as your means of two factor authentication. It is not nearly as secure as a dedicated authenticator app, as it can be easily intercepted. (SMS can also get more complicated if you are switching SIMs when abroad).

[Authy](https://authy.com/) is an option for setting up 2FA. It's an authenticator app that spans desktop and mobile operating systems.

It is ***critical*** that if you think device theft is a very real possibility, you don't silo absolutely all your 2FA on your phone. Because then if your phone gets stolen, you won't be able to log into anything! See [this article](https://lifehacker.com/what-do-i-do-if-i-use-two-factor-authentication-and-los-1668727532) for more on the perils. Incidentally, you need to be really careful with 2FA when first arriving abroad too, as if you rely on your phone for everything, you may have problems getting into things until you get a foreign phone plan set up. Make sure to think things through so you don't find yourself stranded, unable to login to things because you can't authenticate on a phone with no valid SIM or no data.

I would recommend turning off all 2FA when you are first getting yourself set up abroad, and then turning it all back on again once you know your phone is working abroad. And then do the same thing when returning home too. I think that's the least risky course of action.

Anyhow, so as not to silo things, you would want to set up your authenticator application across multiple devices, so if one gets stolen, you won't be utterly ruined. To keep using our specific example, Authy supports this:

https://authy.com/features/multiple-devices/

You will still be toast if all your devices get stolen at the same time, so that's a good argument for not having all of them on you at once, or having a backup computer or something at a relative's house back home, in case absolutely everything gets stolen.

#### Conclusions

If you do these three things, you will be quite secure. It will add some hassle, but will most certainly safeguard your information, even in the worst-case sort of scenarios.

Even better yet is simply not using any apps that would present risk if compromised. For example, you may not even have access to Amazon in the country you are studying abroad in, so if you can get away logging out of Amazon everywhere (and staying logged out for the whole duration of your time abroad), that will make you more secure inherently.

You can even get away with this complete avoidance/total risk mitigation with your banking apps, if you take care to plan a bit. If you have a close contact back home who you are comfortable sharing your account information with (a parent, for example), they can do any account-related things back home on secure networks, without you having to login to your bank account in higher-risk areas. Then you can just use your debit card(s)/credit card(s) normally when abroad -- leaving the actual account management in the hands of your close contact -- without ever running the risk of things getting compromised.

### Ways to protect these things if, being honest with yourself, you won't actually do all the above

At least set up the password manager, set the passwords to the important sites to be strong, and then use a very strong password for the password manager.

And, as always, never stay logged in to anything, and always close your browser to end sessions.

If you do all these things, that will get you a good bit of the benefit, while being less intimidating to set up, perhaps. Two factor authentication is probably the single-biggest thing you can do to secure your logins, though. If you have the time and wherewithal to set it up properly, including the complexities that arise when getting your phone setup when abroad.

If possible, setting it up on at least the password manager would be good.

## Backing up your data

If you are in a place where the physical theft risk is greater, if you don't have your data backed up at all times, if your device gets stolen, that data is irretrievably gone.

To mitigate this unpleasant hypothetical:

### 1. Do a complete back up of your device(s) before you leave, and also scrub any sensitive or personal information

Backup everything you care about, a complete snapshot. Be sure to be thorough.

This would also be the time to remove from your devices anything that it would be very unfortunate for a bad actor to gain access to. You should do this before you leave for your study abroad.

### 2. Mostly work/save things in the cloud when abroad

That way if your device(s) get stolen, you'll still have your work.

Note that "working in the cloud" needs to be balanced against the "don't stay logged in" thing from above. For example, if your primary email account is Gmail, and your preferred cloud workflow is Google Docs, then if you stay logged into your Google account to be able to instantly access Google Docs (as is definitely most convenient), then you are in fact staying permanently logged into your email, and that's a vulnerability. There are two basic solutions to this "want to be seamlessly able to work in the cloud, without permanent access to email" sort of thing (which, to be fair, is mostly a Google account issue specifically, but since Gmail/Google Docs are so overwhelmingly popular...)

#### 2.1 Use a separate Google account you don't otherwise use, to get the seamless cloud storage without further hassle

Not so much for email, but for being able to use Google Docs/Drive without always being logged into an email that has real logins tied to it.

It is perfectly legal/acceptable per Google's ToS to have multiple Google accounts.

https://www.businessinsider.com/how-many-google-accounts-can-you-have

So just have an extra account you use when abroad like this, then use Google Docs in the browser like normal (stored in this alternate account's cloud storage). And if you ever need to check your other main email, switch accounts only when intentionally checking your email, and then log back out when done and switch back to the alternative account with its own separate cloud space.

You never need to use this secondary account for email, by the way (setting up and using a separate "travel email" was suggested by my sister's program's security pamphlet, but that seems like unnecessary overkill to me). You just don't want to always be logged into your primary email account tied to logins, for obvious security reasons.

#### 2.2 Use another online cloud service that isn't explicitly linked to email, and just always stay logged into it

Dropbox's web interface comes to mind. If you clear any important stuff off of your Dropbox and then just use it for school stuff via your browser, you'll probably be in the clear. If they want to steal your homework, have at it. Just make sure you don't have any actually sensitive information syncing in this way.

#### 2.3 Use a desktop cloud syncing application

Google Drive or Dropbox or OneDrive (etc.) would all work fine. Again, just make sure if you typically back up important documents by means of these services, you temporarily back those up somewhere else (like a physical hard drive back home) so that when you are using them in this way when abroad, you are not putting any important information at risk.

Using the desktop application means there is no implicit logging into email involved here.

#### Conclusions

Any of these three options would work. Whatever lets you keep your ongoing work backed up to the cloud while not at the same time putting your primary email at risk by staying logged in.

## Other miscellaneous computer security stuff

### You should 100% run an ad-blocker at all times

Ads have a disproportionately high concentration of malware. They are also annoying and cost you data bandwidth (especially important when on mobile), so I don't see any reason to ever not block them.

There are browser extensions for this when on desktop. I am partial to uBlock Origin, as it is lighter on system resources than many alternatives.

Chrome extension, for example (can also get on Firefox, etc.): https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm

You can also use mobile browsers that let you block ads. [This is the one](https://play.google.com/store/apps/details?id=org.adblockplus.browser&gl=US) I use personally on Android, but there are also [iOS options too](https://www.guidingtech.com/iphone-ipad-ad-blocking-browsers/).

I highly, highly recommend blocking ads at all times on both desktop and mobile.

### Open WiFi networks will not doom you instantly as long as you always use HTTPS

Example article explaining the nuances in a more realistic way than most: https://lifehacker.com/you-need-more-than-https-to-stay-safe-on-public-wifi-1841831844

The short version is that if you use HTTPS (TLS-encrypted web communication) for everything, you'll probably be fine. You can just use [this browser extension](https://www.eff.org/https-everywhere) to force HTTPS everywhere and then forget about it, mostly.

It's still a bad idea to connect to open WiFi networks that you are not 100% sure about because they can scan your open ports and it's easier for them to set up phishing attacks if you are not paying attention (since they are in the middle between you and the web and can poison the DNS resolver and so on), but it's not like you are insta-doomed using them, even if they are specifically set up maliciously. Despite a lot of advice out there making it sound like that. You still have to fail to catch the spoofed websites if they are switching things on you by hijacking the resolver cache (and so forth).

This sort of thing is one of the reasons I *hate* vague security advice that doesn't explain anything. This "public WiFi = immediate doom" one really grinds my gears. From the way the scaremongering materials present things, the second you connect to an open WiFi network and connect to any website (even over HTTPS), you may as well kiss all your personal info goodbye. This is simply categorically false. There is no mechanism for such.

### Pay attention to what shows up in the address bar

The number one way to avoid getting phished is to always double check the URLs. It may look like Facebook and quack like Facebook, but if the address bar don't say Facebook, any credentials you put in are going straight to a bad guy.

### Don't ever download things that tell you that you need to/ought to download them. Just don't

If something pops up saying you have a virus and need to download some antivirus thing, you don't really have a virus, and thing that you are supposed to download is itself a virus.

Every single time.

### Practice email and SMS/WhatsApp/etc. basic security best practices

If someone ever asks you to provide information of any kind (it's even funnier when they brazenly ask for money right from the get-go), insta-delete. No legit support people will ever ask for account info (much less money) over email.

If the sender of an email isn't who they are obviously pretending to be (the sender's address seems fishy), insta-delete

If the email has lots of spelling and grammar mistakes, red flags should go up. (Why spammers/the writers of malicious emails mostly universally stink at grammar is still mysterious to me, but it is 100% true).

If the message presents itself as VERY URGENTLY URGENT IN THE MOST URGENT WAY POSSIBLE, red flags should go up.

Always hover over links to make sure they actually point to where the text would have you think they point to. Always copy-pasting them into the address bar before navigating to them is a good habit to get into.

If a random person texts you and you tell them they got the wrong number, if they then ask if you wanna be friends anyway, sorry to burst your bubble, but they probably aren't truly interested in being your friend because you are so great. You should probably block them.

Don't accept friend requests from random people on Facebook and other such platforms.

Etc.

### Most normal people probably don't need VPNs, especially if you primarily work on networks you can trust

If you spend a lot of time working on open WiFi networks you don't have high confidence in (contrast the home WiFi network of a host family, or your foreign University's WiFi network -- those would tend to be more trusted networks, although the foreign government/ISPs may still be monitoring traffic), a VPN may be a worthy investment. It can prevent people from tracking your DNS traffic, and help protect against several attack vectors that come about as a result of unencrypted DNS traffic (the DNS spoofing mentioned before, and other things like it).

A lot of VPN companies harvest your data and sell it themselves, provide poor service, and are very expensive to boot. I haven't done a lot of brand research since I've never personally felt like I needed one, but you certainly ought to before you fork over a lot of money for one. I know some are better than others.

In my opinion, VPNs are generally overhyped and overmarketed (like antivirus software). That doesn't mean they are never necessary or useful, just overprescribed, as far as I've been able to tell.

## If you are hardcore... there is always more

It is possible to do on-the-fly encryption of your entire hard drive through something like [VeraCrypt](https://en.wikipedia.org/wiki/VeraCrypt).

I wouldn't necessarily consider this "the right answer" for normal people (hence everything else I suggested above), but if you want to be as secure as humanly possible,alongside this full on-the-fly hard drive encryption (AKA full disk encryption, or FDE), you might also consider:

- Using an open source operating system like Linux/OpenBSD/FreeBSD with a heavy emphasis on privacy and security. Many such distributions exist and support FDE in various forms.
- Completely avoiding all forms of social media
- Never using a smartphone, smartwatch, or any other perpetually-LTE-connected device (AKA the best people-tracking-devices yet invented); only using burner phones, and switching SIMs regularly.
- Only using cash and cryptocurrencies on the blockchain rather than debit and credit cards that can be more easily tracked
- Wearing hoods and hats and sunglasses and avoiding direct line-of-sight with CCTV cameras as much as possible. If you are actually worried about the governments' power to track you, for example, facial recognition software is plenty powerful enough nowadays for CCTVs to be a privacy nightmare
- Turning off JavaScript completely in your browser
- Only ever accessing the internet through a secure VPN you trust
- Making use of [TOR](https://www.torproject.org/)
- Running your own end-to-end encrypted mailserver and chat applications. (Things like Gmail and WhatsApp and Discord may have backdoors, or so some people think)
- Etc.

I would consider this sort of thing enormous overkill for most people. The increased total privacy (including from the government and corporations), in my read of the situation, probably isn't at all worth the tradeoffs in convenience and everyday usability that come about as a result of taking these extra steps.

But that's just my opinion.

## Physical security

### Try not to have your devices stolen to begin with

Assume that anything you leave unattended will be instantly stolen. Even 10 seconds of looking away is enough, much less going to the bathroom or something like that.

Modern pickpockets are quite skilled, so you should 100% use theft-resistant bags and belts and such when you are traveling. Otherwise things will get stolen and you won't even notice. When you are walking through a crowd or standing on a bus or train, for example.

The best way to secure yourself from a computer security perspective is to secure your physical devices completely at all times.

### Be very aware of your surroundings when entering your passwords

It sounds kind of far-fetched, but if you are not cautious, someone may be able to get your password just by watching. Especially if they are able to film you typing it in (rather than only being able to see you doing it a single time). Also, make 100% sure you don't have your passwords ever visible on-screen when entering them (rather than just showing up as dots or whatever, as is more secure). Some sites let you toggle this as an option, so just be careful.

Criminals are quite clever, so you should probably be more careful than you think in this area. No reasonable person should take exception to this. So if you have someone watching you over your shoulder, even if you know them and it makes sense for them to be looking at your screen generally (you are working together on something, e.g.), having them look away when you enter passwords is just common sense.
