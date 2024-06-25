<script>
  //@ts no-check
  import { selectedFilters } from '../stores/stores.js';
  import { removeFilter, filterColor } from '../utils/filters.js';
</script>

<div>
  {#each $selectedFilters as filter}
    <div class="filter-chip" style="background-color: {filterColor(filter.category)}" 
      on:click={filter.category == 'Título' ? removeFilter(filter) : null}>
      {filter.value}
    </div>
  {/each}
</div>

<style>
  div {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .filter-chip {
    padding: 0.7rem;
    border-radius: 0.5rem;
  }
</style>