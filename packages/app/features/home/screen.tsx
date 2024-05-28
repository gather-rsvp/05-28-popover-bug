import {
  Anchor,
  Button,
  H1,
  Paragraph,
  Separator,
  Sheet,
  useToastController,
  CustomToast,
  SwitchThemeButton,
  ToastViewport,
  XStack,
  YStack,
  Popover,
  SizableText,
} from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import { useState } from 'react'
// if using app router
import { useLink } from 'solito/navigation'
// if using pages router
// import { useLink } from 'solito/link'

export function HomeScreen() {
  const linkProps = useLink({
    href: '/user/nate',
  })

  return (
    <YStack f={1} jc="center" ai="center" p="$4" gap="$4" bg="$background">
      <YStack gap="$4">
        <H1 ta="center">Welcome to Tamagui.</H1>
        <Paragraph ta="center">
          Here's a basic starter to show navigating from one screen to another. This screen uses the
          same code on Next.js and React Native.
        </Paragraph>

        <Separator />
        <Paragraph ta="center">
          Made by{' '}
          <Anchor color="$color12" href="https://twitter.com/natebirdman" target="_blank">
            @natebirdman
          </Anchor>
          ,{' '}
          <Anchor
            color="$color12"
            href="https://github.com/tamagui/tamagui"
            target="_blank"
            rel="noreferrer"
          >
            give it a ⭐️
          </Anchor>
        </Paragraph>
      </YStack>

      <SwitchThemeButton />

      <XStack>
        <Button {...linkProps}>Link to user</Button>
      </XStack>

      <PopoverBug />

      {/* remove next two lines if using pages router */}
      <CustomToast />
      <ToastViewport left={0} right={0} top={10} />

      <SheetDemo />
    </YStack>
  )
}

function SheetDemo() {
  const toast = useToastController()

  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState(0)

  return (
    <>
      <Button
        size="$6"
        icon={open ? ChevronDown : ChevronUp}
        circular
        onPress={() => setOpen((x) => !x)}
      />
      <Sheet
        modal
        animation="medium"
        open={open}
        onOpenChange={setOpen}
        snapPoints={[80]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
        <Sheet.Frame ai="center" jc="center" bg="$color2">
          <Sheet.Handle />
          <Button
            size="$6"
            circular
            icon={ChevronDown}
            onPress={() => {
              setOpen(false)
              toast.show('Sheet closed!', {
                message: 'Just showing how toast works...',
              })
            }}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  )
}

// open this on native to see the popover flashing on different places before staying in the correct position
function PopoverBug() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <XStack>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <Popover.Trigger asChild>
          {/* <Popover.Anchor> */}
          <Button>Open popover</Button>
          {/* </Popover.Anchor> */}
        </Popover.Trigger>

        <Popover.Content p="$1.5" bg="slateblue" zIndex={1}>
          <Popover.Close asChild>
            <YStack w={200} ai="center">
              <SizableText color="#fff">Item 1</SizableText>
              <SizableText color="#fff">Item 2</SizableText>
              <SizableText color="#fff">Item 3</SizableText>
            </YStack>
          </Popover.Close>
        </Popover.Content>
      </Popover>
    </XStack>
  )
}
