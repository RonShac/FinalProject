const users = [
  {
    username: "ricardo",
    name: "Ricardo Jimenez",
    bio: "Lord Of Drinks!",
    location: "Montreal, QC",
    banner:
      "https://www.gravatar.com/avatar/00000000000000000000000000000000?s=200&d=identicon",
    avatar:
      "https://www.gravatar.com/avatar/00000000000000000000000000000000?s=200&d=identicon",
    birthday: "22 June 1998",
    created_at: "june 2018",
    email: "ricardo@email.com",
  },
  {
    username: "tyler",
    name: "Tyler Hall",
    bio: "Lord Of Drinks!",
    location: "Montreal, QC",
    banner:
      "https://www.gravatar.com/avatar/00000000000000000000000000000000?s=200&d=identicon",
    avatar:
      "https://www.gravatar.com/avatar/00000000000000000000000000000000?s=200&d=identicon",
    birthday: "22 June 1998",
    created_at: "june 2018",
    email: "tyler@email.com",
  },
];

const tickets = [
  {
    eventId: 1,
    email: "ricardo@email.com",
  },
  {
    eventId: 2,
    email: "ricardo@email.com",
  },
  {
    eventId: 3,
    email: "ricardo@email.com",
  },
  {
    eventId: 4,
    email: "tyler@email.com",
  },
  {
    eventId: 5,
    email: "tyler@email.com",
  },
];

