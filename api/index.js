const express = require("express");
const mysql = require("mysql2");
const cors = require ("cors");

const app = express ();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "penitipan_hewan",
});

app.get("/", (req, res) =>{
    res.status(200).json({ message: "API Versi 0.1.0"});
});

app.get("/penitipan", (req,res)=>{
    try {
        db.query("SELECT * FROM penitipan", (e, data) => {
            if (e) throw e;

            return res.status(200).json(data);
        });
    } catch (eror) {
      console.log(eror);
    }
});

app.get("/penitipan/:id", (req, res) => {
    try {
        const id = req.params.id;

        db.query(`SELECT * FROM penitipan WHERE id = ${id} `, (e, data) => {
            if (e) throw e;

            return res.status(200).json(data);
        });
    } catch (eror) {
         console.log(eror);
    }
});

app.post("/penitipan", (req, res) => {
    try {
        const {nama_pemilik, nama_hewan, jenis_hewan, layanan, tanggal_masuk, tanggal_keluar, harga, status} = req.body;

        db.query(
            `INSERT INTO penitipan
            (
                nama_pemilik,
                nama_hewan,
                jenis_hewan,
                layanan,
                tanggal_masuk,
                tanggal_keluar,
                harga,
                status
            )
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                nama_pemilik,
                nama_hewan,
                jenis_hewan,
                layanan,
                tanggal_masuk,
                tanggal_keluar,
                harga,
                status
            ],
            (e, data) => {
            if (e) throw e;

            return res.status(201).json(req.body);
        });
    } catch (eror) {
        console.log(eror);
    }
});

app.put("/penitipan/:id", (req, res) => { 
  try {
    const { id } = req.params;
    const {
      nama_pemilik,
      nama_hewan,
      jenis_hewan,
      layanan,
      tanggal_masuk,
      tanggal_keluar,
      harga,
      status
    } = req.body; 

    db.query(
      `UPDATE penitipan SET
        nama_pemilik = '${nama_pemilik}',
        nama_hewan = '${nama_hewan}',
        jenis_hewan = '${jenis_hewan}',
        layanan = '${layanan}',
        tanggal_masuk = '${tanggal_masuk}',
        tanggal_keluar = '${tanggal_keluar}',
        harga = ${harga},
        status = '${status}'
       WHERE id = ${id}`,
      (e, data) => {
        if (e) throw e;

        return res.status(200).json(req.body);
      });
  } catch (error) {
    console.log(error);
  }
});

app.delete("/penitipan/:id", (req, res) => {
  try {
    const id = req.params.id;

    db.query(`DELETE FROM penitipan WHERE id = ${id}`, (e, data) => {
      if (e) throw e;

      return res.status(200).json({ message: "Delete Berhasil" });
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000, () => {
    console.log("Server Running");
});