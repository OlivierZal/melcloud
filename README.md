# MELCloud API for Node.js

## Enumerations

### DeviceType

#### Enumeration Members

| Enumeration Member | Value |
| :----------------- | :---- |
| `Ata`              | `0`   |
| `Atw`              | `1`   |
| `Erv`              | `3`   |

---

### FanSpeed

#### Enumeration Members

| Enumeration Member | Value |
| :----------------- | :---- |
| `auto`             | `0`   |
| `fast`             | `4`   |
| `moderate`         | `3`   |
| `silent`           | `255` |
| `slow`             | `2`   |
| `very_fast`        | `5`   |
| `very_slow`        | `1`   |

---

### Horizontal

#### Enumeration Members

| Enumeration Member | Value |
| :----------------- | :---- |
| `auto`             | `0`   |
| `center`           | `3`   |
| `center_left`      | `2`   |
| `center_right`     | `4`   |
| `leftwards`        | `1`   |
| `rightwards`       | `5`   |
| `swing`            | `12`  |
| `wide`             | `8`   |

---

### Language

#### Enumeration Members

| Enumeration Member | Value |
| :----------------- | :---- |
| `bg`               | `1`   |
| `cs`               | `2`   |
| `da`               | `3`   |
| `de`               | `4`   |
| `el`               | `22`  |
| `en`               | `0`   |
| `es`               | `6`   |
| `et`               | `5`   |
| `fi`               | `17`  |
| `fr`               | `7`   |
| `hr`               | `23`  |
| `hu`               | `11`  |
| `hy`               | `8`   |
| `it`               | `19`  |
| `lt`               | `10`  |
| `lv`               | `9`   |
| `nl`               | `12`  |
| `no`               | `13`  |
| `pl`               | `14`  |
| `pt`               | `15`  |
| `ro`               | `24`  |
| `ru`               | `16`  |
| `sl`               | `25`  |
| `sq`               | `26`  |
| `sv`               | `18`  |
| `tr`               | `21`  |
| `uk`               | `20`  |

---

### OperationMode

#### Enumeration Members

| Enumeration Member | Value |
| :----------------- | :---- |
| `auto`             | `8`   |
| `cool`             | `3`   |
| `dry`              | `2`   |
| `fan`              | `7`   |
| `heat`             | `1`   |

---

### OperationModeState

#### Enumeration Members

| Enumeration Member | Value |
| :----------------- | :---- |
| `cooling`          | `3`   |
| `defrost`          | `5`   |
| `dhw`              | `1`   |
| `heating`          | `2`   |
| `idle`             | `0`   |
| `legionella`       | `6`   |

---

### OperationModeZone

#### Enumeration Members

| Enumeration Member | Value |
| :----------------- | :---- |
| `curve`            | `2`   |
| `flow`             | `1`   |
| `flow_cool`        | `4`   |
| `room`             | `0`   |
| `room_cool`        | `3`   |

---

### VentilationMode

#### Enumeration Members

| Enumeration Member | Value |
| :----------------- | :---- |
| `auto`             | `2`   |
| `bypass`           | `1`   |
| `recovery`         | `0`   |

---

### Vertical

#### Enumeration Members

| Enumeration Member | Value |
| :----------------- | :---- |
| `auto`             | `0`   |
| `downwards`        | `5`   |
| `mid_high`         | `2`   |
| `mid_low`          | `4`   |
| `middle`           | `3`   |
| `swing`            | `7`   |
| `upwards`          | `1`   |

## Classes

### AreaFacade

#### Implements

