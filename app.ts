// Import elemen-elemen DOM dari HTML
const NamaSembakoInput = document.getElementById('namaSembako') as HTMLInputElement;
const HargaSembakoInput = document.getElementById('hargaSembako') as HTMLInputElement;
const tambahSembakoBtn = document.getElementById('tambahSembako') as HTMLButtonElement;
const sembakoList = document.getElementById('sembakoList') as HTMLUListElement;

// Definisikan sebuah interface untuk objek Sembako
interface Sembako {
  name: string;
  value: number;
}

// Buat sebuah array kosong untuk menyimpan data-data sembako
const lists: Sembako[] = [];

// Buat fungsi untuk menampilkan data-data sembako dalam list
function displaySembako() {
    // Kosongkan list yang sudah ada
    sembakoList.innerHTML = '';

    // Lakukan perulangan melalui setiap data dalam array dan buat item list untuknya
    lists.forEach((data, index) => {
        const li = document.createElement('li');
        li.innerText = `${index + 1}. ${data.name} - Rp. ${data.value}`;
        sembakoList.appendChild(li);
    });
}

// Tambahkan event listener saat tombol "Tambah Sembako" diklik
tambahSembakoBtn.addEventListener('click', () => {
    // Dapatkan nilai dari nama sembako dan harga dari input field
    const namaSembako = NamaSembakoInput.value;
    const hargaSembako = Number(HargaSembakoInput.value);

    // Periksa apakah keduanya (nama dan harga sembako) sudah diisi
    if (namaSembako && hargaSembako) {
        // Buat objek data baru dengan nilai yang telah diisi
        const newSembako: Sembako = {
            name: namaSembako,
            value: hargaSembako,
        };

        // Tambahkan data baru ke dalam array lists
        lists.push(newSembako);

        // Panggil fungsi displaySembako untuk memperbarui list data sembako pada halaman website
        displaySembako();

        // Kosongkan input fields setelah aset berhasil ditambahkan
        NamaSembakoInput.value = '';
        HargaSembakoInput.value = '';
    } else {
        alert("Nama semua bidang harus terisi");
    }
});
