import React from 'react'

export const Course2 = () => {
  return (
    <div>
      Course2
    </div>
  )
}

// function Course(props) {
    function Course({image,title,description}) {
    // const title = props.title;
    // const description= props.description;
    // const {title, description}=props;
    return ( 
<div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img
        src={image}
      />
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-content">
        <p className="title is-4">{title}</p>
      </div>
    </div>

    <div className="content">
      {description}
    </div>
  </div>
</div>

    // <div>
    //     <img src={image}/>
    //     <div>{title}</div>
    //     <div>{description}</div>
    //   </div>
       );
}

export default Course;

