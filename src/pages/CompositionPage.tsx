import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Template,
  Organism,
  Molecule,
  Atom,
} from '@/components/features/composition'

const UseContextPage = (): JSX.Element => {
  const [date, setDate] = useState(new Date().toLocaleString())

  const updateDateHandler = (
    event: React.MouseEvent<HTMLButtonElement>,
  ): void => {
    event.preventDefault()
    setDate(new Date().toLocaleString())
  }

  return (
    <section className="tw-container tw-mx-auto">
      <div className="tw-flex tw-min-h-screen tw-items-center tw-justify-center">
        <div className="tw-w-[900px] tw-rounded-md tw-bg-slate-300 tw-py-16 tw-px-4 tw-text-center tw-shadow-3xl">
          <Link className="tw-btn tw-btn-sm tw-mb-4" to="/">
            Home
          </Link>

          <h1>Composition</h1>

          <Template>
            <Organism date={date}>
              <Molecule>
                <Atom date={date} onUpdate={updateDateHandler} />
              </Molecule>
            </Organism>
          </Template>

          <div className="tw-mt-4">
            <button
              className="tw-btn tw-btn-sm"
              onClick={() => setDate(new Date().toLocaleString())}
            >
              Set Current Date
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UseContextPage
