import { MoreVertical } from "./moreVertical"
import { AlertDialogDemo, Share } from "./share"

export function MainNavRight() {
  return (
    <div className={"right-buttons flex items-center justify-end space-x-1"}>
      <AlertDialogDemo></AlertDialogDemo>
      <MoreVertical></MoreVertical>
    </div>
  )
}