const events = [
  {
    id: 1,
    name: "NewYear Freakshow",
    description:
      "with the famous Timmy trumpet, dj babushka will open the new year freakshow with her loud hard bass set. Promising hot winter on that day , dj babushka will perform her set with spectacular fire works followed by the legendary timmy trumpets Freak Show. This event takes place on december 31th including new years count down",
    lineup: [
      {
        nickname: "Timmy Trumpet",
        artist_page: "/artist/timmytrumpet",
        artistId: "timmytrumpet",
      },
      {
        nickname: "DJ Babushka",
        artist_page: "/artist/djbabushka",
        artistId: "djbabushka",
      },
    ],
    image: "/images/winter1.jpg",
    location: "Igloofest",
    sales: [
      {
        id: "general-1",
        name: "General Admissions | Tier 1",
        cost: 45,
        left: 2569,
      },
      {
        id: "general-2",
        name: "General Admissions | Tier 2",
        cost: 80,
        left: 0,
      },
      {
        id: "vip",
        name: "VIP Passes",
        cost: 400,
        left: 97,
      },
    ],
    date: "2023-06-17 12:00 EST",
    eventDate: "sat ,dec 31 2022 at 11pm",
  },
  {
    id: 2,
    name: "The Ladder Jumper",
    description:
      "Prepare your best dance moves because dj Bambaclat and his team will bring the best Jamaican rythmes to montreal. The ladder jumper is every 2nd saturday of the month at the Jet Club. Get ready for the wildest and limitless Jamaican party!!! At 12am Team Bamba will perform a dancehall show on the stage.",
    lineup: [
      {
        nickname: "DJ Bambaclat",
        artist_page: "/artist/djbambaclat",
        artistId: "djbambaclat",
      },
    ],
    image: "/images/Ladderjumper.png",
    location: "Jet Club",
    sales: [
      {
        id: "general",
        name: "General Admission",
        cost: 50,
        left: 200,
      },
      {
        id: "vip",
        name: "VIP Passes",
        cost: 100,
        left: 12,
      },
    ],
    date: "2023-06-17 12:00 EST",
    eventDate: "sat,jan 14 2023 at 10pm",
  },
  {
    id: 3,
    name: "Juntos Salseros",
    description:
      "Event organised by dj campana every year To gather together all the salsa lovers to celebrate and dance. Dj campanas team brings salsa percussion instrument to play live music at the begining of the night.",
    lineup: [
      {
        nickname: "DJ Campana",
        artist_page: "/artist/djCampana",
        artistId: "djCampana",
      },
    ],
    image: "/images/salsanight.jpg",
    location: "Club Salsatech",
    sales: [
      {
        id: "general",
        name: "General Admission",
        cost: 45,
        left: 0,
      },
      {
        id: "vip",
        name: "VIP Passes",
        cost: 400,
        left: 4,
      },
    ],
    date: "2023-06-17 12:00 EST",
    eventDate: "friday, apr 7 2023 at 11pm ",
  },
  {
    id: 4,
    name: "Dagestan Rave",
    description:
      "Olivier Primo has the pleasure to host dj Churek at the beach club. Dagestan rave is based on techno music mixed with traditional arab rythmes. Special guest of this event is Khabib Nourmagomedov and his team who will demonstrate spectaculare MMA take downs on the stage.",
    lineup: [
      {
        nickname: "DJ Churek",
        artist_page: "/artist/djchurek",
        artistId: "djchurek",
      },
    ],
    image: "/images/ravedagestan.jpg",
    location: "Beach Club",
    sales: [
      {
        id: "general-1",
        name: "General Admissions | Tier 1",
        cost: 45,
        left: 3121,
      },
      {
        id: "general-2",
        name: "General Admissions | Tier 2",
        cost: 80,
        left: 1745,
      },
      {
        id: "backstage",
        name: "Backstage Passes",
        cost: 400,
        left: 478,
      },
    ],
    date: "2023-06-17 12:00 EST",
    eventDate: "sat, june 17th 2023 at 12pm-19pm",
  },
  {
    id: 5,
    name: "noche de perreo",
    description:
      "organised and hosted by dj loco .This event is based mainly on urban latino music such as Reggaeton and Dembow. Nicky jam is the speacial guest of this wonderfull night.",
    lineup: [
      {
        nickname: "DJ Loco",
        artist_page: "/artist/djloco",
        artistId: "djloco",
      },
    ],
    image: "/images/nochedeperreo.jpg",
    location: "Club essence",
    sales: [
      {
        id: "general",
        name: "General Admission",
        cost: 50,
        left: 87,
      },
      {
        id: "VIP",
        name: "VIP Passes",
        cost: 80,
        left: 63,
      },
    ],
    eventDate: "sat , may 20th 2023 at 10pm  ",
  },
  {
    id: 6,
    name: "Days of summer cruise fest",
    description:
      "Days of summer cruise fest is a 4 days cruise festival hosted by dj khaled in summer 2023. Rappers Lil Baby and Future will headline the festival.",
    lineup: [
      {
        nickname: "DJ Khaled",
        artist_page: "/artist/djkhaled",
        artistId: "djkhaled",
      },
    ],
    image: "/images/khaledfest.jpg",
    location: "beach club",
    sales: [
      {
        id: "general",
        name: "Interior Cabin booking",
        cost: 750,
        left: 0,
      },
      {
        id: "vip ",
        name: "VIP  Balcony Cabin",
        cost: 1350,
        left: 200,
      },
    ],
    date: "2023-06-24 13:00 EST",
    eventDate: "sat, june 24th 2023 at 1pm",
  },
  {
    id: 7,
    name: "Chango",
    description:
      "Chango is a Colombian party that's taking place every saturday.This event is based specially on colombian Salsa played by dj Campana. The location of Chango is corner of blv st laurent and montroyal",
    lineup: [
      {
        nickname: "DJ Campana",
        artist_page: "/artist/djcampana",
        artistId: "djcampana",
      },
    ],
    image: "/images/chango.jpg",
    location: "4475 Boul. Saint-Laurent suite 200, Montréal, QC H2W 1Z8",
    sales: [
      {
        id: "general",
        name: "General Admission",
        cost: 15,
        left: 100,
      },
      {
        id: "vip ",
        name: "VIP  Passes",
        cost: 20,
        left: 43,
      },
    ],
    date: "2022-12-10 22:00 EST",
    eventDate: "sat, dec 10th 2022 at 10pm",
  },
  {
    id: 8,
    name: "Afrobeach",
    description:
      "This event is organised every summer at the beachclub where various djs are playing their set. Among them , dj bambaclat will play his dancehall set and make everybody move to the best jamaican rythme.",
    lineup: [
      {
        nickname: "DJ Bambaclat",
        artist_page: "/artist/djbambaclat",
        artistId: "djbambaclat",
      },
    ],
    image: "/images/afrobeach.jpg",
    location: "Beach Club",
    sales: [
      {
        id: "general",
        name: "General Admission",
        cost: 30,
        left: 1000,
      },
      {
        id: "vip ",
        name: "VIP  Passes",
        cost: 20,
        left: 850,
      },
    ],
    date: "2023-07-01 22:00 EST",
    eventDate: "sat, july 1st 2023 at 11am",
  },
  {
    id: 9,
    name: "Osheaga",
    description:
      "Astrix will be playing on the main stage of osheaga next summer. He will blow everybodies mind with the best Trance hits. Get your redbulls ready",
    lineup: [
      {
        nickname: "DJ Astrix",
        artist_page: "/artist/djastrix",
        artistId: "djastrix",
      },
    ],
    image: "/images/osheaga.jpg",
    location: "Parc Jean-Drapeau",
    sales: [
      {
        id: "general",
        name: "General Admission",
        cost: 115,
        left: 10000,
      },
      {
        id: "vip ",
        name: "VIP  Passes",
        cost: 230,
        left: 9844,
      },
    ],
    date: "2023-08-05 13:00 EST",
    eventDate: "Sat, August 5  2023 at 1:00pm",
  },
  {
    id: 10,
    name: "Igloo fest",
    description:
      "Dj Marshmello will be opening the igloo festival this year. Leave your coats at home because winter is promising to be hot.",
    lineup: [
      {
        nickname: "Marshmello",
        artist_page: "/artist/marshmello",
        artistId: "marshmello",
      },
    ],
    image: "/images/igloofest.jpg",
    location: "Old Port of Montreal",
    sales: [
      {
        id: "general",
        name: "General Admission",
        cost: 30,
        left: 25000,
      },
      {
        id: "vip ",
        name: "VIP  Passes",
        cost: 45,
        left: 10000,
      },
    ],
    date: "2023-01-13 22:00 EST",
    eventDate: "friday, January 13th  2023 at 10pm",
  },
  {
    id: 11,
    name: "Festival Lumen",
    description:
      "Festival Lumen will take place at New city gas.Dj Deadmau5 will be the main artist of the night bringing a lot of visual effects and EDM vibes",
    lineup: [
      {
        nickname: "deadmau5",
        artist_page: "/artist/deadmau5",
        artistId: "deadmau5",
      },
    ],
    image: "/images/newcitygas.jpg",
    location: "950 Ottawa St, Montreal, Quebec H3C 1S4",
    sales: [
      {
        id: "general",
        name: "General Admission",
        cost: 30,
        left: 977,
      },
      {
        id: "vip ",
        name: "VIP  Passes",
        cost: 45,
        left: 670,
      },
    ],
    date: "2023-12-28 22:00 EST",
    eventDate: "Wed , Dec 28 2022 at 10pm",
  },
  {
    id: 12,
    name: "Piknic Électronik",
    description:
      "Piknic Électronik Montreal is an outdoor electronic music event aiming to offer immersive, social experiences in a friendly environment. Located in an urban park just 10 minutes from downtown Montréal, he brings together thousands of electronic music enthusiasts every Sunday from May to September. Piknic Électronik Montreal diverse programing has made it a highlight of the Montreal summer cultural circuit for over 15 years.",
    lineup: [
      {
        nickname: "Will Sparks",
        artist_page: "/artist/willsparks",
        artistId: "willsparks",
      },
    ],
    image: "/images/piknic.jpg",
    location: "Parc Jean-Drapeau",
    sales: [
      {
        id: "general",
        name: "General Admission",
        cost:21.74,
        left: 500,
      },
      {
        id: "vip ",
        name: "VIP  Passes",
        cost: 69.58,
        left: 433,
      },
    ],
    date: "2023-05-24 15:00 EST",
    eventDate: "friday , may 24th 2023 at 3pm",
  },
];

