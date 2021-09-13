import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'

import { UserContext } from '../../context/UserContext'

import { Feed } from '../Feed'
import { Head } from '../Helper/Head'
import { NotFound } from '../NotFound/NotFounde'
import { UserHeader } from './UserHeader'
import { UserPhotoPost } from './UserPhotoPost'
import { UserStats } from './UserStats'

export function User() {
  const { data } = useContext(UserContext)

  return (
    <section className="container">
      <Head title="Minha conta" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  )
}
