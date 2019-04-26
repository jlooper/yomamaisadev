<template>
  <v-app>
    <main>
      <v-toolbar color="primary">
        <v-toolbar-items>
          <v-btn color="white" to="/" flat>Yo!</v-btn>
          <v-btn color="white" to="/dev-moms" flat>Dev Moms</v-btn>
          <v-btn color="white" to="/my-mom" flat>My Mom</v-btn>
          <v-btn color="white" to="/fur-moms" flat>Fur Moms</v-btn>
          <v-btn color="white" to="/nominate" flat>Mominate</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <router-view></router-view>
      <v-footer fixed height="auto" color="primary">
        <v-layout class="footer-links hidden-sm-and-down" justify-start align-center row wrap>
          <v-btn color="white" flat round href="mailto:info@vuevixens.org" target="_blank">email me</v-btn>
        </v-layout>
      </v-footer>
    </main>
  </v-app>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
html {
  background: url("./assets/tree.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
