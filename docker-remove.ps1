$host.UI.RawUI.BackgroundColor = "Gray"
$host.UI.RawUI.ForegroundColor = "Red"
Write-Output 'DELETE CONTAINER gateway1'
docker rm gateway1 -f
[Console]::ResetColor()
Write-Output ' '
