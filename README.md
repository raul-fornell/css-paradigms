#  CSS Paradigms examples

Installation, some examples have dependencies, run `npm install` on them.

Then, to see all the examples, run any http server, like `npx http-server` and each folder contains one paradigm.

The design.fig file

## no-styles

An html file without styles but all the html elements and the content.

## semantic-css

An easy to understand way of writing styles. Each element is described as a meaningful component describing it's function.

## object-oriented-css

A flexible way of writing styles. Each needed feature is described in a small and reusable class. The meaning of the class is not clear, but the style added and  combination of them creates many possible elements.

## inline-styles

The worst way of adding styles to a web, but feasible. Instead of classes, each element has directly the styles added.

## css-in-web-components

Styles added directly to web components and scoped there. In order to have a nice dev experience in VSCode, it uses the es6-string-html extension that gives intellisense to the `/* html */` comment.

## Tachyons-lib

An utilitarian CSS library loaded in CDN that works similar to the object-oriented-css paradigm, but with its custom naming. Very compact but a little bit unreadable.

## uno-css-lib

Similar to an utilitarian library, but it generates the needed class definitions reading the html file. Very powerful and minimal, but needs some setup.

## class-less-css

The html has a minimal footprint of CSS, the classes are wrappers and the style is in native elements. The problem is that can have many side effects if not well structured.

Works well for small projects or landing pages.
