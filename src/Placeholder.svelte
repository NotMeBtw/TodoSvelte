<script>
  import { fade } from "svelte/transition";
</script>

<style>
  p {
    padding: 1rem;
  }
</style>

<p class="has-text-centered is-size-4" transition:fade|local>
  <span class="icon">
    <i class="fas fa-list-ul" />
  </span>
  No todos
</p>
