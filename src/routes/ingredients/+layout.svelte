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
    {#each $ingredientStore as ingredient (ingredient.id)}
    <h4>{ingredient.name}</h4>
    <ul>
        <li>type: {ingredient.type}</li>
        <li>unit: {ingredient.unit}</li>
        <li>price: {ingredient.price}</li>
    </ul>

    {/each}
</div>
</div>