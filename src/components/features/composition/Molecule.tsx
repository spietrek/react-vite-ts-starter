interface MoleculeProps {
  children: React.ReactNode
}

const Molecule = ({ children }: MoleculeProps): JSX.Element => {
  return (
    <div className="tw-bg-slate-500 tw-p-4">
      <h1>Molecule</h1>
      {children}
    </div>
  )
}

export default Molecule
