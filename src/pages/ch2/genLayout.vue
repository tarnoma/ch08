<!-- ch2  2.1.	Layout View Configuration -->
<template>
  <q-layout view="hHr lpR fFr">

    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Title
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="rightDrawerOpen" side="right" overlay bordered>
      <!-- drawer content -->
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <q-item>
          <q-item-section avatar>
            <q-icon color="primary" name="home" />
          </q-item-section>

          <q-item-section>Home</q-item-section>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-icon color="primary" name="settings" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Setting</q-item-label>
            <q-item-label caption>ตั้งค่า</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
      <q-page class="flex flex-center">
        <div class="column items-center">
          <img alt="Quasar logo" src="~@/assets/quasar-logo-vertical.svg" style="width: 200px; height: 200px" />

          <q-btn class="q-mt-md" color="primary" to="/second" label="Go to Second Page" no-caps />
        </div>
      </q-page>
    </q-page-container>

    <q-footer reveal elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const rightDrawerOpen = ref(false)

    return {
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  }
}
</script>