<template>
  <main>
    <section class="hero">
      <h1>Selamat Datang di Onlineshop Sekolah</h1>
      <p>Belanja gampang, sekolah senang.</p>
      <RouterLink to="/product" class="tombol">Lihat Produk</RouterLink>
    </section>
    <div class="card">
      <div class="box">
        <span class="emote">✅</span>
        <h2>harga sekolah</h2>
        <p>Rp 35.000</p>
      </div>
      <div class="box">
        <span class="emote">😍</span>
        <h2>Harga lapang</h2>
        <p>Rp 35.000</p>
      </div>
      <div class="box">
        <span class="emote">❤️</span>
        <h2>Harga gedung</h2>
        <p>Rp 35.000</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 5rem;
}
 
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem 5rem 2rem 5rem;
  text-align: center;
  background: linear-gradient(to bottom, rgb(0, 140, 255), rgb(191, 188, 221));
  border-radius: 20px;
}  
.card {
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  gap: 2rem;
  align-items: stretch;
  padding: 2rem;
}

.box {
  margin-top: 2rem;
  padding: 2rem 3rem;
  border-radius: 90px;
  background-color: #0a0404;
  color: #fff;
  font-weight: 500;
  transition: background-color 0.3s;
}

.tombol:hover {
  background-color: #0a0404;
  transform: translateY(-5px);
}
.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: rgb(253, 159, 222);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.359);
  text-align: center;
  font-size: 1rem;
}
.emote {
  font-size: 2rem;
}

</style>