---
title: Learning programming - only what you really need
date: 2021-06-19
categories: ["Software"]
tags: ["education", "learning", "career-prep", "python", "git", "vscode"]
weight: 
inprogress: false
---


## 27: Starting to set up a local development environment - Python in VSCode

### Video

{{% video
src="https://www.youtube.com/embed/S0bxBX6ZBWE"
playlist="https://www.youtube.com/playlist?list=PLQ-N5KyJUu_VqG38oglZEEw17b_ZQ13On"

video="https://archive.org/details/swt-27-starting-to-set-up-a-local-development-environment-python-in-vscode-video"

audio="https://archive.org/details/swt-27-starting-to-set-up-a-local-development-environment-python-in-vscode-audio"

slides="https://www.steventammen.com/slides/pages/learning-programming-only-what-you-really-need/27-starting-to-set-up-a-local-development-environment-python-in-vscode"
%}}

### Summary

One of the most intimidating parts of starting out on one's journey of learning programming can be setting up a development environment: getting a programming language installed, a text editor, a package manager, and so on. It never quite becomes pleasant, but over time, you get kind of used to dealing with annoying configuration errors, and learn how to solve them. But when things don't work right when you're a beginner... it can be tempting to just give up there.

In an attempt to head off such problems, it is my opinion that it makes sense to have an experienced software developer help you set things up the first time through. Along these lines, in this video I use Chrome Remote Desktop (a free tool that lets you remotely take control of someone else's computer, with their permission of course) to help my friend set up a development environment for Python in Visual Studio Code (VSCode), a popular free text editor.

### Timestamps

{{% content %}}

### Content

#### Chrome remote desktop

- Setting it up, figuring out how to use it, etc.
- One of the options for letting someone else remotely control you computer. Great for IT help for friends and family too, if you have become a go-to computer help person. (OTOH, if you hate constantly getting roped into helping people with their computers, you may not want to tell people of this option!)
- Makes it easiest to get a new developer set up, since someone experienced can run through the setup steps directly. Installing and configuring things can be a larger barrier than first apparent to getting new developers up and running, and it can be really discouraging to want to learn programming hands-on only to get blocked for hours or days by obscure configuration-related errors. (New people don't have as much general debugging/troubleshooting experience either, making these errors a bigger deal for them than for seasoned veteran programmers who will just shrug and instantly Google them).
- Package management and configuration management are some of the most unpleasant parts of software engineering, IMO. Having people start with them is thus less than ideal.

<!-- --- -->

#### Command line basics

- No need to spend lots of time getting into messy details regarding operating systems and shells, etc. For our purposes, we'll just start by navigating around the file system on the command line.
- Three starting commands:
  - ls
  - cd
  - clear

<!-- --- -->

#### Package managers

- Let you manage and update software from the command line
- Popular with software developers for managing development packages and frameworks, and really shine there. Many also support normal applications too (like browsers, text editors, etc.).
- Can be scripted like all other command-line programs, but also support updating all installed software at the same time in bulk (so they are already inherently advantageous relative to many other installation management approaches). Manual update wizards can be a thing of the past.
- For example: Chocolatey on Windows, Homebrew on Mac, various on Linux (e.g., `apt` on Ubuntu)
- https://community.chocolatey.org/courses/installation/installing?method=install-from-powershell-v3

<!-- --- -->

#### Downloading Python with package manager

- https://community.chocolatey.org/packages/python
- Automatically grabs the most recent version, sets up environment variables properly.
- I don't remember if the Python .exe/.msi GUI installer wizard makes everything "just work" out of the box (PATH environment variable, etc.), since I've installed Python via `choco` on the last several computers I've worked on. Maybe?

<!-- --- -->

#### System environment variables, PATH

- Environment variables for an operating system are kind of analogous to variables that live within a function's scope.
- You can only run executable files that are "on your PATH" = specified in the system environment variable called PATH. It is a list of file locations that are (or contain) executable files = programs that can be executed.
- A common gotcha that can cause issues is that after installing something in a shell, you have to either reload environment variables with a command or exit out of the shell and open a new instance for the PATH environment variable to get updated after you install something. Otherwise the shell will say that it can't find the new thing that you want to run.

<!-- --- -->

#### Text editor: VSCode

- Text editors with good plugin support and Integrated Development Environments (IDEs) proper are more-or-less interchangeable nowadays. IDEs (or the text editor plugins that have "IDE-like" functionality) statically analyze all the code in your project and let you do some useful things like renaming a variable everywhere in your codebase, or jumping to where a function is defined, even if it is in a different file from the one you are presently in.
- Using something that lots of other people use means good plugin support and good out-of-the-box defaults. So I'd recommend that most people use something that is pretty popular and well-maintained.
- I use VSCode (https://code.visualstudio.com/) professionally in my job, and I think it's pretty great.
- We'll go over some recommended plugins and such later, as well as useful hotkeys

<!-- --- -->

#### Python in VSCode

- Install the Python plugin and its related things (PyLance). On top of syntax highlighting and so on, lets you jump to functions and packages instantly, which is useful.
- https://code.visualstudio.com/docs/python/python-tutorial
- You might compare this setup with a full-on Python IDE like PyCharm (https://www.jetbrains.com/pycharm/)

{{% /content %}}

{{% transcript %}}

### Video transcript

{{% /transcript %}}



## 28: Python virtual environments, VSCode launch configurations, packages w/ pip and requirements.txt

### Video

{{% video
src="https://www.youtube.com/embed/BUzCErp4dUI"

playlist="https://www.youtube.com/playlist?list=PLQ-N5KyJUu_VqG38oglZEEw17b_ZQ13On"

video="https://archive.org/details/swt-28-python-virtual-environments-vscode-launch-configurations-packages-w-pip-a"

audio="https://archive.org/details/swt-28-python-virtual-environments-vscode-launch-configurations-packages-w-pip-a-audio"

slides="https://www.steventammen.com/slides/pages/learning-programming-only-what-you-really-need/28-python-virtual-environments-vscode-launch-configurations-packages-w-pip-and-requirements-txt"
%}}

### Summary

In this video, we continue to work on setting up a local Python development environment in VSCode.

We talk about the concept of virtual environments (sandboxing packages per-project). We also talk about how to set up a launch configuration in VSCode to be able to always launch from your project's main file, no matter what file you might otherwise be presently editing.

After this, we get into packages in Python, discussing the Python package index (https://pypi.org/), the `pip` package manager for Python, and how you can use `pip` to save a list of your project's packages (in a file conventionally called `requirements.txt`) to make installation of your application easier in the future (and also stable = independent from breaking changes in updated package versions).

We also install Git, a version control tool, which we'll work on setting up more next time.

### Timestamps

{{% content %}}

### Content

#### Our bug from yesterday: a Vim browser extension

- If anyone else uses Chrome Remote Desktop with Vimium active, you have been warned!

<!-- --- -->

#### Python virtual environments (in VSCode)

- Virtual environments at a high level -- sandboxing project packages so that they don;t interfere with each other
- In VSCode specifically: https://jasonmurray.org/posts/2020/vscodepythonvenv/
- In the integrated terminal, run:
  - `python -m venv .venv`
  - And then `./.venv/Scripts/activate` to activate the virtual environment

<!-- --- -->

#### Setting up a launch configuration in VSCode

- https://code.visualstudio.com/docs/python/debugging#_set-configuration-options

Example:

```json
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "configurations": [
        {
            "name": "Preprocess",
            "type": "python",
            "request": "launch",
            "program": "main.py",
            "console": "integratedTerminal"
        }
    ]
}
```

<!-- --- -->

#### Python packages, the Python package index, and pip

- https://pypi.org/
- https://www.w3schools.com/python/python_pip.asp
- `pip` is a package manager for Python, just like `choco` is a package manager for Windows.

Example:

- Let's say you want to build a URL from a file path. URLs don't have spaces (conventionally), and usually follow a specific format. To get strings in a format, we can download a package and use it: https://pypi.org/project/python-slugify/

<!-- --- -->

Let's say we had a simple program like the following

```python

import slugify

def make_url(input_string):
  return slugify.slugify(input_string)

```

You can also just import the function directly (`from slugify import slugify` = in the format of `from module_name import function_name`), and then you don't need to worry about the module name when invoking the method.

<!-- --- -->

#### Package dependencies at the project level, requirements.txt

- It's not as hard as you might think
- https://note.nkmk.me/en/python-pip-install-requirements/
  - First: `pip freeze > requirements.txt`
  - Then when installing your program somewhere else: `pip install -r requirements.txt`

<!-- --- -->

#### Preview: Git (with Git bash), SourceTree, and GitHub (remote repository host)

- Git is a version control system. There are other options too, but Git is probably the most popular.
- Version control systems track the changes you make to files over time, and are absolutely essential to the software development process, especially when working on a team of developers.
- Today we will just be downloading and setting up a couple tools. We will get into specifics in our next lesson

{{% /content %}}

{{% transcript %}}

### Video transcript

{{% /transcript %}}
