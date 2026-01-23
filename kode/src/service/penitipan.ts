import api from "../configurations/api";
import {Penitipan as Model} from '../models/penitipan';
import { PenitipanCreate, PenitipanUpdate } from "../models/penitipan";
const Penitipan = {
    // Ambil semua data penitipan
    getPenitipan: () => {
        return api.get("/penitipan")
    },

    // Ambil data penitipan berdasarkan ID
    getPenitipanById: (id: string) =>{
        return api.get(`/penitipan/${id}`);
    },

    // Tambah data penitipan baru
    createPenitipan: (data: PenitipanCreate) => {
        return api.post("/penitipan", data);
    },

    // Update data penitipan
    updatePenitipan: (id: string, data: PenitipanUpdate) => {
        return api.put(`/penitipan/${id}`, data);
    },

    // Hapus data penitipan
    deletePenitipan: (id: string) => {
        return api.delete(`/penitipan/${id}`);
    },

    };
    export default Penitipan;