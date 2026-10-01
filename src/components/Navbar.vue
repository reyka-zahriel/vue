<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="topbar">
    <h2>SMK Yadika Soreang - Onlineshop</h2>
    <div class=" nav-links">
      <RouterLink to="/landing">Landing</RouterLink> |
      <RouterLink to="/product">Product</RouterLink> |
      <RouterLink to="/about">About</RouterLink> |
      <RouterLink to="/kontak">Kontak</RouterLink>
    </div>
  </nav>
</template>

<style scoped>
.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 16px 24px;
  background-color: #19a4ce;
  border-radius: 1px solid #eb0e87;
  box-shadow: 2px 8px rgba(15, 23, 42, 0.1);
}

.topbar h2 {
  margin: 0;
  font-size: 1.1rem;
  color: #9454fa;
}

.nav links {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}

.nav-links a {
  color: #fff;
  font-weight: 500;
  padding: 6px 10px;
  border-radius: 8px;
}

.nav-links a:hover {
  background: #e752ec;
  text-decoration: none;
}

@media (max-width: 640px) {
  .topbar {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>