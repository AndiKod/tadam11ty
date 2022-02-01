# Packages for the Sandbox

Any of those libraries can be used by including them in the &lt;head> section of a layout or page having the tag. To test out Milligram CSS framework, it would be:

```
{% include 'components/pkg/milligram.njk' %}
```
---

## CSS Frameworks 

- [Bootstrap](https://getbootstrap.com) 
- [Bulma](https://bulma.io/documentation/)
- [Milligram](https://milligram.io)
- [UIKit](https://getuikit.com/docs/introduction)
- [Tailwind](https://tailwindcss.com) 


### Tailwind CSS additional steps

In `package.json` scripts sections, add `w:tailwind` at the end of the *Dev* command to watch for changes and rebuild styles, and `b:tailwind` at the end of the *Build* command.

To let Tailwind know where to look for your view files and extensions, it's in `tailwind.config.js`

... then include the *pkg/tailwind.njk* file, witch will link your layout/page to the compiled styles.

### SASS works out of the box

If no CSS framework is installed in any ways, SASS pick up the job, and files are located in `src/assets/sass`.

---

## JavaScript Libraries

In addition to the JS functions provided by some CSS frameworks, there are also a selection of JS libs to help with the development or play around in sandbox mode.

- [AlpineJS](https://alpinejs.dev/start-here)
- [ChartJS](https://www.chartjs.org/docs/latest/)
- [Mythril](https://mithril.js.org)