import { ExternalLink } from '@radzionkit/ui/navigation/Link/ExternalLink'
import { Modal } from '@radzionkit/ui/modal'
import { Opener } from '@radzionkit/ui/base/Opener'
import { HStack, VStack } from '@radzionkit/ui/layout/Stack'
import { Text } from '@radzionkit/ui/text'
import { DemoPage } from 'components/DemoPage'
import { Button } from '@radzionkit/ui/buttons/Button'
import { makeDemoPage } from 'layout/makeDemoPage'

export default makeDemoPage(() => {
  return (
    <DemoPage youtubeVideoId="v61B8aToxR0" title="Modal / Popup">
      <HStack fullWidth gap={40}>
        <Opener
          renderOpener={({ onOpen }) => (
            <Button onClick={onOpen}>Open Modal</Button>
          )}
          renderContent={({ onClose }) => (
            <Modal
              title="Get More Freedom"
              onClose={onClose}
              width={400}
              footer={
                <ExternalLink to="https://increaser.org">
                  <Button size="l" as="div">
                    Start now
                  </Button>
                </ExternalLink>
              }
            >
              <VStack gap={20}>
                <Text>
                  👨‍💻 No distractions, only deep work and quality breaks.
                </Text>
                <Text>💪 Build good habits. Break bad ones.</Text>
                <Text>😌 Efficiency over long hours. More time for life!</Text>
                <Text>☀️ Start work early. Enjoy the evening!</Text>
              </VStack>
            </Modal>
          )}
        />
      </HStack>
    </DemoPage>
  )
})
