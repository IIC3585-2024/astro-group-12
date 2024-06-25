<script>
  //@ts no-check
  import { selectedFilters } from '../stores/stores.js';
  import { filterColor } from '../utils/filters.js';
</script>

<div>
  {#each $selectedFilters as filter}
    <div class="filter-chip" style="background-color: {filterColor(filter.category)}">
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