function callbackFunction() {
    console.log('do something')
}

function receivesAFunction(callbackFunction) {
    return callbackFunction()
}

receivesAFunction()

function namedFucntion() {
    return 'whatever'
}

function returnsANamedFunction() {
    return namedFucntion
}

function returnsAnAnonymousFunction() {
    return function () {
        return 'I am Anonymous'
    }
}
