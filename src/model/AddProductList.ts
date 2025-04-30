import {List} from '@/model/core';
import {AddProductModel} from '@/model/AddProductModel';
import {AddProductDto} from '@/dtos';
import {LabelValuePair} from '@/component';

export class AddProductList extends List<AddProductModel>{
  constructor(dto?:AddProductDto[]) {
    super(dto,AddProductModel,false);
  }

  getLabelValuePair(): LabelValuePair[] {
    return this.map(item => ({label: item.option, value: item.id}));
  }
}
