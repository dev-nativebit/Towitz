import {List} from '@/model/core';
import {InspectionModel} from '@/model/InspectionModel';
import {InspectionDto} from '@/dtos';

export class InspectionList extends List<InspectionModel>{
  constructor(dtos?: InspectionDto[]) {
    super(dtos,InspectionModel,false);
  }
}
