import {Entity} from '@/model/core';
import {GetProductDto} from '@/dtos';

export class GetProductModel extends Entity<GetProductDto>{
  constructor(dto:GetProductDto) {
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
  get category(): string{
    return this.dto?.category ?? ''
  }
  get item_image(): string{
    return this.dto?.item_image ?? ''
  }
}
