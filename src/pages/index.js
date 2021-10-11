import { Box, Image, Flex, Divider, Button } from 'theme-ui'
import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { withApollo } from '../apollo/client'
import { EPOCHES_QUERY } from '../apollo/queries'
import Heading from '../components/Heading'
import Table from '../components/Table'
import LoadMoreButton from '../components/LoadMoreButton'

const Index = () => {
  const [tableData, setTableData] = useState([])
  const [recordsLoaded, setRecordsLoaded] = useState(3)
  const { data, loading, error, fetchMore, refetch } = useQuery(EPOCHES_QUERY, {
    variables: {
      first: 3,
      skip: 0,
      orderBy: 'startBlock',
      orderDirection: 'asc',
      where: {},
    },
  })

  useEffect(() => {
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

  function handleSort(sortField, orderByDirection) {
    refetch({
      first: recordsLoaded,
      orderBy: sortField,
      orderDirection: orderByDirection,
    })
  }

  function handleSearch(searchedBlock) {
    if (searchedBlock === '') {
      refetch({
        where: {},
      })
    } else {
      refetch({
        where: { startBlock: parseInt(searchedBlock) },
      })
    }
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
        <Heading handleSearch={handleSearch} />
        <Table tableData={tableData} handleSort={handleSort} />
        <LoadMoreButton handleLoadMore={handleLoadMore} />
      </Box>
    </Box>
  )
}

export default withApollo(Index, { ssr: false })
