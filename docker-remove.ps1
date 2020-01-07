$host.UI.RawUI.BackgroundColor = "Gray"
$host.UI.RawUI.ForegroundColor = "Red"
Write-Output 'DELETE CONTAINER node1'
docker rm node1 -f
[Console]::ResetColor()
Write-Output ' '
