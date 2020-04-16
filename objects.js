<<<<<<< HEAD

var playlist = {
  "Santana": "Jingo",
  "Aerosmith": "Dream On"
};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName]=songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}

//removeFromPlaylist(playlist, "Aerosmith")
=======
//Assign an object to the variable playlist and initialize the object with a key-value pair — the keys will be artist names and the values will be song titles. (What limitation does this impose on our playlist?)
var playlist = {
  Aerosmith: "Dream On",
  Santana: "Jingo",
  Nas: "Memory Lane",
  Led_Zeppelin: "Dazed and Confused"
};

//
>>>>>>> 6e15db0332c25cbc16894b0fa16c98e47fcd9ade
