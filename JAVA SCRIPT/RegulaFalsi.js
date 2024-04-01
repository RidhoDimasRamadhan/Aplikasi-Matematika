
 
        document.getElementById('buttonKiri').onclick= function(){
            var MyKiri = document.getElementById('InputanKiri').value;
            if(MyKiri >0){
                document.getElementById('kiri').innerHTML= MyKiri +'x';
            }else if (MyKiri<0){
                document.getElementById('kiri').innerHTML= MyKiri +'x';
            }else if(Mykiri = "0" || MyKiri == 0){
                document.getElementById('kiri').innerHTML= 'x';
            }else{
                alert('Anda harus memasukan angka');
            }
        }
        
        document.getElementById('buttonTengah').onclick= function(){
            var MyTengah = document.getElementById('InputanTengah').value;
            if(MyTengah > 0){
                document.getElementById('tengah').innerHTML= '+' + MyTengah +'x';
            }else if (MyTengah < 0){
                document.getElementById('tengah').innerHTML= MyTengah +'x';
            }else{
                alert('Anda harus memasukan angka');
            }
        }
        
        document.getElementById('buttonKanan').onclick= function(){
            var MyKanan = document.getElementById('InputanKanan').value;
            if(MyKanan > 0){
                document.getElementById('kanan').innerHTML= '+' + MyKanan ;
            }else if(MyKanan < 0 ){
                document.getElementById('kanan').innerHTML = MyKanan ;
            }else{
                alert('Anda harus memasukan angka');
            }
        }
        
        document.getElementById('buttonPalingKanan').onclick= function(){
            var MyPalingKanan = document.getElementById('InputanPalingKanan').value;
            if(MyPalingKanan > 0){
                document.getElementById('PalingKanan').innerHTML=MyPalingKanan;
            }else if(MyPalingKanan < 0 ){
                document.getElementById('PalingKanan').innerHTML = MyPalingKanan;
            }else{
                alert('Anda harus memasukan angka');
            }
        }
        
            
                    document.getElementById('tekan').onclick= function()
                    {      
                       
                        let nama = parseFloat(document.getElementById('xninput').value);
                        let bee = parseFloat(document.getElementById('xn+1input').value);
                        let kenadeh = parseFloat(document.getElementById('problemm').value);

                    let MyKirii = parseFloat(document.getElementById('InputanKiri').value);
                    let MyTengahh = parseFloat(document.getElementById('InputanTengah').value);
                    let MyKanann = parseFloat(document.getElementById('InputanKanan').value);
                    let MyPalingKanann = parseFloat(document.getElementById('InputanPalingKanan').value);

                        function falsi(x)
                        {
                            let fx =(MyKirii*x**MyPalingKanann)+(MyTengahh*x)+MyKanann;
                            return fx;
                        }
                        
                        function regulaFalsi(a, b){
                            document.write(" <div class='navbar' style='position: relative;background-color: rgb(235, 235, 235);width: 100%;height: 4rem;z-index: 111111;box-shadow: 0 2px 7px .4px rgb(165, 160, 160);margin-bottom : 20px;'><div class='link' style='position: absolute;left: 4rem; margin-top:1rem'> <a href='/HTML/RegulaFalsi.html'' style='text-decoration: none;text-align: center;color: #000000;font-weight: 1000;font-family: Arial;'>Back</a></div></div>")
                            if (falsi(a) * falsi(b) >= 0){
                                document.write("<h3> Tidak bisa dilanjutkan </h3>");
                                return;
                            }
                            
                            let i = 1;
                            var z;
                            do{
                                z = ((a*falsi(b) - b*falsi(a))/ (falsi(b) - falsi(a)));
                
                                document.write(" <table style = 'font-family: arial, sans-serif;border-collapse: collapse;width: 100%;border: 1px solid #000;margin-bottom : 40px'> ");;
//------------^ // Not sure but ; is a must in some places.
document.write("<thead  bgcolor ='#e7bdfd' style = 'border: 3px solid #000;'>");
document.write("<tr height = '50px' width = '150px'>");
    document.write(" <th>No</th>")
    document.write(" <th>X<sub>n</sub></th>")
    document.write(" <th>X<sub>n+1</sub></th>")
    document.write(" <th>F(X<sub>n</sub>)</th>")
    document.write(" <th>F(X<sub>n+1</sub>)</th>")
    document.write(" <th>X<sub>mid</sub></th>")
    document.write(" <th>F(X<sub>mid</sub>)</th>")
document.write("</tr>");
document.write("</thead>");
                
                                    document.write("<tbody height = '60px '  style = 'border: 1px solid #dd1010;margin-bottom : 120px'")
                                        document.write("<tr style = 'border: 1px solid #dd1010;margin-bottom : 120px'>")
                                            document.write("<td style = 'border: 1px solid #000;text-align : center'>"+ i +"</td>")
                                            document.write("<td style = 'border: 1px solid #000;text-align : center'>"+a.toFixed(4)+"</td>")
                                            document.write("<td style = 'border: 1px solid #000;text-align : center'>"+b.toFixed(4)+"</td>")
                                            document.write("<td style = 'border: 1px solid #000;text-align : center'>"+falsi(a).toFixed(4)+"</td>")
                                            document.write("<td style = 'border: 1px solid #000;text-align : center'>"+falsi(b).toFixed(4)+"</td>")
                                            document.write("<td style = 'border: 1px solid #000;text-align : center'>"+z.toFixed(4)+"</td>")
                                            document.write("<td style = 'border: 1px solid #000;text-align : center'>"+falsi(z).toFixed(4)+"</td>")
                                        document.write("</tr>")
                                    document.write("</tbody>")
                                document.write("</table>")
                                
                               
                                if (falsi(z) == 0.0){
                                    break;
                                }else if(falsi(z)*falsi(a)<= 0){
                                    b = z;
                                } else{
                                    a = z;
                                }
                                
                            i++;
                                
                          
                            }while(Math.abs(falsi(z)) > kenadeh)
                
                            document.write("<h3 style = 'margin-top : -1rem;'> Solusi Persamaan Non Linear : "+"<span style = 'color : orange; font-size : 1.5rem'>"+ z.toFixed(4) +"</span>"+ "</h3>");
                            
                        } 
                        
                        let a = nama;
                        let b = bee;
                        regulaFalsi(a ,b);
                    }       
        