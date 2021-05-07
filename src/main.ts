import App from './App.svelte';
import './css/main.css';

const target = document.querySelectorAll('.flex.flex-row')[2];
target.innerHTML = '';

const app = new App({
  target: target,
  props: {
    name: 'world',
  },
});

export default app;
