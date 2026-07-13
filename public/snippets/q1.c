/*
 * Q1: Insertion and deletion operations in an array.
 * - Insert: shift elements right from the insert position, then place the value.
 * - Delete: shift elements left over the deleted position.
 * Time: O(n) for both (worst case shifts the whole array). Space: O(1) extra.
 */

#include <stdio.h>

#define MAX 100

void printArray(int arr[], int n) {
    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);
    printf("\n");
}

/* Inserts `value` at index `pos` (0-based). Returns new size, or -1 if invalid. */
int insertElement(int arr[], int n, int pos, int value) {
    if (pos < 0 || pos > n || n >= MAX) return -1;

    for (int i = n; i > pos; i--)
        arr[i] = arr[i - 1];

    arr[pos] = value;
    return n + 1;
}

/* Deletes the element at index `pos`. Returns new size, or -1 if invalid. */
int deleteElement(int arr[], int n, int pos) {
    if (pos < 0 || pos >= n) return -1;

    for (int i = pos; i < n - 1; i++)
        arr[i] = arr[i + 1];

    return n - 1;
}

int main(void) {
    int arr[MAX] = {10, 20, 30, 40, 50};
    int n = 5;

    printf("Original array: ");
    printArray(arr, n);

    n = insertElement(arr, n, 2, 99);   /* insert 99 at index 2 */
    printf("After inserting 99 at index 2: ");
    printArray(arr, n);

    n = deleteElement(arr, n, 0);       /* delete element at index 0 */
    printf("After deleting element at index 0: ");
    printArray(arr, n);

    return 0;
}
