import type {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister
} from 'react-hook-form'

import { useUpdatePlaylistMutation } from '@/features/playlists/api/playlistsApi'
import type { UpdatePlaylistArgs } from '@/features/playlists/api/playlistsApi.types'

interface IProps {
  playlistId: string
  setPlaylistId: (playlistId: string | null) => void
  editPlaylist: (playlist: null) => void
  register: UseFormRegister<UpdatePlaylistArgs>
  handleSubmit: UseFormHandleSubmit<UpdatePlaylistArgs>
}

export const EditPlaylistForm = ({
  playlistId,
  setPlaylistId,
  editPlaylist,
  handleSubmit,
  register
}: IProps) => {
  const [updatePlaylist] = useUpdatePlaylistMutation()

  const onSubmit: SubmitHandler<UpdatePlaylistArgs> = body => {
    if (!playlistId) return
    updatePlaylist({ playlistId, body })
      .unwrap()
      .then(() => setPlaylistId(null))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Edit playlist</h2>
      <div>
        <input {...register('title')} placeholder={'title'} />
      </div>
      <div>
        <input
          {...register('description')}
          placeholder={'description'}
        />
      </div>
      <button type={'submit'}>save</button>
      <button type={'button'} onClick={() => editPlaylist(null)}>
        cancel
      </button>
    </form>
  )
}
