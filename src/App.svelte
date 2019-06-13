<script>
  import Todos from "./Todos.svelte";
  import Profile from "./Profile.svelte";
  import Home from "./Home.svelte";

  import { auth, googleProvider } from "./firebase";
  import { authState } from "rxfire/auth";

  import { fly } from "svelte/transition";

  export let name;
  let user;
  let isBurgerVisible = false;

  const unsubscribe = authState(auth).subscribe(u => (user = u));

  function login() {
    auth.signInWithPopup(googleProvider);
  }

  function toggleBurger() {
    isBurgerVisible = !isBurgerVisible;
  }
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css" />
  <script src="https://kit.fontawesome.com/653bbd5496.js"></script>
</svelte:head>

<nav class="navbar is-primary" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <div class="navbar-item">
      <h1 class="title">{name}</h1>
    </div>
    <button role="button" class="navbar-burger burger button is-primary" aria-label="menu" aria-expanded="false" on:click={toggleBurger}>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </button>
  </div>
  <div class="navbar-menu {isBurgerVisible ? 'is-active' : ''}">
    <div class="navbar-end">
      <div class="navbar-item">
        {#if user}
          <Profile class="column" {...user} />
          <div class="column">
            <button class="button is-danger" on:click={() => auth.signOut()}>
              <span class="icon is-small">
                <i class="fas fa-sign-out-alt" />
              </span>
              <span>Logout</span>
            </button>
          </div>
        {:else}
          <div class="column">
            <button class="button is-info" on:click={login}>
              <span class="icon is-small">
                <i class="fas fa-sign-in-alt" />
              </span>
              <span>Log in</span>
            </button>
          </div>
        {/if}
      </div>
    </div>
  </div>
</nav>

<div>
  {#if user}
    <Todos uid={user.uid} />
  {:else}
    <Home/>
  {/if}
</div>
