import { Box, Image, Flex, Divider, Button } from 'theme-ui'
import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { withApollo } from '../apollo/client'
import { EPOCHES_QUERY } from '../apollo/queries'
import { formatNum } from '../utils/helpers'

const Index = () => {
  const [tableData, setTableData] = useState([])
  const [recordsLoaded, setRecordsLoaded] = useState(3)
  console.log('fired')
  const { data, loading, error, fetchMore, refetch } = useQuery(EPOCHES_QUERY, {
    variables: { first: 3, skip: 0, orderBy: 'startBlock', orderDirection: 'asc' },
  })

  useEffect(() => {
    console.log('data', data)
    if (data) {
      setTableData(data.epoches)
    }
  })

  function handleLoadMore() {
    fetchMore({
      variables: { skip: recordsLoaded },
      updateQuery: (prevResults, { fetchMoreResult }) => {
        fetchMoreResult.epoches = [...prevResults.epoches, ...fetchMoreResult.epoches]
        setRecordsLoaded(recordsLoaded + 3)
        return fetchMoreResult
      },
    })
  }

  function handleSort(sortField) {
    refetch({ first: recordsLoaded, orderBy: sortField, orderDirection: 'desc' })
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
        <table
          style={{
            marginTop: '20px',
            marginBottom: '40px',
            color: 'rgba(255,255,255,0.64)',
            backgroundColor: 'rgba(12,10,29,0)',
          }}
        >
          <thead>
            <tr
              style={{
                height: '44px',
                borderBottom: 'solid',
                borderWidth: '1px',
              }}
            >
              <th>
                <Button
                  sx={{
                    backgroundColor: 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '10px',
                    lineHeight: '12px',
                    letterSpacing: '1.2px',
                    height: '12px',
                    textTransform: 'uppercase',
                  }}
                  onClick={() => handleSort('id')}
                >
                  <span>Epoch</span>
                  <Image
                    src="/images/Direction-Down.svg"
                    sx={{ ml: '2', height: '10px', width: '8px' }}
                  />
                </Button>
              </th>
              <th>Start Block</th>
              <th>End Block</th>
              <th>Query Fees</th>
              <th>Total Rewards</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item) => (
              <tr
                key={item.id}
                style={{
                  height: '64px',
                  fontSize: '16px',
                  lineHeight: '24px',
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
        <Box sx={{ width: '100%', textAlign: 'center' }}>
          <Button
            sx={{
              backgroundColor: 'transparent',
              border: 'solid',
              borderWidth: '1px',
              width: '142px',
              height: '48px',
              fontSize: '14px',
              fontWeight: '600',
              lineHeight: '20px',
              letterSpacing: '0.4px',
            }}
            onClick={handleLoadMore}
          >
            Load More
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default withApollo(Index, { ssr: false })
