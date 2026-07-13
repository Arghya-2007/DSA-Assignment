/*
 * Q16: Simple queue operations using an array.
 * FIFO structure. This is a linear queue (not circular) — once `rear`
 * hits capacity, the queue reports full even if front slots are empty.
 * enqueue/dequeue are O(1).
 */

#include <stdio.h>

#define CAPACITY 5

int queue[CAPACITY];
int front = -1;
int rear = -1;

int isEmpty(void) { return front == -1; }
int isFull(void)  { return rear == CAPACITY - 1; }

void enqueue(int value) {
    if (isFull()) {
        printf("Queue overflow: cannot enqueue %d\n", value);
        return;
    }
    if (isEmpty()) front = 0;   /* first element inserted */
    queue[++rear] = value;
}

int dequeue(void) {
    if (isEmpty()) {
        printf("Queue underflow\n");
        return -1;
    }
    int value = queue[front];
    if (front == rear)          /* queue just became empty */
        front = rear = -1;
    else
        front++;
    return value;
}

int main(void) {
    enqueue(10);
    enqueue(20);
    enqueue(30);

    printf("Dequeued: %d\n", dequeue());
    printf("Dequeued: %d\n", dequeue());

    enqueue(40);
    enqueue(50);
    enqueue(60);  /* this one should overflow: capacity is 5, rear caps at index 4 */

    printf("Dequeued: %d\n", dequeue());
    printf("Dequeued: %d\n", dequeue());
    printf("Dequeued: %d\n", dequeue());

    return 0;
}
