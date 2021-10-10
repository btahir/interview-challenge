import { Box, Button } from 'theme-ui'

function LoadMoreButton({ handleLoadMore }) {
  return (
    <Box sx={{ width: '100%', textAlign: 'center' }}>
      <Button
        sx={{
          backgroundColor: 'transparent',
          border: 'solid',
          borderWidth: '1px',
          width: '142px',
          height: '48px',
          fontSize: '14px',
          fontWeight: '600',
          lineHeight: '20px',
          letterSpacing: '0.4px',
        }}
        onClick={handleLoadMore}
      >
        Load More
      </Button>
    </Box>
  )
}

export default LoadMoreButton
