interface Props {
  pathD: string
  title: string
  count: string
  desc: string
}

const Stat = ({ pathD, title, count, desc }: Props): JSX.Element => {
  return (
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
            d={pathD}
          />
        </svg>
      </div>
      <div className="tw-stat-title">{title}</div>
      <div className="tw-stat-value">{count}</div>
      <div className="tw-stat-desc">{desc}</div>
    </div>
  )
}

export default Stat
