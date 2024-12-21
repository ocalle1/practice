// single selection
// multiple selection

import React, { useState } from 'react'
import data from './data';
import './styles.css'

export default function Accordian() {
    //A state which tracks a single selected item. it can either store an ID or null if no item is selected 
    const [selected, setSelected] = useState(null)
    //a boolean state that toggles whether multiple selection is enabled or not. when true, user can select multiple items
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)
    //An array where multiple selected ID are stored
    const [multiple, setMultiple] = useState([])

    //Single selection mode
    function handleSingleSelection(getCurrentId) {
        //toggles the selected  item, if an item is already selected then the item is deselected(nuill)
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    //Multiple seclection mode
    function handleMultiSelection(getCurrentId) {
        //Creates a shallow copy of the multiple array(list of selected IDs), ensuring that any changes made to the cpyMultiple does NOT affect multiple array  
        let cpyMultiple = [...multiple];
        // the method  indexOf looks for the index of getCurrentId in the cpyMultiple array. 

        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId)
        console.group(findIndexOfCurrentId);
        //  The findIndexOfCurrentId holds the result of searching for getCurrentId in the cpyMultiple array.
        //findIndexOfCurrentId === -1, means the getCurrentId was not found in the array (cpyMultiple).
        // When getCurrentIf is not found, its added to the array with the push method
        if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId)
        // if the getCurrentId is already in the array, it gets removed using .splice()
        else cpyMultiple.splice(findIndexOfCurrentId, 1)
        // updates the state
        setMultiple(cpyMultiple)
    }

    console.log(selected, multiple);
    return <div className='wrapper'>
        {/* button toggles the value of enableMultiSelection(single and multiple selection mode) */}
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
        <div className='accordian'>

            {/*The data maps over the data array to dynamically render each item */}
            {/*Each dataItem has a title (dataItem.question) and, if selected, displays its correspoinding answer(dataItem.answer)  */}
            {/*  */}
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
                        {/* Ternary operator(if-else statement) 
                        if enableMultiSelection is True then the first part of the operator is executed(multiple selection mode)
                        if false then the second part is executed(single selection mode)
                        */}
                        {
                            enableMultiSelection ?
                                multiple.indexOf(dataItem.id) !== -1 &&
                                <div className='content'>{dataItem.answer}</div> :
                                selected === dataItem.id && <div className='content'>{dataItem.answer}</div>
                        }
                        
                    </div>
                    )
                    : <div>No data found!</div>
            }
        </div>
    </div>;
}
