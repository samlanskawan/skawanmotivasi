// Daftar 100 kata-kata motivasi lengkap
const kata_kata_semangat = [
    "Tiga tahun ini adalah kanvasmu. Lukislah dengan tinta ilmu dan kuas semangat.",
    "Setiap lembar buku yang kamu buka adalah langkah menuju gerbang kesuksesanmu.",
    "Akan ada hari-hari sulit, namun di situlah karakter juaramu terbentuk.",
    "Rasa lelahmu hari ini adalah investasi untuk senyum bangga di hari kelulusan.",
    "Di jurusan ini, kamu tidak hanya belajar, kamu sedang membangun fondasi masa depanmu.",
    "Keahlianmu akan terasah bukan dalam sehari, tapi dari ribuan jam latihan yang tekun.",
    "Kesalahan bukan kegagalan, tapi bahan bakar untuk menjadi lebih baik. Teruslah mencoba!",
    "Tiga tahun ke depan, fokus pada proses, maka hasil gemilang akan mengikutimu.",
    "Imajinasi adalah aset terbesarmu. Jangan takut untuk menuangkannya menjadi karya nyata.",
    "Di ujung perjalanan tiga tahun ini, toga kebanggaan telah menantimu.",
    "Setiap tugas yang menantang adalah kesempatan untuk menemukan kekuatan baru dalam dirimu.",
    "Jaringan pertemanan yang kamu bangun di sekolah akan menjadi aset berhargamu kelak.",
    "Dengarkan gurumu, hargai ilmunya, maka jalanmu akan lebih mudah.",
    "Ketelitianmu pada hal-hal kecil akan membawamu pada kesuksesan besar.",
    "Jangan bandingkan perjalananmu dengan orang lain. Setiap bunga mekar di waktunya sendiri.",
    "Semangatmu di pagi hari menentukan kualitas belajarmu sepanjang hari.",
    "Percayalah, semua rumus, teori, dan praktik ini akan sangat berguna suatu saat nanti.",
    "Keberanian untuk bertanya adalah kunci untuk membuka pintu pengetahuan yang terkunci.",
    "Kamu dipilih untuk berada di sini karena ada potensi besar dalam dirimu. Buktikan itu!",
    "Tiga tahun ini bukan perlombaan lari, tapi maraton. Atur napas dan energimu dengan bijak.",
    "Setiap baris kode, setiap goresan desain, setiap hitungan adalah doa untuk masa depanmu.",
    "Cita-citamu layak diperjuangkan. Mulailah perjuangan itu dari bangku sekolah ini.",
    "Belajar adalah ibadah, dan prestasimu adalah hasilnya.",
    "Disiplin diri adalah jembatan antara tujuan dan pencapaian.",
    "Teman di sampingmu bukan pesaing, tapi rekan seperjuangan. Tumbuhlah bersama.",
    "Suatu hari nanti, kamu akan berterima kasih pada dirimu sendiri karena tidak menyerah hari ini.",
    "Portofolio terbaikmu adalah kumpulan dari kerja keras dan keringatmu selama tiga tahun.",
    "Jangan takut mengambil risiko kreatif. Di situlah inovasi lahir.",
    "Logika dan kreativitas adalah dua sayap yang akan membuatmu terbang tinggi.",
    "Setiap presentasi di depan kelas melatihmu untuk menjadi pemimpin di masa depan.",
    "Bakat akan kalah dengan kerja keras. Teruslah mengasah kemampuanmu.",
    "Jurusan ini adalah pilihanmu, maka jadikanlah ia sebagai kebanggaanmu.",
    "Saat kamu merasa ragu, ingat kembali alasan kuat mengapa kamu memulai ini semua.",
    "Ilmu yang bermanfaat adalah ilmu yang dibagikan. Jangan pelit berbagi dengan teman.",
    "Kesehatanmu adalah modal utama. Jaga pola makan dan istirahatmu agar tetap prima.",
    "Tantangan terberatmu bukanlah pelajaran, tapi melawan rasa malas dalam diri.",
    "Sentuhan kreativitasmu akan menjadi pembeda di antara yang lain.",
    "Konsistensi adalah kunci. Sedikit kemajuan setiap hari akan menjadi bukit kesuksesan.",
    "Kesuksesan tidak datang tiba-tiba, ia dibangun dari kebiasaan-kebiasaan baik setiap hari.",
    "Percayai prosesnya. Biji tidak langsung menjadi pohon dalam semalam.",
    "Hargai setiap masukan dan kritik, karena itu adalah pupuk untuk pertumbuhanmu.",
    "Kemampuanmu beradaptasi dengan teknologi baru akan menentukan relevansimu di masa depan.",
    "Kejujuran adalah mata uang yang berlaku di mana saja, termasuk di dunia sekolah dan kerja.",
    "Tiga tahun adalah waktu yang singkat untuk belajar seumur hidup. Manfaatkan semaksimal mungkin.",
    "Setiap proyek kelompok adalah latihan untuk berkolaborasi di dunia profesional.",
    "Jangan hanya menjadi siswa, jadilah seorang pembelajar sejati.",
    "Kemampuanmu memecahkan masalah (problem-solving) adalah skill termahal di masa depan.",
    "Di tengah kesibukan, luangkan waktu untuk mengapresiasi pencapaian kecilmu.",
    "Kamu lebih kuat dan lebih cerdas dari yang kamu kira. Percayalah pada dirimu.",
    "Ilmu di kepalamu dan keahlian di tanganmu adalah harta yang tak akan pernah hilang.",
    "Gelar hanyalah bonus, proses belajar dan karakter yang terbentuk adalah hadiah utamanya.",
    "Tetaplah rendah hati saat meraih prestasi dan tetaplah tegak saat menghadapi ujian.",
    "Keingintahuanmu adalah kompas yang akan menuntunmu pada penemuan-penemuan hebat.",
    "Masa depan industri yang kamu pilih ada di tangan generasi kreatif sepertimu.",
    "Jangan biarkan keraguan orang lain memadamkan api semangat dalam dirimu.",
    "Setiap detail yang kamu kerjakan dengan sepenuh hati akan menghasilkan karya yang luar biasa.",
    "Sukses adalah perjalanan, bukan tujuan akhir. Nikmati setiap langkahnya di sekolah ini.",
    "Buku adalah jendela dunia, dan ruang kelas adalah tempatmu belajar cara membukanya.",
    "Keterampilan berkomunikasimu akan membuka pintu-pintu rezeki yang tak terduga.",
    "Belajarlah dari para ahli, tapi jangan takut untuk menciptakan gayamu sendiri.",
    "Tiga tahun ini, kamu akan jatuh. Pastikan kamu bangkit lebih tinggi setiap kalinya.",
    "Energi positifmu menular. Sebarkan semangat itu ke teman-teman di sekitarmu.",
    "Otakmu seperti otot, semakin sering dilatih dengan soal sulit, ia akan semakin kuat.",
    "Jadikan dinding kamarmu penuh dengan rencana dan mimpi, bukan hanya poster.",
    "Saat kamu lulus, yang akan dikenang bukan hanya nilaimu, tapi juga integritasmu.",
    "Jurusan ini akan mengajarimu cara berpikir yang sistematis dan terstruktur.",
    "Jangan takut berbeda. Dunia membutuhkan perspektif unik sepertimu.",
    "Setiap keterampilan baru yang kamu pelajari adalah satu anak tangga menuju puncak.",
    "Kelak, kamu akan merindukan masa-masa belajar ini. Jadi, buatlah setiap momen berkesan.",
    "Manfaatkan fasilitas sekolah sebaik-baiknya, itu adalah hak dan kesempatanmu.",
    "Ujian sejati bukanlah di atas kertas, tapi bagaimana kamu menerapkan ilmumu dalam kehidupan.",
    "Terus update dirimu. Pengetahuan berkembang setiap detik.",
    "Sebuah karya yang selesai jauh lebih baik daripada karya sempurna yang hanya ada di angan-angan.",
    "Kecepatan itu penting, tapi ketepatan dan kualitas jauh lebih penting.",
    "Jadilah seperti spons, serap semua ilmu baik dari mana saja.",
    "Kegagalan hari ini adalah cerita sukses yang akan kamu ceritakan di masa depan.",
    "Kamu sedang dipersiapkan untuk menjadi solusi atas masalah di masyarakat.",
    "Tetap fokus pada tujuanmu, bahkan ketika banyak distraksi di sekitarmu.",
    "Prestasi akademik itu penting, tapi pengembangan karakter jauh lebih utama.",
    "Mintalah doa restu orang tua, karena itu adalah bahan bakar semangat yang tak ada habisnya.",
    "Jangan hanya menunggu kesempatan, ciptakanlah kesempatanmu sendiri.",
    "Setiap jam yang kamu habiskan untuk belajar adalah investasi masa depan yang paling menguntungkan.",
    "Belajarlah untuk mengelola waktumu, maka kamu akan bisa mengelola hidupmu.",
    "Dunia kerja mencari mereka yang punya keahlian, bukan hanya ijazah. Fokuslah pada keahlianmu.",
    "Apresiasi prosesnya, sekecil apapun kemajuan yang kamu buat hari ini.",
    "Keseimbangan antara belajar, bermain, dan beristirahat adalah kunci menuju kesuksesan jangka panjang.",
    "Kamu adalah arsitek dari nasibmu sendiri. Sekolah ini adalah tempatmu merancang fondasinya.",
    "Terus asah soft skill-mu: komunikasi, kerja tim, dan kepemimpinan.",
    "Jadikan rasa penasaran sebagai sahabat terbaikmu selama tiga tahun ini.",
    "Setiap tantangan adalah cara semesta memberitahumu bahwa kamu siap untuk naik level.",
    "Kesabaran adalah teman terbaik saat mengerjakan proyek yang rumit.",
    "Jangan pernah meremehkan kekuatan satu ide cemerlang yang dieksekusi dengan baik.",
    "Kamu tidak hanya belajar untuk dirimu sendiri, tapi juga untuk membanggakan orang-orang yang mendukungmu.",
    "Teknologi ada untuk membantumu, bukan untuk menggantikan usahamu.",
    "Di akhir perjalanan ini, kamu akan keluar sebagai pribadi yang lebih matang, terampil, dan percaya diri.",
    "Beranilah mengakui 'saya tidak tahu' dan bersemangatlah untuk mencari tahu.",
    "Catatan yang rapi adalah cerminan dari pikiran yang terorganisir.",
    "Hadapi setiap semester baru dengan semangat dan rencana yang baru.",
    "Perjalanan seribu mil dimulai dengan satu langkah. Langkahmu hari ini di sekolah sangatlah berarti."
];

