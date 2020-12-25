public class quickSort {
	
	private int a[];
	private int asize;
	
	public quickSort(int arr[], int n)
	{
		a=arr;
		asize=n;
		a[n+1]=Integer.MAX_VALUE; // a[n+1] is set to infinity. 
	}
	
	public int[] quicksort_call()
	{
		quicksort(1,asize);
		return a;
	}
	
	void quicksort(int p, int q)
	/* Sorts the elements a[p],..., a[q] which reside in
	   the global array a[1:n] into ascending order; a[n+1]
	   is considered to be defined and must be >= all the
	   elements in a[1:n]. */
	{
		if(p<q)
	/* If there are more than one element
	   divide P into two subproblems. */
		{
			int j=partition(a,p,q+1);
			/* j is the position of the
               partitioning element.
               Solve the subproblems. */
			quicksort(p,j-1);
			quicksort(j+1,q); // There is no need for combining solutions.
		}
	}

	int partition(int a[], int m, int p)
	
	/* Within a[m], a[m+1],..., a[p-1] the elements
	   are rearranged in such a manner that if
	   initially t==a[m], then after completion
	   a[q]==t for some q between m and p-1, a[k]<=t
	   for m<=k<q, and a[k]>=t for q<k<p. q is returned. */
	
	{
		int v=a[m]; int i=m,j=p;
		
		do
		{
			
			do i++;
			while (a[i]<v);
			
			do j--;
			while (a[j]>v);
			
			if(i<j) inter_change(a,i,j);
		} while(i<j);
		
		a[m]=a[j];
		a[j]=v;
		
		return(j);
		
	}
	
	void inter_change(int a[], int i, int j)
	{
		
		int temp=a[i];
		a[i]=a[j];
		a[j]=temp;
		
	}
}
