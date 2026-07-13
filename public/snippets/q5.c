/*
 * Q5: Add and subtract two matrices.
 * Both operations require identical dimensions and run in O(rows * cols),
 * applying the operation element-wise.
 */

#include <stdio.h>

#define ROWS 2
#define COLS 3

void printMatrix(int mat[ROWS][COLS]) {
    for (int i = 0; i < ROWS; i++) {
        for (int j = 0; j < COLS; j++)
            printf("%d ", mat[i][j]);
        printf("\n");
    }
}

void addMatrices(int a[ROWS][COLS], int b[ROWS][COLS], int result[ROWS][COLS]) {
    for (int i = 0; i < ROWS; i++)
        for (int j = 0; j < COLS; j++)
            result[i][j] = a[i][j] + b[i][j];
}

void subtractMatrices(int a[ROWS][COLS], int b[ROWS][COLS], int result[ROWS][COLS]) {
    for (int i = 0; i < ROWS; i++)
        for (int j = 0; j < COLS; j++)
            result[i][j] = a[i][j] - b[i][j];
}

int main(void) {
    int a[ROWS][COLS] = {{1, 2, 3}, {4, 5, 6}};
    int b[ROWS][COLS] = {{7, 8, 9}, {1, 2, 3}};
    int sum[ROWS][COLS], diff[ROWS][COLS];

    addMatrices(a, b, sum);
    subtractMatrices(a, b, diff);

    printf("Matrix A:\n");
    printMatrix(a);
    printf("Matrix B:\n");
    printMatrix(b);
    printf("A + B:\n");
    printMatrix(sum);
    printf("A - B:\n");
    printMatrix(diff);

    return 0;
}
