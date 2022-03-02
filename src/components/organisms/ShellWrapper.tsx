interface Props {
  children?: React.ReactNode
}

const ShellWrapper = ({ children }: Props): JSX.Element => {
  return (
    <div>
      <div className="tw-navbar tw-bg-neutral tw-text-neutral-content">
        <div className="tw-navbar-start tw-mx-2 tw-px-2">
          <span className="tw-text-lg tw-font-bold"> STORE </span>
        </div>
      </div>

      {children}
    </div>
  )
}

export default ShellWrapper
