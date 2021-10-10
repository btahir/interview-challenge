import { useState } from 'react'
import { formatNum } from '../utils/helpers'
import TableHeadingButton from './TableHeadingButton'

function Table({ tableData, handleSort }) {
  const [activeColumn, setActiveColumn] = useState('startBlock')

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
            <TableHeadingButton
              title="Epoch"
              handleSort={handleSort}
              orderByField="id"
              activeColumn={activeColumn}
              setActiveColumn={setActiveColumn}
            />
          </th>
          <th>
            <TableHeadingButton
              title="Start Block"
              handleSort={handleSort}
              orderByField="startBlock"
              activeColumn={activeColumn}
              setActiveColumn={setActiveColumn}
            />
          </th>
          <th>
            <TableHeadingButton
              title="End Block"
              handleSort={handleSort}
              orderByField="endBlock"
              activeColumn={activeColumn}
              setActiveColumn={setActiveColumn}
            />
          </th>
          <th>
            <TableHeadingButton
              title="Query Fees"
              handleSort={handleSort}
              orderByField="queryFeesCollected"
              activeColumn={activeColumn}
              setActiveColumn={setActiveColumn}
            />
          </th>
          <th>
            <TableHeadingButton
              title="Total Rewards"
              handleSort={handleSort}
              orderByField="totalRewards"
              activeColumn={activeColumn}
              setActiveColumn={setActiveColumn}
            />
          </th>
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
            <td
              style={{
                color: activeColumn === 'id' ? '#FFFFFF' : 'rgba(255,255,255,0.64)',
              }}
            >
              {item.id}
            </td>
            <td
              style={{
                color:
                  activeColumn === 'startBlock' ? '#FFFFFF' : 'rgba(255,255,255,0.64)',
              }}
            >
              #{item.startBlock}
            </td>
            <td
              style={{
                color: activeColumn === 'endBlock' ? '#FFFFFF' : 'rgba(255,255,255,0.64)',
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
                  activeColumn === 'totalRewards' ? '#FFFFFF' : 'rgba(255,255,255,0.64)',
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
  )
}

export default Table
