import { useLanguage } from 'src/hooks/i18n/useLanguage'
// Список доступных языков
const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'ms', name: 'Bahasa Melayu', flag: '🇲🇾' },
  { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
  { code: 'th', name: 'ไทย', flag: '🇹🇭' },
]
import {
  LanguagesSelectOptionFlagStyled,
  LanguagesSelectOptionLabelStyled,
  LanguagesSelectOptionStyled,
  LanguagesCheckboxStyled,
  LanguagesContainerStyled,
  LanguagesTriggerStyled,
  LanguagesContentStyled,
  ChevronIconStyled,
  LanguageListItemStyled,
} from './styles'
import { useCallback, useMemo } from 'react'
import { useRouter } from 'next/router'

export const LanguagesSelect: React.FC = () => {
  const { language } = useLanguage()
  const router = useRouter()

  // Текущий выбранный язык
  const selectedLanguage = useMemo(() => {
    const languageData = languages.find((lang) => lang.code === language)
    return languageData || languages[0]
  }, [language])

  // Все доступные языки с правильными href относительно текущего пути
  const languageItems = useMemo(() => {
    const { pathname, query, asPath } = router

    // Функция для построения правильного URL для переключения языка
    const getLanguageUrl = (locale: string) => {
      // Удаляем текущий локаль из пути, если он существует
      let path = asPath
      // Если в пути есть параметры запроса, удаляем их для создания основного пути
      if (path.includes('?')) {
        path = path.split('?')[0]
      }

      return {
        pathname,
        query,
        locale,
      }
    }

    return languages.map(({ code, flag, name }) => ({
      code,
      flag,
      name,
      href: getLanguageUrl(code),
    }))
  }, [router])

  const onClick = useCallback(() => {
    // Закрываем меню после выбора языка
    const checkbox = document.querySelector<HTMLInputElement>(
      '#language-menu-toggle'
    )
    if (checkbox) checkbox.checked = false
  }, [])

  return (
    <LanguagesContainerStyled>
      <LanguagesCheckboxStyled />

      <LanguagesTriggerStyled>
        <LanguagesSelectOptionStyled>
          <LanguagesSelectOptionFlagStyled>
            {selectedLanguage.flag}
          </LanguagesSelectOptionFlagStyled>
          <LanguagesSelectOptionLabelStyled>
            {selectedLanguage.name}
          </LanguagesSelectOptionLabelStyled>
        </LanguagesSelectOptionStyled>

        <ChevronIconStyled
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="6,9 12,15 18,9" />
        </ChevronIconStyled>
      </LanguagesTriggerStyled>

      <LanguagesContentStyled>
        {languageItems.map(({ code, flag, name, href }) => (
          <LanguageListItemStyled
            key={code}
            href={href}
            locale={code}
            onClick={onClick}
          >
            <LanguagesSelectOptionStyled>
              <LanguagesSelectOptionFlagStyled>
                {flag}
              </LanguagesSelectOptionFlagStyled>{' '}
              <LanguagesSelectOptionLabelStyled>
                {name}
              </LanguagesSelectOptionLabelStyled>
            </LanguagesSelectOptionStyled>
          </LanguageListItemStyled>
        ))}
      </LanguagesContentStyled>
    </LanguagesContainerStyled>
  )
}
