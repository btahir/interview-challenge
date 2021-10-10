import { formatNum } from '../utils/helpers'
import TableHeadingButton from './TableHeadingButton'

function Table({ tableData, handleSort }) {
  return (
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
            <TableHeadingButton handleSort={handleSort} />
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
  )
}

export default Table
