import { gql } from 'apollo-boost'

export const EPOCHES_QUERY = gql`
  query epoches($first: Int, $skip: Int, $orderBy: String, $orderDirection: String) {
    epoches(
      first: $first
      orderBy: $orderBy
      orderDirection: $orderDirection
      skip: $skip
    ) {
      id
      startBlock
      endBlock
      queryFeesCollected
      totalRewards
    }
  }
`
