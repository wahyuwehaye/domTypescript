// Import elemen-elemen DOM dari HTML
var NamaSembakoInput = document.getElementById('namaSembako');
var HargaSembakoInput = document.getElementById('hargaSembako');
var tambahSembakoBtn = document.getElementById('tambahSembako');
var sembakoList = document.getElementById('sembakoList');
// Buat sebuah array kosong untuk menyimpan data-data sembako
var lists = [];
// Buat fungsi untuk menampilkan data-data sembako dalam list
function displaySembako() {
    // Kosongkan list yang sudah ada
    sembakoList.innerHTML = '';
    // Lakukan perulangan melalui setiap data dalam array dan buat item list untuknya
    lists.forEach(function (data, index) {
        var li = document.createElement('li');
        li.innerText = index + 1 + ". " + data.name + " - Rp. " + data.value;
        sembakoList.appendChild(li);
    });
}
// Tambahkan event listener saat tombol "Tambah Sembako" diklik
tambahSembakoBtn.addEventListener('click', function () {
    // Dapatkan nilai dari nama sembako dan harga dari input field
    var namaSembako = NamaSembakoInput.value;
    var hargaSembako = Number(HargaSembakoInput.value);
    // Periksa apakah keduanya (nama dan harga sembako) sudah diisi
    if (namaSembako && hargaSembako) {
        // Buat objek data baru dengan nilai yang telah diisi
        var newSembako = {
            name: namaSembako,
            value: hargaSembako
        };
        // Tambahkan data baru ke dalam array lists
        lists.push(newSembako);
        // Panggil fungsi displaySembako untuk memperbarui list data sembako pada halaman website
        displaySembako();
        // Kosongkan input fields setelah aset berhasil ditambahkan
        NamaSembakoInput.value = '';
        HargaSembakoInput.value = '';
    }
    else {
        alert("Nama semua bidang harus terisi");
    }
});
