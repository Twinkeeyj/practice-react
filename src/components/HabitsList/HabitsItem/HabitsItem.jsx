import React from "react"
import ProTypes from "prop-types"

const HabitItem=({title, progress})=>(
  <li>
    <h3>{title}</h3>
<div>{progress}</div>
  </li>
)
HabitItem.propTypes={

}
HabitItem.defaultProps={

}
export default HabitItem