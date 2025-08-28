export const useApiClient = () => {
  const config = useRuntimeConfig()
  const baseUrl = config?.public?.apiBaseUrl || ''

  const request = async (path, options = {}) => {
    const url = `${baseUrl}${path}`
    return await $fetch(url, {
      headers: { 'Content-Type': 'application/json' },
      ...options,
    })
  }

  return {
    get: (path, params) => request(path, { method: 'GET', params }),
    post: (path, body) => request(path, { method: 'POST', body }),
    put: (path, body) => request(path, { method: 'PUT', body }),
    delete: (path) => request(path, { method: 'DELETE' }),
  }
}
