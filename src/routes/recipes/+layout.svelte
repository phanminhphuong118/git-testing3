<script>
    import {recipeStore} from "$lib/js/recipes-store.js";

    // This is a special Svelte store which provides info about the current page.
    import { page } from "$app/stores";
    $: path = $page.url.pathname;
</script>

<!-- <svelte:head>
  <title>testing Page</title>
</svelte:head> -->
<!-- My navbar here. -->

<div class="container">

<h3>LET'S CHOOSE YOUR RECIPES</h3>

<div class="content">
    <nav>
      {#each $recipeStore as recipe (recipe.id)}
        <!-- <div class="container2"> -->
            <a href={`/recipes/${recipe.id}`} class:active={path.startsWith(`/recipes/${recipe.id}`)}>{recipe.name}</a>
            <ul>
            <li>Diffculty level: {recipe.difficulty}</li>
            <li>Tags: {recipe.tags}</li>
            </ul>
        <!-- </div> -->
      {/each} 
    </nav>
    <slot /> <!-- for content in +layout.svelte -->
</div>
</div>

<style>

    h3 {
        text-align: center;
    }

    .content {

      width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: auto 1fr; /*auto là fit đúng chữ thôi, thay cho 1fr*/
      
      @media (max-width: 1200px) {
        width: 100%; /*đây là cái gì*/
      }
    }
  
    nav {
        display: flex;
        flex-direction: column;
        margin-right: 20px;
        color: rgb(4, 54, 15);
  
        & > a {
            text-decoration: none;
            color: inherit;
            cursor: pointer;
            background-color:#b0e8a4;
            padding: 0.2rem 1rem;
            text-align: center;
    
            &:is(:hover, .active) {
            background-color: #55A630;
            }
        }  
    }
  </style>
  