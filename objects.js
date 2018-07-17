<<<<<<< HEAD
var playlist = new Object({artistName: 'songTitle'})

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
=======
var playlist = {}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist.artistName = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName
>>>>>>> dc9775f8f1a52745c63ca967b0c10ace850ab81e
}