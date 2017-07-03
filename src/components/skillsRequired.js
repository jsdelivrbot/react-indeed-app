import React from 'react'



const SkillsRequired = (props) => {
  function renderIcons(item){
    return <i className={item} key={item} />
  }
  return(
    <div className="container-icons icons5">
        {props.skills.map(renderIcons)}
    </div>

  )
}



export default SkillsRequired
