<script>
    import { page } from "$app/stores";
  
    // $: console.log($page.params.id);

    import {recipeStore, inputTag} from "$lib/js/recipes-store.js";

    let recipes = [];
    recipeStore.subscribe(value => {
        recipes = value;
    });

    $: id = $page.params.id;
    $: foundRecipe = recipes.find(r => r.id == id);

    import { getIngredientById } from "$lib/js/ingredients-store.js";

    // $: ingredientList = foundRecipe.ingredients.map(i => getIngredientById(i).name)
    $: ingredientList = foundRecipe.ingredients.map(i => getIngredientById(i))
    $: console.log(ingredientList); 

    $: path = $page.url.pathname;

    import { goto } from "$app/navigation";

    function goTag() {
    const replaceState = false;
    goto("/tag-results", { replaceState });
    }

</script>

<div class="contentrecipes">
    {#if foundRecipe}
    <img src="/images/{foundRecipe.image}" alt="{foundRecipe.name} image"/>
    <!-- <h1>hello: {ingredientName}</h1> -->

    <div>
    <h3>{foundRecipe.name}</h3>
    <ul>
        <li>Diffculty level: {foundRecipe.difficulty}</li>
        <li>Cooking Time: {foundRecipe.cookingTime} minutes</li>
        <li>Ingredients:</li>
            <ul>
                {#each ingredientList as ingredient}
                    <li>{ingredient.name}</li>
                {/each}
            </ul>
        <li>Steps:</li>
            <ul>
                {#each foundRecipe.steps as step}
                <li>{step}</li>
                {/each}
            </ul>
        <li>Tags:</li>
            {#each foundRecipe.tags as tag}
            <button on:click={()=> {$inputTag = tag; goTag();}} type="submit">#{tag}</button>
            {/each}

    </ul>
    </div>
    {:else}
    <h1>Loading or not found</h1>
    {/if}
</div>

<style>
    img {
        width: 100%; /* Stack the columns vertically */
    }

    h3 {
        padding: 20px;
        display: inline;
    }
    .contentrecipes {
        display: grid; 
        grid-template-columns: 1fr 1fr; 
        padding: 10px;

        @media (max-width: 1000px) {
        width: 334.37px;
        grid-template-columns: 1fr; /* Stack the columns vertically */
        
    }
    }

    button {
        background-color: transparent;
        border: 0cm;
        color: rgb(222, 87, 24);
        &:is(:hover) {
            text-decoration: underline;
            }
    }

  

</style>