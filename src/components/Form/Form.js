import React, {useState} from 'react';

export default function From({heading}) {
    
    return (
        <>
            <div className="container my-8">
                <h1 className='text-3xl'>{heading}</h1>
                <form>
                    <div class="form-group">
                        <textarea class="form-control" id="mytext" rows="9"></textarea>
                    </div>
                    <button className="btn_primary uppercase">Convert To uppercase</button>
                    <button className="btn_primary lowercase">Convert To lowercase</button>
                </form>
            </div>
            
        </>
    )
}