package homework4;

import java.util.Scanner;

class player
{
Scanner scanner = new Scanner(System.in);
	
	public String name; // ���� ������ �̸�
	public String word; // �ܾ�
	
	public String getWordFromUser() // ����ڷκ��� �ܾ �Է¹޴� �޼ҵ�
	{
		word=scanner.next();
		return word;
	}
	
	public boolean checkSuccess(char lastchar) // �����ձ� ���� ����
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
		String word = "�ƹ���";
		int num;
		int i=0;
		int j=0;
		System.out.println("�����ձ� ������ �����մϴ�...");
		System.out.print("���ӿ� �����ϴ� �ο��� ����Դϱ�? >> ");
		num=scanner.nextInt();
		
		player[] play = new player[num];
		
		for(i=0; i<num; i++) // ������ �̸��� ����
		{
			System.out.print("�������� �̸��� �Է��ϼ��� >> ");
			play[i] = new player();
			play[i].name=scanner.next();
		}
		
		System.out.println("�����ϴ� �ܾ�� " + word + " �Դϴ�.");
		
		i=0;
		
		while(true)
		{
			j=i%num; // �����ձⰡ �� �ҿ� ������ ���� ���� ����
			int lastIndex=word.length()-1; // ������ ���ڿ� ���� index
			char lastChar=word.charAt(lastIndex); // ������ ����
			
			System.out.print(play[j].name+ ">> ");
			play[j].getWordFromUser(); // ����� �ܾ� �Է� �ޱ�
			
			boolean continuing=play[j].checkSuccess(lastChar);
			
			if(continuing==false)
			{
				System.out.println(play[j].name +"�� �����ϴ�.");
				break;
			}
			
			word=play[j].word;
			i++;
		}
	}
}
