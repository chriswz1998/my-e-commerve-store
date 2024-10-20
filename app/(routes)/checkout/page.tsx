'use client'

import axios from 'axios'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

const CheckoutPage = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const checkoutMethod = async () => {
    console.log('1212')
    const productIds = [
      'ea44378b-fc7d-4727-b97a-67b2c90b426e',
      '46727816-aefe-4f48-bfb8-cd61c5fec31d'
    ]
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      { productIds }
    )
    console.log(response)
    window.location = response.data.url
  }

  useEffect(() => {
    if (searchParams.get('success')) {
      router.push('/checkout/success')
    }

    if (searchParams.get('canceled')) {
      router.push('/checkout/canceled')
    }
  }, [searchParams])
  return (
    <div className="w-full h-full flex items-center justify-center">
      <button
        className={'bg-black text-white p-4 px-8 rounded-md'}
        onClick={checkoutMethod}
      >
        payment test
      </button>
    </div>
  )
}

export default CheckoutPage
