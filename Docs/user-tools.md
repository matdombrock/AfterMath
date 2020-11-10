# User Tools
AfterMath supports custom user tools to preform simple (or complex) calculations. 

To create custom user tools, make a new file at `~/.aftermath/tools.js`. 

Tools have a basic structure and syntax that is hopefully easy to follow.

Here are a few example tools to get you started:

```json
{
  // A basic tool example
  // Adds two values together
  "user-tool-example":{
    "name": "Basic User Tool Example",
    "description": "What is {{a}} + {{b}}?",
    "output": "{{output}}",
    "variables": {
      "a": {
        "default": 1,
        "description": "The first value."
      },
      "b": {
        "default": 2,
        "description": "The second value."
      }
    },
    "formula": "a + b"
  },
  // Another tool example
  // Calclates the hypotenuse length of a right triangle with known side lengths
  "pythagorean-theorem-c":{
    "name": "Pythagorean Theorem C",
    "description": "What is the hypotenuse length of a right triangle with known side lengths {{a}} & {{b}}?",
    "variables": {
      "a": {
        "default": 50,
        "description": "Known side one."
      },
      "b": {
        "default": 100,
        "description": "Known side two."
      }
    },
    "formula": "sqrt(a^2 + b^2)"
  },
  // Yet another tool example
  // Calculates the speed of an object in KMPH
  "speed-example":{
    "name": "Speed Example",
    "description": "If an object is moving at a rate of {{distance}} km/{{time}} hours, what is its speed?",
    "output": "{{output}} kmph",
    "variables": {
      "distance": {
        "default": 60,
        "description": "The distance traveled in kilometers."
      },
      "time": {
        "default": 2,
        "description": "The time it took to travel in hours."
      }
    },
    "formula": "distance/time"
  }// No Trailing Commas!
}
```

Notes:
* Currently tools are NOT VALIDATED. This means the app will attempt to load anything you give it wether the tool is valid or not. Most of this time this won't cause major problems, but it could and this feature should be considered experimental at this point. 
* Make sure your `tools.js` file is valid JSON and contains no trailing commas. 
* After enabling custom user tools in settings, you might have to restart AfterMath or click the "Reload User Tools" button to get your tools to show up. You can also click the "Reload User Tools" button at any time to do as the name implies.
* Custom user tools will show near the end of the list and will start and end with a ☆ character. 
* Variables can be used by entering their name surrounded by double curly braces on either side like this: `{{variable_name}}`.
* Variables can be used in the `description` and will automatically update as the user enters data.
* Tools can contain any amount of variables. 
* The `{{output}}` variable is special auto generated variable that will contain the tools output value.
* The `description` property can only contain the special `{{output}}` variable and no other variables. It can however contain other words and characters.
* This is the same system used by internal (built-in) tools with the exception of the special array tools.