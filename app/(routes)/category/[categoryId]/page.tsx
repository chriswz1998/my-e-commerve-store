import { FC } from 'react'
import getProducts from '@/actions/get-products'
import getSizes from '@/actions/get-sizes'
import getColors from '@/actions/get-colors'
import getCategory from '@/actions/get-category'
import Container from '@/components/ui/container'
import Billboard from '@/components/billboard'
import Filter from '@/app/(routes)/category/[categoryId]/_components/filter'
import NoResults from '@/components/ui/no-results'
import ProductCard from '@/components/ui/product-card'

interface CategoryPageProps {
  params: {
    categoryId: string
  }
  searchParams: {
    colorId: string
    sizeId: string
  }
}

const CategoryPage: FC<CategoryPageProps> = async ({
  params,
  searchParams
}) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId
  })

  const sizes = await getSizes()
  const colors = await getColors()
  const category = await getCategory(params.categoryId)
  return (
    <div className={'bg-white'}>
      <Container>
        <Billboard data={category.billboard} />
        <div className={'lg:grid lg:grid-cols-5 lg:gap-x-8'}>
          <div className={'hidden lg:block'}>
            <Filter valueKey={'sizeId'} name={'Size'} data={sizes} />
            <Filter valueKey={'colorId'} name={'Color'} data={colors} />
          </div>
        </div>
        <div className={'mt-6 lg:col-span-4 lg:mt-0'}>
          {products.length === 0 && <NoResults />}
          <div
            className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'}
          >
            {products.map((item) => (
              <ProductCard data={item} key={item.id} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CategoryPage
