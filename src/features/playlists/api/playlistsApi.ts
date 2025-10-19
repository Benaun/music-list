import { baseApi } from '@/app/api/baseApi'

import type {
  CreatePlaylistArgs,
  PlaylistData,
  //   FetchPlaylistsArgs,
  PlaylistsResponse,
  UpdatePlaylistArgs
} from './playlistsApi.types'

export const playlistsApi = baseApi.injectEndpoints({
  endpoints: build => ({
    fetchPlaylists: build.query<PlaylistsResponse, void>({
      query: () => 'playlists',
      providesTags: ['Playlist']
    }),
    createPlaylist: build.mutation<
      { data: PlaylistData },
      CreatePlaylistArgs
    >({
      query: body => ({
        url: 'playlists',
        method: 'post',
        body
      }),
      invalidatesTags: ['Playlist']
    }),
    deletePlaylist: build.mutation<void, string>({
      query: playlistId => ({
        url: `playlist/${playlistId}`,
        method: 'delete'
      }),
      invalidatesTags: ['Playlist']
    }),
    updatePlaylist: build.mutation<
      void,
      { playlistId: string; body: UpdatePlaylistArgs }
    >({
      query: ({ playlistId, body }) => ({
        url: `playlist/${playlistId}`,
        method: 'put',
        body
      }),
      invalidatesTags: ['Playlist']
    })
  })
})

export const {
  useFetchPlaylistsQuery,
  useCreatePlaylistMutation,
  useDeletePlaylistMutation,
  useUpdatePlaylistMutation
} = playlistsApi
