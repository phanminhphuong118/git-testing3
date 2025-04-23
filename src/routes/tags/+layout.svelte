<script>
    import {tagStore} from "$lib/js/tags-store.js";

    // This is a special Svelte store which provides info about the current page.
    import { page } from "$app/stores";
    $: path = $page.url.pathname;
</script>


<div class="container">
<h3>CHOOSE YOUR TAGS</h3>
    <div class="content">
        <slot/>
        <table>
            <thead>
                <th>Tag</th>
                <th>Description</th>
            </thead>
            <tbody>
            {#each $tagStore as tag (tag.name)}
            <tr>
                <td>#{tag.name}</td>
                <td>{tag.description}</td>
            </tr>
            {/each}
            </tbody>
        </table>
    </div>
</div>

<style>

    table {
    margin: auto;
    margin-bottom: 40px;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 80%;
    border-collapse: collapse;
    box-shadow: 0px 5px 5px 0px #a2c099, 2px 2px #a2c099;
        
    }   

    table th, table td {
        border: 1px solid white;
        text-align: left;
        padding: 10px;
    }

    table tr :hover {
        background-color: #55A630;
    }

    table th {
        background-color:#b0e8a4;
        color: rgb(4, 54, 15);
    }

    table tr:nth-child(even) {background-color: #def0da}
    table tr:nth-child(odd) {background-color: rgb(246, 246, 246)}


</style>