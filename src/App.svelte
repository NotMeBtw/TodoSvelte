<script>
  import Login from "./Login.svelte";

  export let name;
</script>

<style>

</style>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css" />
</svelte:head>

<h1>{name}</h1>
<Login />
