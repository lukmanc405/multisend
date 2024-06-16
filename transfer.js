// Bridge untuk mengakses web3
const { ethers } = require("ethers");
const { RPC, ETHERSCAN } = require("./config");
const addresses = require("./config").addresses;
const privateKey = require("./config").keys.main;

// Contract ABI dan alamat
const tokenABI = require("./tokenABI.json");
const tokenAddress = "0xDbb195201583EB541146Df350A4798049935BD18"; // Ganti sc token // address wallet

const provider = new ethers.providers.JsonRpcProvider(RPC);
const wallet = new ethers.Wallet(privateKey, provider);

(async function () {
  try {
    console.log("== Memulai Transaksi ==");

    const tokenContract = new ethers.Contract(tokenAddress, tokenABI, wallet);

    const transferAmount = ethers.BigNumber.from("100000000000"); // Ganti dengan jumlah token yang ingin Anda transfer (dalam satuan uint256)

    const iterations = 1000; // Tentukan jumlah pengulangan untuk melakukan transaksi berulang

    let transferCounter = 0; // Inisialisasi counter untuk nomor urut transfer

    for (let j = 0; j < iterations; j++) {
      console.log(`=== Iterasi ${j + 1} ===`);

      for (let i = 0; i < 1999; i++) {
        try {
          const toAddress = addresses[`W_${i + 2}`];
          const transaction = await tokenContract.transfer(toAddress, transferAmount);
          transferCounter++; // Tambahkan counter setiap kali transfer berhasil
          console.log(`Transfer Berhasil ke ${toAddress}. Tx => [${transaction.hash}] - Nomor Urut: ${transferCounter}`);

          // Menambahkan jeda 30 detik
          await new Promise((resolve) => setTimeout(resolve, 30000));
        } catch (innerErr) {
          // Hilangkan atau komentar baris berikut untuk menghilangkan log error
          // console.error(`Gagal transfer ke ${addresses[`W_${i + 2}`]}. Error: ${innerErr.message}`);
        }
      }
    }

    console.log(`== Transfer Selesai! ==`);
    console.log(`Lihat transaksi di: ${ETHERSCAN}/address/${wallet.address}`);

  } catch (err) {
    // Hilangkan atau komentar baris berikut untuk menghilangkan log error utama
    // console.error(`Error utama: ${err.message}`);
  }
})();
