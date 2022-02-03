import { useReducer } from 'react'

interface Item {
  itemType: string
  name: string
  description: string
  waitTime: string
  price: string
  imgURL: string
}

interface SelectedItemState {
  selectedItem: Item
}

interface Action {
  type: string
}

const menuItems = [
  {
    itemType: 'pizza',
    name: 'The Crabby Pizza',
    description: 'Our original Crabby Pizza made by Chef John.',
    waitTime: '30 mins',
    price: '$24',
    imgURL:
      'https://cdn.pixabay.com/photo/2018/04/07/15/03/pizza-3298685_960_720.jpg',
  },
  {
    itemType: 'burger',
    name: 'The Famous Crabby Burger',
    description: 'The burger that made history.',
    waitTime: '10 mins',
    price: '$15',
    imgURL:
      'https://cdn.pixabay.com/photo/2016/03/05/19/02/abstract-1238247_960_720.jpg',
  },
  {
    itemType: 'shrimp',
    name: "Crabby's Shrimp Platter",
    description: 'Healthy and sumptious, the king of shrimp.',
    waitTime: '15 mins',
    price: '$20',
    imgURL:
      'https://cdn.pixabay.com/photo/2012/07/27/20/48/prawns-53204_960_720.jpg',
  },
]

const menuOptions = menuItems.map(item => {
  return (
    <option key={item.name} value={item.itemType}>
      {item.name}
    </option>
  )
})

const initialState = { selectedItem: menuItems[0] }

function reducer(state: SelectedItemState, action: Action): SelectedItemState {
  const newSelection = menuItems.find(item => item.itemType === action.type)
  if (newSelection !== undefined) {
    return { selectedItem: newSelection }
  } else {
    return state
  }
}

const MenuReducer = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleOrder = (): void => {
    alert(`Ordering ${state.selectedItem.name} for ${state.selectedItem.price}`)
  }

  return (
    <>
      <div>
        <h1 className="tw-font-bold">The Crabby Fish</h1>
        <p>Please select your entree below.</p>
        <div>
          <label htmlFor="inputGroupSelect01">Entrees</label>
        </div>
        <select
          onChange={e => dispatch({ type: e.target.value })}
          className="tw-select tw-select-bordered tw-w-full tw-max-w-xs tw-mt-4"
          id="inputGroupSelect01"
        >
          {menuOptions}
        </select>
      </div>

      <button className="tw-btn tw-btn-dark tw-my-4" onClick={handleOrder}>
        Place Order
      </button>

      <div>
        <p>{state.selectedItem.name}</p>
        <p>
          <em>
            <strong>{state.selectedItem.description}</strong>
          </em>
        </p>
        <p>
          <em>Price - {state.selectedItem.price}</em>
        </p>
        <p>
          <em>Ready in {state.selectedItem.waitTime}</em>
        </p>
        <img
          src={state.selectedItem.imgURL}
          alt={state.selectedItem.name}
          className="tw-mt-4 tw-w-[350px] tw-block tw-m-auto"
        />
      </div>
    </>
  )
}

export default MenuReducer
