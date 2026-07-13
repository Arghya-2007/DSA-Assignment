/*
 * Q2: Search for an element using Linear Search and Binary Search.
 * Linear Search:  O(n), works on unsorted data.
 * Binary Search:  O(log n), requires the array to be sorted.
 */

#include <stdio.h>

/* Returns index of key, or -1 if not found. Checks every element in order. */
int linearSearch(int arr[], int n, int key) {
    for (int i = 0; i < n; i++)
        if (arr[i] == key)
            return i;
    return -1;
}

/* Returns index of key, or -1 if not found. Array must already be sorted ascending. */
int binarySearch(int arr[], int n, int key) {
    int low = 0, high = n - 1;

    while (low <= high) {
        int mid = low + (high - low) / 2;  /* avoids overflow vs (low+high)/2 */

        if (arr[mid] == key)
            return mid;
        else if (arr[mid] < key)
            low = mid + 1;
        else
            high = mid - 1;
    }
    return -1;
}

int main(void) {
    int arr[] = {12, 4, 56, 23, 8, 90, 1};
    int n = sizeof(arr) / sizeof(arr[0]);
    int key = 23;

    int idx = linearSearch(arr, n, key);
    if (idx != -1)
        printf("Linear Search: %d found at index %d\n", key, idx);
    else
        printf("Linear Search: %d not found\n", key);

    /* Binary search needs sorted data */
    int sorted[] = {1, 4, 8, 12, 23, 56, 90};
    int sn = sizeof(sorted) / sizeof(sorted[0]);

    idx = binarySearch(sorted, sn, key);
    if (idx != -1)
        printf("Binary Search: %d found at index %d\n", key, idx);
    else
        printf("Binary Search: %d not found\n", key);

    return 0;
}
