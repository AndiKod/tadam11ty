# Make your 11ty life easier
... by extending 11ty with filters, shortcodes and paired ones.

To keep the `.eleventy.js` clean, all the functions are stored here, like `lib/shortcodes/youtube.js`. In case we need that tool, a single line in the config file will activate it:

 ```eleventyConfig.addShortcode('YouTube', require('./lib/shortcodes/youtube'));``` 
 
 Now we can in pages/layouts go: 
 
 ```{% YouTube {video: "xh5VideoId5hx"} %}``` 

 <br />

- **[Filters](#filters)**
- [limit](#limit)
- **[Shortcodes](#filters)**
- [YouTube](#youtube)

<br />
<hr>

## [Filters](#filters) 
*[11ty.dev/docs/filters/](11ty.dev/docs/filters/)*

#### Creation
Create *filtername.js* with the logic, then in *.eleventy.js*
```eleventyConfig.addFilter('FilterName', require('./lib/filters/filtername'));```

#### Usage 
```{{ someString | FilterName }} ``` or<br/> 
```{% for post in collections.posts | FilterName %}``` 

## Filters that comes with **Fluffy**

> ### limit 
> *File:* arr-res-limit.js <br/> 
> *Effect:* Takes an arrays and returns the n-th most recent items <br/>
> *Usage:* `{% for post in collections.posts | limit(-3) %}` <br/>
> *Info:* It's the filter used on the official blog-starter project.

<hr>

## [Shortcodes](#shortcodes) 
*[11ty.dev/docs/shortcodes/](11ty.dev/docs/shortcodes/)*

### Creation
Create *shortcodename.js* with the logic, then in *.eleventy.js*
```eleventyConfig.addShortcode('ShortcodeName', require('./lib/filters/filtername'));```

### Usage 
```{{ someString | ShortcodeName }} ``` or<br/> 
```{% for post in collections.posts | ShortcodeName %}``` 

## Shortcodes that comes with **Fluffy**

> ### YouTube 
> *File:* youtube.js <br/> 
> *Effect:* Insert a video on the page <br/>
> *Usage:* `{% YouTube { video: 'xXxVidIDxXx' } %}` <br/>
> *Info:* The video will take 100% width of it's container

