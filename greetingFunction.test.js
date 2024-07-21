const greeting = require ('./greeting')

test ('greeting jo' ,() => {
    expect(greeting('jo')).toBe('hello jo');
})


