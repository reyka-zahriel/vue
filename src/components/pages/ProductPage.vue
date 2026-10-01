<script setup>
import ProductCard from '../ProductCard.vue'
 
const daftarProduk = [
  { id: 1, nama: 'Kaos Sekolah', harga: 75000, gambar: '/public/poto/baju.sekolah.jpeg' },
  { id: 2, nama: 'Topi Sekolah', harga: 35000, gambar: '/public/poto/topi.sekolah.jpeg' },
  { id: 3, nama: 'Tas Sekolah', harga: 120000, gambar: '/public/poto/tas.sekolah.jpeg' },
]
</script>
 
<template>
  <main>
    <h1>Produk Kami</h1>
    <div class="grid">
      <ProductCard
        v-for="produk in daftarProduk"
        :key="produk.id"
        :nama="produk.nama"
        :harga="produk.harga"
        :gambar="produk.gambar"
      />
    </div>
  </main>
</template>
 
<style scoped>
.grid {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
</style>