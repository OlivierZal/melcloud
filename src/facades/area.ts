import type {
  ErrorData,
  ErrorPostData,
  FailureData,
  FrostProtectionData,
  FrostProtectionPostData,
  HolidayModeData,
  HolidayModePostData,
  SetAtaGroupPostData,
  SetPowerPostData,
  SuccessData,
  TilesData,
} from '../types'
import type API from '../services'
import type { AreaModel } from '../models'
import type { IAreaFacade } from '.'

export default class implements IAreaFacade {
  readonly #api: API

  readonly #area: AreaModel

  public constructor(api: API, area: AreaModel) {
    this.#api = api
    this.#area = area
  }

  public async getErrors(
    postData: Omit<ErrorPostData, 'DeviceIDs'>,
  ): Promise<ErrorData[] | FailureData> {
    return (
      await this.#api.getErrors({
        postData: { ...postData, DeviceIDs: this.#area.deviceIds },
      })
    ).data
  }

  public async getFrostProtection(): Promise<FrostProtectionData> {
    try {
      return (
        await this.#api.getFrostProtection({
          params: { id: this.#area.id, tableName: 'Area' },
        })
      ).data
    } catch (_error) {
      const [device] = this.#area.devices
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
          params: { id: this.#area.id, tableName: 'Area' },
        })
      ).data
    } catch (_error) {
      const [device] = this.#area.devices
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
        postData: { DeviceIDs: this.#area.deviceIds },
      })
    ).data
  }

  public async setAtaGroup(
    postData: Omit<SetAtaGroupPostData, 'Specification'>,
  ): Promise<FailureData | SuccessData> {
    return (
      await this.#api.setAtaGroup({
        postData: { ...postData, Specification: { AreaID: this.#area.id } },
      })
    ).data
  }

  public async setFrostProtection(
    postData: Omit<FrostProtectionPostData, 'BuildingIds'>,
  ): Promise<FailureData | SuccessData> {
    return (
      await this.#api.setFrostProtection({
        postData: {
          ...postData,
          ...(this.#area.building?.data.FPDefined === true ?
            { AreaIds: [this.#area.id] }
          : { DeviceIds: this.#area.deviceIds }),
        },
      })
    ).data
  }

  public async setHolidayMode(
    postData: Omit<HolidayModePostData, 'HMTimeZones'>,
  ): Promise<FailureData | SuccessData> {
    return (
      await this.#api.setHolidayMode({
        postData: {
          ...postData,
          HMTimeZones: [
            this.#area.building?.data.HMDefined === true ?
              { Areas: [this.#area.id] }
            : { Devices: this.#area.deviceIds },
          ],
        },
      })
    ).data
  }

  public async setPower(
    postData: Omit<SetPowerPostData, 'DeviceIds'>,
  ): Promise<boolean> {
    return (
      await this.#api.setPower({
        postData: { ...postData, DeviceIds: this.#area.deviceIds },
      })
    ).data
  }
}