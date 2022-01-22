import { useState } from 'react';
import Tab from './Tab/Tab'
import './Tabs.css'

export default function Tabs({ options = [] }) {
    const [activeTab, setActiveTab] = useState({ label: 'Tab 1', value: '1' });
    const setTab = (tab) => () => {
        setActiveTab((prevValue) => {
            console.log(prevValue)
            return tab
        })
    }

    return (
        <div className="tabs">
            {options.map((option, index) => (
                <Tab
                    key={option.label}
                    active={activeTab.value === option.value} 
                    onClick={setTab(option)}
                >
                    {option.label}
                </Tab>
            ))}
        </div>
    )
}