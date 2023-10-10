#  CSS Paradigms examples

Installation, some examples have dependencies, run `npm install` on them.

Then, to see all the examples, run any http server, like `npx http-server` and each folder contains one paradigm.

The design.fig file is a Figma graphic design file, very simple, just some card components and an image.

## no-styles

An html file without styles but all the html elements and the content.

The container for the card component is just a div.

`<div>`

## semantic-css

An easy to understand way of writing styles. Each element is described as a meaningful component describing it's function.

The container for the card component is described in the class name.

`<div class="card">`

## object-oriented-css

A flexible way of writing styles. Each needed feature is described in a small and reusable class. The meaning of the class is not clear, but the style added and  combination of them creates many possible elements.

The styles that define the card component.

`<div class="bg-white border-rounded padding-all shadow">`

## inline-styles

The worst way of adding styles to a web, but feasible. Instead of classes, each element has directly the styles added.

A big chunk of styles inline.

`<div style="background-color: #FFF; padding: 22px; border-radius: 17px; box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25); overflow: hidden;">`

## css-in-web-components

Styles added directly to web components and scoped there. In order to have a nice dev experience in VSCode, it uses the es6-string-html extension that gives intellisense to the `/* html */` comment.

A custom component with attributes instead of a div.

`<r-card title="Card title">`

## Tachyons-lib

An utilitarian CSS library loaded in CDN that works similar to the object-oriented-css paradigm, but with its custom naming. Very compact but a little bit unreadable.

Like Object Oriented CSS but more compact.

`<div class="br4 bg-white pa3 shadow-5 mb4">`

## uno-css-lib

Similar to an utilitarian library, but it generates the needed class definitions reading the html file. Very powerful and minimal, but needs some setup. For example, the VSCode extension <https://marketplace.visualstudio.com/items?itemName=antfu.unocss>

Like Object Oriented CSS.

`<div class="bg-white overflow-hidden border-rd-4 shadow shadow-bluegray p5">`

## class-less-css

The html has a minimal footprint of CSS, the classes are wrappers and the style is in native elements. The problem is that can have many side effects if not well structured.

Works well for small projects or landing pages.

The section class gives the styles for the div in contains.

`<section class="column-with-cards"><div>`
