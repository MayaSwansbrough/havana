const { deflateSync } = require("zlib");

// each horse has an object for searchability
var horseCards = [];
var horseObjects = [kahlua, coconut, bart, saffron, tara, orphy, dylan, bella, frank];
var horses = document.getElementById("horses");

var kahlua = {
  name: "Kahlua",
  breed: "Selle Francais",
  age: 7,
  discipline: "hunter",
  jumpingExperience: "crossrails",
  suitableFor: "professional",
  price: 5000,
  location: "14201",
  seller: "Horse Sales Inc",
};
kahlua += document.getElementById("kahlua");
kahlua += document.getElementById("kahluaPic");
var kahluaLink = document.getElementById("kahluaLink")
horseCards += document.getElementById("kahluaCard");

var coconut = {
  name: "Coconut Water" || "Coco",
  breed: "Belgian Warmblood",
  age: 12,
  discipline: "equitation",
  jumpingExperience: "3'6" || "3'9",
  suitableFor: "advanced jr/am",
  price: 18000,
  location: "92274",
  seller: "West Coast Sales",
}
coconut += document.getElementById("coconut");
coconut += document.getElementById("coconutPic");
horseCards += document.getElementById("coconutCard");

var bart = {
  name: "Bartholomew" || "Bart",
  breed: "Canadian Sporthorse",
  age: 10,
  discipline: "jumper",
  jumpingExperience: "1m",
  suitableFor: "novice jr/am" || "intermediate jr/am",
  price: 7500,
  location: "M4V M5R",
  seller: "Canadian Equine Sales",
}
bart += document.getElementById("bart");
bart += document.getElementById("bartPic");
horseCards += document.getElementById("bartCard");

var saffron = {
  name: "Zafferano" || "Saffron",
  breed: "Thoroughbred",
  age: 2,
  discipline: "prospect",
  jumpingExperience: "unstarted",
  suitableFor: "professional" || "advanced jr/am",
  price: 5000,
  location: "22947",
  seller: "Maya S.",
}
saffron += document.getElementById("saffron");
saffron += document.getElementById("saffronPic");
horseCards += document.getElementById("saffronCard");

var tara = {
  name: "Tara Justly" || "Tara",
  breed: "Dutch Warmblood",
  age: 15,
  discipline: "jumper",
  jumpingExperience: "1.30m" || "1.40m",
  suitableFor: "advanced jr/am",
  price: 40000,
  location: "M4V M5R",
  seller: "Canadian Equine Sales",
}
tara += document.getElementById("tara");
tara += document.getElementById("taraPic");
horseCards += document.getElementById("taraCard");

var orphy = {
  name: "Orpheus" || "Orphy",
  breed: "Dutch Warmblood",
  age: 14,
  discipline: "jumper",
  jumpingExperience: "1.10m" || "1.20,",
  suitableFor: "advanced jr/am" || "intermediate jr/am",
  price: 25000,
  location: "V8N 0A1",
  seller: "Canadian Equine Sales",
}
orphy += document.getElementById("orphy")
orphy += document.getElementById("orphyPic");
horseCards += document.getElementById("orphyCard");

var dylan = {
  name: "Date Night" || "Dylan",
  breed: "Belgian Warmblood",
  age: 12,
  discipline: "hunter",
  jumpingExperience: "3'3\"" || "3'6\"",
  suitableFor: "professional" || "advanced jr/am" || "intermediate jr/am",
  price: 50000,
  location: "20171",
  seller: "Erica B.",
}
dylan += document.getElementById("dylan")
dylan += document.getElementById("dylanPic");
horseCards += document.getElementById("dylanCard");

var bella = {
  name: "Bella Rose" || "Bella",
  breed: "Selle Francais",
  age: 16,
  discipline: "hunter",
  jumpingExperience: "2'6\"" || "2'9\"",
  suitableFor: "intermediate jr/am" || "beginner jr/am",
  price: 6000,
  location: "06100",
  seller: "Euro Sales LLC",
}
bella += document.getElementById("bella")
bella += document.getElementById("bellaPic");
horseCards += document.getElementById("bellaCard");


