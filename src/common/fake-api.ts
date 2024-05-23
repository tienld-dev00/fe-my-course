import data from './fake-data.json'

const getData = async (dataName: string): Promise<any> => {
    await wait(500)
    //return data copy
    return JSON.parse(JSON.stringify((data as any)[dataName]))
}

function wait(ms: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

export default getData
