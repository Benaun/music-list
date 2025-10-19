import { useState } from 'react'
import { useForm } from 'react-hook-form'

import {
  useDeletePlaylistMutation,
  useFetchPlaylistsQuery
} from '@/features/playlists/api/playlistsApi'

import type {
  PlaylistData,
  UpdatePlaylistArgs
} from '../../api/playlistsApi.types'
import { CreatePlaylistForm } from '../CreatePlaylistForm/CreatePlaylistForm'
import { EditPlaylistForm } from '../EditPlaylistForm/EditPlaylistForm'
import { PlaylistItem } from '../PlaylistItem/PlaylistItem'

import styles from './PlaylistsPage.module.css'

export const PlaylistsPage = () => {
  const { data: playlists, isLoading } = useFetchPlaylistsQuery()
  const [deletePlaylist] = useDeletePlaylistMutation()

  const [playlistId, setPlaylistId] = useState<string | null>(
    null
  )
  const { handleSubmit, reset, register } =
    useForm<UpdatePlaylistArgs>()

  const handleDeletePlaylist = (playlistId: string) => {
    if (confirm('Are you sure?')) deletePlaylist(playlistId)
  }

  const handleEditPlaylist = (playlist: PlaylistData | null) => {
    if (playlist) {
      setPlaylistId(playlist.id)
      reset({
        title: playlist.attributes.title,
        description: playlist.attributes.description,
        tagIds: playlist.attributes.tags.map(tag => tag.id)
      })
    } else setPlaylistId(null)
  }

  if (isLoading) <h1>...Loading</h1>

  return (
    <div className={styles.container}>
      <h1>Playlists page</h1>
      <CreatePlaylistForm />
      <div className={styles.items}>
        {playlists?.data.map(playlist => {
          const isEditing = playlist.id === playlistId

          return (
            <div className={styles.item} key={playlist.id}>
              {isEditing ? (
                <EditPlaylistForm
                  playlistId={playlistId}
                  setPlaylistId={setPlaylistId}
                  editPlaylist={handleEditPlaylist}
                  register={register}
                  handleSubmit={handleSubmit}
                />
              ) : (
                <PlaylistItem
                  playlist={playlist}
                  handleDeletePlaylist={handleDeletePlaylist}
                  handleEditPlaylist={handleEditPlaylist}
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
