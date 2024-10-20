import { Image as ImageType } from '@/types'
import { FC } from 'react'
import { Tab, TabGroup, TabList } from '@headlessui/react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
interface GalleryTabProps {
  image: ImageType
}

const GalleryTab: FC<GalleryTabProps> = ({ image }) => {
  return (
    <TabGroup>
      <TabList></TabList>
    </TabGroup>
  )
}
export default GalleryTab
