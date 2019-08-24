+++
title = "Rough Guide for Setting Up an SBT Project"
date = 2019-08-24T15:55:01-04:00
tags = ["workflow", "java", "scala", "git", "sbt"]
categories = ["Computers and Software"]
draft = false
+++

This post is targeted at CSCI 4370/6370 (Databases) people at UGA.

We are expected to use Java 12, SBT as a build tool, as well as JUnit for unit testing. This post touches on using Git and setting up the SBT bit.


## Git {#git}

I almost can't imagine doing a group project of the magnitude expected in this class without version control, so if you don't know basic git stuff, now is the time. I won't go into specifics, but you only need a few commands to really get started as long you don't get messy merge conflicts or have to rebase:

Initial stuff:

-   `git init`
-   `git add .`
-   `git commit -m "Initial commit."`
-   Create a repo on GitHub
-   `git remote add origin git@github.com:UserName/repo-name.git`
-   `git push -u origin master`

I also recommend [setting up an SSH key](https://www.steventammen.com/posts/ssh-keys-are-not-as-hard-as-you-think/) to streamline committing.

Typical-use stuff:

-   `git clone git@github.com:UserName/repo-name.git`
-   `git add .`
-   `git commit` (if you need to make a longer commit message)
-   `git commit -m "Short commit message."` (if you have a shorter commit message)
-   `git commit --amend` (change the last commit you made. Only use this if you catch a typo or whatever before you push)
-   `git push`
-   `git pull`

Always pull before you push. Strive to coordinate with your groupmates to always be working on different parts of files to avoid merge conflicts. Don't force push unless you have a very good reason to.


## For the person in the group making the initial commit {#for-the-person-in-the-group-making-the-initial-commit}

We need to use private git repositories for reasons of academic honesty. We get private repositories free via [GitHub education](https://education.github.com/pack). The person setting up the initial commit needs to create a `build.sbt` file in the directory they create for the project root. Here's what I would recommend:

```bash
name := "Program1"
version := "1.0"
scalaVersion := "2.13.0"
javacOptions ++= Seq("--enable-preview", "-source", "12")
javaOptions ++= Seq("--enable-preview")
fork := true
```

Note the flags. Since the skeleton code uses preview features, we have to compile and run with `--enable-preview`.

Then build the directory structure:

```bash
#!/bin/sh
mkdir -p src/{main,test}/{java,resources,scala}
mkdir lib project target
```

You should put Dr. Miller's four initial Java files in `src/main/java/`. You should also comment out the lines in his makeMap() function in Table.java that cause compilation  errors. He said we'll get to these later in the class.

You should also make a `.gitignore` file. I find it helpful to start out ignoring everything, and then only add files that you know you want version controlled. This lets everyone use whatever IDEs they want without getting directories like `.idea/` floating around in the repo when they shouldn't.

```bash
# ignore everything but .gitignore, build.sbt, README.md
# and the src/ directory
/*
!.gitignore
!build.sbt
!README.md
!/src
```

Finally, you should add a README.md file. You can update this over time with information on how to build and run (which we need to do for our submission anyway).

Then add/commit/push to a private repo, and give your groupmates access to your private repo by adding them as collaborators.


## For the other people in the group {#for-the-other-people-in-the-group}

-   Run `git clone git@github.com:UserName/project-name.git`, based on the repo your groupmate set up
    -   If they followed the above, this repo contains four things: `.gitignore`, `build.sbt`, `README.md`, and the `src/main/java/` directory (which contains the initial files Dr. Miller gave us).
-   Then create the rest of the basic directory structure with the shell script below

```bash
#!/bin/sh
mkdir -p src/{main,test}/{java,resources,scala}
mkdir lib project target
```


## SBT stuff {#sbt-stuff}

SBT seems a lot easier to use than Maven, so that's a plus.

-   It is easiest to do SBT via command line so that you don't have to worry about different IDE plugins and such across group members.
-   Download SBT from the [SBT site](https://www.scala-sbt.org/download.html). Add it to your path if it doesn't automatically get put there.
-   [Read up on the basic commands](https://alvinalexander.com/scala/sbt-how-to-compile-run-package-scala-project).
-   `cd` into your project directory, the one with `build.sbt`
-   Run `sbt` to start up the SBT shell
-   In the SBT shell, run `compile`
