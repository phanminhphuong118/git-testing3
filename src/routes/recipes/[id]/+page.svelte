<script>
    import { page } from "$app/stores";
  
    // $: console.log($page.params.id);

    import {recipeStore} from "$lib/js/recipes-store.js";

    let recipes = [];
    recipeStore.subscribe(value => {
        recipes = value;
    });

    $: id = $page.params.id;
    $: foundRecipe = recipes.find(r => r.id == id);

    import { getIngredientById } from  "$lib/js/ingredients-store.js";

    // $: ingredientList = foundRecipe.ingredients.map(i => getIngredientById(i).name)
    $: ingredientList = foundRecipe.ingredients.map(i => getIngredientById(i))
    $: console.log(ingredientList); 

</script>

<div class="contentrecipes">
    {#if foundRecipe}
    <img src="/images/{foundRecipe.image}" alt="{foundRecipe.name} image"/>
    <!-- <h1>hello: {ingredientName}</h1> -->

    <div>
    <h3>{foundRecipe.name}</h3>
    <ul>
    <li>Ingredients:</li>
        <ul>
            {#each ingredientList as ingredient}
                <li>{ingredient.name}</li>
            {/each}
        </ul>
    <li>Cooking Time: {foundRecipe.cookingTime}</li>
    <li>Steps:</li>
        <ul>
            {#each foundRecipe.steps as step}
            <li>{step}</li>
            {/each}
        </ul>
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
        /* padding: 20px; */

        @media (max-width: 1000px) {
        width: 334.37px;
        grid-template-columns: 1fr; /* Stack the columns vertically */
        
    }
    }

  

</style>