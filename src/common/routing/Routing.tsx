import { Route, Routes } from 'react-router'

import { ProfilePage } from '@/features/auth/ui/ProfilePage/ProfilePage'
import { PlaylistsPage } from '@/features/playlists/ui/PlaylistsPage/PlaylistsPage'
import { TracksPage } from '@/features/tracks/ui/TrackPage/TracksPage'

import { MainPage } from '@/app/ui/MainPage/MainPage'

import { PageNotFound } from '@/common/components'

export const Path = {
  Main: '/',
  Profile: '/profile',
  Playlists: '/playlists',
  Tracks: '/tracks',
  NotFound: '*'
} as const

export const Routing = () => {
  return (
    <Routes>
      <Route path={Path.Main} element={<MainPage />} />
      <Route path={Path.Profile} element={<ProfilePage />} />
      <Route path={Path.Playlists} element={<PlaylistsPage />} />
      <Route path={Path.Tracks} element={<TracksPage />} />
      <Route path={Path.NotFound} element={<PageNotFound />} />
    </Routes>
  )
}
