import { Image as ImageType } from '@/types'
import { FC } from 'react'
import { TabGroup, TabList } from '@headlessui/react'
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
