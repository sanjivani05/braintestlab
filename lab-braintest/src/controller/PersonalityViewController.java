package controller;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet(urlPatterns= {"/personality"})
public class PersonalityViewController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

    public PersonalityViewController() {
        super();
        
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("Entering do get");
		RequestDispatcher rd=this.getServletContext().getRequestDispatcher("/WEB-INF/views/personalityView.jsp");
		rd.forward(request, response);
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		
		String options=request.getParameter("selectedOptions");
		
		System.out.println(options);
		public class PersonalityCalculator
		{
			public int[]  findAnswers(String options)
			{
				int i=0;
				String s[]=options.split(",");
				int n=s.length;
				int a[]=new int[n];
				for (String b : s)
				{
					a[i]=Integer.parseInt(b);
					i++;
				}
				return a;
			}
			public String findYourBrainType(String options)
			{
				int a[]=findAnswers(options);
				int  b=a[0]+a[1]+a[2]+a[4]+a[7]+a[9]+a[10]+a[11]+a[13]+a[17]+a[19];
				int c= a[3]=a[3]+a[5]+a[6]+a[8]+a[12]+a[14]+a[15]+a[16]+a[18];
				int x=66-b+c;
				if((x>=20)&&(x<=55))
				{
					String str="Left-brained";
					return str;
				}
				if((x>=56)&&(x<=64))
				{
					String str="No clear preference";
					return str;
				}
				if((x>=65)&&(x<=100))
						{
					String str= "Right-brained";
					return  str;
						}
				return options;
			}
		}		
		

		request.setAttribute("message", message);
		
		if(message!=null)
		{
			if(message.equals("rightbrained")) {
				RequestDispatcher rd=this.getServletContext().getRequestDispatcher("/WEB-INF/views/rightBrainView.jsp");
				rd.forward(request, response);
			}
			else if(message.equals("leftbrained")) {
				RequestDispatcher rd=this.getServletContext().getRequestDispatcher("/WEB-INF/views/leftBrainView.jsp");
				rd.forward(request, response);
			}
			else {
				RequestDispatcher rd=this.getServletContext().getRequestDispatcher("/WEB-INF/views/neutralView.jsp");
				rd.forward(request, response);
			}
		
		}
		}
	}


