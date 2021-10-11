import { Box, Image, Flex, Divider, Input } from 'theme-ui'

function Heading({ handleSearch }) {
  return (
    <Flex sx={{ alignItems: 'center' }}>
      <h1>Epochs</h1>
      <Divider
        sx={{
          border: 'solid',
          borderWidth: '1px',
          height: '24px',
          mx: '3',
          mb: '6',
          color: 'rgba(255,255,255,0.16)',
        }}
      />
      <Box sx={{ mb: '4', color: 'rgba(255,255,255,0.48)' }}>
        <Flex sx={{ alignItems: 'center' }}>
          <Image src="/images/Search.svg" />
          <Input
            defaultValue=""
            placeholder="Search"
            sx={{ border: 'none', color: '#fff' }}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </Flex>
      </Box>
    </Flex>
  )
}

export default Heading
