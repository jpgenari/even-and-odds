# Odds and Evens



![Responsive Mockup]() 

## Features

### Existing Features

- __Feature 1__

  - Feature 1.1.

### Features Left to Implement or Future Features

- __Feature 1__

  - Feature 1.1.

## Testing

The website has been tested for its functionalities working as expected on multiple browsers and devices (mobile tested using Inspect tool).

### Workflow testing

- __Functionalities__
  
    - Functionality 1

- __Layout and Design__

[Am I Responsive?](https://ui.dev/amiresponsive?url=https://jpgenari.github.io/even-and-odds/) shows all available common layouts.

- __Tested Browsers and Devices__

    - Desktop:
      - Google Chrome
      - Mozilla Firefox
      - Apple Safari
    - Tablet *tested through Google Chrome Inspector*:
      - *iPad Air*
      - *iPad Mini*
      - *Surface Pro 7*
      - *Google Nest Hub* 
    - Mobile *tested through Google Chrome Inspector*:
      - iPhone 13 Pro (Google Chrome, Mozilla Firefox and Apple Safari)
      - *iPhone SE*
      - *iPhone XR*
      - *Pixel 5*
      - *Samsung Galaxy S8+*
      - *Samsung Galaxy S20 Ultra*

### Validator Testing

- HTML
  - No errors were returned when passing through the official [W3C validator]().
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator]().
- Javascript
  - No errors were found when passing through the official [(JS Hint) validator]().
- Accessibility
  - No error  were found when passing through the official [WAVE evaluation tool]();
  - Scored 100 for Accessibility when passing through Google Chrome Inspector Lighthouse

![Lighthouse]()


### Bugs

Bug bugs

__Solved Bugs__

- __Bug 1__
  - Solved through StackOverflow question

    - Code example with bug:
  
    ```
    <section>
        <div id="image"></div>
        <div id="text-box" class="size positioning padding">
            <h2>text</h2>
        </div>
    </section>
    ```

    - Code example fixed:
  
    ```
    <section>
        <div id="image"></div>
        <div id="text-box" class="size positioning>
            <div class="padding">
                <h2>text</h2>
            </div>
        </div>
    </section>
    ```

  - 
  
- __Bug 2__
  - solved with tutor support.
  
    ```
    .map-wrapper { /*div enclosing iframe*/
        width: 30%;
        height: 70%;
        top: 12%;
        left: 7%;
    }
    iframe {
        display: block; /*tag display: block made the width and height set on CSS control the iframe dimensions*/
        height: 100%;
        width: 100%;
    }
    ```

### Unfixed Bugs

  - There are no unfixed bugs. 

## Deployment

- The website was deployed to GitHub pages. Follow below the stops taken:
  - In the GitHub repository, navigate to the Settings tab;
  - Go to the Pages settings, and under Source select on the drop-down menu, select the Main Branch and save;
  - After saving, hold on a little bit and the page will automatically refresh with the available url and a button to visit site.

The live link can be found here - <https://jpgenari.github.io/even-and-odds/>

## Credits

### Content

- The webside base code was created based on the [CI Love Running](https://github.com/Code-Institute-Solutions/Love-Running-Solutions) project - header, hero section and footer used the project's base code then edited to fit Gaming Buddies needs;
- The icons used on the website were taken from [Font Awesome](https://fontawesome.com/search?o=r&m=free) free icons;
- Solution for the fixed header and footer taken from [Tutorial Republic](https://www.tutorialrepublic.com/faq/how-to-create-fixed-header-or-footer-using-css.php#:~:text=Answer%3A%20Use%20CSS%20fixed%20positioning,bottom%20of%20the%20viewport%20accordingly);
- Solution for the "inset" tag for positioning from [Stefan Judis](https://www.stefanjudis.com/today-i-learned/inset-is-a-shorthand-for-top-right-bottom-and-left/#:~:text=inset%20is%20a%20shorthand%20that,know%20from%20margin%20%2F%20padding%20declarations);
- Solution for the iframe with dynamic size from [Tutorial Republic](https://www.tutorialrepublic.com/faq/how-to-create-a-full-screen-iframe-with-100-percent-height.php#:~:text=You%20can%20simply%20set%20the,height%20and%20width%20of%20100%25);
- Solution for favicon on GitHub Pages deployments from [iTecNote](https://itecnote.com/tecnote/html-favicon-with-github-pages/).

### Media

- The images used on sections hero, Who we are and Join us! were taken from [Pexels](https://www.pexels.com/);
- The image used on section meet up was taken from [Unsplash](https://unsplash.com/).
