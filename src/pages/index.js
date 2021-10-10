import { Box, Image, Flex, Divider, Button } from 'theme-ui'
import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { withApollo } from '../apollo/client'
import { EPOCHES_QUERY } from '../apollo/queries'
import { formatNum } from '../utils/helpers'

const Index = () => {
  const { data, loading, error, fetchMore } = useQuery(EPOCHES_QUERY, {
    variables: { skip: 0 },
  })
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    if (data) {
      setTableData(data.epoches)
    }
  })

  function handleLoadMore() {
    fetchMore({
      variables: { skip: 3 },
      updateQuery: (prevResults, { fetchMoreResult }) => {
        console.log('prevResults', prevResults)
        console.log('fetchMoreResult', fetchMoreResult)
      },
    })
  }

  return (
    <Box
      sx={{
        height: '900px',
        maxWidth: '1440px',
      }}
    >
      <Box
        sx={{
          pt: '48px',
          m: '12px auto',
          width: '90%',
        }}
      >
        <Flex sx={{ alignItems: 'center' }}>
          <h1>Epochs</h1>
          <Divider
            sx={{
              border: 'solid',
              borderWidth: '1px',
              height: '24px',
              mx: '3',
              mb: '6',
              color: 'rgba(255,255,255,0.16)',
            }}
          />
          <Box sx={{ mb: '4', color: 'rgba(255,255,255,0.48)' }}>
            <Flex sx={{ alignItems: 'center' }}>
              <Image src="/images/Search.svg" sx={{ mr: '1' }} />
              <div>Search</div>
            </Flex>
          </Box>
        </Flex>
        <table style={{ marginTop: '20px', marginBottom: '40px' }}>
          <tbody>
            <tr
              style={{
                textTransform: 'uppercase',
                fontSize: '10px',
                lineHeight: '12px',
                letterSpacing: '1.2px',
                height: '44px',
              }}
            >
              <th>Epoch</th>
              <th>Start Block</th>
              <th>End Block</th>
              <th>Query Fees</th>
              <th>Total Rewards</th>
            </tr>
            {tableData.map((item) => (
              <tr
                key={item.id}
                style={{
                  height: '64px',
                  fontSize: '16px',
                  lineHeight: '24px',
                  backgroundColor: 'rgba(12,10,29,0)',
                  color: 'rgba(255,255,255,0.64)',
                }}
              >
                <td>{item.id}</td>
                <td>#{item.startBlock}</td>
                <td>#{item.endBlock}</td>
                <td>
                  {formatNum(item.queryFeesCollected)}
                  <span
                    style={{
                      marginLeft: '4px',
                      fontSize: '10px',
                      height: '12px',
                    }}
                  >
                    GRT
                  </span>
                </td>
                <td>
                  {formatNum(item.totalRewards)}
                  <span
                    style={{
                      marginLeft: '4px',
                      fontSize: '10px',
                      height: '12px',
                    }}
                  >
                    GRT
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Button
          sx={{ backgroundColor: 'transparent', border: 'solid', borderWidth: '1px' }}
          onClick={handleLoadMore}
        >
          Load More
        </Button>
      </Box>
    </Box>
  )
}

export default withApollo(Index, { ssr: false })
