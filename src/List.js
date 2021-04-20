import React from 'react'

{/* destructuring*/}
const List = ({people, setPeople, data, deleteOne}) => {
    return (
        <>
            
        {/* always use a KEY when you map! */}

        {people.map((person) => {

            {/* destructuring*/}
            const {id, name, age, image} = person;

            return(

                    <article className='person' key={id}>
                        <img src={image} />
                        <div>
                            <h4>{name}</h4>
                            <p>{age} years</p>
                            <button onClick={()=>deleteOne(id)}>Delete me!</button>
                        </div>
                        
                    </article>

        )
        })}

            {/* INLINE Function: ()=> put before setPeople -- then the F does not run automatically, but waits for the Click! */}
            {/* setPeople = it is a new state, changes the data to an empty array */}
            <button onClick={()=>setPeople([])}>Clear all!</button>
            <button onClick={()=>setPeople(data)}>Show again</button>
        </>
    )
}

export default List
