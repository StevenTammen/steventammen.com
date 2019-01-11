+++
title = "Keyboard Braindump"
date = 2019-01-10T19:07:36-05:00
tags = ["keyboard layouts", "workflow"]
categories = ["Computers/Software", "Productivity/Efficiency"]
draft = false
inprogress = true
+++

## Todos {#todos}


### Images and documentation {#images-and-documentation}

It's about time the documentation for [this project](https://github.com/StevenTammen/typing-extended) got better. Even though the code is a bit messy (and therefore in need of cleaning up and inline comments), KBLE images and documentation of program features and behavior should be done before going much further.


### Refactor {#refactor}

To match the structure described below, the code will need to be significantly refactored. This has been something I've been aware of for a while, but haven't had the time or motivation to tackle. Before I present my research on Greek Unicode Entry at an undergraduate research symposium later this semester, I want to have language layers integrated with the wider project in a cohesive, well-documented manner. Therefore, I should actually get to this in the near future.

I'm probably going to make a new branch for the refactor and rebuild things from scratch using KBLE JSON export, a parser, and a code generator to build the remapping scripts. I'll probably do this in Python. In other words, in addition to changing the actual structure of the code, I'm going to be building up a framework so that layouts can be generated from the GUI on the KBLE website so that anyone can build layouts of great complexity without having to touch a single line of code. This is the only way this project will ultimately be useful to most other people.


### Functionality (will probably get moved into the Kanban board soon once I fix it after the repo rename). {#functionality--will-probably-get-moved-into-the-kanban-board-soon-once-i-fix-it-after-the-repo-rename--dot}


#### To get to the point where I can make the full-time switch {#to-get-to-the-point-where-i-can-make-the-full-time-switch}

-   Add Expd2, mess with VK presses to ensure everything works w/ GetKeyState() (i.e., make sure not using VKs that appear to be unused but actually do weird things).
    -   Rework so that only Dual keys use VKs, and the rest are just global variables passed among scripts with Config.ini via IniRead() and IniWrite()
-   Finish window mods for switching with hotkeys and keeping track of the four positions across all virtual desktops
    -   Make sure closing windows by hotkey also removes the info from the virtual desktop associative arrays
    -   Always switch into normal mode for the window you are leaving
    -   Movement hotkeys as well. I.e., move to appropriate of 4 window locations, corrected for monitor clamp overhang on tablet.
        -   Handle case of one external monitor connected = 27" monitor
        -   Also handle case of 2 external monitors connected = portable monitor setup.
        -   in the future will also need to handle 4k display. Maybe conditional based on monitor resolution and number of monitors connected?
-   Fix/check/add as necessary alternative behavior hotstrings for unpaired mode. This has been one of the big barriers for me adopting the layout: I need to be able to make headlines etc. in Org mode.
    -   Also fix Backspace for unpaired mode. Another biggie.
-   Rework conditionals to always be in raw mode in IDE Windows
-   Rework conditionals to support two behavioral branches: Org markup, and terminal markup. Terminal markup will have operators like + - \* / = etc. autospaced _as operators_, rather than pairing them as in Org markup. We don't need a third behavioral branch for coding specifically, since IDEs will handle all the autospacing (and do it on a language-by-language basis). Other people may need different things, so Markdown etc. may get supported in the future.
    -   Org, terminal, and raw cover all the modes I will need to use in the short term. Should make the project basically complete for me.
-   Add save, expansion, and symbol double taps. Set up with Keypirinha + AHK script selectors. Maybe write KP package in long term, or look into using text expansion package.
-   Setup only the most basic sequence behavior
    -   Double tap for basic KP
    -   Switch windows on current virtual desktop, switch windows across all virtual desktops
    -   Web searches (DDG, Google, Wikipedia, Amazon, Google images, Google videos)
    -   Opening Org, Code, Applications


#### Finish basic Vim layer stuff, also essential {#finish-basic-vim-layer-stuff-also-essential}

-   Modifier-like deleting/cutting with del/cut sequence holds
-   Undo-redo with copy as modifier and middle finger home row/top row keys.
-   Figure out how to make modifiers work with Vim motion commands. This is important for things like Excel, where one might wish to use something like Ctrl + Shift + Up to select part of a column.
    -   Only have Shift act as Shift mod in Vim mode if it directly follows Ctrl or Alt?


#### Lower priority but still important {#lower-priority-but-still-important}

