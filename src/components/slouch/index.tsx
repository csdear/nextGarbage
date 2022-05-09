
export default function getSlouchy() {

    const results = [
        { id: '51ae551f8e1e4440e2111002', email: 'joe.oozer@google.com' },
        { id: '50f97f153b511b30cd222008', email: 'bob.handler@google.com' },
        { id: '5108400773fca56a36333001', email: 'suzy.smith@google.com' },
    ];

    return {
        data: results,
        slouchyA: JSON.stringify(results[2]),
        slouchyB: "tacos!",
        slouchyFireA(
            a: string,
            b: number,
            c: boolean,
        ) {
            console.log(`slouchy fire A, REC: ${a}, ${b}, ${c}`);
        },
        slouchyFireB(
            a,
            b,
        ) {
            console.log('slouchy fire B');
            return a + b;
        }
    }

}