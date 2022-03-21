import { useEffect } from 'react'
import type { RootState } from '@/store'
import { useAppSelector, useAppDispatch } from '@/hooks/useReduxHooks'
import {
  retrieveSales,
  totalSalesAmountSelector,
  totalSalesCountSelector,
} from '@/store/slices/sales/salesSlice'
import SpinnerWrapper from '@/components/molecules/SpinnerWrapper'

const SalesSummary = (): JSX.Element => {
  const isLoading = useAppSelector((state: RootState) => state.sales.isLoading)
  const count = useAppSelector((state: RootState) => state.sales.count)
  const totalAmount = useAppSelector((state: RootState) => {
    return totalSalesAmountSelector(state)
  })
  const totalCount = useAppSelector((state: RootState) => {
    return totalSalesCountSelector(state)
  })
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(retrieveSales())
  }, [dispatch])

  return (
    <div className="tw-my-4 tw-bg-slate-200 tw-p-4">
      <SpinnerWrapper isLoading={isLoading}>
        <div className="tw-stats tw-shadow">
          <div className="tw-stat">
            <div className="tw-stat-figure tw-text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="tw-inline-block tw-h-8 tw-w-8 tw-stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="tw-stat-title">Transactions</div>
            <div className="tw-stat-value">{count}</div>
            <div className="tw-stat-desc">March 2021 - March 2022</div>
          </div>

          <div className="tw-stat">
            <div className="tw-stat-figure tw-text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="tw-inline-block tw-h-8 tw-w-8 tw-stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
            <div className="tw-stat-title">Total Cost</div>
            <div className="tw-stat-value">{totalAmount}</div>
            <div className="tw-stat-desc">March 2021 - March 2022</div>
          </div>

          <div className="tw-stat">
            <div className="tw-stat-figure tw-text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="tw-inline-block tw-h-8 tw-w-8 tw-stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                />
              </svg>
            </div>
            <div className="tw-stat-title">Total Quantity</div>
            <div className="tw-stat-value">{totalCount}</div>
            <div className="tw-stat-desc">March 2021 - March 2022</div>
          </div>
        </div>
      </SpinnerWrapper>
    </div>
  )
}

export default SalesSummary
