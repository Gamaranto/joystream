import React, { useCallback, useState } from 'react'
import { TabsGroup, Tab, Container } from './Tabs.style'

type TabsProps = {
  onChange?: (tab: string) => void
}

const Tabs: React.FC<TabsProps> = ({ children, onChange }) => {
  const [activeTab, setActiveTab] = useState(0)

  const onTabChange = useCallback(
    (tab) => {
      if (onChange) {
        onChange(tab)
      }
      setActiveTab(tab)
    },
    [onChange]
  )

  return (
    <Container>
      <TabsGroup>
        {React.Children.map(children, (tab, idx) => {
          if (!React.isValidElement(tab)) {
            return null
          }
          return (
            <Tab key={`tab-${idx}`} active={idx === activeTab} onClick={() => onTabChange(idx)}>
              {tab.props.label}
            </Tab>
          )
        })}
      </TabsGroup>
      <div>{React.Children.map(children, (tab, idx) => (idx === activeTab ? tab : null))}</div>
    </Container>
  )
}

export default Tabs
