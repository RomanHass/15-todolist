import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar"
import Alert from "@mui/material/Alert"
import { SyntheticEvent } from "react"
import { selectAppError } from "app/appSelectors"
import { useAppDispatch, useAppSelector } from "common/hooks"
import { setAppErrorAC } from "app/app-reducer"

export const ErrorSnackBar = () => {
  const error = useAppSelector(selectAppError)

  const dispatch = useAppDispatch()

  const handleClose = (_?: SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
    if (reason === "clickaway") {
      return
    }

    dispatch(setAppErrorAC(null))
  }

  return (
    <div>
      <Snackbar open={error !== null} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" variant="filled" sx={{ width: "100%" }}>
          {error}
        </Alert>
      </Snackbar>
    </div>
  )
}