var frank = {
  name: "Stutterfly" || "Frank",
  breed: "Canadian Sporthorse",
  age: 18,
  discipline: "hunter",
  jumpingExperience: "3'" || "3'3\"",
  suitableFor: "advanced jr/am" || "intermediate jr/am" || "beginner jr/am",
  price: 999999999,
  location: "22947",
  seller: "Maya S.",
}
frank += document.getElementById("frank")
frank += document.getElementById("frankPic");
horseCards += document.getElementById("frankCard");

// Searches by input
var input = document.getElementById("searchInput");

function searchEnter() {
  var filter, div, single, x, i, txtValue;
  filter = input.value.toUpperCase();
  single = horses.getElementsByTagName("div");
  for (i=0; i < single.length; i++) {
    x = single[i];
    txtValue = x.textContent || x.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      single[i].style.display = "";
    } else {
      single[i].style.display = "none";
    }
  }
}

// Adds function to Search button + keyup for enter on search input

var searchButton = document.getElementById("search");
searchButton.addEventListener("click", searchEnter);
input.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    searchEnter();
  }
});


// Resets search
var resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function() {
  single = horses.getElementsByTagName("div");
  for (i=0; i < single.length; i++) {
    single[i].style.display = "";
    }
  });


// Filters

// function getHorsesToDisplay() {
//   const horsesFilter = []

//   for(i=0; i < horses.length; i++) {
//     isDisplayed(horse);
//     if (true) {
//       horsesFilter += horse;
//     }
//   }

//   return horses;
// }

// function isDisplayed(horse) {
// var breed = document.getElementById("breed");
// var breedBelgianWarmblood = breed.options[breed.selectedIndex].text
// var breedCanadianSporthorse = breed.options[breed.selectedIndex].text
// var breedDutchWarmblood = breed.options[breed.selectedIndex].text
// var breedSelleFrancais = breed.options[breed.selectedIndex].text
// var breedThoroughbred = breed.options[breed.selectedIndex].text
// var minAge = document.getElementById("minAge");
// var maxAge = document.getElementById("maxAge");
// var discipline = document.getElementById("discipline");
// var discEquitation = discipline.options[discipline.selectedIndex].text
// var discHunter = discipline.options[discipline.selectedIndex].text
// var discJumper = discipline.options[discipline.selectedIndex].text
// var discModel = discipline.options[discipline.selectedIndex].text
// var discProspect = discipline.options[discipline.selectedIndex].text
// var jumpExperience = document.getElementById("jumpExperience");
// var jumpExpUnstarted = jumpExperience.options[jumpExperience.selectedIndex].text
// var jumpExpCrossrails = jumpExperience.options[jumpExperience.selectedIndex].text
// var jumpExp2 = jumpExperience.options[jumpExperience.selectedIndex].text
// var jumpExp3 = jumpExperience.options[jumpExperience.selectedIndex].text
// var jumpExp36 = jumpExperience.options[jumpExperience.selectedIndex].text
// var jumpExp4 = jumpExperience.options[jumpExperience.selectedIndex].text
// var suitableFor = document.getElementById("suitableFor");
// var suitPro = suitableFor.options[suitableFor.selectedIndex].text
// var suitNov = suitableFor.options[suitableFor.selectedIndex].text
// var suitInter = suitableFor.options[suitableFor.selectedIndex].text
// var suitAdv = suitableFor.options[suitableFor.selectedIndex].text
// var minPrice = document.getElementById("minPrice");
// var maxPrice = document.getElementById("maxPrice");
// var distance = document.getElementById("distance");
// var dist10 = distance.options[suitableFor.selectedIndex].text
// var dist25 = distance.options[suitableFor.selectedIndex].text
// var dist50 = distance.options[suitableFor.selectedIndex].text
// var dist100 = distance.options[suitableFor.selectedIndex].text
// var dist250 = distance.options[suitableFor.selectedIndex].text
// var zipcode = docmuent.getElementById("zipcode");
// var seller = document.getElementById("seller");

