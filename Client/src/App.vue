<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <RouterLink class="navbar-brand" to="/">
          <img src="@/assets/logo.svg" width="30" height="30" alt="">
           Bee Budget
        </RouterLink>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/">Home</RouterLink>
            </li>
          </ul>
        </div>
      </nav>
  </header>
  <RouterView />
</template>
