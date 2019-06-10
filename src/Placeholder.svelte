<script>
  import { fly, fade } from "svelte/transition";
</script>

<style>
  li {
    padding: 0 1rem;
    margin: 1rem 0;
  }
  p {
    padding: 1rem;
  }
</style>

<li transition:fade={{ duration: 500 }}>
  <p class="has-text-centered is-size-4" in:fly out:fade>
    <span class="icon">
      <i class="fas fa-list-ul" />
    </span>
    No todos
  </p>
</li>
