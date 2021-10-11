import { useState } from 'react'
import { formatNum } from '../utils/helpers'
import TableHeadingButton from './TableHeadingButton'
import { Box } from 'theme-ui'

function Table({ tableData, handleSort }) {
  const [activeColumn, setActiveColumn] = useState('startBlock')
  const TABLE_HEADINGS = [
    { id: 'id', title: 'Epoch' },
    { id: 'startBlock', title: 'Start Block' },
    { id: 'endBlock', title: 'End Block' },
    { id: 'queryFeesCollected', title: 'Query Fees' },
    { id: 'totalRewards', title: 'Total Rewards' },
  ]

  return (
    <Box
      sx={{
        overflowX: 'auto',
      }}
    >
      <table
        style={{
          marginTop: '20px',
          marginBottom: '40px',
          color: 'rgba(255,255,255,0.64)',
          backgroundColor: 'rgba(12,10,29,0)',
          minWidth: '600px',
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
            {TABLE_HEADINGS.map((item) => (
              <th key={item.id}>
                <TableHeadingButton
                  title={item.title}
                  handleSort={handleSort}
                  orderByField={item.id}
                  activeColumn={activeColumn}
                  setActiveColumn={setActiveColumn}
                />
              </th>
            ))}
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
                borderBottom: 'solid',
                borderWidth: '1px',
                borderColor: 'rgba(255,255,255,0.04)',
              }}
            >
              <td
                style={{
                  color: activeColumn === 'id' ? '#FFFFFF' : 'rgba(255,255,255,0.64)',
                  paddingLeft: '20px',
                }}
              >
                {item.id}
              </td>
              <td
                style={{
                  color:
                    activeColumn === 'startBlock' ? '#FFFFFF' : 'rgba(255,255,255,0.64)',
                  paddingLeft: '12px',
                }}
              >
                #{item.startBlock}
              </td>
              <td
                style={{
                  color:
                    activeColumn === 'endBlock' ? '#FFFFFF' : 'rgba(255,255,255,0.64)',
                  paddingLeft: '12px',
                }}
              >
                #{item.endBlock}
              </td>
              <td
                style={{
                  color:
                    activeColumn === 'queryFeesCollected'
                      ? '#FFFFFF'
                      : 'rgba(255,255,255,0.64)',
                  paddingLeft: '20px',
                }}
              >
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
              <td
                style={{
                  color:
                    activeColumn === 'totalRewards'
                      ? '#FFFFFF'
                      : 'rgba(255,255,255,0.64)',
                  paddingLeft: '20px',
                }}
              >
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
    </Box>
  )
}

export default Table
