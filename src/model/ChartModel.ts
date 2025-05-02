import {Model} from '@/model/core';
import {ChartDto} from '@/dtos';

export class ChartModel extends Model<ChartDto>{
  constructor(dto:ChartDto) {
    super(dto);
  }
  get today_cons(): string{
    return this.dto?.today_cons ?? ''
  }
  get today_return(): string{
    return this.dto?.today_return ?? ''
  }
  get day_m_1_cons(): string{
    return this.dto?.day_m_1_cons ?? ''
  }
  get day_m_1_return(): string{
    return this.dto?.day_m_1_return ?? ''
  }
  get day_m_2_cons(): string{
    return this.dto?.day_m_2_cons ?? ''
  }
  get day_m_2_return(): string{
    return this.dto?.day_m_2_return ?? ''
  }
  get day_m_3_cons(): string{
    return this.dto?.day_m_3_cons ?? ''
  }
  get day_m_3_return(): string{
    return this.dto?.day_m_3_return ?? ''
  }
  get day_m_4_cons(): string{
    return this.dto?.day_m_4_cons ?? ''
  }
  get day_m_4_return(): string{
    return this.dto?.day_m_4_return ?? ''
  }
  get day_m_5_cons(): string{
    return this.dto?.day_m_5_cons ?? ''
  }
  get day_m_5_return(): string{
    return this.dto?.day_m_5_return ?? ''
  }
  get day_m_6_cons(): string{
    return this.dto?.day_m_6_cons ?? ''
  }
  get day_m_6_return(): string{
    return this.dto?.day_m_6_return ?? ''
  }
}
