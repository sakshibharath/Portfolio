import React from 'react'
import {Element} from "react-scroll"
import LinearProgress from "@material-ui/core/LinearProgress"
import "./SkillContainer.css"

const SkillContainer = () => {
  return (
    <Element className="skillContainer" id="skills">
        <div className="skillContainer__image">
            <img src="https://img.freepik.com/premium-vector/zwart-silhouet-van-een-meisje-aan-een-bureau-en-laptop-op-een-zwarte-achtergrond_923894-6887.jpg" alt="image"/>
        </div>
        <div className='skillContainer__text'>
            <h2>SKILLSET</h2>
            <div className='skillContainer__skillSet'>
                <h5>Wireframing</h5>
                <div className="skillContainer__slider skillContainer__slider1">
                    <LinearProgress variant='determinate'value={90}/>
                </div>
            </div>
            <div className='skillContainer__skillSet'>
                <h5>Prototyping</h5>
                <div className="skillContainer__slider skillContainer__slider2">
                    <LinearProgress variant='determinate'value={95}/>
                </div>
            </div>
            <div className='skillContainer__skillSet'>
                <h5>Advanced Java Programming</h5>
                <div className="skillContainer__slider skillContainer__slider3">
                    <LinearProgress variant='determinate'value={80}/>
                </div>
            </div>
            <div className='skillContainer__skillSet'>
                <h5>React</h5>
                <div className="skillContainer__slider skillContainer__slider4">
                    <LinearProgress variant='determinate'value={75}/>
                </div>
            </div>
            <div className='skillContainer__skillSet'>
                <h5>Html, CSS, JavaScrip</h5>
                <div className="skillContainer__slider skillContainer__slider5">
                    <LinearProgress variant='determinate'value={95}/>
                </div>
            </div>
        </div>
    </Element>
  )
}

export default SkillContainer
