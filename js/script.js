document.getElementById("messageForm").addEventListener("submit"), function (e) {
      e.preventDefault();}

      // Ambil nilai form
      let nama = document.getElementById("nama").value.trim();
      let tgl = document.getElementById("tgl").value;
      let gender = document.querySelector("input[name='gender']:checked");
      let pesan = document.getElementById("pesan").value.trim();

      // Validasi
      if (nama === "" || tgl === "" || !gender || pesan === "") {
        alert("Semua field harus diisi!");
        return;
      }

      // Waktu sekarang
      let currentTime = new Date();

      // Tampilkan ke output box
      let output = document.getElementById("output");
      output.innerHTML = `
        <p><b>Current time :</b> ${currentTime}</p>
        <p><b>Nama :</b> ${nama}</p>
        <p><b>Tanggal Lahir :</b> ${new Date(tgl).toLocaleDateString("id-ID")}</p>
        <p><b>Jenis Kelamin :</b> ${gender.value}</p>
          <p><b>Pesan :</b> ${pesan}</p>}
        `;