import { CountryCode } from '@reactkit/utils/countries'
import { DemoPage } from 'components/DemoPage'
import { makeDemoPage } from 'layout/makeDemoPage'
import { useState } from 'react'
import { CountryInput } from '@reactkit/ui/inputs/CountryInput'
import styled from 'styled-components'
import { InputWrapper } from '@reactkit/ui/inputs/InputWrapper'

const Container = styled.div`
  max-width: 360px;
  min-width: 320px;
  width: 100%;
`

export default makeDemoPage(() => {
  const [value, setValue] = useState<CountryCode | undefined>('PT')

  return (
    <DemoPage title="Country Input">
      <Container>
        <InputWrapper label="Select a country">
          <CountryInput value={value} onChange={setValue} />
        </InputWrapper>
      </Container>
    </DemoPage>
  )
})