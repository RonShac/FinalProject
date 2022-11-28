const events = [
  {
    name: "NewYear Freakshow",
    description:
      "with the famous Timmy trumpet, dj babushka will open the new year freakshow with her loud hard bass set. Promising hot winter on that day , dj babushka will perform her set with spectacular fire works followed by the legendary timmy trumpets Freak Show. This event takes place on december 31th including new years count down",
    lineup: [
      { nickname: "Timmy Trumpet", artist_page: "/artist/timmytrumpet" },
      {
        nickname: "Dj Babushka",
        artist_page: "/artist/djbabushka",
      },
    ],
    location: "Igloofest",
    tickets: "10,000",
    eventDate: "sat ,dec 31 2022 at 11pm",
  },
  {
    name: "the ladder jumper",
    description:
      "Prepare your best dance moves because dj Bambaclat and his team will bring the best Jamaican rythmes to montreal. The ladder jumper is every 2nd saturday of the month at the Jet Club. Get ready for the wildest and limitless Jamaican party!!! At 12am Team Bamba will perform a dancehall show on the stage.",
    lineup: [
      {
        nickname: "DJ Bambaclat",
        artist_page: "/artist/djbambaclat",
      },
    ],
    location: "jetclub",
    tickets: 250,
    eventDate: "sat,jan 14 2023 at 10pm  ",
  },
  {
    name: "juntos salseros",
    description:
      "Event organised by dj campana every year To gather together all the salsa lovers to celebrate and dance. Dj campanas team brings salsa percussion instrument to play live music at the begining of the night.",
    lineup: [
      {
        nickname: "DJ Campana",
        artist_page: "/artist/djCampana",
      },
    ],
    location: "club salsatech",
    tickets: 200,
    eventDate: "friday, apr 7 2023 at 11pm ",
  },
  {
    name: "Dagenstan Rave",
    description:
      "Olivier Primo has the pleasure to host dj Churek at the beach club. Dagestan rave is based on techno music mixed with traditional arab rythmes. Special guest of this event is Khabib Nourmagomedov and his team who will demonstrate spectaculare MMA take downs on the stage.",
    lineup: [
      {
        nickname: "Dj churek",
        artist_page: "/artist/djchurek",
      },
    ],
    location: "Beach Club",
    tickets: 9000,
    eventDate: "sat, june 17th 2023 at 12pm-19pm",
  },
  {
    name: "noche de perreo",
    description:
      "organised and hosted by dj loco .This event is based mainly on urban latino music such as Reggaeton and Dembow. Nicky jam is the speacial guest of this wonderfull night.",
    lineup: [
      {
        nickname: "DJ Loco",
        artist_page: "/artist/djloco",
      },
    ],
    location: "Club essence",
    tickets: 250,
    eventDate: "sat , may 20th 2023 at 10pm  ",
  },
];

const artists = [
  {
    id: "djCampana",
    name: "Ruben Juan Antonio Samaranchez",
    nickname: "DJ Campana",
    image: "/images/campana.jpg",
    country: "Colombia",
    description:
      "born and raised in medellin , colombia. Reconised for playing the best colombian salsa set using live instrument called campana( main salsa percussion instrument). International award for organising best salsa events all around the world.",
    email: "Campana.papi@email.com",
    socialmedia: [
      "insta:@Campana.papi,TWITTER:Campana.papi,FACEBOOK:Campana.papi",
    ],
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
    socialmedia: [
      "insta:@JoseLocoMix,TWITTER:JoseLocoMix,FACEBOOK:JoseLocoMix",
    ],
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
    socialmedia: ["INSTA:@BambaMan,TWITTER:BambaMan,FACEBOOK:BambaMan"],
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
    socialmedia: [
      "INSTA:@Babulya.Natulya,TWITTER:Babulya.Natulya,FACEBOOK:Babulya.Natulya",
    ],
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
    socialmedia: [
      "INSTA:@churek.cheburek,TWITTER:churek.cheburek,FACEBOOK:churek.cheburek",
    ],
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
    email: "Timmy.Trumpet@email.com",
    socialmedia: [
      "INSTA:@Timmy Trumpet,TWITTER:Timmy Trumpet ,FACEBOOK:Timmy Trumpet",
    ],
    bestTrack: "Freaks-Radio Edit",
  },
];

module.exports = { events, artists };
