<script>
  import { fade } from "svelte/transition";
</script>

<div in:fade>
  <div class="hero is-primary is-large">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">TodoSvelte</h1>
        <h2 class="subtitle">
          A simple app to manage your tasks in form of
          <strong>TODO</strong>
          list
        </h2>
      </div>
    </div>
  </div>

  <div class="hero is-dark is-large">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">Manage your tasks, manage your time</h1>
        <h2 class="subtitle">
          Easier life with more time spent doing what you love
        </h2>
      </div>
    </div>
  </div>
</div>
