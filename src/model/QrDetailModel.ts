import {Model} from '@/model/core';
import {QrDetailDto} from '@/dtos';

export class QrDetailModel extends Model<QrDetailDto>{
  constructor(dto:QrDetailDto) {
    super(dto);
  }

  get id(): string{
    return this.dto?.id ?? ''
  }
  get item_id(): string{
    return this.dto?.item_id ?? ''
  }
  get item_name(): string{
    return this.dto?.item_name ?? ''
  }
  get qr_value(): string{
    return this.dto?.qr_value ?? ''
  }
  get qty(): string{
    return this.dto?.qty ?? ''
  }
  get return_by(): string{
    return this.dto?.return_by ?? ''
  }
  get return_at(): string{
    return this.dto?.return_at ?? ''
  }
}
