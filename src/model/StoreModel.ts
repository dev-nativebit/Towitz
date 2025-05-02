import {Model} from '@/model/core';
import {StoreDto} from '@/dtos';

export class StoreModel extends Model<StoreDto>{
  constructor(dto:StoreDto) {
    super(dto);
  }
  get month_trans_count(): string{
    return this.dto?.month_trans_count ?? ''
  }
  get today_trans_count(): string{
    return this.dto?.today_trans_count ?? ''
  }
  get month_inward(): string{
    return this.dto?.month_inward ?? ''
  }
  get today_inward(): string{
    return this.dto?.today_inward ?? ''
  }
  get month_outward(): string{
    return this.dto?.month_outward ?? ''
  }
  get today_outward(): string{
    return this.dto?.today_outward ?? ''
  }
  get month_use_stock(): string{
    return this.dto?.month_use_stock ?? ''
  }
  get today_use_stock(): string{
    return this.dto?.today_use_stock ?? ''
  }
  get currentStock(): number{
    return this.dto?.currentStock ?? 0
  }
  get totalProduct(): number{
    return this.dto?.totalProduct ?? 0
  }
}
