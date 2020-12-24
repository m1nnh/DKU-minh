import java.util.Scanner;

class multiStageGraph
{
		public int n,e;    // number of vertex and edge
		public int[][] c;    // array of cost
		public int[] level; // array of level
		public int dlevel;    // max level
		public int[][] bcost;
		public int[][] bd;
   
		public multiStageGraph()
		{// initialize the multistage graph
			n = 0;
	   		e = 0;
	   		c = new int[0][0];
	   		level = new int[0];
	   		dlevel = 0;
	   		bcost = new int[0][0];
	   		bd = new int[0][0];
		}

		public void make_matrix()
		{
	   		System.out.printf("insput n & e : ");
	   		Scanner input = new Scanner(System.in);
	   		n = input.nextInt();    // enter the numver of vertex
	   		e = input.nextInt();   // enter the numver of edge
	   		c = new int[n+1][n+1];   // initialize the cost array
	   		level = new int[n+1];   // initialize the level array
		}
		public void matrix()
		{// put a wight on the matrix
			Scanner input = new Scanner(System.in);
			this.make_matrix();
			int i;
			int m,n;   // vertex m and n
			int weight;   // Weight between m vertices and n vertices
			for(i=0;i<this.e;i++)
			{
				System.out.printf("No."+(i+1)+" edge:");
				m = input.nextInt();   // input the vertex m
				n = input.nextInt();   // input the vertex n
				weight = input.nextInt();// input the weight
				c[m][n] = weight;
			}
		}

		public void show_matrix()
		{
			int i,j;
			System.out.print("\nThe Matrix\n");
			for(i=1;i<=this.n;i++)
			{
				for(j=1;j<=this.n;j++)
					System.out.print(c[i][j]+" ");
				System.out.print("\n");
			}
			System.out.print("\n");
		}

		public void set_level(int v, int count)
		{// set the level for each level
			int i;
			this.level[v]=count; 
			for(i=1;i<=this.n;i++)
				if(c[v][i]!=0)set_level(i,count+1);   
				// Increase count by 1 for each recursive function execution and count is level
		}

		public void show_level()
		{
			this.set_level(1, 1);
			int i;
			for(i=1;i<=this.n;i++)
			System.out.print("No."+i+" level : " + this.level[i]+"\n");
			System.out.print("\n");
		}

		public void set_dlevel()
		{// getting the Max level
			int i;
			int max_level=0;
			for(i=1;i<=this.n;i++)
				if(max_level < level[i])max_level=level[i];
			this.dlevel=max_level;
   
			this.bcost = new int[this.dlevel+1][this.n+1];    // initialize the bcost
			this.bd = new int[this.dlevel+1][this.n+1];      // initialize the bd
		}
		if(index==0)
			return 0;
		else
		{
			this.bd[level][num]=index;   // the edge that determines the minimum value of bcost
			this.bcost[level][num]=Min;   // minimum weights
			return Min;
		}
}

	public void print_bcost()
	{
		System.out.print("smallest cost : "+this.set_bcost(this.dlevel,this.n)+"\n");
	}

	public void print_bd()
	{
		int path[] = new int [this.dlevel+1];   // declaring and initializing array path
		int level, index=this.n;
		for(level = this.dlevel;level>0;level--)
		{//at each level
			path[level]=this.bd[level][index];   // store bd in array path
			index = this.bd[level][index];      // move index to next bd
		}
		System.out.print("smallest path : ");
		for(int i=2;i<this.dlevel;i++)
		{
			System.out.print(path[i]+"->");
		}
		
		System.out.print(path[this.dlevel]);
	}
}
