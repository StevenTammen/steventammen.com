---
title: Decision Analysis
date: 2020-08-02T11:20:48-04:00
categories: ["Productivity and Efficiency"]
tags: []
inprogress: true
---

## The hidden complexity of life

It is a common occurrence in life to need to select between two courses of action, two products to buy, and so forth. While winging things works in some circumstances, as soon as things get complex, its effectiveness falls off a cliff and drowns miserably. So too with the slightly more considered “going with your gut” approach.

Even the most seemingly straightforward things become excessively complex once you peel back the layers. For example, did you ever have to do that problem in high school physics where you map all the forces acting on a ball rolling down a ramp? Some of the forces seem pretty straightforward: gravitational force, normal force. Then there’s the frictional force that depends upon the coefficient of dynamic friction, which may change instant to instant based on minute surface imperfections in the ball and the ramp. And then consider air resistance, which is typically ignored even in calculus-based introductory mechanics since it adds so much complexity. And how about the fact that wind is a force, even if negligible in most circumstances? Oh, and technically speaking, the mass of the sun and even faraway stars exert gravitational forces on the ball (not to mention the ramp and Earth itself) during the ball’s travel. Eh, what’s this—you thought the ball was perfectly spherical? Well, as gravity presses the ball into the ramp, the ball deforms slightly (or more noticeably depending upon the material composition and mass distribution of the ball), which affects such things as the ball’s rotational inertia. And let’s not forget that this deformation will be affected by temperature-driven thermal expansion and contraction (cf. car tires having higher pressure in hot weather than cold weather).

You get the idea. Of course, we don’t tell all this to the poor physics students who are already having problems adjusting the gravitational force vectors based on the angle of the ramp (now do we use gsin(θ) or gcos(θ) here…?)—we would make their heads explode. Nonetheless, when they box their answer on their test and their teacher marks it as correct, what is really going on is a convenient simplification of reality.

In like manner, most of life works on similar convenient simplifications. It would be terribly impractical to try and always be thinking about things as they truly are. Most of the time it is in fact the proper approach to filter out the excessive complexity of literally everything in life to focus on the big important stuff (life's equivalents to gravity and normal force in our example).

When we have to make decisions of any intricacy, however, it helps to pull in a bit (and may I again emphasize, *A BIT*) of the complexity to compare things as they actually are. Doing so in a systematic way—being objective and analytical, seeing more of the things in play without losing sight of the fact that some simplification is always prudent—is the key to making good decisions in a consistent and repeatable fashion. The rest of this page describes my particular approach to these matters, but of course, your mileage may vary.

## The idea of scores based on weighted metrics

### Cost benefit analyses

You may have heard the term “cost-benefit analysis” (CBA) used. In short, every action carries with it bad things (cost) and good things (benefit). When making decisions the goal is to minimize cost and maximize benefit to obtain a favorable outcome. A subset of cost is called opportunity cost—what you give up by choosing some specific action over another. (More precisely, opportunity cost is the value of the forgone option with the highest overall value, if there was more than one alternative).

### Positive and negative forms of metrics

When running quantitative comparisons (conducting CBAs), it is possible for all the areas of comparison (henceforth “metrics”) to define each either in terms of cost or benefit. For example, consider bicycle weight. Lighter bicycles are considered better. We could define a metric for weight either in terms of “heaviness” (cost) or “lightness” (benefit). Let’s say we choose to go with “lightness.” Next consider durability. More durable bicycles are considered better. We could define a metric for durability either in terms of “fragility” (cost) or “durability” (benefit). Let’s say we choose to go with “fragility.”

We now run into a problem. When we define all metrics in terms of cost, lower scores are better (so products with scores near zero are the most optimal). When we define all metrics in terms of benefit, higher scores are better. So what happens when you try to mix the two?

In theory, you could make it work: add points for benefits, subtract points for costs, whatever ends up with the highest (or even least negative) score wins. As long as you consistently apply weighted metrics (i.e., score all options by the same scoresheet), it would seem that you would have good comparative power no matter how you run the CBA.

However, quantitative comparisons get trickier. When everything is in terms of benefits (positive scores), for example, it is easy at a glance for us humans to understand more or less the relative capabilities of a bike that scores 100 vs. a bike that scores 250. Everything in terms of costs functions much the same way, although I would argue that it is more difficult to get one’s brain on board with the idea that lower scores are better. Whether by nature or nurture (i.e., greater exposure to benefit-based scoring throughout our lives), it seems to me that we are, to some degree, inherently hardwired toward seeing higher scores as better.

All this aside, let’s say we ended up using our metrics of lightness and fragility to compare a bike made out of hollow carbon and a bike made out of solid glass. The bike made out of carbon is both light and strong, so receives a high score in lightness and receives a small penalty for fragility. The glass bike, on the other hand, receives a very poor score for lightness (it’s not hollow but solid—not to mention the relatively high density of glass), and also receives a very large penalty for fragility. Let’s say the carbon bike ends up with +100 for lightness and -10 for fragility, while the glass bike ends up with +5 for lightness and -80 for fragility. Then our scores are 90 for the carbon bike, and -75 for the glass bike. How many times better is the carbon bike than the glass bike, given our scores? (...Not so obvious, eh?)

### My conclusions

Now, some people may say “Oh, well, let’s just make sure we use mostly benefit forms in our metrics, and then we can have a few costs here and there, but still end up with positive scores that are easy to compare.” Well, what happens if one of the costs is weighted very highly? What happens if you only want to compare options on a subset of the metrics (a very common occurrence, e.g., in determining “safety” or “cost-effectiveness,” etc.) and end up with a mix that leads to some options scoring negative? (Also, there is the general principle that consistency is a goods thing).

For all these reasons, I favor scoring all one way in CBAs, and favor scoring everything in terms of benefits, since I think it is more intuitive for most people. It also happens to be how engineers think in design: designing towards positive goals iteratively. Very rarely will you hear design goals written negatively: “Let’s make sure our airplane’s airframe is not heavy, not weak, not difficult to maintain, and not expensive to produce at scale!” Why? Because again, it’s just not how we as humans tend to naturally think.

So there you have it. CBAs on this site use only the benefit form of metrics, and all scores will be positive and easy to compare.

## The idea of requirements

### TODO: How requirements interact with weighted scoring

Narrowing the field of possible workable options; knocking things out of the score comparison right up front.

## TODO: Spreadsheets

Once I get into the nitty-gritty of a couple actual decision analyses, I’ll flesh out this section and my process more.
