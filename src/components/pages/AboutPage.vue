<script> setup 
const daftarTeam = [
  {
    nama: 'asep',
    kelas: 'XI RPL 1',
    jurusan: 'Rekayasa Perangkat Lunak', 
  },
  {
    nama: 'udin',
    kelas: 'XI RPL 1',
    jurusan: 'Rekayasa Perangkat Lunak', 
  },
  {
  nama: 'asep',
    kelas: 'XI RPL 1',
    jurusan: 'Rekayasa Perangkat Lunak',
  },
]
</script>
<template>
  <main>
    <div class="film">
      <h1>Tentang Kami</h1>  
      <p>Onlineshop ini dikelola oleh siswa SMK Yadika Soreang jurusan PPLG.</p>
    </div>
    <div class="cerita">
    <h2>Cerita Kami</h2>
    <p>Onlineshop ini dibuat untuk memenuhi tugas sekolah, dan juga untuk mempermudah siswa dalam membeli kebutuhan sekolah.</p>
    </div>
    <div class="foto">
      <img src=""alt="foto tim"/>
    </div>
    <div class="team">
      <TeamCard
        v-for="anggota in daftarTeam"
        :key="anggota.nama"
        :nama="anggota.nama"
        :kelas="anggota.kelas"
        :jurusan="anggota.jurusan"
      />
    </div>
  </main>
</template>

 <style scoped>

 </style>
