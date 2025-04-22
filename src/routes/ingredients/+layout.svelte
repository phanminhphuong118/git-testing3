<script>
    import {ingredientStore} from "$lib/js/ingredients-store.js";
  
    // This is a special Svelte store which provides info about the current page.
    import { page } from "$app/stores";
    $: path = $page.url.pathname;
</script>

<div class="container">
<h3>Details of each ingredient</h3>
<div class="content">
    <slot/>
    <div id="detailsingredients">
    {#each $ingredientStore as ingredient (ingredient.id)}
    <div>
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
    #detailsingredients {
        display:grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    }

</style>