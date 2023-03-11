//Код для мазохистов
export function booleans(b: boolean){
    if(b === true){
        return "Да"
    } else {
        return "Нет"
    }
}

export function rebooleans(b: string | "Да" | "Нет"){
    if(b === "Да"){
        return true
    } else {
        return false
    }
}