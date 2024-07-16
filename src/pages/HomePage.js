import React from 'react';
import './HomePage.css'; // Import CSS file for styling

function HomePage() {
    return (
        <div className="home-container">
            <header className="header">
                <h1>Berita Bencana Terbaru</h1>
            </header>
            <div className="article-grid">
                {/* Artikel 1 */}
                <div className="article">
                    <img src="/images/chinatornado.jpg" alt="China Tornado" />
                    <h2>Horor Tornado Tewaskan 5 Orang di China</h2>
                    <p>Wilayah Kabupaten Dongming di Provinsi Shandong, China diterjang bencana tornado. Sedikitnya lima orang tewas dan 88 orang terluka.</p>
                    <a href="https://www.detik.com/jabar/berita/d-7426912/horor-tornado-tewaskan-5-orang-di-china" className="read-more">Baca Selengkapnya</a>
                </div>
                {/* Artikel 2 */}
                <div className="article">
                    <img src="/images/hujan.jpg" alt="SDN Sukadana" />
                    <h2>Atap 3 Ruang Kelas di SDN Sukadana Ambruk gegara Hujan Deras</h2>
                    <p>Indramayu - Bangunan SDN 2 Sukadana, Kecamatan Tukdana, Kabupaten Indramayu ambruk. Bagian atap yang terbuat dari baja ringan di 3 ruang kelas dan ruang guru rusak parah usai diterjang hujan deras.</p>
                    <a href="https://www.detik.com/jabar/cirebon-raya/d-7426948/atap-3-ruang-kelas-di-sdn-sukadana-ambruk-gegara-hujan-deras" className="read-more">Baca Selengkapnya</a>
                </div>
                {/* Artikel 3 */}
                <div className="article">
                    <img src="/images/longsor.jpg" alt="Tasikmalaya Landslide" />
                    <h2>Bencana Alam Tanah Longsor Terjang 17 Titik di Tasikmalaya</h2>
                    <p>Sejumlah petugas BPBD Kabupaten Tasikmalaya dan relawan membersihkan material tanah longsor yang menimbun jalan penghubung antarkecamatan di Desa Nangtang, Kabupaten Tasikmalaya, Jawa Barat, Minggu (30/6/2024).</p>
                    <a href="https://news.detik.com/foto-news/d-7416159/bencana-alam-tanah-longsor-terjang-17-titik-di-tasikmalaya" className="read-more">Baca Selengkapnya</a>
                </div>
                {/* Artikel 4 */}
                <div className="article">
                    <img src="/images/sukabumi.jpg" alt="Sukabumi Flood" />
                    <h2>Banjir hingga Longsor Landa Lengkong Kabupaten Sukabumi</h2>
                    <p>Sedikitnya 8 rumah warga di Desa Tegalega, Kecamatan Lengkong, Kabupaten Sukabumi, terendam banjir, selain itu tercatat satu tempat ibadah dan tiga unit jembatan juga terendam banjir akibat hujan deras yang melanda kawasan tersebut sejak Sabtu (29/6/2024) sore.</p>
                    <a href="https://www.detik.com/jabar/berita/d-7415235/banjir-hingga-longsor-landa-lengkong-kabupaten-sukabumi" className="read-more">Baca Selengkapnya</a>
                </div>
            </div>
            {/* Sidebar atau bagian tambahan */}
            <aside className="sidebar">
                <h2>Kategori Bencana</h2>
                <ul>
                    <li><a href="#">Banjir</a></li>
                    <li><a href="#">Gempa Bumi</a></li>
                    <li><a href="#">Kebakaran Hutan</a></li>
                    {/* Kategori lainnya */}
                </ul>
            </aside>
        </div>
    );
}

export default HomePage;
