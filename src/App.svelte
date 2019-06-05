<script>
  let todos = ["wash", "code"];
  let todo = "";

  function addTodo() {
    todos = [...todos, todo];
    todo = "";
  }
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1>Todo list</h1>
<input bind:value={todo} placeholder="Enter new todo" />
<button on:click={addTodo}>Add todo</button>
<ul>
  {#each todos as todo}
    <li>{todo}</li>
  {/each}
</ul>
