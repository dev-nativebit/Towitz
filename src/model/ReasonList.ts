import {List} from '@/model/core';
import {ReasonModel} from '@/model/ReasonModel';
import {ReasonListDto} from '@/dtos';
import {LabelValuePair} from '@/component';

export class ReasonList extends List<ReasonModel>{
  constructor(dtos?: ReasonListDto[]) {
    super(dtos,ReasonModel,false);
  }

  getLabelValuePair(): LabelValuePair[] {
    return this.map((item) => ({ label: item.reason, value: item.reason }));
  }
}
