# MELCloud API for Node.js

## Enumerations

### DeviceType

#### Enumeration Members

| Enumeration Member | Value |
| :------ | :------ |
| `Ata` | `0` |
| `Atw` | `1` |
| `Erv` | `3` |

***

### FanSpeed

#### Enumeration Members

| Enumeration Member | Value |
| :------ | :------ |
| `auto` | `0` |
| `fast` | `4` |
| `moderate` | `3` |
| `silent` | `255` |
| `slow` | `2` |
| `very_fast` | `5` |
| `very_slow` | `1` |

***

### Horizontal

#### Enumeration Members

| Enumeration Member | Value |
| :------ | :------ |
| `auto` | `0` |
| `center` | `3` |
| `center_left` | `2` |
| `center_right` | `4` |
| `leftwards` | `1` |
| `rightwards` | `5` |
| `swing` | `12` |
| `wide` | `8` |

***

### Language

#### Enumeration Members

| Enumeration Member | Value |
| :------ | :------ |
| `bg` | `1` |
| `cs` | `2` |
| `da` | `3` |
| `de` | `4` |
| `el` | `22` |
| `en` | `0` |
| `es` | `6` |
| `et` | `5` |
| `fi` | `17` |
| `fr` | `7` |
| `hr` | `23` |
| `hu` | `11` |
| `hy` | `8` |
| `it` | `19` |
| `lt` | `10` |
| `lv` | `9` |
| `nl` | `12` |
| `no` | `13` |
| `pl` | `14` |
| `pt` | `15` |
| `ro` | `24` |
| `ru` | `16` |
| `sl` | `25` |
| `sq` | `26` |
| `sv` | `18` |
| `tr` | `21` |
| `uk` | `20` |

***

### OperationMode

#### Enumeration Members

| Enumeration Member | Value |
| :------ | :------ |
| `auto` | `8` |
| `cool` | `3` |
| `dry` | `2` |
| `fan` | `7` |
| `heat` | `1` |

***

### OperationModeState

#### Enumeration Members

| Enumeration Member | Value |
| :------ | :------ |
| `cooling` | `3` |
| `defrost` | `5` |
| `dhw` | `1` |
| `heating` | `2` |
| `idle` | `0` |
| `legionella` | `6` |

***

### OperationModeZone

#### Enumeration Members

| Enumeration Member | Value |
| :------ | :------ |
| `curve` | `2` |
| `flow` | `1` |
| `flow_cool` | `4` |
| `room` | `0` |
| `room_cool` | `3` |

***

### VentilationMode

#### Enumeration Members

| Enumeration Member | Value |
| :------ | :------ |
| `auto` | `2` |
| `bypass` | `1` |
| `recovery` | `0` |

***

### Vertical

#### Enumeration Members

| Enumeration Member | Value |
| :------ | :------ |
| `auto` | `0` |
| `downwards` | `5` |
| `mid_high` | `2` |
| `mid_low` | `4` |
| `middle` | `3` |
| `swing` | `7` |
| `upwards` | `1` |

## Classes

### default

#### Constructors

##### new default()

