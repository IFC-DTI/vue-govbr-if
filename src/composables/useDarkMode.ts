import { ref, onMounted, watch } from 'vue'

/**
 * Composable para gerenciar Dark Mode
 * Detecta preferência do SO, respeita localStorage e permite toggle manual
 * Compatível com Gov.br Design System
 */
export function useDarkMode() {
  const isDarkMode = ref(false)
  const isSystemPreference = ref(true)

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  /**
   * Aplica o tema ao documento
   */
  const applyTheme = () => {
    const theme = isDarkMode.value ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', theme)
    document.documentElement.style.colorScheme = theme
    localStorage.setItem('theme', theme)
    localStorage.setItem('theme-manual', isSystemPreference.value ? 'false' : 'true')
  }

  /**
   * Alterna entre os temas
   */
  const toggle = () => {
    isDarkMode.value = !isDarkMode.value
    isSystemPreference.value = false
    applyTheme()
  }

  /**
   * Define o tema manualmente
   */
  const setTheme = (theme: 'light' | 'dark') => {
    isDarkMode.value = theme === 'dark'
    isSystemPreference.value = false
    applyTheme()
  }

  /**
   * Usa a preferência do sistema operacional
   */
  const useSystemPreference = () => {
    isSystemPreference.value = true
    isDarkMode.value = mediaQuery.matches
    localStorage.removeItem('theme')
    localStorage.removeItem('theme-manual')
    applyTheme()
  }

  /**
   * Inicializa o tema na montagem do componente
   */
  onMounted(() => {
    // 1. Verificar se o usuário já escolheu um tema manualmente
    const saved = localStorage.getItem('theme')
    if (saved) {
      isDarkMode.value = saved === 'dark'
      isSystemPreference.value = false
    } else {
      // 2. Usar preferência do sistema
      isDarkMode.value = mediaQuery.matches
      isSystemPreference.value = true
    }

    applyTheme()

    // 3. Observar mudanças na preferência do sistema
    // (apenas se o usuário não escolheu manualmente)
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (isSystemPreference.value) {
        isDarkMode.value = e.matches
        applyTheme()
      }
    }

    mediaQuery.addEventListener('change', handleSystemThemeChange)

    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange)
    }
  })

  /**
   * Watch para detectar mudanças manuais no isDarkMode
   */
  watch(isDarkMode, () => {
    applyTheme()
  })

  return {
    isDarkMode,
    isSystemPreference,
    toggle,
    setTheme,
    useSystemPreference,
  }
}