const artists = [
  {
    id: "marshmello",
    name: "Christopher Comstock",
    nickname: "Marshmello",
    image: "/images/marshmello.jpg",
    country: "America",
    description:
      "Is an American electronic music producer and DJ. His songs  Silence, Wolves ,  Friends , Happier, and Alone have been certified multi-platinum in several countries and appeared in the Top 30 of the Billboard Hot 100. His musical style includes groove-oriented, synth and bass-heavy electronic dance music. He is managed by Moe Shalizi.",
    email: "marshmello@info.com",
    social: {
      insta: "@marshmello",
      twitter: "marshmello",
      facebook: "marshmello",
    },
    bestTrack: "Marshmello, Khalid - Numb ",
  },
  {
    id: "deadmau5",
    name: "Joel Thomas Zimmerman",
    nickname: "Deadmau5",
    image: "/images/deadmouse.jpg",
    country: "Canada",
    description:
      "From Canada , Deadmau5 is a Dj and musoc producer. His genre is progressive house music and techo. Deadmau5 recieved 6 grammy awards. ",
    email: "deadmau5@info.com",
    social: {
      insta: "@deadmau5",
      twitter: "deadmau5",
      facebook: "deadmau5",
    },
    bestTrack: "deadmau5 - “Strobe” ",
  },
  {
    id: "willsparks",
    name: "william james",
    nickname: "will sparks",
    image: "/images/willsparks.jpg",
    country: "Melbourne ,Australia",
    description:
      "Recognized as one of Australian’s fastest rising DJs,Well known For his electro House music genre , Will Sparks is a Australian DJ.He traveled around Europ , Asian , North america. Sparks took presence in famous festivals such as tomorrowland,tomorrowWorld, stereosonic, Future music festival. ",
    email: "Luke@luckyent.com",
    social: {
      insta: "@will_sparks",
      twitter: "will_sparks",
      facebook: "will_sparks",
    },
    bestTrack: "Annihilate    ",
  },
  {
    id: "djastrix",
    name: "Avi Shmailov",
    nickname: "DJ Astrix",
    image: "/images/astrix.jpg",
    country: "Georgia",
    description:
      "Dj astrix is a israeli trance music producer.Well known for his progressive psychedelic trance performance.He performed his set all around the world.",
    email: "astrix@email.com",
    social: {
      insta: "@Astrixofficial",
      twitter: "Astrixofficial",
      facebook: "Astrixofficial",
    },
    bestTrack: "Deep jungle Walk ",
  },
  {
    id: "djkhaled",
    name: "Khaled Mohammed Khaled",
    nickname: "DJ Khaled",
    image: "/images/khaled.jpg",
    country: "New Orleans , Louisiana",
    description:
      "Reconized for his high energy and amazing skills of animation, DJ Khaled has developed a huge following with his performances around the country at large venues like Barclays Center in Brooklyn, Prudential Center in Newark and The Forum Los Angeles. He is known for working with big artists like Lil Wayne , Drake , Niki Menage",
    email: "djkhaled@publicist.com",
    social: {
      insta: "@djkaledi",
      twitter: "djkaled",
      facebook: "djkaled",
    },
    bestTrack: "DJ Khaled, Drake & Lil Baby's 'Staying Alive' ",
  },
  {
    id: "djCampana",
    name: "Ruben Juan Antonio Samaranchez",
    nickname: "DJ Campana",
    image: "/images/campana.jpg",
    country: "Colombia",
    description:
      "born and raised in medellin , colombia. Reconised for playing the best colombian salsa set using live instrument called campana( main salsa percussion instrument). International award for organising best salsa events all around the world.",
    email: "Campana.papi@email.com",
    social: {
      insta: "@Campana.papi",
      twitter: "Campana.papi",
      facebook: "Campana.papi",
    },
    bestTrack: "Noche Caliente ",
  },

  {
    id: "djloco",
    name: "Jose Bamberas",
    nickname: "DJ Loco ",
    image: "/images/Loco.png",
    country: "Cuba",
    description:
      "born in cuba varadero , reconized for hosting the best latin urban festivals in cuba. Dj loco is known for his famous foams pool parties. ",
    email: "Jose.loco.mix@email.com",
    social: {
      insta: "@JoseLocoMix",
      twitter: "JoseLocoMix",
      facebook: "JoseLocoMix",
    },
    bestTrack: "Baila Mami",
  },

  {
    id: "djbambaclat",
    name: "Bembe Dajuan",
    nickname: "DJ Bambaclat",
    image: "/images/bambaclat.png",
    country: "Jamaica",
    description:
      "born in kingston, dj bambaclat is known for the craziest jamaican paties in north america. His main event in jamaica is called  the ladder jumper . dj bambaclat will bring you the hottest jamaican rythmes to make you move all night. ",
    email: "Bembe.bamba@email.com",
    social: {
      insta: "@BambaMan",
      twitter: "BambaMan",
      facebook: "BambaMan",
    },
    bestTrack: "Whine Up",
  },
  {
    id: "djbabushka",
    name: "Natalia Zamorskaya",
    nickname: "Dj Babushka",
    image: "/images/babushka.png",
    country: "Russia",
    description:
      "From Taganrog, russia Natalia zamorskaya AKA dj Babushka Is 4 times Rewarded internationaly for her famous winter parties on frozen lacks. She is specialised mainly for playing strong hard bass. She is the founder of a popular festival named Gopnik squat.",
    email: "babulya.natulya@email.com",
    social: {
      insta: "@Babulya.Natulya",
      twitter: "Babulya.Natulya",
      facebook: "Babulya.Natulya",
    },
    bestTrack: "Samagon bass",
  },
  {
    id: "djchurek",
    name: "aslan makhachkevich",
    nickname: "Dj churek",
    image: "/images/churek.png",
    country: "Dagestan",
    description:
      "Churek is the main dj of Khabib Nourmagomedov's events and parties. He is presently located in dubai but travels all around the world. Dj chureks known for his unic mixes of the traditional arabic Dabke with techno. ",
    email: "cheburek20@email.com",
    social: {
      insta: "@churek.cheburek",
      twitter: "churek.cheburek",
      facebook: "churek.cheburek",
    },
    bestTrack: "Track babafen",
  },
  {
    id: "timmytrumpet",
    name: "Timothy Jude Smith",
    nickname: "Timmy Trumpet",
    image: "/images/timmy.jpg",
    country: "Australian",
    description:
      " Australian musician, DJ, songwriter and record producer. He has become known internationally for playing the trumpet live and making use of jazz elements in dance music.Timmy Trumpet's breakthrough single Freaks with New Zealand rapper Savage was certified gold by the RIAA, six times platinum by ARIA, and triple platinum by Recorded Music NZ. Timmy Trumpet is currently ranked the number 9 DJ in the world, according to the DJ Mag Top 100. ",
    email: "timmy.trumpet@email.com",
    social: {
      insta: "@timmyTrumpet",
      twitter: "@timmyTrumpet",
      facebook: "@Timmy Trumpet",
    },
    bestTrack: "Freaks - Radio Edit",
  },
];

module.exports = { users, events, artists, tickets };
