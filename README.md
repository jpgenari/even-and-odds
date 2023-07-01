# Odds and Evens

Odds and Evens is a game developed with two main objectives: provide a quick gaming session to its users when they are in the middle of a quick break, either from working time or studying session - targeting adults and children.

The game proves itself as good tool for a quick stress relief allowing users to play against the Cpu. Users opt between odds and evens, then pick up a number between 0 to 5, representing their own hands for their game-play. From there, the Cpu generate a completely random number within the same range. The game result is based on the sum of both numbers, which are always either an odd or even number. Based on number type, if it matches user's opted number, user wins otherwise Cpu wins.

While playing, the users will also learn how to play the game, which can be used as a decision making tool, especially amongst friends, to determine who get the last cookie, for example. Users can either use the game itself or learn their own hands to play.

[Odds and Evens](https://jpgenari.github.io/even-and-odds/)

![Responsive Mockup 1](/assets/images/readme-am-i-responsive-1.png)
![Responsive Mockup 2](/assets/images/readme-am-i-responsive-2.png)

## Features

### Existing Features

- Header
  - Located at the top of the page, the header features the game name **Odds and Evens** followed by an simple icon representing playing with hands by showing the victory signal. The game name is presented in a easy readable font and using colour with high contrast with footer background colour.
  - Clicking on the game name leads users back to the initial page also exiting the game.

    ![Header](assets/images/readme-header.png)

- Instructions Container
  - Featured centralized in the page, this is the initial screen users see. It contains the **start** button, the **initial image** and the **how to play** section. This section is hidden when the game starts, being replaced by the *Game Container* we will see further below.

    ![Instructions](assets/images/readme-instructions.png)

    - **Start** button: this is the first element seen inside the container, being placed even before instructions. This positioning is intentional, as odds and evens game is a well-known game world-while, the game uses a minimalist UI to allow user to start playing straight away. The button changes its colour when hovering over it, featuring a slight transition and when clicked, takes users to the game itself.

      ![Start](assets/images/readme-start.png)

    - **Initial image**: featured in the middle, this section contains an image displaying two closed hands 'facing' each other, the typical position users do before playing an odds and evens game. This design aims make users either recognise the game or to start learning how to play it.

      ![Initial Image](assets/images/readme-initial-image.png)

    - **How to play**: section: the third element, contains straight forward instructions about how to start the game and following up actions users should take. These instructions are focused only on the actions users need in order to play, not specific rules, as these will be displayed inside other elements. This design is made to push users to interact with the game,  teaching them along the way.

      ![How to Play](assets/images/readme-how-to-play.png)

- Game Container

  - The game container is hidden when the game starts and it is displayed when users start the game by pressing/clicking *start* on the previous screen. This is where the game takes places and it features odds and evens **option** buttons, **number** buttons from 0 to 6, the **game image**, the **results** section and the **exit** button.

    ![Game Container](assets/images/readme-game-container.png)

    - **Option** buttons: these are the buttons where users opt if they want either odds or evens for their game-play. As the option is required to play, the *number buttons* will be available only after users pick their option. The buttons feature the same animation detailed above for the *start* button, however, the option buttons are also highlighted when clicking, in order to show users which option they picked and the selected button will maintain this status until users pick different option. This allows multiple rounds to be played without the need to click on the option every single time - if users wish to continue playing with the same option.

      ![Option](assets/images/readme-option-buttons.png)

    - **Number** buttons: the are the buttons where users pick the number they want to use with their hand in the game-play, from 0 (closed hand) to 5 (open hand, with 5 fingers) and which will represent half of the final sum. As previously mentioned, these buttons are not available until user picks their option. They also feature the same animation as previous *option button* and when clicked, they are highlighted showing users the number they are using. Also, picking the number triggers the game animation to start as described below in the *game image*, and users can continue playing upon picking a number again.

      ![Number](assets/images/readme-number-buttons.png)

    - **Game Image**: this section will feature images of two hands, at left representing the users' number and at right representing Cpu's number (generated randomly). Each round, as soon as users pick their number, an animation will start showing both closed hands shaking, simulating the movement made when playing the game in real life. When the animation ends, each hand will show each number (users' and Cpu), with closed hand representing 0, and open fingers representing the number and final results will be displayed. While the animation runs, users won't be able to click on the *number buttons* to avoid game errors. The animation is designed to dynamic to the game and to make users feel the game is running and give them the feeling of the unpredictable outcomes.

      ![Game Image](assets/images/readme-game-image.png)

    - **Results**: in this section users will see the game results each time they play. This section contains two main strings, the first one display a message 'Waiting...' while game animation runs which will be replaced by a message showing the final number (sum of the total seen fingers or numbers), telling users if the number is odd or even and letting them know who wins the round. The second string holds the scores, displaying users' number os wins and number of played rounds - loses are not directly counted, however user can keep score of it through rounds played. The information displayed in this section complements the *how to play* section, showing to the users as they go, how the rules work.

      ![Results](assets/images/readme-results.png)

    - **Exit**: this button leads user to the initial screen, exiting the game. It also displays the same animation as previous buttons.

      ![Exit](assets/images/readme-exit.png)

- Footer

  - Located at the bottom of the page, the footer features a 'hint' that work alongside other elements in the game to show users how to play the game and its rules.
  - It also includes information about the game developer, displaying a message the game has been developed by code student alongside relevant social network links leading to developer's GitHub and LinkedIn profiles. The links will open to a new tab to allow easy navigation for users.

  ![Footer](assets/images/readme-footer.png)

## Features Left to Implement or Future Features

### Scoreboard

- Implement a scoreboard allowing users to register their scores alongside a name chosen by them to compare their top win/rounds ratio with themselves and friends. To implement this feature, it will be necessary building a database to store the history.

## Testing

- The game has been tested on different browsers for both desktop and mobile: Chrome, Firefox, Safari and DuckDuckGo.
- It has been confirmed all game results work as expect and they are always correct.
- It has been confirmed that header, options, buttons, instructions, results and footer text are all readable and easy to understand by users.
- Confirmed all colors and fonts chosen are easy to read and accessible by running Lighthouse in dev tools and Wave accessibility tool.

  - Lighthouse (desktop and mobile)

    ![Lighthouse desktop]()
    ![Lighthouse mobile]()
    ![WAVE](/assets/images/readme-wave.png)
  
### Workflow testing

- Functionalities  
  - Website loads showing its landing page or start page: it shows its header, instructions container and footer - header and footer do not change when playing the game;
  - Hovering over start button highlights it indicating action;
  - Footer displays two social network buttons which, upon clicking they open respective social networking on a new tab;
  - Clicking on start button leaves (or hides) game instructions and opens game container;
  - Hovering over ODDS and EVENS buttons highlight them, indicating action and when clicked they stay highlighted indicating selected option, changing only when new option is selected;
  - At this point, numbers buttons are inactive, hovering and clicking are disabled as the game required first the option to be picked. Once the option is picked, number buttons are active;
  - Hovering over numbers highlight them, indicating action and when clicked they stay highlighted indicating selected number, changing only when new number is selected. Picking a number triggers game animation;
  - Animation shows two closed hands shaking, simulating hands movement when playing the game. When done, it shows game results with each played number (user's and Cpu's) through the hands showing fingers 0 to 5 - while the animation runs, number buttons are disabled;
  - Alongside results, game shows a string of text showing the final number (user's and Cpu's sum up) telling if final number is odd or even and the winner - user or Cpu;
  - Wins are summed up to the score section alongside number of rounds played (showing how many times the game was played);
  - Clicking on exit leads user back to landing page exiting the game. The same outcome is available when clicking on the game's name at the top.

- Layout and Design

  [Am I Responsive?](https://ui.dev/amiresponsive?url=https://jpgenari.github.io/even-and-odds/) shows all available common layouts.

- Tested Browsers and Devices

  - Desktop:
    - Google Chrome
    - Mozilla Firefox
    - Apple Safari
    - DuckDuckGo
  - Tablet *tested through Google Chrome Inspector*:
    - *iPad Air*
    - *iPad Mini*
    - *Surface Pro 7*
    - *Google Nest Hub*
  - Mobile *tested through Google Chrome Inspector*:
    - iPhone 13 Pro (Google Chrome, Mozilla Firefox, Apple Safari and DuckDuckGo)
    - *iPhone SE*
    - *iPhone XR*
    - *Pixel 5*
    - *Samsung Galaxy S8+*
    - *Samsung Galaxy S20 Ultra*

### Validator Testing

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjpgenari.github.io%2Feven-and-odds%2F).
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fjpgenari.github.io%2Feven-and-odds%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en).
- Javascript
  - No errors were found when passing through the official [(JS Hint) validator](https://jshint.com/).
  - There are a total of 40 warnings shown in JSHint, 38 warnings related related to variable 'let' only available on ES6 (esversion: 6); 1 warning related to 'trailing comma in argument lists' only available on ES8 (esversion: 8); and 1 warning related to 'function declared within a loop referencing outer scoped variable leading to confusing semantics' which is not an issue considering the small project size.
    ![JS Hint](/assets/images/readme-jshint.png)
- Accessibility
  - No error  were found when passing through the official [WAVE evaluation tool](https://wave.webaim.org/report#/https://jpgenari.github.io/even-and-odds/);
  - Scored 100 for Accessibility when passing through Google Chrome Inspector Lighthouse.
  ![Lighthouse]()

### Bugs

- In development stage, multiple minor bugs were noticed, most of them while creating functions and styling. However, 2 bugs stood out.

- Solved Bugs
  - Function returning same value with assign event listener to buttons
    - After implementing solution to make [If/Else statement execute with event listener inside](https://stackoverflow.com/questions/48167887/if-else-statement-not-executing-correctly-with-event-listener-inside-javascript), the functions getUserOption() and getUserNumber() were still returning the same value. The bug was taking place due to two semicolons misplaced in the code (after 'btn-evens' condition and after 'btn-5' condition). The but was solved with the help of [Stack Overflow community](https://stackoverflow.com/questions/76551168/functions-returning-same-value-even-with-assigned-event-listener-to-the-buttons).

    - Code example with bug:

      ```text

      function getUserOption(userOption) {
      let userResult;

      if (userOption === 'btn-odds') {
        userResult = 1;
      } else if (userOption === 'btn-evens'); {
        userResult = 0;
      }}

      function getUserNumber(userNumber) {

      let userNumberSelected;

      if (userNumber === 'btn-1') {
        userNumberSelected = 1;
      } else if (userNumber === 'btn-2') {
        userNumberSelected = 2;
      } else if (userNumber === 'btn-3') {
        userNumberSelected = 3;
      } else if (userNumber === 'btn-4') {
        userNumberSelected = 4;
      } else if (userNumber === 'btn-5'); {
        userNumberSelected = 5;
      }}

      ```

  - **Game animation not working**
  
    - When implementing the game animation, initially it was not working as the implemented target was not working. This animation works throughout CSS and Javascript. Animation starts when class 'start' is added to the element and ends when the same class is removed by Javascript function. The bug was taking place due to the element 'img' being nested inside an element 'span'. This was fixed by replacing the 'span' tag for a 'div' element which allowed the target from CSS act over the element as expected. This solution has been provided by **Code Institute Tutor Support**.
  
    - Code example with bug:

      ```text

      <div id="result-images">
        <span class="user-image"><img src="assets/images/0-finger.webp" alt="Closed hand showing no fingers" id="user-image"></span>
        <span class="cpu-image"><img src="assets/images/0-finger.webp" alt="Closed hand showing no fingers" id="cpu-image"></span>
      </div>

      ```

### Unfixed Bugs

- There is minor bug that sometimes happens, causing images with final results to be milliseconds delayed after animation finishes. It only happens when the images are displayed for the first time which indicates this is related to image loading time - after first load and saved in cache, the bug no longer is seen. But also does not take place when running locally, not deployed.

## Deployment

- The game is deployed to GitHub pages. Follow below the stops taken:
  - In the GitHub repository, navigate to the Settings tab;
  - Go to the Pages settings, and under Source select on the drop-down menu, select the Main Branch and save;
  - After saving, hold on a little bit and the page will automatically refresh with the available url and a button to visit site.

- The live link can be found here - <https://jpgenari.github.io/even-and-odds/>

## Credits

### Content

- Game code was inspired by [Love Maths](https://github.com/Code-Institute-Solutions/love-maths-2.0-sourcecode/tree/master) project - events listener structure with 'data-type' and results functions built based in the project's.
- Game design and animation styling were inspired/taken from [ULTIMATE Rock Paper Scissors](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+JSE_PAGPPF+2021_Q2/courseware/30137de05cd847d1a6b6d2c7338c4655/c3bd296fe9d643af86e76e830e1470dd/) project portfolio scope and [Rock Paper Scissors](https://www.codingnepalweb.com/rock-paper-scissors-game-javascript/) game.
- The icons used on the game were taken from [Font Awesome](https://fontawesome.com/search?o=r&m=free) free icons;
- The fonts used on the game were taken from [Google Fonts](https://fonts.google.com/);
- Favicon used on the game was generated in [favicon.io](https://favicon.io/);
- Solution to execute If/Else statement with event listener inside was taken from [Stack Overflow](https://stackoverflow.com/questions/48167887/if-else-statement-not-executing-correctly-with-event-listener-inside-javascript) question.
- Solution to insert images with Javascript was taken from [Quora question](https://www.quora.com/How-do-you-insert-an-image-in-Javascript);
- Solution for setTimeout() was taken from [w3Schools](https://www.w3schools.com/jsref/met_win_settimeout.asp);
- Solution for activeOptionButton() and activeNumberButton() functions was taken from [SoftAuthor](https://softauthor.com/make-selected-clicked-button-active-in-javascript/);
- Solution for enableNumberButtons() and disableNumberButton() functions taken from [Stack Overflow question](https://stackoverflow.com/questions/53242127/disabling-multiple-buttons-with-the-same-class-attribute-but-different-ids), [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events) and [bobbyhadz blog](https://bobbyhadz.com/blog/javascript-remove-class-from-multiple-elements);
- Information about Arrow Functions was taken from [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions);
- Information about how to convert Arrow Function to regular function was taken from [StackExchange](https://superuser.com/questions/1721957/how-to-convert-arrow-function-to-regular-function);
- Styling solutions for shadow box, header and footer positioning and handling images with CSS were taken from [Web Dev Simplified video](https://youtu.be/riDzcEQbX6k), [CSS-TRICKS - A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/), [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotateY) and [30 seconds of code](https://www.30secondsofcode.org/css/s/footer-at-the-bottom/#:~:text=This%20is%20done%20by%20setting,and%20flex%2Ddirection%3A%20column%20.);
- Some debugging performed with support of [ChatGPT](https://chat.openai.com/).

### Media

- The images of the hands were taken from [Shutterstock](https://www.shutterstock.com/) with free trial plan.
