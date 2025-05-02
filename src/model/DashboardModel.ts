import {Model} from '@/model/core';
import {DashboardDto} from '@/dtos';
import {StoreModel} from '@/model/StoreModel';
import {ChartModel} from '@/model/ChartModel';

export class DashboardModel extends Model<DashboardDto> {
  constructor(dto: DashboardDto) {
    super(dto);
  }
  get start_year(): string {
    return this.dto?.start_year ?? '';
  }
  get end_year(): string {
    return this.dto?.end_year ?? '';
  }
  get storeData(): StoreModel {
    return new StoreModel(this.dto.storeData);
  }
  get chartData(): ChartModel {
    return new ChartModel(this.dto.chartData);
  }
}
