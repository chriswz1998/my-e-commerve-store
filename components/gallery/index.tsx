'use client'

import { Image as ImageType } from '@/types'
import { FC } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface GalleryProps {
  images: ImageType[]
}

const Gallery: FC<GalleryProps> = ({ images }) => {
  return (
    <TabGroup className={'flex flex-col-reverse'}>
      <div
        className={
          'mx-auto mt-16 hidden w-full max-w-2xl sm:block lg:max-w-none'
        }
      >
        <TabList className={'grid grid-cols-4 gap-6'}>
          {images?.map((image) => (
            <Tab
              as={'div'}
              key={image.id}
              className={
                'relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white'
              }
            >
              {({ selected }) => (
                <div>
                  <span
                    className={
                      'absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md'
                    }
                  >
                    <Image
                      src={image.url}
                      alt={''}
                      fill
                      className={'object-cover object-center'}
                    />
                  </span>
                  <span
                    className={cn(
                      'absolute inset-0 rounded-md ring-2 ring-offset-2',
                      selected ? 'ring-black' : 'ring-transparent'
                    )}
                  />
                </div>
              )}
            </Tab>
          ))}
        </TabList>
      </div>
      <TabPanels className={'aspect-square w-full'}>
        {images?.map((image) => (
          <TabPanel key={image.id}>
            <div
              className={
                'aspect-square relative h-full w-full sm:rounded-lg overflow-hidden'
              }
            >
              <Image
                src={image?.url}
                alt={''}
                fill
                className={'object-cover object-center'}
              />
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  )
}
export default Gallery
