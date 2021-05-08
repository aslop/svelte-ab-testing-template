# Svelte client side A/B Testing

Project template i am using to code client side A/B Tests

## App.svelte

_/src/App.svelte_
Main app file, must change:

- cssSelector: CSS Selector of the main experiment element.

Experiment component injection functions:

**replaceWithExperiment**
Replace the element found using the above CSS selector with the main experiment component
**placeExperimentAfter**
Place the main experiment component **after** the targeted element
**placeExperimentBefore**
Place the main experiment component **before** the targeted element

### Commands

`npm run watch`
`npm run build`
