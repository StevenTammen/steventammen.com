+++
title = "On Hackathons and Judging Them"
date = 2019-02-13T00:54:33-05:00
tags = ["programming", "fairness", "hackathons"]
categories = ["Philosophy", "Computers/Software"]
draft = false
+++

## Background {#background}

I recently attended another hackathon. There were probably around 400 or 500 people there, and about 55 teams competing (to my understanding). I already had a pretty good idea of what I wanted to get done during the hackathon, and was pleasantly surprised to actually knock most of it out over the course of the two days I was there.

I should be up front in stating that I am highly opinionated about this subject.


## Good things about hackathons {#good-things-about-hackathons}

Basically everything about my hackathon experience has been great except the competition/judging aspect of them. I'll get to that later. Here's a list of generally-self-evident pros:

-   A neat social atmosphere where programmers and their ilk gather and it is socially acceptable to be in top geek form.
-   Workshops with a practicality level that makes most college programming classes feel like speculative metaphysics.
-   An emphasis on being open and inviting to new people as well as the people that put the "pro" in "programmer."
-   Free food.
-   Networking with employers that is useful and not sketchy. I don't like networking as a concept ("It's not what you know but who you know!"... wait, that's a terrible idea. Why are we doing this again?), but interacting with companies at hackathons has been much more natural for me than at dedicated career events.


## The problems with hackathon coding competitions {#the-problems-with-hackathon-coding-competitions}

I think that the idea of hackathon coding competitions is great, but the reality not so much.

The gist is that the real world is not composed of small problems that can be solved in 24-48 hours, and, moreover, it is actually pretty rare to be creating entirely new projects (rather than adding to or improving older ones). Hackathons would have one believe that programming consists of new projects that have a scope such that they can be finished in a very short amount of time.

I am straw-manning a bit, to be sure, but the general trend I have noticed in hackathon coding competitions is that people actually embrace the idea of "finishing" new projects during the hackathon, rather than being realistic in accepting that to make anything useful, they have to make only a small piece of something, and probably work with an already existing project.

