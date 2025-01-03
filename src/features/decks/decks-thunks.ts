import { Dispatch } from 'redux'
import { decksAPI, UpdateDeckParams } from './decks-api.ts'
import { addDeckAC, deleteDeckAC, setDecksAC, updateDeckAC } from './decks-reducer.ts'
import { setAppStatus } from '../../app/app-reducer.ts'
import { handleAppError } from '../../common/utils/handle-error.ts'

export const fetchDecksTC = () => async (dispatch: Dispatch) => {
  dispatch(setAppStatus({ status: 'loading' }))
  try {
    const res = await decksAPI.fetchDecks()
    dispatch(setDecksAC(res.data.items))
    dispatch(setAppStatus({ status: 'succeeded' }))
  } catch (err) {
    dispatch(setAppStatus({ status: 'failed' }))
  }
}

export const addDeckTC = (name: string) => async (dispatch: Dispatch) => {
  return decksAPI.addDeck(name).then((res) => {
    dispatch(addDeckAC(res.data))
  })
}

export const deleteDeckTC = (id: string) => async (dispatch: Dispatch) => {
  return decksAPI.deleteDeck(id).then((res) => {
    dispatch(deleteDeckAC(res.data.id))
  })
}

export const updateDeckTC = (params: UpdateDeckParams) => async (dispatch: Dispatch) => {
  dispatch(setAppStatus({ status: 'loading' }))
  try {
    const res = await decksAPI.updateDeck(params)
    dispatch(updateDeckAC(res.data))
    dispatch(setAppStatus({ status: 'succeeded' }))
  } catch (err) {
    handleAppError(err, dispatch)
  }
}
