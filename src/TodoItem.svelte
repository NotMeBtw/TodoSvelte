<script>
  import { createEventDispatcher } from "svelte";
  import { fly } from "svelte/transition";
  import { flip } from "svelte/animate";

  const dispatch = createEventDispatcher();

  function remove() {
    dispatch("remove", { id });
  }

  function toggleStatus() {
    let newStatus = !complete;
    dispatch("toggle", {
      id,
      newStatus
    });
  }

  export let id;
  export let text;
  export let complete;
</script>

<style>
  article {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    padding: 1rem;
  }
</style>

<article
  class={complete ? 'has-background-primary' : 'has-background-light'}
  transition:fly|local={complete ? { x: -200 } : { x: 200 }}>
  <div class="is-size-4">{text} </div>
  <div>
    {#if complete}
      <button class="button is-light" on:click={toggleStatus}>
        <span class="icon is-small">
          <i class="fas fa-undo" />
        </span>
      </button>
    {:else}
      <button class="button is-primary" on:click={toggleStatus}>
        <span class="icon is-small">
          <i class="fas fa-check" />
        </span>
      </button>
    {/if}
    <button class="button is-danger" on:click={remove}>
      <span class="icon is-small">
        <i class="fas fa-times" />
      </span>
    </button>
  </div>
</article>
