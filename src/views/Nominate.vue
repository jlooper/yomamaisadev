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
              <v-text-field required :rules="rules" v-model="name" name="name" label="Name"></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex lg6 offset-lg2>
              <v-text-field
                required
                :rules="rules"
                v-model="momName"
                name="momName"
                label="Mom's Name (if you're nominating yourself, leave this blank)"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-container fluid>
            <v-radio-group v-model="momType" :mandatory="true" :rules="rules">
              <v-radio label="I'm a Mom who's a Developer" value="devMom"></v-radio>
              <v-radio label="I'm nominating a Mom who's a Developer" value="myMom"></v-radio>
              <v-radio label="I'm a Fur Mom" value="furMom"></v-radio>
            </v-radio-group>
          </v-container>
          <v-layout row wrap>
            <v-flex lg6 offset-lg2>
              <v-text-field
                required
                :rules="rules"
                v-model="picUrl"
                name="picUrl"
                label="URL of a photo you'd like to show"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex lg6 offset-lg2>
              <v-textarea
                required
                :rules="rules"
                v-model="momBio"
                name="momBio"
                label="Mom's bio. What would you like to celebrate?"
              ></v-textarea>
            </v-flex>
          </v-layout>
          <v-btn type="submit">Submit</v-btn>
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
      name: "",
      momName: "",
      momBio: "",
      picUrl: "",
      momType: "",
      rules: [v => !!v || "This field is required"]
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
          name: this.name,
          momName: this.momName,
          momBio: this.momBio,
          picUrl: this.picUrl
        })
      })
        .then(() => {
          alert("ok");
          //this.$router.push("thanks");
        })
        .catch(() => {
          alert("nope");
          //this.$router.push("404");
        });
    }
  }
};
</script>