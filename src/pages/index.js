import { Box } from 'theme-ui'
import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { withApollo } from '../apollo/client'
import { EPOCHES_QUERY } from '../apollo/queries'

const Index = () => {
  const { data, loading, error } = useQuery(EPOCHES_QUERY)

  console.log(data)

  return (
    <Box>
      <Box
        sx={{
          pt: '48px',
          m: '0 auto',
          textAlign: 'center',
        }}
      >
        <h1>Welcome to the Edge & Node coding challenge!</h1>
      </Box>
    </Box>
  )
}

export default withApollo(Index, { ssr: false })
