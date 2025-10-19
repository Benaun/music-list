import type { PlaylistData } from '@/features/playlists/api/playlistsApi.types'

interface IProps {
  playlist: PlaylistData
  handleDeletePlaylist: (playlistId: string) => void
  handleEditPlaylist: (playlist: PlaylistData) => void
}

export const PlaylistItem = ({
  playlist,
  handleDeletePlaylist,
  handleEditPlaylist
}: IProps) => {
  return (
    <div>
      <div>title: {playlist.attributes.title}</div>
      <div>{playlist.attributes.description}</div>
      <div>userName: {playlist.attributes.user.name}</div>
      <button onClick={() => handleDeletePlaylist(playlist.id)}>
        delete
      </button>
      <button onClick={() => handleEditPlaylist(playlist)}>
        update
      </button>
    </div>
  )
}
