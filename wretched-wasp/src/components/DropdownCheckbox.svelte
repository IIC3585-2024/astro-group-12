<script>
  //@ts no-check
  import { addFilter } from '../utils/filters.js';
  
  let showDropdown = false;
  export let options;
  export let label;
  export let color;
</script>

<div class="dropdown">
  <button class="dropbtn" style="background-color: {color}" on:click="{() => showDropdown = !showDropdown}">{label}</button>
  {#if showDropdown}
    <div class="dropdown-content">
      {#each options as option}
        <div>
          <input type="checkbox" value={option.value} bind:checked={option.checked} on:change={() => addFilter(label, option.value)}/>
          <label for={option.value}>{option.value}</label>
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .dropdown {
    position: relative;
    display: inline-block;
  }
  .dropdown-content {
    display: block;
    position: absolute;
    padding: 10px;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  .dropbtn {
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
  }
</style>