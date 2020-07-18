+++
title = "Computer Setup and Ergonomics Braindump"
date = 2019-01-09T23:16:29-05:00
tags = ["ergonomics", "rsi-prevention"]
categories = ["Computers/Software", "Gear"]
draft = false
inprogress = true
+++

## Repetitive Strain Injury (RSI) {#repetitive-strain-injury--rsi}


### Is not CTS {#is-not-cts}

RSI is not exactly the same Carpal Tunnel Syndrome (CTS), which is much more specific. Links:

-   [Preventing and healing repetitive strain injury (RSI) and carpal tunnel syndrome: Ergonomic tips, techniques and keyboards](http://matt.might.net/articles/preventing-and-managing-rsi/)
-   [Repetitive Strain Injury: How to prevent, identify, and manage RSI](http://web.eecs.umich.edu/~cscott/rsi.html)
-   [Harvard RSI Action --> Preventing RSI](http://www.rsi.deas.harvard.edu/preventing.html)
-   [RSIRescue.com- Repetitive Strain Injury](http://s91524683.onlinehome.us/rsi/)


### Disagree with some of the above people on wrist braces {#disagree-with-some-of-the-above-people-on-wrist-braces}

"Doctors prescribe wrist braces in the belief that the bending of the wrist is the cause of all the problems, aggravating the carpal tunnel. For some initial sufferers, braces help. But, for chronic sufferers we believe that you must train yourself to work in the neutral position and that any crutch will actually contribute to the conditions that have caused your problems, namely loss of muscle vitality and stamina."

By what mechanism do wrist braces cause loss of muscle vitality and stamina? I agree 100% that wrist bending is not 100% of the problem (_pace_ uninformed doctors thinking this). But wearing a brace means you physiologically cannot/it is hard to make very harmful wrist movements. It's not like wearing it inherently zaps muscles.

Would you rather wear a brace that disallows bad movements without any necessary training, or try to magically teach yourself to not make harmful movements? Maybe I'm missing something?


### Highly reviewed wrist brace on Amazon with lots more reviews than others {#highly-reviewed-wrist-brace-on-amazon-with-lots-more-reviews-than-others}

-   [This brace](https://www.amazon.com/Mueller-Fitted-Wrist-Brace-Medium/dp/B002NLGNW8/)
-   Dunno if that makes it best or if it is just momentum


## Dual mice {#dual-mice}


### Logitech [now makes a thumb trackball with tilt](https://www.amazon.com/Logitech-Advanced-Wireless-Trackball-Windows/dp/B0753P1GTS/) {#logitech-now-makes-a-thumb-trackball-with-tilt}

-   But it's expensive and only offers a limited amount of tilt
-   You could use a Logitech M570 and jerry-rig your own tilt solution to get near vertical for that neutral "handshake position."


### Want to run mice on both sides {#want-to-run-mice-on-both-sides}

Split load across hands to avoid stress, especially during long computer sessions.

Since Vim mode laid out for right hand mouse use (in terms of cut/copy/paste/del/a/i), the left mouse should be used for non-vim things. (Like scrolling on pages or whatever).


### Not a whole lot of left thumb trackballs {#not-a-whole-lot-of-left-thumb-trackballs}

-   There [is at least one though](https://www.amazon.com/M-XT4DRBK-Wireless-Trackball-Left-Handed-buttons/dp/B016QCPRBM/)
-   So could hypothetically run a thumb trackball on either side


### Thumb trackballs vs finger-operated trackballs {#thumb-trackballs-vs-finger-operated-trackballs}

Finger-operated trackballs can be operated by basically keeping the wrist and fingers (which both have smaller muscle groups) relaxed, and moving the whole arm. Probably leads to better ergonomics in the long term?

On the other hand, most finger-operated trackballs are designed poorly and lead to people bending their wrists upwards (bad!). Thumb trackballs (at least the Logitech M570) already have a slight outward tilt to reduce wrist pronation (which is good).

If you make custom mounting for finger-operated trackballs, they are probably best. I guess?


### Bluetooth {#bluetooth}

Bluetooth to avoid wires and setup time and 2.4GHz dongles that require USB-A ports and cut out due to interference with USB 3.0 devices.

The Kensington Expert mouse is a finger-operated trackball that can do Bluetooth.

-   But can you pair two of them at the same time?
-   The scroll ring is gritty. So sayeth the internet.


### Scrolling {#scrolling}

-   Scrolling seems to always be bad ergonomically. Wheels, rings, and even the [Kensington Slimblade Trackball](https://www.amazon.com/gp/product/B001MTE32Y/) with its twisty ball (I have it -- it works fine, but is entirely finger operated and does cause some lateral wrist movement).
-   Holding down a keyboard key, it seems like one could then use the trackball itself to scroll, no?
    -   [want to scroll with mouse movement - Ask for Help - AutoHotkey Community](https://autohotkey.com/board/topic/47312-want-to-scroll-with-mouse-movement/)
    -   [using right-click and mouse movement as a "scroll wheel - Ask for Help - AutoHotkey Community](https://autohotkey.com/board/topic/42020-using-right-click-and-mouse-movement-as-a-scroll-wheel/)
    -   [Mouse Movement as scroll with key modifier - Ask for Help - AutoHotkey Community](https://autohotkey.com/board/topic/89590-mouse-movement-as-scroll-with-key-modifier/)
    -   [Mouse Wheel Emulator - Scripts and Functions - AutoHotkey Community](https://autohotkey.com/board/topic/46203-mouse-wheel-emulator/?hl=mousewheel)
-   Could use same concept for using the analog ball (vs. digital keys) for adjusting brightness and volume, and also use modifier keys for locking mouse movement on a single axis, slowing down the pointer, speeding up the pointer, locking the pointer inside current window, etc.


### Best setup? {#best-setup}

18" tray for keyboard/stenotype. Attach 2 Kensington expert trackballs to the edges, about halfway above and halfway below the tray (natural resting arm level, about same as keyboard). Should "frame" legs.

Won't be entirely vertical (ball would fall out/not necessarily that much more ergonomic), but highly tilted to keep pronation in a non-stressful range.


## Keyboard {#keyboard}


### Kinesis {#kinesis}

Good start. In production/can buy, which is good since learning PCB stuff/soldering/breadboards etc. is not something that all of us want to do. I'm a software guy, sorry.

The concave keywells make it easier to reach more keys, and reduces overall travel distance.


### But problems. It lacks things! {#but-problems-dot-it-lacks-things}

-   Completely split hands for as much width as necessary _and the ability to change the angle on the axis pointing out from one's stomach._ This second one is the biggie: not being able to customize this for my shoulder width means there is always a bit of ulnar deviation using the keyboard. Gobs better than normal keyboards, mind you, but it's still bad.
-   Ability to tent to reduce wrist pronation. Probably not full vertical, but close to it.
-   A third ergonomic thumb key. It has the huge key clusters, sure, but only the two big keys are really usable ergonomically. However, you could add a third ergonomic key on the other side of Space/Backspace.
    -   [Making USB Push Buttons | Timmy O'Mahony | Software Development](https://timmyomahony.com/blog/making-usb-push-buttons/)
    -   [I've been using Kailh Low Profile Switches exclusively for a year - Learning and discussion / Key switches - KeebTalk](https://www.keebtalk.com/t/ive-been-using-kailh-low-profile-switches-exclusively-for-a-year/1169)
    -   [Kailh Low Profile Keycaps - Blank – NovelKeys, LLC](https://novelkeys.xyz/products/kailh-low-profile-keycaps-blank?variant=3747977101352)
    -   [Kailh Low Profile Choc Switches – NovelKeys, LLC](https://novelkeys.xyz/products/kailh-low-profile-switches)
-   Not Bluetooth.
    -   But [adaptor](http://handheldsci.com/kb) can fix? Looks better than when I bought an earlier version that had its own built-in battery. Never liked the earlier version much, but here looks like you get to use a power supply of your choice. Much better!


### Also has some other keys that would be really unergonomic if you used them {#also-has-some-other-keys-that-would-be-really-unergonomic-if-you-used-them}

Number row pinky keys, for example, cause definite radial deviation. I don't use them in my keyboard layout because of this.

All of the small thumb keys cause problems (either ulnar deviation, or too much hand tension due to a lot of thumb extension, or both).

Not terrible _per se_ since you can always not use the unergonomic keys, but wasted money and takes up more space, weighs more, etc.

Might be possible to make pinky keys usable if you increased the height a lot? Not enough pinky stagger?


### Dactyl keyboard {#dactyl-keyboard}

Could allow for split hands and tenting. But looks like thumb keys are slightly less optimally positioned: would have more problems adding that third ergonomic thumb key than with the Kinesis. Probably?

Requires technical know-how; a big time investment for those of us who don't already know such things from occupational knowledge.
