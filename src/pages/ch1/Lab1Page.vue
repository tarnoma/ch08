<template>
  <q-page padding>
    <h1>Welcom to Clover App</h1><br>
    <p>Modern Web Application with Vue + Quasar</p><br>
    <q-btn color="secondary" text-color="black" label="FirstButton" />
    <q-btn color="dark" icon-right="shopping_cart" text-color="white" label="SecondButton" />
    <q-btn round color="info"  text-color="green" icon="navigation" size="xl" padding="lg" />
    <q-btn outline rounded color="primary" label="ThridButton" padding="md" />
    <br>
    <div class="column items-center">
      <img
        alt="Quasar logo"
        src="~@/assets/quasar-logo-vertical.svg"
        style="width: 200px; height: 200px"
      />

      <q-btn class="q-mt-md" color="primary" to="/second" label="Go to Second Page" no-caps />
    </div>
  </q-page>
</template>