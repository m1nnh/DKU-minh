package homework4;

import java.util.Scanner;

class player
{
Scanner scanner = new Scanner(System.in);
	
	public String name; // 게임 참가자 이름
	public String word; // 단어
	
	public String getWordFromUser() // 사용자로부터 단어를 입력받는 메소드
	{
		word=scanner.next();
		return word;
	}
	
	public boolean checkSuccess(char lastchar) // 끝말잇기 성공 여부
	{
		if(lastchar == word.charAt(0))
			return true;
		else
			return false;
	}
}

public class WordGame {
	public static void main(String[] args)
	{
		Scanner scanner = new Scanner(System.in);
		String word = "아버지";
		int num;
		int i=0;
		int j=0;
		System.out.println("끝말잇기 게임을 시작합니다...");
		System.out.print("게임에 참가하는 인원은 몇명입니까? >> ");
		num=scanner.nextInt();
		
		player[] play = new player[num];
		
		for(i=0; i<num; i++) // 참가자 이름을 저장
		{
			System.out.print("참가자의 이름을 입력하세요 >> ");
			play[i] = new player();
			play[i].name=scanner.next();
		}
		
		System.out.println("시작하는 단어는 " + word + " 입니다.");
		
		i=0;
		
		while(true)
		{
			j=i%num; // 끝말잇기가 한 텀에 끝나지 않을 수도 있음
			int lastIndex=word.length()-1; // 마지막 문자에 대한 index
			char lastChar=word.charAt(lastIndex); // 마지막 문자
			
			System.out.print(play[j].name+ ">> ");
			play[j].getWordFromUser(); // 사용자 단어 입력 받기
			
			boolean continuing=play[j].checkSuccess(lastChar);
			
			if(continuing==false)
			{
				System.out.println(play[j].name +"이 졌습니다.");
				break;
			}
			
			word=play[j].word;
			i++;
		}
	}
}
