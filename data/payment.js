export const paymentMethods = [
  {
    id: "transfer",
    label: "Transfer Bank",
    icon: "bank",
    description:
      "Pembayaran melalui transfer ke rekening resmi perusahaan untuk nominal berapa pun, disertai bukti transfer.",
    details: ["BCA", "Mandiri", "BRI", "BNI"],
  },
  {
    id: "qris",
    label: "QRIS",
    icon: "qris",
    description:
      "Pindai satu kode QRIS dengan seluruh aplikasi mobile banking dan dompet digital yang mendukung QRIS.",
    details: ["Semua Mobile Banking", "GoPay", "OVO", "DANA"],
  },
  {
    id: "ewallet",
    label: "E-Wallet",
    icon: "wallet",
    description:
      "Pembayaran praktis melalui dompet digital dengan konfirmasi instan untuk transaksi cepat.",
    details: ["GoPay", "OVO", "DANA", "ShopeePay"],
  },
];

export const paymentTerms = [
  {
    step: "01",
    title: "Uang Muka (DP) 50%",
    text: "Dibayarkan setelah proposal dan ruang lingkup kerja disetujui, sebagai tanda dimulainya proses pengerjaan proyek.",
  },
  {
    step: "02",
    title: "Pelunasan 50%",
    text: "Dibayarkan setelah pekerjaan selesai dan hasil akhir diserahterimakan sesuai kesepakatan bersama.",
  },
];

export const paymentNotes = [
  "Seluruh pembayaran hanya melalui rekening dan kanal resmi PT Banantara Joury.",
  "Rincian biaya akhir disesuaikan dengan ruang lingkup pekerjaan pada proposal.",
  "Kuitansi dan bukti pembayaran resmi diberikan untuk setiap transaksi.",
];
