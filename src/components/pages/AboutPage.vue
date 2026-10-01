<script setup>
import TeamCard from '../TeamCard.vue'

const daftarTim = [
  {
    nama: 'mang asep',
    jabatan: 'Frontend Developer',
    inisial: 'A',
  },
  {
    nama: 'mang usman',
    jabatan: 'UI Designer',
    inisial: 'U',
  },
  {
    nama: 'mang asep',
    jabatan: 'Product Manager',
    inisial: 'A',
  },
]
</script>

<template>
  <main>
    <div class="film">
      <h1>Tentang Kami</h1>  
      <p>Onlineshop ini dikelola oleh siswa SMK Yadika Soreang jurusan PPLG.</p>
    </div>
    <section class="cerita">
      <div class="cerita-teks">
        <h2>Cerita Kami</h2>
        <p>Onlineshop ini dibuat untuk memenuhi tugas sekolah, dan juga untuk mempermudah siswa dalam membeli kebutuhan sekolah.</p>
      </div>
      <div class="foto">
        <div class="foto-placeholder" role="img" aria-label="Foto tim Reyka">Reyka</div>
      </div>
    </section>
    <div class="team">
      <TeamCard
        v-for="(anggota, index) in daftarTim"
        :key="`${anggota.nama}-${index}`"
        :nama="anggota.nama"
        :jabatan="anggota.jabatan"
        :foto="anggota.foto"
        :inisial="anggota.inisial"
      />
    </div>
  </main>
</template>

<style scoped>
main {
  max-width: 960px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
}

.film {
  margin-bottom: 3rem;
  text-align: center;
}

.cerita {
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-bottom: 3rem;
}

.cerita-teks,
.foto {
  flex: 1;
}

.cerita h2 {
  margin-bottom: 0.75rem;
  color: #2c3e50;
}

.cerita p {
  color: #68727d;
}

.foto-placeholder {
  display: grid;
  min-height: 190px;
  place-items: center;
  border-radius: 1rem;
  color: #fff;
  background: #2c3e50;
  font-size: 2rem;
  font-weight: 700;
}

.team {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

@media (max-width: 700px) {
  .cerita {
    flex-direction: column;
    align-items: stretch;
    gap: 1.5rem;
  }

  .team {
    grid-template-columns: 1fr;
  }
}

</style>
