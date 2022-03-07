interface OrganismProps {
  children: React.ReactNode
  date: string
}

const Organism = ({ children, date }: OrganismProps): JSX.Element => {
  return (
    <div className="tw-bg-slate-300 tw-p-4">
      <h1>Organism</h1>
      <div>
        <span>{date}</span>
      </div>
      {children}
    </div>
  )
}

export default Organism
