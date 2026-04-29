import { ref } from 'vue'

const isLoading = ref(false)

const startLoading = () => {
  isLoading.value = true
}

const stopLoading = () => {
  isLoading.value = false
}

export { isLoading, startLoading, stopLoading }
