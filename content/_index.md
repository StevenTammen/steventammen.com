+++
title = "Site Update In Progress"
date = 2020-07-18
draft = false

+++

## Note

The site is currently undergoing a rather significant update. Links may be broken, styling may change, and other various and unsavory happenings may take place. I apologize for any inconvenience.

If broken things make you angry, then I suggest you vacate the site in lieu of [Cute Kittens](https://www.youtube.com/watch?v=_u_bdjPsj5U).

## Why?

I have been meaning to update the site for some time now, but college made it hard (no time!), and then there was that initial period of adjusting to being a working adult and all that. Now, however, I am working on a rather comprehensive update, hopefully to be followed by much more regular and polished content. Hopefully.

You can read some in-progress design thoughts below.

## In-progress design thoughts

### Flat URL structure and graph-like connections

#### Ambiguity in URL content organization

Much of the content on this site can be organized in more than one way. The 
problem with having URLs that include organization information is that they 
inevitably lead to ambiguity. For example, consider a page about full-tang 
fixed-blade knives. A knife in this category, as long as it is not 
absolutely enormous, makes a good every day carry knife, a good 
self-defense knife, and a good survival knife. So which category should it 
end up under in the URL hierarchy? That is, if we were choosing between the 
following content paths, which would make the most sense?

- `products/edc-knives/fixed-blade-knives`
- `products/survival-knives/fixed-blade-knives`
- `products/self-defense-knives/fixed-blade-knives`

One possible way of handling the situation is by attempting to figure out 
which class "most represents" the purpose of such fixed-blade knives, and 
then having the URL fall under this category. However, it is not entirely 
obvious how to do this: are fixed-blade knives more survival knives than 
EDC knives or self-defense knives?

For various reasons, both self-defense knives and survival knives benefit 
from being fixed, while EDC is less clear-cut (ahem...). So we might 
conclude then that we should have the page fall under one of the former 
categories. The issue is, a reasonable person might expect fixed blade 
knives to fall under either. By choosing just one of the two, in some 
senses, information will not be found where it might be reasonable to find 
it.

Moreover, in reality, fixed-blade knives are more properly a physical 
categorization of knives (cf. also folding knives, butterfly knives, 
switchblades), while the three categories above are based off of intended 
use. For this reason, it would also be possible to categorize fixed-blade 
knives in a path like `products/types-of-knives/fixed-blade-knives`. This 
is as equally valid as our categorizations above.

One could go on. Other possible parent categories for fixed-blade knives 
might include `belt-carry-items/`, `mandatory-checked-items/`, or 
`versatile-gear/` (since fixed-blade knives can be used for a wider range 
of things than many other types of knives).

#### Hierarchy is natural, but so is flexibility

If you think about it, it doesn't make a whole lot of sense to have 
fixed-blade knives directly under a parent category of 
`mandatory-checked-items/`. There is not anything particularly noteworthy 
about fixed-blade knives that makes them even less travel-safe than other 
types of knives. Put another way, the category banned from carry-on luggage 
is *knives* in general, not *fixed-blade knives* specifically.

All the types of knives discussed thus far can be categorized under the 
category of `knives/`, which itself falls under `mandatory-checked-items/`. 
Some knives will be `belt-carry-items/` (e.g., large fixed-blade knives), 
but others will not; some will be `versatile-gear/` (e.g., fixed-blade 
knives and some sorts of folding knives), but others (e.g., ceremonial or 
decorative knives) will not. Not all `belt-carry-items/` will be 
`mandatory-checked-items/` (e.g., a flashlight can typically be carried 
on). You get the idea.

As the parent category of `knives/` shows, there is a hierarchy in 
categorization that is natural. As the other connections show, flexibility 
is natural as well: things that are knives can also belong to other 
categories.

#### So what does all this mean for content organization?

In this way, any given page can have multiple distinct ancestors (direct 
ancestors being parents) and multiple distinct descendants (direct 
descendants being children). While it might be tempting to view the 
organizational structure then as a directed acyclic graph (DAG),[^dag] it's 
really more of an inheritance hierarchy (specifically, one involving 
multiple-inheritance) since, e.g., grandchildren pages will belong to the 
classification of both their parents and grandparents. Here's a simple 
multiple-inheritance UML diagram that contains some of the categories we've 
discussed:

[^dag]: In computer science, the nodes/vertices of directed acyclic graphs can have multiple edges to things logically above them in the hierarchy and things logically below them in the hierarchy; contrast trees proper. Here, nodes/vertices would be classification list pages (except for leaves = vertices of degree 1, which would be webpages themselves), and edges would be connections to (other) classification list pages.


TODO

To my mind, the above discussion makes it clear that it is a bad idea to do 
any sort of content organization in URLs since it forces a single choice in 
categorization which does not follow the natural densely-connected 
structure of most content (we are forced to choose just one since 
duplicating pages is not a workable solution: it takes up lots of 
unnecessary disk space on hosting servers/CDNs, it is penalized by search 
engines, it leads to user confusion, it makes searching through pages on a 
website more difficult, etc.). Therefore, our page would simply end up at 
https://steventammen.com/fixed-blade-knives.

As discussed above, this one page has all sorts of organization around it, 
but keeping the URL free from all this organization means that this page 
can naturally end up in multiple categories that are not related. It also 
has the side-benefit of ensuring that all content URLs are as short as 
possible, which is beneficial for all sorts of reasons (e.g., memorability, 
ease of typing, ease of incorporating links into written text without 
breaking lines unnaturally, etc.).

#### Implementation details for list pages

Things get messy when we get into exactly how we go about turning our 
multiple-inheritance classification hierarchy into useful list pages. For 
the sake of example, let's illustrate the idea with SQL queries. Say we had 
the following tables (primary keys bolded, foreign keys italicized):

- webpage(**name**, url)
- listpage(**name**, url)
- edge(***parent_name***, ***child_name***)
- connection(***ancestor_name***, ***descendant_name***)

The main question is this: if I go to a classification list page like 
`tags/knives`, what content should show up on the page?

---

Should it only be links to other classification list pages that are direct 
children of `knives/`?

```sql
select url from listpage where name in (select child_name from edge where 
parent_name = 'knives')
```

---

Links to all classification list pages under `knives/` in the hierarchy 
(i.e., not inclusive of actual pages = leaves in the classification 
hierarchy)?

```sql
select url from listpage where name in (select descendant_name from 
connection where ancestor_name = 'knives')
```

---

Links to actual pages that fall under the category `knives/` and its 
subcategories?

```sql
select url from webpage where name in (select descendant_name from 
connection where ancestor_name = 'knives')
```

---

Links to all classification list pages under `knives/` in the hierarchy 
*and* the respective actual pages that fall under them?

```sql
select url from listpage where name in (select descendant_name from 
connection where ancestor_name = 'knives')
union
select url from webpage where name in (select descendant_name from 
connection where ancestor_name = 'knives')
```

---

Arguably, any one of these arrangements might be useful to a user. In the 
abstract then, all of them should be possible, with the most useful as the 
default behavior (to give the users who won't change anything the best 
overall user experience), but all the rest accessible for those who might 
want to change things.

It is my opinion that the most intuitive way to do this is with any given 
classification list page sending all the information in the HTML and then 
just hiding it and giving users the ability to expand it out 
directory-style. Having shortcut buttons for collapsing to only direct 
children, expanding to all classification list pages (excluding all actual 
webpages), and expanding to all pages (including all actual webpages) is 
ideal, in my opinion, along with buttons to hide either all classification 
list pages or all actual webpages under the current category in question.

While many hierarchy-internal classifications will probably end up 
abstract, some may not, and I would thus suggest that each hierarchy 
classification first have an alphabetized list of actual webpages, followed 
by an alphabetized list of subcategories that can be expanded. Doing things 
this way seems like the most effective UI to me.

### A strict preference for pages over posts

#### Background

I started out having a blog that had posts that were "moment-in-time 
snapshots" of my thought. The idea was that my perfectionism often gets in 
the way of actually getting anything published, and so adopting a train of 
thought in the manner of "it's only a blog post, so doesn't have to be 
perfect" let me justify to myself some vagueness and lack of polish, and 
therefore let me feel comfortable enough to show the world some of my 
less-considered musings. 

However, as time has progressed, all of the reservations that I originally 
had concerning this sort of snapshot content have showed themselves to 
outweigh the benefit of lowering the bar of initial content expectations. I 
am a firm believer in continual incremental improvement, and also a firm 
believer in following the data, even if it means eating humble pie and 
doing an about-face in position. I have found that I inevitably change my 
views on things over time—even in areas I was not expecting to—and with a 
great deal higher frequency when I am first thinking about a subject.

#### Editing in-place writings that already exist is strictly superior to creating new webpages every update

Most of the time, a new treatment will need to talk about most of the same 
things as older treatments, but just with some sections updated or revised. 
Bearing this in mind, there are two primary means how you might go about 
updating your thought while strictly following a blog format: either you 
continually repost the complete treatment when updating things (and 
therefore have unnecessarily repetitious content), or only post changes or 
major updates ("deltas") to things you have already posted. The former is somewhat 
problematic (it leads to a poor user experience when navigating through 
categories or topics, since readers will constantly be running into 
frustratingly similar content on different pages, with no easy way to 
filter out things that they have already read), but the latter is perhaps 
even worse—imagine if you had to click through five pages just to get a 
full, up-to-date treatment of something! It has surprised me how often I 
find this sort of situation out in the wild online—website owners having 
discussion of some topic spread out over many somewhat interrelated posts, 
with later ones updating and often contradicting former ones. This 
situation of "editing by posting more" (i.e., making new posts that discuss 
changes to the content of older posts) is decidedly suboptimal since it 
forces readers to do a lot of pointless work to find up-to-date content and 
link it together into a cohesive account. Why not do this on the writer's 
end and make the user experience better? 

Doing this on the writer's end entails always presenting users with a 
complete, up-to-date treatment of a topic without adding any repetition (by 
additional reposting of content) that would lessen the effectiveness of 
searches and content organization under categories and tags. Essentially, 
all you have to do is edit a webpage in place rather than making a new 
webpage (as above, either one that copies most of the things from the old 
page while updating some sections, or one that just discusses the changes) 
when making a change. This leads to a single webpage that evolves over 
time... a webpage that has little to do with any particular date. Since 
posts canonically have dates attached to them, it does not make sense to 
use posts for anything with content that might get updated. 

Another benefit of doing things this way is that the 
incrementally-updated-page approach is much more suited to dealing with 
in-progress content than posts in a blog format. Because I think it is a 
good idea to always post content as soon as someone else might find it 
useful, the ability to easily deal with partially completed writing is an 
important further advantage. 

#### History: an intuitive argument against leaving up old posts for "a view of how things progressed" 

When I update my thought on something, leaving old content with a different 
point of view up on the site serves to confuse readers (it is 
incontrovertibly less clear than only ever having pages up on the site 
which represent my most up-to-date thought). Someone may come across an old 
post and think that this is what I really think (even if I actually think 
something completely different in the present), or buy my old argumentation 
even if it is complete bunk. This could be somewhat mitigated by editing 
old webpages to contain clear disclaimers and links to newer treatments, 
but even this is not as useful as not having any misleading content around 
to begin with. For example, what if someone misses the disclaimers and links when 
searching on a phrase or skimming/scanning the page (rather than truly reading it all the way through)?

With this being said, it can be useful to see how someone's thoughts 
develop over time. It would be ideal to be able to view this without having to 
keep old pages around for the reasons above. Is this possible? It turns out 
that hosting your website in a GitHub repository enables this 
transparently -- interested parties can simply view a page's history via version control. In this way, we can have our cake and eat it too.

Note that not keeping old pages around is not the same as 404'ing 
everything every time you make an update. If you keep the updated page on 
the same URL, then no links will break, unless you change section headers 
on the page (which will change the URL anchors associated with said section headers, and hence break any links to them). This may be inevitable at times -- especially for more substantial updates of content -- but should probably be kept 
to a minimum if possible.

#### So are posts and a blog format absolutely useless?

Any time you have content that is expressing something that has the 
potential to change over time (for example, a treatment of a subject with 
argumentation and opinions), posts do not make sense for the reasons 
described above. The vast majority of things that can be discussed fall 
into this category of potentially mutable content.

However, there is a sort of content that will not change over time: bare 
description of things that I did, things that I read, and so forth. A 
collection of links that I found interesting in a given week will not be 
different in the future, nor will a blog post detailing (with pictures 
accompanying text) a set of experiences I had on a given day when 
traveling. If theses things are kept descriptive without wandering into 
prescriptive reflections or conclusions, then they are immutable (typos and 
such aside), and associated with specific dates.

Descriptions of travels and experiences will show up on the blog when they 
happen, and will consequently be irregular with respect to time. 
Descriptions of what things I read will be more regular, and will be posted 
weekly on Saturday. Some weeks may have more things in this post and some 
weeks may have less, depending on what amount of research I had time to 
delve into that particular week.

### Categories

A distinction was made in the preceding section between posts, which are 
immutable and date-dependent, and pages, which are mutable and 
date-independent. While there is not a great deal of content subdivision 
that is possible for posts due to the inherently limited scope of what can 
be in them (see directly above), the concept of pages can be split into 
several mutually exclusive divisions.

#### Pages

General pages (shortened to just pages) contain information and reasoning 
related to a wide variety of different things. 

#### Reviews

Reviews are a specific kind of page that deal with a particular instance of 
something. That is to say, you do not review abstract categories, but 
concrete manifestations of categories. For example, I might review a 
Microsoft Surface tablet, but would not review the idea of a tablet itself. 
This site strives to make reviews consistent across products by identifying 
optimization parameters and weighting them appropriately, and then 
assigning products being reviewed a numeric score for each optimization 
parameter. This process is time-intensive and not entirely free from 
subjectivity, but is much better than less rigorous approaches. 

Reviews will naturally vary by category. Different kinds of gear will have 
different optimization parameters, and there will also be broad variation 
among first-order categories that it makes sense to have reviews in: 

- (Physical) Products
- Software
- Information (e.g., books, podcasts, YouTube videos)
- Arts (e.g., novels, movies, music)

It also makes sense to review the producers of all of the above: 
manufacturing companies, software firms, authors, directors, and so forth.

#### Sources

Source pages will be organized collections of sources for a specific topic. 
They will consist solely of lists of links and objective 
descriptions/summaries of the contents of said links. Every general page 
will have a corresponding source page. For example, a general page about 
the ketogenic diet would have a path of `pages/ketogenic-diet` and the 
corresponding source page would have a path of `sources/ketogenic-diet`. 

The difference between source pages and pages in the category of 
`reviews/information` will be described more fully below. 

### Content types

- Pages (mutable, date-independent)
- Sources (mutable, date-independent)
- Reviews (mutable, date-independent)
- Life hacks (mutable, date-independent)
- Weekly links (immutable, date-dependent)
- Blog posts (immutable, date-dependent)

### Content organization

- Information
   - Creators
      - Authors
      - Podcasters
      - Directors
      - Directors of photography
      - Script writers
      - Video creators
   - Distributors
      - Publishers
      - Journals
      - Websites and blogs
      - Podcasts
      - Production companies
      - Channels
   - Sources
      - Written
	 - Books (author)
	 - Journal articles (author, journal)
	 - Web (author, website and blog)
      - Audio
	 - Podcast episodes (podcast)
      - Video
	 - Documentaries (director)
	 - Web (channel)

- Arts
   - Creators
      - Authors
      - Narrators
      - Podcasters
      - Actors
      - Directors
      - Directors of photography
      - Script writers
      - Video creators
      - Composers
      - Musicians
   - Distributors
      - Publishers
      - Websites and blogs
      - Podcasts
      - Production companies
      - Channels
      - Record labels
   - Sources
      - Written
	 - Poetry
	 - Prose
	 - - Audio
      - Video

