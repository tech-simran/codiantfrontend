import React from 'react';

const Paggination = (props) => {
    const pageNumber = [...Array(props.nPages+1).keys()].slice(1)
    return (
        <div>
            {
                pageNumber.map((pgNumber)=>{
                    return(
                        <l1 key={pageNumber}>
                        <a onClick={()=>props.setCurrenPage(pgNumber)} href='#'>{pgNumber}</a>
                       </l1>
                    )
                   
                })
            }
        </div>
    );
}

export default Paggination;