```ts
new default(config: {
  language: string;
  logger: Logger;
  settingManager: SettingManager;
  shouldVerifySSL: boolean;
 }): default
```

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `config` | `object` |
| `config.language`? | `string` |
| `config.logger`? | [`Logger`](README.md#logger) |
| `config.settingManager`? | [`SettingManager`](README.md#settingmanager) |
| `config.shouldVerifySSL`? | `boolean` |

###### Returns

[`default`](README.md#default)

###### Source

[src/lib/MELCloudAPI.ts:87](https://github.com/OlivierZal/melcloud-api/blob/05a8715f0ecd6a76c52c5454edbad305fc0dcadb/src/lib/MELCloudAPI.ts#L87)

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `language` | `public` | [`Language`](README.md#language) |

#### Methods

##### applyLogin()

```ts
applyLogin(data?: LoginCredentials, onSuccess?: () => Promise<void>): Promise<boolean>
```

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `data`? | [`LoginCredentials`](README.md#logincredentials) |
| `onSuccess`? | () => `Promise`\<`void`\> |

###### Returns

`Promise`\<`boolean`\>

###### Source

[src/lib/MELCloudAPI.ts:150](https://github.com/OlivierZal/melcloud-api/blob/05a8715f0ecd6a76c52c5454edbad305fc0dcadb/src/lib/MELCloudAPI.ts#L150)

##### errors()

```ts
errors(postData: ErrorLogPostData): Promise<{
  data: FailureData | ErrorLogData[];
}>
```

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `postData` | [`ErrorLogPostData`](README.md#errorlogpostdata) |

###### Returns

`Promise`\<\{
  `data`: [`FailureData`](README.md#failuredata) \| [`ErrorLogData`](README.md#errorlogdata)[];
 \}\>

| Member | Type |
| :------ | :------ |
| `data` | [`FailureData`](README.md#failuredata) \| [`ErrorLogData`](README.md#errorlogdata)[] |

###### Source

[src/lib/MELCloudAPI.ts:179](https://github.com/OlivierZal/melcloud-api/blob/05a8715f0ecd6a76c52c5454edbad305fc0dcadb/src/lib/MELCloudAPI.ts#L179)

##### get()

```ts
get<T>(id: number, buildingId: number): Promise<{
  data: DeviceDataFromGet[T];
}>
```

###### Type parameters

| Type parameter |
| :------ |
| `T` *extends* `"Ata"` \| `"Atw"` \| `"Erv"` |

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `number` |
| `buildingId` | `number` |

###### Returns

`Promise`\<\{
  `data`: [`DeviceDataFromGet`](README.md#devicedatafromget)\[`T`\];
 \}\>

| Member | Type |
| :------ | :------ |
| `data` | [`DeviceDataFromGet`](README.md#devicedatafromget)\[`T`\] |

###### Source

[src/lib/MELCloudAPI.ts:188](https://github.com/OlivierZal/melcloud-api/blob/05a8715f0ecd6a76c52c5454edbad305fc0dcadb/src/lib/MELCloudAPI.ts#L188)

##### getFrostProtection()

```ts
getFrostProtection(id: number): Promise<{
  data: FrostProtectionData;
}>
```

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `number` |

###### Returns

`Promise`\<\{
  `data`: [`FrostProtectionData`](README.md#frostprotectiondata);
 \}\>

| Member | Type |
| :------ | :------ |
| `data` | [`FrostProtectionData`](README.md#frostprotectiondata) |

###### Source

[src/lib/MELCloudAPI.ts:197](https://github.com/OlivierZal/melcloud-api/blob/05a8715f0ecd6a76c52c5454edbad305fc0dcadb/src/lib/MELCloudAPI.ts#L197)

##### getHolidayMode()

```ts
getHolidayMode(id: number): Promise<{
  data: HolidayModeData;
}>
```

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `number` |

###### Returns

`Promise`\<\{
  `data`: [`HolidayModeData`](README.md#holidaymodedata);
 \}\>

| Member | Type |
| :------ | :------ |
| `data` | [`HolidayModeData`](README.md#holidaymodedata) |

###### Source

[src/lib/MELCloudAPI.ts:205](https://github.com/OlivierZal/melcloud-api/blob/05a8715f0ecd6a76c52c5454edbad305fc0dcadb/src/lib/MELCloudAPI.ts#L205)

##### list()

```ts
list(): Promise<{
  data: Building[];
}>
```

###### Returns

`Promise`\<\{
  `data`: [`Building`](README.md#building)[];
 \}\>

| Member | Type |
| :------ | :------ |
| `data` | [`Building`](README.md#building)[] |

###### Source

[src/lib/MELCloudAPI.ts:211](https://github.com/OlivierZal/melcloud-api/blob/05a8715f0ecd6a76c52c5454edbad305fc0dcadb/src/lib/MELCloudAPI.ts#L211)

##### login()

```ts
login(__namedParameters: LoginPostData): Promise<{
  data: LoginData;
}>
```

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`LoginPostData`](README.md#loginpostdata) |

###### Returns

`Promise`\<\{
  `data`: [`LoginData`](README.md#logindata);
 \}\>

| Member | Type |
| :------ | :------ |
| `data` | [`LoginData`](README.md#logindata) |

###### Source

[src/lib/MELCloudAPI.ts:215](https://github.com/OlivierZal/melcloud-api/blob/05a8715f0ecd6a76c52c5454edbad305fc0dcadb/src/lib/MELCloudAPI.ts#L215)

##### report()

```ts
report<T>(postData: ReportPostData): Promise<{
  data: ReportData[T];
}>
```

###### Type parameters

| Type parameter |
| :------ |
| `T` *extends* `"Ata"` \| `"Atw"` \| `"Erv"` |

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `postData` | [`ReportPostData`](README.md#reportpostdata) |

###### Returns

`Promise`\<\{
  `data`: [`ReportData`](README.md#reportdata)\[`T`\];
 \}\>

| Member | Type |
| :------ | :------ |
| `data` | [`ReportData`](README.md#reportdata)\[`T`\] |

###### Source

[src/lib/MELCloudAPI.ts:234](https://github.com/OlivierZal/melcloud-api/blob/05a8715f0ecd6a76c52c5454edbad305fc0dcadb/src/lib/MELCloudAPI.ts#L234)

##### set()

```ts
set<T>(heatPumpType: T, postData: PostData[T]): Promise<{
  data: DeviceData[T];
}>
```

###### Type parameters

| Type parameter |
| :------ |
| `T` *extends* `"Ata"` \| `"Atw"` \| `"Erv"` |

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `heatPumpType` | `T` |
| `postData` | [`PostData`](README.md#postdata)\[`T`\] |

###### Returns

`Promise`\<\{
  `data`: [`DeviceData`](README.md#devicedata)\[`T`\];
 \}\>

| Member | Type |
| :------ | :------ |
| `data` | [`DeviceData`](README.md#devicedata)\[`T`\] |

###### Source

[src/lib/MELCloudAPI.ts:243](https://github.com/OlivierZal/melcloud-api/blob/05a8715f0ecd6a76c52c5454edbad305fc0dcadb/src/lib/MELCloudAPI.ts#L243)

##### setGroup()

```ts
setGroup(postData: GroupPostData): Promise<{
  data: SuccessData | FailureData;
}>
```

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `postData` | [`GroupPostData`](README.md#grouppostdata) |

###### Returns

`Promise`\<\{
  `data`: [`SuccessData`](README.md#successdata) \| [`FailureData`](README.md#failuredata);
 \}\>

| Member | Type |
| :------ | :------ |
| `data` | [`SuccessData`](README.md#successdata) \| [`FailureData`](README.md#failuredata) |

###### Source

[src/lib/MELCloudAPI.ts:253](https://github.com/OlivierZal/melcloud-api/blob/05a8715f0ecd6a76c52c5454edbad305fc0dcadb/src/lib/MELCloudAPI.ts#L253)

##### setPower()

```ts
setPower(ids: number[], power: boolean): Promise<{
  data: boolean;
}>
```

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `ids` | `number`[] |
| `power` | `boolean` |

###### Returns

`Promise`\<\{
  `data`: `boolean`;
 \}\>

| Member | Type |
| :------ | :------ |
| `data` | `boolean` |

###### Source

[src/lib/MELCloudAPI.ts:259](https://github.com/OlivierZal/melcloud-api/blob/05a8715f0ecd6a76c52c5454edbad305fc0dcadb/src/lib/MELCloudAPI.ts#L259)

##### tiles()

```ts
tiles<T>(postData: TilesPostData<T>): Promise<{
  data: TilesData<T>;
}>
```

###### Type parameters

| Type parameter |
| :------ |
| `T` *extends* `null` \| `"Ata"` \| `"Atw"` \| `"Erv"` |

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `postData` | [`TilesPostData`](README.md#tilespostdatat)\<`T`\> |

###### Returns

`Promise`\<\{
  `data`: [`TilesData`](README.md#tilesdatat)\<`T`\>;
 \}\>

| Member | Type |
| :------ | :------ |
| `data` | [`TilesData`](README.md#tilesdatat)\<`T`\> |

###### Source

[src/lib/MELCloudAPI.ts:269](https://github.com/OlivierZal/melcloud-api/blob/05a8715f0ecd6a76c52c5454edbad305fc0dcadb/src/lib/MELCloudAPI.ts#L269)

##### updateFrostProtection()

```ts
updateFrostProtection(postData: FrostProtectionPostData): Promise<{
  data: SuccessData | FailureData;
}>
```

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `postData` | [`FrostProtectionPostData`](README.md#frostprotectionpostdata) |

###### Returns

`Promise`\<\{
  `data`: [`SuccessData`](README.md#successdata) \| [`FailureData`](README.md#failuredata);
 \}\>

| Member | Type |
| :------ | :------ |
| `data` | [`SuccessData`](README.md#successdata) \| [`FailureData`](README.md#failuredata) |

###### Source

[src/lib/MELCloudAPI.ts:278](https://github.com/OlivierZal/melcloud-api/blob/05a8715f0ecd6a76c52c5454edbad305fc0dcadb/src/lib/MELCloudAPI.ts#L278)

##### updateHolidayMode()

```ts
updateHolidayMode(postData: HolidayModePostData): Promise<{
  data: SuccessData | FailureData;
}>
```

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `postData` | [`HolidayModePostData`](README.md#holidaymodepostdata) |

###### Returns

`Promise`\<\{
  `data`: [`SuccessData`](README.md#successdata) \| [`FailureData`](README.md#failuredata);
 \}\>

| Member | Type |
| :------ | :------ |
| `data` | [`SuccessData`](README.md#successdata) \| [`FailureData`](README.md#failuredata) |

###### Source

[src/lib/MELCloudAPI.ts:287](https://github.com/OlivierZal/melcloud-api/blob/05a8715f0ecd6a76c52c5454edbad305fc0dcadb/src/lib/MELCloudAPI.ts#L287)

##### updateLanguage()

```ts
updateLanguage(language: Language): Promise<{
  data: boolean;
}>
```

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `language` | [`Language`](README.md#language) |

###### Returns

`Promise`\<\{
  `data`: `boolean`;
 \}\>

| Member | Type |
| :------ | :------ |
| `data` | `boolean` |

###### Source

[src/lib/MELCloudAPI.ts:296](https://github.com/OlivierZal/melcloud-api/blob/05a8715f0ecd6a76c52c5454edbad305fc0dcadb/src/lib/MELCloudAPI.ts#L296)

## Interfaces

### APISettings

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `contextKey?` | `readonly` | `null` \| `string` |
| `expiry?` | `readonly` | `null` \| `string` |
| `password?` | `readonly` | `null` \| `string` |
| `username?` | `readonly` | `null` \| `string` |

***

### BaseDeviceData

#### Extends

- `Readonly`\<[`BaseSetDeviceData`](README.md#basesetdevicedata)\>.[`DeviceDataNotInList`](README.md#devicedatanotinlist)

#### Extended by

- [`BaseDeviceDataFromGet`](README.md#basedevicedatafromget)
- [`DeviceDataAta`](README.md#devicedataata)
- [`DeviceDataAtw`](README.md#devicedataatw)
- [`DeviceDataErv`](README.md#devicedataerv)

#### Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `EffectiveFlags` | `readonly` | `number` | `Readonly.EffectiveFlags` |
| `LastCommunication` | `readonly` | `string` | [`DeviceDataNotInList`](README.md#devicedatanotinlist).`LastCommunication` |
| `NextCommunication` | `readonly` | `string` | [`DeviceDataNotInList`](README.md#devicedatanotinlist).`NextCommunication` |
| `Offline` | `readonly` | `boolean` | - |
| `Power?` | `readonly` | `boolean` | `Readonly.Power` |

***

### BaseDeviceDataFromGet

#### Extends

- [`BaseDeviceData`](README.md#basedevicedata)

#### Properties

| Property | Modifier | Type | Overrides | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `EffectiveFlags` | `readonly` | `0` | [`BaseDeviceData`](README.md#basedevicedata).`EffectiveFlags` | [`BaseDeviceData`](README.md#basedevicedata).`EffectiveFlags` |
| `LastCommunication` | `readonly` | `string` | [`BaseDeviceData`](README.md#basedevicedata).`LastCommunication` | [`BaseDeviceData`](README.md#basedevicedata).`LastCommunication` |
| `NextCommunication` | `readonly` | `string` | [`BaseDeviceData`](README.md#basedevicedata).`NextCommunication` | [`BaseDeviceData`](README.md#basedevicedata).`NextCommunication` |
| `Offline` | `readonly` | `boolean` | [`BaseDeviceData`](README.md#basedevicedata).`Offline` | [`BaseDeviceData`](README.md#basedevicedata).`Offline` |
| `Power?` | `readonly` | `boolean` | [`BaseDeviceData`](README.md#basedevicedata).`Power` | [`BaseDeviceData`](README.md#basedevicedata).`Power` |

***

### BaseDeviceDataFromList

#### Extends

- `Omit`\<[`BaseDeviceDataFromGet`](README.md#basedevicedatafromget), keyof [`DeviceDataNotInList`](README.md#devicedatanotinlist)\>

#### Extended by

- [`DeviceDataFromListAta`](README.md#devicedatafromlistata)
- [`DeviceDataFromListAtw`](README.md#devicedatafromlistatw)
- [`DeviceDataFromListErv`](README.md#devicedatafromlisterv)

#### Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `EffectiveFlags` | `readonly` | `0` | `Omit.EffectiveFlags` |
| `Offline` | `readonly` | `boolean` | `Omit.Offline` |
| `Power?` | `readonly` | `boolean` | `Omit.Power` |
| `WifiSignalStrength` | `readonly` | `number` | - |

***

### BaseDevicePostData

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `DeviceID` | `readonly` | `number` |

***

### BaseListDevice

#### Extended by

- [`ListDeviceAta`](README.md#listdeviceata)
- [`ListDeviceAtw`](README.md#listdeviceatw)
- [`ListDeviceErv`](README.md#listdeviceerv)

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `AreaID` | `readonly` | `number` |
| `BuildingID` | `readonly` | `number` |
| `DeviceID` | `readonly` | `number` |
| `DeviceName` | `readonly` | `string` |
| `FloorID` | `readonly` | `number` |
| `Type` | `readonly` | [`DeviceType`](README.md#devicetype) |

***

### BaseSetDeviceData

#### Extended by

- [`SetDeviceDataAta`](README.md#setdevicedataata)
- [`SetDeviceDataAtw`](README.md#setdevicedataatw)
- [`SetDeviceDataErv`](README.md#setdevicedataerv)

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `EffectiveFlags` | `public` | `number` |
| `Power?` | `readonly` | `boolean` |

***

### Building

#### Extends

- [`BuildingData`](README.md#buildingdata)

#### Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `FPEnabled` | `readonly` | `boolean` | [`BuildingData`](README.md#buildingdata).`FPEnabled` |
| `FPMaxTemperature` | `readonly` | `number` | [`BuildingData`](README.md#buildingdata).`FPMaxTemperature` |
| `FPMinTemperature` | `readonly` | `number` | [`BuildingData`](README.md#buildingdata).`FPMinTemperature` |
| `HMEnabled` | `readonly` | `boolean` | [`BuildingData`](README.md#buildingdata).`HMEnabled` |
| `HMEndDate` | `readonly` | `null` \| `string` | [`BuildingData`](README.md#buildingdata).`HMEndDate` |
| `HMStartDate` | `readonly` | `null` \| `string` | [`BuildingData`](README.md#buildingdata).`HMStartDate` |
| `ID` | `readonly` | `number` | - |
| `Name` | `readonly` | `string` | - |
| `Structure` | `readonly` | \{ `Areas`: readonly \{ `Devices`: readonly [`ListDeviceAny`](README.md#listdeviceany)[]; \}[]; `Devices`: readonly [`ListDeviceAny`](README.md#listdeviceany)[]; `Floors`: readonly \{ `Areas`: readonly \{ `Devices`: readonly [`ListDeviceAny`](README.md#listdeviceany)[]; \}[]; `Devices`: readonly [`ListDeviceAny`](README.md#listdeviceany)[]; \}[]; \} | - |
| `Structure.Areas` | `readonly` | readonly \{ `Devices`: readonly [`ListDeviceAny`](README.md#listdeviceany)[]; \}[] | - |
| `Structure.Devices` | `public` | readonly [`ListDeviceAny`](README.md#listdeviceany)[] | - |
| `Structure.Floors` | `public` | readonly \{ `Areas`: readonly \{ `Devices`: readonly [`ListDeviceAny`](README.md#listdeviceany)[]; \}[]; `Devices`: readonly [`ListDeviceAny`](README.md#listdeviceany)[]; \}[] | - |
| `TimeZone` | `public` | `number` | [`BuildingData`](README.md#buildingdata).`TimeZone` |

***

### BuildingData

#### Extends

- [`FrostProtectionData`](README.md#frostprotectiondata).`Omit`\<[`HolidayModeData`](README.md#holidaymodedata), `"EndDate"` \| `"StartDate"`\>

#### Extended by

- [`Building`](README.md#building)

#### Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `FPEnabled` | `readonly` | `boolean` | [`FrostProtectionData`](README.md#frostprotectiondata).`FPEnabled` |
| `FPMaxTemperature` | `readonly` | `number` | [`FrostProtectionData`](README.md#frostprotectiondata).`FPMaxTemperature` |
| `FPMinTemperature` | `readonly` | `number` | [`FrostProtectionData`](README.md#frostprotectiondata).`FPMinTemperature` |
| `HMEnabled` | `readonly` | `boolean` | `Omit.HMEnabled` |
| `HMEndDate` | `readonly` | `null` \| `string` | `Omit.HMEndDate` |
| `HMStartDate` | `readonly` | `null` \| `string` | `Omit.HMStartDate` |
| `TimeZone` | `readonly` | `number` | `Omit.TimeZone` |

***

### BuildingDataParams

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `id` | `readonly` | `number` |
| `tableName` | `readonly` | `"DeviceLocation"` |

***

### DeviceData

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `Ata` | `readonly` | [`DeviceDataAta`](README.md#devicedataata) |
| `Atw` | `readonly` | [`DeviceDataAtw`](README.md#devicedataatw) |
| `Erv` | `readonly` | [`DeviceDataErv`](README.md#devicedataerv) |

***

### DeviceDataAta

#### Extends

- [`BaseDeviceData`](README.md#basedevicedata).`Readonly`\<[`SetDeviceDataAta`](README.md#setdevicedataata)\>

#### Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `DeviceType` | `readonly` | `Ata` | - |
| `EffectiveFlags` | `readonly` | `number` | [`BaseDeviceData`](README.md#basedevicedata).`EffectiveFlags` |
| `LastCommunication` | `readonly` | `string` | [`BaseDeviceData`](README.md#basedevicedata).`LastCommunication` |
| `NextCommunication` | `readonly` | `string` | [`BaseDeviceData`](README.md#basedevicedata).`NextCommunication` |
| `NumberOfFanSpeeds` | `readonly` | `number` | - |
| `Offline` | `readonly` | `boolean` | [`BaseDeviceData`](README.md#basedevicedata).`Offline` |
| `OperationMode?` | `readonly` | [`OperationMode`](README.md#operationmode) | `Readonly.OperationMode` |
| `Power?` | `readonly` | `boolean` | [`BaseDeviceData`](README.md#basedevicedata).`Power` |
| `RoomTemperature` | `readonly` | `number` | - |
| `SetFanSpeed?` | `readonly` |  \| `auto` \| `very_slow` \| `slow` \| `moderate` \| `fast` \| `very_fast` | `Readonly.SetFanSpeed` |
| `SetTemperature?` | `readonly` | `number` | `Readonly.SetTemperature` |
| `VaneHorizontal?` | `readonly` | [`Horizontal`](README.md#horizontal) | `Readonly.VaneHorizontal` |
| `VaneVertical?` | `readonly` | [`Vertical`](README.md#vertical) | `Readonly.VaneVertical` |

***

### DeviceDataAtw

#### Extends

- [`BaseDeviceData`](README.md#basedevicedata).`Readonly`\<[`SetDeviceDataAtw`](README.md#setdevicedataatw)\>

#### Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `DeviceType` | `readonly` | `Atw` | - |
| `EffectiveFlags` | `readonly` | `number` | [`BaseDeviceData`](README.md#basedevicedata).`EffectiveFlags` |
| `ForcedHotWaterMode?` | `readonly` | `boolean` | `Readonly.ForcedHotWaterMode` |
| `IdleZone1` | `readonly` | `boolean` | - |
| `IdleZone2` | `readonly` | `boolean` | - |
| `LastCommunication` | `readonly` | `string` | [`BaseDeviceData`](README.md#basedevicedata).`LastCommunication` |
| `NextCommunication` | `readonly` | `string` | [`BaseDeviceData`](README.md#basedevicedata).`NextCommunication` |
| `Offline` | `readonly` | `boolean` | [`BaseDeviceData`](README.md#basedevicedata).`Offline` |
| `OperationMode` | `readonly` | [`OperationModeState`](README.md#operationmodestate) | - |
| `OperationModeZone1?` | `readonly` | [`OperationModeZone`](README.md#operationmodezone) | `Readonly.OperationModeZone1` |
| `OperationModeZone2?` | `readonly` | [`OperationModeZone`](README.md#operationmodezone) | `Readonly.OperationModeZone2` |
| `OutdoorTemperature` | `readonly` | `number` | - |
| `Power?` | `readonly` | `boolean` | [`BaseDeviceData`](README.md#basedevicedata).`Power` |
| `ProhibitCoolingZone1` | `readonly` | `boolean` | - |
| `ProhibitCoolingZone2` | `readonly` | `boolean` | - |
| `ProhibitHeatingZone1` | `readonly` | `boolean` | - |
| `ProhibitHeatingZone2` | `readonly` | `boolean` | - |
| `ProhibitHotWater` | `readonly` | `boolean` | - |
| `RoomTemperatureZone1` | `readonly` | `number` | - |
| `RoomTemperatureZone2` | `readonly` | `number` | - |
| `SetCoolFlowTemperatureZone1?` | `readonly` | `number` | `Readonly.SetCoolFlowTemperatureZone1` |
| `SetCoolFlowTemperatureZone2?` | `readonly` | `number` | `Readonly.SetCoolFlowTemperatureZone2` |
| `SetHeatFlowTemperatureZone1?` | `readonly` | `number` | `Readonly.SetHeatFlowTemperatureZone1` |
| `SetHeatFlowTemperatureZone2?` | `readonly` | `number` | `Readonly.SetHeatFlowTemperatureZone2` |
| `SetTankWaterTemperature?` | `readonly` | `number` | `Readonly.SetTankWaterTemperature` |
| `SetTemperatureZone1?` | `readonly` | `number` | `Readonly.SetTemperatureZone1` |
| `SetTemperatureZone2?` | `readonly` | `number` | `Readonly.SetTemperatureZone2` |
| `TankWaterTemperature` | `readonly` | `number` | - |

***

### DeviceDataErv

#### Extends

- [`BaseDeviceData`](README.md#basedevicedata).`Readonly`\<[`SetDeviceDataErv`](README.md#setdevicedataerv)\>

#### Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `DeviceType` | `readonly` | `Erv` | - |
| `EffectiveFlags` | `readonly` | `number` | [`BaseDeviceData`](README.md#basedevicedata).`EffectiveFlags` |
| `LastCommunication` | `readonly` | `string` | [`BaseDeviceData`](README.md#basedevicedata).`LastCommunication` |
| `NextCommunication` | `readonly` | `string` | [`BaseDeviceData`](README.md#basedevicedata).`NextCommunication` |
| `NumberOfFanSpeeds` | `readonly` | `number` | - |
| `Offline` | `readonly` | `boolean` | [`BaseDeviceData`](README.md#basedevicedata).`Offline` |
| `OutdoorTemperature` | `readonly` | `number` | - |
| `Power?` | `readonly` | `boolean` | [`BaseDeviceData`](README.md#basedevicedata).`Power` |
| `RoomCO2Level` | `readonly` | `number` | - |
| `RoomTemperature` | `readonly` | `number` | - |
| `SetFanSpeed?` | `readonly` |  \| `auto` \| `very_slow` \| `slow` \| `moderate` \| `fast` \| `very_fast` | `Readonly.SetFanSpeed` |
| `VentilationMode?` | `readonly` | [`VentilationMode`](README.md#ventilationmode) | `Readonly.VentilationMode` |

***

### DeviceDataFromGet

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `Ata` | `readonly` | [`DeviceDataFromGetAta`](README.md#devicedatafromgetata) |
| `Atw` | `readonly` | [`DeviceDataFromGetAtw`](README.md#devicedatafromgetatw) |
| `Erv` | `readonly` | [`DeviceDataFromGetErv`](README.md#devicedatafromgeterv) |

***

### DeviceDataFromListAta

#### Extends

- [`BaseDeviceDataFromList`](README.md#basedevicedatafromlist).`Omit`\<[`DeviceDataFromGetAta`](README.md#devicedatafromgetata), keyof [`DeviceDataNotInList`](README.md#devicedatanotinlist) \| `"SetFanSpeed"` \| `"VaneHorizontal"` \| `"VaneVertical"`\>

#### Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `ActualFanSpeed` | `readonly` | `number` | - |
| `DeviceType` | `readonly` | `Ata` | `Omit.DeviceType` |
| `EffectiveFlags` | `readonly` | `0` | [`BaseDeviceDataFromList`](README.md#basedevicedatafromlist).`EffectiveFlags` |
| `FanSpeed` | `readonly` | [`FanSpeed`](README.md#fanspeed) | - |
| `HasAutomaticFanSpeed` | `readonly` | `boolean` | - |
| `MaxTempAutomatic` | `readonly` | `number` | - |
| `MaxTempCoolDry` | `readonly` | `number` | - |
| `MaxTempHeat` | `readonly` | `number` | - |
| `MinTempAutomatic` | `readonly` | `number` | - |
| `MinTempCoolDry` | `readonly` | `number` | - |
| `MinTempHeat` | `readonly` | `number` | - |
| `NumberOfFanSpeeds` | `readonly` | `number` | `Omit.NumberOfFanSpeeds` |
| `Offline` | `readonly` | `boolean` | [`BaseDeviceDataFromList`](README.md#basedevicedatafromlist).`Offline` |
| `OperationMode?` | `readonly` | [`OperationMode`](README.md#operationmode) | `Omit.OperationMode` |
| `OutdoorTemperature` | `readonly` | `number` | - |
| `Power?` | `readonly` | `boolean` | [`BaseDeviceDataFromList`](README.md#basedevicedatafromlist).`Power` |
| `RoomTemperature` | `readonly` | `number` | `Omit.RoomTemperature` |
| `SetTemperature?` | `readonly` | `number` | `Omit.SetTemperature` |
| `VaneHorizontalDirection` | `readonly` | [`Horizontal`](README.md#horizontal) | - |
| `VaneVerticalDirection` | `readonly` | [`Vertical`](README.md#vertical) | - |
| `WifiSignalStrength` | `readonly` | `number` | [`BaseDeviceDataFromList`](README.md#basedevicedatafromlist).`WifiSignalStrength` |

***

### DeviceDataFromListAtw

#### Extends

- [`BaseDeviceDataFromList`](README.md#basedevicedatafromlist).`Omit`\<[`DeviceDataFromGetAtw`](README.md#devicedatafromgetatw), keyof [`DeviceDataNotInList`](README.md#devicedatanotinlist)\>

#### Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `BoosterHeater1Status` | `readonly` | `boolean` | - |
| `BoosterHeater2PlusStatus` | `readonly` | `boolean` | - |
| `BoosterHeater2Status` | `readonly` | `boolean` | - |
| `CanCool` | `readonly` | `boolean` | - |
| `CondensingTemperature` | `readonly` | `number` | - |
| `CurrentEnergyConsumed` | `readonly` | `number` | - |
| `CurrentEnergyProduced` | `readonly` | `number` | - |
| `DefrostMode` | `readonly` | `number` | - |
| `DeviceType` | `readonly` | `Atw` | `Omit.DeviceType` |
| `EcoHotWater` | `readonly` | `boolean` | - |
| `EffectiveFlags` | `readonly` | `0` | [`BaseDeviceDataFromList`](README.md#basedevicedatafromlist).`EffectiveFlags` |
| `FlowTemperature` | `readonly` | `number` | - |
| `FlowTemperatureZone1` | `readonly` | `number` | - |
| `FlowTemperatureZone2` | `readonly` | `number` | - |
| `ForcedHotWaterMode?` | `readonly` | `boolean` | `Omit.ForcedHotWaterMode` |
| `HasZone2` | `readonly` | `boolean` | - |
| `HeatPumpFrequency` | `readonly` | `number` | - |
| `IdleZone1` | `readonly` | `boolean` | `Omit.IdleZone1` |
| `IdleZone2` | `readonly` | `boolean` | `Omit.IdleZone2` |
| `ImmersionHeaterStatus` | `readonly` | `boolean` | - |
| `LastLegionellaActivationTime` | `readonly` | `string` | - |
| `MaxTankTemperature` | `readonly` | `number` | - |
| `MixingTankWaterTemperature` | `readonly` | `number` | - |
| `Offline` | `readonly` | `boolean` | [`BaseDeviceDataFromList`](README.md#basedevicedatafromlist).`Offline` |
| `OperationMode` | `readonly` | [`OperationModeState`](README.md#operationmodestate) | `Omit.OperationMode` |
| `OperationModeZone1?` | `readonly` | [`OperationModeZone`](README.md#operationmodezone) | `Omit.OperationModeZone1` |
| `OperationModeZone2?` | `readonly` | [`OperationModeZone`](README.md#operationmodezone) | `Omit.OperationModeZone2` |
| `OutdoorTemperature` | `readonly` | `number` | `Omit.OutdoorTemperature` |
| `Power?` | `readonly` | `boolean` | [`BaseDeviceDataFromList`](README.md#basedevicedatafromlist).`Power` |
| `ProhibitCoolingZone1` | `readonly` | `boolean` | `Omit.ProhibitCoolingZone1` |
| `ProhibitCoolingZone2` | `readonly` | `boolean` | `Omit.ProhibitCoolingZone2` |
| `ProhibitHeatingZone1` | `readonly` | `boolean` | `Omit.ProhibitHeatingZone1` |
| `ProhibitHeatingZone2` | `readonly` | `boolean` | `Omit.ProhibitHeatingZone2` |
| `ProhibitHotWater` | `readonly` | `boolean` | `Omit.ProhibitHotWater` |
| `ReturnTemperature` | `readonly` | `number` | - |
| `ReturnTemperatureZone1` | `readonly` | `number` | - |
| `ReturnTemperatureZone2` | `readonly` | `number` | - |
| `RoomTemperatureZone1` | `readonly` | `number` | `Omit.RoomTemperatureZone1` |
| `RoomTemperatureZone2` | `readonly` | `number` | `Omit.RoomTemperatureZone2` |
| `SetCoolFlowTemperatureZone1?` | `readonly` | `number` | `Omit.SetCoolFlowTemperatureZone1` |
| `SetCoolFlowTemperatureZone2?` | `readonly` | `number` | `Omit.SetCoolFlowTemperatureZone2` |
| `SetHeatFlowTemperatureZone1?` | `readonly` | `number` | `Omit.SetHeatFlowTemperatureZone1` |
| `SetHeatFlowTemperatureZone2?` | `readonly` | `number` | `Omit.SetHeatFlowTemperatureZone2` |
| `SetTankWaterTemperature?` | `readonly` | `number` | `Omit.SetTankWaterTemperature` |
| `SetTemperatureZone1?` | `readonly` | `number` | `Omit.SetTemperatureZone1` |
| `SetTemperatureZone2?` | `readonly` | `number` | `Omit.SetTemperatureZone2` |
| `TankWaterTemperature` | `readonly` | `number` | `Omit.TankWaterTemperature` |
| `TargetHCTemperatureZone1` | `readonly` | `number` | - |
| `TargetHCTemperatureZone2` | `readonly` | `number` | - |
| `WifiSignalStrength` | `readonly` | `number` | [`BaseDeviceDataFromList`](README.md#basedevicedatafromlist).`WifiSignalStrength` |
| `Zone1InCoolMode` | `readonly` | `boolean` | - |
| `Zone1InHeatMode` | `readonly` | `boolean` | - |
| `Zone2InCoolMode` | `readonly` | `boolean` | - |
| `Zone2InHeatMode` | `readonly` | `boolean` | - |

***

### DeviceDataFromListErv

#### Extends

- [`BaseDeviceDataFromList`](README.md#basedevicedatafromlist).`Omit`\<[`DeviceDataFromGetErv`](README.md#devicedatafromgeterv), keyof [`DeviceDataNotInList`](README.md#devicedatanotinlist)\>

#### Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `DeviceType` | `readonly` | `Erv` | `Omit.DeviceType` |
| `EffectiveFlags` | `readonly` | `0` | [`BaseDeviceDataFromList`](README.md#basedevicedatafromlist).`EffectiveFlags` |
| `HasAutomaticFanSpeed` | `readonly` | `boolean` | - |
| `HasCO2Sensor` | `readonly` | `boolean` | - |
| `HasPM25Sensor` | `readonly` | `boolean` | - |
| `NumberOfFanSpeeds` | `readonly` | `number` | `Omit.NumberOfFanSpeeds` |
| `Offline` | `readonly` | `boolean` | [`BaseDeviceDataFromList`](README.md#basedevicedatafromlist).`Offline` |
| `OutdoorTemperature` | `readonly` | `number` | `Omit.OutdoorTemperature` |
| `PM25Level` | `readonly` | `number` | - |
| `Power?` | `readonly` | `boolean` | [`BaseDeviceDataFromList`](README.md#basedevicedatafromlist).`Power` |
| `RoomCO2Level` | `readonly` | `number` | `Omit.RoomCO2Level` |
| `RoomTemperature` | `readonly` | `number` | `Omit.RoomTemperature` |
| `SetFanSpeed?` | `readonly` |  \| `auto` \| `very_slow` \| `slow` \| `moderate` \| `fast` \| `very_fast` | `Omit.SetFanSpeed` |
| `VentilationMode?` | `readonly` | [`VentilationMode`](README.md#ventilationmode) | `Omit.VentilationMode` |
| `WifiSignalStrength` | `readonly` | `number` | [`BaseDeviceDataFromList`](README.md#basedevicedatafromlist).`WifiSignalStrength` |

***

### DeviceDataNotInList

#### Extended by

- [`BaseDeviceData`](README.md#basedevicedata)

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `LastCommunication` | `readonly` | `string` |
| `NextCommunication` | `readonly` | `string` |

***

### DeviceDataParams

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `buildingId` | `readonly` | `number` |
| `id` | `readonly` | `number` |

***

### EffectiveFlags

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `Ata` | `readonly` | `Record`\< \| `"Power"` \| `"OperationMode"` \| `"SetFanSpeed"` \| `"SetTemperature"` \| `"VaneHorizontal"` \| `"VaneVertical"`, `number`\> |
| `Atw` | `readonly` | `Record`\< \| `"Power"` \| `"ForcedHotWaterMode"` \| `"OperationModeZone1"` \| `"OperationModeZone2"` \| `"SetCoolFlowTemperatureZone1"` \| `"SetCoolFlowTemperatureZone2"` \| `"SetHeatFlowTemperatureZone1"` \| `"SetHeatFlowTemperatureZone2"` \| `"SetTankWaterTemperature"` \| `"SetTemperatureZone1"` \| `"SetTemperatureZone2"`, `number`\> |
| `Erv` | `readonly` | `Record`\<`"Power"` \| `"SetFanSpeed"` \| `"VentilationMode"`, `number`\> |

***

### ErrorLogData

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `DeviceId` | `readonly` | `number` |
| `EndDate` | `readonly` | `string` |
| `ErrorMessage` | `readonly` | `null` \| `string` |
| `StartDate` | `readonly` | `string` |

***

### ErrorLogPostData

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `DeviceIDs` | `readonly` | readonly `string`[] |
| `FromDate` | `readonly` | `string` |
| `ToDate` | `readonly` | `string` |

***

### FailureData

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `AttributeErrors` | `readonly` | `Record`\<`string`, readonly `string`[]\> |
| `Success` | `readonly` | `false` |

***

### FrostProtectionData

#### Extended by

- [`BuildingData`](README.md#buildingdata)

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `FPEnabled` | `readonly` | `boolean` |
| `FPMaxTemperature` | `readonly` | `number` |
| `FPMinTemperature` | `readonly` | `number` |

***

### FrostProtectionPostData

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `AreaIds?` | `readonly` | readonly `number`[] |
| `BuildingIds?` | `readonly` | readonly `number`[] |
| `DeviceIds?` | `readonly` | readonly `number`[] |
| `Enabled` | `readonly` | `boolean` |
| `FloorIds?` | `readonly` | readonly `number`[] |
| `MaximumTemperature` | `readonly` | `number` |
| `MinimumTemperature` | `readonly` | `number` |

***

### GroupPostData

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `Specification` | `readonly` | \{ `AreaID`: `null`; `BuildingID`: `null`; `FloorID`: `number`; \} \| \{ `AreaID`: `null`; `BuildingID`: `number`; `FloorID`: `null`; \} \| \{ `AreaID`: `number`; `BuildingID`: `null`; `FloorID`: `null`; \} |
| `State` | `readonly` | \{ `FanSpeed`: \| `null` \| `auto` \| `very_slow` \| `slow` \| `moderate` \| `fast` \| `very_fast`; `OperationMode`: `null` \| [`OperationMode`](README.md#operationmode); `Power`: `null` \| `boolean`; `SetTemperature`: `null` \| `number`; `VaneHorizontalDirection`: `null` \| [`Horizontal`](README.md#horizontal); `VaneHorizontalSwing`: `null` \| `boolean`; `VaneVerticalDirection`: `null` \| [`Vertical`](README.md#vertical); `VaneVerticalSwing`: `null` \| `boolean`; \} |
| `State.FanSpeed?` | `public` |  \| `null` \| `auto` \| `very_slow` \| `slow` \| `moderate` \| `fast` \| `very_fast` |
| `State.OperationMode?` | `public` | `null` \| [`OperationMode`](README.md#operationmode) |
| `State.Power?` | `public` | `null` \| `boolean` |
| `State.SetTemperature?` | `public` | `null` \| `number` |
| `State.VaneHorizontalDirection?` | `public` | `null` \| [`Horizontal`](README.md#horizontal) |
| `State.VaneHorizontalSwing?` | `public` | `null` \| `boolean` |
| `State.VaneVerticalDirection?` | `public` | `null` \| [`Vertical`](README.md#vertical) |
| `State.VaneVerticalSwing?` | `public` | `null` \| `boolean` |

***

### HolidayModeData

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `EndDate` | `readonly` | \{ `Day`: `number`; `Hour`: `number`; `Minute`: `number`; `Month`: `number`; `Second`: `number`; `Year`: `number`; \} |
| `EndDate.Day` | `readonly` | `number` |
| `EndDate.Hour` | `readonly` | `number` |
| `EndDate.Minute` | `readonly` | `number` |
| `EndDate.Month` | `readonly` | `number` |
| `EndDate.Second` | `readonly` | `number` |
| `EndDate.Year` | `public` | `number` |
| `HMEnabled` | `public` | `boolean` |
| `HMEndDate` | `public` | `null` \| `string` |
| `HMStartDate` | `public` | `null` \| `string` |
| `StartDate` | `public` | \{ `Day`: `number`; `Hour`: `number`; `Minute`: `number`; `Month`: `number`; `Second`: `number`; `Year`: `number`; \} |
| `StartDate.Day` | `public` | `number` |
| `StartDate.Hour` | `public` | `number` |
| `StartDate.Minute` | `public` | `number` |
| `StartDate.Month` | `public` | `number` |
| `StartDate.Second` | `public` | `number` |
| `StartDate.Year` | `public` | `number` |
| `TimeZone` | `public` | `number` |

***

### HolidayModePostData

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `Enabled` | `readonly` | `boolean` |
| `EndDate` | `readonly` | `null` \| \{ `Day`: `number`; `Hour`: `number`; `Minute`: `number`; `Month`: `number`; `Second`: `number`; `Year`: `number`; \} |
| `HMTimeZones` | `readonly` | readonly \{ `Areas`: readonly `number`[]; `Buildings`: readonly `number`[]; `Devices`: readonly `number`[]; `Floors`: readonly `number`[]; `TimeZone`: `number`; \}[] |
| `StartDate` | `readonly` | `null` \| \{ `Day`: `number`; `Hour`: `number`; `Minute`: `number`; `Month`: `number`; `Second`: `number`; `Year`: `number`; \} |

***

### ListDevice

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `Ata` | `readonly` | [`ListDeviceAta`](README.md#listdeviceata) |
| `Atw` | `readonly` | [`ListDeviceAtw`](README.md#listdeviceatw) |
| `Erv` | `readonly` | [`ListDeviceErv`](README.md#listdeviceerv) |

***

### ListDeviceAta

#### Extends

- [`BaseListDevice`](README.md#baselistdevice)

#### Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `AreaID` | `readonly` | `number` | [`BaseListDevice`](README.md#baselistdevice).`AreaID` |
| `BuildingID` | `readonly` | `number` | [`BaseListDevice`](README.md#baselistdevice).`BuildingID` |
| `Device` | `readonly` | [`DeviceDataFromListAta`](README.md#devicedatafromlistata) | - |
| `DeviceID` | `readonly` | `number` | [`BaseListDevice`](README.md#baselistdevice).`DeviceID` |
| `DeviceName` | `readonly` | `string` | [`BaseListDevice`](README.md#baselistdevice).`DeviceName` |
| `FloorID` | `readonly` | `number` | [`BaseListDevice`](README.md#baselistdevice).`FloorID` |
| `Type` | `readonly` | [`DeviceType`](README.md#devicetype) | [`BaseListDevice`](README.md#baselistdevice).`Type` |

***

### ListDeviceAtw

#### Extends

- [`BaseListDevice`](README.md#baselistdevice)

#### Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `AreaID` | `readonly` | `number` | [`BaseListDevice`](README.md#baselistdevice).`AreaID` |
| `BuildingID` | `readonly` | `number` | [`BaseListDevice`](README.md#baselistdevice).`BuildingID` |
| `Device` | `readonly` | [`DeviceDataFromListAtw`](README.md#devicedatafromlistatw) | - |
| `DeviceID` | `readonly` | `number` | [`BaseListDevice`](README.md#baselistdevice).`DeviceID` |
| `DeviceName` | `readonly` | `string` | [`BaseListDevice`](README.md#baselistdevice).`DeviceName` |
| `FloorID` | `readonly` | `number` | [`BaseListDevice`](README.md#baselistdevice).`FloorID` |
| `Type` | `readonly` | [`DeviceType`](README.md#devicetype) | [`BaseListDevice`](README.md#baselistdevice).`Type` |

***

### ListDeviceErv

#### Extends

- [`BaseListDevice`](README.md#baselistdevice)

#### Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `AreaID` | `readonly` | `number` | [`BaseListDevice`](README.md#baselistdevice).`AreaID` |
| `BuildingID` | `readonly` | `number` | [`BaseListDevice`](README.md#baselistdevice).`BuildingID` |
| `Device` | `readonly` | [`DeviceDataFromListErv`](README.md#devicedatafromlisterv) | - |
| `DeviceID` | `readonly` | `number` | [`BaseListDevice`](README.md#baselistdevice).`DeviceID` |
| `DeviceName` | `readonly` | `string` | [`BaseListDevice`](README.md#baselistdevice).`DeviceName` |
| `FloorID` | `readonly` | `number` | [`BaseListDevice`](README.md#baselistdevice).`FloorID` |
| `Type` | `readonly` | [`DeviceType`](README.md#devicetype) | [`BaseListDevice`](README.md#baselistdevice).`Type` |

***

### Logger

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `error` | `readonly` | (...`data`: `any`[]) => `void`(`message`?: `any`, ...`optionalParams`: `any`[]) => `void` |
| `log` | `readonly` | (...`data`: `any`[]) => `void`(`message`?: `any`, ...`optionalParams`: `any`[]) => `void` |

***

### LoginCredentials

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `password` | `readonly` | `string` |
| `username` | `readonly` | `string` |

***

### LoginData

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `LoginData` | `readonly` | `null` \| \{ `ContextKey`: `string`; `Expiry`: `string`; \} |

***

### LoginPostData

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `AppVersion` | `readonly` | `string` |
| `Email` | `readonly` | `string` |
| `Language?` | `readonly` | `number` |
| `Password` | `readonly` | `string` |
| `Persist?` | `readonly` | `boolean` |

***

### PostData

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `Ata` | `readonly` | [`DevicePostDataAta`](README.md#devicepostdataata) |
| `Atw` | `readonly` | [`DevicePostDataAtw`](README.md#devicepostdataatw) |
| `Erv` | `readonly` | [`DevicePostDataErv`](README.md#devicepostdataerv) |

***

### ReportData

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `Ata` | `readonly` | [`ReportDataAta`](README.md#reportdataata) |
| `Atw` | `readonly` | [`ReportDataAtw`](README.md#reportdataatw) |
| `Erv` | `readonly` | `never` |

***

### ReportDataAta

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `Auto` | `readonly` | readonly `number`[] |
| `Cooling` | `readonly` | readonly `number`[] |
| `Dry` | `readonly` | readonly `number`[] |
| `Fan` | `readonly` | readonly `number`[] |
| `Heating` | `readonly` | readonly `number`[] |
| `Other` | `readonly` | readonly `number`[] |
| `TotalAutoConsumed` | `readonly` | `number` |
| `TotalCoolingConsumed` | `readonly` | `number` |
| `TotalDryConsumed` | `readonly` | `number` |
| `TotalFanConsumed` | `readonly` | `number` |
| `TotalHeatingConsumed` | `readonly` | `number` |
| `TotalOtherConsumed` | `readonly` | `number` |
| `UsageDisclaimerPercentages` | `readonly` | `string` |

***

### ReportDataAtw

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `CoP` | `readonly` | readonly `number`[] |
| `TotalCoolingConsumed` | `readonly` | `number` |
| `TotalCoolingProduced` | `readonly` | `number` |
| `TotalHeatingConsumed` | `readonly` | `number` |
| `TotalHeatingProduced` | `readonly` | `number` |
| `TotalHotWaterConsumed` | `readonly` | `number` |
| `TotalHotWaterProduced` | `readonly` | `number` |

***

### ReportPostData

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `DeviceID` | `readonly` | `number` |
| `FromDate` | `readonly` | `string` |
| `ToDate` | `readonly` | `string` |

***

### SetDeviceData

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `Ata` | `readonly` | [`SetDeviceDataAta`](README.md#setdevicedataata) |
| `Atw` | `readonly` | [`SetDeviceDataAtw`](README.md#setdevicedataatw) |
| `Erv` | `readonly` | [`SetDeviceDataErv`](README.md#setdevicedataerv) |

***

### SetDeviceDataAta

#### Extends

- [`BaseSetDeviceData`](README.md#basesetdevicedata)

#### Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `EffectiveFlags` | `public` | `number` | [`BaseSetDeviceData`](README.md#basesetdevicedata).`EffectiveFlags` |
| `OperationMode?` | `readonly` | [`OperationMode`](README.md#operationmode) | - |
| `Power?` | `readonly` | `boolean` | [`BaseSetDeviceData`](README.md#basesetdevicedata).`Power` |
| `SetFanSpeed?` | `readonly` |  \| `auto` \| `very_slow` \| `slow` \| `moderate` \| `fast` \| `very_fast` | - |
| `SetTemperature?` | `readonly` | `number` | - |
| `VaneHorizontal?` | `readonly` | [`Horizontal`](README.md#horizontal) | - |
| `VaneVertical?` | `readonly` | [`Vertical`](README.md#vertical) | - |

***

### SetDeviceDataAtw

#### Extends

- [`BaseSetDeviceData`](README.md#basesetdevicedata)

#### Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `EffectiveFlags` | `public` | `number` | [`BaseSetDeviceData`](README.md#basesetdevicedata).`EffectiveFlags` |
| `ForcedHotWaterMode?` | `readonly` | `boolean` | - |
| `OperationModeZone1?` | `readonly` | [`OperationModeZone`](README.md#operationmodezone) | - |
| `OperationModeZone2?` | `readonly` | [`OperationModeZone`](README.md#operationmodezone) | - |
| `Power?` | `readonly` | `boolean` | [`BaseSetDeviceData`](README.md#basesetdevicedata).`Power` |
| `SetCoolFlowTemperatureZone1?` | `readonly` | `number` | - |
| `SetCoolFlowTemperatureZone2?` | `readonly` | `number` | - |
| `SetHeatFlowTemperatureZone1?` | `readonly` | `number` | - |
| `SetHeatFlowTemperatureZone2?` | `readonly` | `number` | - |
| `SetTankWaterTemperature?` | `readonly` | `number` | - |
| `SetTemperatureZone1?` | `readonly` | `number` | - |
| `SetTemperatureZone2?` | `readonly` | `number` | - |

***

### SetDeviceDataErv

#### Extends

- [`BaseSetDeviceData`](README.md#basesetdevicedata)

#### Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `EffectiveFlags` | `public` | `number` | [`BaseSetDeviceData`](README.md#basesetdevicedata).`EffectiveFlags` |
| `Power?` | `readonly` | `boolean` | [`BaseSetDeviceData`](README.md#basesetdevicedata).`Power` |
| `SetFanSpeed?` | `readonly` |  \| `auto` \| `very_slow` \| `slow` \| `moderate` \| `fast` \| `very_fast` | - |
| `VentilationMode?` | `readonly` | [`VentilationMode`](README.md#ventilationmode) | - |

***

### SetPowerPostData

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `DeviceIds` | `readonly` | readonly `number`[] |
| `Power` | `readonly` | `boolean` |

***

### SettingManager

#### Properties

| Property | Type |
| :------ | :------ |
| `get` | \<`K`\>(`key`: `K`) => `undefined` \| `null` \| [`APISettings`](README.md#apisettings)\[`K`\] |
| `set` | \<`K`\>(`key`: `K`, `value`: [`APISettings`](README.md#apisettings)\[`K`\]) => `void` |

***

### SuccessData

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `AttributeErrors` | `readonly` | `null` |
| `Success` | `readonly` | `true` |

***

### TilesData\<T\>

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* keyof *typeof* [`DeviceType`](README.md#devicetype) \| `null` |

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `SelectedDevice` | `readonly` | `T` *extends* `"Ata"` \| `"Atw"` \| `"Erv"` ? [`DeviceDataFromGet`](README.md#devicedatafromget)\[`T`\<`T`\>\] : `null` |
| `Tiles` | `readonly` | readonly \{ `Device`: `number`; `Offline`: `boolean`; `Power`: `boolean`; `RoomTemperature`: `number`; `RoomTemperature2`: `number`; `TankWaterTemperature`: `number`; \}[] |

***

### TilesPostData\<T\>

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* keyof *typeof* [`DeviceType`](README.md#devicetype) \| `null` |

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `DeviceIDs` | `readonly` | readonly `number`[] & `T` *extends* `"Ata"` \| `"Atw"` \| `"Erv"` ? \{ `SelectedBuilding`: `number`; `SelectedDevice`: `number`; \} : \{ `SelectedBuilding`: `null`; `SelectedDevice`: `null`; \} |

## Type Aliases

### DeviceDataFromGetAta

```ts
type DeviceDataFromGetAta: BaseDeviceDataFromGet & DeviceDataAta;
```

#### Source

[src/types.ts:151](https://github.com/OlivierZal/melcloud-api/blob/05a8715f0ecd6a76c52c5454edbad305fc0dcadb/src/types.ts#L151)

***

### DeviceDataFromGetAtw

```ts
type DeviceDataFromGetAtw: BaseDeviceDataFromGet & DeviceDataAtw;
```

#### Source

[src/types.ts:221](https://github.com/OlivierZal/melcloud-api/blob/05a8715f0ecd6a76c52c5454edbad305fc0dcadb/src/types.ts#L221)

***

### DeviceDataFromGetErv

```ts
type DeviceDataFromGetErv: BaseDeviceDataFromGet & DeviceDataErv;
```

#### Source

[src/types.ts:276](https://github.com/OlivierZal/melcloud-api/blob/05a8715f0ecd6a76c52c5454edbad305fc0dcadb/src/types.ts#L276)

***

### DevicePostDataAta

```ts
type DevicePostDataAta: BaseDevicePostData & Readonly<SetDeviceDataAta>;
```

#### Source

[src/types.ts:143](https://github.com/OlivierZal/melcloud-api/blob/05a8715f0ecd6a76c52c5454edbad305fc0dcadb/src/types.ts#L143)

***

### DevicePostDataAtw

```ts
type DevicePostDataAtw: BaseDevicePostData & Readonly<SetDeviceDataAtw>;
```

#### Source

[src/types.ts:203](https://github.com/OlivierZal/melcloud-api/blob/05a8715f0ecd6a76c52c5454edbad305fc0dcadb/src/types.ts#L203)

***

### DevicePostDataErv

```ts
type DevicePostDataErv: BaseDevicePostData & Readonly<SetDeviceDataErv>;
```

#### Source

[src/types.ts:266](https://github.com/OlivierZal/melcloud-api/blob/05a8715f0ecd6a76c52c5454edbad305fc0dcadb/src/types.ts#L266)

***

### ListDeviceAny

```ts
type ListDeviceAny: ListDeviceAta | ListDeviceAtw | ListDeviceErv;
```

#### Source

[src/types.ts:463](https://github.com/OlivierZal/melcloud-api/blob/05a8715f0ecd6a76c52c5454edbad305fc0dcadb/src/types.ts#L463)

***

### NonEffectiveFlagsKeyOf\<T\>

```ts
type NonEffectiveFlagsKeyOf<T>: Exclude<keyof T, "EffectiveFlags">;
```

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Source

[src/types.ts:3](https://github.com/OlivierZal/melcloud-api/blob/05a8715f0ecd6a76c52c5454edbad305fc0dcadb/src/types.ts#L3)

***

### NonEffectiveFlagsValueOf\<T\>

```ts
type NonEffectiveFlagsValueOf<T>: T[NonEffectiveFlagsKeyOf<T>];
```

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Source

[src/types.ts:4](https://github.com/OlivierZal/melcloud-api/blob/05a8715f0ecd6a76c52c5454edbad305fc0dcadb/src/types.ts#L4)

## Variables

### FLAG\_UNCHANGED

```ts
const FLAG_UNCHANGED: 0 = 0x0;
```

#### Source

[src/types.ts:1](https://github.com/OlivierZal/melcloud-api/blob/05a8715f0ecd6a76c52c5454edbad305fc0dcadb/src/types.ts#L1)

***

### effectiveFlagsAta

```ts
const effectiveFlagsAta: Record<NonEffectiveFlagsKeyOf<SetDeviceDataAta>, number>;
```

#### Source

[src/types.ts:132](https://github.com/OlivierZal/melcloud-api/blob/05a8715f0ecd6a76c52c5454edbad305fc0dcadb/src/types.ts#L132)

***

### effectiveFlagsAtw

```ts
const effectiveFlagsAtw: Record<NonEffectiveFlagsKeyOf<SetDeviceDataAtw>, number>;
```

#### Source

[src/types.ts:187](https://github.com/OlivierZal/melcloud-api/blob/05a8715f0ecd6a76c52c5454edbad305fc0dcadb/src/types.ts#L187)

***

### effectiveFlagsErv

```ts
const effectiveFlagsErv: Record<NonEffectiveFlagsKeyOf<SetDeviceDataErv>, number>;
```

#### Source

[src/types.ts:258](https://github.com/OlivierZal/melcloud-api/blob/05a8715f0ecd6a76c52c5454edbad305fc0dcadb/src/types.ts#L258)
