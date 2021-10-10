import { Button, Image } from 'theme-ui'

function TableHeadingButton({ handleSort }) {
  return (
    <Button
      sx={{
        backgroundColor: 'transparent',
        display: 'flex',
        alignItems: 'center',
        fontSize: '10px',
        lineHeight: '12px',
        letterSpacing: '1.2px',
        height: '12px',
        textTransform: 'uppercase',
      }}
      onClick={() => handleSort('id')}
    >
      <span>Epoch</span>
      <Image
        src="/images/Direction-Down.svg"
        sx={{ ml: '2', height: '10px', width: '8px' }}
      />
    </Button>
  )
}

export default TableHeadingButton
