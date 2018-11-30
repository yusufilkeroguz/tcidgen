/**
 * @class TCidGen
 * @classdesc
 *
 * Rasgele T.C. Kimlik Numarası oluşturma. T.C. Kimlik numarasının ilk 9 rakamı rasgele, 10 ve 11. rakamları
 * ise ilk 9 rakamın matematiksel olarak işlenmesiyle oluşur. Matematik işlemi oldukça basittir;
 *
 * r<N>: Rasgele Rakamlar
 * o<N>: Matematiksel Rakamlar
 *
 * T.C. Numarası = r1 r2 r3 r4 r5 r6 r7 r8 r9 o1 o2
 *
 * o1 = (((r1 + r3 + r5 + r7 + r9) * 7) - (r2 + r4 + r6 + r8)) % 10
 *
 * o2 = (r1 + r2 + r3 + r4 + r5 + r6 + r7 + r8 + r9 + o1) % 10
 *
 */

let numbers = [];

/**
 * @name generateNumber
 * @description Generate a Number - Bir numara oluştur
 * @param count
 * @param min
 * @param max
 * @returns {number}
 */
const generateNumber = (count, min = 0, max = 9) => {
  if(count === 9) {
      min = 1
  }

  return numbers.push(Math.floor(Math.random() * (max - min) + min))
};

/**
 * @name repeat
 * @description Repeat functions <times>*times - Fonksiyonları tekrarla <times>*kere
 * @param callback
 * @param times
 * @returns {number|*}
 */
const repeat = (callback, times = 9) => {
  callback(times);

  return --times && repeat(callback, times)
};

/**
 * @name getLastFirst
 * @description Generate first of last number - Sondan ilk numaraya oluştur
 * @returns {number}
 */
const getLastFirst = () => {
  const firstCluster = numbers.filter((number, key) => (key + 1) % 2 === 1);
  const secondCluster = numbers.filter((number, key) => (key + 1) % 2 === 0);

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  return ((firstCluster.reduce(reducer) * 7) - (secondCluster.reduce(reducer))) % 10
};

/**
 * @name getLastSecond
 * @description Generate second of last number - Sondan ikinci numaraya oluştur
 * @returns {number}
 */
const getLastSecond = () => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  return numbers.reduce(reducer) % 10
};

/**
 * @name getLastValues
 * @description Generate last numbers - Son numaraları oluştur
 * @returns {array}
 */
const getLastValues = () => {
  numbers.push(getLastFirst());
  numbers.push(getLastSecond());

  return numbers
};

/**
 * @name generateTCKN
 * @description Final function :), generate Republic of Turkey Identification Number -
 * Son fonksiyon :), Türkiye Cumhuriyeti Kimlik Numarası oluştur
 *
 * @returns {string}
 */
const generateTCKN = () => {
  repeat(generateNumber);

  const tempNumbers = getLastValues().join('')

  numbers = []

  return tempNumbers
};

module.exports = generateTCKN;