- [`IAreaFacade`](README.md#iareafacade)

#### Constructors

##### new AreaFacade()

```ts
new AreaFacade(api: default, area: AreaModel): AreaFacade
```

###### Parameters

| Parameter | Type                               |
| :-------- | :--------------------------------- |
| `api`     | [`default`](README.md#default)     |
| `area`    | [`AreaModel`](README.md#areamodel) |

###### Returns

[`AreaFacade`](README.md#areafacade)

###### Source

src/facades/area.ts:23

#### Methods

##### getErrors()

```ts
getErrors(postData: Omit<ErrorPostData, "DeviceIDs">): Promise<FailureData | ErrorData[]>
```

###### Parameters

| Parameter  | Type                                                                |
| :--------- | :------------------------------------------------------------------ |
| `postData` | `Omit`\<[`ErrorPostData`](README.md#errorpostdata), `"DeviceIDs"`\> |

###### Returns

`Promise`\<[`FailureData`](README.md#failuredata) \| [`ErrorData`](README.md#errordata)[]\>

###### Implementation of

[`IAreaFacade`](README.md#iareafacade).`getErrors`

###### Source

src/facades/area.ts:28

##### getFrostProtection()

```ts
getFrostProtection(): Promise<FrostProtectionData>
```

###### Returns

`Promise`\<[`FrostProtectionData`](README.md#frostprotectiondata)\>

###### Implementation of

[`IAreaFacade`](README.md#iareafacade).`getFrostProtection`

###### Source

src/facades/area.ts:38

##### getHolidayMode()

```ts
getHolidayMode(): Promise<HolidayModeData>
```

###### Returns

`Promise`\<[`HolidayModeData`](README.md#holidaymodedata)\>

###### Implementation of

[`IAreaFacade`](README.md#iareafacade).`getHolidayMode`

###### Source

src/facades/area.ts:55

##### getTiles()

```ts
getTiles(): Promise<TilesData<null>>
```

###### Returns

`Promise`\<[`TilesData`](README.md#tilesdatat)\<`null`\>\>

###### Implementation of

[`IAreaFacade`](README.md#iareafacade).`getTiles`

###### Source

src/facades/area.ts:72

##### setAtaGroup()

```ts
setAtaGroup(postData: Omit<SetAtaGroupPostData, "Specification">): Promise<SuccessData | FailureData>
```

###### Parameters

| Parameter  | Type                                                                                |
| :--------- | :---------------------------------------------------------------------------------- |
| `postData` | `Omit`\<[`SetAtaGroupPostData`](README.md#setatagrouppostdata), `"Specification"`\> |

###### Returns

`Promise`\<[`SuccessData`](README.md#successdata) \| [`FailureData`](README.md#failuredata)\>

###### Implementation of

[`IAreaFacade`](README.md#iareafacade).`setAtaGroup`

###### Source

src/facades/area.ts:80

##### setFrostProtection()

```ts
setFrostProtection(postData: Omit<FrostProtectionPostData, "BuildingIds">): Promise<SuccessData | FailureData>
```

###### Parameters

| Parameter  | Type                                                                                      |
| :--------- | :---------------------------------------------------------------------------------------- |
| `postData` | `Omit`\<[`FrostProtectionPostData`](README.md#frostprotectionpostdata), `"BuildingIds"`\> |

###### Returns

`Promise`\<[`SuccessData`](README.md#successdata) \| [`FailureData`](README.md#failuredata)\>

###### Implementation of

[`IAreaFacade`](README.md#iareafacade).`setFrostProtection`

###### Source

src/facades/area.ts:90

##### setHolidayMode()

```ts
setHolidayMode(postData: Omit<HolidayModePostData, "HMTimeZones">): Promise<SuccessData | FailureData>
```

###### Parameters

| Parameter  | Type                                                                              |
| :--------- | :-------------------------------------------------------------------------------- |
| `postData` | `Omit`\<[`HolidayModePostData`](README.md#holidaymodepostdata), `"HMTimeZones"`\> |

###### Returns

`Promise`\<[`SuccessData`](README.md#successdata) \| [`FailureData`](README.md#failuredata)\>

###### Implementation of

[`IAreaFacade`](README.md#iareafacade).`setHolidayMode`

###### Source

src/facades/area.ts:105

##### setPower()

```ts
setPower(postData: Omit<SetPowerPostData, "DeviceIds">): Promise<boolean>
```

###### Parameters

| Parameter  | Type                                                                      |
| :--------- | :------------------------------------------------------------------------ |
| `postData` | `Omit`\<[`SetPowerPostData`](README.md#setpowerpostdata), `"DeviceIds"`\> |

###### Returns

`Promise`\<`boolean`\>

###### Implementation of

[`IAreaFacade`](README.md#iareafacade).`setPower`

###### Source

src/facades/area.ts:122

---

### AreaModel

#### Implements

- [`IAreaModel`](README.md#iareamodel)

#### Constructors

##### new AreaModel()

```ts
new AreaModel(__namedParameters: LocationData & {
  FloorId: null | number;
 }): AreaModel
```

###### Parameters

| Parameter           | Type                                                                            |
| :------------------ | :------------------------------------------------------------------------------ |
| `__namedParameters` | [`LocationData`](README.md#locationdata) & \{ `FloorId`: `null` \| `number`; \} |

###### Returns

[`AreaModel`](README.md#areamodel)

###### Source

[src/models/area.ts:22](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/models/area.ts#L22)

#### Properties

| Property     | Modifier   | Type                                                  | Default value |
| :----------- | :--------- | :---------------------------------------------------- | :------------ |
| `buildingId` | `readonly` | `number`                                              | `undefined`   |
| `floorId`    | `readonly` | `null` \| `number`                                    | `undefined`   |
| `id`         | `readonly` | `number`                                              | `undefined`   |
| `name`       | `readonly` | `string`                                              | `undefined`   |
| `areas`      | `readonly` | `Map`\<`number`, [`AreaModel`](README.md#areamodel)\> | `...`         |

#### Accessors

##### building

```ts
get building(): null | BuildingModel
```

###### Returns

`null` \| [`BuildingModel`](README.md#buildingmodel)

###### Source

[src/models/area.ts:36](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/models/area.ts#L36)

##### deviceIds

```ts
get deviceIds(): number[]
```

###### Returns

`number`[]

###### Source

[src/models/area.ts:40](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/models/area.ts#L40)

##### devices

```ts
get devices(): DeviceModelAny[]
```

###### Returns

[`DeviceModelAny`](README.md#devicemodelany)[]

###### Source

[src/models/area.ts:44](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/models/area.ts#L44)

##### floor

```ts
get floor(): null | FloorModel
```

###### Returns

`null` \| [`FloorModel`](README.md#floormodel)

###### Source

[src/models/area.ts:48](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/models/area.ts#L48)

#### Methods

##### getAll()

```ts
static getAll(): AreaModel[]
```

###### Returns

[`AreaModel`](README.md#areamodel)[]

###### Source

[src/models/area.ts:55](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/models/area.ts#L55)

##### getByBuildingId()

```ts
static getByBuildingId(buildingId: number): AreaModel[]
```

###### Parameters

| Parameter    | Type     |
| :----------- | :------- |
| `buildingId` | `number` |

###### Returns

[`AreaModel`](README.md#areamodel)[]

###### Source

[src/models/area.ts:59](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/models/area.ts#L59)

##### getById()

```ts
static getById(id: number): undefined | AreaModel
```

###### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `id`      | `number` |

###### Returns

`undefined` \| [`AreaModel`](README.md#areamodel)

###### Source

[src/models/area.ts:63](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/models/area.ts#L63)

##### getByName()

```ts
static getByName(areaName: string): undefined | AreaModel
```

###### Parameters

| Parameter  | Type     |
| :--------- | :------- |
| `areaName` | `string` |

###### Returns

`undefined` \| [`AreaModel`](README.md#areamodel)

###### Source

[src/models/area.ts:67](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/models/area.ts#L67)

##### upsert()

```ts
static upsert(data: LocationData & {
  FloorId: null | number;
 }): void
```

###### Parameters

| Parameter | Type                                                                            |
| :-------- | :------------------------------------------------------------------------------ |
| `data`    | [`LocationData`](README.md#locationdata) & \{ `FloorId`: `null` \| `number`; \} |

###### Returns

`void`

###### Source

[src/models/area.ts:71](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/models/area.ts#L71)

---

### BuildingFacade

#### Implements

- [`IBuildingFacade`](README.md#ibuildingfacade)

#### Constructors

##### new BuildingFacade()

```ts
new BuildingFacade(api: default, building: BuildingModel): BuildingFacade
```

###### Parameters

| Parameter  | Type                                       |
| :--------- | :----------------------------------------- |
| `api`      | [`default`](README.md#default)             |
| `building` | [`BuildingModel`](README.md#buildingmodel) |

###### Returns

[`BuildingFacade`](README.md#buildingfacade)

###### Source

src/facades/building.ts:24

#### Methods

##### fetch()

```ts
fetch(): Promise<BuildingSettings>
```

###### Returns

`Promise`\<[`BuildingSettings`](README.md#buildingsettings)\>

###### Implementation of

[`IBuildingFacade`](README.md#ibuildingfacade).`fetch`

###### Source

src/facades/building.ts:29

##### getErrors()

```ts
getErrors(postData: Omit<ErrorPostData, "DeviceIDs">): Promise<FailureData | ErrorData[]>
```

###### Parameters

| Parameter  | Type                                                                |
| :--------- | :------------------------------------------------------------------ |
| `postData` | `Omit`\<[`ErrorPostData`](README.md#errorpostdata), `"DeviceIDs"`\> |

###### Returns

`Promise`\<[`FailureData`](README.md#failuredata) \| [`ErrorData`](README.md#errordata)[]\>

###### Implementation of

[`IBuildingFacade`](README.md#ibuildingfacade).`getErrors`

###### Source

src/facades/building.ts:34

##### getFrostProtection()

```ts
getFrostProtection(): Promise<FrostProtectionData>
```

###### Returns

`Promise`\<[`FrostProtectionData`](README.md#frostprotectiondata)\>

###### Implementation of

[`IBuildingFacade`](README.md#ibuildingfacade).`getFrostProtection`

###### Source

src/facades/building.ts:44

##### getHolidayMode()

```ts
getHolidayMode(): Promise<HolidayModeData>
```

###### Returns

`Promise`\<[`HolidayModeData`](README.md#holidaymodedata)\>

###### Implementation of

[`IBuildingFacade`](README.md#ibuildingfacade).`getHolidayMode`

###### Source

src/facades/building.ts:61

##### getTiles()

```ts
getTiles(): Promise<TilesData<null>>
```

###### Returns

`Promise`\<[`TilesData`](README.md#tilesdatat)\<`null`\>\>

###### Implementation of

[`IBuildingFacade`](README.md#ibuildingfacade).`getTiles`

###### Source

src/facades/building.ts:78

##### setAtaGroup()

```ts
setAtaGroup(postData: Omit<SetAtaGroupPostData, "Specification">): Promise<SuccessData | FailureData>
```

###### Parameters

| Parameter  | Type                                                                                |
| :--------- | :---------------------------------------------------------------------------------- |
| `postData` | `Omit`\<[`SetAtaGroupPostData`](README.md#setatagrouppostdata), `"Specification"`\> |

###### Returns

`Promise`\<[`SuccessData`](README.md#successdata) \| [`FailureData`](README.md#failuredata)\>

###### Implementation of

[`IBuildingFacade`](README.md#ibuildingfacade).`setAtaGroup`

###### Source

src/facades/building.ts:86

##### setFrostProtection()

```ts
setFrostProtection(postData: Omit<FrostProtectionPostData, "BuildingIds">): Promise<SuccessData | FailureData>
```

###### Parameters

| Parameter  | Type                                                                                      |
| :--------- | :---------------------------------------------------------------------------------------- |
| `postData` | `Omit`\<[`FrostProtectionPostData`](README.md#frostprotectionpostdata), `"BuildingIds"`\> |

###### Returns

`Promise`\<[`SuccessData`](README.md#successdata) \| [`FailureData`](README.md#failuredata)\>

###### Implementation of

[`IBuildingFacade`](README.md#ibuildingfacade).`setFrostProtection`

###### Source

src/facades/building.ts:99

##### setHolidayMode()

```ts
setHolidayMode(postData: Omit<HolidayModePostData, "HMTimeZones">): Promise<SuccessData | FailureData>
```

###### Parameters

| Parameter  | Type                                                                              |
| :--------- | :-------------------------------------------------------------------------------- |
| `postData` | `Omit`\<[`HolidayModePostData`](README.md#holidaymodepostdata), `"HMTimeZones"`\> |

###### Returns

`Promise`\<[`SuccessData`](README.md#successdata) \| [`FailureData`](README.md#failuredata)\>

###### Implementation of

[`IBuildingFacade`](README.md#ibuildingfacade).`setHolidayMode`

###### Source

src/facades/building.ts:114

##### setPower()

```ts
setPower(postData: Omit<SetPowerPostData, "DeviceIds">): Promise<boolean>
```

###### Parameters

| Parameter  | Type                                                                      |
| :--------- | :------------------------------------------------------------------------ |
| `postData` | `Omit`\<[`SetPowerPostData`](README.md#setpowerpostdata), `"DeviceIds"`\> |

###### Returns

`Promise`\<`boolean`\>

###### Implementation of

[`IBuildingFacade`](README.md#ibuildingfacade).`setPower`

###### Source

src/facades/building.ts:131

---

### BuildingModel

#### Implements

- [`IBuildingModel`](README.md#ibuildingmodel)

#### Constructors

##### new BuildingModel()

```ts
new BuildingModel(__namedParameters: BuildingData): BuildingModel
```

###### Parameters

| Parameter           | Type                                     |
| :------------------ | :--------------------------------------- |
| `__namedParameters` | [`BuildingData`](README.md#buildingdata) |

###### Returns

[`BuildingModel`](README.md#buildingmodel)

###### Source

[src/models/building.ts:18](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/models/building.ts#L18)

#### Properties

| Property    | Modifier   | Type                                                          | Default value |
| :---------- | :--------- | :------------------------------------------------------------ | :------------ |
| `data`      | `readonly` | [`BuildingSettings`](README.md#buildingsettings)              | `undefined`   |
| `id`        | `readonly` | `number`                                                      | `undefined`   |
| `name`      | `readonly` | `string`                                                      | `undefined`   |
| `buildings` | `readonly` | `Map`\<`number`, [`BuildingModel`](README.md#buildingmodel)\> | `...`         |

#### Accessors

##### deviceIds

```ts
get deviceIds(): number[]
```

###### Returns

`number`[]

###### Source

[src/models/building.ts:24](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/models/building.ts#L24)

##### devices

```ts
get devices(): DeviceModelAny[]
```

###### Returns

[`DeviceModelAny`](README.md#devicemodelany)[]

###### Source

[src/models/building.ts:28](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/models/building.ts#L28)

#### Methods

##### getAll()

```ts
static getAll(): BuildingModel[]
```

###### Returns

[`BuildingModel`](README.md#buildingmodel)[]

###### Source

[src/models/building.ts:34](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/models/building.ts#L34)

##### getById()

```ts
static getById(id: number): undefined | BuildingModel
```

###### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `id`      | `number` |

###### Returns

`undefined` \| [`BuildingModel`](README.md#buildingmodel)

###### Source

[src/models/building.ts:38](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/models/building.ts#L38)

##### getByName()

```ts
static getByName(buildingName: string): undefined | BuildingModel
```

###### Parameters

| Parameter      | Type     |
| :------------- | :------- |
| `buildingName` | `string` |

###### Returns

`undefined` \| [`BuildingModel`](README.md#buildingmodel)

###### Source

[src/models/building.ts:42](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/models/building.ts#L42)

##### upsert()

```ts
static upsert(data: BuildingData): void
```

###### Parameters

| Parameter | Type                                     |
| :-------- | :--------------------------------------- |
| `data`    | [`BuildingData`](README.md#buildingdata) |

###### Returns

`void`

###### Source

[src/models/building.ts:46](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/models/building.ts#L46)

---

### DeviceFacade\<T\>

#### Type parameters

| Type parameter                                                    |
| :---------------------------------------------------------------- |
| `T` _extends_ keyof _typeof_ [`DeviceType`](README.md#devicetype) |

#### Implements

- [`IDeviceFacade`](README.md#idevicefacadet)\<`T`\>

#### Constructors

##### new DeviceFacade()

```ts
new DeviceFacade<T>(api: default, device: DeviceModel<T>): DeviceFacade<T>
```

###### Parameters

| Parameter | Type                                           |
| :-------- | :--------------------------------------------- |
| `api`     | [`default`](README.md#default)                 |
| `device`  | [`DeviceModel`](README.md#devicemodelt)\<`T`\> |

###### Returns

[`DeviceFacade`](README.md#devicefacadet)\<`T`\>

###### Source

src/facades/device.ts:36

#### Methods

##### fetch()

```ts
fetch(): Promise<ListDevice[T]["Device"]>
```

###### Returns

`Promise`\<[`ListDevice`](README.md#listdevice)\[`T`\]\[`"Device"`\]\>

###### Implementation of

[`IDeviceFacade`](README.md#idevicefacadet).`fetch`

###### Source

src/facades/device.ts:41

##### get()

```ts
get(): Promise<GetDeviceData[T]>
```

###### Returns

`Promise`\<[`GetDeviceData`](README.md#getdevicedata)\[`T`\]\>

###### Implementation of

[`IDeviceFacade`](README.md#idevicefacadet).`get`

###### Source

src/facades/device.ts:46

##### getEnergyReport()

```ts
getEnergyReport(postData: Omit<EnergyPostData, "DeviceID">): Promise<EnergyData[T]>
```

###### Parameters

| Parameter  | Type                                                                 |
| :--------- | :------------------------------------------------------------------- |
| `postData` | `Omit`\<[`EnergyPostData`](README.md#energypostdata), `"DeviceID"`\> |

###### Returns

`Promise`\<[`EnergyData`](README.md#energydata)\[`T`\]\>

###### Implementation of

[`IDeviceFacade`](README.md#idevicefacadet).`getEnergyReport`

###### Source

src/facades/device.ts:54

##### getErrors()

```ts
getErrors(postData: Omit<ErrorPostData, "DeviceIDs">): Promise<FailureData | ErrorData[]>
```

###### Parameters

| Parameter  | Type                                                                |
| :--------- | :------------------------------------------------------------------ |
| `postData` | `Omit`\<[`ErrorPostData`](README.md#errorpostdata), `"DeviceIDs"`\> |

###### Returns

`Promise`\<[`FailureData`](README.md#failuredata) \| [`ErrorData`](README.md#errordata)[]\>

###### Implementation of

[`IDeviceFacade`](README.md#idevicefacadet).`getErrors`

###### Source

src/facades/device.ts:64

##### getFrostProtection()

```ts
getFrostProtection(): Promise<FrostProtectionData>
```

###### Returns

`Promise`\<[`FrostProtectionData`](README.md#frostprotectiondata)\>

###### Implementation of

[`IDeviceFacade`](README.md#idevicefacadet).`getFrostProtection`

###### Source

src/facades/device.ts:74

##### getHolidayMode()

```ts
getHolidayMode(): Promise<HolidayModeData>
```

###### Returns

`Promise`\<[`HolidayModeData`](README.md#holidaymodedata)\>

###### Implementation of

[`IDeviceFacade`](README.md#idevicefacadet).`getHolidayMode`

###### Source

src/facades/device.ts:82

##### getTile()

###### getTile(select)

```ts
getTile(select?: false): Promise<TilesData<null>>
```

###### Parameters

| Parameter | Type    |
| :-------- | :------ |
| `select`? | `false` |

###### Returns

`Promise`\<[`TilesData`](README.md#tilesdatat)\<`null`\>\>

###### Implementation of

`IDeviceFacade.getTile`

###### Source

src/facades/device.ts:90

###### getTile(select)

```ts
getTile(select: true): Promise<TilesData<T>>
```

###### Parameters

| Parameter | Type   |
| :-------- | :----- |
| `select`  | `true` |

###### Returns

`Promise`\<[`TilesData`](README.md#tilesdatat)\<`T`\>\>

###### Implementation of

`IDeviceFacade.getTile`

###### Source

src/facades/device.ts:91

##### set()

```ts
set(postData: Omit<SetDevicePostData[T], "DeviceID">): Promise<SetDeviceData[T]>
```

###### Parameters

| Parameter  | Type                                                                              |
| :--------- | :-------------------------------------------------------------------------------- |
| `postData` | `Omit`\<[`SetDevicePostData`](README.md#setdevicepostdata)\[`T`\], `"DeviceID"`\> |

###### Returns

`Promise`\<[`SetDeviceData`](README.md#setdevicedata)\[`T`\]\>

###### Implementation of

[`IDeviceFacade`](README.md#idevicefacadet).`set`

###### Source

src/facades/device.ts:112

##### setFrostProtection()

```ts
setFrostProtection(postData: Omit<FrostProtectionPostData, "DeviceIds">): Promise<SuccessData | FailureData>
```

###### Parameters

| Parameter  | Type                                                                                    |
| :--------- | :-------------------------------------------------------------------------------------- |
| `postData` | `Omit`\<[`FrostProtectionPostData`](README.md#frostprotectionpostdata), `"DeviceIds"`\> |

###### Returns

`Promise`\<[`SuccessData`](README.md#successdata) \| [`FailureData`](README.md#failuredata)\>

###### Implementation of

[`IDeviceFacade`](README.md#idevicefacadet).`setFrostProtection`

###### Source

src/facades/device.ts:123

##### setHolidayMode()

```ts
setHolidayMode(postData: Omit<HolidayModePostData, "HMTimeZones">): Promise<SuccessData | FailureData>
```

###### Parameters

| Parameter  | Type                                                                              |
| :--------- | :-------------------------------------------------------------------------------- |
| `postData` | `Omit`\<[`HolidayModePostData`](README.md#holidaymodepostdata), `"HMTimeZones"`\> |

###### Returns

`Promise`\<[`SuccessData`](README.md#successdata) \| [`FailureData`](README.md#failuredata)\>

###### Implementation of

[`IDeviceFacade`](README.md#idevicefacadet).`setHolidayMode`

###### Source

src/facades/device.ts:133

##### setPower()

```ts
setPower(postData: Omit<SetPowerPostData, "DeviceIds">): Promise<boolean>
```

###### Parameters

| Parameter  | Type                                                                      |
| :--------- | :------------------------------------------------------------------------ |
| `postData` | `Omit`\<[`SetPowerPostData`](README.md#setpowerpostdata), `"DeviceIds"`\> |

###### Returns

`Promise`\<`boolean`\>

###### Implementation of

[`IDeviceFacade`](README.md#idevicefacadet).`setPower`

###### Source

src/facades/device.ts:146

---

### DeviceModel\<T\>

#### Type parameters

| Type parameter                                                    |
| :---------------------------------------------------------------- |
| `T` _extends_ keyof _typeof_ [`DeviceType`](README.md#devicetype) |

#### Implements

- [`IDeviceModel`](README.md#idevicemodelt)\<`T`\>

#### Constructors

##### new DeviceModel()

```ts
new DeviceModel<T>(__namedParameters: ListDevice[T]): DeviceModel<T>
```

###### Parameters

| Parameter           | Type                                        |
| :------------------ | :------------------------------------------ |
| `__namedParameters` | [`ListDevice`](README.md#listdevice)\[`T`\] |

###### Returns

[`DeviceModel`](README.md#devicemodelt)\<`T`\>

###### Source

[src/models/device.ts:34](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/models/device.ts#L34)

#### Properties

| Property     | Modifier   | Type                                                            | Default value |
| :----------- | :--------- | :-------------------------------------------------------------- | :------------ |
| `areaId`     | `readonly` | `null` \| `number`                                              | `null`        |
| `buildingId` | `readonly` | `number`                                                        | `undefined`   |
| `data`       | `readonly` | [`ListDevice`](README.md#listdevice)\[`T`\]\[`"Device"`\]       | `undefined`   |
| `floorId`    | `readonly` | `null` \| `number`                                              | `null`        |
| `id`         | `readonly` | `number`                                                        | `undefined`   |
| `name`       | `readonly` | `string`                                                        | `undefined`   |
| `type`       | `readonly` | `T`                                                             | `undefined`   |
| `devices`    | `readonly` | `Map`\<`number`, [`DeviceModelAny`](README.md#devicemodelany)\> | `...`         |

#### Accessors

##### area

```ts
get area(): null | AreaModel
```

###### Returns

`null` \| [`AreaModel`](README.md#areamodel)

###### Source

[src/models/device.ts:52](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/models/device.ts#L52)

##### building

```ts
get building(): null | BuildingModel
```

###### Returns

`null` \| [`BuildingModel`](README.md#buildingmodel)

###### Source

[src/models/device.ts:59](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/models/device.ts#L59)

##### floor

```ts
get floor(): null | FloorModel
```

###### Returns

`null` \| [`FloorModel`](README.md#floormodel)

###### Source

[src/models/device.ts:63](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/models/device.ts#L63)

#### Methods

##### getAll()

```ts
static getAll(): DeviceModelAny[]
```

###### Returns

[`DeviceModelAny`](README.md#devicemodelany)[]

###### Source

[src/models/device.ts:70](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/models/device.ts#L70)

##### getByBuildingId()

```ts
static getByBuildingId(buildingId: number): DeviceModelAny[]
```

###### Parameters

| Parameter    | Type     |
| :----------- | :------- |
| `buildingId` | `number` |

###### Returns

[`DeviceModelAny`](README.md#devicemodelany)[]

###### Source

[src/models/device.ts:74](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/models/device.ts#L74)

##### getById()

```ts
static getById(id: number): undefined | DeviceModelAny
```

###### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `id`      | `number` |

###### Returns

`undefined` \| [`DeviceModelAny`](README.md#devicemodelany)

###### Source

[src/models/device.ts:78](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/models/device.ts#L78)

##### getByName()

```ts
static getByName(deviceName: string): undefined | DeviceModelAny
```

###### Parameters

| Parameter    | Type     |
| :----------- | :------- |
| `deviceName` | `string` |

###### Returns

`undefined` \| [`DeviceModelAny`](README.md#devicemodelany)

###### Source

[src/models/device.ts:82](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/models/device.ts#L82)

##### getByType()

```ts
static getByType(deviceType: "Ata" | "Atw" | "Erv"): DeviceModelAny[]
```

###### Parameters

| Parameter    | Type                          |
| :----------- | :---------------------------- |
| `deviceType` | `"Ata"` \| `"Atw"` \| `"Erv"` |

###### Returns

[`DeviceModelAny`](README.md#devicemodelany)[]

###### Source

[src/models/device.ts:86](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/models/device.ts#L86)

##### upsert()

```ts
static upsert(data: ListDeviceAny): void
```

###### Parameters

| Parameter | Type                                       |
| :-------- | :----------------------------------------- |
| `data`    | [`ListDeviceAny`](README.md#listdeviceany) |

###### Returns

`void`

###### Source

[src/models/device.ts:92](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/models/device.ts#L92)

##### upsertMany()

```ts
static upsertMany(dataList: readonly ListDeviceAny[]): void
```

###### Parameters

| Parameter  | Type                                                  |
| :--------- | :---------------------------------------------------- |
| `dataList` | readonly [`ListDeviceAny`](README.md#listdeviceany)[] |

###### Returns

`void`

###### Source

[src/models/device.ts:96](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/models/device.ts#L96)

---

### FloorFacade

#### Implements

- [`IFloorFacade`](README.md#ifloorfacade)

#### Constructors

##### new FloorFacade()

```ts
new FloorFacade(api: default, floor: FloorModel): FloorFacade
```

###### Parameters

| Parameter | Type                                 |
| :-------- | :----------------------------------- |
| `api`     | [`default`](README.md#default)       |
| `floor`   | [`FloorModel`](README.md#floormodel) |

###### Returns

[`FloorFacade`](README.md#floorfacade)

###### Source

src/facades/floor.ts:23

#### Methods

##### getErrors()

```ts
getErrors(postData: Omit<ErrorPostData, "DeviceIDs">): Promise<FailureData | ErrorData[]>
```

###### Parameters

| Parameter  | Type                                                                |
| :--------- | :------------------------------------------------------------------ |
| `postData` | `Omit`\<[`ErrorPostData`](README.md#errorpostdata), `"DeviceIDs"`\> |

###### Returns

`Promise`\<[`FailureData`](README.md#failuredata) \| [`ErrorData`](README.md#errordata)[]\>

###### Implementation of

[`IFloorFacade`](README.md#ifloorfacade).`getErrors`

###### Source

src/facades/floor.ts:28

##### getFrostProtection()

```ts
getFrostProtection(): Promise<FrostProtectionData>
```

###### Returns

`Promise`\<[`FrostProtectionData`](README.md#frostprotectiondata)\>

###### Implementation of

[`IFloorFacade`](README.md#ifloorfacade).`getFrostProtection`

###### Source

src/facades/floor.ts:38

##### getHolidayMode()

```ts
getHolidayMode(): Promise<HolidayModeData>
```

###### Returns

`Promise`\<[`HolidayModeData`](README.md#holidaymodedata)\>

###### Implementation of

[`IFloorFacade`](README.md#ifloorfacade).`getHolidayMode`

###### Source

src/facades/floor.ts:55

##### getTiles()

```ts
getTiles(): Promise<TilesData<null>>
```

###### Returns

`Promise`\<[`TilesData`](README.md#tilesdatat)\<`null`\>\>

###### Implementation of

[`IFloorFacade`](README.md#ifloorfacade).`getTiles`

###### Source

src/facades/floor.ts:72

##### setAtaGroup()

```ts
setAtaGroup(postData: Omit<SetAtaGroupPostData, "Specification">): Promise<SuccessData | FailureData>
```

###### Parameters

| Parameter  | Type                                                                                |
| :--------- | :---------------------------------------------------------------------------------- |
| `postData` | `Omit`\<[`SetAtaGroupPostData`](README.md#setatagrouppostdata), `"Specification"`\> |

###### Returns

`Promise`\<[`SuccessData`](README.md#successdata) \| [`FailureData`](README.md#failuredata)\>

###### Implementation of

[`IFloorFacade`](README.md#ifloorfacade).`setAtaGroup`

###### Source

src/facades/floor.ts:80

##### setFrostProtection()

```ts
setFrostProtection(postData: Omit<FrostProtectionPostData, "BuildingIds">): Promise<SuccessData | FailureData>
```

###### Parameters

| Parameter  | Type                                                                                      |
| :--------- | :---------------------------------------------------------------------------------------- |
| `postData` | `Omit`\<[`FrostProtectionPostData`](README.md#frostprotectionpostdata), `"BuildingIds"`\> |

###### Returns

`Promise`\<[`SuccessData`](README.md#successdata) \| [`FailureData`](README.md#failuredata)\>

###### Implementation of

[`IFloorFacade`](README.md#ifloorfacade).`setFrostProtection`

###### Source

src/facades/floor.ts:90

##### setHolidayMode()

```ts
setHolidayMode(postData: Omit<HolidayModePostData, "HMTimeZones">): Promise<SuccessData | FailureData>
```

###### Parameters

| Parameter  | Type                                                                              |
| :--------- | :-------------------------------------------------------------------------------- |
| `postData` | `Omit`\<[`HolidayModePostData`](README.md#holidaymodepostdata), `"HMTimeZones"`\> |

###### Returns

`Promise`\<[`SuccessData`](README.md#successdata) \| [`FailureData`](README.md#failuredata)\>

###### Implementation of

[`IFloorFacade`](README.md#ifloorfacade).`setHolidayMode`

###### Source

src/facades/floor.ts:105

##### setPower()

```ts
setPower(postData: Omit<SetPowerPostData, "DeviceIds">): Promise<boolean>
```

###### Parameters

| Parameter  | Type                                                                      |
| :--------- | :------------------------------------------------------------------------ |
| `postData` | `Omit`\<[`SetPowerPostData`](README.md#setpowerpostdata), `"DeviceIds"`\> |

###### Returns

`Promise`\<`boolean`\>

###### Implementation of

[`IFloorFacade`](README.md#ifloorfacade).`setPower`

###### Source

src/facades/floor.ts:122

---

### FloorModel

#### Implements

- [`IFloorModel`](README.md#ifloormodel)

#### Constructors

##### new FloorModel()

```ts
new FloorModel(__namedParameters: LocationData): FloorModel
```

###### Parameters

| Parameter           | Type                                     |
| :------------------ | :--------------------------------------- |
| `__namedParameters` | [`LocationData`](README.md#locationdata) |

###### Returns

[`FloorModel`](README.md#floormodel)

###### Source

[src/models/floor.ts:20](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/models/floor.ts#L20)

#### Properties

| Property     | Modifier   | Type                                                    | Default value |
| :----------- | :--------- | :------------------------------------------------------ | :------------ |
| `buildingId` | `readonly` | `number`                                                | `undefined`   |
| `id`         | `readonly` | `number`                                                | `undefined`   |
| `name`       | `readonly` | `string`                                                | `undefined`   |
| `floors`     | `readonly` | `Map`\<`number`, [`FloorModel`](README.md#floormodel)\> | `...`         |

#### Accessors

##### areaIds

```ts
get areaIds(): number[]
```

###### Returns

`number`[]

###### Source

[src/models/floor.ts:30](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/models/floor.ts#L30)

##### areas

```ts
get areas(): AreaModel[]
```

###### Returns

[`AreaModel`](README.md#areamodel)[]

###### Source

[src/models/floor.ts:34](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/models/floor.ts#L34)

##### building

```ts
get building(): null | BuildingModel
```

###### Returns

`null` \| [`BuildingModel`](README.md#buildingmodel)

###### Source

[src/models/floor.ts:38](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/models/floor.ts#L38)

##### deviceIds

```ts
get deviceIds(): number[]
```

###### Returns

`number`[]

###### Source

[src/models/floor.ts:42](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/models/floor.ts#L42)

##### devices

```ts
get devices(): DeviceModelAny[]
```

###### Returns

[`DeviceModelAny`](README.md#devicemodelany)[]

###### Source

[src/models/floor.ts:46](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/models/floor.ts#L46)

#### Methods

##### getAll()

```ts
static getAll(): FloorModel[]
```

###### Returns

[`FloorModel`](README.md#floormodel)[]

###### Source

[src/models/floor.ts:50](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/models/floor.ts#L50)

##### getByBuildingId()

```ts
static getByBuildingId(buildingId: number): FloorModel[]
```

###### Parameters

| Parameter    | Type     |
| :----------- | :------- |
| `buildingId` | `number` |

###### Returns

[`FloorModel`](README.md#floormodel)[]

###### Source

[src/models/floor.ts:54](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/models/floor.ts#L54)

##### getById()

```ts
static getById(id: number): undefined | FloorModel
```

###### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `id`      | `number` |

###### Returns

`undefined` \| [`FloorModel`](README.md#floormodel)

###### Source

[src/models/floor.ts:58](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/models/floor.ts#L58)

##### getByName()

```ts
static getByName(floorName: string): undefined | FloorModel
```

###### Parameters

| Parameter   | Type     |
| :---------- | :------- |
| `floorName` | `string` |

###### Returns

`undefined` \| [`FloorModel`](README.md#floormodel)

###### Source

[src/models/floor.ts:62](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/models/floor.ts#L62)

##### upsert()

```ts
static upsert(data: LocationData): void
```

###### Parameters

| Parameter | Type                                     |
| :-------- | :--------------------------------------- |
| `data`    | [`LocationData`](README.md#locationdata) |

###### Returns

`void`

###### Source

[src/models/floor.ts:66](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/models/floor.ts#L66)

---

### default

#### Implements

- [`IMELCloudAPI`](README.md#imelcloudapi)

#### Constructors

##### new default()

```ts
new default(config: {
  language: string;
  logger: Logger;
  settingManager: SettingManager;
  shouldVerifySSL: boolean;
  timezone: string;
 }): default
```

###### Parameters

| Parameter                 | Type                                         |
| :------------------------ | :------------------------------------------- |
| `config`                  | `object`                                     |
| `config.language`?        | `string`                                     |
| `config.logger`?          | [`Logger`](README.md#logger)                 |
| `config.settingManager`?  | [`SettingManager`](README.md#settingmanager) |
| `config.shouldVerifySSL`? | `boolean`                                    |
| `config.timezone`?        | `string`                                     |

###### Returns

[`default`](README.md#default)

###### Source

[src/services/api.ts:78](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/services/api.ts#L78)

#### Properties

| Property   | Modifier | Type                             |
| :--------- | :------- | :------------------------------- |
| `language` | `public` | [`Language`](README.md#language) |

#### Methods

##### applyLogin()

```ts
applyLogin(data?: LoginCredentials, onSuccess?: () => Promise<void>): Promise<boolean>
```

###### Parameters

| Parameter    | Type                                             |
| :----------- | :----------------------------------------------- |
| `data`?      | [`LoginCredentials`](README.md#logincredentials) |
| `onSuccess`? | () => `Promise`\<`void`\>                        |

###### Returns

`Promise`\<`boolean`\>

###### Implementation of

[`IMELCloudAPI`](README.md#imelcloudapi).`applyLogin`

###### Source

[src/services/api.ts:146](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/services/api.ts#L146)

##### fetchDevices()

```ts
fetchDevices(): Promise<{
  data: Building[];
}>
```

###### Returns

`Promise`\<\{
`data`: [`Building`](README.md#building-3)[];
\}\>

| Member | Type                                 |
| :----- | :----------------------------------- |
| `data` | [`Building`](README.md#building-3)[] |

###### Implementation of

[`IMELCloudAPI`](README.md#imelcloudapi).`fetchDevices`

###### Source

[src/services/api.ts:177](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/services/api.ts#L177)

##### getDevice()

```ts
getDevice<T>(__namedParameters: {
  params: GetDeviceDataParams;
 }): Promise<{
  data: GetDeviceData[T];
}>
```

###### Type parameters

| Type parameter                              |
| :------------------------------------------ |
| `T` _extends_ `"Ata"` \| `"Atw"` \| `"Erv"` |

###### Parameters

| Parameter                  | Type                                                   |
| :------------------------- | :----------------------------------------------------- |
| `__namedParameters`        | `object`                                               |
| `__namedParameters.params` | [`GetDeviceDataParams`](README.md#getdevicedataparams) |

###### Returns

`Promise`\<\{
`data`: [`GetDeviceData`](README.md#getdevicedata)\[`T`\];
\}\>

| Member | Type                                              |
| :----- | :------------------------------------------------ |
| `data` | [`GetDeviceData`](README.md#getdevicedata)\[`T`\] |

###### Implementation of

[`IMELCloudAPI`](README.md#imelcloudapi).`getDevice`

###### Source

[src/services/api.ts:200](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/services/api.ts#L200)

##### getEnergyReport()

```ts
getEnergyReport<T>(__namedParameters: {
  postData: EnergyPostData;
 }): Promise<{
  data: EnergyData[T];
}>
```

###### Type parameters

| Type parameter                              |
| :------------------------------------------ |
| `T` _extends_ `"Ata"` \| `"Atw"` \| `"Erv"` |

###### Parameters

| Parameter                    | Type                                         |
| :--------------------------- | :------------------------------------------- |
| `__namedParameters`          | `object`                                     |
| `__namedParameters.postData` | [`EnergyPostData`](README.md#energypostdata) |

###### Returns

`Promise`\<\{
`data`: [`EnergyData`](README.md#energydata)\[`T`\];
\}\>

| Member | Type                                        |
| :----- | :------------------------------------------ |
| `data` | [`EnergyData`](README.md#energydata)\[`T`\] |

###### Implementation of

[`IMELCloudAPI`](README.md#imelcloudapi).`getEnergyReport`

###### Source

[src/services/api.ts:210](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/services/api.ts#L210)

##### getErrors()

```ts
getErrors(__namedParameters: {
  postData: ErrorPostData;
 }): Promise<{
  data: FailureData | ErrorData[];
}>
```

###### Parameters

| Parameter                    | Type                                       |
| :--------------------------- | :----------------------------------------- |
| `__namedParameters`          | `object`                                   |
| `__namedParameters.postData` | [`ErrorPostData`](README.md#errorpostdata) |

###### Returns

`Promise`\<\{
`data`: [`FailureData`](README.md#failuredata) \| [`ErrorData`](README.md#errordata)[];
\}\>

| Member | Type                                                                           |
| :----- | :----------------------------------------------------------------------------- |
| `data` | [`FailureData`](README.md#failuredata) \| [`ErrorData`](README.md#errordata)[] |

###### Implementation of

[`IMELCloudAPI`](README.md#imelcloudapi).`getErrors`

###### Source

[src/services/api.ts:221](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/services/api.ts#L221)

##### getFrostProtection()

```ts
getFrostProtection(__namedParameters: {
  params: SettingsParams;
 }): Promise<{
  data: FrostProtectionData;
}>
```

###### Parameters

| Parameter                  | Type                                         |
| :------------------------- | :------------------------------------------- |
| `__namedParameters`        | `object`                                     |
| `__namedParameters.params` | [`SettingsParams`](README.md#settingsparams) |

###### Returns

`Promise`\<\{
`data`: [`FrostProtectionData`](README.md#frostprotectiondata);
\}\>

| Member | Type                                                   |
| :----- | :----------------------------------------------------- |
| `data` | [`FrostProtectionData`](README.md#frostprotectiondata) |

###### Implementation of

[`IMELCloudAPI`](README.md#imelcloudapi).`getFrostProtection`

###### Source

[src/services/api.ts:232](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/services/api.ts#L232)

##### getHolidayMode()

```ts
getHolidayMode(__namedParameters: {
  params: SettingsParams;
 }): Promise<{
  data: HolidayModeData;
}>
```

###### Parameters

| Parameter                  | Type                                         |
| :------------------------- | :------------------------------------------- |
| `__namedParameters`        | `object`                                     |
| `__namedParameters.params` | [`SettingsParams`](README.md#settingsparams) |

###### Returns

`Promise`\<\{
`data`: [`HolidayModeData`](README.md#holidaymodedata);
\}\>

| Member | Type                                           |
| :----- | :--------------------------------------------- |
| `data` | [`HolidayModeData`](README.md#holidaymodedata) |

###### Implementation of

[`IMELCloudAPI`](README.md#imelcloudapi).`getHolidayMode`

###### Source

[src/services/api.ts:242](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/services/api.ts#L242)

##### getTiles()

###### getTiles(\_\_namedParameters)

```ts
getTiles(__namedParameters: {
  postData: TilesPostData<null>;
 }): Promise<{
  data: TilesData<null>;
}>
```

###### Parameters

| Parameter                    | Type                                                  |
| :--------------------------- | :---------------------------------------------------- |
| `__namedParameters`          | `object`                                              |
| `__namedParameters.postData` | [`TilesPostData`](README.md#tilespostdatat)\<`null`\> |

###### Returns

`Promise`\<\{
`data`: [`TilesData`](README.md#tilesdatat)\<`null`\>;
\}\>

| Member | Type                                          |
| :----- | :-------------------------------------------- |
| `data` | [`TilesData`](README.md#tilesdatat)\<`null`\> |

###### Implementation of

`IMELCloudAPI.getTiles`

###### Source

[src/services/api.ts:252](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/services/api.ts#L252)

###### getTiles(\_\_namedParameters)

```ts
getTiles<T>(__namedParameters: {
  postData: TilesPostData<T>;
 }): Promise<{
  data: TilesData<T>;
}>
```

###### Type parameters

| Type parameter                              |
| :------------------------------------------ |
| `T` _extends_ `"Ata"` \| `"Atw"` \| `"Erv"` |

###### Parameters

| Parameter                    | Type                                               |
| :--------------------------- | :------------------------------------------------- |
| `__namedParameters`          | `object`                                           |
| `__namedParameters.postData` | [`TilesPostData`](README.md#tilespostdatat)\<`T`\> |

###### Returns

`Promise`\<\{
`data`: [`TilesData`](README.md#tilesdatat)\<`T`\>;
\}\>

| Member | Type                                       |
| :----- | :----------------------------------------- |
| `data` | [`TilesData`](README.md#tilesdatat)\<`T`\> |

###### Implementation of

`IMELCloudAPI.getTiles`

###### Source

[src/services/api.ts:257](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/services/api.ts#L257)

##### login()

```ts
login(__namedParameters: {
  postData: LoginPostData;
 }): Promise<{
  data: LoginData;
}>
```

###### Parameters

| Parameter                    | Type                                       |
| :--------------------------- | :----------------------------------------- |
| `__namedParameters`          | `object`                                   |
| `__namedParameters.postData` | [`LoginPostData`](README.md#loginpostdata) |

###### Returns

`Promise`\<\{
`data`: [`LoginData`](README.md#logindata);
\}\>

| Member | Type                               |
| :----- | :--------------------------------- |
| `data` | [`LoginData`](README.md#logindata) |

###### Implementation of

[`IMELCloudAPI`](README.md#imelcloudapi).`login`

###### Source

[src/services/api.ts:273](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/services/api.ts#L273)

##### setAtaGroup()

```ts
setAtaGroup(__namedParameters: {
  postData: SetAtaGroupPostData;
 }): Promise<{
  data: SuccessData | FailureData;
}>
```

###### Parameters

| Parameter                    | Type                                                   |
| :--------------------------- | :----------------------------------------------------- |
| `__namedParameters`          | `object`                                               |
| `__namedParameters.postData` | [`SetAtaGroupPostData`](README.md#setatagrouppostdata) |

###### Returns

`Promise`\<\{
`data`: [`SuccessData`](README.md#successdata) \| [`FailureData`](README.md#failuredata);
\}\>

| Member | Type                                                                             |
| :----- | :------------------------------------------------------------------------------- |
| `data` | [`SuccessData`](README.md#successdata) \| [`FailureData`](README.md#failuredata) |

###### Implementation of

[`IMELCloudAPI`](README.md#imelcloudapi).`setAtaGroup`

###### Source

[src/services/api.ts:292](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/services/api.ts#L292)

##### setDevice()

```ts
setDevice<T>(__namedParameters: {
  heatPumpType: T;
  postData: SetDevicePostData[T];
 }): Promise<{
  data: SetDeviceData[T];
}>
```

###### Type parameters

| Type parameter                              |
| :------------------------------------------ |
| `T` _extends_ `"Ata"` \| `"Atw"` \| `"Erv"` |

###### Parameters

| Parameter                        | Type                                                      |
| :------------------------------- | :-------------------------------------------------------- |
| `__namedParameters`              | `object`                                                  |
| `__namedParameters.heatPumpType` | `T`                                                       |
| `__namedParameters.postData`     | [`SetDevicePostData`](README.md#setdevicepostdata)\[`T`\] |

###### Returns

`Promise`\<\{
`data`: [`SetDeviceData`](README.md#setdevicedata)\[`T`\];
\}\>

| Member | Type                                              |
| :----- | :------------------------------------------------ |
| `data` | [`SetDeviceData`](README.md#setdevicedata)\[`T`\] |

###### Implementation of

[`IMELCloudAPI`](README.md#imelcloudapi).`setDevice`

###### Source

[src/services/api.ts:307](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/services/api.ts#L307)

##### setFrostProtection()

```ts
setFrostProtection(__namedParameters: {
  postData: FrostProtectionPostData;
 }): Promise<{
  data: SuccessData | FailureData;
}>
```

###### Parameters

| Parameter                    | Type                                                           |
| :--------------------------- | :------------------------------------------------------------- |
| `__namedParameters`          | `object`                                                       |
| `__namedParameters.postData` | [`FrostProtectionPostData`](README.md#frostprotectionpostdata) |

###### Returns

`Promise`\<\{
`data`: [`SuccessData`](README.md#successdata) \| [`FailureData`](README.md#failuredata);
\}\>

| Member | Type                                                                             |
| :----- | :------------------------------------------------------------------------------- |
| `data` | [`SuccessData`](README.md#successdata) \| [`FailureData`](README.md#failuredata) |

###### Implementation of

[`IMELCloudAPI`](README.md#imelcloudapi).`setFrostProtection`

###### Source

[src/services/api.ts:320](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/services/api.ts#L320)

##### setHolidayMode()

```ts
setHolidayMode(__namedParameters: {
  postData: HolidayModePostData;
 }): Promise<{
  data: SuccessData | FailureData;
}>
```

###### Parameters

| Parameter                    | Type                                                   |
| :--------------------------- | :----------------------------------------------------- |
| `__namedParameters`          | `object`                                               |
| `__namedParameters.postData` | [`HolidayModePostData`](README.md#holidaymodepostdata) |

###### Returns

`Promise`\<\{
`data`: [`SuccessData`](README.md#successdata) \| [`FailureData`](README.md#failuredata);
\}\>

| Member | Type                                                                             |
| :----- | :------------------------------------------------------------------------------- |
| `data` | [`SuccessData`](README.md#successdata) \| [`FailureData`](README.md#failuredata) |

###### Implementation of

[`IMELCloudAPI`](README.md#imelcloudapi).`setHolidayMode`

###### Source

[src/services/api.ts:331](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/services/api.ts#L331)

##### setLanguage()

```ts
setLanguage(__namedParameters: {
  postData: {
     language: Language;
    };
 }): Promise<{
  data: boolean;
}>
```

###### Parameters

| Parameter                             | Type                             |
| :------------------------------------ | :------------------------------- |
| `__namedParameters`                   | `object`                         |
| `__namedParameters.postData`          | `object`                         |
| `__namedParameters.postData.language` | [`Language`](README.md#language) |

###### Returns

`Promise`\<\{
`data`: `boolean`;
\}\>

| Member | Type      |
| :----- | :-------- |
| `data` | `boolean` |

###### Implementation of

[`IMELCloudAPI`](README.md#imelcloudapi).`setLanguage`

###### Source

[src/services/api.ts:342](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/services/api.ts#L342)

##### setPower()

```ts
setPower(__namedParameters: {
  postData: SetPowerPostData;
 }): Promise<{
  data: boolean;
}>
```

###### Parameters

| Parameter                    | Type                                             |
| :--------------------------- | :----------------------------------------------- |
| `__namedParameters`          | `object`                                         |
| `__namedParameters.postData` | [`SetPowerPostData`](README.md#setpowerpostdata) |

###### Returns

`Promise`\<\{
`data`: `boolean`;
\}\>

| Member | Type      |
| :----- | :-------- |
| `data` | `boolean` |

###### Implementation of

[`IMELCloudAPI`](README.md#imelcloudapi).`setPower`

###### Source

[src/services/api.ts:356](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/services/api.ts#L356)

## Interfaces

### APISettings

#### Properties

| Property      | Modifier   | Type               |
| :------------ | :--------- | :----------------- |
| `contextKey?` | `readonly` | `null` \| `string` |
| `expiry?`     | `readonly` | `null` \| `string` |
| `password?`   | `readonly` | `null` \| `string` |
| `username?`   | `readonly` | `null` \| `string` |

---

### BaseDevicePostData

#### Extended by

- [`EnergyPostData`](README.md#energypostdata)
- [`SetDevicePostDataAta`](README.md#setdevicepostdataata)
- [`SetDevicePostDataAtw`](README.md#setdevicepostdataatw)
- [`SetDevicePostDataErv`](README.md#setdevicepostdataerv)

#### Properties

| Property   | Modifier   | Type     |
| :--------- | :--------- | :------- |
| `DeviceID` | `readonly` | `number` |

---

### BaseGetDeviceData

#### Extends

- [`BaseSetDeviceData`](README.md#basesetdevicedata)

#### Properties

| Property            | Modifier   | Type      | Overrides                                                              | Inherited from                                                         |
| :------------------ | :--------- | :-------- | :--------------------------------------------------------------------- | :--------------------------------------------------------------------- |
| `EffectiveFlags`    | `readonly` | `0`       | [`BaseSetDeviceData`](README.md#basesetdevicedata).`EffectiveFlags`    | [`BaseSetDeviceData`](README.md#basesetdevicedata).`EffectiveFlags`    |
| `LastCommunication` | `readonly` | `string`  | [`BaseSetDeviceData`](README.md#basesetdevicedata).`LastCommunication` | [`BaseSetDeviceData`](README.md#basesetdevicedata).`LastCommunication` |
| `NextCommunication` | `readonly` | `string`  | [`BaseSetDeviceData`](README.md#basesetdevicedata).`NextCommunication` | [`BaseSetDeviceData`](README.md#basesetdevicedata).`NextCommunication` |
| `Offline`           | `readonly` | `boolean` | [`BaseSetDeviceData`](README.md#basesetdevicedata).`Offline`           | [`BaseSetDeviceData`](README.md#basesetdevicedata).`Offline`           |
| `Power`             | `readonly` | `boolean` | [`BaseSetDeviceData`](README.md#basesetdevicedata).`Power`             | [`BaseSetDeviceData`](README.md#basesetdevicedata).`Power`             |

---

### BaseListDevice

#### Extended by

- [`ListDeviceAta`](README.md#listdeviceata)
- [`ListDeviceAtw`](README.md#listdeviceatw)
- [`ListDeviceErv`](README.md#listdeviceerv)

#### Properties

| Property     | Modifier   | Type                                 |
| :----------- | :--------- | :----------------------------------- |
| `AreaID`     | `readonly` | `null` \| `number`                   |
| `BuildingID` | `readonly` | `number`                             |
| `DeviceID`   | `readonly` | `number`                             |
| `DeviceName` | `readonly` | `string`                             |
| `FloorID`    | `readonly` | `null` \| `number`                   |
| `Type`       | `readonly` | [`DeviceType`](README.md#devicetype) |

---

### BaseListDeviceData

#### Extends

- `Omit`\<[`BaseGetDeviceData`](README.md#basegetdevicedata), keyof [`DeviceDataNotInList`](README.md#devicedatanotinlist)\>

#### Extended by

- [`ListDeviceDataAta`](README.md#listdevicedataata)
- [`ListDeviceDataAtw`](README.md#listdevicedataatw)
- [`ListDeviceDataErv`](README.md#listdevicedataerv)

#### Properties

| Property             | Modifier   | Type      | Inherited from        |
| :------------------- | :--------- | :-------- | :-------------------- |
| `EffectiveFlags`     | `readonly` | `0`       | `Omit.EffectiveFlags` |
| `Offline`            | `readonly` | `boolean` | `Omit.Offline`        |
| `Power`              | `readonly` | `boolean` | `Omit.Power`          |
| `WifiSignalStrength` | `readonly` | `number`  | -                     |

---

### BaseSetDeviceData

#### Extends

- `Required`\<`Readonly`\<[`BaseUpdateDeviceData`](README.md#baseupdatedevicedata)\>\>.[`DeviceDataNotInList`](README.md#devicedatanotinlist)

#### Extended by

- [`BaseGetDeviceData`](README.md#basegetdevicedata)
- [`SetDeviceDataAta`](README.md#setdevicedataata)
- [`SetDeviceDataAtw`](README.md#setdevicedataatw)
- [`SetDeviceDataErv`](README.md#setdevicedataerv)

#### Properties

| Property            | Modifier   | Type      | Inherited from                                                             |
| :------------------ | :--------- | :-------- | :------------------------------------------------------------------------- |
| `EffectiveFlags`    | `readonly` | `number`  | `Required.EffectiveFlags`                                                  |
| `LastCommunication` | `readonly` | `string`  | [`DeviceDataNotInList`](README.md#devicedatanotinlist).`LastCommunication` |
| `NextCommunication` | `readonly` | `string`  | [`DeviceDataNotInList`](README.md#devicedatanotinlist).`NextCommunication` |
| `Offline`           | `readonly` | `boolean` | -                                                                          |
| `Power`             | `readonly` | `boolean` | `Required.Power`                                                           |

---

### BaseUpdateDeviceData

#### Extended by

- [`UpdateDeviceDataAta`](README.md#updatedevicedataata)
- [`UpdateDeviceDataAtw`](README.md#updatedevicedataatw)
- [`UpdateDeviceDataErv`](README.md#updatedevicedataerv)

#### Properties

| Property         | Modifier   | Type      |
| :--------------- | :--------- | :-------- |
| `EffectiveFlags` | `public`   | `number`  |
| `Power?`         | `readonly` | `boolean` |

---

### Building

#### Extends

- [`BuildingData`](README.md#buildingdata)

#### Properties

| Property            | Modifier   | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Inherited from                                              |
| :------------------ | :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------- |
| `FPDefined`         | `readonly` | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | [`BuildingData`](README.md#buildingdata).`FPDefined`        |
| `FPEnabled`         | `readonly` | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | [`BuildingData`](README.md#buildingdata).`FPEnabled`        |
| `FPMaxTemperature`  | `readonly` | `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | [`BuildingData`](README.md#buildingdata).`FPMaxTemperature` |
| `FPMinTemperature`  | `readonly` | `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | [`BuildingData`](README.md#buildingdata).`FPMinTemperature` |
| `HMDefined`         | `readonly` | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | [`BuildingData`](README.md#buildingdata).`HMDefined`        |
| `HMEnabled`         | `readonly` | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | [`BuildingData`](README.md#buildingdata).`HMEnabled`        |
| `HMEndDate`         | `readonly` | `null` \| `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | [`BuildingData`](README.md#buildingdata).`HMEndDate`        |
| `HMStartDate`       | `readonly` | `null` \| `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | [`BuildingData`](README.md#buildingdata).`HMStartDate`      |
| `ID`                | `readonly` | `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | [`BuildingData`](README.md#buildingdata).`ID`               |
| `Name`              | `readonly` | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | [`BuildingData`](README.md#buildingdata).`Name`             |
| `Structure`         | `readonly` | \{ `Areas`: readonly [`LocationData`](README.md#locationdata) & \{ `Devices`: readonly [`ListDeviceAny`](README.md#listdeviceany)[]; `FloorId`: `null`; \}[]; `Devices`: readonly [`ListDeviceAny`](README.md#listdeviceany)[]; `Floors`: readonly [`LocationData`](README.md#locationdata) & \{ `Areas`: readonly [`LocationData`](README.md#locationdata) & \{ `Devices`: readonly [`ListDeviceAny`](README.md#listdeviceany)[]; `FloorId`: `number`; \}[]; `Devices`: readonly [`ListDeviceAny`](README.md#listdeviceany)[]; \}[]; \} | -                                                           |
| `Structure.Areas`   | `readonly` | readonly [`LocationData`](README.md#locationdata) & \{ `Devices`: readonly [`ListDeviceAny`](README.md#listdeviceany)[]; `FloorId`: `null`; \}[]                                                                                                                                                                                                                                                                                                                                                                                         | -                                                           |
| `Structure.Devices` | `public`   | readonly [`ListDeviceAny`](README.md#listdeviceany)[]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | -                                                           |
| `Structure.Floors`  | `public`   | readonly [`LocationData`](README.md#locationdata) & \{ `Areas`: readonly [`LocationData`](README.md#locationdata) & \{ `Devices`: readonly [`ListDeviceAny`](README.md#listdeviceany)[]; `FloorId`: `number`; \}[]; `Devices`: readonly [`ListDeviceAny`](README.md#listdeviceany)[]; \}[]                                                                                                                                                                                                                                               | -                                                           |
| `TimeZone`          | `public`   | `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | [`BuildingData`](README.md#buildingdata).`TimeZone`         |

---

### BuildingData

#### Extends

- [`BuildingSettings`](README.md#buildingsettings)

#### Extended by

- [`Building`](README.md#building-3)

#### Properties

| Property           | Modifier   | Type               | Inherited from                                                      |
| :----------------- | :--------- | :----------------- | :------------------------------------------------------------------ |
| `FPDefined`        | `readonly` | `boolean`          | [`BuildingSettings`](README.md#buildingsettings).`FPDefined`        |
| `FPEnabled`        | `readonly` | `boolean`          | [`BuildingSettings`](README.md#buildingsettings).`FPEnabled`        |
| `FPMaxTemperature` | `readonly` | `number`           | [`BuildingSettings`](README.md#buildingsettings).`FPMaxTemperature` |
| `FPMinTemperature` | `readonly` | `number`           | [`BuildingSettings`](README.md#buildingsettings).`FPMinTemperature` |
| `HMDefined`        | `readonly` | `boolean`          | [`BuildingSettings`](README.md#buildingsettings).`HMDefined`        |
| `HMEnabled`        | `readonly` | `boolean`          | [`BuildingSettings`](README.md#buildingsettings).`HMEnabled`        |
| `HMEndDate`        | `readonly` | `null` \| `string` | [`BuildingSettings`](README.md#buildingsettings).`HMEndDate`        |
| `HMStartDate`      | `readonly` | `null` \| `string` | [`BuildingSettings`](README.md#buildingsettings).`HMStartDate`      |
| `ID`               | `readonly` | `number`           | -                                                                   |
| `Name`             | `readonly` | `string`           | -                                                                   |
| `TimeZone`         | `readonly` | `number`           | [`BuildingSettings`](README.md#buildingsettings).`TimeZone`         |

---

### BuildingSettings

#### Extends

- [`FrostProtectionData`](README.md#frostprotectiondata).`Omit`\<[`HolidayModeData`](README.md#holidaymodedata), `"EndDate"` \| `"StartDate"`\>

#### Extended by

- [`BuildingData`](README.md#buildingdata)

#### Properties

| Property           | Modifier   | Type               | Inherited from                                                            |
| :----------------- | :--------- | :----------------- | :------------------------------------------------------------------------ |
| `FPDefined`        | `readonly` | `boolean`          | [`FrostProtectionData`](README.md#frostprotectiondata).`FPDefined`        |
| `FPEnabled`        | `readonly` | `boolean`          | [`FrostProtectionData`](README.md#frostprotectiondata).`FPEnabled`        |
| `FPMaxTemperature` | `readonly` | `number`           | [`FrostProtectionData`](README.md#frostprotectiondata).`FPMaxTemperature` |
| `FPMinTemperature` | `readonly` | `number`           | [`FrostProtectionData`](README.md#frostprotectiondata).`FPMinTemperature` |
| `HMDefined`        | `readonly` | `boolean`          | `Omit.HMDefined`                                                          |
| `HMEnabled`        | `readonly` | `boolean`          | `Omit.HMEnabled`                                                          |
| `HMEndDate`        | `readonly` | `null` \| `string` | `Omit.HMEndDate`                                                          |
| `HMStartDate`      | `readonly` | `null` \| `string` | `Omit.HMStartDate`                                                        |
| `TimeZone`         | `readonly` | `number`           | `Omit.TimeZone`                                                           |

---

### DeviceDataNotInList

#### Extended by

- [`BaseSetDeviceData`](README.md#basesetdevicedata)

#### Properties

| Property            | Modifier   | Type     |
| :------------------ | :--------- | :------- |
| `LastCommunication` | `readonly` | `string` |
| `NextCommunication` | `readonly` | `string` |

---

### EffectiveFlags

#### Properties

| Property | Modifier   | Type                                                                                                                                          |
| :------- | :--------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| `Ata`    | `readonly` | `Record`\<[`NonEffectiveFlagsKeyOf`](README.md#noneffectiveflagskeyoft)\<[`UpdateDeviceDataAta`](README.md#updatedevicedataata)\>, `number`\> |
| `Atw`    | `readonly` | `Record`\<[`NonEffectiveFlagsKeyOf`](README.md#noneffectiveflagskeyoft)\<[`UpdateDeviceDataAtw`](README.md#updatedevicedataatw)\>, `number`\> |
| `Erv`    | `readonly` | `Record`\<[`NonEffectiveFlagsKeyOf`](README.md#noneffectiveflagskeyoft)\<[`UpdateDeviceDataErv`](README.md#updatedevicedataerv)\>, `number`\> |

---

### EnergyData

#### Properties

| Property | Modifier   | Type                                       |
| :------- | :--------- | :----------------------------------------- |
| `Ata`    | `readonly` | [`EnergyDataAta`](README.md#energydataata) |
| `Atw`    | `readonly` | [`EnergyDataAtw`](README.md#energydataatw) |
| `Erv`    | `readonly` | `never`                                    |

---

### EnergyDataAta

#### Properties

| Property                     | Modifier   | Type                |
| :--------------------------- | :--------- | :------------------ |
| `Auto`                       | `readonly` | readonly `number`[] |
| `Cooling`                    | `readonly` | readonly `number`[] |
| `Dry`                        | `readonly` | readonly `number`[] |
| `Fan`                        | `readonly` | readonly `number`[] |
| `Heating`                    | `readonly` | readonly `number`[] |
| `Other`                      | `readonly` | readonly `number`[] |
| `TotalAutoConsumed`          | `readonly` | `number`            |
| `TotalCoolingConsumed`       | `readonly` | `number`            |
| `TotalDryConsumed`           | `readonly` | `number`            |
| `TotalFanConsumed`           | `readonly` | `number`            |
| `TotalHeatingConsumed`       | `readonly` | `number`            |
| `TotalOtherConsumed`         | `readonly` | `number`            |
| `UsageDisclaimerPercentages` | `readonly` | `string`            |

---

### EnergyDataAtw

#### Properties

| Property                | Modifier   | Type                |
| :---------------------- | :--------- | :------------------ |
| `CoP`                   | `readonly` | readonly `number`[] |
| `TotalCoolingConsumed`  | `readonly` | `number`            |
| `TotalCoolingProduced`  | `readonly` | `number`            |
| `TotalHeatingConsumed`  | `readonly` | `number`            |
| `TotalHeatingProduced`  | `readonly` | `number`            |
| `TotalHotWaterConsumed` | `readonly` | `number`            |
| `TotalHotWaterProduced` | `readonly` | `number`            |

---

### EnergyPostData

#### Extends

- [`BaseDevicePostData`](README.md#basedevicepostdata)

#### Properties

| Property   | Modifier   | Type     | Inherited from                                                  |
| :--------- | :--------- | :------- | :-------------------------------------------------------------- |
| `DeviceID` | `readonly` | `number` | [`BaseDevicePostData`](README.md#basedevicepostdata).`DeviceID` |
| `FromDate` | `readonly` | `string` | -                                                               |
| `ToDate`   | `readonly` | `string` | -                                                               |

---

### ErrorData

#### Properties

| Property       | Modifier   | Type               |
| :------------- | :--------- | :----------------- |
| `DeviceId`     | `readonly` | `number`           |
| `EndDate`      | `readonly` | `string`           |
| `ErrorMessage` | `readonly` | `null` \| `string` |
| `StartDate`    | `readonly` | `string`           |

---

### ErrorPostData

#### Properties

| Property    | Modifier   | Type                |
| :---------- | :--------- | :------------------ |
| `DeviceIDs` | `readonly` | readonly `number`[] |
| `FromDate`  | `readonly` | `string`            |
| `ToDate`    | `readonly` | `string`            |

---

### FailureData

#### Properties

| Property          | Modifier   | Type                                      |
| :---------------- | :--------- | :---------------------------------------- |
| `AttributeErrors` | `readonly` | `Record`\<`string`, readonly `string`[]\> |
| `Success`         | `readonly` | `false`                                   |

---

### FrostProtectionData

#### Extended by

- [`BuildingSettings`](README.md#buildingsettings)

#### Properties

| Property           | Modifier   | Type      |
| :----------------- | :--------- | :-------- |
| `FPDefined`        | `readonly` | `boolean` |
| `FPEnabled`        | `readonly` | `boolean` |
| `FPMaxTemperature` | `readonly` | `number`  |
| `FPMinTemperature` | `readonly` | `number`  |

---

### FrostProtectionPostData

#### Properties

| Property             | Modifier   | Type                |
| :------------------- | :--------- | :------------------ |
| `AreaIds?`           | `readonly` | readonly `number`[] |
| `BuildingIds?`       | `readonly` | readonly `number`[] |
| `DeviceIds?`         | `readonly` | readonly `number`[] |
| `Enabled`            | `readonly` | `boolean`           |
| `FloorIds?`          | `readonly` | readonly `number`[] |
| `MaximumTemperature` | `readonly` | `number`            |
| `MinimumTemperature` | `readonly` | `number`            |

---

### GetDeviceData

#### Properties

| Property | Modifier   | Type                                             |
| :------- | :--------- | :----------------------------------------------- |
| `Ata`    | `readonly` | [`GetDeviceDataAta`](README.md#getdevicedataata) |
| `Atw`    | `readonly` | [`GetDeviceDataAtw`](README.md#getdevicedataatw) |
| `Erv`    | `readonly` | [`GetDeviceDataErv`](README.md#getdevicedataerv) |

---

### GetDeviceDataParams

#### Properties

| Property     | Modifier   | Type     |
| :----------- | :--------- | :------- |
| `buildingId` | `readonly` | `number` |
| `id`         | `readonly` | `number` |

---

### HolidayModeData

#### Properties

| Property           | Modifier   | Type                                                                                                                  |
| :----------------- | :--------- | :-------------------------------------------------------------------------------------------------------------------- |
| `EndDate`          | `readonly` | \{ `Day`: `number`; `Hour`: `number`; `Minute`: `number`; `Month`: `number`; `Second`: `number`; `Year`: `number`; \} |
| `EndDate.Day`      | `readonly` | `number`                                                                                                              |
| `EndDate.Hour`     | `readonly` | `number`                                                                                                              |
| `EndDate.Minute`   | `readonly` | `number`                                                                                                              |
| `EndDate.Month`    | `readonly` | `number`                                                                                                              |
| `EndDate.Second`   | `readonly` | `number`                                                                                                              |
| `EndDate.Year`     | `readonly` | `number`                                                                                                              |
| `HMDefined`        | `public`   | `boolean`                                                                                                             |
| `HMEnabled`        | `public`   | `boolean`                                                                                                             |
| `HMEndDate`        | `public`   | `null` \| `string`                                                                                                    |
| `HMStartDate`      | `public`   | `null` \| `string`                                                                                                    |
| `StartDate`        | `public`   | \{ `Day`: `number`; `Hour`: `number`; `Minute`: `number`; `Month`: `number`; `Second`: `number`; `Year`: `number`; \} |
| `StartDate.Day`    | `public`   | `number`                                                                                                              |
| `StartDate.Hour`   | `public`   | `number`                                                                                                              |
| `StartDate.Minute` | `public`   | `number`                                                                                                              |
| `StartDate.Month`  | `public`   | `number`                                                                                                              |
| `StartDate.Second` | `public`   | `number`                                                                                                              |
| `StartDate.Year`   | `public`   | `number`                                                                                                              |
| `TimeZone`         | `public`   | `number`                                                                                                              |

---

### HolidayModePostData

#### Properties

| Property      | Modifier   | Type                                                                                                                                                                  |
| :------------ | :--------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Enabled`     | `readonly` | `boolean`                                                                                                                                                             |
| `EndDate`     | `readonly` | `null` \| \{ `Day`: `number`; `Hour`: `number`; `Minute`: `number`; `Month`: `number`; `Second`: `number`; `Year`: `number`; \}                                       |
| `HMTimeZones` | `readonly` | readonly \{ `Areas`: readonly `number`[]; `Buildings`: readonly `number`[]; `Devices`: readonly `number`[]; `Floors`: readonly `number`[]; `TimeZone`: `number`; \}[] |
| `StartDate`   | `readonly` | `null` \| \{ `Day`: `number`; `Hour`: `number`; `Minute`: `number`; `Month`: `number`; `Second`: `number`; `Year`: `number`; \}                                       |

---

### IAreaFacade

#### Extends

- `IBaseFacade`.`IBaseSuperDeviceFacade`

#### Properties

| Property             | Type                                                                                                                                                                                                     | Inherited from                       |
| :------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------- |
| `getErrors`          | (`postData`: `Omit`\<[`ErrorPostData`](README.md#errorpostdata), `"DeviceIDs"`\>) => `Promise`\<[`FailureData`](README.md#failuredata) \| [`ErrorData`](README.md#errordata)[]\>                         | `IBaseFacade.getErrors`              |
| `getFrostProtection` | () => `Promise`\<[`FrostProtectionData`](README.md#frostprotectiondata)\>                                                                                                                                | `IBaseFacade.getFrostProtection`     |
| `getHolidayMode`     | () => `Promise`\<[`HolidayModeData`](README.md#holidaymodedata)\>                                                                                                                                        | `IBaseFacade.getHolidayMode`         |
| `getTiles`           | () => `Promise`\<[`TilesData`](README.md#tilesdatat)\<`null`\>\>                                                                                                                                         | `IBaseSuperDeviceFacade.getTiles`    |
| `setAtaGroup`        | (`postData`: `Omit`\<[`SetAtaGroupPostData`](README.md#setatagrouppostdata), `"Specification"`\>) => `Promise`\<[`SuccessData`](README.md#successdata) \| [`FailureData`](README.md#failuredata)\>       | `IBaseSuperDeviceFacade.setAtaGroup` |
| `setFrostProtection` | (`postData`: `Omit`\<[`FrostProtectionPostData`](README.md#frostprotectionpostdata), `"BuildingIds"`\>) => `Promise`\<[`SuccessData`](README.md#successdata) \| [`FailureData`](README.md#failuredata)\> | `IBaseFacade.setFrostProtection`     |
| `setHolidayMode`     | (`postData`: `Omit`\<[`HolidayModePostData`](README.md#holidaymodepostdata), `"HMTimeZones"`\>) => `Promise`\<[`SuccessData`](README.md#successdata) \| [`FailureData`](README.md#failuredata)\>         | `IBaseFacade.setHolidayMode`         |
| `setPower`           | (`postData`: `Omit`\<[`SetPowerPostData`](README.md#setpowerpostdata), `"DeviceIds"`\>) => `Promise`\<`boolean`\>                                                                                        | `IBaseFacade.setPower`               |

---

### IAreaModel

#### Extends

- `IBaseModel`.`IBaseSuperDeviceModel`.`IBaseSubBuildingModel`

#### Properties

| Property     | Modifier   | Type                                                 | Inherited from                     |
| :----------- | :--------- | :--------------------------------------------------- | :--------------------------------- |
| `building`   | `public`   | `null` \| [`BuildingModel`](README.md#buildingmodel) | `IBaseSubBuildingModel.building`   |
| `buildingId` | `readonly` | `number`                                             | `IBaseSubBuildingModel.buildingId` |
| `deviceIds`  | `public`   | `number`[]                                           | `IBaseSuperDeviceModel.deviceIds`  |
| `devices`    | `public`   | [`DeviceModelAny`](README.md#devicemodelany)[]       | `IBaseSuperDeviceModel.devices`    |
| `floor`      | `public`   | `null` \| [`FloorModel`](README.md#floormodel)       | -                                  |
| `floorId`    | `readonly` | `null` \| `number`                                   | -                                  |
| `id`         | `readonly` | `number`                                             | `IBaseModel.id`                    |
| `name`       | `readonly` | `string`                                             | `IBaseModel.name`                  |

---

### IBuildingFacade

#### Extends

- `IBaseFacade`.`IBaseSuperDeviceFacade`

#### Properties

| Property             | Type                                                                                                                                                                                                     | Inherited from                       |
| :------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------- |
| `fetch`              | () => `Promise`\<[`BuildingSettings`](README.md#buildingsettings)\>                                                                                                                                      | -                                    |
| `getErrors`          | (`postData`: `Omit`\<[`ErrorPostData`](README.md#errorpostdata), `"DeviceIDs"`\>) => `Promise`\<[`FailureData`](README.md#failuredata) \| [`ErrorData`](README.md#errordata)[]\>                         | `IBaseFacade.getErrors`              |
| `getFrostProtection` | () => `Promise`\<[`FrostProtectionData`](README.md#frostprotectiondata)\>                                                                                                                                | `IBaseFacade.getFrostProtection`     |
| `getHolidayMode`     | () => `Promise`\<[`HolidayModeData`](README.md#holidaymodedata)\>                                                                                                                                        | `IBaseFacade.getHolidayMode`         |
| `getTiles`           | () => `Promise`\<[`TilesData`](README.md#tilesdatat)\<`null`\>\>                                                                                                                                         | `IBaseSuperDeviceFacade.getTiles`    |
| `setAtaGroup`        | (`postData`: `Omit`\<[`SetAtaGroupPostData`](README.md#setatagrouppostdata), `"Specification"`\>) => `Promise`\<[`SuccessData`](README.md#successdata) \| [`FailureData`](README.md#failuredata)\>       | `IBaseSuperDeviceFacade.setAtaGroup` |
| `setFrostProtection` | (`postData`: `Omit`\<[`FrostProtectionPostData`](README.md#frostprotectionpostdata), `"BuildingIds"`\>) => `Promise`\<[`SuccessData`](README.md#successdata) \| [`FailureData`](README.md#failuredata)\> | `IBaseFacade.setFrostProtection`     |
| `setHolidayMode`     | (`postData`: `Omit`\<[`HolidayModePostData`](README.md#holidaymodepostdata), `"HMTimeZones"`\>) => `Promise`\<[`SuccessData`](README.md#successdata) \| [`FailureData`](README.md#failuredata)\>         | `IBaseFacade.setHolidayMode`         |
| `setPower`           | (`postData`: `Omit`\<[`SetPowerPostData`](README.md#setpowerpostdata), `"DeviceIds"`\>) => `Promise`\<`boolean`\>                                                                                        | `IBaseFacade.setPower`               |

---

### IBuildingModel

#### Extends

- `IBaseModel`.`IBaseSuperDeviceModel`

#### Properties

| Property    | Modifier   | Type                                             | Inherited from                    |
| :---------- | :--------- | :----------------------------------------------- | :-------------------------------- |
| `data`      | `readonly` | [`BuildingSettings`](README.md#buildingsettings) | -                                 |
| `deviceIds` | `public`   | `number`[]                                       | `IBaseSuperDeviceModel.deviceIds` |
| `devices`   | `public`   | [`DeviceModelAny`](README.md#devicemodelany)[]   | `IBaseSuperDeviceModel.devices`   |
| `id`        | `readonly` | `number`                                         | `IBaseModel.id`                   |
| `name`      | `readonly` | `string`                                         | `IBaseModel.name`                 |

---

### IDeviceFacade\<T\>

#### Extends

- `IBaseFacade`

#### Type parameters

| Type parameter                                                    |
| :---------------------------------------------------------------- |
| `T` _extends_ keyof _typeof_ [`DeviceType`](README.md#devicetype) |

#### Properties

| Property             | Type                                                                                                                                                                                                     | Inherited from                   |
| :------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------- |
| `fetch`              | () => `Promise`\<[`ListDevice`](README.md#listdevice)\[`T`\]\[`"Device"`\]\>                                                                                                                             | -                                |
| `get`                | () => `Promise`\<[`GetDeviceData`](README.md#getdevicedata)\[`T`\]\>                                                                                                                                     | -                                |
| `getEnergyReport`    | (`postData`: `Omit`\<[`EnergyPostData`](README.md#energypostdata), `"DeviceID"`\>) => `Promise`\<[`EnergyData`](README.md#energydata)\[`T`\]\>                                                           | -                                |
| `getErrors`          | (`postData`: `Omit`\<[`ErrorPostData`](README.md#errorpostdata), `"DeviceIDs"`\>) => `Promise`\<[`FailureData`](README.md#failuredata) \| [`ErrorData`](README.md#errordata)[]\>                         | `IBaseFacade.getErrors`          |
| `getFrostProtection` | () => `Promise`\<[`FrostProtectionData`](README.md#frostprotectiondata)\>                                                                                                                                | `IBaseFacade.getFrostProtection` |
| `getHolidayMode`     | () => `Promise`\<[`HolidayModeData`](README.md#holidaymodedata)\>                                                                                                                                        | `IBaseFacade.getHolidayMode`     |
| `getTile`            | (`select`?: `false`) => `Promise`\<[`TilesData`](README.md#tilesdatat)\<`null`\>\> & (`select`: `true`) => `Promise`\<[`TilesData`](README.md#tilesdatat)\<`T`\>\>                                       | -                                |
| `set`                | (`postData`: `Omit`\<[`SetDevicePostData`](README.md#setdevicepostdata)\[`T`\], `"DeviceID"`\>) => `Promise`\<[`SetDeviceData`](README.md#setdevicedata)\[`T`\]\>                                        | -                                |
| `setFrostProtection` | (`postData`: `Omit`\<[`FrostProtectionPostData`](README.md#frostprotectionpostdata), `"BuildingIds"`\>) => `Promise`\<[`SuccessData`](README.md#successdata) \| [`FailureData`](README.md#failuredata)\> | `IBaseFacade.setFrostProtection` |
| `setHolidayMode`     | (`postData`: `Omit`\<[`HolidayModePostData`](README.md#holidaymodepostdata), `"HMTimeZones"`\>) => `Promise`\<[`SuccessData`](README.md#successdata) \| [`FailureData`](README.md#failuredata)\>         | `IBaseFacade.setHolidayMode`     |
| `setPower`           | (`postData`: `Omit`\<[`SetPowerPostData`](README.md#setpowerpostdata), `"DeviceIds"`\>) => `Promise`\<`boolean`\>                                                                                        | `IBaseFacade.setPower`           |

---

### IDeviceModel\<T\>

#### Extends

- `IBaseModel`.`IBaseSubBuildingModel`

#### Type parameters

| Type parameter                                                    |
| :---------------------------------------------------------------- |
| `T` _extends_ keyof _typeof_ [`DeviceType`](README.md#devicetype) |

#### Properties

| Property     | Modifier   | Type                                                      | Inherited from                     |
| :----------- | :--------- | :-------------------------------------------------------- | :--------------------------------- |
| `area`       | `public`   | `null` \| [`AreaModel`](README.md#areamodel)              | -                                  |
| `areaId`     | `readonly` | `null` \| `number`                                        | -                                  |
| `building`   | `public`   | `null` \| [`BuildingModel`](README.md#buildingmodel)      | `IBaseSubBuildingModel.building`   |
| `buildingId` | `readonly` | `number`                                                  | `IBaseSubBuildingModel.buildingId` |
| `data`       | `readonly` | [`ListDevice`](README.md#listdevice)\[`T`\]\[`"Device"`\] | -                                  |
| `floor`      | `public`   | `null` \| [`FloorModel`](README.md#floormodel)            | -                                  |
| `floorId`    | `readonly` | `null` \| `number`                                        | -                                  |
| `id`         | `readonly` | `number`                                                  | `IBaseModel.id`                    |
| `name`       | `readonly` | `string`                                                  | `IBaseModel.name`                  |
| `type`       | `readonly` | `T`                                                       | -                                  |

---

### IFloorFacade

#### Extends

- `IBaseFacade`.`IBaseSuperDeviceFacade`

#### Properties

| Property             | Type                                                                                                                                                                                                     | Inherited from                       |
| :------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------- |
| `getErrors`          | (`postData`: `Omit`\<[`ErrorPostData`](README.md#errorpostdata), `"DeviceIDs"`\>) => `Promise`\<[`FailureData`](README.md#failuredata) \| [`ErrorData`](README.md#errordata)[]\>                         | `IBaseFacade.getErrors`              |
| `getFrostProtection` | () => `Promise`\<[`FrostProtectionData`](README.md#frostprotectiondata)\>                                                                                                                                | `IBaseFacade.getFrostProtection`     |
| `getHolidayMode`     | () => `Promise`\<[`HolidayModeData`](README.md#holidaymodedata)\>                                                                                                                                        | `IBaseFacade.getHolidayMode`         |
| `getTiles`           | () => `Promise`\<[`TilesData`](README.md#tilesdatat)\<`null`\>\>                                                                                                                                         | `IBaseSuperDeviceFacade.getTiles`    |
| `setAtaGroup`        | (`postData`: `Omit`\<[`SetAtaGroupPostData`](README.md#setatagrouppostdata), `"Specification"`\>) => `Promise`\<[`SuccessData`](README.md#successdata) \| [`FailureData`](README.md#failuredata)\>       | `IBaseSuperDeviceFacade.setAtaGroup` |
| `setFrostProtection` | (`postData`: `Omit`\<[`FrostProtectionPostData`](README.md#frostprotectionpostdata), `"BuildingIds"`\>) => `Promise`\<[`SuccessData`](README.md#successdata) \| [`FailureData`](README.md#failuredata)\> | `IBaseFacade.setFrostProtection`     |
| `setHolidayMode`     | (`postData`: `Omit`\<[`HolidayModePostData`](README.md#holidaymodepostdata), `"HMTimeZones"`\>) => `Promise`\<[`SuccessData`](README.md#successdata) \| [`FailureData`](README.md#failuredata)\>         | `IBaseFacade.setHolidayMode`         |
| `setPower`           | (`postData`: `Omit`\<[`SetPowerPostData`](README.md#setpowerpostdata), `"DeviceIds"`\>) => `Promise`\<`boolean`\>                                                                                        | `IBaseFacade.setPower`               |

---

### IFloorModel

#### Extends

- `IBaseModel`.`IBaseSuperDeviceModel`.`IBaseSubBuildingModel`

#### Properties

| Property     | Modifier   | Type                                                 | Inherited from                     |
| :----------- | :--------- | :--------------------------------------------------- | :--------------------------------- |
| `areaIds`    | `public`   | `number`[]                                           | -                                  |
| `areas`      | `public`   | [`AreaModel`](README.md#areamodel)[]                 | -                                  |
| `building`   | `public`   | `null` \| [`BuildingModel`](README.md#buildingmodel) | `IBaseSubBuildingModel.building`   |
| `buildingId` | `readonly` | `number`                                             | `IBaseSubBuildingModel.buildingId` |
| `deviceIds`  | `public`   | `number`[]                                           | `IBaseSuperDeviceModel.deviceIds`  |
| `devices`    | `public`   | [`DeviceModelAny`](README.md#devicemodelany)[]       | `IBaseSuperDeviceModel.devices`    |
| `id`         | `readonly` | `number`                                             | `IBaseModel.id`                    |
| `name`       | `readonly` | `string`                                             | `IBaseModel.name`                  |

---

### IMELCloudAPI

#### Properties

| Property             | Type                                                                                                                                                                                                                                                                                                                                                         |
| :------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `applyLogin`         | (`data`?: [`LoginCredentials`](README.md#logincredentials), `onSuccess`?: () => `Promise`\<`void`\>) => `Promise`\<`boolean`\>                                                                                                                                                                                                                               |
| `fetchDevices`       | () => `Promise`\<\{ `data`: [`Building`](README.md#building-3)[]; \}\>                                                                                                                                                                                                                                                                                       |
| `getDevice`          | \<`T`\>(`__namedParameters`: \{ `params`: [`GetDeviceDataParams`](README.md#getdevicedataparams); \}) => `Promise`\<\{ `data`: [`GetDeviceData`](README.md#getdevicedata)\[`T`\]; \}\>                                                                                                                                                                       |
| `getEnergyReport`    | \<`T`\>(`__namedParameters`: \{ `postData`: [`EnergyPostData`](README.md#energypostdata); \}) => `Promise`\<\{ `data`: [`EnergyData`](README.md#energydata)\[`T`\]; \}\>                                                                                                                                                                                     |
| `getErrors`          | (`__namedParameters`: \{ `postData`: [`ErrorPostData`](README.md#errorpostdata); \}) => `Promise`\<\{ `data`: [`FailureData`](README.md#failuredata) \| [`ErrorData`](README.md#errordata)[]; \}\>                                                                                                                                                           |
| `getFrostProtection` | (`__namedParameters`: \{ `params`: [`SettingsParams`](README.md#settingsparams); \}) => `Promise`\<\{ `data`: [`FrostProtectionData`](README.md#frostprotectiondata); \}\>                                                                                                                                                                                   |
| `getHolidayMode`     | (`__namedParameters`: \{ `params`: [`SettingsParams`](README.md#settingsparams); \}) => `Promise`\<\{ `data`: [`HolidayModeData`](README.md#holidaymodedata); \}\>                                                                                                                                                                                           |
| `getTiles`           | (`__namedParameters`: \{ `postData`: [`TilesPostData`](README.md#tilespostdatat)\<`null`\>; \}) => `Promise`\<\{ `data`: [`TilesData`](README.md#tilesdatat)\<`null`\>; \}\> & \<`T`\>(`__namedParameters`: \{ `postData`: [`TilesPostData`](README.md#tilespostdatat)\<`T`\>; \}) => `Promise`\<\{ `data`: [`TilesData`](README.md#tilesdatat)\<`T`\>; \}\> |
| `language`           | [`Language`](README.md#language)                                                                                                                                                                                                                                                                                                                             |
| `login`              | (`__namedParameters`: \{ `postData`: [`LoginPostData`](README.md#loginpostdata); \}) => `Promise`\<\{ `data`: [`LoginData`](README.md#logindata); \}\>                                                                                                                                                                                                       |
| `setAtaGroup`        | (`__namedParameters`: \{ `postData`: [`SetAtaGroupPostData`](README.md#setatagrouppostdata); \}) => `Promise`\<\{ `data`: [`SuccessData`](README.md#successdata) \| [`FailureData`](README.md#failuredata); \}\>                                                                                                                                             |
| `setDevice`          | \<`T`\>(`__namedParameters`: \{ `heatPumpType`: `T`; `postData`: [`SetDevicePostData`](README.md#setdevicepostdata)\[`T`\]; \}) => `Promise`\<\{ `data`: [`SetDeviceData`](README.md#setdevicedata)\[`T`\]; \}\>                                                                                                                                             |
| `setFrostProtection` | (`__namedParameters`: \{ `postData`: [`FrostProtectionPostData`](README.md#frostprotectionpostdata); \}) => `Promise`\<\{ `data`: [`SuccessData`](README.md#successdata) \| [`FailureData`](README.md#failuredata); \}\>                                                                                                                                     |
| `setHolidayMode`     | (`__namedParameters`: \{ `postData`: [`HolidayModePostData`](README.md#holidaymodepostdata); \}) => `Promise`\<\{ `data`: [`SuccessData`](README.md#successdata) \| [`FailureData`](README.md#failuredata); \}\>                                                                                                                                             |
| `setLanguage`        | (`__namedParameters`: \{ `postData`: \{ `language`: [`Language`](README.md#language); \}; \}) => `Promise`\<\{ `data`: `boolean`; \}\>                                                                                                                                                                                                                       |
| `setPower`           | (`__namedParameters`: \{ `postData`: [`SetPowerPostData`](README.md#setpowerpostdata); \}) => `Promise`\<\{ `data`: `boolean`; \}\>                                                                                                                                                                                                                          |

---

### ListDevice

#### Properties

| Property | Modifier   | Type                                       |
| :------- | :--------- | :----------------------------------------- |
| `Ata`    | `readonly` | [`ListDeviceAta`](README.md#listdeviceata) |
| `Atw`    | `readonly` | [`ListDeviceAtw`](README.md#listdeviceatw) |
| `Erv`    | `readonly` | [`ListDeviceErv`](README.md#listdeviceerv) |

---

### ListDeviceAta

#### Extends

- [`BaseListDevice`](README.md#baselistdevice)

#### Properties

| Property     | Modifier   | Type                                               | Inherited from                                            |
| :----------- | :--------- | :------------------------------------------------- | :-------------------------------------------------------- |
| `AreaID`     | `readonly` | `null` \| `number`                                 | [`BaseListDevice`](README.md#baselistdevice).`AreaID`     |
| `BuildingID` | `readonly` | `number`                                           | [`BaseListDevice`](README.md#baselistdevice).`BuildingID` |
| `Device`     | `readonly` | [`ListDeviceDataAta`](README.md#listdevicedataata) | -                                                         |
| `DeviceID`   | `readonly` | `number`                                           | [`BaseListDevice`](README.md#baselistdevice).`DeviceID`   |
| `DeviceName` | `readonly` | `string`                                           | [`BaseListDevice`](README.md#baselistdevice).`DeviceName` |
| `FloorID`    | `readonly` | `null` \| `number`                                 | [`BaseListDevice`](README.md#baselistdevice).`FloorID`    |
| `Type`       | `readonly` | [`DeviceType`](README.md#devicetype)               | [`BaseListDevice`](README.md#baselistdevice).`Type`       |

---

### ListDeviceAtw

#### Extends

- [`BaseListDevice`](README.md#baselistdevice)

#### Properties

| Property     | Modifier   | Type                                               | Inherited from                                            |
| :----------- | :--------- | :------------------------------------------------- | :-------------------------------------------------------- |
| `AreaID`     | `readonly` | `null` \| `number`                                 | [`BaseListDevice`](README.md#baselistdevice).`AreaID`     |
| `BuildingID` | `readonly` | `number`                                           | [`BaseListDevice`](README.md#baselistdevice).`BuildingID` |
| `Device`     | `readonly` | [`ListDeviceDataAtw`](README.md#listdevicedataatw) | -                                                         |
| `DeviceID`   | `readonly` | `number`                                           | [`BaseListDevice`](README.md#baselistdevice).`DeviceID`   |
| `DeviceName` | `readonly` | `string`                                           | [`BaseListDevice`](README.md#baselistdevice).`DeviceName` |
| `FloorID`    | `readonly` | `null` \| `number`                                 | [`BaseListDevice`](README.md#baselistdevice).`FloorID`    |
| `Type`       | `readonly` | [`DeviceType`](README.md#devicetype)               | [`BaseListDevice`](README.md#baselistdevice).`Type`       |

---

### ListDeviceDataAta

#### Extends

- [`BaseListDeviceData`](README.md#baselistdevicedata).`Omit`\<[`GetDeviceDataAta`](README.md#getdevicedataata), keyof [`DeviceDataNotInList`](README.md#devicedatanotinlist) \| `"SetFanSpeed"` \| `"VaneHorizontal"` \| `"VaneVertical"`\>

#### Properties

| Property                  | Modifier   | Type                                       | Inherited from                                                            |
| :------------------------ | :--------- | :----------------------------------------- | :------------------------------------------------------------------------ |
| `ActualFanSpeed`          | `readonly` | `number`                                   | -                                                                         |
| `DeviceType`              | `readonly` | `Ata`                                      | `Omit.DeviceType`                                                         |
| `EffectiveFlags`          | `readonly` | `0`                                        | [`BaseListDeviceData`](README.md#baselistdevicedata).`EffectiveFlags`     |
| `FanSpeed`                | `readonly` | [`FanSpeed`](README.md#fanspeed)           | -                                                                         |
| `HasAutomaticFanSpeed`    | `readonly` | `boolean`                                  | -                                                                         |
| `MaxTempAutomatic`        | `readonly` | `number`                                   | -                                                                         |
| `MaxTempCoolDry`          | `readonly` | `number`                                   | -                                                                         |
| `MaxTempHeat`             | `readonly` | `number`                                   | -                                                                         |
| `MinTempAutomatic`        | `readonly` | `number`                                   | -                                                                         |
| `MinTempCoolDry`          | `readonly` | `number`                                   | -                                                                         |
| `MinTempHeat`             | `readonly` | `number`                                   | -                                                                         |
| `NumberOfFanSpeeds`       | `readonly` | `number`                                   | `Omit.NumberOfFanSpeeds`                                                  |
| `Offline`                 | `readonly` | `boolean`                                  | [`BaseListDeviceData`](README.md#baselistdevicedata).`Offline`            |
| `OperationMode`           | `readonly` | [`OperationMode`](README.md#operationmode) | `Omit.OperationMode`                                                      |
| `OutdoorTemperature`      | `readonly` | `number`                                   | -                                                                         |
| `Power`                   | `readonly` | `boolean`                                  | [`BaseListDeviceData`](README.md#baselistdevicedata).`Power`              |
| `RoomTemperature`         | `readonly` | `number`                                   | `Omit.RoomTemperature`                                                    |
| `SetTemperature`          | `readonly` | `number`                                   | `Omit.SetTemperature`                                                     |
| `VaneHorizontalDirection` | `readonly` | [`Horizontal`](README.md#horizontal)       | -                                                                         |
| `VaneVerticalDirection`   | `readonly` | [`Vertical`](README.md#vertical)           | -                                                                         |
| `WifiSignalStrength`      | `readonly` | `number`                                   | [`BaseListDeviceData`](README.md#baselistdevicedata).`WifiSignalStrength` |

---

### ListDeviceDataAtw

#### Extends

- [`BaseListDeviceData`](README.md#baselistdevicedata).`Omit`\<[`GetDeviceDataAtw`](README.md#getdevicedataatw), keyof [`DeviceDataNotInList`](README.md#devicedatanotinlist)\>

#### Properties

| Property                       | Modifier   | Type                                                 | Inherited from                                                            |
| :----------------------------- | :--------- | :--------------------------------------------------- | :------------------------------------------------------------------------ |
| `BoosterHeater1Status`         | `readonly` | `boolean`                                            | -                                                                         |
| `BoosterHeater2PlusStatus`     | `readonly` | `boolean`                                            | -                                                                         |
| `BoosterHeater2Status`         | `readonly` | `boolean`                                            | -                                                                         |
| `CanCool`                      | `readonly` | `boolean`                                            | -                                                                         |
| `CondensingTemperature`        | `readonly` | `number`                                             | -                                                                         |
| `CurrentEnergyConsumed`        | `readonly` | `number`                                             | -                                                                         |
| `CurrentEnergyProduced`        | `readonly` | `number`                                             | -                                                                         |
| `DefrostMode`                  | `readonly` | `number`                                             | -                                                                         |
| `DeviceType`                   | `readonly` | `Atw`                                                | `Omit.DeviceType`                                                         |
| `EcoHotWater`                  | `readonly` | `boolean`                                            | -                                                                         |
| `EffectiveFlags`               | `readonly` | `0`                                                  | [`BaseListDeviceData`](README.md#baselistdevicedata).`EffectiveFlags`     |
| `FlowTemperature`              | `readonly` | `number`                                             | -                                                                         |
| `FlowTemperatureZone1`         | `readonly` | `number`                                             | -                                                                         |
| `FlowTemperatureZone2`         | `readonly` | `number`                                             | -                                                                         |
| `ForcedHotWaterMode`           | `readonly` | `boolean`                                            | `Omit.ForcedHotWaterMode`                                                 |
| `HasZone2`                     | `readonly` | `boolean`                                            | -                                                                         |
| `HeatPumpFrequency`            | `readonly` | `number`                                             | -                                                                         |
| `IdleZone1`                    | `readonly` | `boolean`                                            | `Omit.IdleZone1`                                                          |
| `IdleZone2`                    | `readonly` | `boolean`                                            | `Omit.IdleZone2`                                                          |
| `ImmersionHeaterStatus`        | `readonly` | `boolean`                                            | -                                                                         |
| `LastLegionellaActivationTime` | `readonly` | `string`                                             | -                                                                         |
| `MaxTankTemperature`           | `readonly` | `number`                                             | -                                                                         |
| `MixingTankWaterTemperature`   | `readonly` | `number`                                             | -                                                                         |
| `Offline`                      | `readonly` | `boolean`                                            | [`BaseListDeviceData`](README.md#baselistdevicedata).`Offline`            |
| `OperationMode`                | `readonly` | [`OperationModeState`](README.md#operationmodestate) | `Omit.OperationMode`                                                      |
| `OperationModeZone1`           | `readonly` | [`OperationModeZone`](README.md#operationmodezone)   | `Omit.OperationModeZone1`                                                 |
| `OperationModeZone2`           | `readonly` | [`OperationModeZone`](README.md#operationmodezone)   | `Omit.OperationModeZone2`                                                 |
| `OutdoorTemperature`           | `readonly` | `number`                                             | `Omit.OutdoorTemperature`                                                 |
| `Power`                        | `readonly` | `boolean`                                            | [`BaseListDeviceData`](README.md#baselistdevicedata).`Power`              |
| `ProhibitCoolingZone1`         | `readonly` | `boolean`                                            | `Omit.ProhibitCoolingZone1`                                               |
| `ProhibitCoolingZone2`         | `readonly` | `boolean`                                            | `Omit.ProhibitCoolingZone2`                                               |
| `ProhibitHeatingZone1`         | `readonly` | `boolean`                                            | `Omit.ProhibitHeatingZone1`                                               |
| `ProhibitHeatingZone2`         | `readonly` | `boolean`                                            | `Omit.ProhibitHeatingZone2`                                               |
| `ProhibitHotWater`             | `readonly` | `boolean`                                            | `Omit.ProhibitHotWater`                                                   |
| `ReturnTemperature`            | `readonly` | `number`                                             | -                                                                         |
| `ReturnTemperatureZone1`       | `readonly` | `number`                                             | -                                                                         |
| `ReturnTemperatureZone2`       | `readonly` | `number`                                             | -                                                                         |
| `RoomTemperatureZone1`         | `readonly` | `number`                                             | `Omit.RoomTemperatureZone1`                                               |
| `RoomTemperatureZone2`         | `readonly` | `number`                                             | `Omit.RoomTemperatureZone2`                                               |
| `SetCoolFlowTemperatureZone1`  | `readonly` | `number`                                             | `Omit.SetCoolFlowTemperatureZone1`                                        |
| `SetCoolFlowTemperatureZone2`  | `readonly` | `number`                                             | `Omit.SetCoolFlowTemperatureZone2`                                        |
| `SetHeatFlowTemperatureZone1`  | `readonly` | `number`                                             | `Omit.SetHeatFlowTemperatureZone1`                                        |
| `SetHeatFlowTemperatureZone2`  | `readonly` | `number`                                             | `Omit.SetHeatFlowTemperatureZone2`                                        |
| `SetTankWaterTemperature`      | `readonly` | `number`                                             | `Omit.SetTankWaterTemperature`                                            |
| `SetTemperatureZone1`          | `readonly` | `number`                                             | `Omit.SetTemperatureZone1`                                                |
| `SetTemperatureZone2`          | `readonly` | `number`                                             | `Omit.SetTemperatureZone2`                                                |
| `TankWaterTemperature`         | `readonly` | `number`                                             | `Omit.TankWaterTemperature`                                               |
| `TargetHCTemperatureZone1`     | `readonly` | `number`                                             | -                                                                         |
| `TargetHCTemperatureZone2`     | `readonly` | `number`                                             | -                                                                         |
| `WifiSignalStrength`           | `readonly` | `number`                                             | [`BaseListDeviceData`](README.md#baselistdevicedata).`WifiSignalStrength` |
| `Zone1InCoolMode`              | `readonly` | `boolean`                                            | -                                                                         |
| `Zone1InHeatMode`              | `readonly` | `boolean`                                            | -                                                                         |
| `Zone2InCoolMode`              | `readonly` | `boolean`                                            | -                                                                         |
| `Zone2InHeatMode`              | `readonly` | `boolean`                                            | -                                                                         |

---

### ListDeviceDataErv

#### Extends

- [`BaseListDeviceData`](README.md#baselistdevicedata).`Omit`\<[`GetDeviceDataErv`](README.md#getdevicedataerv), keyof [`DeviceDataNotInList`](README.md#devicedatanotinlist)\>

#### Properties

| Property               | Modifier   | Type                                                                      | Inherited from                                                            |
| :--------------------- | :--------- | :------------------------------------------------------------------------ | :------------------------------------------------------------------------ |
| `DeviceType`           | `readonly` | `Erv`                                                                     | `Omit.DeviceType`                                                         |
| `EffectiveFlags`       | `readonly` | `0`                                                                       | [`BaseListDeviceData`](README.md#baselistdevicedata).`EffectiveFlags`     |
| `HasAutomaticFanSpeed` | `readonly` | `boolean`                                                                 | -                                                                         |
| `HasCO2Sensor`         | `readonly` | `boolean`                                                                 | -                                                                         |
| `HasPM25Sensor`        | `readonly` | `boolean`                                                                 | -                                                                         |
| `NumberOfFanSpeeds`    | `readonly` | `number`                                                                  | `Omit.NumberOfFanSpeeds`                                                  |
| `Offline`              | `readonly` | `boolean`                                                                 | [`BaseListDeviceData`](README.md#baselistdevicedata).`Offline`            |
| `OutdoorTemperature`   | `readonly` | `number`                                                                  | `Omit.OutdoorTemperature`                                                 |
| `PM25Level`            | `readonly` | `number`                                                                  | -                                                                         |
| `Power`                | `readonly` | `boolean`                                                                 | [`BaseListDeviceData`](README.md#baselistdevicedata).`Power`              |
| `RoomCO2Level`         | `readonly` | `number`                                                                  | `Omit.RoomCO2Level`                                                       |
| `RoomTemperature`      | `readonly` | `number`                                                                  | `Omit.RoomTemperature`                                                    |
| `SetFanSpeed`          | `readonly` | \| `auto` \| `very_slow` \| `slow` \| `moderate` \| `fast` \| `very_fast` | `Omit.SetFanSpeed`                                                        |
| `VentilationMode`      | `readonly` | [`VentilationMode`](README.md#ventilationmode)                            | `Omit.VentilationMode`                                                    |
| `WifiSignalStrength`   | `readonly` | `number`                                                                  | [`BaseListDeviceData`](README.md#baselistdevicedata).`WifiSignalStrength` |

---

### ListDeviceErv

#### Extends

- [`BaseListDevice`](README.md#baselistdevice)

#### Properties

| Property     | Modifier   | Type                                               | Inherited from                                            |
| :----------- | :--------- | :------------------------------------------------- | :-------------------------------------------------------- |
| `AreaID`     | `readonly` | `null` \| `number`                                 | [`BaseListDevice`](README.md#baselistdevice).`AreaID`     |
| `BuildingID` | `readonly` | `number`                                           | [`BaseListDevice`](README.md#baselistdevice).`BuildingID` |
| `Device`     | `readonly` | [`ListDeviceDataErv`](README.md#listdevicedataerv) | -                                                         |
| `DeviceID`   | `readonly` | `number`                                           | [`BaseListDevice`](README.md#baselistdevice).`DeviceID`   |
| `DeviceName` | `readonly` | `string`                                           | [`BaseListDevice`](README.md#baselistdevice).`DeviceName` |
| `FloorID`    | `readonly` | `null` \| `number`                                 | [`BaseListDevice`](README.md#baselistdevice).`FloorID`    |
| `Type`       | `readonly` | [`DeviceType`](README.md#devicetype)               | [`BaseListDevice`](README.md#baselistdevice).`Type`       |

---

### LocationData

#### Properties

| Property     | Modifier   | Type     |
| :----------- | :--------- | :------- |
| `BuildingId` | `readonly` | `number` |
| `ID`         | `readonly` | `number` |
| `Name`       | `readonly` | `string` |

---

### Logger

#### Properties

| Property | Modifier   | Type                                                                                      |
| :------- | :--------- | :---------------------------------------------------------------------------------------- |
| `error`  | `readonly` | (...`data`: `any`[]) => `void`(`message`?: `any`, ...`optionalParams`: `any`[]) => `void` |
| `log`    | `readonly` | (...`data`: `any`[]) => `void`(`message`?: `any`, ...`optionalParams`: `any`[]) => `void` |

---

### LoginCredentials

#### Properties

| Property   | Modifier   | Type     |
| :--------- | :--------- | :------- |
| `password` | `readonly` | `string` |
| `username` | `readonly` | `string` |

---

### LoginData

#### Properties

| Property    | Modifier   | Type                                                        |
| :---------- | :--------- | :---------------------------------------------------------- |
| `LoginData` | `readonly` | `null` \| \{ `ContextKey`: `string`; `Expiry`: `string`; \} |

---

### LoginPostData

#### Properties

| Property     | Modifier   | Type      |
| :----------- | :--------- | :-------- |
| `AppVersion` | `readonly` | `string`  |
| `Email`      | `readonly` | `string`  |
| `Language?`  | `readonly` | `number`  |
| `Password`   | `readonly` | `string`  |
| `Persist?`   | `readonly` | `boolean` |

---

### SetAtaGroupPostData

#### Properties

| Property                         | Modifier   | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| :------------------------------- | :--------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Specification`                  | `readonly` | \{ `AreaID`: `null`; `BuildingID`: `null`; `FloorID`: `number`; \} \| \{ `AreaID`: `null`; `BuildingID`: `number`; `FloorID`: `null`; \} \| \{ `AreaID`: `number`; `BuildingID`: `null`; `FloorID`: `null`; \}                                                                                                                                                                                                                                                                          |
| `State`                          | `readonly` | \{ `FanSpeed`: \| `null` \| `auto` \| `very_slow` \| `slow` \| `moderate` \| `fast` \| `very_fast`; `OperationMode`: `null` \| [`OperationMode`](README.md#operationmode); `Power`: `null` \| `boolean`; `SetTemperature`: `null` \| `number`; `VaneHorizontalDirection`: `null` \| [`Horizontal`](README.md#horizontal); `VaneHorizontalSwing`: `null` \| `boolean`; `VaneVerticalDirection`: `null` \| [`Vertical`](README.md#vertical); `VaneVerticalSwing`: `null` \| `boolean`; \} |
| `State.FanSpeed?`                | `public`   | \| `null` \| `auto` \| `very_slow` \| `slow` \| `moderate` \| `fast` \| `very_fast`                                                                                                                                                                                                                                                                                                                                                                                                     |
| `State.OperationMode?`           | `public`   | `null` \| [`OperationMode`](README.md#operationmode)                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `State.Power?`                   | `public`   | `null` \| `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `State.SetTemperature?`          | `public`   | `null` \| `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `State.VaneHorizontalDirection?` | `public`   | `null` \| [`Horizontal`](README.md#horizontal)                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `State.VaneHorizontalSwing?`     | `public`   | `null` \| `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `State.VaneVerticalDirection?`   | `public`   | `null` \| [`Vertical`](README.md#vertical)                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `State.VaneVerticalSwing?`       | `public`   | `null` \| `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

---

### SetDeviceData

#### Properties

| Property | Modifier   | Type                                             |
| :------- | :--------- | :----------------------------------------------- |
| `Ata`    | `readonly` | [`SetDeviceDataAta`](README.md#setdevicedataata) |
| `Atw`    | `readonly` | [`SetDeviceDataAtw`](README.md#setdevicedataatw) |
| `Erv`    | `readonly` | [`SetDeviceDataErv`](README.md#setdevicedataerv) |

---

### SetDeviceDataAta

#### Extends

- [`BaseSetDeviceData`](README.md#basesetdevicedata).`Required`\<`Readonly`\<[`UpdateDeviceDataAta`](README.md#updatedevicedataata)\>\>

#### Properties

| Property            | Modifier   | Type                                                                      | Inherited from                                                         |
| :------------------ | :--------- | :------------------------------------------------------------------------ | :--------------------------------------------------------------------- |
| `DeviceType`        | `readonly` | `Ata`                                                                     | -                                                                      |
| `EffectiveFlags`    | `readonly` | `number`                                                                  | [`BaseSetDeviceData`](README.md#basesetdevicedata).`EffectiveFlags`    |
| `LastCommunication` | `readonly` | `string`                                                                  | [`BaseSetDeviceData`](README.md#basesetdevicedata).`LastCommunication` |
| `NextCommunication` | `readonly` | `string`                                                                  | [`BaseSetDeviceData`](README.md#basesetdevicedata).`NextCommunication` |
| `NumberOfFanSpeeds` | `readonly` | `number`                                                                  | -                                                                      |
| `Offline`           | `readonly` | `boolean`                                                                 | [`BaseSetDeviceData`](README.md#basesetdevicedata).`Offline`           |
| `OperationMode`     | `readonly` | [`OperationMode`](README.md#operationmode)                                | `Required.OperationMode`                                               |
| `Power`             | `readonly` | `boolean`                                                                 | [`BaseSetDeviceData`](README.md#basesetdevicedata).`Power`             |
| `RoomTemperature`   | `readonly` | `number`                                                                  | -                                                                      |
| `SetFanSpeed`       | `readonly` | \| `auto` \| `very_slow` \| `slow` \| `moderate` \| `fast` \| `very_fast` | `Required.SetFanSpeed`                                                 |
| `SetTemperature`    | `readonly` | `number`                                                                  | `Required.SetTemperature`                                              |
| `VaneHorizontal`    | `readonly` | [`Horizontal`](README.md#horizontal)                                      | `Required.VaneHorizontal`                                              |
| `VaneVertical`      | `readonly` | [`Vertical`](README.md#vertical)                                          | `Required.VaneVertical`                                                |

---

### SetDeviceDataAtw

#### Extends

- [`BaseSetDeviceData`](README.md#basesetdevicedata).`Required`\<`Readonly`\<[`UpdateDeviceDataAtw`](README.md#updatedevicedataatw)\>\>

#### Properties

| Property                      | Modifier   | Type                                                 | Inherited from                                                         |
| :---------------------------- | :--------- | :--------------------------------------------------- | :--------------------------------------------------------------------- |
| `DeviceType`                  | `readonly` | `Atw`                                                | -                                                                      |
| `EffectiveFlags`              | `readonly` | `number`                                             | [`BaseSetDeviceData`](README.md#basesetdevicedata).`EffectiveFlags`    |
| `ForcedHotWaterMode`          | `readonly` | `boolean`                                            | `Required.ForcedHotWaterMode`                                          |
| `IdleZone1`                   | `readonly` | `boolean`                                            | -                                                                      |
| `IdleZone2`                   | `readonly` | `boolean`                                            | -                                                                      |
| `LastCommunication`           | `readonly` | `string`                                             | [`BaseSetDeviceData`](README.md#basesetdevicedata).`LastCommunication` |
| `NextCommunication`           | `readonly` | `string`                                             | [`BaseSetDeviceData`](README.md#basesetdevicedata).`NextCommunication` |
| `Offline`                     | `readonly` | `boolean`                                            | [`BaseSetDeviceData`](README.md#basesetdevicedata).`Offline`           |
| `OperationMode`               | `readonly` | [`OperationModeState`](README.md#operationmodestate) | -                                                                      |
| `OperationModeZone1`          | `readonly` | [`OperationModeZone`](README.md#operationmodezone)   | `Required.OperationModeZone1`                                          |
| `OperationModeZone2`          | `readonly` | [`OperationModeZone`](README.md#operationmodezone)   | `Required.OperationModeZone2`                                          |
| `OutdoorTemperature`          | `readonly` | `number`                                             | -                                                                      |
| `Power`                       | `readonly` | `boolean`                                            | [`BaseSetDeviceData`](README.md#basesetdevicedata).`Power`             |
| `ProhibitCoolingZone1`        | `readonly` | `boolean`                                            | -                                                                      |
| `ProhibitCoolingZone2`        | `readonly` | `boolean`                                            | -                                                                      |
| `ProhibitHeatingZone1`        | `readonly` | `boolean`                                            | -                                                                      |
| `ProhibitHeatingZone2`        | `readonly` | `boolean`                                            | -                                                                      |
| `ProhibitHotWater`            | `readonly` | `boolean`                                            | -                                                                      |
| `RoomTemperatureZone1`        | `readonly` | `number`                                             | -                                                                      |
| `RoomTemperatureZone2`        | `readonly` | `number`                                             | -                                                                      |
| `SetCoolFlowTemperatureZone1` | `readonly` | `number`                                             | `Required.SetCoolFlowTemperatureZone1`                                 |
| `SetCoolFlowTemperatureZone2` | `readonly` | `number`                                             | `Required.SetCoolFlowTemperatureZone2`                                 |
| `SetHeatFlowTemperatureZone1` | `readonly` | `number`                                             | `Required.SetHeatFlowTemperatureZone1`                                 |
| `SetHeatFlowTemperatureZone2` | `readonly` | `number`                                             | `Required.SetHeatFlowTemperatureZone2`                                 |
| `SetTankWaterTemperature`     | `readonly` | `number`                                             | `Required.SetTankWaterTemperature`                                     |
| `SetTemperatureZone1`         | `readonly` | `number`                                             | `Required.SetTemperatureZone1`                                         |
| `SetTemperatureZone2`         | `readonly` | `number`                                             | `Required.SetTemperatureZone2`                                         |
| `TankWaterTemperature`        | `readonly` | `number`                                             | -                                                                      |

---

### SetDeviceDataErv

#### Extends

- [`BaseSetDeviceData`](README.md#basesetdevicedata).`Required`\<`Readonly`\<[`UpdateDeviceDataErv`](README.md#updatedevicedataerv)\>\>

#### Properties

| Property             | Modifier   | Type                                                                      | Inherited from                                                         |
| :------------------- | :--------- | :------------------------------------------------------------------------ | :--------------------------------------------------------------------- |
| `DeviceType`         | `readonly` | `Erv`                                                                     | -                                                                      |
| `EffectiveFlags`     | `readonly` | `number`                                                                  | [`BaseSetDeviceData`](README.md#basesetdevicedata).`EffectiveFlags`    |
| `LastCommunication`  | `readonly` | `string`                                                                  | [`BaseSetDeviceData`](README.md#basesetdevicedata).`LastCommunication` |
| `NextCommunication`  | `readonly` | `string`                                                                  | [`BaseSetDeviceData`](README.md#basesetdevicedata).`NextCommunication` |
| `NumberOfFanSpeeds`  | `readonly` | `number`                                                                  | -                                                                      |
| `Offline`            | `readonly` | `boolean`                                                                 | [`BaseSetDeviceData`](README.md#basesetdevicedata).`Offline`           |
| `OutdoorTemperature` | `readonly` | `number`                                                                  | -                                                                      |
| `Power`              | `readonly` | `boolean`                                                                 | [`BaseSetDeviceData`](README.md#basesetdevicedata).`Power`             |
| `RoomCO2Level`       | `readonly` | `number`                                                                  | -                                                                      |
| `RoomTemperature`    | `readonly` | `number`                                                                  | -                                                                      |
| `SetFanSpeed`        | `readonly` | \| `auto` \| `very_slow` \| `slow` \| `moderate` \| `fast` \| `very_fast` | `Required.SetFanSpeed`                                                 |
| `VentilationMode`    | `readonly` | [`VentilationMode`](README.md#ventilationmode)                            | `Required.VentilationMode`                                             |

---

### SetDevicePostData

#### Properties

| Property | Modifier   | Type                                                     |
| :------- | :--------- | :------------------------------------------------------- |
| `Ata`    | `readonly` | [`SetDevicePostDataAta`](README.md#setdevicepostdataata) |
| `Atw`    | `readonly` | [`SetDevicePostDataAtw`](README.md#setdevicepostdataatw) |
| `Erv`    | `readonly` | [`SetDevicePostDataErv`](README.md#setdevicepostdataerv) |

---

### SetDevicePostDataAta

#### Extends

- [`BaseDevicePostData`](README.md#basedevicepostdata).`Readonly`\<[`UpdateDeviceDataAta`](README.md#updatedevicedataata)\>

#### Properties

| Property          | Modifier   | Type                                                                      | Inherited from                                                  |
| :---------------- | :--------- | :------------------------------------------------------------------------ | :-------------------------------------------------------------- |
| `DeviceID`        | `readonly` | `number`                                                                  | [`BaseDevicePostData`](README.md#basedevicepostdata).`DeviceID` |
| `EffectiveFlags`  | `readonly` | `number`                                                                  | `Readonly.EffectiveFlags`                                       |
| `OperationMode?`  | `readonly` | [`OperationMode`](README.md#operationmode)                                | `Readonly.OperationMode`                                        |
| `Power?`          | `readonly` | `boolean`                                                                 | `Readonly.Power`                                                |
| `SetFanSpeed?`    | `readonly` | \| `auto` \| `very_slow` \| `slow` \| `moderate` \| `fast` \| `very_fast` | `Readonly.SetFanSpeed`                                          |
| `SetTemperature?` | `readonly` | `number`                                                                  | `Readonly.SetTemperature`                                       |
| `VaneHorizontal?` | `readonly` | [`Horizontal`](README.md#horizontal)                                      | `Readonly.VaneHorizontal`                                       |
| `VaneVertical?`   | `readonly` | [`Vertical`](README.md#vertical)                                          | `Readonly.VaneVertical`                                         |

---

### SetDevicePostDataAtw

#### Extends

- [`BaseDevicePostData`](README.md#basedevicepostdata).`Readonly`\<[`UpdateDeviceDataAtw`](README.md#updatedevicedataatw)\>

#### Properties

| Property                       | Modifier   | Type                                               | Inherited from                                                  |
| :----------------------------- | :--------- | :------------------------------------------------- | :-------------------------------------------------------------- |
| `DeviceID`                     | `readonly` | `number`                                           | [`BaseDevicePostData`](README.md#basedevicepostdata).`DeviceID` |
| `EffectiveFlags`               | `readonly` | `number`                                           | `Readonly.EffectiveFlags`                                       |
| `ForcedHotWaterMode?`          | `readonly` | `boolean`                                          | `Readonly.ForcedHotWaterMode`                                   |
| `OperationModeZone1?`          | `readonly` | [`OperationModeZone`](README.md#operationmodezone) | `Readonly.OperationModeZone1`                                   |
| `OperationModeZone2?`          | `readonly` | [`OperationModeZone`](README.md#operationmodezone) | `Readonly.OperationModeZone2`                                   |
| `Power?`                       | `readonly` | `boolean`                                          | `Readonly.Power`                                                |
| `SetCoolFlowTemperatureZone1?` | `readonly` | `number`                                           | `Readonly.SetCoolFlowTemperatureZone1`                          |
| `SetCoolFlowTemperatureZone2?` | `readonly` | `number`                                           | `Readonly.SetCoolFlowTemperatureZone2`                          |
| `SetHeatFlowTemperatureZone1?` | `readonly` | `number`                                           | `Readonly.SetHeatFlowTemperatureZone1`                          |
| `SetHeatFlowTemperatureZone2?` | `readonly` | `number`                                           | `Readonly.SetHeatFlowTemperatureZone2`                          |
| `SetTankWaterTemperature?`     | `readonly` | `number`                                           | `Readonly.SetTankWaterTemperature`                              |
| `SetTemperatureZone1?`         | `readonly` | `number`                                           | `Readonly.SetTemperatureZone1`                                  |
| `SetTemperatureZone2?`         | `readonly` | `number`                                           | `Readonly.SetTemperatureZone2`                                  |

---

### SetDevicePostDataErv

#### Extends

- [`BaseDevicePostData`](README.md#basedevicepostdata).`Readonly`\<[`UpdateDeviceDataErv`](README.md#updatedevicedataerv)\>

#### Properties

| Property           | Modifier   | Type                                                                      | Inherited from                                                  |
| :----------------- | :--------- | :------------------------------------------------------------------------ | :-------------------------------------------------------------- |
| `DeviceID`         | `readonly` | `number`                                                                  | [`BaseDevicePostData`](README.md#basedevicepostdata).`DeviceID` |
| `EffectiveFlags`   | `readonly` | `number`                                                                  | `Readonly.EffectiveFlags`                                       |
| `Power?`           | `readonly` | `boolean`                                                                 | `Readonly.Power`                                                |
| `SetFanSpeed?`     | `readonly` | \| `auto` \| `very_slow` \| `slow` \| `moderate` \| `fast` \| `very_fast` | `Readonly.SetFanSpeed`                                          |
| `VentilationMode?` | `readonly` | [`VentilationMode`](README.md#ventilationmode)                            | `Readonly.VentilationMode`                                      |

---

### SetPowerPostData

#### Properties

| Property    | Modifier   | Type                |
| :---------- | :--------- | :------------------ |
| `DeviceIds` | `readonly` | readonly `number`[] |
| `Power`     | `readonly` | `boolean`           |

---

### SettingManager

#### Properties

| Property | Type                                                                                          |
| :------- | :-------------------------------------------------------------------------------------------- |
| `get`    | \<`K`\>(`key`: `K`) => `undefined` \| `null` \| [`APISettings`](README.md#apisettings)\[`K`\] |
| `set`    | \<`K`\>(`key`: `K`, `value`: [`APISettings`](README.md#apisettings)\[`K`\]) => `void`         |

---

### SettingsParams

#### Properties

| Property    | Modifier   | Type                                                        |
| :---------- | :--------- | :---------------------------------------------------------- |
| `id`        | `readonly` | `number`                                                    |
| `tableName` | `readonly` | `"Area"` \| `"Building"` \| `"DeviceLocation"` \| `"Floor"` |

---

### SuccessData

#### Properties

| Property          | Modifier   | Type   |
| :---------------- | :--------- | :----- |
| `AttributeErrors` | `readonly` | `null` |
| `Success`         | `readonly` | `true` |

---

### TilesData\<T\>

#### Type parameters

| Type parameter                                                              |
| :-------------------------------------------------------------------------- |
| `T` _extends_ keyof _typeof_ [`DeviceType`](README.md#devicetype) \| `null` |

#### Properties

| Property         | Modifier   | Type                                                                                                                                                                        |
| :--------------- | :--------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `SelectedDevice` | `readonly` | `T` _extends_ `"Ata"` \| `"Atw"` \| `"Erv"` ? [`GetDeviceData`](README.md#getdevicedata)\[`T`\<`T`\>\] : `null`                                                             |
| `Tiles`          | `readonly` | readonly \{ `Device`: `number`; `Offline`: `boolean`; `Power`: `boolean`; `RoomTemperature`: `number`; `RoomTemperature2`: `number`; `TankWaterTemperature`: `number`; \}[] |

---

### UpdateDeviceData

#### Properties

| Property | Modifier   | Type                                                   |
| :------- | :--------- | :----------------------------------------------------- |
| `Ata`    | `readonly` | [`UpdateDeviceDataAta`](README.md#updatedevicedataata) |
| `Atw`    | `readonly` | [`UpdateDeviceDataAtw`](README.md#updatedevicedataatw) |
| `Erv`    | `readonly` | [`UpdateDeviceDataErv`](README.md#updatedevicedataerv) |

---

### UpdateDeviceDataAta

#### Extends

- [`BaseUpdateDeviceData`](README.md#baseupdatedevicedata)

#### Properties

| Property          | Modifier   | Type                                                                      | Inherited from                                                            |
| :---------------- | :--------- | :------------------------------------------------------------------------ | :------------------------------------------------------------------------ |
| `EffectiveFlags`  | `public`   | `number`                                                                  | [`BaseUpdateDeviceData`](README.md#baseupdatedevicedata).`EffectiveFlags` |
| `OperationMode?`  | `readonly` | [`OperationMode`](README.md#operationmode)                                | -                                                                         |
| `Power?`          | `readonly` | `boolean`                                                                 | [`BaseUpdateDeviceData`](README.md#baseupdatedevicedata).`Power`          |
| `SetFanSpeed?`    | `readonly` | \| `auto` \| `very_slow` \| `slow` \| `moderate` \| `fast` \| `very_fast` | -                                                                         |
| `SetTemperature?` | `readonly` | `number`                                                                  | -                                                                         |
| `VaneHorizontal?` | `readonly` | [`Horizontal`](README.md#horizontal)                                      | -                                                                         |
| `VaneVertical?`   | `readonly` | [`Vertical`](README.md#vertical)                                          | -                                                                         |

---

### UpdateDeviceDataAtw

#### Extends

- [`BaseUpdateDeviceData`](README.md#baseupdatedevicedata)

#### Properties

| Property                       | Modifier   | Type                                               | Inherited from                                                            |
| :----------------------------- | :--------- | :------------------------------------------------- | :------------------------------------------------------------------------ |
| `EffectiveFlags`               | `public`   | `number`                                           | [`BaseUpdateDeviceData`](README.md#baseupdatedevicedata).`EffectiveFlags` |
| `ForcedHotWaterMode?`          | `readonly` | `boolean`                                          | -                                                                         |
| `OperationModeZone1?`          | `readonly` | [`OperationModeZone`](README.md#operationmodezone) | -                                                                         |
| `OperationModeZone2?`          | `readonly` | [`OperationModeZone`](README.md#operationmodezone) | -                                                                         |
| `Power?`                       | `readonly` | `boolean`                                          | [`BaseUpdateDeviceData`](README.md#baseupdatedevicedata).`Power`          |
| `SetCoolFlowTemperatureZone1?` | `readonly` | `number`                                           | -                                                                         |
| `SetCoolFlowTemperatureZone2?` | `readonly` | `number`                                           | -                                                                         |
| `SetHeatFlowTemperatureZone1?` | `readonly` | `number`                                           | -                                                                         |
| `SetHeatFlowTemperatureZone2?` | `readonly` | `number`                                           | -                                                                         |
| `SetTankWaterTemperature?`     | `readonly` | `number`                                           | -                                                                         |
| `SetTemperatureZone1?`         | `readonly` | `number`                                           | -                                                                         |
| `SetTemperatureZone2?`         | `readonly` | `number`                                           | -                                                                         |

---

### UpdateDeviceDataErv

#### Extends

- [`BaseUpdateDeviceData`](README.md#baseupdatedevicedata)

#### Properties

| Property           | Modifier   | Type                                                                      | Inherited from                                                            |
| :----------------- | :--------- | :------------------------------------------------------------------------ | :------------------------------------------------------------------------ |
| `EffectiveFlags`   | `public`   | `number`                                                                  | [`BaseUpdateDeviceData`](README.md#baseupdatedevicedata).`EffectiveFlags` |
| `Power?`           | `readonly` | `boolean`                                                                 | [`BaseUpdateDeviceData`](README.md#baseupdatedevicedata).`Power`          |
| `SetFanSpeed?`     | `readonly` | \| `auto` \| `very_slow` \| `slow` \| `moderate` \| `fast` \| `very_fast` | -                                                                         |
| `VentilationMode?` | `readonly` | [`VentilationMode`](README.md#ventilationmode)                            | -                                                                         |

---

### WifiData

#### Properties

| Property   | Modifier   | Type                     |
| :--------- | :--------- | :----------------------- |
| `Data`     | `readonly` | (`null` \| `number`)[][] |
| `FromDate` | `readonly` | `string`                 |
| `Labels`   | `readonly` | `string`[]               |
| `ToDate`   | `readonly` | `string`                 |

---

### WifiPostData

#### Properties

| Property  | Modifier   | Type                |
| :-------- | :--------- | :------------------ |
| `devices` | `readonly` | readonly `number`[] |
| `hour`    | `readonly` | `number`            |

## Type Aliases

### DeviceFacadeAny

```ts
type DeviceFacadeAny: DeviceFacade<"Ata"> | DeviceFacade<"Atw"> | DeviceFacade<"Erv">;
```

#### Source

src/facades/device.ts:24

---

### DeviceModelAny

```ts
type DeviceModelAny: DeviceModel<"Ata"> | DeviceModel<"Atw"> | DeviceModel<"Erv">;
```

#### Source

[src/models/device.ts:10](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/models/device.ts#L10)

---

### GetDeviceDataAta

```ts
type GetDeviceDataAta: BaseGetDeviceData & SetDeviceDataAta;
```

#### Source

[src/types/ata.ts:74](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/types/ata.ts#L74)

---

### GetDeviceDataAtw

```ts
type GetDeviceDataAtw: BaseGetDeviceData & SetDeviceDataAtw;
```

#### Source

[src/types/atw.ts:81](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/types/atw.ts#L81)

---

### GetDeviceDataErv

```ts
type GetDeviceDataErv: BaseGetDeviceData & SetDeviceDataErv;
```

#### Source

[src/types/erv.ts:47](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/types/erv.ts#L47)

---

### ListDeviceAny

```ts
type ListDeviceAny: ListDeviceAta | ListDeviceAtw | ListDeviceErv;
```

#### Source

[src/types/common.ts:219](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/types/common.ts#L219)

---

### NonEffectiveFlagsKeyOf\<T\>

```ts
type NonEffectiveFlagsKeyOf<T>: Exclude<keyof T, "EffectiveFlags">;
```

#### Type parameters

| Type parameter |
| :------------- |
| `T`            |

#### Source

[src/types/bases.ts:19](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/types/bases.ts#L19)

---

### NonEffectiveFlagsValueOf\<T\>

```ts
type NonEffectiveFlagsValueOf<T>: T[NonEffectiveFlagsKeyOf<T>];
```

#### Type parameters

| Type parameter |
| :------------- |
| `T`            |

#### Source

[src/types/bases.ts:21](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/types/bases.ts#L21)

---

### TilesPostData\<T\>

```ts
type TilesPostData<T>: T extends keyof typeof DeviceType ? {
  SelectedBuilding: number;
  SelectedDevice: number;
 } : {
  SelectedBuilding: null;
  SelectedDevice: null;
 } & {
  DeviceIDs: readonly number[];
};
```

#### Type declaration

| Member      | Type                |
| :---------- | :------------------ |
| `DeviceIDs` | readonly `number`[] |

#### Type parameters

| Type parameter                                                              |
| :-------------------------------------------------------------------------- |
| `T` _extends_ keyof _typeof_ [`DeviceType`](README.md#devicetype) \| `null` |

#### Source

[src/types/common.ts:276](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/types/common.ts#L276)

## Variables

### FLAG_UNCHANGED

```ts
const FLAG_UNCHANGED: 0 = 0x0
```

#### Source

[src/types/bases.ts:1](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/types/bases.ts#L1)

---

### effectiveFlagsAta

```ts
const effectiveFlagsAta: Record<
  NonEffectiveFlagsKeyOf<UpdateDeviceDataAta>,
  number
>
```

#### Source

[src/types/ata.ts:50](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/types/ata.ts#L50)

---

### effectiveFlagsAtw

```ts
const effectiveFlagsAtw: Record<
  NonEffectiveFlagsKeyOf<UpdateDeviceDataAtw>,
  number
>
```

#### Source

[src/types/atw.ts:42](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/types/atw.ts#L42)

---

### effectiveFlagsErv

```ts
const effectiveFlagsErv: Record<
  NonEffectiveFlagsKeyOf<UpdateDeviceDataErv>,
  number
>
```

#### Source

[src/types/erv.ts:24](https://github.com/OlivierZal/melcloud-api/blob/f0fde5ed7f288851ef238d1f2915c2f14948b5ac/src/types/erv.ts#L24)
