import { Link } from 'react-router-dom'

enum Operator {
  Add = 'add',
  Subtract = 'subtract',
  Multiply = 'multiply',
  Divide = 'divide',
}

type Operation = (x: number, y: number) => number

const CalculatorPage = (): JSX.Element => {
  const operations: Array<[Operator, Operation]> = []

  const add = (first: number, second: number): number => {
    return first + second
  }

  const subtract = (first: number, second: number): number => {
    return first - second
  }

  const multiple = (first: number, second: number): number => {
    return first * second
  }

  const divide = (first: number, second: number): number => {
    return first / second
  }

  operations.push([Operator.Add, add])
  operations.push([Operator.Subtract, subtract])
  operations.push([Operator.Multiply, multiple])
  operations.push([Operator.Divide, divide])

  const calculator = (first: number, second: number, op: Operator): number => {
    const tuple = operations.find(tuple => tuple[0] === op)
    if (tuple !== undefined) {
      const operation = tuple[1]
      const result = operation(first, second)
      return result
    }
    return NaN
  }

  const handleCalculator = (): void => {
    console.log(calculator(4, 6, Operator.Add))
    console.log(calculator(16, 6, Operator.Subtract))
    console.log(calculator(5, 2, Operator.Multiply))
    console.log(calculator(120, 12, Operator.Divide))
  }

  return (
    <section className="tw-container tw-mx-auto">
      <div className="tw-flex tw-min-h-screen tw-items-center tw-justify-center">
        <div className="tw-w-[900px] tw-rounded-md tw-bg-slate-300 tw-py-16 tw-px-4 tw-text-center tw-shadow-3xl">
          <Link className="tw-btn tw-btn-sm tw-mb-4" to="/">
            Home
          </Link>

          <h1>Calculator</h1>

          <button
            className="tw-btn tw-btn-sm tw-mt-4"
            onClick={handleCalculator}
          >
            Run Calculations
          </button>
        </div>
      </div>
    </section>
  )
}

export default CalculatorPage
