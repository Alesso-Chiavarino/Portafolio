export const logError = (message) => {
    console.log(`\x1b[31m%s\x1b[0m`, message)
}

export const logWarning = (message) => {
    console.log(`\x1b[33m%s\x1b[0m`, message)
}

export const logInfo = (message) => {
    console.log(`\x1b[36m%s\x1b[0m`, message)
}

export const logSuccess = (message) => {
    console.log(`\x1b[32m%s\x1b[0m`, message)
}

export class LogColors {

    static logBlack(message) {
        console.log(`\x1b[30m%s\x1b[0m`, message)
    }

    static logRed(message) {
        console.log(`\x1b[31m%s\x1b[0m`, message)
    }

    static logGreen = (message) => {
        console.log(`\x1b[32m%s\x1b[0m`, message)
    }

    static logYellow = (message) => {
        console.log(`\x1b[33m%s\x1b[0m`, message)
    }

    static logBlue = (message) => {
        console.log(`\x1b[34m%s\x1b[0m`, message)
    }

    static logMagenta = (message) => {
        console.log(`\x1b[35m%s\x1b[0m`, message)
    }

    static logCyan = (message) => {
        console.log(`\x1b[36m%s\x1b[0m`, message)
    }

    static logWhite = (message) => {
        console.log(`\x1b[37m%s\x1b[0m`, message)
    }

}
