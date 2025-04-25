import {Entity, List} from '@/model/core';
import {ReasonListDto} from '@/dtos';
import {ItemModel} from './ItemModel';

export class ItemList extends List<ItemModel> {
  constructor(dto?: ReasonListDto[]) {
    super(dto,ItemModel,false);
  }
}

