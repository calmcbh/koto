export type Example = { jp: string; romaji: string; en: string }
export type Word = {
  id: string
  jp: string
  romaji: string
  en: string
  category: string
  examples: Example[]
}

export const WORDS: Word[] = [
  // Drinks & food
  { id: 'mizu', jp: 'みず', romaji: 'mizu', en: 'water', category: 'food', examples: [
    { jp: 'みずを ください。', romaji: 'mizu o kudasai.', en: 'Water, please.' },
    { jp: 'みずが ほしいです。', romaji: 'mizu ga hoshii desu.', en: 'I want water.' },
  ]},
  { id: 'ocha', jp: 'おちゃ', romaji: 'ocha', en: 'tea', category: 'food', examples: [
    { jp: 'おちゃを ください。', romaji: 'ocha o kudasai.', en: 'Tea, please.' },
  ]},
  { id: 'koohii', jp: 'コーヒー', romaji: 'koohii', en: 'coffee', category: 'food', examples: [
    { jp: 'コーヒーを ください。', romaji: 'koohii o kudasai.', en: 'Coffee, please.' },
    { jp: 'あつい コーヒーを ください。', romaji: 'atsui koohii o kudasai.', en: 'A hot coffee, please.' },
  ]},
  { id: 'atsui', jp: 'あつい', romaji: 'atsui', en: 'hot', category: 'desc', examples: [
    { jp: 'あついです。', romaji: 'atsui desu.', en: 'It is hot.' },
  ]},
  { id: 'tsumetai', jp: 'つめたい', romaji: 'tsumetai', en: 'cold', category: 'desc', examples: [
    { jp: 'つめたい みずを ください。', romaji: 'tsumetai mizu o kudasai.', en: 'Cold water, please.' },
  ]},
  { id: 'kudasai', jp: 'ください', romaji: 'kudasai', en: 'please (give me)', category: 'social', examples: [
    { jp: 'みずを ください。', romaji: 'mizu o kudasai.', en: 'Water, please.' },
  ]},
  { id: 'hoshii', jp: 'ほしい', romaji: 'hoshii', en: 'want', category: 'verb', examples: [
    { jp: 'みずが ほしいです。', romaji: 'mizu ga hoshii desu.', en: 'I want water.' },
  ]},
  { id: 'tabemasu', jp: 'たべます', romaji: 'tabemasu', en: 'eat', category: 'verb', examples: [
    { jp: 'ごはんを たべます。', romaji: 'gohan o tabemasu.', en: 'I eat rice.' },
  ]},
  { id: 'nomimasu', jp: 'のみます', romaji: 'nomimasu', en: 'drink', category: 'verb', examples: [
    { jp: 'みずを のみます。', romaji: 'mizu o nomimasu.', en: 'I drink water.' },
  ]},
  { id: 'gohan', jp: 'ごはん', romaji: 'gohan', en: 'rice / meal', category: 'food', examples: [
    { jp: 'ごはんを たべます。', romaji: 'gohan o tabemasu.', en: 'I eat a meal.' },
  ]},
  { id: 'pan', jp: 'パン', romaji: 'pan', en: 'bread', category: 'food', examples: [
    { jp: 'パンを ください。', romaji: 'pan o kudasai.', en: 'Bread, please.' },
  ]},
  { id: 'tamago', jp: 'たまご', romaji: 'tamago', en: 'egg', category: 'food', examples: [
    { jp: 'たまごを たべます。', romaji: 'tamago o tabemasu.', en: 'I eat an egg.' },
  ]},
  // Numbers
  { id: 'ichi', jp: 'いち', romaji: 'ichi', en: 'one', category: 'number', examples: [
    { jp: 'ひとつ ください。', romaji: 'hitotsu kudasai.', en: 'One, please.' },
  ]},
  { id: 'ni', jp: 'に', romaji: 'ni', en: 'two', category: 'number', examples: [
    { jp: 'ふたつ ください。', romaji: 'futatsu kudasai.', en: 'Two, please.' },
  ]},
  { id: 'san', jp: 'さん', romaji: 'san', en: 'three', category: 'number', examples: [
    { jp: 'みっつ ください。', romaji: 'mittsu kudasai.', en: 'Three, please.' },
  ]},
  { id: 'yon', jp: 'よん', romaji: 'yon', en: 'four', category: 'number', examples: [
    { jp: 'よん ください。', romaji: 'yon kudasai.', en: 'Four, please.' },
  ]},
  { id: 'go', jp: 'ご', romaji: 'go', en: 'five', category: 'number', examples: [
    { jp: 'ごひゃくえん です。', romaji: 'gohyaku-en desu.', en: 'It is 500 yen.' },
  ]},
  { id: 'roku', jp: 'ろく', romaji: 'roku', en: 'six', category: 'number', examples: [
    { jp: 'ろくじ です。', romaji: 'roku-ji desu.', en: 'It is 6 o’clock.' },
  ]},
  { id: 'nana', jp: 'なな', romaji: 'nana', en: 'seven', category: 'number', examples: [
    { jp: 'ななじ です。', romaji: 'nana-ji desu.', en: 'It is 7 o’clock.' },
  ]},
  { id: 'hachi', jp: 'はち', romaji: 'hachi', en: 'eight', category: 'number', examples: [
    { jp: 'はちじ です。', romaji: 'hachi-ji desu.', en: 'It is 8 o’clock.' },
  ]},
  { id: 'kyuu', jp: 'きゅう', romaji: 'kyuu', en: 'nine', category: 'number', examples: [
    { jp: 'きゅうじ です。', romaji: 'kyuu-ji desu.', en: 'It is 9 o’clock.' },
  ]},
  { id: 'juu', jp: 'じゅう', romaji: 'juu', en: 'ten', category: 'number', examples: [
    { jp: 'じゅうじ です。', romaji: 'juu-ji desu.', en: 'It is 10 o’clock.' },
  ]},
  { id: 'hyaku', jp: 'ひゃく', romaji: 'hyaku', en: 'hundred', category: 'number', examples: [
    { jp: 'ひゃくえん です。', romaji: 'hyaku-en desu.', en: 'It is 100 yen.' },
  ]},
  { id: 'en', jp: 'えん', romaji: 'en', en: 'yen', category: 'number', examples: [
    { jp: 'ごひゃくえん です。', romaji: 'gohyaku-en desu.', en: 'It is 500 yen.' },
  ]},
  // People & social
  { id: 'watashi', jp: 'わたし', romaji: 'watashi', en: 'I / me', category: 'people', examples: [
    { jp: 'わたしは アンドレア です。', romaji: 'watashi wa Andrea desu.', en: 'I am Andrea.' },
  ]},
  { id: 'tomodachi', jp: 'ともだち', romaji: 'tomodachi', en: 'friend', category: 'people', examples: [
    { jp: 'ともだちと いきます。', romaji: 'tomodachi to ikimasu.', en: 'I go with a friend.' },
  ]},
  { id: 'arigatou', jp: 'ありがとう', romaji: 'arigatou', en: 'thank you', category: 'social', examples: [
    { jp: 'ありがとう ございます。', romaji: 'arigatou gozaimasu.', en: 'Thank you.' },
  ]},
  { id: 'sumimasen', jp: 'すみません', romaji: 'sumimasen', en: 'excuse me / sorry', category: 'social', examples: [
    { jp: 'すみません。', romaji: 'sumimasen.', en: 'Excuse me.' },
  ]},
  { id: 'hai', jp: 'はい', romaji: 'hai', en: 'yes', category: 'social', examples: [
    { jp: 'はい。', romaji: 'hai.', en: 'Yes.' },
  ]},
  { id: 'iie', jp: 'いいえ', romaji: 'iie', en: 'no', category: 'social', examples: [
    { jp: 'いいえ。', romaji: 'iie.', en: 'No.' },
  ]},
  // Verbs & movement
  { id: 'ikimasu', jp: 'いきます', romaji: 'ikimasu', en: 'go', category: 'verb', examples: [
    { jp: 'いえに いきます。', romaji: 'ie ni ikimasu.', en: 'I go home.' },
    { jp: 'えきに いきます。', romaji: 'eki ni ikimasu.', en: 'I go to the station.' },
  ]},
  { id: 'kimasu', jp: 'きます', romaji: 'kimasu', en: 'come', category: 'verb', examples: [
    { jp: 'あした きます。', romaji: 'ashita kimasu.', en: 'I come tomorrow.' },
  ]},
  { id: 'kaerimasu', jp: 'かえります', romaji: 'kaerimasu', en: 'go home', category: 'verb', examples: [
    { jp: 'いま かえります。', romaji: 'ima kaerimasu.', en: 'I am going home now.' },
  ]},
  { id: 'kaimasu', jp: 'かいます', romaji: 'kaimasu', en: 'buy', category: 'verb', examples: [
    { jp: 'みずを かいます。', romaji: 'mizu o kaimasu.', en: 'I buy water.' },
  ]},
  { id: 'wakarimasu', jp: 'わかります', romaji: 'wakarimasu', en: 'understand', category: 'verb', examples: [
    { jp: 'わかりません。', romaji: 'wakarimasen.', en: 'I don’t understand.' },
  ]},
  { id: 'suki', jp: 'すき', romaji: 'suki', en: 'like', category: 'desc', examples: [
    { jp: 'いぬが すきです。', romaji: 'inu ga suki desu.', en: 'I like dogs.' },
  ]},
  // Places & time
  { id: 'ie', jp: 'いえ', romaji: 'ie', en: 'house / home', category: 'place', examples: [
    { jp: 'いえに かえります。', romaji: 'ie ni kaerimasu.', en: 'I go home.' },
  ]},
  { id: 'eki', jp: 'えき', romaji: 'eki', en: 'station', category: 'place', examples: [
    { jp: 'えきは どこですか。', romaji: 'eki wa doko desu ka.', en: 'Where is the station?' },
  ]},
  { id: 'doko', jp: 'どこ', romaji: 'doko', en: 'where', category: 'place', examples: [
    { jp: 'えきは どこですか。', romaji: 'eki wa doko desu ka.', en: 'Where is the station?' },
  ]},
  { id: 'kyou', jp: 'きょう', romaji: 'kyou', en: 'today', category: 'time', examples: [
    { jp: 'きょうは あついです。', romaji: 'kyou wa atsui desu.', en: 'Today is hot.' },
  ]},
  { id: 'ashita', jp: 'あした', romaji: 'ashita', en: 'tomorrow', category: 'time', examples: [
    { jp: 'あした いきます。', romaji: 'ashita ikimasu.', en: 'I go tomorrow.' },
  ]},
  { id: 'ima', jp: 'いま', romaji: 'ima', en: 'now', category: 'time', examples: [
    { jp: 'いま かえります。', romaji: 'ima kaerimasu.', en: 'I am going home now.' },
  ]},
  { id: 'asa', jp: 'あさ', romaji: 'asa', en: 'morning', category: 'time', examples: [
    { jp: 'あさに おきます。', romaji: 'asa ni okimasu.', en: 'I get up in the morning.' },
  ]},
  { id: 'yoru', jp: 'よる', romaji: 'yoru', en: 'night', category: 'time', examples: [
    { jp: 'よるに ねます。', romaji: 'yoru ni nemasu.', en: 'I sleep at night.' },
  ]},
  // Feelings & objects
  { id: 'tsukareta', jp: 'つかれています', romaji: 'tsukarete imasu', en: 'tired', category: 'feel', examples: [
    { jp: 'つかれています。', romaji: 'tsukarete imasu.', en: 'I am tired.' },
  ]},
  { id: 'onaka', jp: 'おなかが すいています', romaji: 'onaka ga suite imasu', en: 'hungry', category: 'feel', examples: [
    { jp: 'おなかが すいています。', romaji: 'onaka ga suite imasu.', en: 'I am hungry.' },
  ]},
  { id: 'genki', jp: 'げんき', romaji: 'genki', en: 'fine / healthy', category: 'feel', examples: [
    { jp: 'げんきです。', romaji: 'genki desu.', en: 'I am fine.' },
  ]},
  { id: 'ii', jp: 'いい', romaji: 'ii', en: 'good', category: 'desc', examples: [
    { jp: 'いいです。', romaji: 'ii desu.', en: 'It is good.' },
  ]},
  { id: 'takai', jp: 'たかい', romaji: 'takai', en: 'expensive / high', category: 'desc', examples: [
    { jp: 'たかいです。', romaji: 'takai desu.', en: 'It is expensive.' },
  ]},
  { id: 'yasui', jp: 'やすい', romaji: 'yasui', en: 'cheap', category: 'desc', examples: [
    { jp: 'やすいです。', romaji: 'yasui desu.', en: 'It is cheap.' },
  ]},
  { id: 'ookii', jp: 'おおきい', romaji: 'ookii', en: 'big', category: 'desc', examples: [
    { jp: 'おおきいです。', romaji: 'ookii desu.', en: 'It is big.' },
  ]},
  { id: 'chiisai', jp: 'ちいさい', romaji: 'chiisai', en: 'small', category: 'desc', examples: [
    { jp: 'ちいさいです。', romaji: 'chiisai desu.', en: 'It is small.' },
  ]},
  { id: 'kawaii', jp: 'かわいい', romaji: 'kawaii', en: 'cute', category: 'desc', examples: [
    { jp: 'ねこが かわいいです。', romaji: 'neko ga kawaii desu.', en: 'The cat is cute.' },
  ]},
  { id: 'inu', jp: 'いぬ', romaji: 'inu', en: 'dog', category: 'people', examples: [
    { jp: 'いぬが すきです。', romaji: 'inu ga suki desu.', en: 'I like dogs.' },
  ]},
  { id: 'neko', jp: 'ねこ', romaji: 'neko', en: 'cat', category: 'people', examples: [
    { jp: 'ねこが かわいいです。', romaji: 'neko ga kawaii desu.', en: 'The cat is cute.' },
  ]},
  { id: 'kasa', jp: 'かさ', romaji: 'kasa', en: 'umbrella', category: 'object', examples: [
    { jp: 'かさが いります。', romaji: 'kasa ga irimasu.', en: 'I need an umbrella.' },
  ]},
  { id: 'saifu', jp: 'さいふ', romaji: 'saifu', en: 'wallet', category: 'object', examples: [
    { jp: 'さいふは どこですか。', romaji: 'saifu wa doko desu ka.', en: 'Where is the wallet?' },
  ]},
  { id: 'denwa', jp: 'でんわ', romaji: 'denwa', en: 'phone', category: 'object', examples: [
    { jp: 'でんわを ください。', romaji: 'denwa o kudasai.', en: 'The phone, please.' },
  ]},
  { id: 'kippu', jp: 'きっぷ', romaji: 'kippu', en: 'ticket', category: 'object', examples: [
    { jp: 'きっぷを みっつ ください。', romaji: 'kippu o mittsu kudasai.', en: 'Three tickets, please.' },
  ]},
  { id: 'densha', jp: 'でんしゃ', romaji: 'densha', en: 'train', category: 'place', examples: [
    { jp: 'でんしゃに のります。', romaji: 'densha ni norimasu.', en: 'I get on the train.' },
  ]},
  { id: 'norimasu', jp: 'のります', romaji: 'norimasu', en: 'ride / get on', category: 'verb', examples: [
    { jp: 'でんしゃに のります。', romaji: 'densha ni norimasu.', en: 'I get on the train.' },
  ]},
  { id: 'ikura', jp: 'いくら', romaji: 'ikura', en: 'how much', category: 'number', examples: [
    { jp: 'いくらですか。', romaji: 'ikura desu ka.', en: 'How much is it?' },
  ]},
  { id: 'desu', jp: 'です', romaji: 'desu', en: 'is / am', category: 'verb', examples: [
    { jp: 'ごひゃくえん です。', romaji: 'gohyaku-en desu.', en: 'It is 500 yen.' },
  ]},
  { id: 'aka', jp: 'あか', romaji: 'aka', en: 'red', category: 'color', examples: [
    { jp: 'あかい りんごです。', romaji: 'akai ringo desu.', en: 'It is a red apple.' },
  ]},
  { id: 'ao', jp: 'あお', romaji: 'ao', en: 'blue', category: 'color', examples: [
    { jp: 'あおい そらです。', romaji: 'aoi sora desu.', en: 'The sky is blue.' },
  ]},
  { id: 'shiro', jp: 'しろ', romaji: 'shiro', en: 'white', category: 'color', examples: [
    { jp: 'しろい かみです。', romaji: 'shiroi kami desu.', en: 'It is white paper.' },
  ]},
  { id: 'kuro', jp: 'くろ', romaji: 'kuro', en: 'black', category: 'color', examples: [
    { jp: 'くろい ねこです。', romaji: 'kuroi neko desu.', en: 'It is a black cat.' },
  ]},
  { id: 'midori', jp: 'みどり', romaji: 'midori', en: 'green', category: 'color', examples: [
    { jp: 'みどりの きです。', romaji: 'midori no ki desu.', en: 'It is a green tree.' },
  ]},
]

