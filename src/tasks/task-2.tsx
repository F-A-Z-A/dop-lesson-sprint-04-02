type MyComponentProps<T> = {
  items: T[]
  defaultItem: T
}

const MyComponent = <T,>(props: MyComponentProps<T>) => {
  console.log(props)
  return <p>some content</p>
}

const App = () => {
  const users: User[] = [
    { name: 'Bilbo', age: 111 },
    { name: 'Frodo', age: 33 },
  ]

  return (
    <>
      <MyComponent items={['react', 'typescript']} defaultItem={'only string'} />
      <MyComponent items={users} defaultItem={{ name: 'AAA', age: 11 }} />
    </>
  )
}

type User = {
  name: string
  age: number
}
