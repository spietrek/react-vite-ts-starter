import { Link } from 'react-router-dom'

interface PersonType {
  firstName: string
  lastName: string
}

const TuplesPage = (): JSX.Element => {
  const names: PersonType[] = [
    { firstName: 'John', lastName: 'Johnson' },
    { firstName: 'Jane', lastName: 'Smith' },
    { firstName: 'Jack', lastName: 'Edwards' },
    { firstName: 'Jill', lastName: 'Berry' },
    { firstName: 'Joe', lastName: 'Johnson' },
    { firstName: 'Jenny', lastName: 'Stephenson' },
    { firstName: 'Jax', lastName: 'Angry' },
    { firstName: 'Steve', lastName: 'Pietrek' },
  ]

  const getFullNameByFirstName = (person: PersonType): string => {
    return `${person.firstName} ${person.lastName}`
  }

  const getFullNameByLastName = (person: PersonType): string => {
    return `${person.lastName}, ${person.firstName}`
  }

  const sortUsingSchwartz = (
    persons: PersonType[],
    func: (person: PersonType) => string,
  ): PersonType[] => {
    const tuples: Array<[PersonType, string]> = persons.map(
      (person: PersonType) => [person, func(person)],
    )
    tuples.sort((first, second) => first[1].localeCompare(second[1]))
    const result = tuples.map(tuple => tuple[0])
    return result
  }

  const handleSortFirstName = (): void => {
    const sortedNames = sortUsingSchwartz(names, getFullNameByFirstName)
    console.log(sortedNames)
  }

  const handleSortLastName = (): void => {
    const sortedNames = sortUsingSchwartz(names, getFullNameByLastName)
    console.log(sortedNames)
  }

  return (
    <section className="tw-container tw-mx-auto">
      <div className="tw-flex tw-min-h-screen tw-items-center tw-justify-center">
        <div className="tw-w-[900px] tw-rounded-md tw-bg-slate-300 tw-py-16 tw-px-4 tw-text-center tw-shadow-3xl">
          <Link className="tw-btn tw-btn-sm tw-mb-4" to="/">
            Home
          </Link>

          <h1>Tuples</h1>

          <button
            className="tw-btn tw-btn-sm tw-mt-4"
            onClick={handleSortFirstName}
          >
            Sort First Names
          </button>
          <button
            className="tw-btn tw-btn-sm tw-ml-4"
            onClick={handleSortLastName}
          >
            Sort First Names
          </button>
        </div>
      </div>
    </section>
  )
}

export default TuplesPage
