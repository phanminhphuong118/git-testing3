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
<h3>LET'S CHOOSE YOUR RECIPES</h3>
<!-- <p>Explore our wide range of recipes to find the perfect match for your cravings</p> -->

<div class="container">
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
        <slot />
    </div>
</div>

<style>

    .content {

      width: 100%;
      display: grid; 
      /* padding: 10px; ko được dùng cái này vì nó sẽ break container */
      grid-template-columns: auto 1fr; /*auto là fit đúng chữ thôi, thay cho 1fr*/

      @media (max-width: 700px) {
        grid-template-columns: 1fr;
        display:inline-block;
      }
    }
  
    nav {
        display: grid;
        flex-direction: column;
        color: rgb(4, 54, 15);
        padding: 10px;
        /* padding-right: 10px;
        padding-left: 10px; */
  
        & > a {
            text-decoration: none;
            color: inherit;
            cursor: pointer;
            background-color:#b0e8a4;
            text-align: center;
            /* padding: 0.2rem 1rem; */
            
            &:is(:hover, .active) {
            background-color: #55A630;
            }
        }  
    }

  </style>
  