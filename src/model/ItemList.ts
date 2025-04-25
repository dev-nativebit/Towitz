import {Entity, List} from '@/model/core';
import {ReasonListDto} from '@/dtos';
import {ItemModel} from './ItemModel';
import {LabelValuePair} from '@/component';

export class ItemList extends List<ItemModel> {
  constructor(dto?: ReasonListDto[]) {
    super(dto,ItemModel,false);
  }

  getLabelValuePair(): LabelValuePair[] {
    return this.map((item) => ({ label: item.item_name, value: item.id }));
  }
}

