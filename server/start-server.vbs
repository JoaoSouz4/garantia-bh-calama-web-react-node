Set WshShell = CreateObject("WScript.Shell")
WshShell.Run "cmd /c cd /d ""%USERPROFILE%\Desktop\app\garantia-bh-calama-web-react-node\server"" && npm run dev", 0, False
Set WshShell = Nothing