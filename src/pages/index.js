import { Box, Image, Flex } from 'theme-ui'
import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { withApollo } from '../apollo/client'
import { EPOCHES_QUERY } from '../apollo/queries'

const Index = () => {
  const { data, loading, error } = useQuery(EPOCHES_QUERY)

  console.log(data)

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
          // textAlign: 'center',
        }}
      >
        <Flex sx={{ alignItems: 'center' }}>
          <h1>Epochs</h1>
          <Box
            sx={{
              border: 'solid',
              borderWidth: '1px',
              height: '24px',
              width: '1px',
              mx: '3',
              mb: '4',
              color: 'rgba(255,255,255,0.16)',
            }}
          ></Box>
          <Box sx={{ mb: '4', color: '#9ca4ab' }}>
            <Flex sx={{ alignItems: 'center' }}>
              <Image src="/images/Search.svg" sx={{ mr: '1' }} />
              <div>Search</div>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default withApollo(Index, { ssr: false })
