function printmsg(a, b, c) {
    if (typeof (a) == 'string') {
        if (b == null) {
            console.log('fun 1 implemented');
        }
        else {
            console.log('fun 2 implemeted');
        }
    }
    else if (typeof (a) == 'boolean') {
        console.log('fun 3 implemented');
    }
}
printmsg("hello", "world", "morning");
printmsg("hello", "world");
printmsg('hello');
printmsg(true, "hello");
