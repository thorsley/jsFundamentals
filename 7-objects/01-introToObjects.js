/*
 -container that stores multiple sets of dat 
    -stores data as key/value pairs 
    -objects are denoted by{}
*/
/*
let netflix = {
    id: 1,
    showName: 'The Office',
    season1: {
        seasonInfo: {
            episodeInfo: [{
                episode: 1,
                episodeName: 'Pilot'
            }, {
                episode: 2,
                episodeName: 'Diversity Day'
            }, {
                episode: 3,
                episodeName: 'Health Care'
            }, {
                episode: 4,
                episodeName: 'The Alliance'
            }, {
                episode: 5,
                episodeName: 'Basketball'
            }, {
                episode: 6,
                episodeName: 'Hot Girl'
            }]
        }
    },
    season2: {},
    season3: {},
    season4: {}
}
//to access data inside of an object, or to dice into an object, we use dot notation

//console.log('all data:', netflix);
//console.log('season info:', netflix.season1.seasonInfo.episodeInfo)






console.log(`episode number: ${netflix.season1.seasonInfo.episodeInfo[4].episode} - episode name:  ${netflix.season1.seasonInfo.episodeInfo[4].episodeName}`);
*/

/*
-JSON stands for javascript object notation
-JSON syntax is derived from JavaScript object syntax, but JSON data is in a text inly format
-JSON data exists as a string, and needs to be converted to a natice javascript object if we want to access the data

*/
/*

let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}

//console.log(Object.keys(spaceJam.toonSquad));
//console.log(object.keys(spaceJam.toonSquad.duck));
//console.log(Object.keys(spaceJam.toonSquad).toString());

console.log(Object.values(spaceJam.nbaPlayers));

/*
-object bracket notation, just like dot notation, allow us to find a value in an object
-object bracket notation also allows us to set the key of an object 
-also handy if we want to store keys of an object as a variable '

-object bracket notation works because all keys inside of an object are strings, even through they're not wrapped in a single double quote
*/

*/
let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: 'true',
    sun: 'true',
    size: 10
}


let test = Object.keys(garden); // object.keys retuns an array of all keys in an object
console.log(test);

console.log(typeof test[0]);

let zucchini = garden['vegetable'];
console.log(zucchini);

let baking = {};
baking['zuchini'] = 'better make some bread';
console.log(baking);



console.log(baking[garden['vegetable']])

let testObj ={
    'spaces here': true,
    nospaces: true
}
console.log(testObj.nospaces);
console.log(testObj["spaces here"]);