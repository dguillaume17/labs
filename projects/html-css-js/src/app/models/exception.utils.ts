export namespace ExceptionUtils {

    export function assertUnreachable(value: never) {
        throw new Error();
    }

}
