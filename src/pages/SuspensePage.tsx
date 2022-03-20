import { Suspense } from 'react'
import { Link } from 'react-router-dom'
import { ComponentA, ComponentB } from '@/components/features/suspense'

const SuspensePage = (): JSX.Element => {
  return (
    <section className="tw-container tw-mx-auto">
      <div className="tw-flex tw-min-h-screen tw-items-center tw-justify-center">
        <div className="tw-w-[900px] tw-rounded-md tw-bg-slate-300 tw-py-16 tw-px-4 tw-text-center tw-shadow-3xl">
          <Link className="tw-btn tw-btn-sm tw-mb-4" to="/">
            Home
          </Link>

          <h1>Suspense</h1>

          <Suspense fallback={<h1>Loading data...</h1>}>
            <ComponentA />
            <Suspense fallback={<h1>Loading data...</h1>}>
              <ComponentB />
            </Suspense>
          </Suspense>
        </div>
      </div>
    </section>
  )
}

export default SuspensePage
