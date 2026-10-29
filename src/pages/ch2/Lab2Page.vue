<template>
  <q-layout view="hhr lpR fFf">

    <q-drawer v-model="rightDrawerOpen" side="right" overlay elevated>
      <q-list>
        <q-item>
          <q-item-section avatar>
            <q-icon color="primary" name="space_dashboard" />
          </q-item-section>

          <q-item-section>Dashboard</q-item-section>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-icon color="secondary" name="groups" />
          </q-item-section>

          <q-item-section>Users</q-item-section>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-icon color="yellow" name="add_shopping_cart" />
          </q-item-section>

          <q-item-section>Products</q-item-section>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-icon color="purple" name="settings" />
          </q-item-section>

          <q-item-section>Settings</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
      <q-page class="flex flex-center">
        <div class="column items-center">
          <div class="text-h4 text-indigo-10 text-italic">ข้อความบรรทัดแรก</div>
          <div class="text-body1 text-weight-bolder text-accent q-pa-sm">ข้อความบรรทัดที่สอง</div>
          <div class="text-caption text-light-blue-14 q-mt-md">ข้อความบรรทัดที่สาม</div>
        </div>
      </q-page>
    </q-page-container>


    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleRightDrawer" />
        <q-toolbar-title>
          <!-- <q-avatar>
            <img src="/logo/logo-mono-white.svg">
          </q-avatar> -->
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>


  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const rightDrawerOpen = ref(false)
const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value
}
</script>