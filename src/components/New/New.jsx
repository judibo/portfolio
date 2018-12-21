import React from 'react';
import './New.css'

const New = props => {
    let page;
    if (props.oneHandleClick) {
        page = 
        <div className="New" onClick={props.oneHandleClick}>
            <p>{props.idx}</p>
            {props.selected === props.idx ? <p>Selected</p> : null}
        </div>
    } else if (props.twoHandleClick) {
        page = 
        <div className="New"  onClick={props.twoHandleClick} >
            <p>{props.idx}</p>
            {props.selected === props.idx ? <p>Selected</p> : null}
        </div>
    } else if (props.threeHandleClick) {
        page = 
        <div className="New" onClick={props.threeHandleClick}>
            <p>{props.idx}</p>
            {props.selected === props.idx ? <p>Selected</p> : null}
        </div>
    }

    return (
        <div>
            {page}
        </div>
    );
}

export default New;