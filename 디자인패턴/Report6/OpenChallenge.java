package homework5;
import java.util.Scanner;

abstract class GameObject { 
	protected int distance; // �ѹ� �̵��Ÿ�
	protected int x,y; // ���� ��ġ(ȭ�� �� ���� ��ġ)
	public GameObject(int startX, int startY, int distance) { // �ʱ� ��ġ�� �̵� �Ÿ� ����
		this.x = startX;
		this.y = startY;
		this.distance = distance;
	}
	
	public int getX() { return x; }
	public int getY() { return y; }
	
	public boolean collide(GameObject p) { // �� ��ü�� ��ü p�� �浹������ true ����
		if(this.x == p.getX() && this.y == p.getY())
			return true;
		else
			return false;
	}
	
	public abstract void move(); // �̵��� ���� ���ο� ��ġ�� x,y�� ����
	public abstract char getShape(); // ��ü�� ����� ��Ÿ���� ���� ����
}

class Bear extends GameObject {
	public Bear(int startX, int startY, int distance) {
		super(startX, startY, distance);
	}
	@Override
	public void move() {
		Scanner sc = new Scanner(System.in);
		
		System.out.print("����(a), �Ʒ�(s), ��(d), ������(f) >> ");
		String direction = sc.next();
		
		Game.array[x][y] = '-'; // ���� ��ǥ NULL
						
		switch(direction) {
		case "a":
			if(y==0)
				y=0;
			else
				y-=distance;
			break;
		case "s":
			if(x==9)
				x=9;
			else
				x+=distance;
			break;
		case "d":
			if(x==0)
				x=0;
			else
				x-=distance;
			break;
		case "f":
			if(y==19)
				y=19;
			else
				y+=distance;
			break;
		default:
				System.out.println("error");
		}
		Game.array[x][y] = getShape(); // �ٲ� ��ǥ�� �ٽ� ��� �Է�.
	}
	@Override
	public char getShape() {
		return 'O';
	}
}

class Fish extends GameObject {
	public Fish(int startX, int startY, int distance) {
		super(startX, startY, distance);
	}
	@Override
	public void move() {
		int num = (int)(Math.random()*4);
		Game.array[x][y] = '-'; // ���� ��ǥ�� �ƹ��͵� ���� �س��´�.
		switch(num) {
		case 0:
			if(y==0)
				y=0;
			else
				y-=distance;
			break;
		case 1:
			if(x==9)
				x=9;
			else
				x+=distance;
			break;
		case 2:
			if(x==0)
				x=0;
			else
				x-=distance;
			break;
		case 3:
			if(y==19)
				y=19;
			else
				y+=distance;
			break;
		default:
				System.out.println("error");
		}
		Game.array[x][y] = getShape(); // �ٲ� ��ǥ�� �ٽ� ��� �Է�.
	}
	@Override
	public char getShape() {
		return '@';
	}
}

class Game { // ��ü���� ���� ����
	Scanner sc = new Scanner(System.in);
	
	Bear bear;
	Fish fish;
	public static char array[][] = new char[10][20];
	
	public void Set() { // ���� �ʱ� ����
		bear = new Bear(0, 0, 1); // ó�� ��ġ (0, 0), �̵� �Ÿ� 1.
		fish = new Fish(5, 5, 1); // ó�� ��ġ (5, 5), �̵� �Ÿ� 1.
		for(int i=0; i<array.length; i++) {
			for(int j=0; j<array[i].length; j++) {
				array[i][j] = '-';
			}
		}
		array[bear.x][bear.y] = bear.getShape();
		array[fish.x][fish.y] = fish.getShape();
	}
	
	public void ShowArray() {
		for(int i=0; i<array.length; i++) {
			for(int j=0; j<array[i].length; j++) {
				System.out.print(array[i][j]);
			}
			System.out.println();
		}
	}
	
	public void WinArray() { // �̰��� ��� ������ �迭(Bear�� Fish ���� ���¿��� �� ��ǥ�� Bear ��� ����)
		array[bear.x][bear.y] = bear.getShape();
		for(int i=0; i<array.length; i++) {
			for(int j=0; j<array[i].length; j++) {
				System.out.print(array[i][j]);
			}
			System.out.println();
		}
	}
	
	public void Run() {
		int random;
		Set();
		
		while(true) {
			int fishNum = 0;
			for(int i=0; i<5; i++) {
				ShowArray();
				bear.move();
				random = (int)(Math.random()*2); // 0,1 �� ���� ����
				if(random==1) {// random ���ڰ� 1�̸� fish �����̰�(0�̸� �������� ����), fishNum 1 ����.
					fishNum++;
					if(fishNum<=2) {// 5�� �� 2���� ������ �� �����Ƿ� fishNum�� 2������ ���� �����δ�.
						fish.move();
					}
				}
				if(i==3 && fishNum==0) {// 4° ���ε��� fish 1���� �������� �ʾ����� �����̰�, fishNum 1����.
					fish.move();
					fishNum++;
				}
				if(i==4 && fishNum==1) {// 5° ���ε��� fish 1���� �������ٸ� �����̰�, fishNum 1����.
					fish.move();
					fishNum++;
				}
				if((bear.collide(fish)) == true) {
					WinArray();
					System.out.println("Bear Wins");
					return;
				}
			}
		}
	}
}

public class OpenChallenge {
	public static void main(String[] args) {
		System.out.println("** Bear�� Fish �Ա� ������ �����մϴ�.**");
		Game game = new Game();
		game.Run();
	}
}



