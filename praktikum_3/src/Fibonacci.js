function fibonacci(limit)
{
    if(limit == null || limit < 1)
        return false;

    var array = [];
    console.log("Fibonacci with Limit: " + limit);

    for(i = 1; i<=limit; i++) {
        if (i < 3) {
            array[i] = 1;
        } else {
            array[i] = array[i-1] + array[i-2];
        }

        console.log("F[" + i + "] " + array[i]);
    }

    return array;
}
