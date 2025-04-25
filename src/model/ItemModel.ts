import {Entity} from '@/model/core';
import {ReasonListDto} from '@/dtos';

export class ItemModel extends Entity<ReasonListDto>{
  constructor(dto: ReasonListDto) {
    super(dto,'id');
  }
 get id(): string{
    return this.dto?.id ?? ''
 }
 get item_code(): string{
    return this.dto?.item_code ?? ''
 }
 get item_name(): string{
    return this.dto?.item_name ?? ''
 }
}
