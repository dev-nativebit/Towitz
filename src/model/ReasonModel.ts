import {Entity} from '@/model/core';
import {ReasonListDto} from '@/dtos';

export class ReasonModel extends Entity<ReasonListDto> {
  constructor(dto: ReasonListDto) {
    super(dto,'id');
  }
  get id(): string{
    return this.dto?.id ?? ''
  }
  get reason(): string{
    return this.dto?.reason ?? ''
  }
}
