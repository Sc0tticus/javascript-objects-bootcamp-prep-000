
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
