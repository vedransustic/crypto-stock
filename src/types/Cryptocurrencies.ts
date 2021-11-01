import { Coin } from "./Application";

export type ICoinsState = {
    searchTerm: string,
    displayCoins: Array<Coin>
}