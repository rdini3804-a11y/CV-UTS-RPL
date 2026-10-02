<?php
$pesan_status = "";
if ($_SERVER["REQUES_METHOD"] == "POST" && isset($_POST['btn_kirim'])) {
    $nama = htmlspecialchars($_POST['txt_nama']);
    $email = htmlspecialchars($_POST['txt_email']);
    $pesan = htmlspecialchars($_POST['txt_pesan']);
    
    if (!empaty($nama) && !empaty($email) && !empaty($pesan)) {
        $pesan_status = "<div class='alert-success'>Terima Kasih
 <strong>$nama</strong>, pesan Anda telah berhasil dikirim ke server SMKN
  5 Batam!</div>";
    }
        }    
 ?> 
<!DOCTYPE html>
 <html lang="id">
 <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-
    scale=1.0">
        <title>CV Rahmadini - SMKN 5 Batam</title>
        <link  rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">
    <header>
        <div class="profile-info">
            <div>
                <h1 style="margin:0;">Rahmadini</h1>
                <p style="margin:5px 0 0 0; color: gray;">siswa Teknik 
    Komputer dan Jaringan SMKN 5 Batam</p>
</div>
</div>
<nav>
    <a href="#profil">Home</a>
    <a href="#skills">Skills</a>
    <a href="#kontak">Contact</a>
    <button id="btn-theme"onlick="toggleThemen()"> Dark
Mode</buttonn>
        </nav>
    </header>

    <div class="main-content">

    <div class="left-colum">
        <div class="card" id="profil">
            <h2>PROFIL</h2>
            <h3> BIODATA</h3>
            <p>Pelajar aktif dan praktisi di bidang Teknik komputer 
dan Jaringan dengan fokus pada administrasi server dan keamanan 
jaringan.</p>
            <h3> PENDIDIKAN</h3>
            <ul>
                <li>SDN 012 2015-2021</li>
                <li>mts Al-ukhuwah 2021-2024</li>
                <li>SMKN 5 Batam 2025-2027</li>
            </ul>

            <h3> PENGALAMAN SISWA</h3>
            <ul>
             <li>SISWA TKJ DI SMKN 5 BATAM</li>   
            <li>KONFIGURASI melalui router</li>

                
            </ul>
        </div>
    </div>

    <div class="right-column">
        <div class="card" id="skills">
            <h2>NERWORK SKILLS</h2>

            <div class="skill-item">
                <span class="skill-item">
                    <span class="skill-name">Mikrotik RouterOS</span>
                    <div class="progress-bar"><div class="progress-fill"
style="width: 90%;"></div></div>
               </div>

               <div class="skill-item">
                <span class="skill-name">Cisco Networking</span>
                <div class="progress-bar"><div class="progress-fill"
style="width: 85%;"></div></div>
               </div>

               <div class="skill-item">
                <span class="skill-name">Linux server
(Debian/Ubuntu)</span>
                    <div class="progress-bar"><div class="progress-fill"
style="width: 80%;"></div></div>
                </div>

                <div class="skill-item">
                    <span class="skill-name">Network Security</span>
                    <div class="progress-bar"><div class="progress-fill"
style="width: 75%;"></div></div>
                </div>
            </div>

            <div class="card" id="kontrak">
                <h2>FORM KONTAK</h2>

                <?php echo $pesan_status; ?>

                <form action="<?php echo$_SERVER['PHP_SELF']; ?>"
method="POST">
                     <div class="form-group">
                        <label for="nama">Nama Lengkap:</label>
                        <input type="text" id="nama" name="txt_nama"
placeholder="Masukkan nama..." required>
                    </div>

                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="txt_email"
placeholder="Masukkan email..." required>
                   </div>

                   <div class="form-group">
                    <label for="pesan">pesan:</label>
                    <textarea id="pesan" name="txt_pesan" rows="4"
placeholder="Tulisankan pesan..."required></textarea>
                     </div>

                     <button type="submit" name="btn_kirim" class="btn=
submit">KIRIM PESAN</button>
                </form>
             </div>
        </div>

    </div>
</div>
<script scr="script.js"></script>
</body>
<html
