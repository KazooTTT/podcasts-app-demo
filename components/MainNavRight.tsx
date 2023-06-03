import { MoreVertical } from "./moreVertical"
import { ShareBottomModal } from "./share"

export function MainNavRight() {
  return (
    <div className={"right-buttons flex items-center justify-end space-x-1"}>
      <ShareBottomModal></ShareBottomModal>
      <MoreVertical></MoreVertical>
    </div>
  )
}
