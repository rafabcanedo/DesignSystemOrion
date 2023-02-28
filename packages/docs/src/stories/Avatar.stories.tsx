import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@canedo-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/rafabcanedo.png',
    alt: 'Rafael Canedo',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}