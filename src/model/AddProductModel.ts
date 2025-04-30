import {Entity} from '@/model/core';
import {AddProductDto} from '@/dtos';

export class AddProductModel extends Entity<AddProductDto>{
  constructor(dto:AddProductDto) {
    super(dto,'id');
  }
  get id(): string{return this.dto?.id ?? ''}
  get option(): string{return this.dto?.option ?? ''}
  get type(): string{return this.dto?.type ?? ''}
  get created_at(): string{return this.dto?.created_at ?? ''}
  get created_by(): string{return this.dto?.created_by ?? ''}
  get updated_at(): string{return this.dto?.updated_at ?? ''}
  get updated_by(): string{return this.dto?.updated_by ?? ''}
  get is_delete(): string{return this.dto?.is_delete ?? ''}
  get cm_id(): string{return this.dto?.cm_id ?? ''}
}
