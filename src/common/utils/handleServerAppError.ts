import { setAppErrorAC, setAppStatusAC } from "app/app-reducer"
import { AppDispatch } from "app/store"
import { BaseResponse } from "common/types"

export const handleServerAppError = <T>(data: BaseResponse<T>, dispatch: AppDispatch) => {
  data.messages.length
    ? dispatch(setAppErrorAC(data.messages[0]))
    : dispatch(setAppErrorAC("Some error occured"))
  dispatch(setAppStatusAC("failed"))
}
