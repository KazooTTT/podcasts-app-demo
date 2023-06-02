import { MoreVertical } from "./moreVertical"
import { Share } from "./share"

export function MainNavRight() {
  return (
    <div className={"right-buttons flex items-center justify-end space-x-1"}>
      <Share></Share>
      <MoreVertical></MoreVertical>
    </div>
  )
}
