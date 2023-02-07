// soal no 5


let NilaiSantri = [ 5, 9, 6, 7, 9, 8, 10, 7, 8]
document.write(NilaiSantri)
document.write('<br><br>')

// maencari mean

let keseluruhan = [
    NilaiSantri[0] +
    NilaiSantri[1] +
    NilaiSantri[2] +
    NilaiSantri[3] +
    NilaiSantri[4] +
    NilaiSantri[5] +
    NilaiSantri[6] +
    NilaiSantri[7] +
    NilaiSantri[0] ]


    let mean = [keseluruhan / NilaiSantri.length]

    document.write('mean : '+ mean);
    document.write('<br><br>')

    // median


let median = NilaiSantri.sort(function(a, b){
    return a - b
})
document.write(median.join(', '), '<br>')

document.write('Nilai median : '+ median[4])
document.write('<br><br>')



// modus


let modus = ['Modus : ']
document.write(modus)
function cariModus(arr) {
    let arrModus = [], isSame = false;
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          isSame = true;
          arrModus.push(arr[i]);
        } else {
          isSame = false;
        }
      }
    }
    return (arrModus[0] === undefined || isSame) ? -1 : arrModus[0];
  }
  
  document.write (cariModus([5,9,6,7,9,8,10,7,8]));
  document.write('<br></br>')


  // simpangan baku
  

  let dataNilai1 = [5, 9, 6, 7, 9, 8, 10, 7, 8];
let nilaiRataRata = dataNilai1.reduce((a, b) => a + b, 0);
let rataRata = (nilaiRataRata / dataNilai1.length).toFixed(2);
hitung1 = dataNilai1.map((k) => {
    return((k - rataRata))** 2  
})
const jumlah = hitung1.reduce((a, b) => a + b, 0);
const bagi = (jumlah / dataNilai1.length);
const rapihin = bagi.toFixed();
const akhir = (rapihin) => {
  return Math.sqrt(rapihin);
}
const akhirBeneran = akhir(rapihin)

document.write(`Simpangan Baku = ${akhirBeneran.toFixed(2)}`);
  



