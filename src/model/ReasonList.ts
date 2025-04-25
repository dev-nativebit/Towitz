import {List} from '@/model/core';
import {ReasonModel} from '@/model/ReasonModel';
import {ReasonListDto} from '@/dtos';

export class ReasonList extends List<ReasonModel>{
  constructor(dtos?: ReasonListDto[]) {
    super(dtos,ReasonModel,false);
  }
}
