// ========================
// CENTRAL MOVIES DATABASE
// ========================
const bundledMoviesDatabase = [
  {
    id: 1,
    title: "Inception",
    rating: 8.8,
    year: 2010,
    poster: "images/inception.jpg",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page", "Tom Hardy"],
    director: "Christopher Nolan",
    genre: "Sci-Fi, Action",
    mediaType: "movie", 
    region: "foreign",
    reviews: []
  },
  {
    id: 2,
    title: "Breaking Bad",
    rating: 9.5,
    year: 2008,
    poster: "images/breaking-bad.jpg",
    description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine to secure his family's future.",
    cast: ["Bryan Cranston", "Aaron Paul", "Anna Gunn", "Dean Norris"],
    director: "Vince Gilligan",
    genre: "Crime, Drama",
    mediaType: "series",
    region: "foreign",
    reviews: []
  },
  {
    id: 3,
    title: "Interstellar",
    rating: 8.6,
    year: 2014,
    poster: "images/interstellar.jpg",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    director: "Christopher Nolan",
    genre: "Sci-Fi, Drama",
    mediaType: "movie",
    region: "foreign",
    reviews: []
  },
  {
    id: 4,
    title: "Adrift",
    rating: 7.1,
    year: 2018,
    poster: "images/adrift.jpg",
    description: "Based on the true story of a sailor who survives a catastrophic hurricane in the Pacific Ocean.",
    cast: ["Shailene Woodley", "Sam Claflin"],
    director: "Baltasar Kormakur",
    genre: "Adventure, Drama, Romance",
    mediaType: "movie",
    region: "foreign",
    reviews: []
  },
  {
    id: 5,
    title: "Avatar: Fire and Ash",
    rating: 7.8,
    year: 2025,
    poster: "images/avatar-fire-and-ash.jpeg",
    description: "Third Avatar film: Jake Sully's family faces new Na'vi factions and human threats on Pandora.",
    cast: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
    director: "James Cameron",
    genre: "Sci-Fi, Action, Adventure",
    mediaType: "movie",
    region: "foreign",
    reviews: []
  },
  {
    id: 6,
    title: "Dune: Part Three",
    rating: 8.4,
    year: 2026,
    poster: "images/dune-part-three.jpg",
    description: "Next chapter of Frank Herbert's saga: Paul Atreides and the factions of Arrakis.",
    cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
    director: "Denis Villeneuve",
    genre: "Sci-Fi, Adventure",
    mediaType: "movie",
    region: "foreign",
    reviews: []
  },
  {
    id: 7,
    title: "Fantastic Four: First Steps",
    rating: 7.5,
    year: 2025,
    poster: "images/fantastic-four-first-steps.jpg",
    description: "Reed, Sue, Johnny, and Ben join the MCU in a retro-futurist adventure.",
    cast: ["Pedro Pascal", "Vanessa Kirby", "Joseph Quinn", "Ebon Moss-Bachrach"],
    director: "Matt Shakman",
    genre: "Action, Adventure, Sci-Fi",
    mediaType: "movie",
    region: "foreign",
    reviews: []
  },
  {
    id: 8,
    title: "John Wick",
    rating: 7.4,
    year: 2014,
    poster: "images/john-wick.jpg",
    description: "An ex-hitman comes out of retirement to track down the gangsters who killed his dog and stole his car.",
    cast: ["Keanu Reeves", "Michael Nyqvist", "Alfie Allen"],
    director: "Chad Stahelski",
    genre: "Action, Thriller, Crime",
    mediaType: "movie",
    region: "foreign", 
    reviews: []
  },
  {
    id: 9,
    title: "Lucy",
    rating: 6.4,
    year: 2014,
    poster: "images/lucy.jpg",
    description: "A woman accidentally gains superhuman abilities when a drug enters her bloodstream.",
    cast: ["Scarlett Johansson", "Morgan Freeman", "Choi Min-sik"],
    director: "Luc Besson",
    genre: "Action, Sci-Fi, Thriller",
    mediaType: "movie",
    region: "foreign",
    reviews: []
  },
  {
    id: 10,
    title: "The Mechanic",
    rating: 6.5,
    year: 2011,
    poster: "images/mechanic.jpg",
    description: "An elite hitman teaches his trade to an apprentice who has a connection to one of his previous victims.",
    cast: ["Jason Statham", "Ben Foster", "Donald Sutherland"],
    director: "Simon West",
    genre: "Action, Thriller, Crime",
    mediaType: "movie",
    region: "foreign",
    reviews: []
  },
  {
    id: 11,
    title: "Mission: Impossible - The Final Reckoning",
    rating: 8.2,
    year: 2025,
    poster: "images/mission-impossible-final-reckoning.jpg",
    description: "Ethan Hunt races to stop a rogue AI and old enemies in the final chapter.",
    cast: ["Tom Cruise", "Simon Pegg", "Rebecca Ferguson"],
    director: "Christopher McQuarrie",
    genre: "Action, Thriller, Adventure",
    mediaType: "movie",
    region: "foreign",
    reviews: []
  },
  {
    id: 12,
    title: "Thunderbolts",
    rating: 7.2,
    year: 2025,
    poster: "images/thunderbolts-poster.jpg",
    description: "MCU team-up of anti-heroes and outliers sent on a dangerous mission.",
    cast: ["Florence Pugh", "Sebastian Stan", "David Harbour"],
    director: "Jake Schreier",
    genre: "Action, Comedy, Sci-Fi",
    mediaType: "movie",
    region: "foreign",
    reviews: []
  },
  {
    id: 13,
    title: "الرجل العناب",
    rating: 6.5,
    year: 2016,
    poster: "images/الرجل-العناب.jpg",
    description: "فيلم أكشن مصري - يانهار ازرق الرجل العبدالمعبود. قصة مثيرة عن رجل غامض يحارب الظلم.",
    cast: ["احمد فهمي"],
    director: "محمد سامي",
    genre: "Action, Drama",
    mediaType: "series",
    region: "arabic",
    reviews: []
  },
  {
    id: 14,
    title: "Spider-Man: Miles Morales",
    rating: 8.1,
    year: 2022,
    poster: "images/spiderman.jpg",
    description: "Miles Morales rises as the new Spider-Man, protecting Brooklyn while mastering his unique powers.",
    cast: ["Shameik Moore", "Hailee Steinfeld", "Oscar Isaac", "Jake Johnson"],
    director: "Joaquim Dos Santos",
    genre: "Action, Animation, Superhero",
    mediaType: "movie",
    region: "foreign",
    reviews: []
  },
  {
    id: 15,
    title: "ورق التوت",
    rating: 6.8,
    year: 2024,
    poster: "images/ورق-التوت.jpg",
    description: "فيلم مصري درامي من إنتاج Seagle Films، قصة اجتماعية مشوقة.",
    cast: ["جميلة عوض", "اسماء جلال "],
    director: "محمد جمال العدل",
    genre: "Drama, Social",
    mediaType: "movie",
    region: "arabic", 
    reviews: []
  },
  {
    id: 16,
    title: "برشامه",
    rating: 7.0,
    year: 2024,
    poster: "images/برشامه.jpg",
    description: "فيلم مصري من إنتاج أحمد الدسوقي، بطولة أحمد الزغبي، شيرين دياب، خالد دياب. فيلم أكشن كوميدي.",
    cast: ["أحمد الزغبي", "شيرين دياب", " هشام ماجد", "أحمد الدسوقي"],
    director: "أحمد دياب",
    genre: "Action, Comedy",
    mediaType: "movie",
    region: "arabic",  
    reviews: []
  },
  {
    id: 17,
    title: "ولاد رزق 2",
    rating: 7.3,
    year: 2019,
    poster: "images/welad-rezk.jpg",
    description: "فيلم أكشن مصري - وعدة أسود الارض. الجزء الثاني من سلسلة ولاد رزق، قصة 4 إخوة يعيشون حياة الجريمة.",
    cast: ["أحمد عز", "عمرو يوسف", "أحمد الفيشاوي", "محمد ممدوح", "كريم قاسم"],
    director: "طارق العريان",
    genre: "Action, Crime, Drama",
    mediaType: "movie",
    region: "arabic", 
    reviews: []
  },
  {
    id: 18,
    title: "The Equalizer 3",
    rating: 7.2,
    year: 2023,
    poster: "images/the-equalizer.jpg",
    description: "A former black ops operative comes out of retirement to save a young girl from violent gangsters.",
    cast: ["Denzel Washington", "Chloë Grace Moretz", "Marton Csokas"],
    director: "Antoine Fuqua",
    genre: "Action, Thriller, Crime",
    mediaType: "movie",
    region: "foreign", 
    reviews: []
  },
  {
    id: 19,
    title: "Berlin",
    rating: 7.6,
    year: 2023,
    poster: "images/berlin.jpg",
    description: "La Casa de Papel spin-off following Berlin's most extraordinary heist in Paris.",
    cast: ["Pedro Alonso", "Michelle Jenner", "Tristán Ulloa"],
    director: "Álex Pina",
    genre: "Action, Crime, Drama",
    mediaType: "series",
    region: "foreign",
    reviews: []
  },
  {
    id: 20,
    title: "La Casa de Papel",
    rating: 8.2,
    year: 2017,
    poster: "images/la-casa-de-papel.jpg",
    description: "A criminal mastermind who goes by 'The Professor' plans the biggest heist in recorded history.",
    cast: ["Úrsula Corberó", "Álvaro Morte", "Itziar Ituño", "Pedro Alonso"],
    director: "Álex Pina",
    genre: "Action, Crime, Drama, Thriller",
    mediaType: "series",
    region: "foreign",
    reviews: []
  },
  {
    id: 21,
    title: "ابن القنصل",
    rating: 6.2,
    year: 2020,
    poster: "images/ابن القنصل.jpg",
    description: "فيلم أكشن مصري - قصة تشويق وإثارة حول ابن القنصل الذي يقع في العديد من المشاكل.",
    cast: ["احمد السقا", "غاده عادل"],
    director: "محمد سامي",
    genre: "Action, Drama",
    mediaType: "movie",
    region: "arabic",
    reviews: []
  },
  {
    id: 22,
    title: "16 Blocks",
    rating: 6.6,
    year: 2006,
    poster: "images/16-blocks.jpg",
    description: "An aging cop is assigned to escort a witness 16 blocks to a courthouse, but a conspiracy threatens to stop them.",
    cast: ["Bruce Willis", "Mos Def", "David Morse"],
    director: "Richard Donner",
    genre: "Action, Thriller, Crime",
    mediaType: "movie",
    region: "foreign", 
    reviews: []
  },
  {
  id: 23,
  title: "Peaky Blinders",
  rating: 8.8,
  year: 2013,
  poster: "images/peaky-blinders.jpg",
  description: "A gangster family epic set in 1919 Birmingham, England, centered on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
  cast: ["Cillian Murphy", "Sam Neill", "Helen McCrory", "Paul Anderson", "Tom Hardy"],
  director: "Steven Knight",
  genre: "Crime, Drama, Thriller",
  mediaType: "series",
  region: "foreign",
  reviews: []
  },
  {
  id: 24,
  title: "وتر حساس",
  rating: 6.8,
  year: 2024,
  poster: "images/وتر حساس.jpg",
  description: "فيلم مصري درامي رومانسي، يدور حول قصة حب معقدة تتخللها المشاعر المتناقضة والأسرار العائلية التي تنكشف بمرور الوقت.",
  cast: ["أحمد داود", "جميلة عوض", "أحمد خالد صالح"],
  director: "محمد جمال العدل",
  genre: "Drama, Romance",
  mediaType: "series",
  region: "arabic",
  reviews: []
  },
  {
  id: 25,
  title: "فقرة الساحر",
  rating: 6.5,
  year: 2024,
  poster: "images/فقرة الساحر.jpg",
  description: "فيلم أكشن مصري، يقدم قصة مثيرة ومليئة بالتشويق حول رجل غامض يمتلك مهارات خارقة يواجه عالم الجريمة المنظمة.",
  cast: ["محمد رمضان", "نسرين طافش", "محمد ممدوح"],
  director: "طارق العريان",
  genre: "Action, Thriller",
  mediaType: "series",
  region: "arabic",
  reviews: []
  },
  {
  id: 26,
  title: "اشغال شقة",
  rating: 7.0,
  year: 2024,
  poster: "images/اشغال شقه.jpg",
  description: "فيلم كوميدي مصري، يدور حول شابين يواجهان مواقف طريفة ومضحكة أثناء تجهيز شقة للزواج، وتتوالى المفاجآت غير المتوقعة.",
  cast: ["هشام ماجد", "شيكو", "أحمد فهمي", "نسرين أمين"],
  director: "خالد مرعي",
  genre: "Comedy",
  mediaType: "series",
  region: "arabic",
  reviews: []
  },
  {
  id: 27,
  title: "موضوع عائلي",
  rating: 7.2,
  year: 2023,
  poster: "images/موضوع عائلى.jpg",
  description: "فيلم مصري كوميدي درامي، يحكي قصة عائلة تواجه العديد من المشاكل والمواقف المضحكة التي تهدد بتفككها، ولكن الحب يجمعهم في النهاية.",
  cast: ["ليلى علوي", "شيرين رضا", "محمود حميدة", "جميلة عوض"],
  director: "هالة خليل",
  genre: "Comedy, Drama",
  mediaType: "series",
  region: "arabic",
  reviews: []
  },   
  {
  id: 28,
  title: "العائدون",
  rating: 7.6,
  year: 2022,
  poster: "images/العائدون.jpg",
  description: "مسلسل مصري درامي تشويقي، يتناول قصة مجموعة من المصريين العائدين من الخارج بعد سنوات من الغربة، وتفاجئهم بالتحديات والمفاجآت الجديدة.",
  cast: ["أمير كرارة", "أمينة خليل", "محمود عبد المغني", "محمد ممدوح"],
  director: "أحمد نادر جلال",
  genre: "Drama, Thriller",
  mediaType: "series",
  region: "arabic",
  reviews: []
  },
  {
  id: 29,
  title: "بقينا اتنين",
  rating: 7.8,
  year: 2022,
  poster: "images/بقينا اتنين.jpg",
  description: "مسلسل مصري درامي اجتماعي رومانسي، يحكي قصة زوجين يواجهان العديد من التحديات في حياتهما بعد سنوات من الزواج، ويحاولان إنقاذ علاقتهما.",
  cast: ["شيرين رضا", "أحمد داود", "كريم فهمي", "أسماء جلال"],
  director: "طارق رفعت",
  genre: "Drama, Romance",
  mediaType: "series",
  region: "arabic",
  reviews: []
  },
  {
  id: 30,
  title: "كامل العدد",
  rating: 7.3,
  year: 2023,
  poster: "images/كامل العدد.jpg",
  description: "مسلسل مصري كوميدي درامي، تدور قصته حول عائلة مصرية تواجه العديد من المواقف الكوميدية والإنسانية مع زيادة عدد أفراد الأسرة.",
  cast: ["دينا الشربيني", "شريف سلامة", "إسعاد يونس", "محمد كيلاني"],
  director: "خالد الحلفاوي",
  genre: "Comedy, Drama",
  mediaType: "series",
  region: "arabic",
  reviews: []
  },
  {
  id: 31,
  title: "Carry On",
  rating: 7.0,
  year: 2024,
  poster: "images/carry on.jpg",
  description: "A young TSA agent gets blackmailed by a mysterious traveler to let a dangerous package onto a Christmas Eve flight. He must use his wits to stop a terrorist plot before it's too late.",
  cast: ["Taron Egerton", "Jason Bateman", "Danielle Deadwyler", "Theo Rossi"],
  director: "Jaume Collet-Serra",
  genre: "Action, Thriller",
  mediaType: "movie",
  region: "foreign",
  reviews: []
  },
  {
  id: 32,
  title: "The Gray Man",
  rating: 6.5,
  year: 2022,
  poster: "images/The Gray Man.jpg",
  description: "When the CIA's top asset, codenamed Sierra Six, uncovers agency secrets, he becomes a target for assassins worldwide. A former ally is sent to hunt him down.",
  cast: ["Ryan Gosling", "Chris Evans", "Ana de Armas", "Regé-Jean Page", "Billy Bob Thornton"],
  director: "Anthony Russo, Joe Russo",
  genre: "Action, Thriller",
  mediaType: "movie",
  region: "foreign",
  reviews: []
  },
  {
  id: 33,
  title: "The Family Plan",
  rating: 6.3,
  year: 2023,
  poster: "images/The Family Plan.jpg",
  description: "A former assassin living a quiet suburban life with his family must take them on a road trip to protect them after his past catches up with him.",
  cast: ["Mark Wahlberg", "Michelle Monaghan", "Zoe Colletti", "Van Crosby"],
  director: "Simon Cellan Jones",
  genre: "Action, Comedy",
  region: "foreign",
  mediaType: "movie",
  reviews: []
  },
  {
  id: 34,
  title: "Extraction",
  rating: 6.7,
  year: 2020,
  poster: "images/Extraction.jpg",
  description: "A fearless black market mercenary is hired to rescue the kidnapped son of an imprisoned international crime lord in Dhaka, Bangladesh.",
  cast: ["Chris Hemsworth", "Rudhraksh Jaiswal", "Randeep Hooda", "Golshifteh Farahani", "Pankaj Tripathi"],
  director: "Sam Hargrave",
  genre: "Action, Thriller",
  mediaType: "movie",
  region: "foreign",
  reviews: []
  },
  {
  id: 35,
  title: "Greyhound",
  rating: 7.0,
  year: 2020,
  poster: "images/Grey Hound.jpg",
  description: "A U.S. Navy commander leads a convoy of Allied ships protecting them from German U-boats during the Battle of the Atlantic in World War II.",
  cast: ["Tom Hanks", "Stephen Graham", "Rob Morgan", "Elisabeth Shue"],
  director: "Aaron Schneider",
  genre: "Action, Drama, History, War",
  mediaType: "movie",
  region: "foreign",
  reviews: []
  },
  {
  id: 36,
  title: "Fury",
  rating: 7.6,
  year: 2014,
  poster: "images/Fury.jpg",
  description: "A tank crew led by a battle-hardened sergeant fights behind enemy lines in Nazi Germany during the final months of World War II.",
  cast: ["Brad Pitt", "Shia LaBeouf", "Logan Lerman", "Michael Peña", "Jon Bernthal"],
  director: "David Ayer",
  genre: "Action, Drama, War",
  mediaType: "movie",
  region: "foreign",
  reviews: []
  },
  {
  id: 37,
  title: "Damsel",
  rating: 6.3,
  year: 2024,
  poster: "images/Damsel.jpg",
  description: "A young woman marries a charming prince but discovers she must be sacrificed to a dragon. She must fight for survival and save herself.",
  cast: ["Millie Bobby Brown", "Ray Winstone", "Angela Bassett", "Robin Wright", "Nick Robinson"],
  director: "Juan Carlos Fresnadillo",
  genre: "Action, Adventure, Fantasy",
  mediaType: "movie",
  region: "foreign",
  reviews: []
  },
  {
  id: 38,
  title: "The Vault",
  rating: 6.1,
  year: 2021,
  poster: "images/The Vault.jpg",
  description: "A brilliant engineering graduate is recruited to pull off an impossible heist on a legendary bank located inside the Bank of Spain.",
  cast: ["Freddie Highmore", "Astrid Bergès-Frisbey", "Sam Riley", "Liam Cunningham", "Luis Tosar"],
  director: "Jaume Balagueró",
  genre: "Action, Thriller",
  mediaType: "movie",
  region: "foreign",
  reviews: []
  },
  {
  id: 39,
  title: "The Walking Dead",
  rating: 8.1,
  year: 2010,
  poster: "images/The Walking Dead.jpg",
  description: "Sheriff Deputy Rick Grimes wakes from a coma to find a zombie apocalypse. He leads a group of survivors as they struggle to survive against zombies and other human threats.",
  cast: ["Andrew Lincoln", "Norman Reedus", "Melissa McBride", "Danai Gurira", "Jeffrey Dean Morgan"],
  director: "Frank Darabont, Angela Kang",
  genre: "Horror, Drama, Thriller",
  mediaType: "series",
  region: "foreign",
  reviews: []
  },
  {
  id: 40,
  title: "Outer Banks",
  rating: 7.5,
  year: 2020,
  poster: "images/Outer Banks.jpg",
  description: "Teenagers from the wrong side of the tracks in North Carolina uncover a legendary treasure while navigating love, rivalries, and family secrets.",
  cast: ["Chase Stokes", "Madelyn Cline", "Madison Bailey", "Jonathan Daviss", "Rudy Pankow"],
  director: "Jonas Pate, Josh Pate",
  genre: "Action, Adventure, Drama",
  mediaType: "series",
  region: "foreign",
  reviews: []
  },
  {
  id: 41,
  title: "The Sopranos",
  rating: 9.2,
  year: 1999,
  poster: "images/The Sopranos.jpg",
  description: "A New Jersey mob boss balances family life with the demands of running a criminal organization, while dealing with anxiety and therapy sessions.",
  cast: ["James Gandolfini", "Lorraine Bracco", "Edie Falco", "Michael Imperioli", "Tony Sirico"],
  director: "David Chase",
  genre: "Crime, Drama",
  mediaType: "series",
  region: "foreign",
  reviews: []
  },
  {
  id: 42,
  title: "Succession",
  rating: 8.8,
  year: 2018,
  poster: "images/Succession.jpg",
  description: "The Roy family fights for control of a global media empire as the patriarch's health declines, revealing betrayal greed and dark humor.",
  cast: ["Jeremy Strong", "Sarah Snook", "Kieran Culkin", "Alan Ruck", "Matthew Macfadyen"],
  director: "Jesse Armstrong",
  genre: "Drama, Comedy",
  mediaType: "series",
  region: "foreign",
  reviews: []
  },
  {
  id: 43,
  title: "The Wire",
  rating: 9.3,
  year: 2002,
  poster: "images/The Wire.jpg",
  description: "A gritty look at Baltimore's drug scene through the eyes of both police and criminals, exploring corruption and the failure of institutions.",
  cast: ["Dominic West", "Lance Reddick", "Idris Elba", "Michael K. Williams", "Wendell Pierce"],
  director: "David Simon",
  genre: "Crime, Drama, Thriller",
  mediaType: "series",
  region: "foreign",
  reviews: []
  },
  {
  id: 44,
  title: "Dark",
  rating: 8.7,
  year: 2017,
  poster: "images/Dark.jpg",
  description: "A missing child sets four families on a frantic hunt for answers as they uncover a time-traveling mystery spanning three generations.",
  cast: ["Louis Hofmann", "Karoline Eichhorn", "Lisa Vicari", "Maja Schöne", "Andreas Pietschmann"],
  director: "Baran bo Odar, Jantje Friese",
  genre: "Sci-Fi, Mystery, Thriller",
  mediaType: "series",
  region: "foreign",
  reviews: []
  }
  
];

