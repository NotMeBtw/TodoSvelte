<script>
  import { createEventDispatcher } from "svelte";

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
  .complete {
    text-decoration: line-through;
    color: green;
  }
</style>

<li>
  <nav class="level">
    <div class="level-item has-text-centered">
      {#if complete}
        <div class="complete">{text}</div>
        <button class="button is-light" on:click={toggleStatus}>
          <span class="icon is-small">
            <i class="fas fa-undo" />
          </span>
          <span>Undo</span>
        </button>
      {:else}
        <div>{text}</div>
        <button class="button is-light" on:click={toggleStatus}>
          <span class="icon is-small">
            <i class="fas fa-check" />
          </span>
          <span>Done</span>
        </button>
      {/if}

      <button class="button is-danger" on:click={remove}>
        <span class="icon is-small">
          <i class="fas fa-times" />
        </span>
      </button>
    </div>
  </nav>
</li>
