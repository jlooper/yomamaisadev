<template>
  <v-container grid-list-md fluid>
    <v-card class="wrapper" color="secondary">
      <v-card-title primary-title>
        <h1>Yo, I'm a FurMom</h1>
      </v-card-title>
      <v-card-text>
        <h2>We are proud Moms of furbabies. Check us out!</h2>
      </v-card-text>
      <v-layout wrap>
        <v-flex v-if="mom.type=='furmom'" xs12 sm4 md4 v-for="mom in moms" :key="mom.name">
          <app-mom :mom="mom"></app-mom>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
import Moms from "../data/moms";
import Mom from "../components/Mom";

export default {
  components: {
    appMom: Mom
  },
  data() {
    return {
      moms: Moms
    };
  }
};
</script>

<style>
.theme--light.application {
  background-color: transparent;
}
</style>