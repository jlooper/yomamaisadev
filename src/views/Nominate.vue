<template>
  <v-container grid-list-md fluid>
    <v-card color="secondary">
      <v-card-title primary-title>
        <h1>Nominate a Developer Mom</h1>
      </v-card-title>
      <v-card-text>
        <h2>Know an amazing Mom who should be featured on this web site? Mominate her!</h2>
      </v-card-text>

      <v-form name="mominate" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="mominate">
        <v-container>
          <v-layout row wrap>
            <v-flex lg6 offset-lg2>
              <v-text-field value="Your Name" label="Name"></v-text-field>
            </v-flex>

            <v-btn>Submit</v-btn>
          </v-layout>
        </v-container>
      </v-form>
    </v-card>

    <!--<v-layout wrap>
      <v-flex xs12 sm4 md3 v-for="pet in dogs" :key="pet.breed">
        <app-mom :mom="pet" @addToFavorites="addToFavorites"></app-mom>
      </v-flex>
    </v-layout>-->
  </v-container>
</template>
