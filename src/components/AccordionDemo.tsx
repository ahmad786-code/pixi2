'use client'

import React, { useState } from "react";
import { Plus, Minus, Snowflake, Sparkle, Triangle, Flower, Flower2, Fan } from "lucide-react";

export function AccordionDemo() {
    const [openAccordion, setOpenAccordion] = useState(0); // Track the open accordion

    const toggleAccordion = (accordionNumber: any) => {
        if (openAccordion === accordionNumber) {
            setOpenAccordion(0); // Close the current accordion if it's already open
        } else {
            setOpenAccordion(accordionNumber); // Open the selected accordion and close others
        }
    };

    return (
        <div className="w-[90%]">
            <div>
                {/* Accordion Item 1 */}
                <div className="border-b">
                    <button
                        className="flex justify-between  items-center w-full p-4 focus:outline-none"
                        onClick={() => toggleAccordion(1)}
                    >
                        <div className="flex items-center justify-center gap-3">
                            <span className="text-white text-3xl text-nowrap">01</span>
                            <Flower className="text-white" /> 
                            <span className="text-2xl font-medium text-white pb-2 w-full">Onlyfans Account Management</span>
                        </div>
                        {openAccordion === 1 ? <Minus className="text-white" /> : <Plus className="text-white" />}
                    </button>
                    <div className={`transition-height duration-500 ease-in-out overflow-hidden ${openAccordion === 1 ? 'h-auto' : 'h-0'}`}>
                        <div className="ml-3">
                            <div className="pb-1 text-xl text-white">You will have an account manager who will take care of you 24/7</div>
                            <p className="pb-1 text-xl text-white">Onlyfans Chatter</p>
                            <p className="pb-1 text-xl text-white">Guides to help you with content creation</p>
                            <p className="pb-1 text-xl text-white">Fan management (refunds, recoveries,…)</p>
                            <p className=" text-white text-xl pb-1">PPV + tip sales and upsell management</p>
                            <p className=" text-white text-xl pb-1">General weekly audits and reports for social media and OnlyFans.</p>
                        </div>
                    </div>
                </div>
                {/* Accordion Item 2 */}
                <div className="border-b">
                    <button
                        className="flex justify-between items-center w-full p-4 focus:outline-none"
                        onClick={() => toggleAccordion(2)}
                    >
                        <div className="flex gap-3">
                            <span className="text-white text-3xl">02</span>
                            <Flower2 className="text-white"/>  
                            <span className="text-2xl font-medium text-white pb-2">Onlyfans Content Creation</span>
                        </div>
                        {openAccordion === 2 ? <Minus className="text-white" /> : <Plus className="text-white" />}
                    </button>
                    <div className={`transition-height duration-500 ease-in-out overflow-hidden ${openAccordion === 2 ? 'h-auto' : 'h-0'}`}>
                        <div className="ml-3">
                            <div className="pb-1 text-xl text-white">Complete audit of all your account performance, revenue, chats, and your account</div>
                            <p className="pb-1 text-xl text-white">Audits to better understand where weaknesses lie and where potential exists</p>
                            <p className="pb-1 text-xl text-white">Precise steps to turn these weaknesses into strengths and significantly increase your revenue with less time spent on them</p>
                            <p className="pb-1 text-xl text-white">+ Social media audits to get the most out of your brand</p>

                        </div>
                    </div>
                </div>
                {/* Accordion Item 3 */}
                <div className="border-b">
                    <button
                        className="flex justify-between items-center w-full p-4 focus:outline-none"
                        onClick={() => toggleAccordion(3)}
                    >
                        <div className="flex gap-3">
                            <span className="text-white text-3xl">03</span>
                            <Fan  className="text-white"/>
                            <span className="text-2xl font-medium text-white pb-2">Onlyfans Marketing</span>
                        </div>
                        {openAccordion === 3 ? <Minus className="text-white" /> : <Plus className="text-white" />}
                    </button>
                    <div className={`transition-height duration-500 ease-in-out overflow-hidden ${openAccordion === 3 ? 'h-auto' : 'h-0'}`}>
                        <div className="ml-3">
                            <div className="pb-1 text-xl text-white">Social media management for existing or new accounts (Instagram, Reddit, Twitter and many more).</div>
                            <p className="pb-1 text-xl text-white">Daily Reddit promotion (with our automations we make sure to post there 24/7).</p>
                            <p className="pb-1 text-xl text-white">We take care of your direct messages on social media</p>
                            <p className="pb-1 text-xl text-white">We organize promotions like shoutouts, GGS and much more</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
