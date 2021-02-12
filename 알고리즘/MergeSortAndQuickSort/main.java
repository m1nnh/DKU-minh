/* by. Dankook University Software ParkMinHyeok */

/* n���� Random Number�鿡 ���� �պ����İ� �������� ������ �����Ͽ� ǥ�� �����, �׷����� �׷���.
   n = 1000,5000,10000,20000,50000,100000�� ���� �׽�Ʈ �϶�.
       ������ n�� ���� ��� 10���� �׽�Ʈ �����Ϳ� �����ϰ� �� ����� �����Ͽ� ǥ�� �׷����� ������.
       �պ� ���İ� �������� ��ȯȣ�� �Լ��� ����϶�. */

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
		
		System.out.println("n�� �Է��Ͻʽÿ� :");
		array_size=Integer.parseInt(s.nextLine()); // input n and practice
		
		for(int i=0; i<10; i++) // mergesort start.
		{
			
			int array_merge[]=new int[array_size+1];
			for(int j=1; j<= array_size; j++)
				array_merge[j]=(int)(java.lang.Math.random()*100000);
			//�� mergesort start.
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
		
		System.out.println("�պ� ���� ���� �ð� : "+merge_avg); 
		// mergesort average time.
		System.out.println("�� ���� ���� �ð� : "+quick_avg); 
		// quicksort average time.
	}

}