const MOVIES_CATALOG_KEY = "mc_movies_catalog";
let _moviesDbCache = null;

function invalidateMoviesDbCache() {
  _moviesDbCache = null;
}

function getMoviesDb() {
  if (_moviesDbCache) return _moviesDbCache;
  try {
    const raw = localStorage.getItem(MOVIES_CATALOG_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        _moviesDbCache = parsed;
        return _moviesDbCache;
      }
    }
  } catch (e) {
    console.warn("Movies catalog parse error", e);
  }
  _moviesDbCache = bundledMoviesDatabase;
  return _moviesDbCache;
}

function saveMoviesCatalogToStorage(list) {
  localStorage.setItem(MOVIES_CATALOG_KEY, JSON.stringify(list));
  invalidateMoviesDbCache();
  _moviesDbCache = list;
}

function resetMoviesCatalogToBundledDefault() {
  localStorage.removeItem(MOVIES_CATALOG_KEY);
  invalidateMoviesDbCache();
}

window.saveMoviesCatalogToStorage = saveMoviesCatalogToStorage;
window.resetMoviesCatalogToBundledDefault = resetMoviesCatalogToBundledDefault;
window.invalidateMoviesDbCache = invalidateMoviesDbCache;
window.getMoviesDb = getMoviesDb;
window.getBundledMoviesDefault = function () {
  return JSON.parse(JSON.stringify(bundledMoviesDatabase));
};

