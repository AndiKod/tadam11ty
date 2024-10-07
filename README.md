

 <p align="center">
    <img src="https://mediastore-sable.vercel.app/tadam/tadam11ty.png" style="width:20vw" alt="alternate text">  
 </p>
 <h2 align="center">📦 DevSandbox — 11ty3.Starter/KitchenSink 🚀</h2>
<p align="center">Multiple CSS flavors, JS libraries, code snippets and startKit.<br>
You can copy-paste some parts into a new project, test/prototype, or remove what you don't need and go with the flow.</p>

_An obvious evolving project, but feel free to give it a try. Feedback is welcome, as I'm considering what to add next._

<br><br>

### Readme Sections

- Quick Start
- The Sandbox LibStore
- - *13 CSS Frameworks*
- - *18 JS Libraries*
- 11ty extensions collection
- - *Filters / Short codes / Paired short codes*
- One click Deploy buttons
- - *Vercel /  Netlify*


<br><br>

# Quick Start💨

The usual prefered steps...

```
git clone https://github.com/AndiKod/tadam11ty.git my-proj
cd my-proj
pnpm i       // works too with yarn and npm, sure
pnpm run dev   // See you on port :8080
```
### Folder structure seen from the package.json root level:<br>
  **/lib**  Contains the Eleventy extensions. Filters, Shortcodes, Paired<br>
  **/src/_includes**  Contains the /components, /layouts and sandbox /pkg<br>
  **/src/assets**  Contains the /js, /styles and /images containers<br>
  **/src/collections**  Contains the /posts, /books, /whatever collections<br>
  **/src/pages**  Contains the pages, with a *permalink* tag in their frontmatter<br><br>

  `pnpm run build` will create the **/_site** folder with your Awesome project inside




<br>


# The Sandbox CDN libstore, pre configured links 🎁

Heard that AlpineJS is cool and need some default styling while testing? Make a new page, in the &lt;head> section add the links, and have fun.
You can always yarn/npm install things later if needed, or just keep exploring new things.

```
{% include 'pkg/alpine.njk' %}
{% include 'pkg/bulma.njk' %}   // or tailwind, unocss, bootstrap, ...
```

<br><br>

## 🎨 Styling
You sometimes just need some basic styling while working on things like getting the data out and see if it prints on the screen, without staring at an ugly page. On the other hand, it's also interesting to test several frameworks when prototyping frontend part.

<br>

<details><summary><b>See the 13 Available CSS Flavors:</b></summary>

<br>

### Installed out of the box

- [SASS]() already included<br>
CSS with super powers, or great Vanilla CSS.
- [TailwindCSS]() already included<br>
The classic utility-first CSS framework.<br>


### Alternative CSS frameworks

#### The classics

