import { Box, Image, Flex, Divider } from 'theme-ui'
import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { withApollo } from '../apollo/client'
import { EPOCHES_QUERY } from '../apollo/queries'

const Index = () => {
  const { data, loading, error } = useQuery(EPOCHES_QUERY)
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    if (data) {
      setTableData(data.epoches)
    }
  })

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
        <table style={{ marginTop: '20px' }}>
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
                <td>{item.queryFeesCollected}</td>
                <td>{item.totalRewards}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </Box>
  )
}

export default withApollo(Index, { ssr: false })
