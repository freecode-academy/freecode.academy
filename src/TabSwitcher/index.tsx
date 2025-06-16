import React, { useMemo } from 'react'
import { TabButtonStyled, TabSwitcherStyled } from './styles'
import { MainLayoutTabs } from './interfaces'
import { useAppTabSwitcher } from './hooks/useAppTabSwitcher'

interface TabSwitcherProps {
  hasNewMessages?: boolean // Флаг наличия новых сообщений
}

/**
 * Компонент для переключения между чатом и сайтом на мобильных устройствах
 */
const TabSwitcher: React.FC<TabSwitcherProps> = ({
  // TODO Надо будет доработать. Стили есть, надо только пробростиь флаг
  hasNewMessages: _hasNewMessages = false,
  ...other
}) => {
  const {
    handleTabChange,
    activeTab,
    // swipeHandlers,
  } = useAppTabSwitcher()

  const onClickTab = React.useCallback<
    React.MouseEventHandler<HTMLButtonElement>
  >(
    (event) => {
      const value = event.currentTarget.value

      if (value in MainLayoutTabs) {
        handleTabChange(value as keyof typeof MainLayoutTabs)
      }
    },
    [handleTabChange]
  )

  // const handleSiteTabClick = React.useCallback(() => {
  //   handleTabChange('site')
  // }, [handleTabChange])

  // const handleChatTabClick = React.useCallback(() => {
  //   handleTabChange('chat')
  // }, [handleTabChange])

  const tabs = useMemo(() => {
    return Object.keys(MainLayoutTabs).map((n) => {
      const key = n as keyof typeof MainLayoutTabs

      return (
        <TabButtonStyled
          key={key}
          value={key}
          $active={activeTab === key}
          // $hasNewMessages={activeTab !== 'chat' && hasNewMessages}
          onClick={onClickTab}
        >
          {MainLayoutTabs[key].title}
        </TabButtonStyled>
      )
    })
  }, [activeTab, onClickTab])

  return (
    <TabSwitcherStyled
      // {...swipeHandlers}
      {...other}
    >
      {tabs}
      {/* <TabButtonStyled
        $active={activeTab === 'chat'}
        $hasNewMessages={activeTab !== 'chat' && hasNewMessages}
        onClick={handleChatTabClick}
      >
        {MainLayoutTabs.chat.title}
      </TabButtonStyled>
      <TabButtonStyled
        $active={activeTab === 'site'}
        onClick={handleSiteTabClick}
      >
        {MainLayoutTabs.site.title}
      </TabButtonStyled>
      <TabButtonStyled
        $active={activeTab === 'map'}
        onClick={handleSiteTabClick}
      >
        {MainLayoutTabs.map.title}
      </TabButtonStyled> */}
    </TabSwitcherStyled>
  )
}

export default TabSwitcher
