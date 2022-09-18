/* IE오브젝트 생성 */
var objIE = WScript.CreateObject("InternetExplorer.Application");

/* 홈페이지 접속 */
/* 네이버 로그인 페이지에 접속 */ 
objIE.navigate("http://static.nid.naver.com/loginbox.nhn");
/* 화면을 표시 */
objIE.visible = true;                                                      

/* 화면 로딩이 끝날때까지 스크립트 정지 */
while(objIE.busy) ;
while(objIE.Document.readyState != "complete") ;

/* 보안1단계로 설정 */
objIE.Document.getElementById('m2b').click();
/* ID입력 */
objIE.Document.all("id").value = "아이디";
/* 암호 입력 */
objIE.Document.all("pw").value = "패스워드";
/* 로그인 실행 */
objIE.Document.frmNIDLogin.submit();