-   Enable autocapitalization after making typos coming off of .?!{Enter}. So you backspace back to right after the punctuation + Space (as applicable), and don't have to press Shift. As if you hadn't made a typo at all (i.e., as if you had just pressed the capitalizing punctuation key or Enter)
    -   May not be able to make without backspace stack. Need to think about it.
-   Add "add brief" double tap behavior. Custom AHK GUI maybe?
-   Add "debug mode" GUI to a script to display info on what virtual desktops have windows in what positions.
-   Add double tap Function layer and double tap Windows key behavior on Expd keys.


#### Lower priority Keypirinha {#lower-priority-keypirinha}

-   Figure out how to use FilesCatalog package with overlapping tags: if "Code:" and "Java:" both apply to MyFile.Java, then MyFile.Java should show up with both prefixes in catalog.
    -   According to Gitter, probably going to have to add multiple plugins in the FilesCatalog package (one for each overlapping tag).
    -   Might be able to just inherit from the FilesCatalog Python class without needing to do more? Would be really simple to extend, then.
    -   Will need to figure out where config for these new plugins goes though. Will it go in the config file for the FilesCatalog package? Somewhere new?
-   Implement all the other KP sequence behavior. SSH session management, Everything search, calculator, currency conversions, unit conversions, etc. See KBLE for sequence behavior.


## Various layout thoughts {#various-layout-thoughts}


### Placement of window function keys vs opening keys {#placement-of-window-function-keys-vs-opening-keys}

Want to be able to switch windows when using mouse with right hand. So window keys take priority on the left, even though it would be beneficial to have the opening keys on the left due to the fact that consonants more frequently begin words than vowels (less same-finger).

Maybe not??? Work out.


### Do-stuff keys {#do-stuff-keys}

Space goes on left thumb default for alternation with consonants, so Backspace must go on right thumb default. Backspacing ability is more important for number layer than shift layer since we will be typing strings of characters from that layer more than strings of all caps. Both of these layers may need to be held down, so they should be thumb extension keys rather than internal curling keys (extension interferes with the typing of other keys less, especially the bottom row keys). So number layer key goes on left thumb extension (opposite thumb as backspace), while shift goes on right thumb extension.

In terms of keys we have left:

| Key          | Importance rank | Why/Reasoning                                                                                                                                                                                                              |
|--------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Expd Keys    | 1               | Use for most frequent English words, path expansion on command line, full command completion on command line, variable expansion in IDE, code constructs in IDE                                                            |
| Enter        | 2               | Used to execute commands, used a lot when coding (new lines), used to execute search queries, open/window switching commands from rofi, spreadsheets, paragraphs/lists when writing, execute M-x commands, etc.            |
| Esc          | 3               | Used to get into Vim Normal Mode, keyboard software Vim mode (for copy, paste, move commands, etc. when in non-Vim application), fullscreen. Probably close-ish to Enter in frequency, but Enter likely used more overall. |
| Tab          | 4               | Used a lot in Org mode, indenting code, selecting between options, Tab and Shift+Tab for navigation with focus, custom use in IDEs to jump between code sections                                                           |
| \\ leader    | 5               | named expansions, escaping character for raw (non-autospaced) versions                                                                                                                                                     |
| Language key | 6               | switching languages, prefixing keys for Latin-script accents/special characters in English mode, prefixing keys for normal punctuation in other language modes                                                             |
| Function key | 7               | Accessing function keys to take advantage of program's default behavior when it is not worth making custom mappings via M-x like behavior.                                                                                 |

Placing the expand keys is easy: they go in the most-optimal internal curling thumb keys. They are used primarily as leaders (though they may be held for layers, for multiple expansions in one go). You really only want held layers on thumb keys: pinky-held layers are more restrictive/uncomfortable.

~~Enter and Esc, based on the ideal layout key efforts, could be ambiguous since the upper thumb keys and the bottom pinky extensions are the same-ish effort. The left pinky horizontal key is also in a better position than either of these key pairs, but there is only one of it, so it is less ideal overall since one cannot use the alternate hand if a left hand key needs to precede or follow an Enter/Esc (both of which can be preceded/followed by any key -- Enter is also particularly unideal since it is most common in prose after punctuation, which is on the left hand already). In other words, the single left pinky horizontal key is inferior to the _pairs_ of upper thumb keys and lower pinky extension keys.~~

