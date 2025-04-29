import {List} from '@/model/core';
import {GetProductModel} from '@/model/GetProductModel';
import {GetProductDto} from '@/dtos';

export class GetProductList extends List<GetProductModel>{
  constructor(dto?:GetProductDto[]) {
    super(dto,GetProductModel,false);
  }
}
