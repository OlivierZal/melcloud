import type { BuildingData, BuildingSettings } from '../types'
import type API from '../services'
import BaseSuperDeviceFacade from './base_super_device'
import { BuildingModel } from '../models'
import type { IBuildingFacade } from './interfaces'

export default class
  extends BaseSuperDeviceFacade<BuildingModel>
  implements IBuildingFacade
{
  protected readonly frostProtectionLocation = 'BuildingIds'

  protected readonly holidayModeLocation = 'Buildings'

  protected override readonly isFrostProtectionDefined

  protected override readonly isHolidayModeDefined

  protected readonly modelClass = BuildingModel

  protected readonly setAtaGroupSpecification = 'BuildingID'

  protected readonly tableName = 'Building'

  public constructor(api: API, id: number) {
    super(api, id)
    this.isFrostProtectionDefined = this.settings.FPDefined
    this.isHolidayModeDefined = this.settings.HMDefined
  }

  public get settings(): BuildingSettings {
    return this.model.settings
  }

  public async actualData(): Promise<BuildingData> {
    return {
      ID: this.id,
      Name: this.name,
      ...(await this.getFrostProtection()),
      ...(await this.getHolidayMode()),
    }
  }

  public async fetch(): Promise<BuildingSettings> {
    await this.api.sync()
    return this.settings
  }
}
