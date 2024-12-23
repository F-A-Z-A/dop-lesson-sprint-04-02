const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as ErrorType,
}

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
  switch (action.type) {
    case 'APP/SET_STATUS':
      return { ...state, status: action.payload.status }
    case 'APP/SET_ERROR':
      return { ...state, error: action.payload.error }
    default:
      return state
  }
}

// actions
export const setAppStatus = (payload: { status: RequestStatusType }) => {
  return { type: 'APP/SET_STATUS', payload } as const
}

export const setAppError = (payload: { error: ErrorType }) => {
  return { type: 'APP/SET_ERROR', payload } as const
}

// types
type AppStateType = typeof initialState
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type ErrorType = string | null

type ActionsType = ReturnType<typeof setAppStatus> | ReturnType<typeof setAppError>
