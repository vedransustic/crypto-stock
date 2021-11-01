export type Article = {
    about: About
    datePublished: string
    description: string
    image: Image
    name: string
    provider: Array<Provider>
    url: string
}

type About = {
    name: string
    readLink: string
}

type Image = {
    thumbnail: Thumbnail
}

type Thumbnail = {
    contentUrl: string
    height: number
    width: number
}

type Provider = {
    name: string
    image: {
        thumbnail:{
            contentUrl: string
        }
    }
}