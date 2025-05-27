<script>
  import { outputKeyword, recipeStore, searchRecipeName } from "$lib/js/recipes-store.js";

  // This is a special Svelte store which provides info about the current page.
  import { page } from "$app/stores";
  $: path = $page.url.pathname;
</script>

<slot />
<div>abc</div>
<div class="container">
  <div class="content">
    <nav>
      {#if $searchRecipeName == ""}
        <h4>NO RECIPE MATCHES YOUR KEYWORD</h4>
      {:else}
        {#each $searchRecipeName as recipe (recipe.id)}
          <a href={`/recipes/${recipe.id}`} class:active={path.startsWith(`/recipes/${recipe.id}`)}>{recipe.name}</a>
        {/each}
      {/if}
    </nav>
  </div>
</div>

<style>
  a,
  h4 {
    padding-top: 20px;
    padding-bottom: 20px;
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
  }

  .container {
    height: 80vh;
  }
</style>
