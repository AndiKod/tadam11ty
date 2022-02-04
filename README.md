

<p style="text-align:center">
<img src="https://mediastore-sable.vercel.app/tadam/tadam11ty.png" style="width:50%; display:block;margin: 0 auto;" />
</p>

<div style="text-align:center">
<h2> DevSandbox — 11ty Starter </h2>
</div>
 

Have an idea, a project, want to learn or just have fun? ...TADAAAM! jobDone!

<br>


### Readme Sections

- [The Sandbox LibStore](#the-sandbox-libstore)
- - [Styling](#Styling)
- - [JavaScript](#Javascript) 
- [11ty extensions collection](#11ty-extensions-collection)
- - Filters
- - Short codes
- - Paired short codes
- [One click Deploy buttons](#one-click-deploy-buttons)
- - Vercel
- - Netlify


<br/><br/>




# The Sandbox libstore

During the prototyping, researches, or playground moments we should  be able to quickly test something new... without yarn/npm installing things yet.  

Heard that AlpineJS is cool and need some default styling while testing? Make a new page, in the &lt;head> section throw the links, and have fun.

```
{% include 'pkg/alpine.njk' %}
{% include 'pkg/bulma.njk' %}
```
At any moment you can add, change, remove libraries to test out concepts without complicating things. 

Once happy, you sure can delete the *includes* and install into your `package.json` the chosen and proven tech stack for your project.

<br/>

---
[TopNav](#readme-sections)
<br/><br/>

## Styling 
You sometimes just need some basic styling while working on things like getting the data out and see if it prints on the screen, without staring at an ugly page. On the other hand, it's also interesting to test several frameworks when prototyping frontend part.

### Installed out of the box

- [SASS]() already included<br/>
CSS with super powers.
- [WindiCSS]() already included<br/>
Next generation utility-first CSS framework.

### Alternative CSS frameworks

- [Bootstrap](https://getbootstrap.com)<br/>
World’s most popular front-end toolkit 
- [Foundation for Sites](https://get.foundation/sites/docs/)<br/>
Advanced responsive front-end framework
- [Bulma](https://bulma.io/documentation/)<br/>
The modern CSS framework that just works.
- [Milligram](https://milligram.io)<br/>
A minimalist CSS framework
- [UIKit](https://getuikit.com/docs/introduction)<br/>
Lightweight and modular front-end framework
- *...and some more minimal or "no class" soon.*

<br/>

---
[TopNav](#readme-sections)
<br/><br/>

## JavaScript

React and Vue can be used for small components, SPA, or just prototyping and playing around, can't do more, but it's still fun to have them. In one way or another, all the libraries can help in some projects or filters/extensions/etc crafting. Charts, maps, animation, date handling, DOM manipulation/interactivity, and more. 



- [React](https://reactjs.org/docs/getting-started.html)<br/>
Modern client-side JavaScript framework
- [Vue 3](https://v3.vuejs.org/guide/introduction.html)<br/>
Modern client-side JavaScript framework
- [AlpineJS](https://alpinejs.dev/start-here)<br/>
Your new, lightweight, JavaScript framework
- [Mithril](https://mithril.js.org)<br/>
Modern client-side JavaScript framework
- [Hyperscript](https://hyperscript.org/docs)
Fun and readable, dependency-free DOM manipulation library & more
- [ChartJS](https://www.chartjs.org/docs/latest/)<br/>
Simple yet flexible JavaScript charting
- [ApexCharts](https://apexcharts.com/docs/creating-first-javascript-chart/)<br/>
Modern & Interactive Open-source Charts
- [AnimateOnScroll](https://michalsnik.github.io/aos/)<br/>
Animate On Scroll Library
- [Granim](https://sarcadass.github.io/granim.js/examples.html)<br/>
Fluid and interactive gradient animations library
- [Leaflet](https://leafletjs.com/reference.html)<br/>
JavaScript library for mobile-friendly interactive maps
- [Moment](https://momentjs.com)<br/>
Parse, validate, manipulate,and display dates and times
- [Luxon](https://moment.github.io/luxon/#/)<br/>
Modern, and friendly wrapper for JavaScript dates and times
- [UmbrellaJS](https://umbrellajs.com/documentation)<br/>
Tiny library for DOM manipulation and events
- [jQuery Core](https://learn.jquery.com/using-jquery-core/)<br/>
jQuery is a fast, small, and feature-rich JavaScript library.
- [Voca](https://vocajs.com/#)<br/>
The ultimate JavaScript string library
- [Lodash](https://lodash.com/docs/4.17.15)<br/>
JS utility library delivering modularity, performance & extras
- [TaffyDB](https://taffydb.com)<br/>
Library that brings database features into your project
- [Cleave](https://nosir.github.io/cleave.js/)<br/>
It helps with formatting input text content automatically.


<br/>

---
[TopNav](#readme-sections)
<br/><br/>

# Eleventy extensions collection

To keep the `.eleventy.js` clean, all the functions are stored in the *lib* folder, like `lib/shortcodes/youtube.js`. In case we need something, a single line in the config file will activate it:

```eleventyConfig.addShortcode('YouTube', require('./lib/shortcodes/youtube'));``` 

Now we can use in pages/layouts: 

```{% YouTube {video: "xh5VideoId5hx"} %}``` 

That way we can build our collection of 11ty extensions for later projects in one place, instead of messy copy/paste from other previous confing files *(if we remember where we already used what)*.

<br/>

---
[TopNav](#readme-sections)
<br/><br/>

## [Filters](#filters) 
*[11ty.dev/docs/filters/](11ty.dev/docs/filters/)*

<br/>

### Creation<br/>
Create *filtername.js* with the logic, then in *.eleventy.js*
```eleventyConfig.addFilter('FilterName', require('./lib/filters/filtername'));```

### Usage<br/> 
```{{ someString | FilterName }} ``` or<br/> 
```{% for post in collections.posts | FilterName %}``` 

## Filters included

 ### limit 
> *File:* arr-res-limit.js <br/> 
> *Effect:* Takes an arrays and returns the n-th most recent items <br/>
> *Usage:* `{% for post in collections.posts | limit(-3) %}` <br/>
> *Info:* It's the filter used on the official blog-starter project.

<br/>

---
[TopNav](#readme-sections)
<br/><br/>

## [Shortcodes](#shortcodes) 
*[11ty.dev/docs/shortcodes/](11ty.dev/docs/shortcodes/)*

### Creation
Create *shortcodename.js* with the logic, then in *.eleventy.js*
```eleventyConfig.addShortcode('ShortcodeName', require('./lib/filters/filtername'));```

### Usage 
```{% codeName { propName: 'propValue' } %} ``` 

<br/>

## Shortcodes included

<br/>

 ### YouTube 
> *File:* youtube.js <br/> 
> *Effect:* Insert a video on the page <br/>
> *Usage:* `{% YouTube { video: 'xXxVidIDxXx' } %}` <br/>
> *Info:* The video will take 100% width of it's container


<br/>

---
[TopNav](#readme-sections)
<br/><br/>

# One click Deploy buttons

When ready to publish, make your repository Public if actually private, place your own *user/repo* in the buttons code, and hit one of them:

## Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/AndiKod/tadam11ty)

```[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/user/repo)```

<br/>

## Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/AndiKod/tadam11ty)
<br/>

```[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/user/repo)```

<br/>

...if you forget to customise the button, it will obviously build a fresh Tadam instead, so don't ;)

---
[TopNav](#readme-sections)
<br/><br/>
