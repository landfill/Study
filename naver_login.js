/* IE������Ʈ ���� */
var objIE = WScript.CreateObject("InternetExplorer.Application");

/* Ȩ������ ���� */
/* ���̹� �α��� �������� ���� */ 
objIE.navigate("http://static.nid.naver.com/loginbox.nhn");
/* ȭ���� ǥ�� */
objIE.visible = true;                                                      

/* ȭ�� �ε��� ���������� ��ũ��Ʈ ���� */
while(objIE.busy) ;
while(objIE.Document.readyState != "complete") ;

/* ����1�ܰ�� ���� */
objIE.Document.getElementById('m2b').click();
/* ID�Է� */
objIE.Document.all("id").value = "���̵�";
/* ��ȣ �Է� */
objIE.Document.all("pw").value = "�н�����";
/* �α��� ���� */
objIE.Document.frmNIDLogin.submit();


