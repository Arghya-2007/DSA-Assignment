/*
 * Q4: Merge two arrays into one.
 * If both inputs are already sorted, a two-pointer merge produces a sorted
 * result in O(n + m) — the same core step used in merge sort.
 */

#include <stdio.h>

void printArray(int arr[], int n) {
    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);
    printf("\n");
}

/* Merges two sorted arrays a[0..n-1] and b[0..m-1] into result[0..n+m-1]. */
void mergeSortedArrays(int a[], int n, int b[], int m, int result[]) {
    int i = 0, j = 0, k = 0;

    while (i < n && j < m) {
        if (a[i] <= b[j])
            result[k++] = a[i++];
        else
            result[k++] = b[j++];
    }

    /* copy any remaining elements */
    while (i < n) result[k++] = a[i++];
    while (j < m) result[k++] = b[j++];
}

int main(void) {
    int a[] = {2, 6, 9, 15};
    int b[] = {1, 4, 8, 10, 20};
    int n = sizeof(a) / sizeof(a[0]);
    int m = sizeof(b) / sizeof(b[0]);
    int result[50];

    mergeSortedArrays(a, n, b, m, result);

    printf("Array A: ");
    printArray(a, n);
    printf("Array B: ");
    printArray(b, m);
    printf("Merged:  ");
    printArray(result, n + m);

    return 0;
}
