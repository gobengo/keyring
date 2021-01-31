/** Make a log with a named prefix and different log levels . */
export function makeLog(name: string) {
    return (level: 'debug', ...loggables: any[]) => {
        console[level](`[${name}]`, ...loggables)
    }
}
