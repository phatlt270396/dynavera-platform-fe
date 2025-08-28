export const useStaticResidentialApi = () => {
  const { get, post, put, delete: del } = useApiClient()

  // Price
  const listPrices = async (params = {}) => get('/admin/static-residential/prices', params)
  const upsertPrice = async (payload) => payload?.id ? put(`/admin/static-residential/prices/${payload.id}`, payload) : post('/admin/static-residential/prices', payload)
  const deletePrice = async (id) => del(`/admin/static-residential/prices/${id}`)

  // Discount
  const listDiscounts = async (params = {}) => get('/admin/static-residential/discounts', params)
  const upsertDiscount = async (payload) => payload?.id ? put(`/admin/static-residential/discounts/${payload.id}`, payload) : post('/admin/static-residential/discounts', payload)
  const deleteDiscount = async (id) => del(`/admin/static-residential/discounts/${id}`)

  return {
    listPrices,
    upsertPrice,
    deletePrice,
    listDiscounts,
    upsertDiscount,
    deleteDiscount,
  }
}


