<template>
  <div class="container">
    <b-jumbotron header="CI/CD Demo" lead="Sample demo CI/CD workflow in B2B" header-level="5">
    <!-- <p>Welcome to CI/CD Demo</p> -->
    <!-- <b-button variant="primary" href="/register">Click here to go to Register page</b-button> -->
     <b-link :to="{ path: 'register', query: { mode: 'demo' } }">Click here to Register</b-link>
  </b-jumbotron>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
