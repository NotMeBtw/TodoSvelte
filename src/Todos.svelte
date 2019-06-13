<script>
  import TodoItem from "./TodoItem.svelte";
  import Placeholder from "./Placeholder.svelte";
  import { db } from "./firebase";
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs/operators";
  import { flip } from "svelte/animate";
  import { fade } from "svelte/transition";

  export let uid;

  let text = "";

  const query = db
    .collection("todos")
    .where("uid", "==", uid)
    .orderBy("created");

  const todos = collectionData(query, "id").pipe(startWith([]));

  function add() {
    if (text === "") return;

    db.collection("todos").add({
      uid,
      text,
      complete: false,
      created: Date.now()
    });
    text = "";
  }

  function updateStatus(event) {
    const { id, newStatus } = event.detail;
    db.collection("todos")
      .doc(id)
      .update({ complete: newStatus });
  }

  function removeItem(event) {
    const { id } = event.detail;
    db.collection("todos")
      .doc(id)
      .delete();
  }

  function removeAllComplete() {
    db.collection("todos")
      .where("uid", "==", uid)
      .where("complete", "==", true)
      .get()
      .then(querySnapshot => querySnapshot.forEach(doc => doc.ref.delete()));
  }
</script>

<style>
  ul {
    border-radius: 4px;
    padding: 0.5rem;
    min-height: 4rem;
    transition: all 2s;
  }
  li {
    padding: 0 1rem;
    margin: 1rem 0;
  }
  section {
    margin: 3rem auto;
  }
  .space-around {
    display: flex;
    justify-content: space-between;
  }
</style>

<section class="container" in:fade>
  <h1 class="title">Manage your todos</h1>

  <input
    bind:value={text}
    class="input is-large"
    type="text"
    placeholder="Enter new task"
    on:keydown={event => event.which === 13 && add()} />

  <section>
    <div class="columns">
      <div class="column">
        <p class="title">
          Not complete ({$todos.filter(t => !t.complete).length})
        </p>
        <ul class="has-background-grey-lighter">
          {#each $todos.filter(t => !t.complete) as todo (todo.id)}
            <li animate:flip={{ duration: 500 }}>
              <TodoItem
                {...todo}
                on:remove={removeItem}
                on:toggle={updateStatus} />
            </li>
          {:else}
            <li>
              <Placeholder />
            </li>
          {/each}
        </ul>
      </div>
      <div class="column">
        <div class="space-around">
          <p class="title">
            Complete ({$todos.filter(t => t.complete).length})
          </p>
          <button class="button is-danger" on:click={removeAllComplete}>
            <span class="icon is-small">
              <i class="fas fa-times" />
            </span>
            <span>Clear</span>
          </button>
        </div>
        <ul class="has-background-grey-lighter">
          {#each $todos.filter(t => t.complete) as todo (todo.id)}
            <li animate:flip={{ duration: 500 }}>
              <TodoItem
                {...todo}
                on:remove={removeItem}
                on:toggle={updateStatus} />
            </li>
          {:else}
            <li>
              <Placeholder />
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </section>
</section>
