<template>
  <div class="container">
  </div>
</template>

<script>
import { firebase } from '~/plugins/firebase.ts'

export default {
  mounted() {
    console.log(this.$store.getters.isAuthenticated)
  }
}
</script>
