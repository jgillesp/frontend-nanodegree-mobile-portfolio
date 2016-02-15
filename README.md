## Jenn's Mobile Portfolio

To build

Install dependencies.

`$ npm install`

Build production code using grunt.

`$ grunt`

To run

`$ cd dist`

`$ python -m SimpleHTTPServer 8080`

Then visit `http://localhost:8080` in your favorite browser!

You can check out the deployed version [on github pages here.](http://jgillesp.github.io/frontend-nanodegree-mobile-portfolio)

## Optimizations

* Used requestAnimationFrame which allows us to postpone DOM writes to greatly improve performance
* Batch our DOM updates into the next animation frame
* Only query the DOM once, don't interleave reads with writes in the for loop
* Only need to call determineDX once. Doing it in the loop causes a DOM read between writes leading to layout thrashing.
* Moved document.querySelectorAll outside the for loop so that DOM read is outside the loop
* pre-calculate the five phases we need to save on expensive calls to Math.sin inside the for loop
* Optimized to only create enough background pizzas to fill the user's current screen.