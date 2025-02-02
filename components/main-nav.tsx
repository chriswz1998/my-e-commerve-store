'use client'
import { FC } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Category } from '@/types'

interface MainNavProps {
  data: Category[]
}

const MainNav: FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname()

  const routes = data.map((item) => ({
    href: `/category/${item.id}`,
    label: item.name,
    active: pathname === `/category/${item.id}`
  }))
  return (
    <nav className={'mx-6 flex items-center space-x-4 lg:space-x-6'}>
      {routes.map((route) => (
        <Link
          href={route.href}
          key={route.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-black',
            route.active ? 'text-black' : 'text-neutral-500'
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  )
}

export default MainNav
