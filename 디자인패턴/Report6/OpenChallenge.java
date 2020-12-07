package homework5;
import java.util.Scanner;

abstract class GameObject { 
	protected int distance; // 한번 이동거리
	protected int x,y; // 현재 위치(화면 맵 상의 위치)
	public GameObject(int startX, int startY, int distance) { // 초기 위치와 이동 거리 설정
		this.x = startX;
		this.y = startY;
		this.distance = distance;
	}
	
	public int getX() { return x; }
	public int getY() { return y; }
	
	public boolean collide(GameObject p) { // 이 객체가 객체 p와 충돌했으면 true 리턴
		if(this.x == p.getX() && this.y == p.getY())
			return true;
		else
			return false;
	}
	
	public abstract void move(); // 이동한 후의 새로운 위치로 x,y로 변경
	public abstract char getShape(); // 객체의 모양을 나타내는 문자 리턴
}

class Bear extends GameObject {
	public Bear(int startX, int startY, int distance) {
		super(startX, startY, distance);
	}
	@Override
	public void move() {
		Scanner sc = new Scanner(System.in);
		
		System.out.print("왼쪽(a), 아래(s), 위(d), 오른쪽(f) >> ");
		String direction = sc.next();
		
		Game.array[x][y] = '-'; // 현재 좌표 NULL
						
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
		Game.array[x][y] = getShape(); // 바뀐 좌표에 다시 모양 입력.
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
		Game.array[x][y] = '-'; // 현재 좌표에 아무것도 없게 해놓는다.
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
		Game.array[x][y] = getShape(); // 바뀐 좌표에 다시 모양 입력.
	}
	@Override
	public char getShape() {
		return '@';
	}
}

class Game { // 전체적인 게임 진행
	Scanner sc = new Scanner(System.in);
	
	Bear bear;
	Fish fish;
	public static char array[][] = new char[10][20];
	
	public void Set() { // 게임 초기 설정
		bear = new Bear(0, 0, 1); // 처음 위치 (0, 0), 이동 거리 1.
		fish = new Fish(5, 5, 1); // 처음 위치 (5, 5), 이동 거리 1.
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
	
	public void WinArray() { // 이겼을 경우 보여줄 배열(Bear가 Fish 먹은 상태에서 그 좌표에 Bear 모양 삽입)
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
				random = (int)(Math.random()*2); // 0,1 중 랜덤 숫자
				if(random==1) {// random 숫자가 1이면 fish 움직이고(0이면 움직이지 않음), fishNum 1 증가.
					fishNum++;
					if(fishNum<=2) {// 5번 중 2번만 움직일 수 있으므로 fishNum이 2이하일 때만 움직인다.
						fish.move();
					}
				}
				if(i==3 && fishNum==0) {// 4째 턴인데도 fish 1번도 움직이지 않았으면 움직이고, fishNum 1증가.
					fish.move();
					fishNum++;
				}
				if(i==4 && fishNum==1) {// 5째 턴인데도 fish 1번만 움직였다면 움직이고, fishNum 1증가.
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
		System.out.println("** Bear의 Fish 먹기 게임을 시작합니다.**");
		Game game = new Game();
		game.Run();
	}
}



