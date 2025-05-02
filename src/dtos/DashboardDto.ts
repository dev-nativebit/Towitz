export interface DashboardDto {
  start_year: string
  end_year: string
  storeData: StoreDto
  chartData: ChartDto
}

export interface StoreDto {
  month_trans_count: string
  today_trans_count: string
  month_inward: string
  today_inward: string
  month_outward: string
  today_outward: string
  month_use_stock: string
  today_use_stock: string
  currentStock: number
  totalProduct: number
}

export interface ChartDto {
  today_cons: string
  today_return: string
  day_m_1_cons: string
  day_m_1_return: string
  day_m_2_cons: string
  day_m_2_return: string
  day_m_3_cons: string
  day_m_3_return: string
  day_m_4_cons: string
  day_m_4_return: string
  day_m_5_cons: string
  day_m_5_return: string
  day_m_6_cons: string
  day_m_6_return: string
}
