<template>
	<main class="kontak-page">
		<section class="intro">
			<p class="eyebrow">Hubungi kami</p>
			<h1>Butuh bantuan?</h1>
			<p class="intro-text">Sampaikan pertanyaan atau masukanmu. Tim Onlineshop Sekolah siap membantu.</p>
		</section>

		<section class="kontak-content" aria-label="Informasi kontak dan formulir kontak">
			<div class="info-kontak">
				<h2>Info Kontak</h2>
				<p>Temukan kami atau kirim pesan lewat salah satu pilihan berikut.</p>

				<div class="info-item">
					<span class="info-icon" aria-hidden="true">📍</span>
					<div>
						<h3>Alamat</h3>
						<p>SMK Yadika Soreang, Bandung</p>
					</div>
				</div>
				<div class="info-item">
					<span class="info-icon" aria-hidden="true">📞</span>
					<div>
						<h3>Telepon</h3>
						<p>+62 812-3456-7890</p>
					</div>
				</div>
				<div class="info-item">
					<span class="info-icon" aria-hidden="true">✉️</span>
					<div>
						<h3>Email</h3>
						<p>onlineshop@smkyadika.sch.id</p>
					</div>
				</div>
			</div>

			<form class="form-kontak" @submit.prevent>
				<h2>Kirim Pesan</h2>
				<label for="nama">Nama</label>
				<input id="nama" type="text" name="nama" placeholder="Nama lengkap" required />

				<label for="email">Email</label>
				<input id="email" type="email" name="email" placeholder="nama@email.com" required />

				<label for="pesan">Pesan</label>
				<textarea id="pesan" name="pesan" rows="5" placeholder="Tulis pesanmu di sini..." required></textarea>

				<button type="submit">Kirim Pesan <span aria-hidden="true">→</span></button>
			</form>
		</section>
	</main>
</template>

<style scoped>
.kontak-page {
	max-width: 1080px;
	margin: 0 auto;
	padding: 3rem 1.5rem 4rem;
}

.intro {
	max-width: 620px;
	margin-bottom: 2.5rem;
}

.eyebrow {
	margin-bottom: 0.5rem;
	color: #008cff;
	font-size: 0.8rem;
	font-weight: 700;
	letter-spacing: 0.12em;
	text-transform: uppercase;
}

h1,
h2,
h3 {
	color: #2c3e50;
}

h1 {
	margin-bottom: 0.75rem;
	font-size: clamp(2rem, 5vw, 3.5rem);
	font-weight: 800;
	line-height: 1.1;
}

.intro-text,
.info-kontak > p,
.info-item p {
	color: #68727d;
}

.intro-text {
	font-size: 1.05rem;
}

.kontak-content {
	display: flex;
	align-items: stretch;
	gap: 3rem;
}

.info-kontak,
.form-kontak {
	flex: 1;
}

.info-kontak {
	padding: 1.5rem 0;
}

h2 {
	margin-bottom: 0.75rem;
	font-size: 1.6rem;
	font-weight: 700;
}

.info-item {
	display: flex;
	align-items: flex-start;
	gap: 1rem;
	margin-top: 1.75rem;
}

.info-icon {
	display: grid;
	width: 2.75rem;
	height: 2.75rem;
	flex: 0 0 2.75rem;
	place-items: center;
	border-radius: 50%;
	background: #ffe2f5;
	font-size: 1.2rem;
}

.info-item h3 {
	margin-bottom: 0.2rem;
	font-size: 1rem;
	font-weight: 700;
}

.form-kontak {
	display: flex;
	flex-direction: column;
	gap: 0.55rem;
	padding: 2rem;
	border: 1px solid rgba(44, 62, 80, 0.08);
	border-radius: 1.25rem;
	background: #fff;
	box-shadow: 0 12px 35px rgba(44, 62, 80, 0.12);
}

.form-kontak h2 {
	margin-bottom: 0.5rem;
}

label {
	margin-top: 0.6rem;
	color: #2c3e50;
	font-size: 0.9rem;
	font-weight: 600;
}

input,
textarea {
	width: 100%;
	padding: 0.8rem 1rem;
	border: 1px solid #d8dee5;
	border-radius: 0.65rem;
	color: #2c3e50;
	background: #fbfcfd;
	font: inherit;
	resize: vertical;
}

input:focus,
textarea:focus {
	outline: 2px solid rgba(0, 140, 255, 0.25);
	border-color: #008cff;
}

button {
	align-self: flex-start;
	margin-top: 1rem;
	padding: 0.8rem 1.35rem;
	border: 0;
	border-radius: 999px;
	color: #fff;
	background: #008cff;
	cursor: pointer;
	font: inherit;
	font-weight: 700;
	transition: transform 0.2s, background-color 0.2s;
}

button:hover {
	background: #2c3e50;
	transform: translateY(-2px);
}

@media (max-width: 700px) {
	.kontak-page {
		padding-top: 2rem;
	}

	.kontak-content {
		flex-direction: column;
		gap: 1.5rem;
	}

	.form-kontak {
		padding: 1.5rem;
	}
}
</style>