/** YouTube video IDs for trailers (demo). Optional per-movie override: movie.trailerYoutubeId */
const TRAILER_IDS = {
  Inception: "YoHD9XAuDmE",
  "Breaking Bad": "HhesaQXLuRY",
  Interstellar: "zSWdZVtXT7E",
  Adrift: "M89r7QYdPTk",
  "Avatar: Fire and Ash": "d9MyW72ELq0",
  "Dune: Part Three": "Way9Dexny3w",
  "Fantastic Four: First Steps": "pzq61wWRP4Y",
  "John Wick": "C0BMx-qxsP4",
  Lucy: "MNpoTeykPKM",
  "The Mechanic": "CMpuqBKYd8g",
  "Mission: Impossible - The Final Reckoning": "NOhDyUmT9z0",
  Thunderbolts: "v-94OjhKVFI",
  "Spider-Man: Miles Morales": "shW_Wi2KHuk",
  "The Wire": "yjc_3cZ9d4M",
  Succession: "77Psqa6osws",
  Dark: "rrwycJ08S0k"
};

function getTrailerYoutubeId(movie) {
  if (!movie) return null;
  if (movie.trailerYoutubeId) return movie.trailerYoutubeId;
  return TRAILER_IDS[movie.title] || null;
}

function getMovieById(id) {
  return getMoviesDb().find(movie => movie.id === parseInt(id, 10));
}

