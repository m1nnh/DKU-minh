# by. software 32151671 parkminhyeok

#include<stdio.h>

struct student	// student table
{
	int id;
	char name[20];
};

struct course	// course table
{
	int course_no;
	char name[20];
};

struct course_taken	// course_taken table
{
	int no;
	int id;
	int course_no;
	char grade[20];
};

int main(void)
{
	struct student s[3] = { {15, "박민혁"}, {16, "이상민"}, {17, "홍승기"} };
	struct course c[3] = { {123,"이석균"}, {456, "박제호"}, {789, "우진운"} };
	struct course_taken ct[3] = { {1,15, 123, "4.5"}, {2,16,456, "4.5"}, {3,17,789,"4.5"} };	// input value

	printf("name   |   course_name   |   grade   |\n");
	printf("--------------------------------------\n");

	for (int i = 0; i < 3; i++)
	{
		for (int j = 0; j < 3; j++)
		{
			if (s[i].id == ct[j].id)
				printf("%s\t     %s\t      %s\n", s[i].name, c[j].name, ct[j].grade);
		}
		printf("--------------------------------------\n");
	}

	return 0;

}