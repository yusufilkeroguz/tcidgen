# TCidGen

Generate Republic of Turkey Identification Number

Turkiye Cumhuriyeti Kimlik Numarası oluşturma

## Installation 

```bash
npm i tcidgen
```

## Usage

````javascript

const generateTCKN = require('./tcidgen')

generateTCKN() // 02345678982
 

````

### About This Package

T.C. Kimlik numarasının ilk 9 rakamı rasgele (ilk rakam 0 olamaz), 10 ve 11. rakamları ise ilk 9 
rakamın matematiksel olarak işlenmesiyle oluşur. Matematik işlemi oldukça basittir;

**r(N)**: Rasgele Rakamlar

**o(N)**: Matematiksel Rakamlar

**T.C. Numarası** = r1 r2 r3 r4 r5 r6 r7 r8 r9 o1 o2

**o1** = (((r1 + r3 + r5 + r7 + r9)  7) - (r2 + r4 + r6 + r8)) % 10
 
**o2** = (r1 + r2 + r3 + r4 + r5 + r6 + r7 + r8 + r9 + o1) % 10
 