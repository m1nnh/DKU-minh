/* by. Dankook University Software ParkMinHyeok */

/* n개의 Random Number들에 대해 합병정렬과 퀵정렬의 성능을 측정하여 표로 만들고, 그래프로 그려라.
   n = 1000,5000,10000,20000,50000,100000에 대해 테스트 하라.
       각각의 n에 대해 적어도 10개의 테스트 데이터에 적용하고 그 평균을 산출하여 표와 그래프를 만들어라.
       합병 정렬과 퀵정렬은 순환호출 함수를 사용하라. */

import java.util.Scanner;

public class main {
	public static void main(String[] args)
	{
		int array_size; // array size.
		long merge_time[]=new long[10];
		// array to store the execution time of the merge alignment.
		long quick_time[]=new long[10]; 
		// array to store the execution time of the quick alignment.
		
		double merge_avg=0; // store the average of the merge alignment.
		double quick_avg=0; // store the average of the quick alignment.
		Scanner s=new Scanner(System.in);
		
		System.out.println("n을 입력하십시오 :");
		array_size=Integer.parseInt(s.nextLine()); // input n and practice
		
		for(int i=0; i<10; i++) // mergesort start.
		{
			
			int array_merge[]=new int[array_size+1];
			for(int j=1; j<= array_size; j++)
				array_merge[j]=(int)(java.lang.Math.random()*100000);
			//↓ mergesort start.
			long starttime_merge=System.currentTimeMillis(); 
			// mergesort start time.
			mergeSort m= new 			 mergeSort(array_merge,array_size);
			array_merge=m.mergesort_call();
			long endtime_merge=System.currentTimeMillis(); 
			// mergesort end time.
			// mergesort end.
			merge_time[i]=endtime_merge-starttime_merge; 
			// save the time to the array.
			
			int array_quick[]=new int[array_size+2]; // quicksort.
			
			for(int j=1; j<=array_size; j++)
				array_quick[j]=(int)(java.lang.Math.random()*100000);
			// quicksort start.
			long starttime_quick=System.currentTimeMillis(); 
			// quicksort start time.
			quickSort q=new quickSort(array_quick,array_size);
			array_quick=q.quicksort_call();
			long endtime_quick=System.currentTimeMillis(); 
			// quicksort end time.
			// quick end.
			
			quick_time[i]=endtime_quick-starttime_quick; 
			// save the time to the array.				
		}
		for(int i=0; i<10; i++)
		{
			merge_avg+=merge_time[i];
			quick_avg+=quick_time[i];
		} // adds all the time to perform.
		
		merge_avg=merge_avg/10; // average.
		quick_avg=quick_avg/10; // average.
		
		System.out.println("합병 정렬 실행 시간 : "+merge_avg); 
		// mergesort average time.
		System.out.println("퀵 정렬 실행 시간 : "+quick_avg); 
		// quicksort average time.
	}

}
