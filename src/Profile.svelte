<script>
  export let displayName;
  export let photoURL;
  export let uid;
</script>

<style>
  .image {
    padding-right: 0.5rem;
  }
</style>

<img class="image" src={photoURL} alt="user avatar" />
<strong>{displayName}</strong>
