const EVOLUTIONS = {
  "Bulbasaur":{
    "level":"16",
    "to":"Ivysaur"
  },
  "Ivysaur":{
    "level":"32",
    "to":"Venusaur"
  },
  "Charmander":{
    "level":"16",
    "to":"Charmeleon"
  },
  "Charmeleon":{
    "level":"36",
    "to":"Charizard"
  },
  "Squirtle":{
    "level":"16",
    "to":"Wartortle"
  },
  "Wartortle":{
    "level":"36",
    "to":"Blastoise"
  },
  "Caterpie":{
    "level":"7",
    "to":"Metapod"
  },
  "Metapod":{
    "level":"10",
    "to":"Butterfree"
  },
  "Weedle":{
    "level":"7",
    "to":"Kakuna"
  },
  "Kakuna":{
    "level":"10",
    "to":"Beedrill"
  },
  "Pidgey":{
    "level":"18",
    "to":"Pidgeotto"
  },
  "Pidgeotto":{
    "level":"36",
    "to":"Pidgeot"
  },
  "Rattata":{
    "level":"20",
    "to":"Raticate"
  },
  "Spearow":{
    "level":"20",
    "to":"Fearow"
  },
  "Ekans":{
    "level":"22",
    "to":"Arbok"
  },
  "Pikachu":{
    "level":"35",
    "to":"Raichu"
  },
  "Sandshrew":{
    "level":"22",
    "to":"Sandslash"
  },
  "Nidoran f":{
    "level":"16",
    "to":"Nidorina"
  },
  "Nidorina":{
    "level":"35",
    "to":"Nidoqueen"
  },
  "Nidoran m":{
    "level":"16",
    "to":"Nidorino"
  },
  "Nidorino":{
    "level":"35",
    "to":"Nidoking"
  },
  "Clefairy":{
    "level":"35",
    "to":"Clefable"
  },
  "Vulpix":{
    "level":"35",
    "to":"Ninetales"
  },
  "Jigglypuff":{
    "level":"35",
    "to":"Wigglytuff"
  },
  "Zubat":{
    "level":"22",
    "to":"Golbat"
  },
  "Oddish":{
    "level":"21",
    "to":"Gloom"
  },
  "Gloom":{
    "level":"35",
    "to":"Vileplume"
  },
  "Paras":{
    "level":"24",
    "to":"Parasect"
  },
  "Venonat":{
    "level":"31",
    "to":"Venomoth"
  },
  "Diglett":{
    "level":"26",
    "to":"Dugtrio"
  },
  "Meowth":{
    "level":"28",
    "to":"Persian"
  },
  "Psyduck":{
    "level":"33",
    "to":"Golduck"
  },
  "Mankey":{
    "level":"28",
    "to":"Primeape"
  },
   "Growlithe":{
    "level":"35",
    "to":"Arcanine"
  },
  "Poliwag":{
    "level":"25",
    "to":"Poliwhirl"
  },
  "Poliwhirl":{
    "level":"50",
    "to":"Poliwrath"
  },
  "Abra":{
    "level":"16",
    "to":"Kadabra"
  },
  "Kadabra":{
    "level":"40",
    "to":"Alakazam"
  },
  "Machop":{
    "level":"28",
    "to":"Machoke"
  },
  "Machoke":{
    "level":"40",
    "to":"Machamp"
  },
  "Bellsprout":{
    "level":"21",
    "to":"Weepinbell"
  },
  "Weepinbell":{
    "level":"35",
    "to":"Victreebel"
  },
  "Tentacool":{
    "level":"30",
    "to":"Tentacruel"
  },
  "Geodude":{
    "level":"25",
    "to":"Graveler"
  },
  "Graveler":{
    "level":"40",
    "to":"Golem"
  },
  "Ponyta":{
    "level":"40",
    "to":"Rapidash"
  },
  "Slowpoke":{
    "level":"37",
    "to":"Slowbro"
  },
  "Magnemite":{
    "level":"30",
    "to":"Magneton"
  },
  "Doduo":{
    "level":"31",
    "to":"Dodrio"
  },
  "Seel":{
    "level":"34",
    "to":"Dewgong"
  },
  "Grimer":{
    "level":"38",
    "to":"Muk"
  },
  "Shellder":{
    "level":"35",
    "to":"Cloyster"
  },
  "Gastly":{
    "level":"25",
    "to":"Haunter"
  },
  "Haunter":{
    "level":"40",
    "to":"Gengar"
  },
  "Drowzee":{
    "level":"26",
    "to":"Hypno"
  },
  "Krabby":{
    "level":"28",
    "to":"Kingler"
  },
  "Voltorb":{
    "level":"30",
    "to":"Electrode"
  },
   "Exeggcute":{
    "level":"35",
    "to":"Exeggutor"
  },
  "Cubone":{
    "level":"28",
    "to":"Marowak"
  },
  "Koffing":{
    "level":"35",
    "to":"Weezing"
  },
  "Rhyhorn":{
    "level":"42",
    "to":"Rhydon"
  },
  "Horsea":{
    "level":"32",
    "to":"Seadra"
  },
  "Goldeen":{
    "level":"33",
    "to":"Seaking"
  },
  "Staryu":{
    "level":"35",
    "to":"Starmie"
  },
  "Magikarp":{
    "level":"20",
    "to":"Gyarados"
  },
  "Eevee":{
    "level":"25",
    "to":"Vaporeon"
  },
  "Eevee":{
    "level":"27",
    "to":"Jolteon"
  },
  "Eevee":{
    "level":"29",
    "to":"Flareon"
  },
  "Omanyte":{
    "level":"40",
    "to":"Omastar"
  },
  "Kabuto":{
    "level":"40",
    "to":"Kabutops"
  },
  "Dratini":{
    "level":"30",
    "to":"Dragonair"
  },
  "Dragonair":{
    "level":"55",
    "to":"Dragonite"
  }
};
