import { useEffect } from 'react'
import type { RootState } from '@/store'
import { useAppSelector, useAppDispatch } from '@/hooks/useReduxHooks'
import {
  retrieveSales,
  totalSalesAmountSelector,
  totalSalesCountSelector,
} from '@/store/slices/sales/salesSlice'
import SpinnerWrapper from '@/components/molecules/SpinnerWrapper'
import Stat from '@/components/molecules/Stat'
import { formatNumber } from '@/utilities'

const SalesSummary = (): JSX.Element => {
  const isLoading = useAppSelector((state: RootState) => state.sales.isLoading)
  const count = formatNumber(
    useAppSelector((state: RootState) => state.sales.count),
  )
  const totalAmount = useAppSelector((state: RootState) => {
    // $490.48 MM
    return formatNumber(totalSalesAmountSelector(state))
  })
  const totalCount = useAppSelector((state: RootState) => {
    // 75.42 K
    return formatNumber(totalSalesCountSelector(state))
  })
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(retrieveSales())
  }, [dispatch])

  return (
    <div className="tw-my-4 tw-p-4">
      <SpinnerWrapper isLoading={isLoading}>
        <div className="tw-stats tw-shadow">
          <Stat
            pathD="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            title="Transactions"
            count={count}
            desc="March 2021 - March 2022"
          />

          <Stat
            pathD="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            title="Total Cost"
            count={totalAmount}
            desc="March 2021 - March 2022"
          />

          <Stat
            pathD="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            title="Total Quantity"
            count={totalCount}
            desc="March 2021 - March 2022"
          />
        </div>
      </SpinnerWrapper>
    </div>
  )
}

export default SalesSummary
