<script>
  import { ingredientStore } from "$lib/js/ingredients-store.js";

  // This is a special Svelte store which provides info about the current page.
  import { page } from "$app/stores";
  $: path = $page.url.pathname;
</script>

<div class="container">
  <h3>INGREDIENT'S DETAILS</h3>
  <div class="content">
    <slot />
    <div id="detailsingredients">
      {#each $ingredientStore as ingredient (ingredient.id)}
        <div id="eachingredient">
          <h4>{ingredient.name}</h4>
          <ul>
            <li>type: {ingredient.type}</li>
            <li>unit: {ingredient.unit}</li>
            <li>price: {ingredient.price}</li>
          </ul>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .container {
    height: 130vh;
  }

  #detailsingredients {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    /* padding: 10px;    */
    @media (max-width: 1000px) {
      grid-template-columns: 1fr 1fr 1fr 1fr; /* Stack the columns vertically */
    }
    @media (max-width: 700px) {
      grid-template-columns: 1fr 1fr; /* Stack the columns vertically */
    }
  }

  #eachingredient {
    background-color: #b0e8a4;
    margin: 10px;
    padding-left: 20px;

    &:is(:hover) {
      background-color: #55a630;
    }
  }
</style>
