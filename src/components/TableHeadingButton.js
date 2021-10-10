import { useState } from 'react'
import { Button, Image } from 'theme-ui'

function TableHeadingButton({
  title,
  orderByField,
  handleSort,
  activeColumn,
  setActiveColumn,
}) {
  const [orderByDirection, setOrderByDirection] = useState('asc')
  const [imgSrc, setImgSrc] = useState('/images/Direction-Down.svg')
  const [hoverOpacity, setHoverOpacity] = useState(0)

  const finalOpacity = hoverOpacity || activeColumn === orderByField ? 1 : 0

  function handleClick() {
    setActiveColumn(orderByField)
    handleSort(orderByField, orderByDirection)
    if (orderByDirection === 'asc') {
      setOrderByDirection('desc')
      setImgSrc('/images/Direction-Down.svg')
    } else {
      setOrderByDirection('asc')
      setImgSrc('/images/Direction-Up.svg')
    }
  }

  return (
    <Button
      onMouseEnter={() => setHoverOpacity(1)}
      onMouseLeave={() => setHoverOpacity(0)}
      sx={{
        backgroundColor: 'transparent',
        color: activeColumn === orderByField ? '#FFFFFF' : 'rgba(255,255,255,0.64)',
        display: 'flex',
        alignItems: 'center',
        fontSize: '10px',
        lineHeight: '12px',
        letterSpacing: '1.2px',
        height: '12px',
        textTransform: 'uppercase',
      }}
      onClick={handleClick}
    >
      <span>{title}</span>
      <Image
        src={imgSrc}
        sx={{ ml: '2', height: '10px', width: '8px', opacity: finalOpacity }}
      />
    </Button>
  )
}

export default TableHeadingButton
