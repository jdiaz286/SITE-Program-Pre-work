# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Jonathan Diaz**

Time spent: **6** hours spent in total

Link to project: (https://glitch.com/edit/#!/cuddly-rattle-angora)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Show how many tries the user has left on the screen when the game starts
- [x] Give the player more time if they get the right sequence, 5 extra seconds per correct sequence
- [x] Assign time to solve based off of the pattern produced, number of patterns * 7
## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://cdn.glitch.com/1c103263-96f6-4a88-a026-5298846e2e15%2FJonathanDiaz_PreWork.gif?v=1615665957947)
![](https://cdn.glitch.com/1c103263-96f6-4a88-a026-5298846e2e15%2FJonathanDiaz_PreWork_timeUp.gif?v=1615666123634)
In the gif above I paused the recorder until the time was almost up, there is not a bug in the timer.


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
    * https://www.sessions.edu/color-calculator/
    * https://www.rgbtohex.net/
    * https://www.w3schools.com/

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
    * I personally did not have a difficult time in creating the basic design for this submission. I had worked with a bit of HTML and CSS in high school, so it was easy for me
to understand the design aspect of the program. The same can be said for the JavaScript methods, I had some prior experience working with JavaScript 
so, I didn't take long to follow the objective of the program. However, I did take some time to debug the extra features that were implemented, especially the timer. When I
loaded up the site I would receive the "times up" window without pressing start/stop. I ended up looking at all my methods and hand tracing to see if there was an error with my logic. To fix this I ended up creating a variable to track how many times the game had been played, 
if the game had been played 0 times then the error message wouldn't show up. Now the "times up" screen shows after the user has hit the start button at least one time. Overall, the experience was fun because I had not really visited HTML in a while, it was great to get a quick refresher on how to make a site using HTML, JavaScript, and CSS.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
    * After completing the project I began to wonder how a programmer can make their website secure. Not only that but, how can a web developer "update"
    their website after publishing it online. Another question that came up, and one that was quite important in my opinion, was how do programmer’s debug
    their code when working in groups of 2 or more people? I was debugging my code and it was easy because I knew where I placed everything, but the thought 
    of how it would be to debug code written by others seemed interesting to me.


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
    * If I had more time and I had fewer assignments for my college classes I would have liked to turned in a submission where I could take in the user input and 
how many buttons they would like, to challenge themselves more. For example, if a person were to type in 10 and hit start the program would create 10 buttons
and organize them in a way where they would still fit into the page. This would also mean that I would also have to choose 10 colors and find their "light version" as
well as find a way to label them, as of the moment I am writing this I belive it is possible by using a data structure such as an array or arraylist and label the buttons
based off of their index.



## License

    Copyright Jonathan Diaz

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.