~~It turns out that this ambiguity is easy to solve: when the number layer is being held down, we want access to Enter more than we want access to Vim. So enter goes on the pinkies so that _both_ enters can be used when holding down the number layer (rather than having one Enter inaccessible due to thumb that would press it being occupied by holding down the number layer).~~

~~On the Kinesis Advantage (which is not quite ideal), the thumb keys in this comparison are actually significantly more effortful than the pinky keys, so it makes sense based on our ranking above to put Enter on the pinkies in this situation too: it does not contradict the hypothetical best placement like it would if Esc were more frequent.~~

Enter on pinkies, Esc on index top row extension, \\ goes on number layer, func = double tap layer for Expd1, languages = double tapping (( and '', lang leader for English = ' + keys that don't follow it. TODO: explain. See double tap KBLE layer.

To finish things off, Tab goes on the next best key (that aforementioned left pinky extension key), ~~and then \\ finishes things off by going on the upper pinky extension key. The language key and function key are both used infrequently, so go on the least favorable thumb keys. Both can also be held (hence thumb keys again).~~


## The structure of remapping for an individual key {#the-structure-of-remapping-for-an-individual-key}


### The base hook that activates every time a key is pressed {#the-base-hook-that-activates-every-time-a-key-is-pressed}

```autohotkey
key::
  if      (modifiersDown()) { modifiers_key() }
  else if (inVimMode())     { vim_key() }
  else if (greekActive())   { greek_greekKey() }
  else if (hebrewActive())  { hebrew_hebrewKey() }
  else                      { english_key() }
```

For example

```autohotkey
a::
  if      (modifiersDown()) { modifiers_a() }
  else if (inVimMode()))    { vim_a() }
  else if (greekActive())   { greek_alpha() }
  else if (hebrewActive())  { hebrew_aleph() }
  else                      { english_a() }
```

Note that branches are mutually exclusive, and have priority. If modifiers are down (other than just shift), the keypress will _always_ be interpreted as a modifier combination, regardless of the currently active language. This means that keyboard shortcuts can be defined in terms of one's native language, and kept consistent across all the languages in which one types. Similarly, key behavior when in Vim mode can be defined to be in one's native language regardless of the currently active language. One's native language should be placed in the `else` as the default branch to take if no modifiers are down and no language modes are activated.


### The structure of one particular language's keypress logic {#the-structure-of-one-particular-language-s-keypress-logic}

```autohotkey
english_key() {
  if      (func_leader())    { en_func_leader_funcKey() }
  else if (func_modifier())  { en_func_modifier_funcKey() }
  else if (num_leader())     { en_num_leader_numKey() }
  else if (num_modifier())   { en_num_modifier_numKey() }
  else if (shift_leader())   { en_shift_leader_shiftKey() }
  else if (shift_modifier()) { en_shift_modifier_shiftKey() }
  else if (expd1_leader())   { en_expd1_leader_key() }
  else if (expd1_modifier()) { en_expd1_modifier_key() }
  else if (expd2_leader())   { en_expd2_leader_key() }
  else if (expd2_modifier()) { en_expd2_modifier_key() }
  else if (lang_leader())    { en_lang_leader_key() }
  else if (lang_modifier())  { en_lang_modifier_key() }
  else                       { en_default_key() }
}
```


#### Priority in the conditional {#priority-in-the-conditional}

In terms of priority, the expd1 and expd2 keys will be utilized by the number and shift layers for different purposes; for my layout, expd2 as ; on the number layer, and expd1 as a variable expander on the shift layer (for NAMED\_CONSTANTS, etc.). So the number and shift layers themselves do not need priority over the expd layers to function properly.

However, we want to be able to make expansions and language behavior associate with semantic keys: {expd1}{A} might expand to "about" and {lang}{/} might yield an acute accent. Thus, in the code, it would be best to have expansion and language behavior under the definitions for the shift and number layer keys, rather than having it all grouped under the definition for a base-layer key, which is harder to follow (requiring one to think of the behavior through the lens of the base layer position rather than the key being used for mnemonics). For example:

```autohotkey
en_num_leader_slash {
  if      (expd2_leader())   { } ; no expd2 behavior for /
  else if (expd2_modifier()) { } ; no expd2 behavior for /
  else if (lang_leader())    { add acute accent }
  else if (lang_modifier())  { add acute accent }
  else { default / behavior }
}
```

Rather than

```autohotkey
en_lang_leader_d {
  if      (num_leader())     { add acute accent } ; mnemonically corresponds to /, but not inherently obvious
  else if (num_modifier())   { add acute accent } ; mnemonically corresponds to /, but not inherently obvious
  else if (shift_leader())   { }
  else if (shift_modifier()) { }
}
```

Giving {expd1}, {expd2}, and {lang} a higher priority than {num} and {shift} would make this grouping impossible, so they are instead given lower priority in the conditional. The function layers have highest priority so that they can be used when the shift and number layers are locked down.


#### Shifted expansions {#shifted-expansions}

To make shifted expansions possible, the expand keys have special behavior when the last key pressed before them was shift:

```autohotkey
en_default_expd1 {
  if (lastKey == "shift") { shiftedExpansion = true }
  else                    { shiftedExpansion = false }
  dualUseKey(expd1_leader, expd1_modifier)
}
```

This means that, for example {shift}{expd1}{a} and {expd1}{shift}{a} have different meanings: the former capitalizes the expansion from expd1, while the latter gives some expansion for {A}. To capitalize this abbreviation, one would use {shift}{expd1}{shift}{a}.


#### Consistency across languages {#consistency-across-languages}

The structure will be identical across languages, with the number and function layers starting out basically identical before customization. So, for example, you might have

```autohotkey
greek_greekKey() {
  if      (func_leader())    { grk_func_leader_funcKey() }
  else if (func_modifier())  { grk_func_modifier_funcKey() }
  else if (num_leader())     { grk_num_leader_numKey() }
  else if (num_modifier())   { grk_num_modifier_numKey() }
  else if (shift_leader())   { grk_shift_leader_shiftGreekKey() }
  else if (shift_modifier()) { grk_shift_modifier_shiftGreekKey() }
  else if (expd1_leader())   { grk_expd1_leader_greekKey() }
  else if (expd1_modifier()) { grk_expd1_modifier_greekKey() }
  else if (expd2_leader())   { grk_expd2_leader_greekKey() }
  else if (expd2_modifier()) { grk_expd2_modifier_greekKey() }
  else if (lang_leader())    { grk_lang_leader_greekKey() }
  else if (lang_modifier())  { grk_lang_modifier_greekKey() }
  else                       { grk_default_greekKey() }
}
```

Or

```autohotkey
hebrew_hebrewKey() {
  if      (func_leader())    { heb_func_leader_funcKey() }
  else if (func_modifier())  { heb_func_modifier_funcKey() }
  else if (num_leader())     { heb_num_leader_numKey() }
  else if (num_modifier())   { heb_num_modifier_numKey() }
  else if (shift_leader())   { heb_shift_leader_shiftHebrewKey() }
  else if (shift_modifier()) { heb_shift_modifier_shiftHebrewKey() }
  else if (expd1_leader())   { heb_expd1_leader_hebrewKey() }
  else if (expd1_modifier()) { heb_expd1_modifier_hebrewKey() }
  else if (expd2_leader())   { heb_expd2_leader_hebrewKey() }
  else if (expd2_modifier()) { heb_expd2_modifier_hebrewKey() }
  else if (lang_leader())    { heb_lang_leader_hebrewKey() }
  else if (lang_modifier())  { heb_lang_modifier_hebrewKey() }
  else                       { heb_default_hebrewKey() }
}
```


### afterNum() functionality {#afternum-functionality}

In order to be able to type punctuation like ? and ! that are (typically) located on the shift layer directly after a number (or other character on the number layer) without having to use the shift leader (thereby saving a complete keypress), the functionality of default key behavior can be customized based on whether one has just typed a key on the number layer. This customization will only be applicable to default key behavior, and is thus located within those function calls, taking the form of something like:

```autohotkey
en_default_key {
  if (afterNum()) { en_shift_leader_shiftKey() }
  else            { default key behavior }
}
```

Punctuation keys that are on the number layer without modified behavior (which is most of them) can be themselves pressed on the number layer, with the afterNum() behavior simply providing a faster means of accessing the shifted versions of these keys (e.g, `?!_`). The period is an exception since the number layer version is different (non-autospaced) compared to the default layer: see below.


### Autospacing, autocapitalization {#autospacing-autocapitalization}

Autospacing and autocapitalization are added within the definition for a particular keysend (be it for a default layer, the number layer, the shift layer, etc.). Autospacing and autocapitalization can be toggled on and off as desired. "Autospacing" is used as an umbrella term for customized send behavior for certain keys: matched quotes and parentheses, for example, are "autospaced."


#### Customization {#customization}

Not all people may want exactly the same autospacing. Moreover, some users may want to switch autospacing schemes on the fly depending on use case. For example, different markup languages like Markdown and Org mode use characters differently: Markdown uses matched backticks to indicate inline code, while Org mode uses matched tildes.

In my opinion, it makes sense to handle non-code autospacing here in the keyboard script, but let IDEs handle the rest (and thus always code with autospacing off). This is because IDEs already have autospacing built in, and can also space code to align types, variable names, etc. (which further increases readability) -- something that is impossible to accomplish without the static parsing of files that IDEs do.

I have plans in the future to support Markdown autospacing (I myself basically exclusively use Org mode), and to also support transparent conversions so that you can "use" the markup of one type and have it get automatically converted to the other. So, for example, I might type something like `** An h2 header` in Org mode syntax and have `## An h2 header` (Markdown syntax) actually be the output.


#### Interaction with Vim {#interaction-with-vim}

We don't want autospacing and autocapitalization in Normal mode since it messes stuff up. Therefore, there must be logic to switch autospacing and autocapitalization off and on as one switches into and out of Normal mode, respectively.

The general idea is to toggle off autospacing when one presses Esc, and only turn it back on when a, i, etc. are pressed. I have implemented the basic Vim structure already (including, among other things: cut, cut without saving contents into the default register, copy, paste, visual mode, visual line, visual block, and a/i); this behavior (and correct handling of autospacing states) is already present in my [own (hardcoded, not commented, somewhat back-of-the-napkin) implementation](https://github.com/StevenTammen/typing-extended). There are still a bunch of messy things that need to get handled, however:

-   searching forwards and backwards: what if the search term contains a/i/etc.?
-   find and till (up to but excluding character): what if the character that is being used is a/i/etc.?
-   ex commands: what if the commands/arguments contain a/i/etc.?
-   visual mode, g commands, etc.: need these to also work with automatically switching in and out of normal mode.

This will be somewhat painful to implement, but the good news is that once it gets done, it will be faster than attempting to use inter-process communication to have Vim/Emacs/IntelliJ/etc. send a signal to our keyboard script when modes are switched.


#### Backslash escapes {#backslash-escapes}

There are times in editing when one might wish to add a single left parenthesis, for example. So there needs to be some convenient way to "escape" autospaced characters when you want just the character without autospacing. (Recall that if you don't want autospacing period -- rather than not wanting it in a single instance -- you can turn it off altogether).

I am also thinking of passing through certain keypresses to allow the insertion of ""(),.?!{Space} and maybe a couple other characters straight from Vim mode. This would be targeting the editing situations in which you are making a clause parenthetical, or splitting up a multi-clause sentence into multiple independent sentences, etc. Vim's "r" behavior somewhat allows for this. I'll need to think about this more.


### Backspacing Queue {#backspacing-queue}

Because a keyboard remapping script is not a text-editor, it cannot cleanly access information before or after the current position. That is to say, it is stateless with respect to cursor location.

However, it is inconvenient to have to manually backspace autospaced entities. An autospaced comma, for example, sends {,}{Space}, and would require two backspaces to remove, even though it was only sent with a single key. This is not only confusing (breaking the correspondence between "what" a comma keypress is in the layout), it is also inefficient. Therefore, there should be some way to keep track of how many backspaces are needed for some amount of previously typed keys, so that the script can send the correct amount of backspaces when removing things.

This becomes particularly important when dealing with languages with diacritics, which, if using decomposed (rather than precomposed) Unicode, can have multiple characters representing a single letter. Not having intelligent backspacing makes removing any amount of previously-typed decomposed Unicode tedious.

A backspacing queue:

```autohotkey

class BackspaceQueue {

  __New() {
    this.backspaceAmounts := Object()
  }

  enqueue(numKeysToBackspace) {
    this.backspaceAmounts.InsertAt(1, numKeysToBackspace)
  }

  dequeue() {
    return this.backspaceAmounts.Pop()
  }

  size() {
    return (this.backspaceAmounts.MaxIndex() ? this.backspaceAmounts.MaxIndex() : 0)
  }

  reset() {
    if(this.size() != 0) {
      Loop % this.size() {
        dequeue()
      }
    }
  }

}


```
