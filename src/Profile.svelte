<script>
  export let displayName;
  export let photoURL;
</script>

<style>
  .image {
    padding-right: 0.5rem;
  }
</style>

<img class="image" src={photoURL} alt="user avatar" />
<strong>{displayName}</strong>