//   return true;
// }




// // Filters by input
// var breed = document.getElementById("breed");
// var breedBelgianWarmblood = breed.options[breed.selectedIndex].text
// var breedCanadianSporthorse = breed.options[breed.selectedIndex].text
// var breedDutchWarmblood = breed.options[breed.selectedIndex].text
// var breedSelleFrancais = breed.options[breed.selectedIndex].text
// var breedThoroughbred = breed.options[breed.selectedIndex].text

// function filterBy() {
//   var filter, single, x, i, txtValue;
//   filter = breed.value.toUpperCase();
//   single = horses.getElementsByTagName("div");
//   for (i=0; i < single.length; i++) {
//     x = single[i];
//     txtValue = x.textContent || x.innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       single[i].style.display = "";
//     } else {
//       single[i].style.display = "none";
//     }
//   }
// }


// upper watchlist increment
var watchlistCount = 0;
var watchlistNum = document.getElementById("watchlistNum");
var watchlistLink = document.getElementsByClassName("watchlistLink");

function watchlistAdd() {
  watchlistInc();
  addToWatchlistBox();
}

function watchlistInc() {
  watchlistCount = watchlistCount + 1;
  if (watchlistCount === 1) {
    document.getElementById("watchlistNum").innerHTML = "1 horse"
  } else if (watchlistCount > 1) {
    document.getElementById("watchlistNum").innerHTML = watchlistCount + " horses"
  }
}

 for (let i=0; i < watchlistLink.length; i++) {
    var link = watchlistLink[i];
    link.addEventListener("click", watchlistAdd);
 }

// empties watchlist

var watchlistZero = document.getElementById("clearWatchlist");

function watchlistClear() {
  document.getElementById("watchlistNum").innerHTML = "0 horses"
  watchlistItemOne.style.display = "";
  watchlistItemTwo.style.display = "";
}

watchlistZero.addEventListener("click", watchlistClear);

// // adds horses to watchlist box
var watchlistItemOne = document.getElementById("watchlistItemOne");
var watchlistItemTwo = document.getElementById("watchlistItemTwo");
// var watchlist = [];

function addToWatchlistBox() {
  if (watchlistCount === 1) {
    watchlistItemOne.style.display = "block";
  } else if (watchlistCount >= 2) {
    watchlistItemTwo.style.display = "block";
  }
}

 for (let i=0; i < watchlistLink.length; i++) {
    var link = watchlistLink[i];
    link.addEventListener("click", addToWatchlistBox);
   if (link === 2) {
     watchlistItemTwo.style.display = "block";
   }
 }



// email regex & validation
var emailInput = document.getElementById("email");
var email = /^([a-z\d\.-_]+)+@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
var emailButton = document.getElementById("newsletter");
emailButton.addEventListener("click", emailAlert);
emailInput.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    emailAlert();
  }
});

function emailValidate(field, regex) {
  if (regex.test(field.value)) {
    field.className = "valid";
  } else {
    field.className = "invalid";
  }
}

for (let i=0; i < 3; i++){
  emailInput.addEventListener('keyup', (e) => {
    emailValidate(e.target, email)
  })
}

// responds to user's email input 
function emailAlert() {
  if(emailInput.className === "valid") {
    document.getElementById("valid").style.display = "block";
    document.getElementById("invalid").style.display = "none";
    emailInput.style.display  = "none";
    emailButton.style.display = "none";
    document.getElementById("emailLabel").style.display ="none";
  } else if(emailInput.className === "invalid") {
    document.getElementById("invalid").style.display = "block";
    document.getElementById("valid").style.display = "none";
  }
}


// Watchlist
// then adds horse & info to Watchlist box

// Filters will filter results in main page.dfsfddsfsdffsfsdf sdf