const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const daftarWarung = [
  {
    kd_produk: "A001",
    nm_brg: "Kopi Bubuk 500g",
    hrg: "100000",
    ket_stok: "ada",
  },
  {
    kd_produk: "A002",
    nm_brg: "Kecap 500ml",
    hrg: "30000",
    ket_stok: "ada",
  },
  {
    kd_produk: "A003",
    nm_brg: "Garam 250g",
    hrg: "15000",
    ket_stok: "habis",
  },
];

app.get("/", (req, res) => {
  res.send(
    "Selamat Datang di Vendor A - Warung Saya, /daftarWarung untuk melihat data warung."
  );
});

app.get("/daftarWarung", (req, res) => {
  res.json(daftarWarung);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});

module.exports = app;
