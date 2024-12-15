// single selection
// multiple selection

import React, { useState } from 'react'
import data from './data';



export default function Accordian() {

    const [selected, setSelected] = useState(null)

    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }
    console.log(selected);
    return <div className='wrapper'>
        <div className='accordian'>
            
            {/* the data && data.length is a conditional statement which is conbined by the &&. data = ensures that the data is truthy and data.length>0 ensures that the array is not empty;
            if not empty the ?(ternary) is used to handle both scenariious based on whether the data is valid and contains elements */}
            {/*  data.map - if the above is truthy then then the .map method iterates over the items in data and renders them dynamically */}
            {
                
                data && data.length > 0 ?
                
                    data.map(dataItem => <div className='item'>
                        <div onClick={() => handleSingleSelection(dataItem.id)} className='title'>
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {/* selected is State which is a built-in object that allows components to store and manage data that change over time 
                        When the event handler  onClick={() => handleSingleSelection(dataItem.id) is clicked the State(selected) evaluates that the dataItem.id element exists and then it renders the JSX {dataItem.answer}*/}
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