export const SITUATIONS = [
  { en: 'You want water.', target: 'mizu', answers: ['みずを ください', 'みずが ほしいです'] },
  { en: 'You want a hot coffee.', target: 'koohii', answers: ['あつい コーヒーを ください', 'コーヒーを ください'] },
  { en: 'Tell someone you are going home.', target: 'kaerimasu', answers: ['いえに かえります', 'いま かえります'] },
  { en: 'Ask how much something costs.', target: 'ikura', answers: ['いくらですか'] },
  { en: 'Say you like dogs.', target: 'suki', answers: ['いぬが すきです'] },
  { en: 'Tell someone you are tired.', target: 'tsukareta', answers: ['つかれています'] },
  { en: 'Ask for two of something.', target: 'ni', answers: ['ふたつ ください'] },
  { en: 'Ask for three tickets.', target: 'kippu', answers: ['きっぷを みっつ ください'] },
  { en: 'Say it is 500 yen.', target: 'go', answers: ['ごひゃくえん です'] },
  { en: 'Ask where the station is.', target: 'eki', answers: ['えきは どこですか'] },
  { en: 'Say you are going tomorrow.', target: 'ashita', answers: ['あした いきます'] },
  { en: 'Say thank you.', target: 'arigatou', answers: ['ありがとう', 'ありがとう ございます'] },
  { en: 'Say you don’t understand.', target: 'wakarimasu', answers: ['わかりません'] },
  { en: 'Say you need an umbrella.', target: 'kasa', answers: ['かさが いります'] },
  { en: 'Say you are hungry.', target: 'onaka', answers: ['おなかが すいています'] },
]
