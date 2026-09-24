<script setup> 
import { ref } from 'vue' 
  
defineProps(['nama', 'harga', 'gambar']) 
  
const gambarDipilih = ref(null) 
  
function bukaPreview(src) { 
  gambarDipilih.value = src 
} 
  
function tutupPreview() { 
  gambarDipilih.value = null 
} 
</script> 
  
<template> 
<div class="card"> 
  <img :src="gambar" :alt="nama" @click="bukaPreview(gambar)" /> 
  <h3>{{ nama }}</h3> 
  <p>Rp {{ harga.toLocaleString('id-ID') }}</p> 
  <button @click="tambahKeKeranjang(nama)">Tambah ke Keranjang</button> 
</div> 
  <div class="card"> 
    <img :src="gambar" :alt="nama" @click="bukaPreview(gambar)" /> 
    <h3>{{ nama }}</h3> 
    <p>Rp {{ harga.toLocaleString('id-ID') }}</p> 
  </div> 
  
  <div v-if="gambarDipilih" class="preview-overlay" @click="tutupPreview"> 
    <img :src="gambarDipilih" class="preview-besar" /> 
  </div> 
</template> 
  
<style scoped> 
button { 
  margin-top: 8px; 
  padding: 6px 12px; 
  border: none; 
  border-radius: 6px; 
  background: #2E75B6;
}
.card { 
  border: 1px solid #ddd; 
  border-radius: 10px; 
  padding: 14px; 
  width: 200px; 
  text-align: center; 
} 
.card img { width: 100%; border-radius: 6px; cursor: pointer; } 
  
.preview-overlay { 
  position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
  background: rgba(0, 0, 0, 0.7); 
  display: flex; align-items: center; justify-content: center; 
  cursor: zoom-out; 
} 
.preview-besar { max-width: 80%; max-height: 80%; border-radius: 8px; } 
</style> 
