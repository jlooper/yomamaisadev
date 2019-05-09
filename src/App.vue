<template>
  <v-app>
    <v-toolbar color="primary">
      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn color="white" to="/" flat>Dev Moms</v-btn>
        <v-btn color="white" to="/fur-moms" flat>Fur Moms</v-btn>
        <v-btn color="white" to="/nominate" flat>Mominate</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" class="primary" disable-resize-watcher app light>
      <v-layout column flex>
        <v-btn color="white" to="/" flat>Dev Moms</v-btn>
        <v-btn color="white" to="/fur-moms" flat>Fur Moms</v-btn>
        <v-btn color="white" to="/nominate" flat>Mominate</v-btn>
      </v-layout>
    </v-navigation-drawer>
    <router-view></router-view>
    <v-footer fixed height="auto" color="primary" center>
      <v-layout align-center justify-center>
        <v-btn
          color="white"
          flat
          round
          href="http://jenlooper.com"
          target="_blank"
        >&copy Jen Looper - A Project of Ladeez First Media</v-btn>
      </v-layout>
    </v-footer>
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

.wrapper {
  padding: 5px;
  margin-bottom: 30px;
}
</style>

<script>
export default {
  data() {
    return {
      drawer: false
    };
  },
  methods: {
    toggleDrawer(event) {
      this.showDrawer = event;
    }
  }
};
</script>
