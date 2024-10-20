'use client'

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import getProduct from '@/actions/get-product'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Fragment } from 'react'

const categories = [
  {
    name: 'Recent',
    posts: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2
      }
    ]
  },
  {
    name: 'Popular',
    posts: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12
      }
    ]
  },
  {
    name: 'Trending',
    posts: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2
      }
    ]
  }
]

export default async function TestPage() {
  const { images } = await getProduct('46727816-aefe-4f48-bfb8-cd61c5fec31d')
  return (
    <div className="flex h-screen w-full justify-center pt-24 px-4">
      <div className="w-full max-w-md bg-black">
        <TabGroup>
          <TabPanels className="mt-3">
            {images.map((image) => (
              <TabPanel key={image.id} className="rounded-xl bg-white/5 p-3">
                <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
                  <Image
                    src={image.url}
                    alt={''}
                    className={'object-cover object-center'}
                    fill
                  />
                </div>
              </TabPanel>
            ))}
          </TabPanels>
          <TabList className="flex gap-4">
            {images.map((image) => (
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
        </TabGroup>
      </div>
    </div>
  )
}
