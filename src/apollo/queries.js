import { gql } from 'apollo-boost'

export const EPOCHES_QUERY = gql`
  query epoches($skip: Int) {
    epoches(first: 3, orderBy: startBlock, orderDirection: asc, skip: $skip) {
      id
      startBlock
      endBlock
      queryFeesCollected
      totalRewards
    }
  }
`
