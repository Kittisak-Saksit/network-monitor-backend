import { IsNumber, IsOptional } from 'class-validator'
import { Type } from 'class-transformer'

export class GetTrafficQuery {
  @IsNumber()
  @Type(() => Number)
  startAt: number

  @IsNumber()
  @Type(() => Number)
  endAt: number
}
