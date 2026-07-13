/*
 * Q15: Recursion examples.
 * (a) Factorial   - O(n) calls, base case n <= 1.
 * (b) GCD         - Euclidean algorithm, O(log(min(a,b))) calls.
 * (c) Tower of Hanoi - O(2^n) moves for n disks, base case n == 0.
 */

#include <stdio.h>

long factorial(int n) {
    if (n <= 1) return 1;              /* base case */
    return n * factorial(n - 1);       /* recursive case */
}

int gcd(int a, int b) {
    if (b == 0) return a;              /* base case */
    return gcd(b, a % b);              /* recursive case */
}

void towerOfHanoi(int n, char from, char aux, char to) {
    if (n == 0) return;                /* base case: no disks to move */

    towerOfHanoi(n - 1, from, to, aux);          /* move n-1 disks out of the way */
    printf("Move disk %d from %c to %c\n", n, from, to);
    towerOfHanoi(n - 1, aux, from, to);          /* move them onto the target */
}

int main(void) {
    int n = 5;
    printf("Factorial of %d = %ld\n\n", n, factorial(n));

    int x = 48, y = 18;
    printf("GCD of %d and %d = %d\n\n", x, y, gcd(x, y));

    int disks = 3;
    printf("Tower of Hanoi with %d disks:\n", disks);
    towerOfHanoi(disks, 'A', 'B', 'C');

    return 0;
}
