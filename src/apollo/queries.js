import { gql } from 'apollo-boost'

export const EPOCHES_QUERY = gql`
  query epoches(
    $first: Int
    $skip: Int
    $orderBy: String
    $orderDirection: String
    $where: Epoch_filter
  ) {
    epoches(
      first: $first
      orderBy: $orderBy
      orderDirection: $orderDirection
      skip: $skip
      where: $where
    ) {
      id
      startBlock
      endBlock
      queryFeesCollected
      totalRewards
    }
  }
`
