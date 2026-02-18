const charData = [
  // Vowels (Swar)
  { id: 'v1', hindi: 'अ', kannada: 'ಅ', trans: 'a', type: 'vowel' },
  { id: 'v2', hindi: 'आ', kannada: 'ಆ', trans: 'aa', type: 'vowel' },
  { id: 'v3', hindi: 'इ', kannada: 'ಇ', trans: 'i', type: 'vowel' },
  { id: 'v4', hindi: 'ई', kannada: 'ಈ', trans: 'ii', type: 'vowel' },
  { id: 'v5', hindi: 'उ', kannada: 'ಉ', trans: 'u', type: 'vowel' },
  { id: 'v6', hindi: 'ऊ', kannada: 'ಊ', trans: 'uu', type: 'vowel' },
  { id: 'v7', hindi: 'ऋ', kannada: 'ಋ', trans: 'ru', type: 'vowel' },
  { id: 'v8', hindi: 'ए', kannada: 'ಎ', trans: 'e', type: 'vowel' },
  { id: 'v9', hindi: 'ऐ', kannada: 'ಏ', trans: 'ee', type: 'vowel' },
  { id: 'v10', hindi: 'ऐ', kannada: 'ಐ', trans: 'ai', type: 'vowel' },
  { id: 'v11', hindi: 'ओ', kannada: 'ಒ', trans: 'o', type: 'vowel' },
  { id: 'v12', hindi: 'औ', kannada: 'ಓ', trans: 'oo', type: 'vowel' },
  { id: 'v13', hindi: 'औ', kannada: 'ಔ', trans: 'au', type: 'vowel' },
  { id: 'v14', hindi: 'अं', kannada: 'ಅಂ', trans: 'am', type: 'vowel' },
  { id: 'v15', hindi: 'अः', kannada: 'ಅಃ', trans: 'ah', type: 'vowel' },

  // Consonants (Vyanjan) - Ka Varga
  { id: 'c1', hindi: 'क', kannada: 'ಕ', trans: 'ka', type: 'consonant' },
  { id: 'c2', hindi: 'ख', kannada: 'ಖ', trans: 'kha', type: 'consonant' },
  { id: 'c3', hindi: 'ग', kannada: 'ಗ', trans: 'ga', type: 'consonant' },
  { id: 'c4', hindi: 'घ', kannada: 'ಘ', trans: 'gha', type: 'consonant' },
  { id: 'c5', hindi: 'ङ', kannada: 'ಙ', trans: 'nga', type: 'consonant' },

  // Cha Varga
  { id: 'c6', hindi: 'च', kannada: 'ಚ', trans: 'cha', type: 'consonant' },
  { id: 'c7', hindi: 'छ', kannada: 'ಛ', trans: 'chha', type: 'consonant' },
  { id: 'c8', hindi: 'ज', kannada: 'ಜ', trans: 'ja', type: 'consonant' },
  { id: 'c9', hindi: 'झ', kannada: 'ಝ', trans: 'jha', type: 'consonant' },
  { id: 'c10', hindi: 'ञ', kannada: 'ಞ', trans: 'nya', type: 'consonant' },

  // Ta Varga (Retroflex)
  { id: 'c11', hindi: 'ट', kannada: 'ಟ', trans: 'ta', type: 'consonant' },
  { id: 'c12', hindi: 'ठ', kannada: 'ಠ', trans: 'tha', type: 'consonant' },
  { id: 'c13', hindi: 'ड', kannada: 'ಡ', trans: 'da', type: 'consonant' },
  { id: 'c14', hindi: 'ढ', kannada: 'ಢ', trans: 'dha', type: 'consonant' },
  { id: 'c15', hindi: 'ण', kannada: 'ಣ', trans: 'na', type: 'consonant' },

  // Ta Varga (Dental)
  { id: 'c16', hindi: 'त', kannada: 'ತ', trans: 'ta', type: 'consonant' },
  { id: 'c17', hindi: 'थ', kannada: 'ಥ', trans: 'tha', type: 'consonant' },
  { id: 'c18', hindi: 'द', kannada: 'ದ', trans: 'da', type: 'consonant' },
  { id: 'c19', hindi: 'ध', kannada: 'ಧ', trans: 'dha', type: 'consonant' },
  { id: 'c20', hindi: 'न', kannada: 'ನ', trans: 'na', type: 'consonant' },

  // Pa Varga
  { id: 'c21', hindi: 'प', kannada: 'ಪ', trans: 'pa', type: 'consonant' },
  { id: 'c22', hindi: 'फ', kannada: 'ಫ', trans: 'pha', type: 'consonant' },
  { id: 'c23', hindi: 'ब', kannada: 'ಬ', trans: 'ba', type: 'consonant' },
  { id: 'c24', hindi: 'भ', kannada: 'ಭ', trans: 'bha', type: 'consonant' },
  { id: 'c25', hindi: 'म', kannada: 'ಮ', trans: 'ma', type: 'consonant' },

  // Ya Raa La Va ...
  { id: 'c26', hindi: 'य', kannada: 'ಯ', trans: 'ya', type: 'consonant' },
  { id: 'c27', hindi: 'र', kannada: 'ರ', trans: 'ra', type: 'consonant' },
  { id: 'c28', hindi: 'ल', kannada: 'ಲ', trans: 'la', type: 'consonant' },
  { id: 'c29', hindi: 'व', kannada: 'ವ', trans: 'va', type: 'consonant' },
  { id: 'c30', hindi: 'श', kannada: 'ಶ', trans: 'sha', type: 'consonant' },
  { id: 'c31', hindi: 'ष', kannada: 'ಷ', trans: 'sha', type: 'consonant' },
  { id: 'c32', hindi: 'स', kannada: 'ಸ', trans: 'sa', type: 'consonant' },
  { id: 'c33', hindi: 'ह', kannada: 'ಹ', trans: 'ha', type: 'consonant' },
  { id: 'c34', hindi: 'ळ', kannada: 'ಳ', trans: 'la', type: 'consonant' },
];

export default charData;
