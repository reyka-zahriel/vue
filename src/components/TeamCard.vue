<script setup>
defineProps(['nama', 'jabatan', 'foto', 'inisial'])
</script>

<template>
  <article class="team-card">
    <img v-if="foto" class="avatar" :src="foto" :alt="`Foto ${nama}`" />
    <div v-else class="avatar avatar-inisial" aria-hidden="true">{{ inisial }}</div>
    <div>
      <h3>{{ nama }}</h3>
      <p>{{ jabatan }}</p>
    </div>
  </article>
</template>

<style scoped>
.team-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #e4e4e4;
  border-radius: 0.75rem;
  background: #fff;
}

.avatar {
  width: 4rem;
  height: 4rem;
  flex: 0 0 4rem;
  border-radius: 50%;
  object-fit: cover;
}

.avatar-inisial {
  display: grid;
  place-items: center;
  color: #fff;
  background: #2c3e50;
  font-weight: 700;
}

h3,
p {
  margin: 0;
}

h3 {
  color: #2c3e50;
  font-size: 1rem;
}

p {
  color: #68727d;
  font-size: 0.9rem;
}
</style>