- [Bootstrap](https://getbootstrap.com)<br>
World’s most popular front-end toolkit
- [Bulma](https://bulma.io/documentation/)<br>
The modern CSS framework that just works.
- [UIKit](https://getuikit.com/docs/introduction)<br>
Lightweight and modular front-end framework
- [Foundation for Sites](https://get.foundation/sites/docs/)<br>
Advanced responsive front-end framework

#### Utility first and similar approaches

- [OpenProps](https://open-props.style/#getting-started)
Supercharged CSS variables
- [Tachyons](http://tachyons.io/docs/)
Built for designing. *...with as little css as possible.*
- [Tailwind-CDN](https://tailwindcss.com/docs/installation/play-cdn)
The "Play CDN" setup for testing and prototyping

#### No classes, Just raw HTML

- [Water.css](https://watercss.kognise.dev)
A drop-in collection of CSS styles
- [MVP.css](https://andybrewer.github.io/mvp/#docs)
A minimalist stylesheet for HTML elements

#### Minimalist frameworks

- [Milligram](https://milligram.io)<br>
A minimalist CSS framework
- [Chota](https://jenil.github.io/chota/)
A micro (~3kb) CSS framework.




 </details>


<br><br>

## ⚡ JavaScript Libraries

React and Vue can be used for small components, SPA, or just prototyping and playing around, can't do more, but it's still fun to have them. In one way or another, all the libraries can help in some projects or filters/extensions/etc crafting. Charts, maps, animation, date handling, DOM manipulation/interactivity, and more.


<details><summary><b>See the 18 Available—awesome—Packages</b></summary>

- [React](https://reactjs.org/docs/getting-started.html)<br>
Modern client-side JavaScript framework
- [Vue 3](https://v3.vuejs.org/guide/introduction.html)<br>
Modern client-side JavaScript framework
- [AlpineJS](https://alpinejs.dev/start-here)<br>
Your new, lightweight, JavaScript framework
- [Mithril](https://mithril.js.org)<br>
Modern client-side JavaScript framework
- [_Hyperscript](https://hyperscript.org/docs)<br>
Fun and readable, dependency-free DOM manipulation library & more
- [ChartJS](https://www.chartjs.org/docs/latest/)<br>
Simple yet flexible JavaScript charting
- [ApexCharts](https://apexcharts.com/docs/creating-first-javascript-chart/)<br>
Modern & Interactive Open-source Charts
- [AnimateOnScroll](https://michalsnik.github.io/aos/)<br>
Animate On Scroll Library
- [Granim](https://sarcadass.github.io/granim.js/examples.html)<br>
Fluid and interactive gradient animations library
- [Leaflet](https://leafletjs.com/reference.html)<br>
JavaScript library for mobile-friendly interactive maps
- [Moment](https://momentjs.com)<br>
Parse, validate, manipulate,and display dates and times
- [Luxon](https://moment.github.io/luxon/#/)<br>
Modern, and friendly wrapper for JavaScript dates and times
- [UmbrellaJS](https://umbrellajs.com/documentation)<br>
Tiny library for DOM manipulation and events
- [jQuery Core](https://learn.jquery.com/using-jquery-core/)<br>
jQuery is a fast, small, and feature-rich JavaScript library.
- [Voca](https://vocajs.com/#)<br>
The ultimate JavaScript string library
- [Lodash](https://lodash.com/docs/4.17.15)<br>
JS utility library delivering modularity, performance & extras
- [TaffyDB](https://taffydb.com)<br>
Library that brings database features into your project
- [Cleave](https://nosir.github.io/cleave.js/)<br>
It helps with formatting input text content automatically.

</details>


<br><br>

# Eleventy extensions collection 🔧

To keep the `eleventy.config.js` clean, all the functions are stored in the *lib* folder, like `lib/shortcodes/youtube.js`. In case we need something, import and activate it:

```js
import Youtube from './lib/shortcodes/youtube.js';

eleventyConfig.addShortcode('YouTube', YouTube);
```

Now we can use in pages/layouts:

```{% YouTube {video: "xh5VideoId5hx"} %}```

<details><summary><b>See more about Extensions</b></summary>


<br><br>

## [Filters](#filters)
*[11ty.dev/docs/filters/](11ty.dev/docs/filters/)*

<br>

### Creation<br>
Create *filtername.js* with the logic, then in *.eleventy.js*
```eleventyConfig.addFilter('FilterName', require('./lib/filters/filtername'));```

### Usage<br>
```{{ someString | FilterName }} ``` or<br>
```{% for post in collections.posts | FilterName %}```

## Filters included

 ### limit
> *File:* arr-res-limit.js <br>
> *Effect:* Takes an arrays and returns the n-th most recent items <br>
> *Usage:* `{% for post in collections.posts | limit(-3) %}` <br>
> *Info:* It's the filter used on the official blog-starter project.


<br><br>

## [Shortcodes](#shortcodes)
*[11ty.dev/docs/shortcodes/](11ty.dev/docs/shortcodes/)*

### Creation
Create *shortcodename.js* with the logic, then in *.eleventy.js*
```eleventyConfig.addShortcode('ShortcodeName', require('./lib/filters/filtername'));```

### Usage
```{% codeName { propName: 'propValue' } %} ```

<br>

## Shortcodes included

<br>

 ### YouTube
> *File:* youtube.js <br>
> *Effect:* Insert a video on the page <br>
> *Usage:* `{% YouTube { video: 'xXxVidIDxXx' } %}` <br>
> *Info:* The video will take 100% width of it's container


 </details>


<br><br>

# One click Deploy buttons 🚚

When ready to publish, make your repository Public if actually private, place your own *user/repo* in the buttons code, and hit one of them:

## Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/AndiKod/tadam11ty)

```[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/user/repo)```

<br>

## Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/AndiKod/tadam11ty)
<br>

```[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/user/repo)```

<br>

...if you forget to customise the button, it will obviously build a fresh Tadam instead, so don't ;)


<br><br>

Contact: see you on Github
