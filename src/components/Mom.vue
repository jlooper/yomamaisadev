<template>
  <v-card height="600px">
    <v-img :src="mom.img" position="top center" max-height="400px"></v-img>
    <v-card-title>
      <div>
        <h3>{{mom.name}}</h3>
        <p v-if="mom.nominatedby">nominated by: {{mom.nominatedby}}</p>
        <p class="bio">{{mom.bio}}</p>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    mom: Object
  }
};
</script>

<style scoped>
p {
  margin: 0;
}
</style>