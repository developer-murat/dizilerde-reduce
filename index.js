//  Array Methods (dizi metodları)
//  .reduce()

const urunler = [
    { id: 1, name: "Kalem", fiyat: 5 },
    { id: 2, name: "Defter", fiyat: 10 },
    { id: 3, name: "Silgi", fiyat: 2 },
    { id: 4, name: "Kalemtraş", fiyat: 7 }
];

const toplamUrunFiyati = urunler.reduce((toplam, urun) => toplam = toplam + urun.fiyat, 0)

console.log({ toplamUrunFiyati })

const toplamString = urunler.reduce(
    // (toplam, urun) => (toplam = toplam + urun.name), "Urun İsimleri: "
    (toplam, urun) => (toplam = `${toplam} ${urun.name}`), "Urun İsimleri: "
);

console.log(toplamString);

// const toplamDizi = urunler.reduce(
//     (toplam, urun) => (toplam = [...toplam, urun.name]), []
// );

// const toplamDizi = urunler.map((urun) => urun.name);
const toplamDizi = urunler.map((urun) => `${urun.name} ${urun.fiyat} TL`);

console.log(toplamDizi);