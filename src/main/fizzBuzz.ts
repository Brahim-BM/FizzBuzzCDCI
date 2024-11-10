export const fizzBuzz = (num: number): string => {
    let result: string = "";

    if(isDivideBy3_OrContains3(num)) {
        result += "Fizz"
    }
    if(isDivideBy5_OrContains5(num)) {
        result += "Buzz"
    }

    if (result == "") {
        return String(num)
    } else {
        return result
    }
}

const isDivideBy3_OrContains3 = (num: number): boolean => {
    return num % 3 == 0 || String(num).includes("3");
}

const isDivideBy5_OrContains5 = (num: number): boolean => {
    return num % 5 == 0 || String(num).includes("5");
}

