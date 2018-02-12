# css-grid
Recreation of [NOS.nl](https://nos.nl) using CSS Grid layout, [live here](https://nos.netlify.com/).

## Usage
To build the website: `npm run build`, which will generate all static files and output them to the `dist` directory.

To run the dev server: `npm start`, which will start Browsersync, run the build script and watch for changes to rebuild.

## Progress
### Setup
Before starting of developing this website I took some time to set myself up with a decent workspace. I used [Gulp](https://github.com/gulpjs/gulp) for my build scripting since I find NPM scripts can get very convoluted quite quickly. I use a [CSS autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer) to ensure my site works (mostly) cross-browser, and [Babel](https://github.com/babel/gulp-babel) to transform my ES6 scripts to ES5 in combination with [gulp-concat](https://github.com/gulp-community/gulp-concat) to combine all JS into a single file. Then for my dev environment I use [Browsersync](https://github.com/BrowserSync/browser-sync) as a webserver which auto-reloads CSS and JS files when they change.

### Process
First I took the HTML from the original website and deleted all CSS rules.
Then I rewrote all CSS from scratch making use of the new CSS grid specification, which I learned by following (https://cssgrid.io/)[a free course] by Wes Bos.

Some specific styles such as header styling I did later on copy from the original website, and also I adjusted some HTML structure to better fit my styling approach.
Also I removed all NOS specific icons since I don't have it neither do I want to invest time implementing it.

### Further TODO
I wrote no Javascript as of the first version since the assignment is focussed on learning CSS grid. However it would be nice to add some interaction later on with JS, for example for showing the navigation submenus or for some interaction in the _editors picks_ widget.
