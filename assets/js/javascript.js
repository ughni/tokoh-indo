// navbar

const btnSearch = document.querySelector(".search-nav");
// tolbol search
const inputSearch = document.querySelector(".input-search");
btnSearch.addEventListener("click", (event) => {
  inputSearch.classList.toggle("aktifSearch");
  event.preventDefault();
});

document.addEventListener("click", (event) => {
  // ini btn search
  if (!inputSearch.contains(event.target) && !btnSearch.contains(event.target)) {
    inputSearch.classList.remove("aktifSearch");
  }
  // ini btn keranjang
  if (!btnKeranjang.contains(event.target) && !keranjangSop.contains(event.target)) {
    keranjangSop.classList.remove("aktifKeranjang");
  }
  // ini btn navbar
  if (!menuNav.contains(event.target) && !linkNav.contains(event.target)) {
    linkNav.classList.remove("aktifLlinkNav");
  }
});
// keranjang btn
const btnKeranjang = document.querySelector(".keranjang-nav");
const keranjangSop = document.querySelector(".keranjang");
btnKeranjang.addEventListener("click", (event) => {
  keranjangSop.classList.toggle("aktifKeranjang");

  event.preventDefault();
});

const menuNav = document.querySelector(".menu-nav");
const linkNav = document.querySelector(".link-nav");
menuNav.addEventListener("click", (event) => {
  linkNav.classList.toggle("aktifLlinkNav");
  event.preventDefault();
});

// menu shoppe
// cek user beli berapa
const keranjangAngka = document.querySelector(".card");
const keranjangAngka1 = document.querySelector(".card1");
const imgShoope = document.querySelectorAll(".img-shoope");
let angka = 0;
let angka1 = 0;
// prompt("keje")
imgShoope.forEach((img) => {
  img.addEventListener("click", (event) => {
    const user = prompt("Apakah anda yakin mau bali kalo mau beli isi dibawah ini => iya");
    if (user === "iya") {
      angka++;
      keranjangAngka.textContent = angka;
      alert(`Anda Pesan Ada ${keranjangAngka.innerHTML} Beli`);
    } else if (user === "keranjang") {
      angka1++;
      keranjangAngka1.textContent = angka1;
      alert(`${keranjangAngka1.innerHTML} keranjang`);
    } else {
      alert("Anda Tidak Jadi Beli");
    }
    event.preventDefault();
  });

  // fitur yang kalo user memmbatalkan beli
  // bikin 2 beli  sama keranjang
});

// tombol mehapus beli atau keranjang
// const btnBatal = document.getElementById("btnBatal1");
// btnBatal.addEventListener("click", () => {
//   keranjangAngka
// })

// pesan user
const namaUser = document.getElementById("namaUser");
const pesanUser = document.getElementById("pesanUser")
const User1 = document.getElementById("User1")
const kirimPesan = document.getElementById("kirimPesan");
const nama1 = document.getElementById("nama1");

// User1.textContent = 'b'

kirimPesan.addEventListener("click", (event) => {
  const usernama = namaUser.value;
  const userpesan = pesanUser.value;
  nama1.textContent = usernama
  User1.textContent = userpesan
  event.preventDefault();
});