document.addEventListener('DOMContentLoaded', () => {
    // Ambil semua elemen yang kita butuhkan
    const halamanForm = document.getElementById('halaman-form');
    const halamanHasil = document.getElementById('halaman-hasil');
    
    const tombolGenerate = document.getElementById('tombol-generate');
    const tombolDownload = document.getElementById('tombol-download');
    const tombolKembali = document.getElementById('tombol-kembali');

    // Fungsi untuk menghasilkan motivasi
    tombolGenerate.addEventListener('click', () => {
        const nama = document.getElementById('nama').value.trim();
        const jurusan = document.getElementById('jurusan').value;
        const tanggalHariIni = new Date().toISOString().split('T')[0];

        if (nama === '') {
            alert('Mohon isi namamu terlebih dahulu!');
            return;
        }

        // Logika mendapatkan motivasi harian
        const storageKey = `ramalan-${nama.toLowerCase()}-${tanggalHariIni}`;
        let ramalanTerpilih;
        if (localStorage.getItem(storageKey)) {
            const randomIndex = parseInt(localStorage.getItem(storageKey));
            ramalanTerpilih = kata_kata_semangat[randomIndex];
        } else {
            const randomIndex = Math.floor(Math.random() * kata_kata_semangat.length);
            ramalanTerpilih = kata_kata_semangat[randomIndex];
            localStorage.setItem(storageKey, randomIndex);
        }

        // Isi konten di halaman hasil
        document.getElementById('hasil-nama').textContent = `Untuk, ${nama}`;
        document.getElementById('hasil-motivasi').textContent = `"${ramalanTerpilih}"`;
        document.getElementById('hasil-jurusan').textContent = jurusan;
        document.getElementById('hasil-tanggal').textContent = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });

        // Ganti tampilan
        document.body.style.backgroundColor = '#667eea';
        halamanForm.style.display = 'none';
        halamanHasil.style.display = 'flex';
    });

    // Fungsi untuk tombol kembali
    tombolKembali.addEventListener('click', () => {
        document.body.style.backgroundColor = '#f0f4f8';
        halamanHasil.style.display = 'none';
        halamanForm.style.display = 'block';
    });

    // Fungsi untuk tombol download
    tombolDownload.addEventListener('click', () => {
        const storyContainer = document.getElementById('story-container');
        const nama = document.getElementById('nama').value.trim();
        const tanggal = new Date().toISOString().split('T')[0];
        const namaFile = `motivasi-${nama.replace(/\s/g, '-')}-${tanggal}.png`;

        html2canvas(storyContainer, {
            width: 1080,
            height: 1920,
            scale: 1,
            backgroundColor: null
        }).then(canvas => {
            const link = document.createElement('a');
            link.download = namaFile;
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    });
});