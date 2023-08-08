export interface IManifest {
  eventId: string
  updateHash: string
  updateTime: number
  placeIds: string[]
  manifestSections: ManifestSection[]
}

interface ManifestSection {
  numSeats: number
  name: string
  ga?: boolean
};
