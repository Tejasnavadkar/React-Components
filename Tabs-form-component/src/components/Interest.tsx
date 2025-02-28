import React, { useState } from 'react';

const Interest = () => {
    const [interests, setInterests] = useState({
        coding: false,
        singing: false,
        dancing: false,
    });


    console.log(interests)

    const handleChange = (event) => {
        const { name, checked } = event.target;
        setInterests({
            ...interests,
            [name]: checked,
        });
    };

    return (
        <div>
            <h3>Select your interests:</h3>
            <label>
                <input
                    type="checkbox"
                    name="coding"
                    checked={interests.coding}
                    onChange={handleChange}
                />
                Coding
            </label>
            <br />
            <label>
                <input
                    type="checkbox"
                    name="singing"
                    checked={interests.singing}
                    onChange={handleChange}
                />
                Singing
            </label>
            <br />
            <label>
                <input
                    type="checkbox"
                    name="dancing"
                    checked={interests.dancing}
                    onChange={handleChange}
                />
                Dancing
            </label>
        </div>
    );
};

export default Interest;


// diff approach when we add it in array

// const Interest = ['coding','dancing']

// const handleChange = (e) =>{

//     setInterse({
//         ...Interest,  // here we push and remove
//         ...Interest.inter:e.target.checked ? [...Interest.inter,e.target.name] : Interest.inter.filter((x)=>x !== e.target.name)
//     })

// }


// <div>
//     <input type="checkbox" name="coding" checked={Interest.includes("coding")} onchange={(e)=>handleChange} /> agar array me hai to select
//     Coding
// </div>