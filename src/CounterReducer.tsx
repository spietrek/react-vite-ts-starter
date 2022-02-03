import { useReducer } from 'react'

interface State {
  value: number
}

const initialState: State = {
  value: 0,
}

enum ActionKind {
  Increase = 'INCREASE',
  Decrease = 'DECREASE',
  Reset = 'RESET',
}

interface Action {
  type: ActionKind
  payload: number
}

const increaseAction: Action = {
  type: ActionKind.Increase,
  payload: 1,
}

const decreaseAction: Action = {
  type: ActionKind.Decrease,
  payload: 1,
}

const resetAction: Action = {
  type: ActionKind.Reset,
  payload: 0,
}

const CounterReducer = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      Count: {state.value}
      <div className="tw-pt-4">
        <button
          className="tw-btn tw-btn-accent tw-btn-outline tw-btn-sm tw-mx-1"
          onClick={() => dispatch(increaseAction)}
        >
          Increase
        </button>
        <button
          className="tw-btn tw-btn-accent tw-btn-outline tw-btn-sm tw-mx-1"
          onClick={() => dispatch(decreaseAction)}
        >
          Decrease
        </button>
        <button
          className="tw-btn tw-btn-accent tw-btn-outline tw-btn-sm tw-mx-1"
          onClick={() => dispatch(resetAction)}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

const reducer = (state: typeof initialState, action: Action): State => {
  const { type, payload } = action

  switch (type) {
    case ActionKind.Increase:
      return { ...state, value: state.value + payload }
    case ActionKind.Decrease:
      return { ...state, value: state.value - payload }
    case ActionKind.Reset:
      return { ...state, value: payload }
    default:
      return state
  }
}

export default CounterReducer
