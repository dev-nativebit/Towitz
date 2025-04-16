import { Entity } from "@/model/core";
import { RequestDto } from "@/dtos";

export class RequestModel extends Entity<RequestDto>{
  constructor(dto:RequestDto) {
    super(dto,'id');
  }
  get id(): string{
    return this.dto?.id ?? ''
  }
  get item_name(): string{
    return this.dto?.item_name ?? ''
  }
  get qty(): string{
    return this.dto?.qty ?? ''
  }
  get req_status(): string{
    return this.dto?.req_status ?? ''
  }
  get reason(): string{
    return this.dto?.reason ?? ''
  }
  get request_by(): string{
    return this.dto?.request_by ?? ''
  }
  get request_at(): string{
    return this.dto?.request_at ?? ''
  }
  get auth_by(): string{
    return this.dto?.auth_by ?? ''
  }
  get auth_at(): string{
    return this.dto?.auth_at ?? ''
  }
  get status(): string{
    return this.dto?.status ?? ''
  }
}
