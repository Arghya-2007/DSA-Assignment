/*
 * Q6: Multiply two matrices.
 * Valid only when A's column count equals B's row count.
 * Result is (A_rows x B_cols). Time: O(rows_A * cols_B * cols_A).
 */

#include <stdio.h>

#define A_ROWS 2
#define A_COLS 3
#define B_ROWS 3   /* must equal A_COLS for valid multiplication */
#define B_COLS 2

void printMatrix(int rows, int cols, int mat[rows][cols]) {
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++)
            printf("%d ", mat[i][j]);
        printf("\n");
    }
}

void multiplyMatrices(int a[A_ROWS][A_COLS], int b[B_ROWS][B_COLS],
                       int result[A_ROWS][B_COLS]) {
    for (int i = 0; i < A_ROWS; i++) {
        for (int j = 0; j < B_COLS; j++) {
            result[i][j] = 0;
            for (int k = 0; k < A_COLS; k++)
                result[i][j] += a[i][k] * b[k][j];
        }
    }
}

int main(void) {
    int a[A_ROWS][A_COLS] = {{1, 2, 3}, {4, 5, 6}};
    int b[B_ROWS][B_COLS] = {{7, 8}, {9, 10}, {11, 12}};
    int result[A_ROWS][B_COLS];

    multiplyMatrices(a, b, result);

    printf("Matrix A:\n");
    printMatrix(A_ROWS, A_COLS, a);
    printf("Matrix B:\n");
    printMatrix(B_ROWS, B_COLS, b);
    printf("A x B:\n");
    printMatrix(A_ROWS, B_COLS, result);

    return 0;
}
