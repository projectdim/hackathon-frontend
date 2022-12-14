// ENDPOINT - GET ALL MARKERS

export interface Data {
    markers: Array<Pin>
}

export interface Pin {
    id: string,
    lat: number,
    lon: number
}

// ENDPOINT - MARKER DETAILS per ID

// .../api/marker/:id

export interface Marker {
    id: string,
    address: Adress,
    photos: Array<Photo>,
    statuses: Array<Status>

}

// GOOGLE MAPS DATA ABOUT LOCATION (?)
export interface Adress {
    city: string,
    zipcode: string,
    street: string
}

export interface Photo {
    id: string,
    label: string,
    url: string
}

export interface Status {
    id: string,
    type: StatusType,
    statusKey: StatusKey // STABLE / INTACT / ACCESSIBLE
    safetyLevel: number // 0 red  5 orange 10 green
    distance: string | null
    modifiedDate: Date
    description: string
}

export type StatusType = 'building' | 'electricity' | 'water' | 'roads' | 'fuel'
export type StatusKey = 'intact' | 'stable' | 'accessible' | 'closed' | 'open'


// ENDPOINT - CONTACTS

export interface Contact {
    label: string,
    telephoneNumber: string,
    email: string
}
