import React from 'react';
import PropTypes from 'prop-types';

import CloseIcon from '../data/assets/close-24px.svg';


const Skills = () => {

    const [skillList, setSkillList]= React.useState(['ReactJs']);

    const addNewSkill=(newSkill)=>{
        setSkillList([...skillList, newSkill])
    }

    return ( 
      <>
        <div style={{display:'flex', flexDirection:'column', width:'60vw', height:'80vh', margin:'auto', padding:'5rem'}}>
          <div style={{alignSelf:'center', width:'50vw'}}>
            <span style={{color:'#05386B', fontSize:'1.3rem', fontWeight:'bold'}}>Skills you want to engage in</span>
          </div>
          <div style={{display:'flex', flexWrap:'wrap', height:'50vh', overflow:'scroll', width:'50vw', margin:'1rem', backgroundColor:'#6DDB95', padding:'1rem', border:'solid #05386B 1px', alignSelf:'center'}}>
            {skillList.map((skill)=><Skill skillName={skill} />)}
            <div role="presentation" style={{display:'none'}} onClick={addNewSkill} />
          </div>
          <div style={{width:'6rem', height:'3rem', backgroundColor:'#05386B', color:'white', borderRadius:'8px', padding:'1rem 4rem', alignSelf:'flex-end'}}>
            <span style={{textAlign:'start'}}>Next</span>
          </div>
        </div>
      </>
     );
}

const Skill = (props) =>{
    const { skillName } = props;
    return(
      <>
        <div style={{display:'flex', width:'fit-content', height:'fit-content', minHeight:'2rem', minWidth:'4rem', margin:'1rem', border:'solid white 1px', borderRadius:'0.5rem', backgroundColor:'white'}}>
          <span style={{margin:'1rem', alignSelf:'center'}}>{skillName}</span>
          <img style={{height:'1rem', margin:'1rem', alignSelf:'center'}} src={CloseIcon} alt="Remove" />
        </div>
      </>
    )
}

Skill.propTypes={
    skillName:PropTypes.string.isRequired
}

export default Skills;