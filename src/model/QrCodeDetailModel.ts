import {Model} from '@/model/core';
import {QrCodeDetailDto} from '@/dtos';
import {QrDetailModel} from '@/model/QrDetailModel';
import {ItemList} from '@/model/ItemList';
import {ReasonList} from '@/model/ReasonList';

export class QrCodeDetailModel extends Model<QrCodeDetailDto>{
  constructor(dto:QrCodeDetailDto) {
    super(dto);
  }
  get QrDetail():QrDetailModel{
    return new QrDetailModel(this.dto.QrDetail)
  }
  get itemList():ItemList{
    return new ItemList(this.dto.itemList)
  }
  get reasonList():ReasonList{
    return new ReasonList(this.dto.reasonList)
  }
}
