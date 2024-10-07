---
title: Vanilla CSS
excerpt: "Enjoy the cascade"
tags: ["CSS", "CSS-Flavors"]
---


By defaut, Tadam comes with SCSS configured for the convenience of split files, bundling, minification and other features, even if regular css can do many things too, indeed. 

Since it's fully comatible with Vanilla CSS, we can forget about the extension and just write the Vanilla instead.

> Head to the `src/assets/styles` folder and start writing your styles.

All sub-files are imported into the `style.scss` file, which is the entry point for the whole project, and compiled into the `_site/css` folder as style.css.

<em>`package.json`</em>
```json
"w:sass": "sass --watch src/assets/styles:_site/css",
"b:sass": "sass src/assets/styles:_site/css",
```

To use your styles, just import them into the head section a layout, like `_includes/layouts/base.njk`

```markup
<!-- This shortcode: -->
{% raw %}{% include 'pkg/scss.njk' %}{% endraw %}
<!-- ... will be rendered as: -->
<link rel="stylesheet" href="/css/style.css">
```

## Documentation

- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [W3Schools](https://www.w3schools.com/css/)
- [CSSReference.io](https://cssreference.io/)
- [CodeCademy](https://www.codecademy.com/learn/learn-css)

### Guides
- [CSS Tricks](https://css-tricks.com/guides/)
- [Modern CSS Solutions](https://moderncss.dev/)
- [State of CSS](https://2020.stateofcss.com/)

### Videos

{% YouTube {video: "yfoY53QXEnI"} %}