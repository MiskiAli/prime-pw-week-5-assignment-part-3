console.log('***** Music Collection *****')

let Collection =[];

function addToCollection(title, artist, yearPublished, songs){
let album= {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    songs: songs,

}
Collection.push (album);
return album;

}
// Added the objects to the collection

console.log(addToCollection('Yours Truly', 'Ariana Grande', '2013', 'Honeymoon Avenue'));
console.log(addToCollection('channel ORANGE', 'Frank Ocean','2012', 'Pyramids'));
console.log(addToCollection('Riot!','Paramore', '2007', 'Misery Buisness'));
console.log(addToCollection('The Most Beautiful Moment in Life: Young Forever', 'BTS', '2016', 'House of Cards'));
console.log(addToCollection('Sweetner', 'Ariana Grande', '2018', 'everytime'));
console.log(addToCollection('Icarus Falls', 'ZAYN', '2018', 'Insomia'));

console.log(Collection);


function showCollection(array){
console.log(array.length);
for(let i= 0; i<array.length; i++){
    console.log(`${array[i].title} by ${array[i].artist} published in ${array[i].yearPublished} ${array[i].songs}`);

    }

}
// end of function that shows collection
 showCollection(Collection);

function findByArtist(artist){
    let results = [];
    for (title of Collection){
        if (title.artist === artist){
            results.push(title)
        }
    }
    return results;

}
// end of finByArtist function

console.log(findByArtist('Frank Ocean'))
console.log(findByArtist('Ariana Grande'))
console.log(findByArtist('SZA'))
console.log(findByArtist('ZAYN'))
