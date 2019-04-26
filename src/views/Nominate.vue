<template>
  <v-container grid-list-md fluid>
    <v-card color="secondary">
      <v-card-title primary-title>
        <h1>Nominate a Developer Mom</h1>
      </v-card-title>
      <v-card-text>
        <h2>Know an amazing Mom who should be featured on this web site? Mominate her!</h2>
      </v-card-text>

      <v-form
        @submit.prevent="handleSubmit"
        name="mominate"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="mominate">
        <v-container>
          <v-layout row wrap>
            <v-flex lg6 offset-lg2>
              <v-text-field name="name" @input="ev => form.name = ev.target.value" label="Name"></v-text-field>
            </v-flex>

            <v-btn>Submit</v-btn>
          </v-layout>
        </v-container>
      </v-form>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: "Nominate",
  data() {
    return {
      form: {
        name: ""
      }
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit() {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": "mominate",
          ...this.form
        })
      })
        .then(() => {
          //this.$router.push("thanks");
        })
        .catch(() => {
          //this.$router.push("404");
        });
    }
  }
};
</script>