// const songs = [
//     {
//         id: 1,
//         title: "Blinding Lights",
//         artist: "The Weeknd",
//         genre: "Pop",
//         duration: 210,
//         ratings: [5, 4, 4, 5, 5],
//         year: 2020,
//         streams: 1500000000
//     },
//     {
//         id: 2,
//         title: "Bohemian Rhapsody",
//         artist: "Queen",
//         genre: "Rock",
//         duration: 355,
//         ratings: [5, 5, 5, 4, 5],
//         year: 1975,
//         streams: 2000000000
//     },
//     {
//         id: 3,
//         title: "Shape of You",
//         artist: "Ed Sheeran",
//         genre: "Pop",
//         duration: 240,
//         ratings: [4, 5, 4, 4, 4],
//         year: 2017,
//         streams: 3000000000
//     },
//     {
//         id: 4,
//         title: "Smells Like Teen Spirit",
//         artist: "Nirvana",
//         genre: "Rock",
//         duration: 250,
//         ratings: [5, 5, 4, 4, 5],
//         year: 1991,
//         streams: 1800000000
//     },
//     {
//         id: 5,
//         title: "Rolling in the Deep",
//         artist: "Adele",
//         genre: "Soul",
//         duration: 228,
//         ratings: [5, 4, 5, 4, 5],
//         year: 2011,
//         streams: 1900000000
//     },
//     {
//         id: 6,
//         title: "Lose Yourself",
//         artist: "Eminem",
//         genre: "Hip-Hop",
//         duration: 326,
//         ratings: [5, 5, 4, 5, 5],
//         year: 2002,
//         streams: 2200000000
//     },
//     {
//         id: 7,
//         title: "Uptown Funk",
//         artist: "Mark Ronson ft. Bruno Mars",
//         genre: "Funk",
//         duration: 270,
//         ratings: [4, 5, 4, 4, 5],
//         year: 2015,
//         streams: 2500000000
//     }
// ];
// Question 1:

// Find all songs that have a duration longer than 4 minutes (240 seconds).

// let songbigthen4min=songs.filter(song=>song.duration>240);
// console.log(songbigthen4min);

// output:-
// [
//     {
//       id: 2,
//       title: 'Bohemian Rhapsody',
//       artist: 'Queen',
//       genre: 'Rock',
//       duration: 355,
//       ratings: [ 5, 5, 5, 4, 5 ],
//       year: 1975,
//       streams: 2000000000
//     },
//     {
//       id: 4,
//       title: 'Smells Like Teen Spirit',
//       artist: 'Nirvana',
//       genre: 'Rock',
//       duration: 250,
//       ratings: [ 5, 5, 4, 4, 5 ],
//       year: 1991,
//       streams: 1800000000
//     },
//     {
//       id: 6,
//       title: 'Lose Yourself',
//       artist: 'Eminem',
//       genre: 'Hip-Hop',
//       duration: 326,
//       ratings: [ 5, 5, 4, 5, 5 ],
//       year: 2002,
//       streams: 2200000000
//     },
//     {
//       id: 7,
//       title: 'Uptown Funk',
//       artist: 'Mark Ronson ft. Bruno Mars',
//       genre: 'Funk',
//       duration: 270,
//       ratings: [ 4, 5, 4, 4, 5 ],
//       year: 2015,
//       streams: 2500000000
//     }
//   ]
// ==================================================================================
// Question 2:

// Find the first song released before the year 2000.

// let firstsong=songs.find(song=>song.year<2000);
// console.log(firstsong);

// output:-
// {
//     id: 2,
//     title: 'Bohemian Rhapsody',
//     artist: 'Queen',
//     genre: 'Rock',
//     duration: 355,
//     ratings: [ 5, 5, 5, 4, 5 ],
//     year: 1975,
//     streams: 2000000000
//   }  
// ======================================================================================
// Question 3:

// Check if there are any songs with a stream count greater than 2.5 billion.

// let songgreater=songs.some(song=>song.streams>2500000000);
// console.log(songgreater);

// output:-
// true
// ==========================================================================================
// Question 4:

// Verify if every song has a rating of at least 4.

// let ratingsong=songs.every(song=>song.ratings.every(rating=>rating>=4));
// console.log(ratingsong);

// outout:-
// true
// ===================================================================================================
// Question 6:

// Calculate the total number of streams for all the songs in the dataset.

// let totalnoofstreams=songs.reduce((total,song)=>total+song.streams,0);
// console.log(totalnoofstreams);

// output:-
// 14900000000
// ====================================================================================================
// Question 7:

// Create a flattened array of all ratings for every song.

// let allratings=songs.flatMap(song=>song.ratings);
// console.log(allratings);

// output:-
// [
//     5, 4, 4, 5, 5, 5, 5, 5, 4,
//     5, 4, 5, 4, 4, 4, 5, 5, 4,
//     4, 5, 5, 4, 5, 4, 5, 5, 5,
//     4, 5, 5, 4, 5, 4, 4, 5
//   ]  
// ===========================================================================================================
// Question 9:

// Calculate the total stream count for all songs released after the year 2010.

// let totalstreamcountOf2010=songs.filter(song=>song.year>2010).reduce((total,song)=>total+song.streams,0);
// console.log(totalstreamcountOf2010);

// output:-
// 8900000000
// ==============================================================================================================
// Question 10:

// Check if any song title contains the word "Love" (case-insensitive).

// let containloveintitle=songs.some(song=>song.title.toLowerCase().includes("love"));
// console.log(containloveintitle);

// output:-
// false
// ===========================================================================================================
// Question 11:

// Find the song with the highest number of streams and return its title.

// let higheststream=songs.reduce((maxSong,currentSong)=>currentSong.streams>maxSong.streams?currentSong:maxSong);  
// console.log(higheststream.title);  

// output:-
// Shape of You
// ===============================================================================================================
// 12.Check if all the "Pop" genre songs have a rating of at least 4.

// let allpopsongs=songs.filter(song=>song.genre==="Pop").every(song=>song.ratings.every(rating=>rating>=4));
// console.log(allpopsongs);

// output:-
// true
// ===============================================================================================================