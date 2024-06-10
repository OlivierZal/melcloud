import type {
  ErrorData,
  FailureData,
  FrostProtectionData,
  HolidayModeData,
  SetAtaGroupPostData,
  SuccessData,
  TilesData,
  WifiData,
} from '../types'
import type API from '../services'
import { DateTime } from 'luxon'
import { FloorModel } from '../models'
import type { IFloorFacade } from '.'

export default class implements IFloorFacade {
  readonly #api: API

  readonly #id: number

  public constructor(api: API, id: number) {
    this.#api = api
    this.#id = id
  }

  public get model(): FloorModel {
    const model = FloorModel.getById(this.#id)
    if (!model) {
      throw new Error('Floor not found')
    }
    return model
  }

  public async getErrors({
    from,
    to,
  }: {
    from: string
    to: string
  }): Promise<ErrorData[] | FailureData> {
    return (
      await this.#api.getErrors({
        postData: {
          DeviceIDs: this.model.deviceIds,
          FromDate: from,
          ToDate: to,
        },
      })
    ).data
  }

  public async getFrostProtection(): Promise<FrostProtectionData> {
    try {
      return (
        await this.#api.getFrostProtection({
          params: { id: this.model.id, tableName: 'Floor' },
        })
      ).data
    } catch (_error) {
      const [device] = this.model.devices
      return (
        await this.#api.getFrostProtection({
          params: { id: device.id, tableName: 'DeviceLocation' },
        })
      ).data
    }
  }

  public async getHolidayMode(): Promise<HolidayModeData> {
    try {
      return (
        await this.#api.getHolidayMode({
          params: { id: this.model.id, tableName: 'Floor' },
        })
      ).data
    } catch (_error) {
      const [device] = this.model.devices
      return (
        await this.#api.getHolidayMode({
          params: { id: device.id, tableName: 'DeviceLocation' },
        })
      ).data
    }
  }

  public async getTiles(): Promise<TilesData<null>> {
    return (
      await this.#api.getTiles({
        postData: { DeviceIDs: this.model.deviceIds },
      })
    ).data
  }

  public async getWifiReport(
    hour: number = DateTime.now().hour,
  ): Promise<WifiData> {
    return (
      await this.#api.getWifiReport({
        postData: { devices: this.model.deviceIds, hour },
      })
    ).data
  }

  public async setAtaGroup(
    postData: Omit<SetAtaGroupPostData, 'Specification'>,
  ): Promise<FailureData | SuccessData> {
    return (
      await this.#api.setAtaGroup({
        postData: { ...postData, Specification: { FloorID: this.model.id } },
      })
    ).data
  }

  public async setFrostProtection({
    enable,
    max,
    min,
  }: {
    enable?: boolean
    max: number
    min: number
  }): Promise<FailureData | SuccessData> {
    return (
      await this.#api.setFrostProtection({
        postData: {
          Enabled: enable ?? true,
          MaximumTemperature: max,
          MinimumTemperature: min,
          ...(this.model.building?.data.FPDefined === true ?
            { FloorIds: [this.model.id] }
          : { DeviceIds: this.model.deviceIds }),
        },
      })
    ).data
  }

  public async setHolidayMode({
    enable,
    from,
    to,
  }: {
    enable?: boolean
    from: string
    to: string
  }): Promise<FailureData | SuccessData> {
    const isEnabled = enable ?? true
    const startDate = isEnabled ? DateTime.fromISO(from) : null
    const endDate = isEnabled ? DateTime.fromISO(to) : null
    return (
      await this.#api.setHolidayMode({
        postData: {
          Enabled: isEnabled,
          EndDate:
            endDate ?
              {
                Day: endDate.day,
                Hour: endDate.hour,
                Minute: endDate.minute,
                Month: endDate.month,
                Second: endDate.second,
                Year: endDate.year,
              }
            : null,
          HMTimeZones: [
            this.model.building?.data.HMDefined === true ?
              { Floors: [this.model.id] }
            : { Devices: this.model.deviceIds },
          ],
          StartDate:
            startDate ?
              {
                Day: startDate.day,
                Hour: startDate.hour,
                Minute: startDate.minute,
                Month: startDate.month,
                Second: startDate.second,
                Year: startDate.year,
              }
            : null,
        },
      })
    ).data
  }

  public async setPower(enable = true): Promise<boolean> {
    return (
      await this.#api.setPower({
        postData: { DeviceIds: this.model.deviceIds, Power: enable },
      })
    ).data
  }
}
