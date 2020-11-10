# AfterMath

AfterMath is an over-engineered calculator written in JavaScript.

*If you're wondering why anyone would want a 100mb+ calculator app running on Electron, then this project is probably not for you.* ¯\\_(ツ)_/¯

While this app is still in relatively early development, it's entirely useable in it's current state.

# [-DOWNLOAD WINDOWS INSTALLER-](https://github.com/matdombrock/AfterMath/releases/download/0.2.0/aftermath.Setup.0.2.0.exe)

![](/Docs/screenshots/screenshot.png)

---

## Features

* Advanced text based evaluation powered by MathJS
* Multiple tabs to separate your calculations
* Powerful history features such as restoring previous equations
* Formula tools to work with percentages, dates, times, unit conversions ect.
* Fully customizable with settings and themes
* Custom user tools

*Note: Some of these features are still in development.*

---

## Installation

### Windows 

Just grab an installer from the [Releases Page](https://github.com/matdombrock/AfterMath/releases).

If you run into installation issues checkout the [Windows install help doc](/Docs/windows-install-help.md).

### macOS and Linux

I'm currently only building for windows, but you shouldn't have any issues building this for your OS!

# Usage

## Basic Usage
Enter your equation into the input field.
Your result will show below the input field as soon as one is available.
If you would prefer not to have the result update as you type, this can be disabled from the settings menu.


If your equation is not solvable you will see output looking something like this: ಠ╭╮ಠ


Getting any sort of emoticon means that the result is currently not a number (NaN). 
This is much like seeing "Syntax Error" on a classic calculator. Just more fun. 

---

## Result History
To save an your current result to the history, hit the 'enter' or 'return' key. 
This will also automatically insert your current result into the input field (much like a traditional calculator would).
If you would prefer to not have the current result inserted into the input field, you can disable the 'Update Equation' setting. 


Assuming the 'Show Advanced History' setting is on, you can:
* Load Result - Loads the result directly into input field
* Restore Equation - Restore the equation that led to this result
* Delete - Delete the item from history


If the 'Show Advanced History' setting is disabled, the only thing you can do is click history items which will restore them to the input field.

---
# More Docs

## [User Tools](/Docs/user-tools.md)
## [Basic Expression Syntax](/Docs/basic-expression-syntax.md)
## [Constants](/Docs/constants.md)
## [Simplification](/Docs/simplification.md)
## [Unit Conversion](/Docs/unit-conversion.md)
## [Development Documentation](/Docs/development.md)
## [IFAQS](/Docs/faq.md)



