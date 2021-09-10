import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'

import { UserContext } from '../../context/UserContext'

import { Feed } from '../Feed'
import { UserHeader } from './UserHeader'
import { UserPhotoPost } from './UserPhotoPost'
import { UserStats } from './UserStats'

export function User() {
  const { data } = useContext(UserContext)

  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  )
}
