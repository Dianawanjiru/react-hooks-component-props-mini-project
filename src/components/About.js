import React from "react";


function About ({image, about}){
    return (
        <aside>
            <img src ={image} alt = "blog logo"/>
            <p>{about}</p>

        </aside>

    );
}

export default About;
About.defaultProps = {
    image :"https://via.placeholder.com/215",
    about : "about this blog"
}