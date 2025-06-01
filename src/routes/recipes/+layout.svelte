<script>
  import { recipeStore, inputTag } from "$lib/js/recipes-store.js";
  import { page } from "$app/stores";
  $: path = $page.url.pathname;

  import { goto } from "$app/navigation";

  function goTag() {
    const replaceState = false;
    goto("/tag-results", { replaceState });
  }
</script>

<h3>LET'S CHOOSE YOUR RECIPES</h3>

<h2>ABCD</h2>
<h2>ABCDEFG</h2>
<h1>testinggggg</h1>
<h3>testingtessting</h3>
<!-- My navbar here. -->
<div class="container">
  <div class="content">
    <nav>
      {#each $recipeStore as recipe (recipe.id)}
        <a href={`/recipes/${recipe.id}`} class:active={path.startsWith(`/recipes/${recipe.id}`)}>{recipe.name}</a>
        <ul>
          <li>Diffculty level: {recipe.difficulty}</li>
          <div id="tag">
            <li>Tags:</li>
            {#each recipe.tags as tag}
              <button
                on:click={() => {
                  $inputTag = tag;
                  goTag();
                }}
                type="submit">#{tag}</button>
            {/each}
          </div>
        </ul>
      {/each}
    </nav>
    <slot />
  </div>
</div>

<style>
  .content {
    width: 100%;
    display: grid;
    /* padding: 10px; must not use this, because it shall break container */
    grid-template-columns: auto 1fr; /*auto is for fit the contentr*/

    @media (max-width: 700px) {
      grid-template-columns: 1fr;
      display: inline-block;
    }
  }

  nav {
    display: grid;
    flex-direction: column;
    color: rgb(4, 54, 15);
    padding: 10px;

    & > a {
      text-decoration: none;
      color: inherit;
      cursor: pointer;
      background-color: #b0e8a4;
      text-align: center;
      &:is(:hover, .active) {
        background-color: #55a630;
      }
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

  #tag {
    display: flex;
  }
</style>
