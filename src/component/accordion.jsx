import React, { useState } from 'react';
import arrowUp from "../assets/icon-arrow-down.svg";
import "./accordion.css";

const Accordion = ({faqs}) =>{
    const [activeIndex, setActiveIndex] = useState(-1);
    const handleClick = (index) => {
        console.log(index)
        console.log(activeIndex)
       setActiveIndex(index === activeIndex ? -1 : index);
    };
return (
   <div className='accordionBox'>
    {faqs.map((faq, index) => (
        <div key={faq.question} className="container">
           <button className={activeIndex === index ? 'accordion questionBold' : "accordion question"} onClick={() =>handleClick(index)}>{faq.question}<img className={index===activeIndex && "arrowUp"} src={arrowUp}/>
           </button>
           {index === activeIndex && <div className="accordion answer">{faq.answer}</div>}
        </div>
     ))}
     </div>
)
}

export default Accordion;