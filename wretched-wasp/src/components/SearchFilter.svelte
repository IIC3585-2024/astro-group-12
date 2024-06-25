<script>
  import { fly } from 'svelte/transition';
  import { addFilter } from '../utils/filters.js';
</script>

<div id="search-bar" in:fly={{ y:100, duration: 1500}}>
  <input 
    type="search"
    name="search"
    placeholder="Busca por título..."
    class="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
    on:change={e => e.target.value !== '' ? addFilter('Título', e.target.value) : null}
  >
</div>

<style>
  #search-bar {
    display: flex;
    justify-content: center;
    margin-left: 2%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  input {
    height: 100%;
    padding: 5%;
    border: 1px solid #e0e0e0;
  }
  
</style>