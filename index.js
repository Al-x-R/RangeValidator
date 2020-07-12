"use strict";

/*
Реализовать класс RangeValidator, со следующими свойствами:
      from (number);
      to (number);
Реализовать getter'ы и setter'ы для обоих свойств
Реализовать getter range, который будет возвращать массив с двумя числами диапазона
Реализовать метод validate, который будет принимать число и проверить входит ли число в указанный диапазон.
*/

class RangeValidator {
    /**
     *
     * @param {number} from
     * @param {number} to
     */
    constructor(from = 0, to = 0) {
        this.from = from
        this.to = to
    }

    set from(val) {
        if (typeof val !== 'number') {
            throw new TypeError(' "from" value must be number type');
        }
        this._from = val;
    }

    get from() {
        return this._from;
    }

    set to(value) {
        if (typeof value !== 'number') {
            throw new TypeError(' "to" value must be number type')
        }
        if (value < this._from) {
            throw new RangeError(' "to" must be greater than the value of "from" ')
        }
        this._to = value
    }

    get to() {
        return this._to
    }

    /**
     *
     * @returns {Number[]}
     */
    get range() {
        return [this.from, this.to]
    }

    /**
     *
     * @param {number} num
     * @returns {boolean|boolean}
     */
    validate(num) {
        if (typeof num !== 'number') {
            throw new TypeError('param must be a number')
        }
        return num >= this.from && num <= this.to;
    }
}

const jb = new RangeValidator(30, 20)
console.log(jb.range)
console.log(jb.validate(11))