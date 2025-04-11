# UzLatin ↔ UzCyrillic Transliterator

### Loyiha haqida
Bu loyiha o'zbek so'zlari va matnlarini lotin alifbosidan kirill alifbosiga va kirill alifbosidan lotin alifbosiga o'girish uchun mo'ljallangan. Dastur murakkab o'zbek so'zlarini, chet tilidan o'zlashgan so'zlarni va maxsus qoidalarni hisobga olgan holda aniq transliteratsiya qiladi.

### Xususiyatlari
- Lotin alifbosidan kirill alifbosiga o'girish (`latinToCyrillic` funksiyasi)
- Kirill alifbosidan lotin alifbosiga o'girish (`cyrillicToLatin` funksiyasi)
- 500 dan ortiq so'zlar uchun maxsus qoidalar
- O'zlashgan so'zlar, xususan rus tilidan o'zlashgan so'zlarni to'g'ri transliteratsiya qilish
- Harflar joylashuviga qarab qo'llaniladigan murakkab qoidalarni qo'llab-quvvatlash
- Maxsus belgilar, qo'shtirnoqlar va tinish belgilarini to'g'ri o'girish

### O'rnatish
```bash
# npm orqali o'rnatish
npm install lycy

# yarn orqali o'rnatish
yarn add lycy

# pnpm orqali o'rnatish
pnpm add lycy
```

### Foydalanish
```typescript
import { latinToCyrillic, cyrillicToLatin } from 'lycy';

// Lotin alifbosidan kirill alifbosiga
const cyrillicText = latinToCyrillic("O'zbekiston Respublikasi");
console.log(cyrillicText); // Ўзбекистон Республикаси

// Kirill alifbosidan lotin alifbosiga
const latinText = cyrillicToLatin("Ўзбекистон Республикаси");
console.log(latinText); // O'zbekiston Respublikasi
```

### Maxsus so'zlar va qoidalar
Dastur 500 dan ortiq so'zlar uchun maxsus qoidalarni qo'llaydi. Bu so'zlar ko'pincha chet tilidan o'zlashgan bo'lib, ular standart transliteratsiya qoidalariga bo'ysunmaydi. Masalan:

- "funksiya" -> "функция" (oddiy "funksya" emas)
- "biolyuminessensiya" -> "биолюминесценция"
- "pensiya" -> "пенсия"

Bunday so'zlar uchun `exactWordMap`, `specialWordMap` va `patternWordMap` lug'atlari yaratilgan.

### Qo'shimcha funktsiyalar
Dastur quyidagi holatlarni ham qo'llab-quvvatlaydi:

- Qo'shtirnoqlar bilan ishlash ("" -> «»)
- Maxsus harflar: g', o' va boshqalar
- So'z ohiridagi yumshoq belgini to'g'ri ishlatish

---
### About the Project
This project provides tools for transliterating Uzbek words and texts from Latin to Cyrillic alphabet and vice versa. The algorithm handles complex Uzbek words, loanwords, and special rules to ensure accurate transliteration.

### Features
- Latin to Cyrillic conversion (`latinToCyrillic` function)
- Cyrillic to Latin conversion (`cyrillicToLatin` function)
- Special rules for over 500 words
- Proper transliteration of loanwords, especially those borrowed from Russian
- Support for complex rules based on letter positioning
- Correct handling of special characters, quotation marks, and punctuation

### Installation
```bash
# Install with npm
npm install lycy

# Install with yarn
yarn add lycy

# Install with pnpm
pnpm add lycy
```

### Usage
```typescript
import { latinToCyrillic, cyrillicToLatin } from 'lycy';

// Latin to Cyrillic
const cyrillicText = latinToCyrillic("O'zbekiston Respublikasi");
console.log(cyrillicText); // Ўзбекистон Республикаси

// Cyrillic to Latin
const latinText = cyrillicToLatin("Ўзбекистон Республикаси");
console.log(latinText); // O'zbekiston Respublikasi
```

### Special Words and Rules
The library implements special rules for more than 500 words. These words are often loanwords that don't follow standard transliteration rules. For example:

- "funksiya" -> "функция" (not simply "funksya")
- "biolyuminessensiya" -> "биолюминесценция"
- "pensiya" -> "пенсия"

Dictionaries like `exactWordMap`, `specialWordMap`, and `patternWordMap` are used to handle these special cases.

### Additional Functionality
The library also supports:

- Handling quotation marks ("" -> «»)
- Special characters: g', o', and others
- Proper handling of soft sign at the end of words

## Technical Details

The implementation uses pattern matching and dictionary-based replacement to ensure accurate transliteration. The code is structured around several key data structures:

1. `exactWordMap`: Maps exact words that need special transliteration
2. `specialWordMap`: Handles special cases like "sirka" -> "сирка"
3. `patternWordMap`: Manages pattern-based replacements like "tsiya" -> "ция"
4. Character arrays: Map individual Latin and Cyrillic characters

## Contributing

Contributions are welcome to improve the transliteration rules, add more special cases, or optimize the code.