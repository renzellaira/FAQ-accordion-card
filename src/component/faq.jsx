import React from "react";
import './faq.css'
import graphic from "../assets/illustration-woman-online-desktop.svg";
import box from "../assets/illustration-box-desktop.svg";
import Accordion from "./accordion";

const faq = [
    {
        question: "How many team members can I invite?",
        answer: "You can invite up to 2 additional users on the Free plan.There is no limit on team members for the Premium plan"
    },
    {
        question: "What is the maximum file upload size?",
        answer: "No more than 2GB. All files in your account must fit your allotted storage space."
    },
    {
        question: "How do I reset my password?",
        answer: "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you. "
    },
    {
        question: "Can I cancel my subscription?",
        answer: "Yes! Send us a message and we’ll process your request no questions asked."
    },
    {
        question: "Do you provide additional support?",
        answer: "Chat and email support is available 24/7. Phone lines are open during normal business hours."
    },

]
const FaqCard = () => {

    return (
        <div className="cardContainer">
            <div className="left split">
                <div className="bg-holder">
                    <div className="graphicHolder"><img className="graphic" src={graphic} /></div>
                    <img className="box" src={box} />
                </div>
            </div>
            <div className="right split">
                <div className="faqHolder">
                    <div className="title">FAQ</div>
                    <Accordion faqs={faq} />
                </div>
            </div>
        </div>
    )
}
export default FaqCard;