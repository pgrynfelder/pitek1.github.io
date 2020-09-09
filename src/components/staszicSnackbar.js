import React from "react"

import Snackbar from "@material-ui/core/Snackbar"
import IconButton from "@material-ui/core/IconButton"
import CloseIcon from "@material-ui/icons/Close"

export default function StaszicSnackbar() {
  const ref = new URLSearchParams(window.location.search).get("ref") ?? ""
  const staszicAlert =
    ref.match(
      /^(http:\/\/|http:\\|)pitek\.(w|home)\.staszic\.waw\.pl(|\/(.*))$/g
    ) !== null

  const [open, setOpen] = React.useState(staszicAlert)

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }

    setOpen(false)
  }

  return (
    <div>
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
    </div>
  )
}
