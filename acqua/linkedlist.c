#include<stdio.h>
#include<malloc.h>

struct node
{
    int data;
    struct node *next;
};

    struct node *start = NULL;
    struct node *create_ll(struct node *);
    struct node *display(struct node *);
    struct node *insert_beg(struct node *);
    struct node *insert_end(struct node *);

int main()
{
    do
    {
        int option;
        printf("\nEnter our option");
        scanf("%d", &option);
        switch(option)
        {
            case 1: 
                start = create_ll(start);
                printf("\nLinked list created");
                break;
            case 2:
                start = display(start);
                break;                
        }
    }while( option != 3);
    return 0;
}

struct node *create_ll(struct node *start)
{
    struct node *new_node, *ptr;
    int num;
    printf("\nEnter -1 to end");
    printf("\nEnter the data: ");
    scanf("%d", &num);
    while(num != -1)
    {
        new_node = (struct node *)malloc(sizeof(struct node));
        if(start == NULL)
        {
            new_node->next = NULL;
            start = new_node;
        }
        else
        {
            ptr = start;
            while(ptr->next != NULL)
            {
                ptr = ptr->next;
            }
            ptr->next = new_node;
            new_node->next = NULL;
        }
        printf("\nEnter the data: ");
        scanf("%d", &num);
    }
    return start;
}


struct node *insert_display(struct node *start)
{
    struct node *ptr;
    ptr = start;
    while(ptr != NULL)
    {
        printf("\t%d", ptr->data);
        ptr = ptr->next;
    }
    return start;
}