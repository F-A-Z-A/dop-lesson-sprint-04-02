import { Dispatch } from 'redux'
import { isAxiosError } from 'axios'
import { setAppError, setAppStatus } from '../../app/app-reducer.ts'

export const handleAppError = (err: unknown, dispatch: Dispatch) => {
  let errorMessage: string
  if (isAxiosError<ServerError>(err)) {
    errorMessage = err.response ? err.response.data.errorMessages[0].message : err.message
  } else {
    errorMessage = (err as Error).message
  }
  dispatch(setAppError({ error: errorMessage }))
  dispatch(setAppStatus({ status: 'failed' }))
}

type ServerError = {
  errorMessages: { field: string; message: string }[]
}
