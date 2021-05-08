<script lang="ts">
  import { onMount } from 'svelte';

  import MainExperimentComponent from './MainExperimentComponent.svelte';
  import { replaceWithExperiment } from './lib/injectExperiment';

  //   Css selector of the main element of the experiment
  const cssSelector = 'div';

  //   Loop on mount which ensures the element exists before trying to replace it with the svelte instance
  onMount(() => {
    let frame = requestAnimationFrame(loop);
    function loop() {
      const elementFound = document.querySelector(cssSelector);

      if (elementFound) {
        replaceWithExperiment(elementFound, MainExperimentComponent);
        cancelAnimationFrame(frame);
      }
    }
    return () => {
      cancelAnimationFrame(frame);
    };
  });
</script>
