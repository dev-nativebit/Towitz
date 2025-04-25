export interface QrCodeDetailDto{
  QrDetail: QrDetailDto
  itemList: ReasonListDto[]
  reasonList: ReasonListDto[]
}

export interface QrDetailDto {
  id: string
  item_id: string
  item_name: string
  qr_value: string
  qty: string
  return_by: string
  return_at: string
}

export interface ItemListDto {
  id: string
  item_code: string
  item_name: string
}

export interface ReasonListDto {
  id: string
  reason: string
}
