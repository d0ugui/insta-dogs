import { useEffect } from 'react'
import { Head } from '../../Helper/Head'
import { useFetch } from '../../../hooks/useFetch'
import { STATS_GET } from '../../../api/api'
import { Loading } from '../../Helper/Loading'
import { Error } from '../../Helper'
import { UserStatsGraphs } from '../UserStatsGraphs'

export function UserStats() {
  const { data, error, loading, request } = useFetch()

  useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET()
      await request(url, options)
    }
    getData()
  }, [request])

  if (loading) return <Loading />
  if (error) return <Error error={error} />
  if (data) {
    return (
      <div>
        <Head title="Estátisticas" />
        <UserStatsGraphs data={data} />
      </div>
    )
  } else return null
}
