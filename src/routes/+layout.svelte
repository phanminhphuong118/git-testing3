<script>
  import "$lib/css/app.css";

  // Importing the 3 Svelte stores:
  import { recipeStore } from "$lib/js/recipes-store";
  import { ingredientStore, getIngredientById } from "$lib/js/ingredients-store";
  import { tagStore } from "$lib/js/tags-store";

  // Example of console logs showing how to access Svelte stores:

  // Logging data from recipeStore:
  console.log($recipeStore);
  // Logging data from ingredientStoreL
  console.log($ingredientStore);
  // Logging data from getIngredientById function:
  console.log(getIngredientById(2));
  // Logging data from tagStore:
  console.log($tagStore);
  // Check the console in your browser's developer tools to see the console logs above.

  // This is a special Svelte store which provides info about the current page.
  import { page } from "$app/stores";
  $: path = $page.url.pathname;
  
</script>

<header>
  <h1>Paige Phan Kitchen Creations</h1>
</header>

<nav id="nav">
  <a href="/" class:active={path === "/"}>HOME PAGE</a>
  <a href="/recipes" class:active={path === "/recipes"}>RECIPES</a>
  <a href="/ingredients" class:active={path === "/ingredients"}>INGREDIENTS</a>
  <a href="/tags" class:active={path === "/tags"}>TAGS</a>
</nav>

<div class="container">
  <slot />
</div>

<style>
  header {
    text-align: center;
    color: #2B9348;
  }
  a {
      color: white;
      font-size: 1.2rem;
      font-weight: bold;
      text-decoration: none;
      padding: 20px;

      &.active {
        text-decoration: underline;
      }
      
      &:is(:hover) {
        background-color: #55A630;
      }

    }

  nav {
    background-color:#2B9348;
    padding: 20px;
    text-align: center;
    /* display: grid; */
    /* grid-template-columns: 1fr 1fr; */
  }

  @media (max-width: 1000px) {
    nav {
      display: grid; 
      grid-template-columns: 1fr 1fr;
    }
}

</style>