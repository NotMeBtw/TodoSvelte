<script>
  import TodoItem from "./TodoItem.svelte";
  import { db } from "./firebase";
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs/operators";

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
</script>

<div class="container">
  <h1 class="title">Todo</h1>
  <h2 class="subtitle">
    A simple app to manage your tasks in
    <strong>TODO</strong>
    list
  </h2>

  <input
    bind:value={text}
    class="input is-large"
    type="text"
    placeholder="Enter new task"
    on:keydown={event => event.which === 13 && add()} />

  <section class="section">
    <ul>
      {#each $todos as todo}
        <TodoItem {...todo} on:remove={removeItem} on:toggle={updateStatus} />
      {/each}
    </ul>
  </section>
</div>
