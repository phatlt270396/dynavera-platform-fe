export const useStaticDatacenterApi = () => {
  const { get, post, put, delete: del } = useApiClient()

  // Price endpoints
  const listPrices = async (params = {}) => get('/admin/static-datacenter/prices', params)
  const upsertPrice = async (payload) => payload?.id ? put(`/admin/static-datacenter/prices/${payload.id}`, payload) : post('/admin/static-datacenter/prices', payload)
  const deletePrice = async (id) => del(`/admin/static-datacenter/prices/${id}`)

  // Discount endpoints
  const listDiscounts = async (params = {}) => get('/admin/static-datacenter/discounts', params)
  const upsertDiscount = async (payload) => payload?.id ? put(`/admin/static-datacenter/discounts/${payload.id}`, payload) : post('/admin/static-datacenter/discounts', payload)
  const deleteDiscount = async (id) => del(`/admin/static-datacenter/discounts/${id}`)

  return {
    listPrices,
    upsertPrice,
    deletePrice,
    listDiscounts,
    upsertDiscount,
    deleteDiscount,
  }
}


