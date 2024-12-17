// single selection
// multiple selection

import React, { useState } from 'react'
import data from './data';
import './styles.css'

export default function Accordian() {

    const [selected, setSelected] = useState(null)
    // Multiple items can be selected
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)
    // When multiple items are selected this is where they are stored
    const [multiple, setMultiple] = useState([])

    function handleSingleSelection(getCurrentId) {
        //toggles the selected  item, if an item is already selected then the item is deselected(nuill)
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    function handleMultiSelection(getCurrentId) {

    }

    console.log(selected);
    return <div className='wrapper'>
        {/* when button clicked the enableMultiSelecction becomes True */}
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
        <div className='accordian'>

            {/* the data && data.length is a conditional statement which is conbined by the &&. data = ensures that the data is truthy and data.length>0 ensures that the array is not empty;
            if not empty the ?(ternary) is used to handle both scenariious based on whether the data is valid and contains elements */}
            {/*  data.map - if the above is truthy then then the .map method iterates over the items in data and renders them dynamically */}
            {

                data && data.length > 0 ?

                    data.map(dataItem => <div className='item'>
                    {/* added the ternary operator to switch between the 2 functions
                    if enableMultiSelection is True then handleMultiSelection(dataItem.id) is called and if False handleSingleSelection(dataItem.id) is called */}
                        <div onClick={
                            enableMultiSelection
                            ? () => handleMultiSelection(dataItem.id)
                            : () => handleSingleSelection(dataItem.id)
                            } 
                            className='title'
                            >
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {/* selected is State which is a built-in object that allows components to store and manage data that change over time 
                        When the event handler  onClick={() => handleSingleSelection(dataItem.id)} is clicked the State(selected) evaluates that the dataItem.id element exists and then it renders the JSX {dataItem.answer}*/}
                        {
                            selected === dataItem.id ?
                                <div className='content'>{dataItem.answer}</div>
                                : null
                        }
                    </div>
                    )
                    : <div>No data found!</div>
            }
        </div>
    </div>;
}
