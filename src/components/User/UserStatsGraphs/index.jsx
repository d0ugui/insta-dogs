import { useState, useEffect } from 'react'
import { VictoryPie, VictoryChart, VictoryBar } from 'victory'

import { Graph, GraphItem } from './styles'

export function UserStatsGraphs({ data }) {
  const [graph, setGraph] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    if (data.length > 0) {
      const graphData = data.map((item) => {
        return {
          x: item.title,
          y: Number(item.acessos)
        }
      })
      setTotal(data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b))
      setGraph(graphData)
    } else {
      return null
    }
  }, [data])

  return (
    <>
      {graph.length > 0 ? (
        <Graph className="animeLeft">
          <GraphItem>
            <p>Acessos: {total}</p>
          </GraphItem>
          <GraphItem>
            <VictoryPie
              data={graph}
              innerRadius={50}
              padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
              style={{
                data: {
                  fillOpacity: 0.9,
                  stroke: '#fff',
                  strokeWidth: 2
                },
                labels: {
                  fontSize: 14,
                  fill: '#333'
                }
              }}
            />
          </GraphItem>
          <GraphItem>
            <VictoryChart>
              <VictoryBar alignment="start" data={graph}></VictoryBar>
            </VictoryChart>
          </GraphItem>
        </Graph>
      ) : (
        <h1>Não existem posts a serem avaliados.</h1>
      )}
    </>
  )
}

export default UserStatsGraphs
