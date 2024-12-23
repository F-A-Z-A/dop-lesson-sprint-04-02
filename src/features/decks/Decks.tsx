import { DecksList } from './DecksList/DecksList.tsx'
import { AddNewDeckForm } from './AddNewDeckForm/AddNewDeckForm.tsx'

export const Decks = () => {
  return (
    <div>
      <h1>Decks 🐈</h1>
      <AddNewDeckForm />
      <DecksList />
      <footer>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam deserunt eligendi error exercitationem id in
        inventore libero magni nulla optio perferendis quasi similique soluta, veritatis voluptas! Ad ex fugiat omnis.
      </footer>
    </div>
  )
}
