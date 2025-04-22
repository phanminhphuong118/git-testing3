<script>
    import {tagStore} from "$lib/js/tags-store.js";

    // This is a special Svelte store which provides info about the current page.
    import { page } from "$app/stores";
    $: path = $page.url.pathname;
</script>

<!-- {
    "name": "Italian",
    "description": "Recipes inspired by traditional Italian cuisine, often featuring pasta, cheese, and olive oil."
},
{
    "name": "Vegetarian",
    "description": "Dishes that do not include meat or seafood, suitable for a vegetarian diet."
}, -->

<div class="container">
    <div id="content">
    <slot/>
    </div>
    {#each $tagStore as tag (tag.name)}
    <h4>tag: {tag.name}</h4>
    <p>description: {tag.description}</p>
    {/each}
</div>

<style>
</style>