//Код для мазохистов
const durationResolveable = ["секунд", "минут", "час", "день", "дней", "неделя", "недель", "неделю", "недели", "месяц"];
const numberResolveable = ["один", "одна", "два", "две", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять", "десять"];
const durResolveable = (select, duration) => {
    const _dur = {
        секунд: 1000 * duration,
        минут: 1000 * 60 * duration,
        час: 1000 * 60 * 60 * duration,
        день: 1000 * 60 * 60 * 24 * duration,
        дней: 1000 * 60 * 60 * 24 * duration,
        неделя: 1000 * 60 * 60 * 24 * 7 * duration,
        недель: 1000 * 60 * 60 * 24 * 7 * duration,
        неделю: 1000 * 60 * 60 * 24 * 7 * duration,
        месяц: 1000 * 60 * 60 * 24 * 7 * 4 * duration,
    };
    return _dur[select];
};
const numResolveable = (number) => {
    const _num = {
        один: 1,
        одна: 1,
        два: 2,
        две: 2,
        три: 3,
        четыре: 4,
        пять: 5,
        шесть: 6,
        семь: 7,
        восемь: 8,
        девять: 9,
        десять: 10
    };
    return _num[number];
};
export function duration(string) {
    for (var d = 0, n = 0, aN = "минут", aD = "одна";;) {
        let dur;
        let num;
        if (d < durationResolveable.length) {
            dur = durationResolveable[d];
            if (string.includes(dur)) {
                aD = dur;
            }
        }
        if (n < numberResolveable.length) {
            num = numberResolveable[n];
            if (string.includes(num)) {
                aN = num;
            }
        }
        if (d > durationResolveable.length && n > numberResolveable.length) {
            return durResolveable(aD, numResolveable(aN));
            break;
        }
        else {
            n++;
            d++;
        }
    }
}
