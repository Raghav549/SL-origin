export type DiscoveryStatus = 'draft' | 'pending' | 'verified' | 'rejected'
export type RequestStatus = 'open' | 'matching' | 'quoted' | 'fulfilled' | 'closed'

export type Discovery = {
  id: string
  slug: string
  title: string
  summary: string | null
  category: string
  region_id: string
  status: DiscoveryStatus
  cover_url: string | null
}

export type BuyerRequest = {
  id: string
  title: string
  description: string | null
  category: string
  quantity: string | null
  destination_country: string | null
  status: RequestStatus
}
