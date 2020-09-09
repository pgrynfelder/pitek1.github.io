import React from "react"

import Snackbar from "@material-ui/core/Snackbar"
import IconButton from "@material-ui/core/IconButton"
import CloseIcon from "@material-ui/icons/Close"
import { Button } from "@material-ui/core"

export default function StaszicSnackbar() {
  const [open, setOpen] = React.useState(false)

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }

    setOpen(false)
  }

  const handleClick = () => {
    setOpen(true)
  }

  return (
    <>
      <Button
        id="open-staszic"
        onClick={handleClick}
        style={{ display: "none" }}
      ></Button>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={open}
        onClose={handleClose}
        message="You seem to have been redirected from my staszic website. Don't worry, it's supposed to be like that."
        action={
          <>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
    </>
  )
}
