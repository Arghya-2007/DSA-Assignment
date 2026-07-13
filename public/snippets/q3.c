/*
 * Q3: Sort an array using Bubble Sort, Selection Sort, and Insertion Sort.
 * All three are O(n^2) in the worst case, O(1) extra space (in-place).
 * Each function works on its own copy so the three runs are independent.
 */

#include <stdio.h>

#define SIZE 7

void printArray(int arr[], int n) {
    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);
    printf("\n");
}

/* Repeatedly swaps adjacent out-of-order pairs. Early-exits if a pass makes no swaps. */
void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int swapped = 0;
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = 1;
            }
        }
        if (!swapped) break;  /* already sorted, stop early */
    }
}

/* Finds the minimum of the unsorted remainder and swaps it into place. */
void selectionSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int minIdx = i;
        for (int j = i + 1; j < n; j++)
            if (arr[j] < arr[minIdx])
                minIdx = j;

        if (minIdx != i) {
            int temp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;
        }
    }
}

/* Builds the sorted array one element at a time, shifting larger elements right. */
void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

int main(void) {
    int original[SIZE] = {29, 10, 14, 37, 8, 1, 45};
    int arr[SIZE];

    for (int i = 0; i < SIZE; i++) arr[i] = original[i];
    bubbleSort(arr, SIZE);
    printf("Bubble Sort:    ");
    printArray(arr, SIZE);

    for (int i = 0; i < SIZE; i++) arr[i] = original[i];
    selectionSort(arr, SIZE);
    printf("Selection Sort: ");
    printArray(arr, SIZE);

    for (int i = 0; i < SIZE; i++) arr[i] = original[i];
    insertionSort(arr, SIZE);
    printf("Insertion Sort: ");
    printArray(arr, SIZE);

    return 0;
}
