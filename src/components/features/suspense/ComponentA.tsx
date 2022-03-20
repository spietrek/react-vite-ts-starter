import { useEffect } from 'react'

const ComponentA = (): JSX.Element => {
  useEffect(() => {}, [])
  return (
    <div className="tw-bg-slate-100 tw-p-4">
      <h1>Component A</h1>
    </div>
  )
}

export default ComponentA
