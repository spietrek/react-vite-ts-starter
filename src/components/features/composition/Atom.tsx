interface AtomProps {
  date: string
  onUpdate: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Atom = ({ date, onUpdate }: AtomProps): JSX.Element => {
  return (
    <div className="tw-bg-slate-700 tw-p-4 tw-text-white">
      <h1>Atom</h1>
      <div>
        <span>{date}</span>
      </div>
      <div className="tw-mt-4">
        <button className="tw-btn tw-btn-sm tw-ml-4" onClick={onUpdate}>
          Assign Date
        </button>
      </div>
    </div>
  )
}

export default Atom
