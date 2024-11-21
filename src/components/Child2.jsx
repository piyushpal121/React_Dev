import React from 'react'

function Child2() {
    const user = {
        name:"Piyush",
        Id:123,
        hobbies:["reading", "travelling"],
        isMember:true,
    };

    return (
        <div id='container'>
            <h2>(user.name)'s Prrofile Web</h2>
            <h2>Id: (user.id)</h2>
            <p>Hobbies: {user.hobbies.join(", ")}</p>
            <p>(user.isMember ? "Member":"Not a Member")</p>
        </div>
    )

}
    export default Child2

