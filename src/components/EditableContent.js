// FYI: This is overkill. If you feel intimidated by the string down below, just skip this part. 

import React, { useState } from 'react';

export const EditableContent = () => {
    const [newContent, setNewContent] = useState('')
    const [visible, setVisible] = useState(false)

    const handleEdit = (e) => {
        e.currentTarget.parentNode.firstChild.innerText = newContent;
        setVisible(!visible)
        console.log(e)
        // Add a dispatch action to change state object to match new value
    }

    return (
        <div id="editable" style={{width: '500px', margin: '50px auto'}}>
            <span id="taskId">Task</span>
            <button style={{ margin: '10px'}} onClick={() => setVisible(!visible)}>Edit</button>
            {visible && <input type="text" onChange={(e) => setNewContent(e.target.value)} />}
            {visible && <button style={{ margin: '10px'}} onClick={(e) => handleEdit(e)}>Set</button>}
        </div>
      )
}