This is my biggest beef with hackathon coding competitions. The emphasis is all wrong compared to what real-life programming _actually_ is. (And I don't believe that this is much of a ["No true Scotsman"](https://en.wikipedia.org/wiki/No%5Ftrue%5FScotsman) logical fallacy).

I have all sorts of other nitpicks too. See below.


### Insufficient judging time {#insufficient-judging-time}

It is difficult to explain complex projects in a non-technical way in a short amount of time. That's exactly why it is good to practice doing it.

But making teams explain their projects in 3 minutes is not practicing this. You can't explain most projects in 3 minutes, if you are being rigorous in what "explaining" means. It's just not possible.

Any judging that doesn't give teams on the order of 10-15+ minutes to explain their projects to judges has judging that cannot be considered fair. Why? Because there is no way the judges can possibly understand the projects they are judging if teams are only given 3 minutes to explain. I don't care how smart your judges are.

Moreover, some projects have a much easier time getting explained in a dumbed-down elevator pitch manner. Anything with pretty graphics that is mostly style rather substance, for example.


### An emphasis on marketing ideas over original work and clean codebases {#an-emphasis-on-marketing-ideas-over-original-work-and-clean-codebases}

In my personal anecdotal observation, shiny webapps and phone apps that use frameworks win more in hackathons that anything that is complex and original.

People using frameworks with lots of pre-built code can copy a template, tweak some things, market some trendy concept, and call it an original app. It doesn't even have to work, because hey, hackathons are short, and it's the idea that counts, right?

If hackathon coding competitions are supposed to be about coding, they should be about coding, not picking the best, most marketable app idea. That is, judging should be a strict and objective affair, evaluating the quality of the code submitted and teams' explanations of it rather than hypothetical what-ifs related to what a pretty frontend "could" do if it were properly constructed with full functionality implemented.

If you push a pretty-framework-app team about exactly what code they wrote and what functionality they generated during the competition on top of code that was provided for them, I have a hunch that these projects would be much less impressive than their veneer of polish would lead you to believe. (Although I'm sure this is not universally true; it's not like frameworks are evil or anything, it's just that to compare apples with apples, you have to make sure that people using code they didn't write actually did a comparable amount of coding to people rolling without any framework).

Unfortunately, a lot of startup culture in the real world mirrors this sort of marketing-first paradigm, so it's not like this is a problem unique to hackathons. For reasons yet unfathomable to me, marketing is valued by both consumers and companies more than objective evaluations of functionality.

I know of and personally support companies that PR firms would dump on, because they value things like an ethical supply chain, optimal/scientific/statistically informed/transparent/etc. design, and clear descriptions of product limitations over marketing and the bottom line. It sickens me to see the opposite of such practices valued in any regard at hackathons.


### A lack of (or apparent lack of) controlling for lurking variables in judging {#a-lack-of--or-apparent-lack-of--controlling-for-lurking-variables-in-judging}

I personally don't care what other people think of my code if I accomplish what I set out to do, and do my best. This is a healthy perspective to adopt in all areas of life, in my opinion; if I actually do my best, why should I care about other things?

Unfortunately, a lot of the competition in hackathons does revolve around the concept of winning. The problem with this is that hackathon judging, at least based on what I have seen of it, is not even close to being fair. Here are some things that come to mind:


#### Controlling for judges having corporate bias {#controlling-for-judges-having-corporate-bias}

Hackathons are sponsored by companies. Thank you companies! (That is non-sarcastic; I mean it). It's great to get businesses involved in making the next generation better and more prepared for the realities of project-based work.

With all this being said, I have observed that many hackathons do not maintain a professional enough relationship with their sponsors to keep them from affecting the judging of the hackathon in general (vs. company-specific prizes that companies can obviously give to whomever they see fit). If the general judging is to be objective, you cannot have company reps as judges. They bring with them a particular corporate perspective and way of looking at things (even if they have the absolute purest of intentions). Conflicts of interest need to be avoided if judging is to be taken as seriously objective.

There is also the matter of implicit value judgments affecting general judging. Projects that are similar to what corporate sponsors award prizes for are probably statistically more likely to be selected as winners in the general competition because of unconscious priming effects on the general judges. The vagaries of human bias are a real party-pooper.


#### Controlling for judges' previous knowledge of students {#controlling-for-judges-previous-knowledge-of-students}

Hackathons I have attended have had also had professors from Universities as judges. As with corporate judges, there are unavoidable latent conflicts of interest with such an arrangement. Professors can do their best to evaluate each and every project at the hackathon equally -- not taking into account the fact that they know some of the students personally, and are friends with them -- but a lot of human bias is at the unconscious level (e.g., see [a book on rationalization and self-justification](https://www.amazon.com/Mistakes-Were-Made-but-Not/dp/0544574788/)).

People are more likely to be favorably disposed to those that they know and like (and who like them back) over random strangers, even if they are doing their absolute best to be impartial. To put it another way, conflicts of interest don't magically go away after you acknowledge that they exist.


#### Controlling for the number of team members {#controlling-for-the-number-of-team-members}

Teams of two people will be able to make much less impressive projects than teams of five people. Are projects evaluated relative to the number of contributors they had?


#### Controlling for total time spent on each project {#controlling-for-total-time-spent-on-each-project}

Different students have different schedules coming into a hackathon. Some have homework, studying for tests, part-time jobs, and other things of this sort. They can't fully dedicate themselves to coding for two days, even though some others might be able to. Moreover, some people like going to a lot of hackathon workshops (which are definitely a great opportunity). People that go to a lot of workshops will always spend less time actually working on their projects for the competition than those who ignore the workshops.

So it can't simply be the number of people on a team, but the number of "billable" man-hours spent on each project. If you don't control for this, then you are not judging fairly.


#### Controlling for problem complexity {#controlling-for-problem-complexity}

Relating to the concept of frameworks above, all programmers of moderate ability can use frameworks to build basic webapps that look slick and do basic stuff. It's not hard. This holds for basically anything where you are using packages that already exist. Even "hard things" like deep learning for neural networks are pretty much regurgitating packages until you get to certain point.

Writing an app that ties into a microkernel scheduler? That's a lot harder. Or how about a highly memory-efficient sensor app to run on a tiny embedded computer for an IoT application? These things are essentially custom jobs that require a much more thorough level of knowledge integration.

It is not really fair to treat all problems as equally approachable. A team that tries to tackle a much harder problem might not get as much done, but what they do get done might have been many times harder to achieve than making an off-the-shelf application.


#### Controlling for programming ability {#controlling-for-programming-ability}

Some things in life must needs be a pure meritocracy divorced from considerations of personal worthiness. Engineers that design bridges and skyscrapers and other such things (i.e., those whose mistakes cost people their lives); surgeons performing life-endangering surgery; airplane pilots; etc. -- these folks should be chosen on the basis of raw ability, and little else. It doesn't much matter if the best surgeon for your brain cancer happens to be a highly privileged individual who only works at 60% of what he is capable of (i.e., is lazy): if his 60% is better than other options' 100%, he is the one you should go with. It's your life on the line.

Hackathons have no such circumstantial pressures, and can thus focus on absolute fairness. The general idea is this: pitting graduating seniors with 3 internships of experience against freshmen is always going to be unfair unless you evaluate projects on a relative scale rather than an absolute one.

Of course, you do not want to set the bar at the lowest common denominator. The idea is instead to understand that accomplishments of people must be taken in the context of their overall proficiency. If a team of super-programmers creates an awesome project, the project is still awesome, but it's not terribly surprising. But if a bunch of relatively-clueless freshmen work incredibly hard and manage to create something comparable, then that is actually quite a bit more impressive.

This sort of effort-focused judging works across the board, if applied consistently. It doesn't matter what race you are, what gender you are, how poor a background you come from -- if you come and outwork other people (even if your end product isn't as impressive in an absolute sense), you should have the opportunity of winning, because judges should recognize that it is impossible to judge people fairly across a wide range of skill levels in any other way.

One additional wrinkle is how much current skill is a proxy for past effort. Not all bad programmers are new programmers. There is no reason to judge willfully lazy, unstudious people less strictly than their peers who are better programmers because they worked hard over a period of many years. So present capability levels aren't a perfect barometer of how strictly judges ought to evaluate specific people -- less capable people shouldn't _always_ be judged more leniently. Of course, fairly determining such things is just about impossible.


#### Being rigorous about standards of code inclusion {#being-rigorous-about-standards-of-code-inclusion}

Someone who acts as if a personal project they have been working on for weeks is the product of a few hours at a hackathon should by no means be treated the same as others. I would argue that anyone caught being straight-up dishonest should be disqualified and blacklisted via MLH and other higher-level organizations, until such a point that they demonstrate that they are ready to be an ethical member of the community.

Taking people's word for it on the honor system is great and all, but does not inspire confidence regarding fairness. Especially for larger hackathons where hundreds or thousands of dollars are on the line, along with a fair bit of prestige and resume-building for students, judges should strive to do better than simply trusting people. Especially if something seems almost too good to be true ("look at this ridiculously complex, professional-grade app we built over the last day!"), there is no reason why judges should be shy asking hard question about the origin of code, and forcing team members to explain what it does.

This is one of the biggest pet peeves of mine not only regarding student competitions and things of this sort, but also regarding real-world situations. People are too nice, and a lot of horrific behavior gets punished with little more than a slap on the wrist. If you make punishments for unethical behavior swift, severe, and inescapable, people will reform. Until such a point, cheaters and leeches will continue to plague industry, government, and everywhere else. College and college events are no different.


## How fixable are these problems? {#how-fixable-are-these-problems}


### Hypothetical ideals vs. practical realities {#hypothetical-ideals-vs-dot-practical-realities}

It is necessary to examine the above criticism through the lens of reality. Most of life is not remotely fair -- strict meritocracies exist mostly in the hypothetical. Marketing does trump functionality; consumers are regularly lied to by companies (though of course not all companies engage in such behavior); most competitions in life are popularity contests as much as anything else; etc. Hackathon coding competitions are not something uniquely problematic.

To take an example -- if we say that company reps and professors can't be judges because they have conflicts of interest, well then who _can_ be a judge? Or how about measuring problem complexity -- how is one to do this fairly? Some people are better at some things than others, so what is hard for one team might be only moderately difficult for a team of different individuals.

I could go on.


### Student volunteer organizations {#student-volunteer-organizations}

The hackathons I have attended have been organized and run mostly by student volunteers who freely give up their time and energy to make them happen. Student volunteers are the lifeblood of college hackathons, and their effort should definitely be acknowledged. Without them college hackathons probably wouldn't be free, they wouldn't be as informal (organized by students for students without a cold, corporate vibe), and they definitely wouldn't be as good a vehicle for expressing school pride in a non-harmful way (i.e., showcasing one school's talent and student initiative without at the same time putting down other schools or their students).

So, far from me speaking poorly of student volunteer hackathon organizers, I think they are great people and that they do a great job all things considered. But the revolving door of student volunteers means that a lot of wisdom and experience graduates every year, leaving the potential for repeated mistakes and a lack of growth over time.

All this to say, since student volunteer organizations that run hackathons do not have a stable group of leaders, it is simply going to be harder to deal with certain problems, particularly the thorny ethical issues that inevitably pop up when you start ranking the work of hackathon attendees.


## Things I'd like to see {#things-i-d-like-to-see}


### If keeping a structure of winners and losers {#if-keeping-a-structure-of-winners-and-losers}

Keeping a structure of winners and losers is not problematic in and of itself. Without putting too fine a point on it, some people really should be specially recognized for all their effort and hard work -- some people are actually worthy of "winning," in other words. "Everyone gets a trophy" is not compatible with meritocracy.

Above, I have outlined what, to my mind, are fairly substantial issues with hackathon judging. I don't pretend to have all the answers, and, moreover, I'm fairly confident that simple solutions to many of these issues do not exist.

With this being said, I think there is a big difference between trying your best to take into account all of the complexities of judging vs. only very superficially trying to handle the issues or pretending like they don't exist and that current judging is just fine. What I would stress is that **I would be 110% behind hackathon organizers drafting a document explaining how judging proceeds, and how things like this have at least been considered.** Things will never be perfect, but even an initial stab at better fairness -- particularly if it was made entirely public and transparent -- would go a long way.

Here are some specific suggestions:


#### Insufficient judging time {#insufficient-judging-time}

Hackathons that have enough attendees such that there are many teams face a time problem with judging. If you give each team 10 minutes to present (which is, to my mind, the lowest of lower bounds), and you have 60 teams, you would need 10 hours just for judges to hear all the teams. Then you would face problems like whether the teams that presented earlier had an advantage (since judges weren't burnt out or tired) or the teams that presented later (since they were fresher in the minds of judges).

This just wouldn't work. It is necessary to have judging occur in parallel. The question then becomes how to best do this. The problem with parallel judging is that not all the judges hear all the teams, so some teams might get eliminated by one set of judges while another set would have ranked them at the top of their list. To minimize this sort of variability, you would want enough judges to have, _at the very least_, two judges per set (and make these judges as different as possible -- i.e., they should not come from the same background/company/etc.). Three or more would be better.

Having five groups of three judges (for fifteen judges total) would let you process the 60 teams with 10 minutes/team at (60/5) \* 10 = 120 minutes, or two hours. That's not great, but it's actually doable.

I would say an even better system would be to tier judging so that after the initial two hour round, another round of judging occurs with the top 3 teams from each of the five groups (i.e., the best 3 out of the 12 teams that each set of judges heard). Having each of these teams present to the four sets of judges that did not yet hear them would let all the judges hear all of the top 15 teams (given an additional 40 minutes). If you give the judges 20 minutes for deliberation, the total judging time would be 3 hours, the top 15 teams would be ranked, and you would have given teams enough time to actually explain their projects.

This is the sort of judging time-table that I think would be necessary to be fair (and the number of rounds of judging, number of judges per set, and presentation time of teams could be adjusted depending upon hackathon size). The downside to the above example is that you would need to find fifteen relatively impartial judges. For the organizers: I would suggest inviting company reps to be judges, emphasizing the good PR and recruiting possibilities at the hackathon, and also inviting professors from neighboring universities, your own department, and even getting grad students or advanced undergraduates (who have a wide base of knowledge) involved. The diversity of perspectives would be a good thing.


#### An emphasis on marketing ideas over original work and clean codebases {#an-emphasis-on-marketing-ideas-over-original-work-and-clean-codebases}

There's not much to this one except being harder on teams that use lots of pre-built code, forcing them to demonstrate what _they_ did, instead of what frameworks did for them. Additionally, it would be good to provide judges with a short handout explaining how the judging should _not_ proceed based on the overall strength of ideas (i.e., what they could possibly turn out to be), but on what code is actually written and operational at the end of the hackathon.

Emphasizing to teams that they should focus on their code instead of marketing ideas would also help. I don't think it would be bad to have an entirely separate competition for "best app idea" or something of the sort. It's not that app brainstorming or pitching such ideas is bad; the problem is that these things have no place at a _coding_ competition. If it's not in fact a coding competition, then it should not be labeled and promoted as such.


#### Controlling for judges having corporate bias {#controlling-for-judges-having-corporate-bias}

Give corporate judges a brief ethics checklist. Keep company reps doing company-specific prizes _separate_ from any company reps serving as general judges, so that there is no overlap and biasing.


#### Controlling for judges' previous knowledge of students {#controlling-for-judges-previous-knowledge-of-students}

As long as all of your judges aren't professors (i.e., you have company reps, grad students, and even other upper-level undergrads as judges too), this probably won't be a huge factor. Even so, it would be best, if possible, to have students list the top-three faculty members they know best when they are signing up for a school-specific hackathon, and then endeavor not to have these professors judging said students. It would be possible to do this sort of thing with a scheduling program (or write one to do it).


#### Controlling for the number of team members {#controlling-for-the-number-of-team-members}

This one is pretty straightforward. Teams with fewer people should be given a degree more leniency than teams with more people.

The reason why I am listing this separately still from the billable time (see the next section) -- which will sort of automatically take this into account -- is because of the lurking variable of domain-specific knowledge. Bigger teams are more likely to have someone who knows webdev, someone who knows SQL, someone who knows how to build multi-threaded applications, someone who knows PyQt, etc. Even aside from the number of hours worked collectively as a team, then, bigger teams have an advantage since they are more likely to have people that are already familiar with things their project might make use of.


#### Controlling for total time spent on each project {#controlling-for-total-time-spent-on-each-project}

This one seemed hard to me at first, but I was mighty impressed by the QR check-in and meal scans at the last hackathon I went to. Here's how the QR system could be used to get a pretty good estimator of student work time without it being too intrusive:

1.  Every day of the hackathon, have people scan their IDs when they check in. This is their arrival time for that day.
2.  At all hackathon workshops, have students scan their ID cards if they attend.
3.  At night, have students either scan their ID cards to get into a sleeping room, or scan them when they leave if they are going home to sleep/shower/etc.

The general idea is to take the difference between check-in and check-out times, less the time for workshops attended. Those are the "billable" hours for each student. Assuming students are eating at the hackathon, you can safely ignore the times of meals by assuming that they will be relatively stable across individuals,

To compare apples with apples, you could give judges the number of billable hours for each team, and have them take it into account when judging. The trick would be getting judges to do this objectively and impartially. The projects of teams with less billable hours _will_ be less impressive at face value; what needs to be measured is the relative amount achieved per unit time.


#### Controlling for problem complexity {#controlling-for-problem-complexity}

This one is hard, and you probably can't do much better than an average of judge heuristics. Have judges write down a number with a start:stop:step of (numJudges):(10 \* numJudges):(numJudges) to keep averaging easy. For example, if each group of judges is three people, then they would write down a number between 3 and 30 that was a multiple of 3 (so 3, 6, 9, ... 30). Then take the average of the three judges during the first judging round (e.g., (15 + 18 + 12)/3 = 15, out of 30) to get a group's complexity, and do it again for the second round of judging (it should still be a multiple of 3).

Judges should then attempt to take project complexity into account when making decisions.


#### Controlling for programming ability {#controlling-for-programming-ability}

This one would be hard to do if you did not make it explicitly clear to students that information about their programming ability was being collected to make judging more fair (otherwise the questions might be considered too intrusive). You would want to come up with a weighted formula to assign students an "ability" number. For example, let's say you collected the following information during hackathon sign-up:

-   Number of years programming
-   Number of years programming at the college level (i.e., taking college-level CS classes or some equivalent)
-   Computer Science GPA (or overall GPA if not a CS major)
-   Number of internships or other computer science work experiences done

The formula for calculating ability might be something like, e.g.

```java
(2 * (NumYearsProg - NumYearsProgAtCol)) + (4 * NumYearsProgAtCol) + (3 * GPA) + (8 * NumWorkExperiences)
```

So a student who has been programming for 10 years, 3 of them in college, with a 4.0 GPA, and 2 internships, would receive the following ability score:

```java
(2 * (10 - 3)) + (4 * 3) + (3 * 4.0) + (8 * 2)
(14) + (12) + (12) + (16)
54
```

As with billable hours, the important thing wouldn't be individual metrics _per se_, but team metrics. While I'm sure accurately getting the weighting right would be pretty hard, the above scheme would certainly help judges see if they are dealing with a team of people who should be very competent, or a team of people for whom this hackathon is one of their first big projects. Taking this into account would make judging much more fair.


#### Being rigorous about standards of code inclusion {#being-rigorous-about-standards-of-code-inclusion}

You would not need the judges to be involved in this so much as a team of volunteers who go through submitted projects and make sure code is original, flagging any projects that look suspiciously well-developed for the short time-frame.

There would be two essential types of cheaters: the ones who plagiarize the code of others (copying and pasting it off the Internet and presenting it as their own), and the ones who write code themselves beforehand, but then try to pretend like they actually wrote it at the hackathon. Bringing the ban-hammer down upon both groups would ensure that hackathons stay fair for people who play by the rules.

Of course, using libraries is a huge part of programming ([no problem should ever have to be solved twice](http://www.catb.org/esr/faqs/hacker-howto.html#believe2)). What this section is getting at isn't legitimate use of code that has already been written, but deceptive use of code.


### If forgoing winners and losers {#if-forgoing-winners-and-losers}

In my opinion, a lot of the collaborative spirit of hackathons would be strengthened by dropping the pretense that it is possible to rank people, or that doing so is even a good idea. Imagine: what if, instead of having a competition with stakes, hackathons became more like maker-spaces for code, where people of any skill level could bring their ideas, work collaboratively with others, and get help from people who might know more than them? There could still be an expo, still be workshops, and companies could even still give out prizes for their APIs. But the main competition could be replaced with something more gentle in spirit.


#### This isn't "everyone gets a trophy" {#this-isn-t-everyone-gets-a-trophy}

Removing the competition is not the same as saying that everyone is equally qualified or that experience or talent don't matter. They most certainly do.

Rather, what refocusing the hackathon around no-stakes collaboration would do is give people more a taste of open source software than industry. Open source software is all about helping each other. Industry is all about winning at the expense of others.

I'm not going to sit here and judge industry. It is very necessary for free market systems to have competition. I don't even think that closed-source software is bad or evil. Open-source and closed-source can exist side-by-side and learn from each other. It is a decidedly good thing for companies to be self-interested, as long as they are ethically self-interested (such that they are not exploitative of their workers, careless with the privacy of users, etc.).

The thing that concerns me is that many programmers seem partially or wholly unaware that another less-cutthroat side of coding exists. The entirely-software-oriented equivalent of maker-spaces. Open source software gets a lot of lip service in college, but my observation is that college programming classes are more or less preparing people to work in industry rather than contribute to open source projects. Therefore, I think hackathons could be a good way to balance out perspectives.


#### No competition is better for ongoing projects {#no-competition-is-better-for-ongoing-projects}

My initial criticism of hackathons centered around the idea that hackathons are a poor representation of how real software systems work because they emphasize short, shiny projects in lieu of complex projects and software maintenance.

Removing the incentives for marketing and "style over substance" (i.e., the ability to "win") would make hackathons inherently better for programming that mirrors reality. For example, it would be entirely feasible to organize a hackathon around squashing bugs in an open source software package, or trying to improve the documentation for software in which it is lacking.


#### No competition gives organizers more freedom and time to do other things {#no-competition-gives-organizers-more-freedom-and-time-to-do-other-things}

Pretty self-explanatory.


#### No competition reduces the amount of capital needed: no prizes {#no-competition-reduces-the-amount-of-capital-needed-no-prizes}

Organizers would be less beholden to corporate sponsors, and could do things more how they wished.


## Closing thoughts {#closing-thoughts}

None of my comments above are specifically directed at any particular hackathon or group of organizers, etc. They are simply remarks given the experiences I have had in general, and my subsequent reasoning.

I will say that a big shoutout is in order for any and all hackathon organizers and volunteers. Keep up the good work. 👍
