import {Entity} from '@/model/core';
import {InspectionDto} from '@/dtos';

export class InspectionModel extends Entity<InspectionDto>{
  constructor(dto: InspectionDto) {
    super(dto,'id');
  }
 get id(): string{
    return this.dto?.id ?? ''
 }
 get trans_no(): string{
    return this.dto?.trans_no ?? ''
 }
 get item_code(): string{
    return this.dto?.item_code ?? ''
 }
 get item_name(): string{
    return this.dto?.item_name ?? ''
 }
 get qty(): string{
    return this.dto?.qty ?? ''
 }
 get r_item_code(): string{
    return this.dto?.r_item_code ?? ''
 }
 get r_item_name(): string{
    return this.dto?.r_item_name ?? ''
 }
 get reason(): string{
    return this.dto?.reason ?? ''
 }
 get remark(): string{
    return this.dto?.remark ?? ''
 }
 get return_by(): string{
    return this.dto?.return_by ?? ''
 }
 get return_at(): string{
    return this.dto?.return_at ?? ''
 }
 get auth_by(): string{
    return this.dto?.auth_by ?? ''
 }
 get auth_at(): string{
    return this.dto?.auth_at ?? ''
 }
}