// ——— Subscription (demo, localStorage) ———
const SUBSCRIPTION_KEY = "mc_subscription_tier";
const SUBSCRIPTION_UNTIL_KEY = "mc_subscription_until";

function getSubscriptionTier() {
  try {
    const until = localStorage.getItem(SUBSCRIPTION_UNTIL_KEY);
    if (until && Date.now() > parseInt(until, 10)) {
      localStorage.removeItem(SUBSCRIPTION_KEY);
      localStorage.removeItem(SUBSCRIPTION_UNTIL_KEY);
      return null;
    }
    return localStorage.getItem(SUBSCRIPTION_KEY);
  } catch {
    return null;
  }
}

function setSubscriptionTier(tier, daysValid) {
  const days = typeof daysValid === "number" ? daysValid : 365;
  const until = Date.now() + days * 86400000;
  localStorage.setItem(SUBSCRIPTION_KEY, tier);
  localStorage.setItem(SUBSCRIPTION_UNTIL_KEY, String(until));
}

window.getSubscriptionTier = getSubscriptionTier;
window.setSubscriptionTier = setSubscriptionTier;

// ========================
// SHARED HELPERS (used across forum, reviews, etc.)
// ========================
function escapeHtml(str) {
  if (str == null) return "";
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// ========================
// SEARCH PAGE (pages/search.html)
// ========================
function displaySearchResults(movies) {
  const searchResults = document.getElementById("searchResults");
  if (!searchResults) return;

  if (movies.length === 0) {
    searchResults.innerHTML = '<p style="color:#888; text-align:center; padding:50px; font-size:1.2rem;">✨ No movies found. Try another title.</p>';
    return;
  }

  searchResults.innerHTML = movies.map(movie => {
    let posterPath = "../" + movie.poster;
    return `
        <div class="card" onclick="window.location.href='details.html?id=${movie.id}'" style="cursor: pointer;">
          <img src="${posterPath}" alt="${movie.title}" onerror="this.src='https://via.placeholder.com/300x450?text=No+Image'">
          <h3>${movie.title}</h3>
          <p>⭐ ${movie.rating}</p>
          <p style="color:#aaa; font-size:0.75rem;">${movie.year} • ${movie.genre}</p>
          <button onclick="event.stopPropagation(); addToWatchlist(${movie.id})">Add</button>
        </div>
      `;
  }).join("");
}

function populateBrowseYearSelect(selectId) {
  const sel = document.getElementById(selectId);
  if (!sel || sel.dataset.populated === "1") return;
  const years = [...new Set(getMoviesDb().map(m => m.year))].sort((a, b) => b - a);
  const current = sel.value;
  sel.innerHTML = '<option value="all">All years</option>' + years.map(y => `<option value="${y}">${y}</option>`).join("");
  if (current && [...sel.options].some(o => o.value === current)) sel.value = current;
  sel.dataset.populated = "1";
}

function sortMovieListCopy(list, sort) {
  const out = list.slice();
  if (sort === "popular") out.sort((a, b) => b.rating - a.rating);
  else if (sort === "year_desc") out.sort((a, b) => b.year - a.year);
  else if (sort === "year_asc") out.sort((a, b) => a.year - b.year);
  else if (sort === "title") out.sort((a, b) => a.title.localeCompare(b.title));
  return out;
}

function applyHomeBrowseAndDisplay() {
  const movieList = document.getElementById("movieList");
  if (!movieList || !window._homeFiltered) return;
  let list = window._homeFiltered.slice();
  const yearSel = document.getElementById("homeYearSelect");
  const sortSel = document.getElementById("homeSortSelect");
  const yearVal = yearSel && yearSel.value !== "all" ? parseInt(yearSel.value, 10) : null;
  if (yearVal) list = list.filter(m => m.year === yearVal);
  const sort = sortSel ? sortSel.value : "popular";
  list = sortMovieListCopy(list, sort);
  if (list.length === 0) {
    movieList.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #888;">
        <h3>No titles match</h3>
        <p>Try another year or sort option</p>
      </div>`;
    return;
  }
  displayMovies(list);
}

function applySearchBrowseAndDisplay() {
  const searchResultsEl = document.getElementById("searchResults");
  if (!searchResultsEl || !window._searchFiltered) return;
  let list = window._searchFiltered.slice();
  const yearSel = document.getElementById("searchYearSelect");
  const sortSel = document.getElementById("searchSortSelect");
  const yearVal = yearSel && yearSel.value !== "all" ? parseInt(yearSel.value, 10) : null;
  if (yearVal) list = list.filter(m => m.year === yearVal);
  const sort = sortSel ? sortSel.value : "popular";
  list = sortMovieListCopy(list, sort);
  displaySearchResults(list);
}

function performSearch() {
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");
  if (!searchInput || !searchResults) return;

  const query = searchInput.value.toLowerCase().trim();
  if (query === "") {
    window._searchFiltered = getMoviesDb().slice();
  } else {
    window._searchFiltered = getMoviesDb().filter(movie =>
      movie.title.toLowerCase().includes(query) ||
      movie.genre.toLowerCase().includes(query) ||
      (movie.director && movie.director.toLowerCase().includes(query)) ||
      String(movie.year).includes(query)
    );
  }
  applySearchBrowseAndDisplay();
}

const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

if (searchInput && searchResults) {
  const urlParams = new URLSearchParams(window.location.search);
  const genreParam = urlParams.get("genre");

  if (genreParam) {
    console.log("Auto-filtering by genre from URL:", genreParam);

    document.querySelectorAll(".genre-list a").forEach(link => {
      link.classList.remove("active");
      if (link.href.includes("genre=" + genreParam)) {
        link.classList.add("active");
      }
    });

    let filteredMovies = getMoviesDb();

    if (genreParam !== "all") {
      filteredMovies = getMoviesDb().filter(movie => {
        const movieGenres = movie.genre.toLowerCase();
        return movieGenres.includes(genreParam.toLowerCase());
      });
    }

    window._searchFiltered = filteredMovies.slice();
    populateBrowseYearSelect("searchYearSelect");
    applySearchBrowseAndDisplay();
  } else {
    window._searchFiltered = getMoviesDb().slice();
    populateBrowseYearSelect("searchYearSelect");
    applySearchBrowseAndDisplay();
  }

  searchInput.addEventListener("input", performSearch);
  searchInput.addEventListener("keyup", performSearch);

  ["searchSortSelect", "searchYearSelect"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("change", () => applySearchBrowseAndDisplay());
  });

  console.log("🔍 Search page loaded with " + getMoviesDb().length + " movies");
}

window.filterSearchByGenre = function (genre, ev) {
  try {
    console.log("Filtering search by genre:", genre);

    if (ev && typeof ev.preventDefault === "function") {
      ev.preventDefault();
    }

    document.querySelectorAll(".genre-list a").forEach(link => {
      link.classList.remove("active");
    });
    if (ev && ev.target) {
      ev.target.classList.add("active");
    }

    const g = String(genre || "all").toLowerCase();
    let filteredMovies = getMoviesDb();

    if (g === "all") {
      filteredMovies = getMoviesDb().filter(m => (m.mediaType || "").toLowerCase() === "movie");
    } else if (g === "series") {
      filteredMovies = getMoviesDb().filter(m => (m.mediaType || "").toLowerCase() === "series");
    } else {
      filteredMovies = getMoviesDb().filter(movie => {
        const movieGenres = String(movie.genre || "").toLowerCase();
        const isMatch = movieGenres.includes(g);
        console.log("Movie:", movie.title, "Genre:", movie.genre, "Match:", isMatch);
        return isMatch;
      });
    }

    console.log("Filtered search movies count:", filteredMovies.length);

    const searchResultsEl = document.getElementById("searchResults");
    if (!searchResultsEl) return;

    if (filteredMovies.length === 0) {
      window._searchFiltered = [];
      searchResultsEl.innerHTML = '<p style="color:#888; text-align:center; padding:50px; font-size:1.2rem;">✨ No movies found in this genre.</p>';
      return;
    }

    window._searchFiltered = filteredMovies.slice();
    populateBrowseYearSelect("searchYearSelect");
    applySearchBrowseAndDisplay();
  } catch (error) {
    console.error("Error in filterSearchByGenre:", error);
  }
};

// ========================
// HOME PAGE (index.html) — movie grid, trending, genres, sidebar
// ========================
const movieList = document.getElementById("movieList");
const trendingMovies = document.getElementById("trendingMovies");

if (movieList) {
  window._homeFiltered = getMoviesDb().filter(m => (m.mediaType || "").toLowerCase() === "movie");
  populateBrowseYearSelect("homeYearSelect");
  applyHomeBrowseAndDisplay();
  ["homeSortSelect", "homeYearSelect"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("change", () => applyHomeBrowseAndDisplay());
  });
}

// Load trending movies (top rated)
if (trendingMovies) {
  const trending = getMoviesDb()
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 10); // Top 10 rated movies
  
  trendingMovies.innerHTML = trending.map(movie => `
    <div class="card" onclick="window.location.href='pages/details.html?id=${movie.id}'" style="cursor: pointer;">
      <img src="${movie.poster}" alt="${movie.title}" onerror="this.src='https://via.placeholder.com/300x450?text=No+Image'">
      <h3>${movie.title}</h3>
      <p>⭐ ${movie.rating}</p>
      <p style="color:#aaa; font-size:0.75rem;">${movie.year} • ${movie.genre}</p>
      <button onclick="event.stopPropagation(); addToWatchlist(${movie.id})">Add</button>
    </div>
  `).join('');
}

function displayMovies(movies) {
  const movieList = document.getElementById("movieList");
  if (!movieList) return;
  
  movieList.innerHTML = "";
  movies.forEach(movie => {
    movieList.innerHTML += `
      <div class="card" onclick="window.location.href='pages/details.html?id=${movie.id}'" style="cursor: pointer;">
        <img src="${movie.poster}" alt="${movie.title}" onerror="this.src='https://via.placeholder.com/300x450?text=No+Image'">
        <h3>${movie.title}</h3>
        <p>⭐ ${movie.rating}</p>
        <p style="color:#aaa; font-size:0.75rem;">${movie.year}</p>
        <button onclick="event.stopPropagation(); addToWatchlist(${movie.id})">Add</button>
      </div>
    `;
  });
}

// Genre filtering for main page - make it globally accessible
window.filterByGenreOnMain = function(genre, ev) {
  try {
    console.log('Filtering by genre:', genre);
    
    // Prevent default link behavior
    if (ev && typeof ev.preventDefault === "function") {
      ev.preventDefault();
    }
    
    // Update active state
    document.querySelectorAll('.genre-list a').forEach(link => {
      link.classList.remove('active');
    });
    if (ev && ev.target) {
      ev.target.classList.add('active');
    }
    
    const g = String(genre || "all").toLowerCase();
    let filteredMovies = getMoviesDb();

    // Default "All Movies" on home = mediaType movie
    if (g === "all") {
      filteredMovies = getMoviesDb().filter(m => (m.mediaType || "").toLowerCase() === "movie");
    } else if (g === "series") {
      filteredMovies = getMoviesDb().filter(m => (m.mediaType || "").toLowerCase() === "series");
    } else {
      // Genre filter shows BOTH movies + series that match this genre
      filteredMovies = getMoviesDb().filter(movie => {
        const movieGenres = String(movie.genre || "").toLowerCase();
        const isMatch = movieGenres.includes(g);
        console.log('Movie:', movie.title, 'Genre:', movie.genre, 'Match:', isMatch);
        return isMatch;
      });
    }
    
    console.log('Filtered movies count:', filteredMovies.length);
    
    // Update movies section title
    const moviesSection = document.querySelector('.movies h2');
    if (moviesSection) {
      if (g === 'all') {
        moviesSection.textContent = '🎬 All Movies';
      } else if (g === "series") {
        moviesSection.textContent = '📺 Series';
      } else {
        const genreName = g.charAt(0).toUpperCase() + g.slice(1);
        moviesSection.textContent = `🎬 ${genreName} Movies`;
      }
    }
    
    window._homeFiltered = filteredMovies;
    applyHomeBrowseAndDisplay();

    // Scroll to the movies section on home page
    const homeMoviesSection = document.getElementById("homeMoviesSection") || document.getElementById("movieList");
    if (homeMoviesSection && typeof homeMoviesSection.scrollIntoView === "function") {
      homeMoviesSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    
  } catch (error) {
    console.error('Error in filterByGenreOnMain:', error);
  }
};

// Sidebar toggle for mobile
function toggleSidebar() {
  const sidebar = document.getElementById('genreSidebar');
  sidebar.classList.toggle('active');
}

// ========================
// HOME PAGE — featured slider, celebrities, recommendations, top 10, interests
// ========================
function loadFeaturedToday() {
  const featuredContainer = document.getElementById("featuredSlider");
  if (!featuredContainer) return;

  // Select 6 random movies/TV shows from the database
  const shuffled = [...getMoviesDb()];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  const featuredItems = shuffled.slice(0, 6);

  featuredContainer.innerHTML = featuredItems.map(item => `
    <div class="featured-card" onclick="window.location.href='pages/details.html?id=${item.id}'">
      <div class="featured-badge">🔥 Featured</div>
      <div class="featured-type">${item.type === 'tv' ? '📺 Series' : '🎬 Movie'}</div>
      <img src="${item.poster}" alt="${item.title}" onerror="this.src='https://via.placeholder.com/300x450?text=No+Image'">
      <div class="featured-info">
        <h3>${item.title}</h3>
        <p>${item.year} • ${item.genre.split(',')[0]}</p>
        <div class="featured-rating">⭐ ${item.rating} / 10</div>
      </div>
    </div>
  `).join('');
}

// Call this function when page loads
if (document.getElementById("featuredSlider")) {
  loadFeaturedToday();
}
// Scroll function for featured slider
function scrollFeatured(distance) {
  const slider = document.getElementById("featuredSlider");
  if (slider) {
    slider.scrollBy({ left: distance, behavior: "smooth" });
  }
}
// ========================
// CELEBRITIES DATABASE
// ========================
const celebritiesDatabase = [
  {
    id: 1,
    name: "Leonardo DiCaprio",
    role: "Actor",
    country: "USA",
    knownFor: ["Inception", "Titanic", "The Revenant"],
    image: "images/Leo.webp",
    rating: 9.2
  },
  {
    id: 2,
    name: "Cillian Murphy",
    role: "Actor",
    country: "Ireland",
    knownFor: ["Peaky Blinders", "Oppenheimer", "Inception"],
    image: "images/Cill.webp",
    rating: 9.0
  },
  {
    id: 3,
    name: "Tom Hanks",
    role: "Actor",
    country: "USA",
    knownFor: ["Greyhound", "Forrest Gump", "Cast Away"],
    image: "images/Tom.jpg",
    rating: 8.9
  },
  {
    id: 4,
    name: "Chris Hemsworth",
    role: "Actor",
    country: "Australia",
    knownFor: ["Extraction", "Thor", "The Gray Man"],
    image: "images/Chris.webp",
    rating: 8.7
  },
  {
    id: 5,
    name: "Brad Pitt",
    role: "Actor",
    country: "USA",
    knownFor: ["Fury", "Fight Club", "Once Upon a Time"],
    image: "images/Brad.webp",
    rating: 8.8
  },
  {
    id: 6,
    name: "Millie Bobby Brown",
    role: "Actress",
    country: "UK",
    knownFor: ["Damsel", "Stranger Things", "Enola Holmes"],
    image: "images/Millie.jpg",
    rating: 8.5
  },
  {
    id: 7,
    name: "Mark Wahlberg",
    role: "Actor",
    country: "USA",
    knownFor: ["The Family Plan", "Ted", "Transformers"],
    image: "images/Mark.jpg",
    rating: 7.9
  },
  {
    id: 8,
    name: "Taron Egerton",
    role: "Actor",
    country: "UK",
    knownFor: ["Carry On", "Rocketman", "Kingsman"],
    image: "images/Taron.jpg",
    rating: 8.4
  },
  {
    id: 9,
    name: "Ahmed Ezz",
    role: "Actor",
    country: "Egypt",
    knownFor: ["ولاد رزق 2", "ابو عمر المصري", "الخلية"],
    image: "images/Ahmed.jpg",
    rating: 8.6
  },
  {
    id: 10,
    name: "Dina El-Sherbiny",
    role: "Actress",
    country: "Egypt",
    knownFor: ["كامل العدد", "ليلى", "أبو البنات"],
    image: "images/Dina.jpg",
    rating: 8.0
  },
  {
    id: 11,
    name: "James Gandolfini",
    role: "Actor",
    country: "USA",
    knownFor: ["The Sopranos", "The Mexican"],
    image: "images/james.jpg",
    rating: 9.1
  },
  {
    id: 12,
    name: "Andrew Lincoln",
    role: "Actor",
    country: "UK",
    knownFor: ["The Walking Dead", "Love Actually"],
    image: "images/andrew.webp",
    rating: 8.5
  },
  {
    id: 13,
    name: "Jeremy Strong",
    role: "Actor",
    country: "USA",
    knownFor: ["Succession", "The Big Short"],
    image: "images/jeremy.jpg",
    rating: 8.6
  },
  {
    id: 14,
    name: "Ryan Gosling",
    role: "Actor",
    country: "Canada",
    knownFor: ["The Gray Man", "La La Land", "Barbie"],
    image: "images/ryan.jpg",
    rating: 8.7
  }
];

// ========================
// MOST POPULAR CELEBRITIES
// ========================
function loadPopularCelebrities() {
  const celebritiesContainer = document.getElementById("celebritiesSlider");
  if (!celebritiesContainer) return;

  const sortedCelebrities = [...celebritiesDatabase].sort((a, b) => b.rating - a.rating);
  const topCelebrities = sortedCelebrities.slice(0, 12);

  celebritiesContainer.innerHTML = topCelebrities.map(celebrity => `
    <div class="celebrity-card" onclick="alert('🎬 ${celebrity.name}\\n⭐ Role: ${celebrity.role}\\n📍 Country: ${celebrity.country}\\n🎭 Known for: ${celebrity.knownFor.join(", ")}\\n⭐ Rating: ${celebrity.rating}/10')">
      <img src="${celebrity.image}" alt="${celebrity.name}" onerror="this.src='https://via.placeholder.com/150x150?text=No+Image'">
      <h3>${celebrity.name}</h3>
      <p>${celebrity.role} • ${celebrity.country}</p>
      <div class="celebrity-stars">
        <span>⭐ ${celebrity.rating}</span>
      </div>
      <div class="celebrity-role">${celebrity.knownFor[0]}</div>
    </div>
  `).join('');
}

function scrollCelebrities(distance) {
  const slider = document.getElementById("celebritiesSlider");
  if (slider) {
    slider.scrollBy({ left: distance, behavior: "smooth" });
  }
}

// ========================
// WHAT TO WATCH
// ========================
function loadWhatToWatch() {
  const container = document.getElementById("whatToWatchGrid");
  if (!container) return;

  // Get 4 random movies/series
  const shuffled = [...getMoviesDb()];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  const recommendations = shuffled.slice(0, 4);

  container.innerHTML = recommendations.map(item => `
    <div class="watch-card" onclick="window.location.href='pages/details.html?id=${item.id}'">
      <div class="watch-badge">${item.mediaType === 'series' ? '📺 Series' : '🎬 Movie'}</div>
      <img src="${item.poster}" alt="${item.title}" onerror="this.src='https://via.placeholder.com/300x450?text=No+Image'">
      <h3>${item.title}</h3>
      <p>⭐ ${item.rating} • ${item.year}</p>
    </div>
  `).join('');
}

// ========================
// TOP 10 THIS WEEK
// ========================
function loadTop10() {
  const container = document.getElementById("top10List");
  if (!container) return;

  // Sort by rating (highest first) and take top 10
  const top10 = [...getMoviesDb()].sort((a, b) => b.rating - a.rating).slice(0, 10);

  container.innerHTML = top10.map((item, index) => {
    let rankClass = "";
    if (index === 0) rankClass = "rank-1";
    else if (index === 1) rankClass = "rank-2";
    else if (index === 2) rankClass = "rank-3";
    
    return `
      <div class="top10-item" onclick="window.location.href='pages/details.html?id=${item.id}'">
        <div class="top10-rank ${rankClass}">#${index + 1}</div>
        <img class="top10-poster" src="${item.poster}" alt="${item.title}" onerror="this.src='https://via.placeholder.com/50x70?text=No+Image'">
        <div class="top10-info">
          <h3>${item.title}</h3>
          <p>${item.year} • ${item.mediaType === 'series' ? 'Series' : 'Movie'} • ${item.genre.split(',')[0]}</p>
        </div>
        <div class="top10-rating">⭐ ${item.rating}</div>
      </div>
    `;
  }).join('');
}

// ========================
// POPULAR INTERESTS
// ========================
function loadPopularInterests() {
  const container = document.getElementById("interestsGrid");
  if (!container) return;

  const interests = [
    { icon: "🎬", name: "Action", filter: "Action" },
    { icon: "😂", name: "Comedy", filter: "Comedy" },
    { icon: "🔪", name: "Thriller", filter: "Thriller" },
    { icon: "🕵️", name: "Crime", filter: "Crime" },
    { icon: "🚀", name: "Sci-Fi", filter: "Sci-Fi" },
    { icon: "💕", name: "Romance", filter: "Romance" },
    { icon: "😱", name: "Horror", filter: "Horror" },
    { icon: "📺", name: "Series", filter: "series" }
  ];

  container.innerHTML = interests.map(interest => `
    <div class="interest-card" onclick="filterByInterest('${interest.filter}')">
      <div class="interest-icon">${interest.icon}</div>
      <h3>${interest.name}</h3>
    </div>
  `).join('');
}

function filterByInterest(filter) {
  if (filter === "series") {
    const seriesCount = getMoviesDb().filter(m => m.mediaType === "series").length;
    alert(`📺 We have ${seriesCount} TV Series in our database!\n\nCheck them out in the Search page!`);
  } else {
    const count = getMoviesDb().filter(m => m.genre.includes(filter)).length;
    alert(`🎬 ${filter} category has ${count} titles!\n\nGo to Search page and type "${filter}" to find them!`);
  }
}

// Initialize all sections when page loads
if (document.getElementById("celebritiesSlider")) {
  loadPopularCelebrities();
}
if (document.getElementById("whatToWatchGrid")) {
  loadWhatToWatch();
}
if (document.getElementById("top10List")) {
  loadTop10();
}
if (document.getElementById("interestsGrid")) {
  loadPopularInterests();
}

// ========================
// WATCHLIST (pages/watchlist.html)
// ========================
function addToWatchlist(id) {
  let list = JSON.parse(localStorage.getItem("watchlist")) || [];
  if (!list.includes(id)) {
    list.push(id);
    localStorage.setItem("watchlist", JSON.stringify(list));
    alert("✅ Added to watchlist!");
  } else {
    alert("⚠️ Already in watchlist");
  }
}

const watchDiv = document.getElementById("watchlist");
let allWatchlistMovies = []; // Store all watchlist movies for filtering

if (watchDiv) {
  let list = JSON.parse(localStorage.getItem("watchlist")) || [];
  if (list.length === 0) {
    watchDiv.innerHTML = `
      <div class="empty-watchlist">
        <h2>📭 Your watchlist is empty</h2>
        <p>Start adding movies and shows you want to watch later!</p>
        <a href="search.html">Browse Movies</a>
      </div>
    `;
  } else {
    // Get all movies in watchlist
    allWatchlistMovies = list.map(id => getMoviesDb().find(m => m.id === id)).filter(m => m);
    displayWatchlistMovies(allWatchlistMovies);
  }
}

function displayWatchlistMovies(movies) {
  if (!watchDiv) return;
  
  if (movies.length === 0) {
    watchDiv.innerHTML = `
      <div class="empty-watchlist">
        <h2>📭 No movies found</h2>
        <p>Try selecting a different genre</p>
        <a href="search.html">Browse Movies</a>
      </div>
    `;
    return;
  }
  
  watchDiv.innerHTML = `<div class="watchlist-grid">`;
  movies.forEach(movie => {
    watchDiv.innerHTML += `
      <div class="watchlist-item">
        <img src="../${movie.poster}" alt="${movie.title}" onerror="this.src='https://via.placeholder.com/250x350?text=No+Image'">
        <div class="watchlist-info">
          <h3>${movie.title}</h3>
          <p>⭐ ${movie.rating}</p>
          <p style="color:#aaa; font-size:0.8rem;">${movie.year} • ${movie.genre}</p>
          <div class="watchlist-actions">
            <button class="btn-view" onclick="window.location.href='details.html?id=${movie.id}'">View Details</button>
            <button class="btn-remove" onclick="removeFromWatchlist(${movie.id})">Remove</button>
          </div>
        </div>
      </div>
    `;
  });
  watchDiv.innerHTML += `</div>`;
}

// Genre/type filtering for watchlist page
window.filterWatchlistByGenre = function(genre, ev) {
  console.log('Filtering watchlist by genre:', genre);

  if (ev && typeof ev.preventDefault === "function") ev.preventDefault();

  // Update active state
  document.querySelectorAll('.genre-list a').forEach(link => {
    link.classList.remove('active');
  });
  if (ev && ev.target) ev.target.classList.add('active');

  const g = String(genre || "all").toLowerCase();
  let filteredMovies = allWatchlistMovies;

  if (g === "series") {
    filteredMovies = allWatchlistMovies.filter(m => (m.mediaType || "").toLowerCase() === "series");
  } else if (g !== "all") {
    filteredMovies = allWatchlistMovies.filter(movie => {
      const movieGenres = String(movie.genre || "").toLowerCase();
      return movieGenres.includes(g);
    });
  }

  // Update header title
  const header = document.querySelector('.watchlist-header h1');
  if (header) {
    if (g === 'all') {
      header.textContent = '📋 My Watchlist';
    } else if (g === "series") {
      header.textContent = '📺 My Watchlist (Series)';
    } else {
      const genreName = g.charAt(0).toUpperCase() + g.slice(1);
      header.textContent = `📋 ${genreName}`;
    }
  }

  displayWatchlistMovies(filteredMovies);
};

function removeFromWatchlist(id) {
  let list = JSON.parse(localStorage.getItem("watchlist")) || [];
  list = list.filter(item => item !== id);
  localStorage.setItem("watchlist", JSON.stringify(list));
  alert("🗑️ Removed from watchlist");
  location.reload();
}

// ========================
// REVIEWS & REVIEW FORM (forum.html — reviews section)
// ========================
const REVIEWS_KEY = "movieReviews";
try {
  const reviewsClearedFlag = "portal_reviews_cleared_v1";
  if (!localStorage.getItem(reviewsClearedFlag)) {
    localStorage.removeItem(REVIEWS_KEY);
    localStorage.setItem(reviewsClearedFlag, "1");
  }
} catch (e) {
  /* ignore private mode / storage errors */
}
const reviewForm = document.getElementById("reviewForm");
const reviewsList = document.getElementById("reviewsList");
const reviewSearchInput = document.getElementById("reviewSearch");
const movieNameInput = document.getElementById("movieName");
const movieNameSuggestions = document.getElementById("movieNameSuggestions");

function ratingStarsHtml(n) {
  const rating = Math.min(5, Math.max(1, Number(n)));
  const filled = "★".repeat(rating);
  const empty = "☆".repeat(5 - rating);
  return `<span class="stars">${filled}${empty}</span>`;
}

function normalizeText(s) {
  return String(s || "").toLowerCase().trim();
}

const USERS_KEY = "mc_registered_users";

window.registerUserAccount = function (name, email, password) {
  try {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
    if (users.some(u => normalizeText(u.email) === normalizeText(email))) {
      return { ok: false, message: "This email is already registered." };
    }
    users.push({
      name: String(name || "").trim(),
      email: String(email || "").trim(),
      password,
      createdAt: Date.now()
    });
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    return { ok: true };
  } catch {
    return { ok: false, message: "Could not save account." };
  }
};

window.tryLoginRegisteredUser = function (email, password) {
  try {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
    const u = users.find(x => normalizeText(x.email) === normalizeText(email));
    return !!(u && u.password === password);
  } catch {
    return false;
  }
};

window.getStoredReviewsForMovieTitle = getStoredReviewsForMovieTitle;

function getStoredReviewsForMovieTitle(movieTitle) {
  const key = normalizeText(movieTitle);
  if (!key) return [];
  try {
    const reviews = JSON.parse(localStorage.getItem(REVIEWS_KEY)) || [];
    return reviews.filter(r => normalizeText(r.movie) === key);
  } catch {
    return [];
  }
}

function mergeReviewsForDisplay(movie) {
  const fromDb = Array.isArray(movie.reviews) ? movie.reviews : [];
  const stored = getStoredReviewsForMovieTitle(movie.title);
  const mapped = stored.map(r => ({
    user: r.user || "Community",
    rating: r.rating * 2,
    comment: r.text
  }));
  return [...mapped, ...fromDb];
}

window.mergeReviewsForDisplay = mergeReviewsForDisplay;
window.getTrailerYoutubeId = getTrailerYoutubeId;

function loadReviews(filterMovieQuery = "") {
  if (!reviewsList) return;
  const reviews = JSON.parse(localStorage.getItem(REVIEWS_KEY)) || [];
  const q = normalizeText(filterMovieQuery);
  const filtered = q
    ? reviews.filter(r => normalizeText(r.movie).includes(q))
    : reviews;

  if (filtered.length === 0) {
    reviewsList.innerHTML = `<p style="color:#888;">No reviews yet.</p>`;
    return;
  }
  reviewsList.innerHTML = filtered.map(r => `
    <article class="card card-wide">
      <h3>${escapeHtml(r.movie)}</h3>
      ${ratingStarsHtml(r.rating)}
      <p class="review-body">${escapeHtml(r.text)}</p>
    </article>
  `).join("");
}

if (reviewForm && reviewsList) {
  loadReviews();

  // Autocomplete for movie name (from getMoviesDb())
  if (movieNameSuggestions && Array.isArray(getMoviesDb())) {
    const titles = [...new Set(getMoviesDb().map(m => m && m.title).filter(Boolean))]
      .sort((a, b) => a.localeCompare(b));
    movieNameSuggestions.innerHTML = titles
      .map(t => `<option value="${escapeHtml(t)}"></option>`)
      .join("");
  }

  // Search reviews by movie name
  if (reviewSearchInput) {
    reviewSearchInput.addEventListener("input", () => {
      loadReviews(reviewSearchInput.value);
    });
  }

  reviewForm.addEventListener("submit", e => {
    e.preventDefault();
    const movie = document.getElementById("movieName").value.trim();
    const rating = parseInt(document.getElementById("rating").value, 10);
    const text = document.getElementById("reviewText").value.trim();
    if (!movie || !text || rating < 1 || rating > 5) return;

    const reviews = JSON.parse(localStorage.getItem(REVIEWS_KEY)) || [];
    reviews.unshift({ movie, rating, text });
    localStorage.setItem(REVIEWS_KEY, JSON.stringify(reviews));
    reviewForm.reset();
    if (reviewSearchInput) reviewSearchInput.value = "";
    loadReviews();
  });
}

// ========================
// FORUM (forum.html — discussion board)
// ========================
const FORUM_KEY = "forumPosts";
const forumNewPostForm = document.getElementById("forumNewPostForm");
const forumPostsEl = document.getElementById("forumPosts");

function getForumPosts() {
  try {
    return JSON.parse(localStorage.getItem(FORUM_KEY)) || [];
  } catch {
    return [];
  }
}

function saveForumPosts(posts) {
  localStorage.setItem(FORUM_KEY, JSON.stringify(posts));
}

function newPostId() {
  return (typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID()) ||
    String(Date.now()) + "-" + Math.random().toString(16).slice(2);
}

function renderForumPosts() {
  if (!forumPostsEl) return;
  let posts = getForumPosts();
  posts = posts.slice().sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));

  if (posts.length === 0) {
    forumPostsEl.innerHTML = `<p style="color:#888;">No posts yet.</p>`;
    return;
  }

  forumPostsEl.innerHTML = posts.map(post => {
    const comments = post.comments || [];
    const commentsHtml = comments.length ? comments.map(c => `
      <div class="comment-item">
        <div class="who">${escapeHtml(c.author || "Guest")}</div>
        <div>${escapeHtml(c.text)}</div>
      </div>
    `).join("") : `<p style="color:#666;">No comments yet.</p>`;

    return `
      <article class="card card-wide forum-post" data-post-id="${escapeHtml(post.id)}">
        <h3>${escapeHtml(post.title)}</h3>
        <p class="post-meta">By ${escapeHtml(post.author || "Guest")}</p>
        <p class="post-body">${escapeHtml(post.body)}</p>
        <div class="comments-block">
          <h4>Comments</h4>
          ${commentsHtml}
          <form class="comment-form" data-post-id="${escapeHtml(post.id)}">
            <input type="text" class="comment-author" placeholder="Your name (optional)" style="width:100%; margin-bottom:8px; padding:8px; border-radius:8px; background:#1a1a1a; color:white; border:1px solid #333;">
            <textarea class="comment-text" placeholder="Write a comment…" rows="2" style="width:100%; padding:8px; border-radius:8px; background:#1a1a1a; color:white; border:1px solid #333;"></textarea>
            <button type="submit" style="margin-top:8px;">Add comment</button>
          </form>
        </div>
      </article>
    `;
  }).join("");
}

if (forumPostsEl) {
  renderForumPosts();
  forumPostsEl.addEventListener("submit", e => {
    const form = e.target.closest(".comment-form");
    if (!form || !forumPostsEl.contains(form)) return;
    e.preventDefault();
    const postId = form.getAttribute("data-post-id");
    const author = form.querySelector(".comment-author").value.trim() || "Guest";
    const text = form.querySelector(".comment-text").value.trim();
    if (!text || !postId) return;

    const posts = getForumPosts();
    const idx = posts.findIndex(p => String(p.id) === String(postId));
    if (idx === -1) return;
    if (!posts[idx].comments) posts[idx].comments = [];
    posts[idx].comments.push({ author, text });
    saveForumPosts(posts);
    renderForumPosts();
  });
}

if (forumNewPostForm) {
  forumNewPostForm.addEventListener("submit", e => {
    e.preventDefault();
    const title = document.getElementById("postTitle").value.trim();
    const author = document.getElementById("postAuthor").value.trim() || "Guest";
    const body = document.getElementById("postBody").value.trim();
    if (!title || !body) return;

    const posts = getForumPosts();
    posts.push({
      id: newPostId(),
      createdAt: Date.now(),
      title,
      author,
      body,
      comments: []
    });
    saveForumPosts(posts);
    forumNewPostForm.reset();
    renderForumPosts();
  });
}
