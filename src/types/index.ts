import { List } from "immutable";

export type GlobalStats = {
    base: string,
    limit: number,
    offset: number,
    order: string,
    total: number,
    total24hVolume: number,
    totalExchanges: number,
    totalMarketCap: number,
    totalMarkets: number,
}

export type Coin = {
    allTimeHigh: {
        price: string,
        timestamp: number
    }
    approvedSupply: boolean
    change: number
    circulatingSupply: number
    color: string
    confirmedSupply: boolean
    description: string
    firstSeen: number
    history: List<string>
    iconType: string
    iconUrl: string
    id: number
    links: Array<SameItem>
    listedAt: number
    marketCap: number
    name: string
    numberOfExchanges: number
    numberOfMarkets: number
    penalty: false
    price: string
    rank: number
    slug: string
    socials: Array<SameItem>
    symbol: string
    totalSupply: number
    type: string
    uuid: string
    volume: number
    websiteUrl: string
}

type SameItem = {
    name: string
    type: string
    url: string
}