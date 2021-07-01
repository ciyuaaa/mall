

export const request = (options) => {
    const URL = "http://152.136.185.210:7878/api/m5"
    return fetch(URL+options).then((data) => {
        // console.log(data)
        return data.json()
    })
}
