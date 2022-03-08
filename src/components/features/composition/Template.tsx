interface TemplateProps {
  children: React.ReactNode
}

const Template = ({ children }: TemplateProps): JSX.Element => {
  return (
    <div className="tw-bg-slate-100 tw-p-4">
      <h1>Template</h1>
      {children}
    </div>
  )
}

export default Template
