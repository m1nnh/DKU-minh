import java.util.Scanner;

public class selectSort {
	public static void main(String args[]) { // main �Լ�
		
		int n; // �Է� ���� ������ ���� ���� ����
		int arr[]; // ���ڸ� ���� �迭 ����
		int temp; // ������ ���� ���� ����
			
		Scanner sc=new Scanner(System.in); // ǥ�� �Է� Ŭ���� ����			
		System.out.printf("n��  �Է�: "); // n�� �Է� : ���
		
		n=sc.nextInt(); // n�� �Է�
		arr=new int[n]; // �Է¹��� ������ŭ �迭 �Ҵ�
		System.out.printf(n + "���� ���� �Է� : "); // n���� ���� �Է� : ��� 
		
		for(int i=0; i<arr.length; i++)  //n���� ���� �Է��� ���� �ݺ���
			arr[i]=sc.nextInt(); // n���� ���� �Է�
		
		for(int i=0; i<arr.length; i++) // ������ ���� �ݺ���
		{
			for(int j=i+1; j<arr.length; j++) // ������ ���� �ݺ���
			if(arr[i]>arr[j]) { //�������� ���� ( arr[i]�� arr[j]���� ũ�� )
				temp=arr[i];  // arr[i]�� ���� temp�� ����
				arr[i]=arr[j]; // arr[j]�� ���� arr[i]�� ����
				arr[j]=temp;	// arr[j]�� temp���� �����Ͽ� ���� arr[i]�� arr[j]�� ���� ��ü					
			}
		}
		
		System.out.print("���İ��: "); // ���İ��: ���
		for(int i=0; i<arr.length; i++) // ���� ��� ����� ���� �ݺ���
			System.out.print(arr[i]+ " "); //���� ��� ���				 // main �Լ� ��

	}
}