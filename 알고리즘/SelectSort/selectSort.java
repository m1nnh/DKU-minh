import java.util.Scanner;

public class selectSort {
	public static void main(String args[]) { // main 함수
		
		int n; // 입력 받을 정수의 개수 변수 서언
		int arr[]; // 숫자를 넣을 배열 선언
		int temp; // 정렬을 위한 변수 선언
			
		Scanner sc=new Scanner(System.in); // 표준 입력 클래스 생성			
		System.out.printf("n값  입력: "); // n값 입력 : 출력
		
		n=sc.nextInt(); // n값 입력
		arr=new int[n]; // 입력받을 개수만큼 배열 할당
		System.out.printf(n + "개의 정수 입력 : "); // n개의 정수 입력 : 출력 
		
		for(int i=0; i<arr.length; i++)  //n개의 정수 입력을 위한 반복문
			arr[i]=sc.nextInt(); // n개의 정수 입력
		
		for(int i=0; i<arr.length; i++) // 정렬을 위한 반복문
		{
			for(int j=i+1; j<arr.length; j++) // 정렬을 위한 반복문
			if(arr[i]>arr[j]) { //오름차순 정렬 ( arr[i]가 arr[j]보다 크면 )
				temp=arr[i];  // arr[i]의 값을 temp의 저장
				arr[i]=arr[j]; // arr[j]의 값을 arr[i]에 저장
				arr[j]=temp;	// arr[j]에 temp값을 저장하여 최종 arr[i]와 arr[j]의 값을 교체					
			}
		}
		
		System.out.print("정렬결과: "); // 정렬결과: 출력
		for(int i=0; i<arr.length; i++) // 정렬 결과 출력을 위한 반복문
			System.out.print(arr[i]+ " "); //정렬 결과 출력				 // main 함수 끝

	}
}