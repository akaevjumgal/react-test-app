import { useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import Tab, { withBorders } from './Tab/Tab'
import './Tabs.css'

export default function Tabs({ options = [] }) {
    const [activeTab, setActiveTab] = useState({ label: 'Tab 1', value: '1' });
    const setTab = (tab) => () => {
        setActiveTab((prevValue) => {
            console.log(prevValue)
            return tab
        })
    }

    const StyledTab = withBorders(Tab)

    return (
        <div className="tabs">
            {options.map((option) => (
                <Fragment key={option.label}>
                    <Tab
                        active={activeTab.value === option.value} 
                        onClick={setTab(option)}
                    >
                        {option.label}
                    </Tab>
                    <StyledTab
                        key={option.label}
                        active={activeTab.value === option.value} 
                        onClick={setTab(option)}
                    >
                        {option.label}
                    </StyledTab>
                </Fragment>
            ))}
        </div>
    )
}