// ENDPOINT - GET ALL MARKERS

export interface Data {
    markers: Array<Pin>
}

export interface Pin {
    id: string,
    lat: number,
    lng: number
}

// ENDPOINT - MARKER DETAILS per ID

// .../api/marker/:id

export interface Marker extends Pin {
    "address": Adress,
    "photos": Array<Photo>,
    "statuses": Array<Status>,
}

// GOOGLE MAPS DATA ABOUT LOCATION (?)
export interface Adress {
    city: string,
    zipcode: string,
    street: string
}

export interface Photo {
    label: string,
    url: string
}

export interface Status {
    id: string,
    type: string,
    statusKey: string // STABLE / INTACT / ACCESSIBLE
    safetyLevel: boolean
    distance: string | null
    modifiedDate: string
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
