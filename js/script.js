// animasi untuk header
window.addEventListener("scroll", function() {
    var header = document.getElementById("header");
    if (window.scrollY > 50) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  });

  // animasi untuk teks hubungi kami
  window.addEventListener("scroll", function() {
    var header = document.getElementById("hubungi-kami");
    if (window.scrollY > 50) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  });

// button go to up
let button = document.getElementById("btnUp");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// form validasi
function validateForm() {
  let x = document.forms["myForm"]["fname","femail","ftel","fpesan"].value;
  if (x == "") {
    Swal.fire({
      icon: "error",
      title: "Kesalahan",
      text: "Form wajib diisi semua"
    });
    return false;
  }
  else {
    Swal.fire({
      title: "Pesan Terkirim",
      text: "Silahkan Menikmati Pesanan Anda",
      icon: "success",
      confirmButtonText: "Kembali"
    });
    return false;
  }
}