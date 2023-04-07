import React, { useState } from "react"

const Checkbox = (props) =>{
    const {check, clickCheck} = props
    const {id, job, isActive} = check

    const [active, setActive] = useState(isActive)

    const clickActive = () =>{
        clickCheck(id, active)
        setActive(!active)
    }

    return(
        <li>
            <div>
                <input type="checkbox" checked={isActive} id={id} onChange={clickActive} value={id}/>
                <label htmlFor={id}>{job}</label>
            </div>
        </li>
    )
}

export default Checkbox