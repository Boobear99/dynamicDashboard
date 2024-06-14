function confirm(){
			const confirm=document.getElementById("checkConfirm");
			let first=document.getElementById("input1").value;
			let last=document.getElementById("input2").value;
			let password=document.getElementById("password1").value;
			let PASSWORD=document.getElementById("password2").value;
			const check1=document.getElementById("check1");
			const check2=document.getElementById("check2");
			const check3=document.getElementById("check3");
			const check4=document.getElementById("check4");
			
			
			
			if (first==="") {
				first=0;
				
				check1.innerHTML="*";
				const input1=document.querySelectorAll("input");
				input1[0].placeholder="input first name";
				
				
				check2.innerHTML="";
				check3.innerHTML="";
				check4.innerHTML="";
				confirm.innerHTML="";
			}else if (last===""){
				last=0;
				
				const input1=document.querySelectorAll("input");
				input1[1].placeholder="input last name";
				
				check1.innerHTML="";
				check2.innerHTML="*";
				check3.innerHTML="";
				check4.innerHTML="";
				confirm.innerHTML="";
			}else if (password==="") {
				password=0;
				
				const input1=document.querySelectorAll("input");
				input1[2].placeholder="input password";
			
				check1.innerHTML="";
				check2.innerHTML="";
				check3.innerHTML="*";
				check4.innerHTML="";
				confirm.innerHTML="";
			}else if (PASSWORD==="") {
				PASSWORD=0;
				
				const input1=document.querySelectorAll("input");
				input1[3].placeholder="input confirm password";
		
		
				check1.innerHTML="";
				check2.innerHTML="";
				check3.innerHTML="";
				check4.innerHTML="*";
				confirm.innerHTML="";
			}
			
			else{
				check1.innerHTML="";
				check2.innerHTML="";
				check3.innerHTML="";
				check4.innerHTML="";
				confirm.innerHTML=" login click here";
				const changePhoto=document.querySelector("img");
			changePhoto.src=("profile.jpg");
		   
				
			}
			
		}