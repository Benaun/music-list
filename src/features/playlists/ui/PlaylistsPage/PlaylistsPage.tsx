import {
  useDeletePlaylistMutation,
  useFetchPlaylistsQuery
} from '@/features/playlists/api/playlistsApi'

import { CreatePlaylistForm } from '../CreatePlaylistForm/CreatePlaylistForm'

import styles from './PlaylistsPage.module.css'

export const PlaylistsPage = () => {
  const { data: playlists, isLoading } = useFetchPlaylistsQuery()
  const [deletePlaylist] = useDeletePlaylistMutation()

  const handleDeletePlaylist = (playlistId: string) => {
    if (confirm('Are you sure?')) deletePlaylist(playlistId)
  }

  if (isLoading) <h1>...Loading</h1>

  return (
    <div className={styles.container}>
      <h1>Playlists page</h1>
      <CreatePlaylistForm />
      <div className={styles.items}>
        {playlists?.data.map(playlist => {
          return (
            <div className={styles.item} key={playlist.id}>
              <div>title: {playlist.attributes.title}</div>
              <div>
                description: {playlist.attributes.description}
              </div>
              <div>
                userName: {playlist.attributes.user.name}
              </div>
              <button
                onClick={() => handleDeletePlaylist(playlist.id)}
              >
                delete
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
