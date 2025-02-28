


interface propsType {
    firstName: string,
    setFirstname: (value: string) => void
}


const Firstname = ({ firstName, setFirstname }: propsType) => {

    // const handleChange = (e, item) => {  // reusable
    //     setFirstname(prve => ({
    //             ...prve,
    //             [item]:e.target.value
    //     }))
    // }

    return <>

        <div>
            <label htmlFor="">Firstname</label>
            <input
                type="text"
                placeholder="FirstName"
                value={firstName}
                onChange={(e) => setFirstname(e.target.value)}
            // onChange={(e) => handleChange(e,"firstna,e")}  scalable approch
            />
        </div>

    </>
}

export default Firstname